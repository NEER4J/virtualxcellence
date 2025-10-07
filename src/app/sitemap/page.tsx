'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { SeoPage } from '@/types/database.types'
import Link from 'next/link'
import { FileText, ChevronRight } from 'lucide-react'
import Head from 'next/head'
import '@/scss/sitemap.scss'

export default function SitemapPage() {
  const [seoPages, setSeoPages] = useState<SeoPage[]>([])
  const [loading, setLoading] = useState(true)

  // Default static pages that should always be in sitemap
  const defaultPages = [
    { path: '/about', title: 'About Us', category: 'Company' },
    { path: '/contact', title: 'Contact Us', category: 'Company' },
    { path: '/services', title: 'Our Services', category: 'Services' },
    { path: '/services/ai-automation', title: 'AI Automation', category: 'Services' },
    { path: '/services/cybersecurity', title: 'Cybersecurity', category: 'Services' },
    { path: '/services/cloud-infrastructure', title: 'Cloud Infrastructure', category: 'Services' },
    { path: '/services/development', title: 'Development', category: 'Services' },
    { path: '/services/business-transformation', title: 'Business Transformation', category: 'Services' },
    { path: '/services/business-process-outsourcing', title: 'Business Process Outsourcing', category: 'Services' },
    { path: '/services/consultation', title: 'Consultation', category: 'Services' },
    { path: '/services/fractional-cto', title: 'Fractional CTO', category: 'Services' },
    { path: '/services/fractional-cfo', title: 'Fractional CFO', category: 'Services' },
    { path: '/services/integration-and-professional-services', title: 'Integration & Professional Services', category: 'Services' },
    { path: '/careers', title: 'Careers', category: 'Company' },
    { path: '/industries/education', title: 'Education Industry', category: 'Industries' },
    { path: '/industries/finance', title: 'Finance Industry', category: 'Industries' },
    { path: '/industries/healthcare', title: 'Healthcare Industry', category: 'Industries' },
    { path: '/industries/manufacturing', title: 'Manufacturing Industry', category: 'Industries' },
    { path: '/industries/retail', title: 'Retail Industry', category: 'Industries' },
    { path: '/privacy-policy', title: 'Privacy Policy', category: 'Legal' },
    { path: '/terms-conditions', title: 'Terms & Conditions', category: 'Legal' },
    { path: '/terms-of-sale', title: 'Terms of Sale', category: 'Legal' },
    { path: '/refund-policy', title: 'Refund Policy', category: 'Legal' },
    { path: '/sitemap', title: 'Sitemap', category: 'Other' }
  ]

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
    const organized: { [key: string]: any[] } = {
      'Main Pages': [],
      'Services': [],
      'Company': [],
      'Industries': [],
      'Legal': [],
      'Other': []
    }

    // Add default pages first
    defaultPages.forEach(page => {
      organized[page.category].push({
        id: `default-${page.path}`,
        page_path: page.path,
        title: page.title,
        updated_at: new Date().toISOString(),
        isDefault: true
      })
    })

    // Add dynamic pages
    pages.forEach(page => {
      const path = page.page_path.toLowerCase()
      
      if (path === '/' || path === '/home') {
        organized['Main Pages'].push(page)
      } else if (path.includes('/services')) {
        organized['Services'].push(page)
      } else if (path.includes('/about') || path.includes('/contact') || path.includes('/careers')) {
        organized['Company'].push(page)
      } else if (path.includes('/industries')) {
        organized['Industries'].push(page)
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
                      {page.isDefault && (
                        <span className="default-badge">Default</span>
                      )}
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
