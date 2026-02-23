import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Service Level Agreement - Oriphim Labs',
  description: 'Service level commitments for Oriphim AI validation infrastructure.'
}

export default function SLAPage() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon-black">Service Level Agreement (SLA)</h1>
          
          <p className="text-charcoal-brown mb-8">
            <strong>Effective Date:</strong> January 1, 2026
          </p>
          
          <p className="text-charcoal-brown leading-relaxed mb-8">
            This Service Level Agreement ("SLA") defines the operational commitments, support scope, and responsibilities for Oriphim's AI validation infrastructure. It applies to all active clients under a Master Service Agreement with Oriphim Labs LLC ("Oriphim", "we", "our").
          </p>
        </ScrollReveal>
        
        <div className="prose prose-lg max-w-none">
          <ScrollReveal delay={100}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">1. Service Availability</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Uptime Commitment</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>99.9% monthly uptime</strong> (measured in UTC, excluding scheduled maintenance)
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Measurement:</strong> Percentage of successful validation API responses (HTTP 200/400) vs. infrastructure failures (HTTP 5xx)</li>
                <li><strong>Scheduled Maintenance:</strong> Announced 48 hours in advance, capped at 4 hours per month</li>
                <li><strong>Unscheduled Downtime:</strong> Emergency maintenance announced immediately via status page and dedicated channels</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Downtime Credits</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-charcoal-brown/30">
                  <thead className="bg-warm-ivory">
                    <tr>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Uptime Achieved</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Service Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">99.5% – 99.9%</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">10% monthly fee</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">99.0% – 99.5%</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">25% monthly fee</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">&lt; 99.0%</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">50% monthly fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-brown leading-relaxed">
                <strong>Credit Redemption:</strong> Automatically applied to next invoice; no cash refunds.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">2. Performance Targets</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Validation Latency (p99)</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Standard Validations:</strong> &lt; 50ms</li>
                <li><strong>Simulation-Based Validations:</strong> &lt; 500ms</li>
                <li><strong>Batch Validation Requests:</strong> &lt; 2 seconds (up to 100 actions)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>Measurement:</strong> Time from API request receipt to validation outcome delivery, measured at Oriphim edge nodes.
              </p>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Throughput Limits (Per Tier)</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-charcoal-brown/30">
                  <thead className="bg-warm-ivory">
                    <tr>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Tier</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Requests/Second</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Burst Capacity</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Concurrent Simulations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>Standard</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">100 req/s</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">200 req/s (30s)</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">10</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>Professional</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">500 req/s</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">1,000 req/s (60s)</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">50</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>Enterprise</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Custom</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Custom</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-brown leading-relaxed">
                <strong>Rate Limit Handling:</strong> HTTP 429 responses when exceeded; requests queued for up to 5 seconds before rejection.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">3. Deployment Models</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Cloud-Hosted API</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Multi-Region Availability:</strong> US-East, US-West, EU-West (select additional regions in MSA)</li>
                <li><strong>Automatic Failover:</strong> Sub-60 second switchover to backup region</li>
                <li><strong>TLS 1.3 Encryption:</strong> All data in transit</li>
                <li><strong>DDoS Protection:</strong> Cloudflare Enterprise with rate limiting</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Self-Hosted Containers</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Client Responsibility:</strong> Infrastructure uptime, network security, resource allocation</li>
                <li><strong>Oriphim Provides:</strong> Docker images with validation engine, version updates, security patches</li>
                <li><strong>Update Cadence:</strong> Security patches within 48 hours of CVE disclosure; feature updates quarterly</li>
                <li><strong>Support:</strong> Limited to container configuration and integration—not underlying infrastructure</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Hybrid Deployment</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Validation Engine:</strong> On-premises (for low-latency/compliance)</li>
                <li><strong>Audit Logging:</strong> Cloud-based (for centralized reporting)</li>
                <li><strong>Sync Protocol:</strong> Encrypted message queue with 99.99% delivery guarantee</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">4. Security Commitments</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Authentication &amp; Access</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>API Key Rotation:</strong> Enforced every 90 days (automated notification 14 days prior)</li>
                <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions per integration environment</li>
                <li><strong>IP Whitelisting:</strong> Optional per-client configuration</li>
                <li><strong>OAuth 2.0:</strong> Available for enterprise integrations</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Data Handling</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>No PII Storage:</strong> Oriphim validates action metadata only—no customer PII required</li>
                <li><strong>Audit Log Encryption:</strong> AES-256 at rest; TLS 1.3 in transit</li>
                <li><strong>Log Retention:</strong> 12 months (configurable up to 7 years for compliance)</li>
                <li><strong>Client Isolation:</strong> Dedicated validation contexts—no cross-client data leakage</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Vulnerability Management</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Security Audits:</strong> Annual third-party penetration testing</li>
                <li><strong>CVE Response:</strong> Critical vulnerabilities patched within 48 hours</li>
                <li><strong>Incident Notification:</strong> Security breaches disclosed within 24 hours of detection</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">5. Support &amp; Escalation</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Response Time Commitments</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-charcoal-brown/30">
                  <thead className="bg-warm-ivory">
                    <tr>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Priority</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Definition</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Response Time</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Resolution Target</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Channels</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P1 – Critical</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">API outage, validation failures blocking production</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">15 minutes</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">4 hours</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Phone, Slack, Email</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P2 – Major</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Degraded latency (&gt;2x SLA), false positive spike</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">2 business hours</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">24 hours</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Slack, Email</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P3 – Minor</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Non-critical bugs, documentation errors</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">1 business day</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">5 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email, Portal</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P4 – Enhancement</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Feature requests, integration questions</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">2 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Best effort</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email, Portal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Support Tiers</h3>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Standard Tier:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Email support (business hours: 9 AM – 6 PM ET, Mon–Fri)</li>
                <li>Community documentation access</li>
                <li>Monthly system health reports</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Professional Tier:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Slack channel with engineering team</li>
                <li>Extended hours support (6 AM – 10 PM ET, Mon–Fri)</li>
                <li>Quarterly business reviews (QBRs)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Enterprise Tier:</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li>Dedicated Slack channel with 24/7 on-call engineers</li>
                <li>Named customer success manager</li>
                <li>Custom integration support and validation rule tuning</li>
                <li>Monthly executive reports with validation analytics</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">6. Change Management</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Version Control</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Semantic Versioning:</strong> MAJOR.MINOR.PATCH (e.g., v3.2.1)</li>
                <li><strong>Backward Compatibility:</strong> MINOR/PATCH updates non-breaking; MAJOR updates announced 60 days in advance</li>
                <li><strong>Version Pinning:</strong> Clients may lock to specific versions for 12 months (security patches still enforced)</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Update Notifications</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Security Patches:</strong> Immediate notification via email + status page</li>
                <li><strong>Feature Releases:</strong> 14-day advance notice with changelog</li>
                <li><strong>Deprecations:</strong> 180-day notice before end-of-life</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Testing Environments</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Staging API:</strong> Mirror production with latest features (99.5% uptime, no SLA credits)</li>
                <li><strong>Sandbox:</strong> Isolated testing environment with synthetic data</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">7. Monitoring &amp; Transparency</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Real-Time Status Page</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Public dashboard at <a href="https://status.oriphim.com" className="text-blood-red hover:underline">status.oriphim.com</a> showing API uptime per region, latency (p50, p95, p99), incident history, and root cause analyses.
              </p>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Client Dashboards</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Validation request volume and outcomes (PASS/BLOCK ratio)</li>
                <li>Latency distributions by validation type</li>
                <li>Most-triggered constraint rules</li>
                <li>False positive/negative reporting tool</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Incident Post-Mortems</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li>Root cause analysis within 5 business days for P1/P2 incidents</li>
                <li>Corrective action plan with implementation timeline</li>
                <li>Transparent disclosure unless security-sensitive</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">8. Proof of Concept (POC) Terms</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">POC Scope (30-Day Duration)</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Access to staging API with production-equivalent validation logic</li>
                <li>Up to 10,000 validation requests</li>
                <li>Standard tier support (email only)</li>
                <li>No service credits or SLA enforcement during POC</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">POC Success Criteria</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Mutually defined in POC agreement (e.g., “Block ≥3 invalid actions that would pass existing safeguards”).
              </p>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">POC to Production Migration</h3>
              <p className="text-charcoal-brown leading-relaxed">
                Zero-downtime upgrade—validation rules and audit logs preserved.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">9. Limitations &amp; Exclusions</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">SLA Does Not Cover</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Client-Side Issues:</strong> Network outages, misconfigured integrations, resource exhaustion</li>
                <li><strong>Third-Party Dependencies:</strong> Market data provider outages, execution venue downtime</li>
                <li><strong>Force Majeure:</strong> Natural disasters, acts of war, government actions</li>
                <li><strong>Custom Deployments:</strong> Bespoke validation logic not under active maintenance contract</li>
                <li><strong>Beta Features:</strong> Clearly marked features in testing phase</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">False Positive/Negative Handling</h3>
              <p className="text-charcoal-brown leading-relaxed">
                Oriphim strives for &lt;0.1% false positive rate but does not guarantee zero validation errors. Clients must implement secondary safeguards for high-risk actions.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">10. Compliance &amp; Legal</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Regulatory Alignment</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>SOC 2 Type II:</strong> Certification in progress (Q2 2026)</li>
                <li><strong>GDPR/CCPA:</strong> Full compliance with data subject rights</li>
                <li><strong>Financial Regulations:</strong> Audit trails meet FINRA/SEC record-keeping requirements</li>
              </ul>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">SLA Enforcement</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                This SLA is enforceable only for clients with active, paid Master Service Agreements. Oriphim reserves the right to update this SLA with 30 days' written notice.
              </p>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Dispute Resolution</h3>
              <p className="text-charcoal-brown leading-relaxed">
                SLA credit disputes resolved via support ticket within 10 business days. Binding arbitration per MSA terms if unresolved.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">11. Contact &amp; Escalation</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Technical Support:</strong> <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a> | Slack (Pro/Enterprise tiers)</p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Critical Incidents (P1):</strong> +1 (XXX) XXX-XXXX (24/7 hotline for Enterprise tier)</p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Service Requests:</strong> <a href="https://portal.oriphim.com/support" className="text-blood-red hover:underline">https://portal.oriphim.com/support</a></p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Status Page:</strong> <a href="https://status.oriphim.com" className="text-blood-red hover:underline">https://status.oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed"><strong>Customer Success:</strong> <a href="mailto:success@oriphim.com" className="text-blood-red hover:underline">success@oriphim.com</a> (Pro/Enterprise tiers)</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">12. SLA Review Cadence</h2>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Quarterly:</strong> Performance metrics review with Professional/Enterprise clients</li>
                <li><strong>Annually:</strong> SLA terms renegotiation aligned with MSA renewal</li>
                <li><strong>Ad-Hoc:</strong> Post-major incident or upon client request</li>
              </ul>
              <p className="text-charcoal-brown mt-4"><em>Last Updated: January 1, 2026</em></p>
              <p className="text-charcoal-brown"><em>Version: 2.0 (Infrastructure Positioning)</em></p>
              <p className="text-charcoal-brown">© 2026 Oriphim Labs LLC. All rights reserved.</p>
            </section>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </main>
  )
}
