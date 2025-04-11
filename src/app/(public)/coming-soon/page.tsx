'use client'

export default function ComingSoon() {
    return (
        <div className="h-screen w-screen fixed inset-0 bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                    Coming Soon
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    We&apos;re working hard to bring you an amazing experience. Stay tuned!
                </p>
            </div>
        </div>
    )
} 