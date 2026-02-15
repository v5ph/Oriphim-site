import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CoreCompetencies from '@/components/CoreCompetencies'
import AgenticAudit from '@/components/AgenticAudit'
import InstitutionalForm from '@/components/InstitutionalForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      <Hero />
      <CoreCompetencies />
      <AgenticAudit />
      <InstitutionalForm />
      <Footer />
    </main>
  )
}
