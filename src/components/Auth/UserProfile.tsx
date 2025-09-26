'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { User, LogOut, Settings, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function UserProfile() {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors"
      >
        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>
        <span className="font-medium hidden lg:block">
          {user.email?.split('@')[0]}
        </span>
        <ChevronDown className="w-4 h-4 hidden lg:block" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-20">
            <div className="px-4 py-2 border-b border-slate-200">
              <p className="text-sm font-medium text-slate-900">{user.email}</p>
            </div>
            
            <Link
              href="/profile"
              className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              <span>Profile Settings</span>
            </Link>
            
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
