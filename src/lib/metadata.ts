import { Metadata } from 'next'
import { headers } from 'next/headers'
import { generatePageMetadata } from './seo'

/**
 * Generate metadata for any page automatically
 * This function will be used in layout.tsx to provide automatic SEO
 */
export async function generateDynamicMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'
  
  return generatePageMetadata(pathname)
}

/**
 * Middleware helper to add pathname to headers
 * This helps us get the current page path in server components
 */
export function addPathnameHeader(request: Request): Headers {
  const headers = new Headers(request.headers)
  const url = new URL(request.url)
  headers.set('x-pathname', url.pathname)
  return headers
}
