import { createClient } from '@/lib/supabase/client'
import { Metadata } from 'next'

export interface SeoData {
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

// Default SEO data fallback
const defaultSeoData: Partial<SeoData> = {
  title: 'Virtual Xcellence - AI, Cloud & Digital Transformation Solutions',
  description: 'Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation.',
  keywords: ['AI solutions', 'cloud transformation', 'digital transformation', 'business automation', 'technology consulting'],
  og_type: 'website',
  twitter_card: 'summary_large_image',
  robots: 'index, follow'
}

/**
 * Fetch SEO data from database based on page path
 */
export async function getSeoData(pagePath: string): Promise<SeoData | null> {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('seo_pages')
      .select('*')
      .eq('page_path', pagePath)
      .single()

    if (error) {
      console.log(`No SEO data found for path: ${pagePath}`)
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching SEO data:', error)
    return null
  }
}

/**
 * Generate Next.js metadata from SEO data
 */
export function generateMetadata(seoData: SeoData | null, fallbackData?: Partial<SeoData>): Metadata {
  const data = seoData || { ...defaultSeoData, ...fallbackData } as SeoData

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
 * Generate dynamic metadata for any page
 * This is the main function to use in your pages
 */
export async function generatePageMetadata(
  pagePath: string, 
  fallbackData?: Partial<SeoData>
): Promise<Metadata> {
  const seoData = await getSeoData(pagePath)
  return generateMetadata(seoData, fallbackData)
}

/**
 * Get current page path from request
 */
export function getPagePath(request: Request): string {
  const url = new URL(request.url)
  return url.pathname
}

/**
 * Generate structured data (JSON-LD) for schema markup
 */
export function generateStructuredData(seoData: SeoData | null, _pageData?: Record<string, unknown>) {
  if (seoData?.schema_markup) {
    return seoData.schema_markup
  }

  // Default structured data
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Xcellence",
    "description": seoData?.description || defaultSeoData.description,
    "url": "https://virtualxcellence.com",
    "logo": "https://virtualxcellence.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/virtualxcellence",
      "https://twitter.com/virtualxcellence"
    ]
  }
}
