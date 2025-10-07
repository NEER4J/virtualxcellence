# Email System Setup Guide

This guide explains how to set up the email system for the Virtual Xcellence contact form.

## Overview

The email system automatically sends two emails when someone submits the contact form:
1. **Customer Confirmation Email** - Sent to the person who submitted the form
2. **Admin Notification Email** - Sent to the admin team for follow-up

## Required Environment Variables

Add these variables to your `.env.local` file:

```env
# SMTP Configuration for Email System
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# SMTP Authentication
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Email (where contact form notifications will be sent)
ADMIN_EMAIL=admin@virtualxcellence.com
```

## SMTP Provider Setup

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `SMTP_PASS`

3. **Configure Environment Variables**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   ADMIN_EMAIL=admin@virtualxcellence.com
   ```

### Other SMTP Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
```

## Email Templates

### Customer Confirmation Email
- Professional, branded design
- Confirms receipt of their message
- Includes their submitted information
- Sets expectations for response time
- Provides contact information

### Admin Notification Email
- Alert-style design for immediate attention
- Complete lead information
- Direct links to contact the customer
- Action items for follow-up
- Timestamp and source information

## Testing the Email System

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Submit a test contact form** at `/contact`

3. **Check both email addresses**:
   - Customer email (the email you used in the form)
   - Admin email (the `ADMIN_EMAIL` you configured)

## Troubleshooting

### Common Issues

1. **"Authentication failed" error**:
   - Check your SMTP credentials
   - For Gmail, ensure you're using an App Password, not your regular password
   - Verify 2FA is enabled on your Gmail account

2. **"Connection timeout" error**:
   - Check your SMTP_HOST and SMTP_PORT
   - Verify your network allows SMTP connections
   - Try different SMTP settings

3. **Emails not being sent**:
   - Check the server logs for error messages
   - Verify all environment variables are set correctly
   - Test with a different SMTP provider

### Debug Mode

To enable detailed logging, add this to your environment:
```env
NODE_ENV=development
```

Check the console logs for detailed error information.

## Security Considerations

1. **Never commit `.env.local`** to version control
2. **Use App Passwords** instead of regular passwords
3. **Restrict SMTP access** to your application only
4. **Monitor email sending** for unusual activity

## Production Deployment

1. **Set environment variables** in your hosting platform
2. **Use a dedicated email service** like SendGrid or Mailgun for better deliverability
3. **Set up email monitoring** to track delivery rates
4. **Configure SPF, DKIM, and DMARC** records for your domain

## Support

If you encounter issues with the email system:
1. Check the server logs for error messages
2. Verify all environment variables are correctly set
3. Test with a simple SMTP client first
4. Contact your hosting provider for SMTP restrictions
