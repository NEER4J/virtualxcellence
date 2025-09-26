'use client'

import AdminSidebar from '@/components/Admin/AdminSidebar'
import SeoForm from '@/components/Admin/SeoForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewSeoPage() {
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
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Create New SEO Page</h1>
            <p className="text-gray-500 text-sm">Add meta tags, descriptions, and keywords for a new page</p>
          </div>

          <SeoForm />
        </div>
      </main>
    </div>
  )
}
