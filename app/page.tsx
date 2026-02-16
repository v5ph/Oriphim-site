'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import CoreCompetencies from '@/components/CoreCompetencies'
import AgenticAudit from '@/components/AgenticAudit'
import InstitutionalForm from '@/components/InstitutionalForm'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      <HeroBanner />
      
      {/* Add padding to push content below banner */}
      <div className="relative z-10 pt-96">
        <ScrollReveal>
          <CoreCompetencies />
        </ScrollReveal>
      <ScrollReveal delay={100}>
        <AgenticAudit />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <InstitutionalForm />
      </ScrollReveal>
      </div>
      <Footer />
    </main>
  )
}
