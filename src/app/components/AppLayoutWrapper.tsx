'use client'

import { usePathname } from "next/navigation"
import { AuthProvider } from "../contexts/AuthContext"
import Header from "./Header"
import Sidebar from "./Sidebar"

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isPublicPage = pathname === '/coming-soon' || pathname === '/'
  const isAuthPage = pathname.startsWith('/auth')

  return (
    <AuthProvider>
      <div className={`h-screen ${isPublicPage || isAuthPage ? 'overflow-hidden' : ''} bg-gradient-to-br from-gray-900 to-black text-white`}>
        {!isPublicPage && !isAuthPage && <Sidebar />}
        <main className={`${!isPublicPage && !isAuthPage ? 'ml-24' : ''} h-full ${isPublicPage || isAuthPage ? '' : 'overflow-auto'}`}>
          {!isPublicPage && !isAuthPage && <Header />}
          <div className={`${isPublicPage || isAuthPage ? 'h-full flex items-center justify-center' : 'p-8'}`}>
            {children}
          </div>
        </main>
      </div>
    </AuthProvider>
  )
} 