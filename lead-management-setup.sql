-- Lead Management System Database Setup
-- Run this script in your Supabase SQL editor

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  source VARCHAR(100) NOT NULL DEFAULT 'Contact Form',
  status VARCHAR(50) NOT NULL DEFAULT 'new',
  priority VARCHAR(50) NOT NULL DEFAULT 'medium',
  assigned_to VARCHAR(255),
  tags TEXT[] DEFAULT '{}',
  notes TEXT,
  lead_score INTEGER DEFAULT 50 CHECK (lead_score >= 0 AND lead_score <= 100),
  last_contacted TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lead_activities table
CREATE TABLE IF NOT EXISTS lead_activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  activity_type VARCHAR(50) NOT NULL DEFAULT 'note',
  description TEXT NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_priority ON leads(priority);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_lead_activities_lead_id ON lead_activities(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_activities_created_at ON lead_activities(created_at);

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
INSERT INTO leads (name, email, message, source, status, priority, lead_score) VALUES
('John Smith', 'john@example.com', 'Interested in your AI automation services', 'Contact Form', 'new', 'high', 75),
('Sarah Johnson', 'sarah@techcorp.com', 'Looking for business transformation consulting', 'Contact Form', 'contacted', 'medium', 60),
('Mike Wilson', 'mike@startup.io', 'Need help with cloud infrastructure setup', 'Contact Form', 'qualified', 'high', 85);

-- Insert sample activities
INSERT INTO lead_activities (lead_id, activity_type, description, created_by) VALUES
((SELECT id FROM leads WHERE email = 'john@example.com' LIMIT 1), 'note', 'Initial contact made via website form', 'admin'),
((SELECT id FROM leads WHERE email = 'sarah@techcorp.com' LIMIT 1), 'note', 'Follow-up call scheduled for next week', 'admin'),
((SELECT id FROM leads WHERE email = 'mike@startup.io' LIMIT 1), 'note', 'Sent proposal for cloud infrastructure project', 'admin');

-- Grant necessary permissions (adjust based on your RLS policies)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (adjust based on your authentication setup)
-- These policies assume you have admin users table
CREATE POLICY "Admin users can manage leads" ON leads
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

CREATE POLICY "Admin users can manage lead activities" ON lead_activities
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
    COUNT(*) FILTER (WHERE status = 'qualified') as qualified_leads,
    COUNT(*) FILTER (WHERE status = 'converted') as converted_leads,
    COUNT(*) FILTER (WHERE status = 'lost') as lost_leads,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as recent_leads,
    AVG(lead_score) as average_lead_score
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
