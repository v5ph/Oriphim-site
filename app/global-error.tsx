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
        <div className="min-h-screen flex items-center justify-center bg-bg-primary px-6">
          <div className="max-w-md text-center glass-panel p-8">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Critical Error</h2>
            <p className="text-text-secondary mb-8">
              A critical error occurred. Please refresh the page or contact support.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-brand-green text-bg-primary rounded-lg hover:bg-accent-green transition-colors font-bold"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
