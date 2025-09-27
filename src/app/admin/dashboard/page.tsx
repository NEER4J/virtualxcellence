'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import { 
  FileText, 
  Clock,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  ArrowUpRight
} from 'lucide-react'
import Link from 'next/link'
import { SeoPage } from '@/types/database.types'

export default function AdminDashboard() {
  const [seoPages, setSeoPages] = useState<SeoPage[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalPages: 0,
    recentUpdates: 0,
  })

  const supabase = createClient()

  useEffect(() => {
    fetchSeoPages()
  }, [fetchSeoPages])

  const fetchSeoPages = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('seo_pages')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(5)

      if (error) throw error

      setSeoPages(data || [])
      
      // Get total count
      const { count } = await supabase
        .from('seo_pages')
        .select('*', { count: 'exact', head: true })

      setStats({
        totalPages: count || 0,
        recentUpdates: data?.filter(page => {
          const updatedAt = new Date(page.updated_at)
          const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
          return updatedAt > dayAgo
        }).length || 0,
      })
    } catch (error) {
      console.error('Error fetching SEO pages:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase])

  const deletePage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this SEO page?')) return

    try {
      const { error } = await supabase
        .from('seo_pages')
        .delete()
        .eq('id', id)

      if (error) throw error

      setSeoPages(seoPages.filter(page => page.id !== id))
      setStats(prev => ({ ...prev, totalPages: prev.totalPages - 1 }))
    } catch (error) {
      console.error('Error deleting page:', error)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
            <p className="text-gray-500 text-sm">Overview of your SEO management</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Pages</p>
                  <p className="text-3xl font-light text-gray-900 mt-1">{stats.totalPages}</p>
                </div>
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Recent Updates</p>
                  <p className="text-3xl font-light text-gray-900 mt-1">{stats.recentUpdates}</p>
                </div>
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">SEO Score</p>
                  <p className="text-3xl font-light text-gray-900 mt-1">95%</p>
                </div>
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Pages</p>
                  <p className="text-3xl font-light text-gray-900 mt-1">{stats.totalPages}</p>
                </div>
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent SEO Pages */}
          <div className="bg-white border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Recent Pages</h2>
                <Link
                  href="/admin/seo/new"
                  className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Page</span>
                </Link>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {loading ? (
                <div className="p-12 text-center">
                  <div className="inline-block w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                  <p className="mt-3 text-gray-500 text-sm">Loading pages...</p>
                </div>
              ) : seoPages.length === 0 ? (
                <div className="p-12 text-center">
                  <FileText className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm mb-4">No pages created yet</p>
                  <Link
                    href="/admin/seo/new"
                    className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700 text-sm font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create your first page</span>
                  </Link>
                </div>
              ) : (
                seoPages.map((page) => (
                  <div key={page.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {page.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {page.page_path}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-gray-500">
                          {new Date(page.updated_at).toLocaleDateString()}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Link
                            href={`/admin/seo/${page.id}`}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => deletePage(page.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {seoPages.length > 0 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <Link
                  href="/admin/seo"
                  className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  <span>View all pages</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
