import { createClient } from '@/lib/supabase/client'
import { Metadata } from 'next'

export interface RuntimeSeoData {
  id: string
  page_path: string
  title: string
  description: string
  keywords: string[]
  og_title: string | null
  og_description: string | null
  og_image: string | null
  og_type: string | null
  twitter_card: string | null
  twitter_title: string | null
  twitter_description: string | null
  twitter_image: string | null
  canonical_url: string | null
  robots: string | null
  schema_markup: Record<string, unknown> | null
}

/**
 * Runtime SEO data fetcher - fetches fresh data on every request
 * This ensures admin panel changes are reflected immediately
 */
export async function getRuntimeSeoData(pagePath: string): Promise<RuntimeSeoData | null> {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('seo_pages')
      .select('*')
      .eq('page_path', pagePath)
      .single()

    if (error) {
      console.log(`No runtime SEO data found for path: ${pagePath}`)
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching runtime SEO data:', error)
    return null
  }
}

/**
 * Generate runtime metadata that updates immediately
 * This function is called on every request, not just build time
 */
export async function generateRuntimeMetadata(
  pagePath: string,
  fallbackData: {
    title: string
    description: string
    keywords: string[]
    ogImage?: string
    canonicalUrl?: string
  }
): Promise<Metadata> {
  // Always fetch fresh data from database
  const seoData = await getRuntimeSeoData(pagePath)
  
  // Use database data if available, otherwise use fallback
  const data = seoData || {
    title: fallbackData.title,
    description: fallbackData.description,
    keywords: fallbackData.keywords,
    og_title: null,
    og_description: null,
    og_image: fallbackData.ogImage || null,
    og_type: 'website',
    twitter_card: 'summary_large_image',
    twitter_title: null,
    twitter_description: null,
    twitter_image: null,
    canonical_url: fallbackData.canonicalUrl || null,
    robots: 'index, follow',
    schema_markup: null
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    robots: data.robots || 'index, follow',
    openGraph: {
      title: data.og_title || data.title,
      description: data.og_description || data.description,
      url: data.canonical_url || undefined,
      siteName: 'Virtual Xcellence',
      images: data.og_image ? [
        {
          url: data.og_image,
          width: 1200,
          height: 630,
          alt: data.og_title || data.title,
        }
      ] : undefined,
      type: data.og_type || 'website',
    },
    twitter: {
      card: data.twitter_card || 'summary_large_image',
      title: data.twitter_title || data.title,
      description: data.twitter_description || data.description,
      images: data.twitter_image ? [data.twitter_image] : undefined,
    },
    alternates: {
      canonical: data.canonical_url || undefined,
    },
    other: {
      'schema:markup': data.schema_markup ? JSON.stringify(data.schema_markup) : undefined,
    },
  }
}

/**
 * Helper function for pages that need immediate SEO updates
 * This is the main function to use for runtime dynamic SEO
 */
export async function createRuntimePageMetadata(
  pagePath: string,
  fallbackData: {
    title: string
    description: string
    keywords: string[]
    ogImage?: string
    canonicalUrl?: string
  }
): Promise<Metadata> {
  return generateRuntimeMetadata(pagePath, fallbackData)
}
