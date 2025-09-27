'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import { 
  Eye,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  FileText,
  ExternalLink,
  Search
} from 'lucide-react'
import { CareerApplication, CareerPost } from '@/types/database.types'

export default function CareerApplicationsPage() {
  const [applications, setApplications] = useState<(CareerApplication & { career_post: CareerPost })[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({
    status: 'all',
    career_post_id: '',
    search: ''
  })
  const [selectedApplication, setSelectedApplication] = useState<(CareerApplication & { career_post: CareerPost }) | null>(null)

  const supabase = createClient()

  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true)
      let query = supabase
        .from('career_applications')
        .select(`
          *,
          career_post:careers_posts(*)
        `)
        .order('created_at', { ascending: false })

      if (filter.status !== 'all') {
        query = query.eq('status', filter.status)
      }

      if (filter.career_post_id) {
        query = query.eq('career_post_id', filter.career_post_id)
      }

      if (filter.search) {
        query = query.or(`applicant_name.ilike.%${filter.search}%,applicant_email.ilike.%${filter.search}%`)
      }

      const { data, error } = await query

      if (error) throw error
      setApplications(data || [])
    } catch (error) {
      console.error('Error fetching applications:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase, filter])

  useEffect(() => {
    fetchApplications()
  }, [fetchApplications])

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('career_applications')
        .update({ status })
        .eq('id', id)

      if (error) throw error

      setApplications(applications.map(app => 
        app.id === id ? { ...app, status } : app
      ))

      if (selectedApplication?.id === id) {
        setSelectedApplication({ ...selectedApplication, status })
      }
    } catch (error) {
      console.error('Error updating application status:', error)
    }
  }

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'reviewed': 'bg-blue-100 text-blue-800',
      'shortlisted': 'bg-green-100 text-green-800',
      'rejected': 'bg-red-100 text-red-800',
      'hired': 'bg-purple-100 text-purple-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusLabel = (status: string) => {
    const labels: { [key: string]: string } = {
      'pending': 'Pending',
      'reviewed': 'Reviewed',
      'shortlisted': 'Shortlisted',
      'rejected': 'Rejected',
      'hired': 'Hired'
    }
    return labels[status] || status
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
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Career Applications</h1>
                <p className="text-gray-500 text-sm">Manage job applications and candidate submissions</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {applications.length} total applications
                </span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={filter.status}
                  onChange={(e) => setFilter({...filter, status: e.target.value})}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                  <option value="hired">Hired</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Position</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={filter.career_post_id}
                  onChange={(e) => setFilter({...filter, career_post_id: e.target.value})}
                >
                  <option value="">All Positions</option>
                  {Array.from(new Set(applications.map(app => app.career_post))).map(post => (
                    <option key={post.id} value={post.id}>{post.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 pl-10"
                    placeholder="Search by name or email..."
                    value={filter.search}
                    onChange={(e) => setFilter({...filter, search: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setFilter({ status: 'all', career_post_id: '', search: '' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="bg-white border border-gray-200 rounded-lg">
            {loading ? (
              <div className="p-12 text-center">
                <div className="inline-block w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-500 text-sm">Loading applications...</p>
              </div>
            ) : applications.length === 0 ? (
              <div className="p-12 text-center">
                <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
                <p className="text-gray-500">No applications match your current filters.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {applications.map((application) => (
                  <div key={application.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {application.applicant_name}
                          </h3>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(application.status)}`}>
                            {getStatusLabel(application.status)}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>{application.applicant_email}</span>
                          </div>
                          {application.applicant_phone && (
                            <div className="flex items-center space-x-1">
                              <Phone className="w-4 h-4" />
                              <span>{application.applicant_phone}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(application.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            <span>Applied for: </span>
                            <span className="font-medium">{application.career_post.title}</span>
                          </div>
                        </div>

                        {application.cover_letter && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {application.cover_letter}
                          </p>
                        )}

                        <div className="flex items-center space-x-4">
                          {application.resume_url && (
                            <a
                              href={application.resume_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                            >
                              <FileText className="w-4 h-4" />
                              <span>Resume</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {application.portfolio_url && (
                            <a
                              href={application.portfolio_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Portfolio</span>
                            </a>
                          )}
                          {application.linkedin_url && (
                            <a
                              href={application.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>LinkedIn</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <div className="flex items-center space-x-1">
                          <select
                            value={application.status}
                            onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                            className="text-xs border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="shortlisted">Shortlisted</option>
                            <option value="rejected">Rejected</option>
                            <option value="hired">Hired</option>
                          </select>
                        </div>
                        <button
                          onClick={() => setSelectedApplication(application)}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View details"
                        >
                          <Eye className="w-4 h-4" />
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

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Application Details</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-sm text-gray-900">{selectedApplication.applicant_name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="text-sm text-gray-900">{selectedApplication.applicant_email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-sm text-gray-900">{selectedApplication.applicant_phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                    <p className="text-sm text-gray-900">{selectedApplication.experience_years ? `${selectedApplication.experience_years} years` : 'Not specified'}</p>
                  </div>
                </div>
              </div>

              {/* Current Position */}
              {(selectedApplication.current_position || selectedApplication.current_company) && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Current Position</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Position</label>
                      <p className="text-sm text-gray-900">{selectedApplication.current_position || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company</label>
                      <p className="text-sm text-gray-900">{selectedApplication.current_company || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Cover Letter */}
              {selectedApplication.cover_letter && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Cover Letter</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedApplication.cover_letter}</p>
                  </div>
                </div>
              )}

              {/* Links */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Links & Documents</h3>
                <div className="space-y-2">
                  {selectedApplication.resume_url && (
                    <a
                      href={selectedApplication.resume_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Resume</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {selectedApplication.portfolio_url && (
                    <a
                      href={selectedApplication.portfolio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Portfolio</span>
                    </a>
                  )}
                  {selectedApplication.linkedin_url && (
                    <a
                      href={selectedApplication.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Status Update */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Status Management</h3>
                <div className="flex items-center space-x-4">
                  <label className="block text-sm font-medium text-gray-700">Status:</label>
                  <select
                    value={selectedApplication.status}
                    onChange={(e) => updateApplicationStatus(selectedApplication.id, e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                    <option value="hired">Hired</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
