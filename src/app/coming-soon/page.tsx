'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ComingSoon() {
    const router = useRouter()

    useEffect(() => {
        // Redirect to full app in development
        if (process.env.NODE_ENV === 'development') {
            router.push('/')
        }
    }, [router])

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                    Coming Soon
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    We're working hard to bring you an amazing experience. Stay tuned!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://github.com/plot-io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Follow on GitHub
                    </a>
                    <a
                        href="mailto:contact@myplot.io"
                        className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
} 