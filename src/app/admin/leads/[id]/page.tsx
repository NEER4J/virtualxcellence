'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import { 
  ArrowLeft,
  Save,
  Phone,
  Mail,
  Building,
  Star,
  Tag,
  MessageSquare,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'
import { Lead, LeadUpdate, LeadActivity } from '@/types/database.types'
import toast from 'react-hot-toast'

export default function LeadDetail() {
  const params = useParams()
  const router = useRouter()
  const leadId = params.id as string
  
  const [lead, setLead] = useState<Lead | null>(null)
  const [activities, setActivities] = useState<LeadActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [newActivity, setNewActivity] = useState('')
  const [showAddActivity, setShowAddActivity] = useState(false)

  const supabase = createClient()

  const fetchLead = useCallback(async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('id', leadId)
        .single()

      if (error) throw error
      setLead(data)
    } catch (error) {
      console.error('Error fetching lead:', error)
      toast.error('Failed to fetch lead details')
    } finally {
      setLoading(false)
    }
  }, [supabase, leadId])

  const fetchActivities = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('lead_activities')
        .select('*')
        .eq('lead_id', leadId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setActivities(data || [])
    } catch (error) {
      console.error('Error fetching activities:', error)
    }
  }, [supabase, leadId])

  useEffect(() => {
    if (leadId) {
      fetchLead()
      fetchActivities()
    }
  }, [leadId, fetchLead, fetchActivities])

  const handleUpdateLead = async (updates: LeadUpdate) => {
    try {
      setSaving(true)
      
      const { error } = await supabase
        .from('leads')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', leadId)

      if (error) throw error

      await fetchLead()
      setEditing(false)
      toast.success('Lead updated successfully')
    } catch (error) {
      console.error('Error updating lead:', error)
      toast.error('Failed to update lead')
    } finally {
      setSaving(false)
    }
  }

  const addActivity = async () => {
    if (!newActivity.trim()) return

    try {
      const { error } = await supabase
        .from('lead_activities')
        .insert({
          lead_id: leadId,
          activity_type: 'note',
          description: newActivity,
          created_by: 'admin' // You might want to get this from auth context
        })

      if (error) throw error

      setNewActivity('')
      setShowAddActivity(false)
      await fetchActivities()
      toast.success('Activity added')
    } catch (error) {
      console.error('Error adding activity:', error)
      toast.error('Failed to add activity')
    }
  }

  const deleteLead = async () => {
    if (!confirm('Are you sure you want to delete this lead?')) return

    try {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', leadId)

      if (error) throw error

      toast.success('Lead deleted successfully')
      router.push('/admin/leads')
    } catch (error) {
      console.error('Error deleting lead:', error)
      toast.error('Failed to delete lead')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'qualified': return 'bg-green-100 text-green-800'
      case 'converted': return 'bg-purple-100 text-purple-800'
      case 'lost': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-center h-64">
              <div className="inline-block w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!lead) {
    return (
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Lead not found</h2>
              <p className="text-gray-500 mb-4">The lead you&apos;re looking for doesn&apos;t exist.</p>
              <button
                onClick={() => router.push('/admin/leads')}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Back to Leads
              </button>
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{lead.name}</h1>
                <p className="text-gray-500 text-sm">Lead Details</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {editing ? (
                <>
                  <button
                    onClick={() => setEditing(false)}
                    className="px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleUpdateLead({})}
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
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setEditing(true)}
                    className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={deleteLead}
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors text-sm font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lead Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <div className="bg-white border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    {editing ? (
                      <input
                        type="text"
                        value={lead.name}
                        onChange={(e) => setLead({...lead, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">{lead.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    {editing ? (
                      <input
                        type="email"
                        value={lead.email}
                        onChange={(e) => setLead({...lead, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${lead.email}`} className="text-sm text-blue-600 hover:underline">
                          {lead.email}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    {editing ? (
                      <input
                        type="tel"
                        value={lead.phone || ''}
                        onChange={(e) => setLead({...lead, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      />
                    ) : (
                      lead.phone ? (
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${lead.phone}`} className="text-sm text-blue-600 hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No phone number</p>
                      )
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    {editing ? (
                      <input
                        type="text"
                        value={lead.company || ''}
                        onChange={(e) => setLead({...lead, company: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      />
                    ) : (
                      lead.company ? (
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{lead.company}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No company</p>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-white border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Message</h2>
                {editing ? (
                  <textarea
                    value={lead.message}
                    onChange={(e) => setLead({...lead, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none resize-none text-sm"
                  />
                ) : (
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{lead.message}</p>
                )}
              </div>

              {/* Activities */}
              <div className="bg-white border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Activities</h2>
                  <button
                    onClick={() => setShowAddActivity(!showAddActivity)}
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Note</span>
                  </button>
                </div>

                {showAddActivity && (
                  <div className="mb-4 p-4 border border-gray-200 rounded-lg">
                    <textarea
                      value={newActivity}
                      onChange={(e) => setNewActivity(e.target.value)}
                      placeholder="Add a note about this lead..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none resize-none text-sm mb-3"
                    />
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={addActivity}
                        className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        Add Note
                      </button>
                      <button
                        onClick={() => {
                          setShowAddActivity(false)
                          setNewActivity('')
                        }}
                        className="px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <MessageSquare className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(activity.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {activities.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">No activities yet</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Status & Priority */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Status & Priority</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    {editing ? (
                      <select
                        value={lead.status}
                        onChange={(e) => setLead({...lead, status: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    ) : (
                      <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    {editing ? (
                      <select
                        value={lead.priority}
                        onChange={(e) => setLead({...lead, priority: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    ) : (
                      <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${getPriorityColor(lead.priority)}`}>
                        {lead.priority}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lead Score</label>
                    {editing ? (
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={lead.lead_score}
                        onChange={(e) => setLead({...lead, lead_score: parseInt(e.target.value) || 0})}
                        className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-900">{lead.lead_score}/100</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Lead Details */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Lead Details</h3>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Source:</span>
                    <p className="text-sm text-gray-900">{lead.source}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500">Created:</span>
                    <p className="text-sm text-gray-900">{new Date(lead.created_at).toLocaleDateString()}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500">Last Updated:</span>
                    <p className="text-sm text-gray-900">{new Date(lead.updated_at).toLocaleDateString()}</p>
                  </div>
                  
                  {lead.last_contacted && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">Last Contacted:</span>
                      <p className="text-sm text-gray-900">{new Date(lead.last_contacted).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              {lead.tags && lead.tags.length > 0 && (
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {lead.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
