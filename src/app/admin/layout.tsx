import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel - Virtual Xcellence',
  description: 'Admin dashboard for managing SEO and website content',
  robots: 'noindex, nofollow',
}

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      {/* Tailwind CSS CDN for admin pages */}
      <script src="https://cdn.tailwindcss.com" async></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                  }
                }
              }
            }
          }
        `
      }} />
      
      <div className="min-h-screen bg-slate-50">
        <main className="">
          {children}
        </main>
      </div>
    </>
  )
}
