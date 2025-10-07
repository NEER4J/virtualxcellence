-- Fix Row Level Security for leads table
-- Run this in your Supabase SQL editor

-- Option 1: Disable RLS for leads table (simplest solution)
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Option 2: If you want to keep RLS enabled, create a policy that allows inserts
-- Uncomment the lines below if you prefer to keep RLS enabled:

-- DROP POLICY IF EXISTS "Allow public inserts" ON public.leads;
-- CREATE POLICY "Allow public inserts" ON public.leads
--     FOR INSERT 
--     WITH CHECK (true);

-- DROP POLICY IF EXISTS "Allow public reads" ON public.leads;
-- CREATE POLICY "Allow public reads" ON public.leads
--     FOR SELECT 
--     USING (true);

-- DROP POLICY IF EXISTS "Allow admin updates" ON public.leads;
-- CREATE POLICY "Allow admin updates" ON public.leads
--     FOR UPDATE 
--     USING (
--         EXISTS (
--             SELECT 1 FROM admin_users 
--             WHERE admin_users.email = auth.jwt() ->> 'email'
--         )
--     );

-- DROP POLICY IF EXISTS "Allow admin deletes" ON public.leads;
-- CREATE POLICY "Allow admin deletes" ON public.leads
--     FOR DELETE 
--     USING (
--         EXISTS (
--             SELECT 1 FROM admin_users 
--             WHERE admin_users.email = auth.jwt() ->> 'email'
--         )
--     );
