"use client";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function VerifyEmail() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-bold text-green-800">Check your email</h1>
        <p className="text-gray-600">
          We&apos;ve sent you a verification link. Please check your email to verify your account.
        </p>
        <p className="text-sm text-gray-500">
          You&apos;ll be redirected to the home page in a few seconds.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 text-green-600 hover:text-green-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
