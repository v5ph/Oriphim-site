import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Service Level Agreement - Oriphim Labs',
  description: 'SLA and operational expectations for Oriphim signal delivery systems.'
}

export default function SLAPage() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon-black">Service Level Agreement (SLA)</h1>
          
          <p className="text-charcoal-brown mb-8">
            <strong>Last Updated:</strong> January 1, 2026
          </p>
          
          <p className="text-charcoal-brown leading-relaxed mb-8">
            This Service Level Agreement ("SLA") outlines the operational expectations, support scope, and responsibilities associated with Oriphim's licensed signal delivery systems. It applies to all active license holders under contract with Oriphim Labs LLC ("Oriphim", "we", "our").
          </p>
        </ScrollReveal>
        
        <div className="prose prose-lg max-w-none">
          <ScrollReveal delay={100}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">1. Signal Delivery</h2>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">API Access</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Uptime Guarantee:</strong> 99.5% monthly uptime (measured in UTC)</li>
                <li><strong>Latency Target:</strong> Sub-150ms average response time (U.S. East)</li>
                <li><strong>Rate Limits:</strong> Defined per tier (e.g., 10 req/min for Base, 50+ for Premium)</li>
              </ul>

              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Docker Deployment</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Clients are responsible for infrastructure uptime and integration</li>
                <li>We provide model versioning, update logs, and replacement images on request</li>
              </ul>

              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Failover Protection</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Redundant signal generation nodes</li>
                <li>Automated health checks with halt-state triggers on data anomalies</li>
                <li>If degraded service is detected, clients are notified within 2 hours</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">2. Security & Access</h2>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li><strong>Authentication:</strong> API key required per client; rotate every 90 days or upon request</li>
              <li><strong>Data Handling:</strong> Oriphim stores no trading data or PnL logs unless authorized for monitoring purposes</li>
              <li><strong>Isolation:</strong> No shared state between client environments; all signal streams are logically isolated</li>
            </ul>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">3. Support & Response Times</h2>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-charcoal-brown/30">
                <thead className="bg-warm-ivory">
                  <tr>
                    <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Priority</th>
                    <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Issue Type</th>
                    <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Response Time</th>
                    <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Channels</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">P1 – Critical</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">API outage, signal failure</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">&lt; 2 business hours</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Slack / Email</td>
                  </tr>
                  <tr className="bg-warm-ivory/30">
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">P2 – Major</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Degraded latency, wrong symbol response</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">&lt; 1 business day</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Slack / Email</td>
                  </tr>
                  <tr>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">P3 – Minor</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Documentation, non-urgent behavior</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">&lt; 2 business days</td>
                    <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li>Slack support available for Pro and Premium tiers</li>
              <li>Base tier receives support via email only</li>
            </ul>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">4. Model Updates & Versioning</h2>
            <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li><strong>Semantic Versioning:</strong> (e.g., v2.3.1)</li>
              <li><strong>Client Control:</strong> No forced updates; clients may lock to specific model versions</li>
              <li><strong>Changelog:</strong> All updates documented and timestamped</li>
            </ul>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">5. Trial Environment Terms</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">During trial periods:</p>
            <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li>We provide signal access for limited symbols via API or container</li>
              <li>All outputs are watermarked and logged for performance validation</li>
              <li>Trials may be revoked for misuse, sharing, or abuse of the platform</li>
            </ul>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">6. Exclusions & Limitations</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">This SLA does not apply to:</p>
            <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li>Downtime caused by client-side infrastructure or broker connectivity</li>
              <li>Delays due to market data outages beyond Oriphim's control</li>
              <li>Custom model variants not under a maintenance contract</li>
            </ul>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">7. Legal Enforcement</h2>
            <p className="text-charcoal-brown leading-relaxed mb-4">
              This SLA is enforceable only for paying clients under an active license agreement.
              Oriphim reserves the right to revise this SLA at any time with written notice.
            </p>
            <p className="text-charcoal-brown leading-relaxed mb-2">
              For SLA breaches, remedies may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
              <li>Service credits (at Oriphim's discretion)</li>
              <li>Early contract termination (if mutually agreed)</li>
            </ul>
          </section>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Contact</h2>
            <p className="text-charcoal-brown leading-relaxed mb-2">
              For SLA inquiries or technical escalations:
            </p>
            <p className="text-charcoal-brown mb-1">
              <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a>
            </p>
            <p className="text-charcoal-brown">
              Secure portal: <a href="https://api.oriphim.com/support" className="text-blood-red hover:underline">https://api.oriphim.com/support</a>
            </p>
            </section>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </main>
  )
}
