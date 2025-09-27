-- Simplified Lead Management System Database Setup
-- Run this script in your Supabase SQL editor

-- Drop existing tables if they exist (be careful with this in production)
DROP TABLE IF EXISTS lead_activities CASCADE;
DROP TABLE IF EXISTS leads CASCADE;

-- Create simplified leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  source VARCHAR(100) NOT NULL DEFAULT 'Contact Form',
  status VARCHAR(50) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_email ON leads(email);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO leads (name, email, phone, message, source, status) VALUES
('John Smith', 'john@example.com', '+1-555-0123', 'Interested in your AI automation services', 'Contact Form', 'new'),
('Sarah Johnson', 'sarah@techcorp.com', '+1-555-0456', 'Looking for business transformation consulting', 'Contact Form', 'contacted'),
('Mike Wilson', 'mike@startup.io', '+1-555-0789', 'Need help with cloud infrastructure setup', 'Contact Form', 'new');

-- Grant necessary permissions (adjust based on your RLS policies)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (adjust based on your authentication setup)
-- These policies assume you have admin users table
CREATE POLICY "Admin users can manage leads" ON leads
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

-- Create view for lead statistics
CREATE OR REPLACE VIEW lead_stats AS
SELECT 
    COUNT(*) as total_leads,
    COUNT(*) FILTER (WHERE status = 'new') as new_leads,
    COUNT(*) FILTER (WHERE status = 'contacted') as contacted_leads,
    COUNT(*) FILTER (WHERE status = 'converted') as converted_leads,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as recent_leads
FROM leads;

-- Create function to get lead conversion rate
CREATE OR REPLACE FUNCTION get_conversion_rate()
RETURNS DECIMAL AS $$
DECLARE
    total_leads INTEGER;
    converted_leads INTEGER;
    conversion_rate DECIMAL;
BEGIN
    SELECT COUNT(*) INTO total_leads FROM leads;
    SELECT COUNT(*) INTO converted_leads FROM leads WHERE status = 'converted';
    
    IF total_leads = 0 THEN
        RETURN 0;
    END IF;
    
    conversion_rate := (converted_leads::DECIMAL / total_leads::DECIMAL) * 100;
    RETURN ROUND(conversion_rate, 2);
END;
$$ LANGUAGE plpgsql;
