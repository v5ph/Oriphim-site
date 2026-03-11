import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Oriphim Labs',
  description: 'Insights on AI validation infrastructure, compliance guardrails, and deterministic agent operations.',
}

export default function BlogPage() {
  return (
    <main className="bg-grid relative min-h-screen" id="main-content">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 py-24 mt-16">
        <header className="glass-panel text-center py-16 px-8">
          <p className="mono text-brand-green mb-3 tracking-[0.25em] text-xs uppercase">Oriphim Journal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Blog</h1>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">Coming Soon</p>
        </header>
      </div>

      <Footer />
    </main>
  )
}
