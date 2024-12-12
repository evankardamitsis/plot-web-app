import { Metadata } from "next"

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  )
}