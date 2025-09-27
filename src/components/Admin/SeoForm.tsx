'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { SeoPage, SeoPageInsert, SeoPageUpdate } from '@/types/database.types'
import { 
  Save, 
  X, 
  Plus,
  Image,
  Globe,
  Search,
  FileText,
  Hash,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Chrome
} from 'lucide-react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface SeoFormProps {
  pageId?: string
  initialData?: SeoPage
}

export default function SeoForm({ pageId, initialData }: SeoFormProps) {
  const [formData, setFormData] = useState<SeoPageInsert>({
    page_path: '',
    title: '',
    description: '',
    keywords: [],
    og_title: '',
    og_description: '',
    og_image: '',
    og_type: 'website',
    twitter_card: 'summary_large_image',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    canonical_url: '',
    robots: 'index, follow',
    schema_markup: null,
  })
  
  const [keywordInput, setKeywordInput] = useState('')
  const [saving, setSaving] = useState(false)

  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    if (initialData) {
      setFormData({
        page_path: initialData.page_path,
        title: initialData.title,
        description: initialData.description,
        keywords: initialData.keywords,
        og_title: initialData.og_title,
        og_description: initialData.og_description,
        og_image: initialData.og_image,
        og_type: initialData.og_type,
        twitter_card: initialData.twitter_card,
        twitter_title: initialData.twitter_title,
        twitter_description: initialData.twitter_description,
        twitter_image: initialData.twitter_image,
        canonical_url: initialData.canonical_url,
        robots: initialData.robots,
        schema_markup: initialData.schema_markup,
      })
    }
  }, [initialData])

  const handleInputChange = (field: keyof SeoPageInsert, value: string | string[] | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.keywords.includes(keywordInput.trim())) {
      setFormData(prev => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()]
      }))
      setKeywordInput('')
    }
  }

  const removeKeyword = (index: number) => {
    setFormData(prev => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index)
    }))
  }

  const handleKeywordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addKeyword()
    }
  }

  const autoFillSocialMedia = () => {
    setFormData(prev => ({
      ...prev,
      og_title: prev.og_title || prev.title,
      og_description: prev.og_description || prev.description,
      twitter_title: prev.twitter_title || prev.title,
      twitter_description: prev.twitter_description || prev.description,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      if (pageId) {
        // Update existing page
        const updateData: SeoPageUpdate = {
          ...formData,
          updated_at: new Date().toISOString(),
        }
        
        const { error } = await supabase
          .from('seo_pages')
          .update(updateData)
          .eq('id', pageId)

        if (error) throw error
        toast.success('SEO page updated successfully')
      } else {
        // Create new page
        const { error } = await supabase
          .from('seo_pages')
          .insert([formData])

        if (error) throw error
        toast.success('SEO page created successfully')
      }

      router.push('/admin/seo')
    } catch (error: unknown) {
      console.error('Error saving SEO page:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to save SEO page')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <form onSubmit={handleSubmit} className="flex-1 space-y-8">
      {/* Basic Information */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FileText className="w-4 h-4 text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">Basic Information</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <label htmlFor="page_path" className="block text-sm font-medium text-gray-700 mb-2">
              Page Path *
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="page_path"
                type="text"
                value={formData.page_path}
                onChange={(e) => handleInputChange('page_path', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                placeholder="/about, /services, /blog/post-title"
                required
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">The URL path for this page (e.g., /about, /services)</p>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Page Title *
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
              placeholder="Enter page title"
              maxLength={60}
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              {formData.title.length}/60 characters (recommended: 50-60 characters)
            </p>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description *
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none resize-none text-sm"
              placeholder="Enter meta description"
              maxLength={160}
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              {formData.description.length}/160 characters (recommended: 150-160 characters)
            </p>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords
            </label>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyPress={handleKeywordKeyPress}
                  className="flex-1 px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                  placeholder="Enter a keyword and press Enter"
                />
                <button
                  type="button"
                  onClick={addKeyword}
                  className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              {formData.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-2 py-1 text-xs font-medium"
                    >
                      <span>{keyword}</span>
                      <button
                        type="button"
                        onClick={() => removeKeyword(index)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Open Graph */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <h2 className="text-lg font-medium text-gray-900">Open Graph (Facebook)</h2>
          </div>
          <button
            type="button"
            onClick={autoFillSocialMedia}
            className="text-xs text-gray-600 hover:text-gray-900 underline"
          >
            Auto-fill from basic info
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="og_title" className="block text-sm font-medium text-gray-700 mb-2">
              OG Title
            </label>
            <input
              id="og_title"
              type="text"
              value={formData.og_title || ''}
              onChange={(e) => handleInputChange('og_title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
              placeholder="Open Graph title"
            />
          </div>

          <div>
            <label htmlFor="og_type" className="block text-sm font-medium text-gray-700 mb-2">
              OG Type
            </label>
            <select
              id="og_type"
              value={formData.og_type || 'website'}
              onChange={(e) => handleInputChange('og_type', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
            >
              <option value="website">Website</option>
              <option value="article">Article</option>
              <option value="product">Product</option>
              <option value="profile">Profile</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="og_description" className="block text-sm font-medium text-gray-700 mb-2">
              OG Description
            </label>
            <textarea
              id="og_description"
              value={formData.og_description || ''}
              onChange={(e) => handleInputChange('og_description', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none resize-none text-sm"
              placeholder="Open Graph description"
            />
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="og_image" className="block text-sm font-medium text-gray-700 mb-2">
              OG Image URL
            </label>
            <div className="relative">
              <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" alt="" />
              <input
                id="og_image"
                type="url"
                value={formData.og_image || ''}
                onChange={(e) => handleInputChange('og_image', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Twitter Card */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Hash className="w-4 h-4 text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">Twitter Card</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="twitter_card" className="block text-sm font-medium text-gray-700 mb-2">
              Card Type
            </label>
            <select
              id="twitter_card"
              value={formData.twitter_card || 'summary_large_image'}
              onChange={(e) => handleInputChange('twitter_card', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
            >
              <option value="summary">Summary</option>
              <option value="summary_large_image">Summary Large Image</option>
              <option value="app">App</option>
              <option value="player">Player</option>
            </select>
          </div>

          <div>
            <label htmlFor="twitter_title" className="block text-sm font-medium text-gray-700 mb-2">
              Twitter Title
            </label>
            <input
              id="twitter_title"
              type="text"
              value={formData.twitter_title || ''}
              onChange={(e) => handleInputChange('twitter_title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
              placeholder="Twitter title"
            />
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="twitter_description" className="block text-sm font-medium text-gray-700 mb-2">
              Twitter Description
            </label>
            <textarea
              id="twitter_description"
              value={formData.twitter_description || ''}
              onChange={(e) => handleInputChange('twitter_description', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none resize-none text-sm"
              placeholder="Twitter description"
            />
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="twitter_image" className="block text-sm font-medium text-gray-700 mb-2">
              Twitter Image URL
            </label>
            <div className="relative">
              <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" alt="" />
              <input
                id="twitter_image"
                type="url"
                value={formData.twitter_image || ''}
                onChange={(e) => handleInputChange('twitter_image', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Search className="w-4 h-4 text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">Advanced Settings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="canonical_url" className="block text-sm font-medium text-gray-700 mb-2">
              Canonical URL
            </label>
            <input
              id="canonical_url"
              type="url"
              value={formData.canonical_url || ''}
              onChange={(e) => handleInputChange('canonical_url', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
              placeholder="https://example.com/canonical-url"
            />
          </div>

          <div>
            <label htmlFor="robots" className="block text-sm font-medium text-gray-700 mb-2">
              Robots
            </label>
            <select
              id="robots"
              value={formData.robots || 'index, follow'}
              onChange={(e) => handleInputChange('robots', e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
            >
              <option value="index, follow">Index, Follow</option>
              <option value="noindex, follow">No Index, Follow</option>
              <option value="index, nofollow">Index, No Follow</option>
              <option value="noindex, nofollow">No Index, No Follow</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium"
        >
          {saving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>{pageId ? 'Update Page' : 'Create Page'}</span>
            </>
          )}
        </button>
      </div>
    </form>

    {/* Preview Panel */}
    <div className="w-full lg:w-80 space-y-6">
      <div className="">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
        
        {/* Facebook Preview */}
        <div className="bg-white border border-gray-200 p-4 mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Facebook className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Facebook</span>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {formData.og_image ? (
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={formData.og_image}
                  alt="Open Graph preview image"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'flex'
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100" style={{display: 'none'}}>
                  <Image className="w-8 h-8 text-gray-400" alt="" />
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Image className="w-8 h-8 text-gray-400" alt="" />
              </div>
            )}
            
            <div className="p-3">
              <div className="text-xs text-blue-600 uppercase tracking-wide mb-1">
                {formData.page_path || 'your-website.com'}
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                {formData.og_title || formData.title || 'Your page title'}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-2">
                {formData.og_description || formData.description || 'Your page description will appear here...'}
              </p>
            </div>
          </div>
        </div>

        {/* Twitter Preview */}
        <div className="bg-white border border-gray-200 p-4 mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Twitter className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-700">Twitter</span>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {formData.twitter_image ? (
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={formData.twitter_image}
                  alt="Twitter preview image"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'flex'
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100" style={{display: 'none'}}>
                  <Image className="w-8 h-8 text-gray-400" alt="" />
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Image className="w-8 h-8 text-gray-400" alt="" />
              </div>
            )}
            
            <div className="p-3">
              <div className="text-xs text-gray-500 mb-1">
                {formData.page_path || 'your-website.com'}
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                {formData.twitter_title || formData.og_title || formData.title || 'Your page title'}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-2">
                {formData.twitter_description || formData.og_description || formData.description || 'Your page description will appear here...'}
              </p>
            </div>
          </div>
        </div>

        {/* Google Preview */}
        <div className="bg-white border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Chrome className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Google Search</span>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-start space-x-3">
              {formData.og_image && (
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 relative">
                  <img
                    src={formData.og_image}
                    alt="Google search preview image"
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                      if (nextElement) {
                        nextElement.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded" style={{display: 'none'}}>
                    <Image className="w-6 h-6 text-gray-400" alt="" />
                  </div>
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="text-xs text-green-700 mb-1">
                  {formData.page_path || 'your-website.com'} › page
                </div>
                <h4 className="text-lg text-blue-600 hover:underline cursor-pointer line-clamp-2 mb-1">
                  {formData.title || 'Your page title'}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {formData.description || 'Your page description will appear here...'}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>About this page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
