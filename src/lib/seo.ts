import { createClient } from '@/lib/supabase/server'
import { Metadata } from 'next'

export async function generateSeoMetadata(pagePath: string, fallbackMetadata: Metadata): Promise<Metadata> {
  try {
    const supabase = createClient()
    
    // Try to fetch SEO data for this specific page
    const { data: seoData } = await supabase
      .from('seo_pages')
      .select('*')
      .eq('page_path', pagePath)
      .single()

    if (seoData) {
      return {
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        openGraph: {
          title: seoData.og_title || seoData.title,
          description: seoData.og_description || seoData.description,
          images: seoData.og_image ? [seoData.og_image] : [],
          type: seoData.og_type || 'website',
        },
        twitter: {
          card: seoData.twitter_card || 'summary_large_image',
          title: seoData.twitter_title || seoData.title,
          description: seoData.twitter_description || seoData.description,
          images: seoData.twitter_image ? [seoData.twitter_image] : [],
        },
        robots: seoData.robots || 'index, follow',
        creator: "Virtual Xcellence",
        other: {
          developer: "Virtual Xcellence",
          section: seoData.title,
        },
      }
    }
  } catch (error) {
    console.error('Error fetching SEO data for', pagePath, ':', error)
  }

  // Return fallback metadata if no SEO data found
  return fallbackMetadata
}