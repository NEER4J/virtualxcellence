'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getSeoData, generateStructuredData } from '@/lib/seo'
import { SeoData } from '@/lib/seo'

export default function SeoHead() {
  const pathname = usePathname()
  const [seoData, setSeoData] = useState<SeoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const data = await getSeoData(pathname)
        setSeoData(data)
      } catch (error) {
        console.error('Error fetching SEO data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSeoData()
  }, [pathname])

  useEffect(() => {
    if (loading || !seoData) return

    // Update page title
    if (seoData.title) {
      document.title = seoData.title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = seoData.description
      document.head.appendChild(meta)
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords.join(', '))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = seoData.keywords.join(', ')
      document.head.appendChild(meta)
    }

    // Update Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`)
      if (existing) {
        existing.setAttribute('content', content)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    if (seoData.og_title) updateOgTag('og:title', seoData.og_title)
    if (seoData.og_description) updateOgTag('og:description', seoData.og_description)
    if (seoData.og_image) updateOgTag('og:image', seoData.og_image)
    if (seoData.og_type) updateOgTag('og:type', seoData.og_type)

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`)
      if (existing) {
        existing.setAttribute('content', content)
      } else {
        const meta = document.createElement('meta')
        meta.name = name
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    if (seoData.twitter_card) updateTwitterTag('twitter:card', seoData.twitter_card)
    if (seoData.twitter_title) updateTwitterTag('twitter:title', seoData.twitter_title)
    if (seoData.twitter_description) updateTwitterTag('twitter:description', seoData.twitter_description)
    if (seoData.twitter_image) updateTwitterTag('twitter:image', seoData.twitter_image)

    // Update canonical URL
    if (seoData.canonical_url) {
      const existingCanonical = document.querySelector('link[rel="canonical"]')
      if (existingCanonical) {
        existingCanonical.setAttribute('href', seoData.canonical_url)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = seoData.canonical_url
        document.head.appendChild(link)
      }
    }

    // Update robots
    if (seoData.robots) {
      const existingRobots = document.querySelector('meta[name="robots"]')
      if (existingRobots) {
        existingRobots.setAttribute('content', seoData.robots)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'robots'
        meta.content = seoData.robots
        document.head.appendChild(meta)
      }
    }

    // Add structured data
    const structuredData = generateStructuredData(seoData)
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

  }, [seoData, loading])

  return null // This component doesn't render anything
}
