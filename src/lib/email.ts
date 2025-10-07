import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface CareerApplicationData {
  applicant_name: string;
  applicant_email: string;
  applicant_phone?: string;
  cover_letter?: string;
  resume_url?: string;
  portfolio_url?: string;
  linkedin_url?: string;
  experience_years?: number;
  current_position?: string;
  current_company?: string;
  expected_salary?: string;
  availability_date?: string;
  career_title: string;
  career_location: string;
  career_department?: string;
  career_employment_type: string;
  career_experience_level: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const config: EmailConfig = {
      host: process.env.SMTP_HOST || 'smtp.resend.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // Port 465 always requires secure connection
      auth: {
        user: process.env.SMTP_USER || 'resend',
        pass: process.env.SMTP_PASS || '',
      },
    };

    // Log SMTP configuration (without password for security)
    console.log('SMTP Configuration:', {
      host: config.host,
      port: config.port,
      secure: config.secure,
      user: config.auth.user,
      hasPassword: !!config.auth.pass,
      passwordLength: config.auth.pass ? config.auth.pass.length : 0
    });

    this.transporter = nodemailer.createTransport(config);
  }

  async sendCustomerConfirmation(data: ContactFormData): Promise<boolean> {
    try {
      const mailOptions = {
        from: {
          name: 'Virtual Xcellence',
          address: process.env.FROM_EMAIL || 'noreply@virtualxcellence.com',
        },
        to: data.email,
        subject: 'Thank you for contacting Virtual Xcellence',
        html: this.getCustomerEmailTemplate(data),
      };

      console.log('Sending customer email to:', data.email);
      console.log('From address:', mailOptions.from.address);
      
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Customer email sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending customer email:', error);
      console.error('Error details:', {
        code: (error as Error & { code?: string })?.code,
        command: (error as Error & { command?: string })?.command,
        response: (error as Error & { response?: string })?.response,
        responseCode: (error as Error & { responseCode?: number })?.responseCode
      });
      return false;
    }
  }

  async sendAdminNotification(data: ContactFormData): Promise<boolean> {
    try {
      const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || '';
      
      const mailOptions = {
        from: {
          name: 'Virtual Xcellence Contact Form',
          address: process.env.FROM_EMAIL || 'noreply@virtualxcellence.com',
        },
        to: adminEmail,
        subject: `New Contact Form Submission from ${data.name}`,
        html: this.getAdminEmailTemplate(data),
      };

      console.log('Sending admin email to:', adminEmail);
      console.log('From address:', mailOptions.from.address);
      
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Admin email sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending admin email:', error);
      console.error('Error details:', {
        code: (error as Error & { code?: string })?.code,
        command: (error as Error & { command?: string })?.command,
        response: (error as Error & { response?: string })?.response,
        responseCode: (error as Error & { responseCode?: number })?.responseCode
      });
      return false;
    }
  }

  async sendCareerApplicationConfirmation(data: CareerApplicationData): Promise<boolean> {
    try {
      const mailOptions = {
        from: {
          name: 'Virtual Xcellence',
          address: process.env.FROM_EMAIL || 'noreply@virtualxcellence.com',
        },
        to: data.applicant_email,
        subject: `Application Received - ${data.career_title} at Virtual Xcellence`,
        html: this.getCareerApplicationEmailTemplate(data),
      };

      console.log('Sending career application confirmation to:', data.applicant_email);
      console.log('From address:', mailOptions.from.address);
      
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Career application confirmation sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending career application confirmation:', error);
      console.error('Error details:', {
        code: (error as Error & { code?: string })?.code,
        command: (error as Error & { command?: string })?.command,
        response: (error as Error & { response?: string })?.response,
        responseCode: (error as Error & { responseCode?: number })?.responseCode
      });
      return false;
    }
  }

  async sendCareerApplicationAdminNotification(data: CareerApplicationData): Promise<boolean> {
    try {
      const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || '';
      
      const mailOptions = {
        from: {
          name: 'Virtual Xcellence Career Portal',
          address: process.env.FROM_EMAIL || 'noreply@virtualxcellence.com',
        },
        to: adminEmail,
        subject: `New Job Application - ${data.career_title}`,
        html: this.getCareerApplicationAdminEmailTemplate(data),
      };

      console.log('Sending career application admin notification to:', adminEmail);
      console.log('From address:', mailOptions.from.address);
      
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Career application admin notification sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending career application admin notification:', error);
      console.error('Error details:', {
        code: (error as Error & { code?: string })?.code,
        command: (error as Error & { command?: string })?.command,
        response: (error as Error & { response?: string })?.response,
        responseCode: (error as Error & { responseCode?: number })?.responseCode
      });
      return false;
    }
  }

  private getCustomerEmailTemplate(data: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Virtual Xcellence</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: left;
          }
          .logo {
            margin-bottom: 20px;
          }
          .logo img {
            height: 60px;
            border-radius: 8px;
          }
          .main-heading {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
          }
          .content-text {
            font-size: 16px;
            color: #4b5563;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .details-box {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .detail-row {
            margin-bottom: 10px;
            font-size: 14px;
          }
          .detail-label {
            font-weight: 600;
            color: #374151;
          }
          .next-steps {
            background: #eff6ff;
            border-left: 4px solid #2563eb;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .next-steps h3 {
            margin-top: 0;
            color: #1e40af;
            font-size: 16px;
          }
          .contact-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .contact-item {
            margin: 8px 0;
            font-size: 14px;
            color: #4b5563;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
                display: inline-block;
    margin-right: 20px;
    color: #6b7280;
    text-decoration: underline;
    font-size: 14px;
          }
          .footer-links {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
          }
          .footer-links a {
    color: #6b7280;
    text-decoration: underline;
    margin-right: 20px;
}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://virtualxcellence.com/assets/imgs/logo/VX-Logo.png" alt="Virtual Xcellence Logo" />
          </div>
          
          <h1 class="main-heading">Thank you for contacting us! 😊</h1>
          
          <div class="content-text">
            Dear ${data.name},<br><br>
            We've received your message and truly appreciate your interest in our services. Our team will review your inquiry and get back to you within 24 hours.
          </div>
          
          <div class="details-box">
            <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Your Message Details:</h3>
            <div class="detail-row">
              <span class="detail-label">Name:</span> ${data.name}
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span> ${data.email}
            </div>
            ${data.phone ? `<div class="detail-row"><span class="detail-label">Phone:</span> ${data.phone}</div>` : ''}
            <div class="detail-row">
              <span class="detail-label">Message:</span><br>
              <div style="margin-top: 5px; font-style: italic; color: #6b7280;">"${data.message}"</div>
            </div>
          </div>
          
          
          <div class="contact-section">
            <h3 style="color: #1f2937; margin-bottom: 15px; font-size: 16px;">Contact Information</h3>
            <div class="contact-item">📧 Email: info@virtualxcellence.com</div>
            <div class="contact-item">📧 Support: support@virtualxcellence.com</div>
            <div class="contact-item">📞 Canada: +1-905-823-7677</div>
            <div class="contact-item">📞 India: +91-8447100088</div>
            <div class="contact-item">🌐 Website: virtualxcellence.com</div>
          </div>
          
          <div class="social-links">
            <p style="margin-bottom: 10px; font-size: 14px; color: #6b7280;">Follow us:</p>
            <a href="https://www.linkedin.com/company/virtualxcellence/" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/vxinnovation" target="_blank">Twitter</a>
            <a href="https://www.facebook.com/vxcellence/" target="_blank">Facebook</a>
          </div>
          
          <div class="footer-links">
            <a href="https://virtualxcellence.com/privacy-policy">Privacy Policy</a>
            <a href="https://virtualxcellence.com/terms-conditions">Terms & Conditions</a>
            <br><br>
            <p style="margin: 10px 0; font-size: 12px;">
              Best regards,<br><strong>The Virtual Xcellence Team</strong><br>
              <em>This is an automated message. Please do not reply to this email.</em>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getAdminEmailTemplate(data: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Virtual Xcellence</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: left;
          }
          .logo {
            margin-bottom: 20px;
          }
          .logo img {
            height: 60px;
            border-radius: 8px;
          }
          .header {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .main-heading {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .alert {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            color: #92400e;
            text-align: left;
          }
          .submission-details {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .detail-row {
            margin-bottom: 10px;
            font-size: 14px;
          }
          .detail-label {
            font-weight: 600;
            color: #374151;
            display: inline-block;
            width: 80px;
          }
          .detail-value {
            color: #1f2937;
          }
          .message-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #dc2626;
            margin: 15px 0;
            font-style: italic;
            line-height: 1.7;
            text-align: left;
          }
          .action-required {
            background: #dbeafe;
            border: 1px solid #3b82f6;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .action-required h3 {
            margin-top: 0;
            color: #1e40af;
            font-size: 16px;
          }
          .contact-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .contact-item {
            margin: 8px 0;
            font-size: 14px;
            color: #4b5563;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
               display: inline-block;
    margin-right: 20px;
    color: #6b7280;
    text-decoration: underline;
    font-size: 14px;
          }
          .footer-links {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
          }
         .footer-links a {
    color: #6b7280;
    text-decoration: underline;
    margin-right: 20px;
}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://virtualxcellence.com/assets/imgs/logo/VX-Logo.png" alt="Virtual Xcellence Logo" />
          </div>
          
          <h1 class="main-heading">New Contact Form Submission</h1>
          
          <div class="submission-details">
            <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Lead Information</h3>
            
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span class="detail-value">${data.name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">
                <a href="mailto:${data.email}" style="color: #dc2626; text-decoration: none;">
                  ${data.email}
                </a>
              </span>
            </div>
            
            ${data.phone ? `
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">
                <a href="tel:${data.phone}" style="color: #dc2626; text-decoration: none;">
                  ${data.phone}
                </a>
              </span>
            </div>
            ` : ''}
            
            <div class="detail-row">
              <span class="detail-label">Source:</span>
              <span class="detail-value">Contact Form</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${new Date().toLocaleString()}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Message:</span><br>
              <div style="margin-top: 5px; font-style: italic; color: #6b7280;">"${data.message}"</div>
            </div>
          </div>
          
          
          <div class="social-links">
            <p style="margin-bottom: 10px; font-size: 14px; color: #6b7280;">Follow us:</p>
            <a href="https://www.linkedin.com/company/virtualxcellence/" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/vxinnovation" target="_blank">Twitter</a>
            <a href="https://www.facebook.com/vxcellence/" target="_blank">Facebook</a>
          </div>
          
          <div class="footer-links">
            <a href="https://virtualxcellence.com/privacy-policy">Privacy Policy</a>
            <a href="https://virtualxcellence.com/terms-conditions">Terms & Conditions</a>
            <br><br>
            <p style="margin: 10px 0; font-size: 12px;">
              This notification was automatically generated by the Virtual Xcellence contact form system.<br>
              <em>To manage leads, visit the admin dashboard at your earliest convenience.</em>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getCareerApplicationEmailTemplate(data: CareerApplicationData): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received - Virtual Xcellence</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: left;
          }
          .logo {
            margin-bottom: 20px;
          }
          .logo img {
            height: 60px;
            border-radius: 8px;
          }
          .main-heading {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
          }
          .content-text {
            font-size: 16px;
            color: #4b5563;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .application-details {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .detail-row {
            margin-bottom: 10px;
            font-size: 14px;
          }
          .detail-label {
            font-weight: 600;
            color: #374151;
          }
          .contact-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .contact-item {
            margin: 8px 0;
            font-size: 14px;
            color: #4b5563;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin-right: 20px;
            color: #6b7280;
            text-decoration: underline;
            font-size: 14px;
          }
          .footer-links {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
          }
          .footer-links a {
            color: #6b7280;
            text-decoration: underline;
            margin-right: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://virtualxcellence.com/assets/imgs/logo/VX-Logo.png" alt="Virtual Xcellence Logo" />
          </div>
          
          <h1 class="main-heading">Application Received! 🎉</h1>
          
          <div class="content-text">
            Dear ${data.applicant_name},<br><br>
            Thank you for your interest in joining the Virtual Xcellence team! We've successfully received your application for the <strong>${data.career_title}</strong> position.
          </div>
          
          <div class="application-details">
            <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Application Details:</h3>
            <div class="detail-row">
              <span class="detail-label">Position:</span> ${data.career_title}
            </div>
            <div class="detail-row">
              <span class="detail-label">Location:</span> ${data.career_location}
            </div>
            ${data.career_department ? `<div class="detail-row"><span class="detail-label">Department:</span> ${data.career_department}</div>` : ''}
            <div class="detail-row">
              <span class="detail-label">Employment Type:</span> ${data.career_employment_type}
            </div>
            <div class="detail-row">
              <span class="detail-label">Experience Level:</span> ${data.career_experience_level}
            </div>
            <div class="detail-row">
              <span class="detail-label">Applicant:</span> ${data.applicant_name}
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span> ${data.applicant_email}
            </div>
            ${data.applicant_phone ? `<div class="detail-row"><span class="detail-label">Phone:</span> ${data.applicant_phone}</div>` : ''}
            ${data.experience_years ? `<div class="detail-row"><span class="detail-label">Experience:</span> ${data.experience_years} years</div>` : ''}
            ${data.current_position ? `<div class="detail-row"><span class="detail-label">Current Position:</span> ${data.current_position}</div>` : ''}
            ${data.current_company ? `<div class="detail-row"><span class="detail-label">Current Company:</span> ${data.current_company}</div>` : ''}
          </div>
          
          <div class="content-text">
            Our HR team will review your application and get back to you within 5-7 business days. We're excited about the possibility of you joining our team!
          </div>
          
          <div class="contact-section">
            <h3 style="color: #1f2937; margin-bottom: 15px; font-size: 16px;">Contact Information</h3>
            <div class="contact-item">📧 Email: info@virtualxcellence.com</div>
            <div class="contact-item">📧 Support: support@virtualxcellence.com</div>
            <div class="contact-item">📞 Canada: +1-905-823-7677</div>
            <div class="contact-item">📞 India: +91-8447100088</div>
            <div class="contact-item">🌐 Website: virtualxcellence.com</div>
          </div>
          
          <div class="social-links">
            <p style="margin-bottom: 10px; font-size: 14px; color: #6b7280;">Follow us:</p>
            <a href="https://www.linkedin.com/company/virtualxcellence/" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/vxinnovation" target="_blank">Twitter</a>
            <a href="https://www.facebook.com/vxcellence/" target="_blank">Facebook</a>
          </div>
          
          <div class="footer-links">
            <a href="https://virtualxcellence.com/privacy-policy">Privacy Policy</a>
            <a href="https://virtualxcellence.com/terms-conditions">Terms & Conditions</a>
            <br><br>
            <p style="margin: 10px 0; font-size: 12px;">
              Best regards,<br><strong>The Virtual Xcellence HR Team</strong><br>
              <em>This is an automated message. Please do not reply to this email.</em>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getCareerApplicationAdminEmailTemplate(data: CareerApplicationData): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application - Virtual Xcellence</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: left;
          }
          .logo {
            margin-bottom: 20px;
          }
          .logo img {
            height: 60px;
            border-radius: 8px;
          }
          .main-heading {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
          }
          .application-details {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .detail-row {
            margin-bottom: 10px;
            font-size: 14px;
          }
          .detail-label {
            font-weight: 600;
            color: #374151;
            display: inline-block;
            width: 120px;
          }
          .detail-value {
            color: #1f2937;
          }
          .cover-letter {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
            margin: 15px 0;
            font-style: italic;
            line-height: 1.7;
          }
          .contact-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .contact-item {
            margin: 8px 0;
            font-size: 14px;
            color: #4b5563;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin-right: 20px;
            color: #6b7280;
            text-decoration: underline;
            font-size: 14px;
          }
          .footer-links {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
          }
          .footer-links a {
            color: #6b7280;
            text-decoration: underline;
            margin-right: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://virtualxcellence.com/assets/imgs/logo/VX-Logo.png" alt="Virtual Xcellence Logo" />
          </div>
          
          <h1 class="main-heading">New Job Application</h1>
          
          <div class="application-details">
            <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Application Information</h3>
            
            <div class="detail-row">
              <span class="detail-label">Position:</span>
              <span class="detail-value">${data.career_title}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Location:</span>
              <span class="detail-value">${data.career_location}</span>
            </div>
            
            ${data.career_department ? `
            <div class="detail-row">
              <span class="detail-label">Department:</span>
              <span class="detail-value">${data.career_department}</span>
            </div>
            ` : ''}
            
            <div class="detail-row">
              <span class="detail-label">Employment Type:</span>
              <span class="detail-value">${data.career_employment_type}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Experience Level:</span>
              <span class="detail-value">${data.career_experience_level}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Applicant:</span>
              <span class="detail-value">${data.applicant_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">
                <a href="mailto:${data.applicant_email}" style="color: #2563eb; text-decoration: none;">
                  ${data.applicant_email}
                </a>
              </span>
            </div>
            
            ${data.applicant_phone ? `
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">
                <a href="tel:${data.applicant_phone}" style="color: #2563eb; text-decoration: none;">
                  ${data.applicant_phone}
                </a>
              </span>
            </div>
            ` : ''}
            
            ${data.experience_years ? `
            <div class="detail-row">
              <span class="detail-label">Experience:</span>
              <span class="detail-value">${data.experience_years} years</span>
            </div>
            ` : ''}
            
            ${data.current_position ? `
            <div class="detail-row">
              <span class="detail-label">Current Position:</span>
              <span class="detail-value">${data.current_position}</span>
            </div>
            ` : ''}
            
            ${data.current_company ? `
            <div class="detail-row">
              <span class="detail-label">Current Company:</span>
              <span class="detail-value">${data.current_company}</span>
            </div>
            ` : ''}
            
            ${data.expected_salary ? `
            <div class="detail-row">
              <span class="detail-label">Expected Salary:</span>
              <span class="detail-value">${data.expected_salary}</span>
            </div>
            ` : ''}
            
            ${data.availability_date ? `
            <div class="detail-row">
              <span class="detail-label">Availability:</span>
              <span class="detail-value">${data.availability_date}</span>
            </div>
            ` : ''}
            
            <div class="detail-row">
              <span class="detail-label">Applied:</span>
              <span class="detail-value">${new Date().toLocaleString()}</span>
            </div>
          </div>
          
          ${data.cover_letter ? `
          <div class="cover-letter">
            <strong>Cover Letter:</strong><br><br>
            "${data.cover_letter}"
          </div>
          ` : ''}
          
          <div class="contact-section">
            <h3 style="color: #1f2937; margin-bottom: 15px; font-size: 16px;">Contact Information</h3>
            <div class="contact-item">📧 Email: info@virtualxcellence.com</div>
            <div class="contact-item">📧 Support: support@virtualxcellence.com</div>
            <div class="contact-item">📞 Canada: +1-905-823-7677</div>
            <div class="contact-item">📞 India: +91-8447100088</div>
            <div class="contact-item">🌐 Website: virtualxcellence.com</div>
          </div>
          
          <div class="social-links">
            <p style="margin-bottom: 10px; font-size: 14px; color: #6b7280;">Follow us:</p>
            <a href="https://www.linkedin.com/company/virtualxcellence/" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/vxinnovation" target="_blank">Twitter</a>
            <a href="https://www.facebook.com/vxcellence/" target="_blank">Facebook</a>
          </div>
          
          <div class="footer-links">
            <a href="https://virtualxcellence.com/privacy-policy">Privacy Policy</a>
            <a href="https://virtualxcellence.com/terms-conditions">Terms & Conditions</a>
            <br><br>
            <p style="margin: 10px 0; font-size: 12px;">
              This notification was automatically generated by the Virtual Xcellence career portal.<br>
              <em>To manage applications, visit the admin dashboard at your earliest convenience.</em>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export const emailService = new EmailService();
export default EmailService;
