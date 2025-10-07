import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createClient()
    
    // Fetch all SEO pages that are included in sitemap
    const { data: seoPages, error } = await supabase
      .from('seo_pages')
      .select('page_path, updated_at')
      .eq('sitemap_included', true)
      .order('updated_at', { ascending: false })

    if (error) {
      console.error('Error fetching SEO pages for sitemap:', error)
      return new NextResponse('Error generating sitemap', { status: 500 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://virtualxcellence.com'
    const currentDate = new Date().toISOString()

    // Default static pages that should always be in sitemap
    const defaultPages = [
      { path: '/about', priority: '0.9', changefreq: 'monthly' },
      { path: '/contact', priority: '0.9', changefreq: 'monthly' },
      { path: '/services', priority: '0.9', changefreq: 'weekly' },
      { path: '/services/ai-automation', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/cybersecurity', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/development', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/business-transformation', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/business-process-outsourcing', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/consultation', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/fractional-cto', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/fractional-cfo', priority: '0.8', changefreq: 'weekly' },
      { path: '/services/integration-and-professional-services', priority: '0.8', changefreq: 'weekly' },
      { path: '/careers', priority: '0.7', changefreq: 'weekly' },
      { path: '/industries/education', priority: '0.7', changefreq: 'monthly' },
      { path: '/industries/finance', priority: '0.7', changefreq: 'monthly' },
      { path: '/industries/healthcare', priority: '0.7', changefreq: 'monthly' },
      { path: '/industries/manufacturing', priority: '0.7', changefreq: 'monthly' },
      { path: '/industries/retail', priority: '0.7', changefreq: 'monthly' },
      { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
      { path: '/terms-conditions', priority: '0.5', changefreq: 'yearly' },
      { path: '/terms-of-sale', priority: '0.5', changefreq: 'yearly' },
      { path: '/refund-policy', priority: '0.5', changefreq: 'yearly' },
      { path: '/sitemap', priority: '0.3', changefreq: 'monthly' }
    ]

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${defaultPages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${seoPages?.map(page => `
  <url>
    <loc>${baseUrl}${page.page_path}</loc>
    <lastmod>${new Date(page.updated_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('') || ''}
</urlset>`

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
