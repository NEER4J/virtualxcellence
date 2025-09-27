'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import { 
  Search, 
  Plus,
  Edit,
  Trash2,
  Download
} from 'lucide-react'
import Link from 'next/link'
import { SeoPage } from '@/types/database.types'
import toast from 'react-hot-toast'

export default function SeoManagement() {
  const [seoPages, setSeoPages] = useState<SeoPage[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPages, setFilteredPages] = useState<SeoPage[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const supabase = createClient()

  const fetchSeoPages = useCallback(async (isRefresh = false) => {
    if (isRefresh && isRefreshing) return // Prevent multiple simultaneous requests
    
    try {
      if (isRefresh) {
        setIsRefreshing(true)
      } else {
        setLoading(true)
      }
      
      const { data, error } = await supabase
        .from('seo_pages')
        .select('id, page_path, title, description, keywords, updated_at')
        .order('updated_at', { ascending: false })

      if (error) throw error

      setSeoPages(data || [])
    } catch (error) {
      console.error('Error fetching SEO pages:', error)
      toast.error('Failed to fetch SEO pages')
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }, [supabase, isRefreshing])

  useEffect(() => {
    fetchSeoPages()
  }, [fetchSeoPages])

  // Debounced search to prevent excessive filtering
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  useEffect(() => {
    const filtered = seoPages.filter(page =>
      page.page_path.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      page.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      page.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    setFilteredPages(filtered)
  }, [seoPages, debouncedSearchTerm])

  const deletePage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this SEO page?')) return

    try {
      const { error } = await supabase
        .from('seo_pages')
        .delete()
        .eq('id', id)

      if (error) throw error

      // Refresh the list instead of local state manipulation
      await fetchSeoPages(true)
      toast.success('SEO page deleted successfully')
    } catch (error) {
      console.error('Error deleting page:', error)
      toast.error('Failed to delete SEO page')
    }
  }

  const exportPages = () => {
    const csvContent = [
      ['Page Path', 'Title', 'Description', 'Keywords', 'Last Updated'],
      ...filteredPages.map(page => [
        page.page_path,
        page.title,
        page.description,
        page.keywords.join(', '),
        new Date(page.updated_at).toLocaleDateString()
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'seo-pages.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">SEO Management</h1>
            <p className="text-gray-500 text-sm">Manage meta tags, descriptions, and keywords for all pages</p>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search pages, titles, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportPages}
                className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <Link
                href="/admin/seo/new"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>New Page</span>
              </Link>
            </div>
          </div>

          {/* SEO Pages List */}
          <div className="bg-white border border-gray-200">
            {loading ? (
              <div className="p-12 text-center">
                <div className="inline-block w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-500 text-sm">Loading pages...</p>
              </div>
            ) : filteredPages.length === 0 ? (
              <div className="p-12 text-center">
                <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {searchTerm ? 'No pages found' : 'No pages yet'}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {searchTerm 
                    ? 'Try adjusting your search terms' 
                    : 'Start by creating your first page'
                  }
                </p>
                {!searchTerm && (
                  <Link
                    href="/admin/seo/new"
                    className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700 text-sm font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create first page</span>
                  </Link>
                )}
              </div>
            ) : (
              <>
                <div className="divide-y divide-gray-200">
                  {filteredPages.map((page) => (
                    <div key={page.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {page.title}
                            </h3>
                            <span className="text-xs text-gray-500">
                              {new Date(page.updated_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mb-2 font-mono">
                            {page.page_path}
                          </p>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {page.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {page.keywords.slice(0, 4).map((keyword, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700"
                              >
                                {keyword}
                              </span>
                            ))}
                            {page.keywords.length > 4 && (
                              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
                                +{page.keywords.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 ml-4">
                          <Link
                            href={`/admin/seo/${page.id}`}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Edit page"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => deletePage(page.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete page"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-xs text-gray-500">
                    Showing {filteredPages.length} of {seoPages.length} pages
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
