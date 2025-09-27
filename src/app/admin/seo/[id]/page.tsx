'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import SeoForm from '@/components/Admin/SeoForm'
import { ArrowLeft, Loader } from 'lucide-react'
import Link from 'next/link'
import { SeoPage } from '@/types/database.types'
import { notFound } from 'next/navigation'

interface EditSeoPageProps {
  params: {
    id: string
  }
}

export default function EditSeoPage({ params }: EditSeoPageProps) {
  const [seoPage, setSeoPage] = useState<SeoPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  useEffect(() => {
    fetchSeoPage()
  }, [params.id, fetchSeoPage])

  const fetchSeoPage = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // Record not found
          notFound()
        }
        throw error
      }

      setSeoPage(data)
    } catch (error: unknown) {
      console.error('Error fetching SEO page:', error)
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [supabase, params.id])

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Loader className="w-6 h-6 text-gray-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600 text-sm">Loading SEO page...</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (error || !seoPage) {
    return (
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="text-center py-12">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">Page Not Found</h1>
              <p className="text-gray-500 text-sm mb-6">The SEO page you&apos;re looking for doesn&apos;t exist.</p>
              <Link
                href="/admin/seo"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to SEO Pages</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <Link
                href="/admin/seo"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to SEO Pages</span>
              </Link>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Edit SEO Page</h1>
            <p className="text-gray-500 text-sm">Update meta tags, descriptions, and keywords for {seoPage.page_path}</p>
          </div>

          <SeoForm pageId={params.id} initialData={seoPage} />
        </div>
      </main>
    </div>
  )
}
