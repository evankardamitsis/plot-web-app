import { Metadata } from "next"
import { AuthProvider } from "../contexts/AuthContext"

export const metadata: Metadata = {
  title: "Authentication - Plot",
  description: "Login or sign up to Plot",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </AuthProvider>
  )
}