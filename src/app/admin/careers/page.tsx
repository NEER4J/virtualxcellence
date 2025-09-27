'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import { 
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { CareerPost } from '@/types/database.types'

export default function AdminCareersPage() {
  const [careers, setCareers] = useState<CareerPost[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({
    status: 'all', // all, active, inactive
    department: '',
    employment_type: ''
  })

  const supabase = createClient()

  const fetchCareers = useCallback(async () => {
    try {
      setLoading(true)
      let query = supabase
        .from('careers_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (filter.status === 'active') {
        query = query.eq('is_active', true)
      } else if (filter.status === 'inactive') {
        query = query.eq('is_active', false)
      }

      if (filter.department) {
        query = query.eq('department', filter.department)
      }

      if (filter.employment_type) {
        query = query.eq('employment_type', filter.employment_type)
      }

      const { data, error } = await query

      if (error) throw error
      setCareers(data || [])
    } catch (error) {
      console.error('Error fetching careers:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase, filter])

  useEffect(() => {
    fetchCareers()
  }, [fetchCareers])

  const deleteCareer = async (id: string) => {
    if (!confirm('Are you sure you want to delete this career post?')) return

    try {
      const { error } = await supabase
        .from('careers_posts')
        .delete()
        .eq('id', id)

      if (error) throw error

      setCareers(careers.filter(career => career.id !== id))
    } catch (error) {
      console.error('Error deleting career:', error)
    }
  }

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('careers_posts')
        .update({ is_active: !isActive })
        .eq('id', id)

      if (error) throw error

      setCareers(careers.map(career => 
        career.id === id ? { ...career, is_active: !isActive } : career
      ))
    } catch (error) {
      console.error('Error updating career:', error)
    }
  }

  const toggleFeatured = async (id: string, isFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('careers_posts')
        .update({ is_featured: !isFeatured })
        .eq('id', id)

      if (error) throw error

      setCareers(careers.map(career => 
        career.id === id ? { ...career, is_featured: !isFeatured } : career
      ))
    } catch (error) {
      console.error('Error updating career:', error)
    }
  }

  const getEmploymentTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      'full-time': 'Full Time',
      'part-time': 'Part Time',
      'contract': 'Contract',
      'internship': 'Internship'
    }
    return labels[type] || type
  }

  const getExperienceLevelLabel = (level: string) => {
    const labels: { [key: string]: string } = {
      'entry': 'Entry Level',
      'mid': 'Mid Level',
      'senior': 'Senior Level',
      'executive': 'Executive'
    }
    return labels[level] || level
  }

  const getDepartmentOptions = () => {
    const departments = [...new Set(careers.map(career => career.department).filter(Boolean))]
    return departments
  }

  const getEmploymentTypeOptions = () => {
    const types = [...new Set(careers.map(career => career.employment_type))]
    return types
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-1">Career Posts</h1>
                  <p className="text-gray-500 text-sm">Manage job postings and career opportunities</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/admin/careers/applications"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Applications</span>
                  </Link>
                  <Link
                    href="/admin/careers/new"
                    className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Career Post</span>
                  </Link>
                </div>
              </div>
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={filter.status}
                  onChange={(e) => setFilter({...filter, status: e.target.value})}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={filter.department}
                  onChange={(e) => setFilter({...filter, department: e.target.value})}
                >
                  <option value="">All Departments</option>
                  {getDepartmentOptions().map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={filter.employment_type}
                  onChange={(e) => setFilter({...filter, employment_type: e.target.value})}
                >
                  <option value="">All Types</option>
                  {getEmploymentTypeOptions().map(type => (
                    <option key={type} value={type}>{getEmploymentTypeLabel(type)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Careers List */}
          <div className="bg-white border border-gray-200 rounded-lg">
            {loading ? (
              <div className="p-12 text-center">
                <div className="inline-block w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-500 text-sm">Loading career posts...</p>
              </div>
            ) : careers.length === 0 ? (
              <div className="p-12 text-center">
                <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No career posts found</h3>
                <p className="text-gray-500 mb-6">Get started by creating your first career post.</p>
                <Link
                  href="/admin/careers/new"
                  className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Career Post</span>
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {careers.map((career) => (
                  <div key={career.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {career.title}
                          </h3>
                          {career.is_featured && (
                            <span className="inline-flex items-center space-x-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                              <Star className="w-3 h-3" />
                              <span>Featured</span>
                            </span>
                          )}
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                            career.is_active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {career.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{career.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{getEmploymentTypeLabel(career.employment_type)}</span>
                          </div>
                          {career.department && (
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{career.department}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <span>{getExperienceLevelLabel(career.experience_level)}</span>
                          </div>
                        </div>

                        {career.description && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {career.description}
                          </p>
                        )}

                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Created {new Date(career.created_at).toLocaleDateString()}</span>
                          </div>
                          {career.application_deadline && (
                            <div className="flex items-center space-x-1">
                              <span>Deadline: {new Date(career.application_deadline).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={() => toggleFeatured(career.id, career.is_featured)}
                          className={`p-2 rounded-md transition-colors ${
                            career.is_featured 
                              ? 'text-yellow-600 hover:bg-yellow-50' 
                              : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                          }`}
                          title={career.is_featured ? 'Remove from featured' : 'Mark as featured'}
                        >
                          <Star className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleActive(career.id, career.is_active)}
                          className={`p-2 rounded-md transition-colors ${
                            career.is_active 
                              ? 'text-green-600 hover:bg-green-50' 
                              : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
                          }`}
                          title={career.is_active ? 'Deactivate' : 'Activate'}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <Link
                          href={`/careers/${career.slug}`}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View on website"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/careers/${career.id}`}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => deleteCareer(career.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
