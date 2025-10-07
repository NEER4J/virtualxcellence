'use client'

import { useState } from 'react'
import { CareerPost } from '@/types/database.types'
import { 
  MapPin, 
  Clock, 
  Users, 
  DollarSign, 
  GraduationCap
} from 'lucide-react'
import toast from 'react-hot-toast'

interface SingleCareerSectionProps {
  career: CareerPost
}

export default function SingleCareerSection({ career }: SingleCareerSectionProps) {
  const [applicationData, setApplicationData] = useState({
    applicant_name: '',
    applicant_email: '',
    applicant_phone: '',
    cover_letter: '',
    resume_url: '',
    portfolio_url: '',
    linkedin_url: '',
    experience_years: '',
    current_position: '',
    current_company: '',
    expected_salary: '',
    availability_date: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)


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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send data to API route which handles both database save and email sending
      const response = await fetch('/api/send-career-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          career_post_id: career.id,
          applicant_name: applicationData.applicant_name,
          applicant_email: applicationData.applicant_email,
          applicant_phone: applicationData.applicant_phone || undefined,
          cover_letter: applicationData.cover_letter || undefined,
          resume_url: applicationData.resume_url || undefined,
          portfolio_url: applicationData.portfolio_url || undefined,
          linkedin_url: applicationData.linkedin_url || undefined,
          experience_years: applicationData.experience_years || undefined,
          current_position: applicationData.current_position || undefined,
          current_company: applicationData.current_company || undefined,
          expected_salary: applicationData.expected_salary || undefined,
          availability_date: applicationData.availability_date || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      toast.success('Application submitted successfully! We will get back to you soon.')
      setApplicationData({
        applicant_name: '',
        applicant_email: '',
        applicant_phone: '',
        cover_letter: '',
        resume_url: '',
        portfolio_url: '',
        linkedin_url: '',
        experience_years: '',
        current_position: '',
        current_company: '',
        expected_salary: '',
        availability_date: ''
      })
    } catch (error) {
      console.error('Error submitting application:', error)
      toast.error('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="single-career-section">
      <div className="container">
        <div className="career-layout">
          <div className="career-content">
            {/* Job Header */}
            <div className="career-header">
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
                <div className="meta-item">
                  <GraduationCap className="w-4 h-4" />
                  <span>{getExperienceLevelLabel(career.experience_level)}</span>
                </div>
                {career.salary_range && (
                  <div className="meta-item">
                    <DollarSign className="w-4 h-4" />
                    <span>{career.salary_range}</span>
                  </div>
                )}
              </div>

              <h1 className="career-title">{career.title}</h1>
              {career.description && (
                <p className="career-description">{career.description}</p>
              )}
            </div>

            {/* Job Content */}
            <div className="career-body">
              <div className="content-section">
                <h2 className="section-title">Job Description</h2>
                <div className="content-text" dangerouslySetInnerHTML={{ __html: career.content }} />
              </div>

                {career.responsibilities && career.responsibilities.length > 0 && (
                  <div className="content-section">
                    <h2 className="section-title">Key Responsibilities</h2>
                    <ul className="simple-list">
                      {career.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {career.requirements && career.requirements.length > 0 && (
                  <div className="content-section">
                    <h2 className="section-title">Requirements</h2>
                    <ul className="simple-list">
                      {career.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {career.skills_required && career.skills_required.length > 0 && (
                <div className="content-section">
                  <h2 className="section-title">Required Skills</h2>
                  <div className="skills-grid">
                    {career.skills_required.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}

                {career.benefits && career.benefits.length > 0 && (
                  <div className="content-section">
                    <h2 className="section-title">Benefits & Perks</h2>
                    <ul className="simple-list">
                      {career.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>

          <div className="application-form">
            <div className="form-header">
              <h3 className="form-title">Apply for this position</h3>
              <p className="form-description">
                Ready to join our team? Submit your application and let&apos;s start this journey together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="application-form-content">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="applicant_name">Full Name *</label>
                  <input
                    type="text"
                    id="applicant_name"
                    name="applicant_name"
                    value={applicationData.applicant_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="applicant_email">Email *</label>
                  <input
                    type="email"
                    id="applicant_email"
                    name="applicant_email"
                    value={applicationData.applicant_email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="applicant_phone">Phone</label>
                  <input
                    type="tel"
                    id="applicant_phone"
                    name="applicant_phone"
                    value={applicationData.applicant_phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience_years">Years of Experience</label>
                  <input
                    type="number"
                    id="experience_years"
                    name="experience_years"
                    value={applicationData.experience_years}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="current_position">Current Position</label>
                  <input
                    type="text"
                    id="current_position"
                    name="current_position"
                    value={applicationData.current_position}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="current_company">Current Company</label>
                  <input
                    type="text"
                    id="current_company"
                    name="current_company"
                    value={applicationData.current_company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="resume_url">Resume URL</label>
                <input
                  type="url"
                  id="resume_url"
                  name="resume_url"
                  value={applicationData.resume_url}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="portfolio_url">Portfolio URL</label>
                <input
                  type="url"
                  id="portfolio_url"
                  name="portfolio_url"
                  value={applicationData.portfolio_url}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="linkedin_url">LinkedIn Profile</label>
                <input
                  type="url"
                  id="linkedin_url"
                  name="linkedin_url"
                  value={applicationData.linkedin_url}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="cover_letter">Cover Letter</label>
                <textarea
                  id="cover_letter"
                  name="cover_letter"
                  value={applicationData.cover_letter}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us why you&apos;re interested in this position..."
                />
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}
