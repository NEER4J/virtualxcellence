'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader, AlertCircle } from 'lucide-react'

export default function AdminIndex() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const checkAuth = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const supabase = createClient()
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        router.push('/admin/setup')
        return
      }

      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError) {
        console.error('Auth error:', authError)
        router.push('/admin/login?redirect=/admin')
        return
      }
      
      if (user) {
        // Check if user is admin
        const { data: adminUser, error: adminError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('email', user.email)
          .single()

        if (!adminError && adminUser) {
          router.push('/admin/dashboard')
          return
        } else {
          console.log('User is not an admin')
          // Redirect to sign-in page with message
          router.push('/admin/login?message=Admin access required')
          return
        }
      }
      
      // If not authenticated, redirect to sign-in page
      router.push('/admin/login?redirect=/admin')
    } catch (error: unknown) {
      console.error('Error checking auth:', error)
      setError(error instanceof Error ? error.message : 'An error occurred while checking authentication')
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Configuration Error</h2>
          <p className="text-slate-600 mb-4">{error}</p>
          <div className="space-y-2 text-sm text-slate-500">
            <p>Please ensure you have:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Created a Supabase project</li>
              <li>Set up environment variables in .env.local</li>
              <li>Run the database setup script</li>
            </ul>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <Loader className="w-8 h-8 text-slate-600 animate-spin mx-auto mb-4" />
        <p className="text-slate-600">Checking authentication...</p>
      </div>
    </div>
  )
}
