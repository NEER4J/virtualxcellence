'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { SeoPage } from '@/types/database.types'
import Link from 'next/link'
import { FileText, Home, ChevronRight } from 'lucide-react'
import Head from 'next/head'
import '@/scss/sitemap.scss'

export default function SitemapPage() {
  const [seoPages, setSeoPages] = useState<SeoPage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('seo_pages')
          .select('*')
          .eq('sitemap_included', true)
          .order('page_path', { ascending: true })

        if (error) throw error
        setSeoPages(data || [])
      } catch (error) {
        console.error('Error fetching pages:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPages()
  }, [])

  // Group pages by category for better organization
  const organizePages = (pages: SeoPage[]) => {
    const organized: { [key: string]: SeoPage[] } = {
      'Main Pages': [],
      'Services': [],
      'Company': [],
      'Legal': [],
      'Other': []
    }

    pages.forEach(page => {
      const path = page.page_path.toLowerCase()
      
      if (path === '/' || path === '/home') {
        organized['Main Pages'].push(page)
      } else if (path.includes('/services')) {
        organized['Services'].push(page)
      } else if (path.includes('/about') || path.includes('/contact') || path.includes('/careers')) {
        organized['Company'].push(page)
      } else if (path.includes('/privacy') || path.includes('/terms') || path.includes('/policy')) {
        organized['Legal'].push(page)
      } else {
        organized['Other'].push(page)
      }
    })

    return organized
  }

  const organizedPages = organizePages(seoPages)

  if (loading) {
    return (
      <div className="sitemap-page">
        <div className="loading-container">
          <div className="loading-content">
            <div className="spinner"></div>
            <p className="loading-text">Loading sitemap...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Sitemap || Virtual Xcellence - AI, Automation & Business Transformation</title>
        <meta name="description" content="Find all pages on Virtual Xcellence website organized by category. Explore our comprehensive technology services including AI automation, cybersecurity, cloud infrastructure, and business transformation." />
        <meta name="keywords" content="Virtual Xcellence sitemap, website sitemap, technology services sitemap, AI automation sitemap, cybersecurity sitemap, cloud infrastructure sitemap, business transformation sitemap, fractional CTO sitemap, fractional CFO sitemap, business process outsourcing sitemap, digital transformation sitemap, technology consulting sitemap, website navigation, site structure, page directory" />
        <meta name="creator" content="Virtual Xcellence" />
      </Head>
      <div className="sitemap-page">
        <div className="container">
        {/* Header */}
        <div className="sitemap-header">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="chevron" />
            <span>Sitemap</span>
          </div>
          <h1 className="title">Sitemap</h1>
          <p className="description">Find all pages on our website organized by category</p>
        </div>

        {/* Sitemap Content */}
        <div className="sitemap-content">
          {Object.entries(organizedPages).map(([category, pages]) => {
            if (pages.length === 0) return null
            
            return (
              <div key={category} className="category-card">
                <h2 className="category-header">
                  <FileText className="icon" />
                  {category}
                </h2>
                
                <ul className="page-list">
                  {pages.map((page) => (
                    <li key={page.id} className="page-item">
                      <div className="bullet"></div>
                      <Link 
                        href={page.page_path === '/' ? '/' : page.page_path}
                        className="page-link"
                      >
                        {page.title}
                      </Link>
                      <span className="page-date">
                        {new Date(page.updated_at).toLocaleDateString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <h3 className="info-title">XML Sitemap</h3>
          <p className="info-description">
            For search engines, we also provide an XML sitemap at:
          </p>
          <Link 
            href="/sitemap.xml" 
            className="xml-link"
          >
            <FileText className="icon" />
            /sitemap.xml
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
