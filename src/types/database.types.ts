export interface Database {
  public: {
    Tables: {
      seo_pages: {
        Row: {
          id: string
          page_path: string
          title: string
          description: string
          keywords: string[]
          og_title: string | null
          og_description: string | null
          og_image: string | null
          og_type: string | null
          twitter_card: string | null
          twitter_title: string | null
          twitter_description: string | null
          twitter_image: string | null
          canonical_url: string | null
          robots: string | null
          schema_markup: Record<string, unknown> | null
          sitemap_included: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          page_path: string
          title: string
          description: string
          keywords: string[]
          og_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_type?: string | null
          twitter_card?: string | null
          twitter_title?: string | null
          twitter_description?: string | null
          twitter_image?: string | null
          canonical_url?: string | null
          robots?: string | null
          schema_markup?: Record<string, unknown> | null
          sitemap_included?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          page_path?: string
          title?: string
          description?: string
          keywords?: string[]
          og_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_type?: string | null
          twitter_card?: string | null
          twitter_title?: string | null
          twitter_description?: string | null
          twitter_image?: string | null
          canonical_url?: string | null
          robots?: string | null
          schema_markup?: Record<string, unknown> | null
          sitemap_included?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      admin_users: {
        Row: {
          id: string
          email: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          message: string
          source: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          message: string
          source: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string
          source?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      careers_posts: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          content: string
          location: string | null
          employment_type: string
          experience_level: string
          department: string | null
          salary_range: string | null
          benefits: string[] | null
          requirements: string[] | null
          responsibilities: string[] | null
          skills_required: string[] | null
          is_active: boolean
          is_featured: boolean
          application_deadline: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          content: string
          location?: string | null
          employment_type: string
          experience_level: string
          department?: string | null
          salary_range?: string | null
          benefits?: string[] | null
          requirements?: string[] | null
          responsibilities?: string[] | null
          skills_required?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          application_deadline?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          content?: string
          location?: string | null
          employment_type?: string
          experience_level?: string
          department?: string | null
          salary_range?: string | null
          benefits?: string[] | null
          requirements?: string[] | null
          responsibilities?: string[] | null
          skills_required?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          application_deadline?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      career_applications: {
        Row: {
          id: string
          career_post_id: string
          applicant_name: string
          applicant_email: string
          applicant_phone: string | null
          cover_letter: string | null
          resume_url: string | null
          portfolio_url: string | null
          linkedin_url: string | null
          experience_years: number | null
          current_position: string | null
          current_company: string | null
          expected_salary: string | null
          availability_date: string | null
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          career_post_id: string
          applicant_name: string
          applicant_email: string
          applicant_phone?: string | null
          cover_letter?: string | null
          resume_url?: string | null
          portfolio_url?: string | null
          linkedin_url?: string | null
          experience_years?: number | null
          current_position?: string | null
          current_company?: string | null
          expected_salary?: string | null
          availability_date?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          career_post_id?: string
          applicant_name?: string
          applicant_email?: string
          applicant_phone?: string | null
          cover_letter?: string | null
          resume_url?: string | null
          portfolio_url?: string | null
          linkedin_url?: string | null
          experience_years?: number | null
          current_position?: string | null
          current_company?: string | null
          expected_salary?: string | null
          availability_date?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type SeoPage = Database['public']['Tables']['seo_pages']['Row']
export type SeoPageInsert = Database['public']['Tables']['seo_pages']['Insert']
export type SeoPageUpdate = Database['public']['Tables']['seo_pages']['Update']

export type AdminUser = Database['public']['Tables']['admin_users']['Row']

export type Lead = Database['public']['Tables']['leads']['Row']
export type LeadInsert = Database['public']['Tables']['leads']['Insert']
export type LeadUpdate = Database['public']['Tables']['leads']['Update']

export type CareerPost = Database['public']['Tables']['careers_posts']['Row']
export type CareerPostInsert = Database['public']['Tables']['careers_posts']['Insert']
export type CareerPostUpdate = Database['public']['Tables']['careers_posts']['Update']

export type CareerApplication = Database['public']['Tables']['career_applications']['Row']
export type CareerApplicationInsert = Database['public']['Tables']['career_applications']['Insert']
export type CareerApplicationUpdate = Database['public']['Tables']['career_applications']['Update']
