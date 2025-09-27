'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { CareerPost } from '@/types/database.types'
import Link from 'next/link'
import { 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Briefcase
} from 'lucide-react'

export default function CareersSection() {
  const [careers, setCareers] = useState<CareerPost[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  const fetchCareers = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('careers_posts')
        .select('*')
        .eq('is_active', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false })

      if (error) throw error
      setCareers(data || [])
    } catch (error) {
      console.error('Error fetching careers:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    fetchCareers()
  }, [fetchCareers])

  const getEmploymentTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      'full-time': 'Full Time',
      'part-time': 'Part Time',
      'contract': 'Contract',
      'internship': 'Internship'
    }
    return labels[type] || type
  }


  return (
    <section className="careers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Open Positions</h2>
        </div>


        {/* Careers List */}
        <div className="careers-list">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading career opportunities...</p>
            </div>
          ) : careers.length === 0 ? (
            <div className="empty-state">
              <Briefcase className="w-16 h-16" style={{margin: '0 auto 20px', color: '#999'}} />
              <h3>No positions found</h3>
              <p>We don&apos;t have any open positions matching your criteria at the moment.</p>
            </div>
          ) : (
            <div className="careers-grid">
              {careers.map((career) => (
                <Link key={career.id} href={`/careers/${career.slug}`} className="career-card">
                  <div className="career-content">
                    <h3 className="career-title">{career.title}</h3>
                    <div className="career-meta">
                      <div className="meta-item">
                        <MapPin className="w-4 h-4" />
                        <span>{career.location}</span>
                      </div>
                      <div className="meta-item">
                        <Clock className="w-4 h-4" />
                        <span>{getEmploymentTypeLabel(career.employment_type)}</span>
                      </div>
                      {career.department && (
                        <div className="meta-item">
                          <Users className="w-4 h-4" />
                          <span>{career.department}</span>
                        </div>
                      )}
                    </div>
                    <p className="career-description">{career.description}</p>
                  </div>

                  <div className="career-footer">
                    <span className="btn">
                      Apply
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
