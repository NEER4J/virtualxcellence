import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email';
import { createClient as createServiceClient } from '@supabase/supabase-js';

interface CareerApplicationData {
  applicant_name: string;
  applicant_email: string;
  applicant_phone?: string;
  cover_letter?: string;
  resume_url?: string;
  portfolio_url?: string;
  linkedin_url?: string;
  experience_years?: string;
  current_position?: string;
  current_company?: string;
  expected_salary?: string;
  availability_date?: string;
  career_post_id: string;
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

    const body: CareerApplicationData = await request.json();
    const { 
      applicant_name, 
      applicant_email, 
      applicant_phone, 
      cover_letter,
      resume_url,
      portfolio_url,
      linkedin_url,
      experience_years,
      current_position,
      current_company,
      expected_salary,
      availability_date,
      career_post_id
    } = body;

    // Validate required fields
    if (!applicant_name || !applicant_email || !career_post_id) {
      return NextResponse.json(
        { error: 'Missing required fields: applicant_name, applicant_email, and career_post_id are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicant_email)) {
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
    
    // Get career post details
    const { data: careerPost, error: careerError } = await supabase
      .from('careers_posts')
      .select('title, location, department, employment_type, experience_level')
      .eq('id', career_post_id)
      .single();

    if (careerError || !careerPost) {
      console.error('Error fetching career post:', careerError);
      return NextResponse.json(
        { error: 'Career post not found' },
        { status: 404 }
      );
    }

    // Basic insert data
    const insertData = {
      career_post_id,
      applicant_name: applicant_name.trim(),
      applicant_email: applicant_email.trim(),
      applicant_phone: applicant_phone?.trim() || null,
      cover_letter: cover_letter?.trim() || null,
      resume_url: resume_url?.trim() || null,
      portfolio_url: portfolio_url?.trim() || null,
      linkedin_url: linkedin_url?.trim() || null,
      experience_years: experience_years ? parseInt(experience_years) : null,
      current_position: current_position?.trim() || null,
      current_company: current_company?.trim() || null,
      expected_salary: expected_salary?.trim() || null,
      availability_date: availability_date?.trim() || null,
      status: 'pending'
    };

    const { error: dbError } = await supabase
      .from('career_applications')
      .insert(insertData);

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save application' },
        { status: 500 }
      );
    }

    // Send emails
    const emailData = {
      applicant_name: applicant_name.trim(),
      applicant_email: applicant_email.trim(),
      applicant_phone: applicant_phone?.trim(),
      cover_letter: cover_letter?.trim(),
      resume_url: resume_url?.trim(),
      portfolio_url: portfolio_url?.trim(),
      linkedin_url: linkedin_url?.trim(),
      experience_years: experience_years ? parseInt(experience_years) : undefined,
      current_position: current_position?.trim(),
      current_company: current_company?.trim(),
      expected_salary: expected_salary?.trim(),
      availability_date: availability_date?.trim(),
      career_title: careerPost.title,
      career_location: careerPost.location,
      career_department: careerPost.department,
      career_employment_type: careerPost.employment_type,
      career_experience_level: careerPost.experience_level
    };
    
    // Send both emails in parallel
    const [applicantEmailSent, adminEmailSent] = await Promise.all([
      emailService.sendCareerApplicationConfirmation(emailData),
      emailService.sendCareerApplicationAdminNotification(emailData)
    ]);

    // Log email results
    console.log('Career email sending results:', {
      applicantEmailSent,
      adminEmailSent,
      timestamp: new Date().toISOString()
    });

    // Return success even if one email fails (database save is the critical part)
    return NextResponse.json({
      success: true,
      message: 'Career application submitted successfully',
      emailStatus: {
        applicantEmailSent,
        adminEmailSent
      }
    });

  } catch (error) {
    console.error('Error processing career application:', error);
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
