'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-floral-white px-6">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-carbon-black">Something Went Wrong</h2>
        <p className="text-charcoal-brown mb-8">
          We encountered an unexpected error. Our team has been notified.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blood-red text-floral-white rounded hover:bg-blood-red/90 transition-colors font-bold mono uppercase"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
