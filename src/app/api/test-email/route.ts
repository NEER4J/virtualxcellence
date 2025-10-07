import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { testEmail } = await request.json();
    
    if (!testEmail) {
      return NextResponse.json(
        { error: 'testEmail is required' },
        { status: 400 }
      );
    }

    // Test data
    const testData = {
      name: 'Test User',
      email: testEmail,
      phone: '+1234567890',
      message: 'This is a test email from the Virtual Xcellence contact form system.'
    };

    // Send test emails
    const [customerEmailSent, adminEmailSent] = await Promise.all([
      emailService.sendCustomerConfirmation(testData),
      emailService.sendAdminNotification(testData)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Test emails sent successfully',
      results: {
        customerEmailSent,
        adminEmailSent,
        testEmail
      }
    });

  } catch (error) {
    console.error('Error sending test emails:', error);
    return NextResponse.json(
      { error: 'Failed to send test emails' },
      { status: 500 }
    );
  }
}
