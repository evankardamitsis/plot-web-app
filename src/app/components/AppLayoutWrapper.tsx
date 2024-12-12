'use client'

import { usePathname } from "next/navigation"
import ProtectedRoute from "./ProtectedRoute"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname.startsWith('/auth')

  if (isAuthPage) {
    return <>{children}</>
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-36">
            <div className="p-8">
              <Header />
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
} 