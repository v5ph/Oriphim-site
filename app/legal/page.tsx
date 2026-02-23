import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Legal & Terms of Use - Oriphim Labs',
  description: 'Licensing terms and legal information for Oriphim signal engines and services.'
}

export default function LegalPage() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon-black">Legal & Terms of Use</h1>
          
          <p className="text-charcoal-brown mb-8">
            <strong>Effective Date:</strong> January 1, 2026
          </p>
          
          <p className="text-charcoal-brown leading-relaxed mb-6">
            Oriphim Labs LLC ("Oriphim", "we", "our") provides proprietary signal engines and related services to institutional clients under strict licensing agreements. By accessing or using any Oriphim product or service, you ("Client", "you") agree to the terms below.
          </p>
        </ScrollReveal>
        
        <div className="prose prose-lg max-w-none">
          <ScrollReveal delay={100}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">1. No Investment Advice</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Oriphim does not provide trading advice, investment recommendations, or portfolio management.
                We deliver mathematical indicators and signal outputs for informational and research purposes only. Clients retain full discretion and responsibility for all execution decisions.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">2. Licensing Terms</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">
              All Oriphim models, algorithms, and signal outputs are licensed, not sold, and remain the intellectual property of Oriphim Labs LLC.
            </p>
            <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Clients may not:</strong></p>
            <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li>Reverse engineer, resell, distribute, or expose the underlying models.</li>
              <li>Use the signals outside the scope of agreed-upon systems or trading environments.</li>
              <li>Transfer access to third parties without written consent.</li>
            </ul>
            <p className="text-charcoal-brown leading-relaxed">
              License terms, durations, and pricing are governed by a separate written agreement per client.
            </p>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">3. Performance Disclaimer</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">
              All performance references (historical or forward-looking) are for illustrative purposes only and do not guarantee future returns.
              Markets involve risk, and past performance is not indicative of future results.
            </p>
            <p className="text-charcoal-brown leading-relaxed">
              Clients are solely responsible for the use of Oriphim signals in live or simulated environments. Oriphim shall not be liable for any trading losses, system outages, or opportunity costs resulting from use of its products.
            </p>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">4. Data & Access</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">
              Signal delivery is provided via secure API or containerized deployment. Clients are responsible for protecting API keys and maintaining integration security.
            </p>
            <p className="text-charcoal-brown leading-relaxed">
              Oriphim reserves the right to monitor usage for abuse, halt service in case of breach, and revoke access for nonpayment or contract violations.
            </p>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">5. Confidentiality</h2>
            <p className="text-charcoal-brown leading-relaxed">
              All communications, deliverables, signal structures, and strategy descriptions are confidential.
              Clients may not disclose Oriphim materials, documentation, or outputs to third parties without explicit consent.
            </p>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">6. Indemnity</h2>
            <p className="text-charcoal-brown leading-relaxed">
              Clients agree to indemnify and hold harmless Oriphim Labs LLC and its affiliates against any claims, liabilities, or damages arising from misuse of licensed systems, trading activity, or violation of these terms.
            </p>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">7. Amendments & Jurisdiction</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">
              These terms may be updated without notice. Formal license agreements supersede this document where applicable.
            </p>
            <p className="text-charcoal-brown leading-relaxed">
              This agreement shall be governed by the laws of the State of Delaware, without regard to conflict of law provisions.
            </p>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Contact</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2">
                For legal inquiries or licensing support:
              </p>
              <p className="text-charcoal-brown">
                <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a>
              </p>
              <p className="text-charcoal-brown mt-2">Oriphim Labs LLC</p>
            </section>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </main>
  )
}
