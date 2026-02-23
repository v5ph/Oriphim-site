import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Legal & Terms of Use - Oriphim Labs',
  description: 'Legal terms for Oriphim AI validation infrastructure and compliance middleware.'
}

export default function LegalPage() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon-black">Legal & Terms of Use</h1>
          
          <p className="text-charcoal-brown mb-8">
            <strong>Effective Date:</strong> January 1, 2026
          </p>
          
          <p className="text-charcoal-brown leading-relaxed mb-6">
            Oriphim Labs LLC ("Oriphim", "we", "our") provides AI validation infrastructure and compliance middleware to financial institutions and enterprise clients. By accessing or using any Oriphim product or service, you ("Client", "you") agree to the terms below.
          </p>
        
        <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">1. Service Definition</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Oriphim provides <strong>pre-execution validation infrastructure</strong> that evaluates proposed actions from autonomous AI agents against mathematical constraints, regulatory rules, and physical plausibility checks. We deliver validation outcomes (PASS/BLOCK) with explanatory audit trails.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Oriphim does not:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Execute trades, transactions, or financial operations</li>
                <li>Provide investment advice or trading recommendations</li>
                <li>Make decisions on behalf of Client systems</li>
                <li>Access Client funds, accounts, or execution venues</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Clients retain full authority over whether to execute actions that pass validation. Oriphim’s role is limited to validation logic—execution discretion remains with the Client.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">2. Licensing & Intellectual Property</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                All Oriphim software, validation engines, constraint libraries, and proprietary algorithms are <strong>licensed, not sold</strong>, and remain the exclusive intellectual property of Oriphim Labs LLC.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Prohibited Actions</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Reverse engineer, decompile, or extract validation logic</li>
                <li>Resell, sublicense, or distribute Oriphim software</li>
                <li>Use validation services outside agreed-upon environments</li>
                <li>Transfer API credentials or access rights to third parties</li>
                <li>Benchmark or publish performance comparisons without written consent</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Access rights, usage limits, deployment configurations, and pricing are governed by a separate <strong>Master Service Agreement (MSA)</strong> executed per client.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">3. Validation Accuracy & Limitations</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Oriphim employs commercially reasonable efforts to ensure validation accuracy, but <strong>no system is infallible</strong>.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Disclaimers</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>False Negatives:</strong> Oriphim may fail to block invalid actions (validation logic gaps, novel attack vectors, system latency)</li>
                <li><strong>False Positives:</strong> Oriphim may block valid actions (overly conservative constraints, integration errors)</li>
                <li><strong>Third-Party Dependencies:</strong> Validation accuracy depends on data quality from Client systems (market feeds, account balances, reference data)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Client Responsibility</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Implement secondary safeguards (position limits, human review for high-risk actions)</li>
                <li>Test validation logic in non-production environments before live deployment</li>
                <li>Monitor false positive/negative rates and report anomalies</li>
                <li>Maintain accurate system state (balances, positions, compliance status)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                Oriphim is not liable for trading losses, regulatory violations, or operational failures resulting from validation errors, system outages, or Client misconfigurations.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">4. Data Handling & Security</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Data Access</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Oriphim validation services operate on <strong>action metadata only</strong> (proposed trade parameters, account states, constraint definitions). We do not require access to proprietary strategies or alpha signals, customer PII, or execution venue credentials.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Audit Logs</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                All validation requests and outcomes are logged with cryptographic timestamps. Clients may export audit trails for regulatory reporting or internal compliance reviews.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>API Security</strong></p>
              <p className="text-charcoal-brown leading-relaxed">
                Clients are responsible for safeguarding API keys, implementing network-level access controls (IP whitelisting, VPNs), and rotating credentials per internal security policies. Oriphim reserves the right to suspend service immediately upon detecting credential compromise or abusive usage patterns.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">5. Service Availability & Support</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Uptime Commitment</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Oriphim targets <strong>99.9% uptime</strong> for production validation APIs (excludes scheduled maintenance windows announced 48 hours in advance).
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Latency Targets</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Standard validation: &lt; 50ms (p99)</li>
                <li>Complex simulations: &lt; 500ms (p99)</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Incident Response</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Critical outages or validation failures are escalated within 15 minutes. Clients receive real-time status updates via dedicated Slack/Teams channels.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Support Tiers</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Enterprise:</strong> 24/7 on-call engineering support</li>
                <li><strong>Standard:</strong> Business hours (9 AM – 6 PM ET, Mon–Fri)</li>
              </ul>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">6. Confidentiality</h2>
              <p className="text-charcoal-brown leading-relaxed">
                All materials exchanged between Oriphim and Client are confidential and subject to mutual NDA terms, including validation rule configurations, integration documentation, performance metrics, validation statistics, and audit reports. Clients may not disclose Oriphim architecture, constraint definitions, or validation methodologies to third parties without explicit written consent.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">7. Regulatory Compliance</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Client Obligations</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Clients remain solely responsible for compliance with applicable financial regulations (MiFID II, Dodd-Frank, GDPR, etc.). Oriphim provides validation infrastructure but does not assume regulatory responsibility for Client trading activities.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Cooperation with Regulators</strong></p>
              <p className="text-charcoal-brown leading-relaxed">
                In the event of regulatory inquiry, Oriphim will provide audit logs and technical documentation as legally required, with advance notice to Client where permitted.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">8. Liability & Indemnification</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Limitation of Liability</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                To the maximum extent permitted by law, Oriphim’s aggregate liability for any claim arising from these terms shall not exceed <strong>fees paid by Client in the 12 months preceding the claim</strong>.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Oriphim is not liable for:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Indirect, consequential, or punitive damages</li>
                <li>Lost profits or trading opportunity costs</li>
                <li>Regulatory fines or penalties</li>
                <li>Third-party claims arising from Client’s use of validated actions</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Client Indemnity</strong></p>
              <p className="text-charcoal-brown leading-relaxed">
                Client agrees to indemnify and hold harmless Oriphim Labs LLC, its officers, employees, and affiliates against any claims, liabilities, or damages arising from misuse of validation infrastructure, Client’s execution of actions (whether validated or not), breach of confidentiality obligations, or violation of applicable laws or regulations.
              </p>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">9. Term & Termination</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Contract Duration</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Service terms are defined in the Master Service Agreement. Either party may terminate with 30 days’ written notice.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Post-Termination</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li>Client access to validation APIs is revoked immediately</li>
                <li>Client must delete all Oriphim software and documentation</li>
                <li>Audit logs remain accessible for 90 days (for compliance export)</li>
                <li>Confidentiality obligations survive indefinitely</li>
              </ul>
            </section>


            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">10. Amendments & Disputes</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Changes to Terms</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Oriphim may update these terms with 30 days’ notice. Material changes require explicit Client acceptance. Continued use of services after notice period constitutes acceptance.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Governing Law</strong></p>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                These terms are governed by the laws of the <strong>State of Delaware</strong>, without regard to conflict of law provisions.
              </p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Dispute Resolution</strong></p>
              <p className="text-charcoal-brown leading-relaxed">
                Disputes shall be resolved through binding arbitration under JAMS rules (San Francisco, CA venue). Each party bears its own legal costs unless arbitrator rules otherwise.
              </p>
            </section>


            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">11. Contact & Support</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Legal Inquiries:</strong> <a href="mailto:legal@oriphim.com" className="text-blood-red hover:underline">legal@oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Technical Support:</strong> <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Security Incidents:</strong> <a href="mailto:security@oriphim.com" className="text-blood-red hover:underline">security@oriphim.com</a></p>
              <p className="text-charcoal-brown mt-2">Oriphim Labs LLC</p>
              <p className="text-charcoal-brown">Registered in Delaware, USA</p>
              <p className="text-charcoal-brown">EIN: [To be assigned]</p>
              <p className="text-charcoal-brown mt-4"><em>Last Updated: January 1, 2026</em></p>
              <p className="text-charcoal-brown"><em>Version: 2.0 (Infrastructure Positioning)</em></p>
            </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
