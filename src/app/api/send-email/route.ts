import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email';
import { createClient as createServiceClient } from '@supabase/supabase-js';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Log environment variables (without sensitive data)
    console.log('Environment check:', {
      hasSMTPHost: !!process.env.SMTP_HOST,
      hasSMTPUser: !!process.env.SMTP_USER,
      hasSMTPPass: !!process.env.SMTP_PASS,
      hasAdminEmail: !!process.env.ADMIN_EMAIL,
      smtpHost: process.env.SMTP_HOST,
      smtpUser: process.env.SMTP_USER,
      adminEmail: process.env.ADMIN_EMAIL
    });

    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database first
    // Use service role client to bypass RLS
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    
    const supabase = createServiceClient(supabaseUrl, supabaseServiceKey);
    
    // Basic insert data without status field to avoid column errors
    const insertData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      message: message.trim(),
      source: 'Contact Form'
    };

    const { error: dbError } = await supabase
      .from('leads')
      .insert(insertData)
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save contact information' },
        { status: 500 }
      );
    }

    // Send emails
    const emailData = { name: name.trim(), email: email.trim(), phone: phone?.trim(), message: message.trim() };
    
    // Send both emails in parallel
    const [customerEmailSent, adminEmailSent] = await Promise.all([
      emailService.sendCustomerConfirmation(emailData),
      emailService.sendAdminNotification(emailData)
    ]);

    // Log email results
    console.log('Email sending results:', {
      customerEmailSent,
      adminEmailSent,
      timestamp: new Date().toISOString()
    });

    // Return success even if one email fails (database save is the critical part)
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      emailStatus: {
        customerEmailSent,
        adminEmailSent
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
