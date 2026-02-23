import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Privacy Policy - Oriphim Labs',
  description: 'Privacy policy for Oriphim AI validation infrastructure and compliance middleware.'
}

export default function PrivacyPage() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon-black">Privacy Policy</h1>
          
          <p className="text-charcoal-brown mb-8">
            <strong>Last Updated:</strong> January 1, 2026
          </p>
          
          <p className="text-charcoal-brown leading-relaxed mb-8">
            Oriphim Labs LLC ("Oriphim", "we", "our") provides AI validation infrastructure to financial institutions and enterprise clients. This Privacy Policy explains how we collect, use, and safeguard data when you access our validation services.
          </p>
        </ScrollReveal>
        
        <div className="prose prose-lg max-w-none">
          <ScrollReveal delay={100}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Minimization Principle</h2>
              <p className="text-charcoal-brown leading-relaxed">
                <strong>Oriphim is designed to validate actions without accessing sensitive business logic.</strong> We operate on validation metadata only—not proprietary strategies, customer PII, or execution credentials.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Information We Collect</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>1. Account &amp; Access Data</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Contact Information:</strong> Name, email, company affiliation, role</li>
                <li><strong>Authentication Credentials:</strong> API keys, OAuth tokens (hashed, never stored in plaintext)</li>
                <li><strong>Billing Information:</strong> Processed securely via third-party payment processor (Stripe). Oriphim does not store full credit card numbers.</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>2. Validation Request Metadata</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Action Parameters:</strong> Proposed trade attributes (symbol, quantity, direction, price constraints)</li>
                <li><strong>System State:</strong> Account balances, position snapshots, constraint configurations</li>
                <li><strong>Validation Outcomes:</strong> PASS/BLOCK decisions, triggered rules, confidence scores</li>
                <li><strong>Timestamps:</strong> Request/response latency, execution timestamps</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>We do NOT collect:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Proprietary trading algorithms or alpha signals</li>
                <li>Customer PII (end-user identities, account holder names)</li>
                <li>Execution venue credentials or API keys</li>
                <li>Post-execution trade outcomes or P&amp;L data</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>3. Technical &amp; Diagnostic Data</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Infrastructure Logs:</strong> IP addresses, request headers, API version usage</li>
                <li><strong>Performance Metrics:</strong> Latency distributions, error rates, throughput</li>
                <li><strong>Integration Diagnostics:</strong> SDK versions, deployment configurations</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>4. Communications</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Support Interactions:</strong> Email correspondence, technical support tickets</li>
                <li><strong>Contractual Documents:</strong> MSA terms, compliance questionnaires (stored securely)</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">How We Use Your Data</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Primary Purposes</strong></p>
              <ol className="list-decimal pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Service Delivery:</strong> Process validation requests, deliver PASS/BLOCK decisions</li>
                <li><strong>Audit Trail Generation:</strong> Maintain cryptographic logs for regulatory reporting</li>
                <li><strong>System Operations:</strong> Monitor uptime, detect anomalies, prevent abuse</li>
                <li><strong>Billing:</strong> Calculate usage-based fees, process invoices</li>
                <li><strong>Security:</strong> Detect credential compromise, prevent unauthorized access</li>
                <li><strong>Support:</strong> Troubleshoot integration issues, resolve validation discrepancies</li>
              </ol>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Secondary Purposes</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Service Improvement:</strong> Aggregate anonymized metrics to enhance validation accuracy</li>
                <li><strong>Compliance:</strong> Respond to legal requests, regulatory inquiries</li>
                <li><strong>Research:</strong> Develop improved constraint detection algorithms (using anonymized data only)</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Sharing &amp; Third Parties</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>We do not sell, rent, or trade client data.</strong>
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Authorized Third-Party Providers</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Cloud Infrastructure:</strong> AWS/GCP for secure hosting (SOC 2 Type II certified)</li>
                <li><strong>Database Services:</strong> Encrypted storage with Supabase (PostgreSQL) or equivalent</li>
                <li><strong>Payment Processing:</strong> Stripe (PCI-DSS compliant)</li>
                <li><strong>Monitoring:</strong> Datadog for performance metrics (anonymized telemetry only)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Legal Disclosures</strong></p>
              <p className="text-charcoal-brown leading-relaxed">
                We may disclose data when legally required: court orders, subpoenas, regulatory requests, prevention of fraud or security threats, or protection of Oriphim’s legal rights. We provide advance notice to clients before disclosure unless legally prohibited.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Security Measures</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Encryption</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>In Transit:</strong> TLS 1.3 for all API communications</li>
                <li><strong>At Rest:</strong> AES-256 encryption for databases and audit logs</li>
                <li><strong>API Keys:</strong> Hashed with bcrypt, rotated every 90 days (enforced)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Access Controls</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Role-Based Access Control (RBAC):</strong> Principle of least privilege</li>
                <li><strong>Multi-Factor Authentication (MFA):</strong> Required for all Oriphim employee accounts</li>
                <li><strong>Audit Logging:</strong> All administrative actions logged and reviewed quarterly</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Infrastructure Security</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Network Isolation:</strong> Validation engines run in isolated VPCs</li>
                <li><strong>Penetration Testing:</strong> Annual third-party security audits</li>
                <li><strong>Vulnerability Management:</strong> CVE monitoring with 48-hour patch SLA for critical issues</li>
                <li><strong>Incident Response Plan:</strong> 15-minute escalation for suspected breaches</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Compliance Readiness</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>SOC 2 Type II:</strong> Certification in progress (Q2 2026)</li>
                <li><strong>ISO 27001:</strong> Information security management framework</li>
                <li><strong>GDPR/CCPA:</strong> Full compliance with data subject rights</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Client Confidentiality</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>What We Keep Confidential</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Client identity and relationship (no public customer lists without consent)</li>
                <li>Validation rule configurations and constraint definitions</li>
                <li>Usage patterns and validation statistics</li>
                <li>Integration architecture and deployment details</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                We may publish anonymized, aggregate statistics without identifying individual clients.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Cookies &amp; Website Tracking</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Minimal Tracking</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Our public website uses privacy-safe analytics (Plausible or Simple Analytics) that do not use cookies or persistent identifiers, do not track users across sites, and do not sell data to advertisers.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Essential Cookies Only</strong></p>
              <p className="text-charcoal-brown leading-relaxed">
                Authentication sessions use secure, HTTP-only cookies that expire after 24 hours.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Retention &amp; Deletion</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Active Accounts</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Validation Logs:</strong> Retained for 12 months (configurable per client compliance requirements)</li>
                <li><strong>Audit Trails:</strong> 7 years (regulatory standard for financial records)</li>
                <li><strong>Performance Metrics:</strong> 90 days rolling window</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Terminated Accounts</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Grace Period:</strong> 90 days post-termination for compliance export</li>
                <li><strong>Permanent Deletion:</strong> All client data purged within 120 days unless legally required to retain</li>
                <li><strong>Billing Records:</strong> 7 years (IRS/tax compliance)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Clients may request early deletion via <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a>. We comply within 30 days unless retention is legally mandated.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Your Privacy Rights</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>GDPR (EU Residents)</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Right to Access:</strong> Obtain copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Right to Erasure:</strong> “Right to be forgotten” (subject to legal exceptions)</li>
                <li><strong>Right to Portability:</strong> Receive data in machine-readable format</li>
                <li><strong>Right to Restriction:</strong> Limit processing under certain conditions</li>
                <li><strong>Right to Object:</strong> Opt out of certain processing activities</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>CCPA (California Residents)</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Right to Know:</strong> What personal information is collected</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                <li><strong>Right to Opt-Out:</strong> No sale of personal information (we never sell data)</li>
                <li><strong>Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Email <a href="mailto:privacy@oriphim.com" className="text-blood-red hover:underline">privacy@oriphim.com</a> with subject line “Privacy Rights Request” and include your name, company affiliation, account email, and specific request. We respond within 30 days and verify identity before fulfilling requests.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">International Data Transfers</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Data Residency</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>US Clients:</strong> Data stored in US-based data centers (AWS us-east-1)</li>
                <li><strong>EU Clients:</strong> Data stored in EU regions (AWS eu-west-1) where available</li>
                <li><strong>Cross-Border Transfers:</strong> Protected by Standard Contractual Clauses (SCCs) per GDPR Article 46</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Clients may request data residency specifications in their Master Service Agreement.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Children’s Privacy</h2>
              <p className="text-charcoal-brown leading-relaxed">
                Oriphim services are intended for business and institutional use only. We do not knowingly collect data from individuals under 18 years of age.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Changes to This Policy</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Notification Process</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Material Changes:</strong> 30 days’ advance notice via email to primary account contact</li>
                <li><strong>Minor Updates:</strong> Published on website with updated “Last Modified” date</li>
                <li><strong>Continued Use:</strong> Constitutes acceptance unless client terminates service</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Clients may request previous policy versions by emailing <a href="mailto:privacy@oriphim.com" className="text-blood-red hover:underline">privacy@oriphim.com</a>.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Contact &amp; Data Protection Officer</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@oriphim.com" className="text-blood-red hover:underline">privacy@oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Security Incidents:</strong> <a href="mailto:security@oriphim.com" className="text-blood-red hover:underline">security@oriphim.com</a> (PGP key available on request)</p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>General Support:</strong> <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Data Protection Officer (DPO):</strong> <a href="mailto:dpo@oriphim.com" className="text-blood-red hover:underline">dpo@oriphim.com</a></p>
              <p className="text-charcoal-brown mt-2">Oriphim Labs LLC</p>
              <p className="text-charcoal-brown">Registered in Delaware, USA</p>
              <p className="text-charcoal-brown">EIN: [To be assigned]</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={750}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Regulatory Compliance Summary</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-carbon-black/20">
                      <th className="text-left py-3 px-4 font-bold text-carbon-black mono text-sm">Regulation</th>
                      <th className="text-left py-3 px-4 font-bold text-carbon-black mono text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-carbon-black/10">
                      <td className="py-3 px-4 text-charcoal-brown">GDPR (EU)</td>
                      <td className="py-3 px-4 text-charcoal-brown">✅ Full Compliance</td>
                    </tr>
                    <tr className="border-b border-carbon-black/10">
                      <td className="py-3 px-4 text-charcoal-brown">CCPA (California)</td>
                      <td className="py-3 px-4 text-charcoal-brown">✅ Full Compliance</td>
                    </tr>
                    <tr className="border-b border-carbon-black/10">
                      <td className="py-3 px-4 text-charcoal-brown">SOC 2 Type II</td>
                      <td className="py-3 px-4 text-charcoal-brown">🔄 In Progress (Q2 2026)</td>
                    </tr>
                    <tr className="border-b border-carbon-black/10">
                      <td className="py-3 px-4 text-charcoal-brown">ISO 27001</td>
                      <td className="py-3 px-4 text-charcoal-brown">🔄 Roadmap (Q3 2026)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-charcoal-brown">PCI-DSS</td>
                      <td className="py-3 px-4 text-charcoal-brown">✅ Compliant (via Stripe)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
