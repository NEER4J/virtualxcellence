'use client'

import { useEffect } from 'react'
import { generateStructuredData } from '@/lib/seo'
import { SeoData } from '@/lib/seo'

interface StructuredDataProps {
  seoData?: SeoData | null
  pageData?: Record<string, unknown>
}

export default function StructuredData({ seoData, pageData }: StructuredDataProps) {
  useEffect(() => {
    const structuredData = generateStructuredData(seoData, pageData)
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
    return () => {
      // Cleanup on unmount
      const script = document.querySelector('script[type="application/ld+json"]')
      if (script) {
        script.remove()
      }
    }
  }, [seoData, pageData])

  return null // This component doesn't render anything
}
