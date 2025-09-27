-- Careers Posts Table
CREATE TABLE IF NOT EXISTS careers_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  location VARCHAR(255),
  employment_type VARCHAR(100) NOT NULL, -- 'full-time', 'part-time', 'contract', 'internship'
  experience_level VARCHAR(100) NOT NULL, -- 'entry', 'mid', 'senior', 'executive'
  department VARCHAR(255),
  salary_range VARCHAR(100),
  benefits TEXT[],
  requirements TEXT[],
  responsibilities TEXT[],
  skills_required TEXT[],
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  application_deadline TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Career Applications Table
CREATE TABLE IF NOT EXISTS career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  career_post_id UUID REFERENCES careers_posts(id) ON DELETE CASCADE,
  applicant_name VARCHAR(255) NOT NULL,
  applicant_email VARCHAR(255) NOT NULL,
  applicant_phone VARCHAR(50),
  cover_letter TEXT,
  resume_url TEXT,
  portfolio_url TEXT,
  linkedin_url TEXT,
  experience_years INTEGER,
  current_position VARCHAR(255),
  current_company VARCHAR(255),
  expected_salary VARCHAR(100),
  availability_date DATE,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'reviewed', 'shortlisted', 'rejected', 'hired'
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_careers_posts_slug ON careers_posts(slug);
CREATE INDEX IF NOT EXISTS idx_careers_posts_active ON careers_posts(is_active);
CREATE INDEX IF NOT EXISTS idx_careers_posts_featured ON careers_posts(is_featured);
CREATE INDEX IF NOT EXISTS idx_careers_posts_employment_type ON careers_posts(employment_type);
CREATE INDEX IF NOT EXISTS idx_careers_posts_experience_level ON careers_posts(experience_level);
CREATE INDEX IF NOT EXISTS idx_careers_posts_department ON careers_posts(department);
CREATE INDEX IF NOT EXISTS idx_careers_posts_created_at ON careers_posts(created_at);

CREATE INDEX IF NOT EXISTS idx_career_applications_post_id ON career_applications(career_post_id);
CREATE INDEX IF NOT EXISTS idx_career_applications_status ON career_applications(status);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_careers_posts_updated_at 
    BEFORE UPDATE ON careers_posts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_career_applications_updated_at 
    BEFORE UPDATE ON career_applications 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample career posts
INSERT INTO careers_posts (
  title, 
  slug, 
  description, 
  content, 
  location, 
  employment_type, 
  experience_level, 
  department, 
  salary_range, 
  benefits, 
  requirements, 
  responsibilities, 
  skills_required,
  is_featured
) VALUES 
(
  'Senior AI/ML Engineer',
  'senior-ai-ml-engineer',
  'Join our team as a Senior AI/ML Engineer and help build cutting-edge AI solutions that transform businesses.',
  'We are looking for a passionate Senior AI/ML Engineer to join our innovative team. You will be responsible for designing, developing, and deploying machine learning models and AI solutions that drive business value for our clients.

As a Senior AI/ML Engineer at Virtual Xcellence, you will work on diverse projects ranging from natural language processing to computer vision, and from recommendation systems to predictive analytics. You will collaborate with cross-functional teams to understand business requirements and translate them into technical solutions.

This role offers the opportunity to work with the latest AI technologies, contribute to open-source projects, and make a real impact on how businesses operate in the digital age.',
  'Remote / Toronto, ON',
  'full-time',
  'senior',
  'Engineering',
  '$120,000 - $160,000 CAD',
  ARRAY['Health & Dental Insurance', 'Flexible Work Hours', 'Professional Development Budget', 'Stock Options', 'Remote Work Support'],
  ARRAY['5+ years of experience in AI/ML', 'Strong programming skills in Python', 'Experience with TensorFlow or PyTorch', 'Bachelor''s degree in Computer Science or related field'],
  ARRAY['Design and implement ML models', 'Collaborate with data scientists and engineers', 'Optimize model performance', 'Mentor junior team members'],
  ARRAY['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes', 'SQL', 'Git'],
  true
),
(
  'Cloud Solutions Architect',
  'cloud-solutions-architect',
  'Lead cloud transformation initiatives and design scalable, secure cloud architectures for enterprise clients.',
  'We are seeking an experienced Cloud Solutions Architect to join our team and help our clients navigate their cloud transformation journey. In this role, you will design, implement, and optimize cloud solutions that enable businesses to scale efficiently and securely.

You will work closely with clients to understand their technical requirements, business objectives, and constraints to design cloud architectures that meet their needs. You will also provide technical leadership to development teams and ensure best practices are followed throughout the implementation process.

This position offers the opportunity to work with leading cloud platforms (AWS, Azure, GCP) and cutting-edge technologies while helping organizations achieve their digital transformation goals.',
  'Remote / Vancouver, BC',
  'full-time',
  'senior',
  'Architecture',
  '$130,000 - $180,000 CAD',
  ARRAY['Comprehensive Health Benefits', 'Flexible Schedule', 'Learning & Development', 'Performance Bonus', 'Work From Home'],
  ARRAY['7+ years of cloud architecture experience', 'Certifications in AWS, Azure, or GCP', 'Strong communication skills', 'Experience with enterprise clients'],
  ARRAY['Design cloud architectures', 'Lead technical discussions with clients', 'Provide technical guidance to teams', 'Ensure security and compliance'],
  ARRAY['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Security'],
  true
),
(
  'Digital Marketing Specialist',
  'digital-marketing-specialist',
  'Drive digital marketing initiatives and help clients grow their online presence through strategic marketing campaigns.',
  'Join our marketing team as a Digital Marketing Specialist and help our clients achieve their growth objectives through innovative digital marketing strategies. You will be responsible for developing and executing comprehensive digital marketing campaigns across various channels.

In this role, you will work with clients to understand their business goals, target audience, and competitive landscape to create effective marketing strategies. You will manage campaigns across social media, search engines, email marketing, and other digital channels while analyzing performance and optimizing for results.

This position offers the opportunity to work with diverse clients across different industries and contribute to their success through data-driven marketing strategies.',
  'Remote / Montreal, QC',
  'full-time',
  'mid',
  'Marketing',
  '$60,000 - $80,000 CAD',
  ARRAY['Health Insurance', 'Flexible Hours', 'Marketing Budget', 'Team Events', 'Career Growth'],
  ARRAY['3+ years of digital marketing experience', 'Experience with Google Ads and Facebook Ads', 'Analytics and reporting skills', 'Bachelor''s degree in Marketing or related field'],
  ARRAY['Develop marketing strategies', 'Manage advertising campaigns', 'Analyze campaign performance', 'Create marketing content'],
  ARRAY['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEO', 'Content Marketing', 'Email Marketing'],
  false
);

-- Grant necessary permissions (adjust based on your RLS policies)
-- ALTER TABLE careers_posts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to careers_posts (read-only for public)
-- CREATE POLICY "Public can view active careers posts" ON careers_posts
--   FOR SELECT USING (is_active = true);

-- Create policies for career applications (insert for public, full access for admins)
-- CREATE POLICY "Public can apply for careers" ON career_applications
--   FOR INSERT WITH CHECK (true);

-- CREATE POLICY "Admins can manage applications" ON career_applications
--   FOR ALL USING (auth.role() = 'admin');
