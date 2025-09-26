import { generatePageSeoMetadata } from './server-seo'
import { Metadata } from 'next'

/**
 * Helper function for pages that want custom SEO with fallback
 * Uses server-side rendering for immediate SEO without flash
 */
export async function createPageMetadata(
  pagePath: string,
  customData?: {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    canonicalUrl?: string
  }
): Promise<Metadata> {
  return generatePageSeoMetadata(pagePath, customData)
}

/**
 * Example usage in a page:
 * 
 * export async function generateMetadata(): Promise<Metadata> {
 *   return createPageMetadata('/about', {
 *     title: 'About Us - Custom Title',
 *     description: 'Custom description for about page',
 *     keywords: ['about', 'company', 'team'],
 *     ogImage: 'https://example.com/about-image.jpg'
 *   })
 * }
 */
