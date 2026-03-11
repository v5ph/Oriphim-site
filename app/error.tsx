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
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-6">
      <div className="max-w-md text-center glass-panel p-8">
        <h2 className="text-3xl font-bold mb-4 text-text-primary">Something Went Wrong</h2>
        <p className="text-text-secondary mb-8">
          We encountered an unexpected error. Our team has been notified.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-green text-bg-primary rounded-lg hover:bg-accent-green transition-colors font-bold mono uppercase"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
