'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import CoreCompetencies from '@/components/CoreCompetencies'
import AgenticAudit from '@/components/AgenticAudit'
import TechnicalDifferentiators from '@/components/TechnicalDifferentiators'
import InstitutionalForm from '@/components/InstitutionalForm'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="bg-grid relative" role="main" id="main-content">
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
        <TechnicalDifferentiators />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <InstitutionalForm />
      </ScrollReveal>
      </div>
      <Footer />
    </main>
  )
}
