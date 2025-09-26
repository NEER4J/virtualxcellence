'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Home/Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  
  // Don't show main header on admin pages
  if (pathname.startsWith('/admin')) {
    return null
  }
  
  return <Header />
}
