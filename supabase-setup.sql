-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create seo_pages table
CREATE TABLE IF NOT EXISTS seo_pages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    page_path TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    keywords TEXT[] DEFAULT '{}',
    og_title TEXT,
    og_description TEXT,
    og_image TEXT,
    og_type TEXT DEFAULT 'website',
    twitter_card TEXT DEFAULT 'summary_large_image',
    twitter_title TEXT,
    twitter_description TEXT,
    twitter_image TEXT,
    canonical_url TEXT,
    robots TEXT DEFAULT 'index, follow',
    schema_markup JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_seo_pages_page_path ON seo_pages(page_path);
CREATE INDEX IF NOT EXISTS idx_seo_pages_updated_at ON seo_pages(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_seo_pages_updated_at 
    BEFORE UPDATE ON seo_pages 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at 
    BEFORE UPDATE ON admin_users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Migration query to add existing users to admin_users table
-- Replace 'your-email@example.com' with the actual email addresses you want to make admin
INSERT INTO admin_users (email, role) 
VALUES 
    ('your-email@example.com', 'super_admin'),
    ('admin2@example.com', 'admin'),
    ('admin3@example.com', 'admin')
ON CONFLICT (email) DO UPDATE SET 
    role = EXCLUDED.role,
    updated_at = NOW();

-- Alternative: Migrate all existing auth.users to admin_users (use with caution)
-- This will make ALL existing users in your Supabase auth system admin users
-- INSERT INTO admin_users (email, role)
-- SELECT email, 'admin'::TEXT as role
-- FROM auth.users
-- WHERE email IS NOT NULL
-- ON CONFLICT (email) DO UPDATE SET 
--     role = 'admin',
--     updated_at = NOW();