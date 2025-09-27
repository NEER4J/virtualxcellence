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
