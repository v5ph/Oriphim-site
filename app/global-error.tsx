'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-floral-white px-6">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-carbon-black">Critical Error</h2>
            <p className="text-charcoal-brown mb-8">
              A critical error occurred. Please refresh the page or contact support.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-blood-red text-floral-white rounded hover:bg-blood-red/90 transition-colors font-bold"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
