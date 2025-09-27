'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import { 
  Users, 
  Search,
  Download,
  Trash2,
  Phone,
  Mail,
  Eye
} from 'lucide-react'
import Link from 'next/link'
import { Lead } from '@/types/database.types'
import toast from 'react-hot-toast'

export default function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState({
    total: 0
  })

  const supabase = createClient()

  const fetchLeads = useCallback(async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setLeads(data || [])
      
      // Calculate stats
      const total = data?.length || 0

      setStats({ total })
    } catch (error) {
      console.error('Error fetching leads:', error)
      toast.error('Failed to fetch leads')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  // Filter leads based on search
  useEffect(() => {
    let filtered = leads

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm])

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return

    try {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', id)

      if (error) throw error

      await fetchLeads()
      toast.success('Lead deleted successfully')
    } catch (error) {
      console.error('Error deleting lead:', error)
      toast.error('Failed to delete lead')
    }
  }


  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Source', 'Created Date'],
      ...filteredLeads.map(lead => [
        lead.name,
        lead.email,
        lead.phone || '',
        lead.source,
        new Date(lead.created_at).toLocaleDateString()
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'leads.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }



  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Lead Management</h1>
            <p className="text-gray-500 text-sm">Manage and track your leads from contact to conversion</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Leads</p>
                  <p className="text-3xl font-light text-gray-900 mt-1">{stats.total}</p>
                </div>
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search leads by name, email, company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none text-sm"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={exportLeads}
                className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Leads List */}
          <div className="bg-white border border-gray-200">
            {loading ? (
              <div className="p-12 text-center">
                <div className="inline-block w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-500 text-sm">Loading leads...</p>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {searchTerm ? 'No leads found' : 'No leads yet'}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {searchTerm
                    ? 'Try adjusting your search terms'
                    : 'Leads will appear here when someone contacts you'
                  }
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {lead.name}
                          </h3>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>{lead.email}</span>
                          </div>
                          {lead.phone && (
                            <div className="flex items-center space-x-1">
                              <Phone className="w-4 h-4" />
                              <span>{lead.phone}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {lead.message}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Source: {lead.source}</span>
                          <span>•</span>
                          <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete lead"
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
