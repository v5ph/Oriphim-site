import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Service Level Agreement - Oriphim Labs',
  description: 'Service level commitments for Oriphim AI validation infrastructure.'
}

export default function SLAPage() {
  return (
    <main className="bg-grid relative">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon-black">Service Level Agreement (SLA)</h1>
          
          <p className="text-charcoal-brown mb-8">
            <strong>Effective Date:</strong> February 23, 2026
          </p>
          
          <p className="text-charcoal-brown leading-relaxed mb-8">
            This Service Level Agreement ("SLA") defines the operational commitments, support scope, and responsibilities for Oriphim's AI validation infrastructure. It applies to all active clients under a Master Service Agreement with Oriphim Labs LLC ("Oriphim", "we", "our").
          </p>
        
        <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">1. Service Availability</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Uptime Commitment</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>99.5% monthly uptime</strong> (measured in UTC, excluding scheduled maintenance)
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Measurement:</strong> Percentage of successful validation API responses (HTTP 200/400/424) vs. infrastructure failures (HTTP 5xx)</li>
                <li><strong>Scheduled Maintenance:</strong> Announced 72 hours in advance, capped at 6 hours per month</li>
                <li><strong>Unscheduled Downtime:</strong> Emergency maintenance announced immediately via email and status updates</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Downtime Credits</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                If uptime falls below 99.5% in a calendar month:
              </p>
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
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">99.0% – 99.5%</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">10% monthly fee</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">98.0% – 99.0%</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">25% monthly fee</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">&lt; 98.0%</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">50% monthly fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-brown leading-relaxed">
                <strong>Credit Redemption:</strong> Applied to next invoice upon client request within 30 days of incident; no cash refunds.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">2. Performance Targets</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Validation Latency (p95)</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Standard Validations</strong> (<code>/v2/validate</code>): 50-200ms</li>
                <li><strong>Async Validations</strong> (<code>/v3/intent</code>): &lt;10ms acknowledgment, 50-200ms background processing</li>
                <li><strong>Health Checks</strong> (<code>/v2/health</code>): &lt;100ms</li>
                <li><strong>Agent Rollback</strong> (<code>/v3/rewind/&#123;agent_id&#125;</code>): &lt;200ms</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>Measurement:</strong> Time from API request receipt to validation outcome delivery, measured at application layer.
              </p>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Throughput Limits (Per Tier)</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-charcoal-brown/30">
                  <thead className="bg-warm-ivory">
                    <tr>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Tier</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Requests/Second</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Burst Capacity</th>
                      <th className="border border-charcoal-brown/30 px-4 py-3 text-left text-carbon-black font-semibold">Concurrent Validations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>Standard</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">50 req/s</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">100 req/s (30s)</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">10</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>Professional</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">200 req/s</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">400 req/s (60s)</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">50</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>Enterprise</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Custom</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Custom</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Custom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-brown leading-relaxed">
                <strong>Rate Limit Handling:</strong> HTTP 429 responses when exceeded; no automatic queuing (client implements retry logic).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">3. Deployment Models</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Cloud-Hosted API (Primary)</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Single-Region Availability:</strong> US-East-1 (additional regions available for Enterprise tier)</li>
                <li><strong>Horizontal Scaling:</strong> Automatic load balancing across multiple instances</li>
                <li><strong>TLS 1.2+ Encryption:</strong> All data in transit</li>
                <li><strong>Infrastructure:</strong> FastAPI + Uvicorn on containerized deployment</li>
                <li><strong>Database:</strong> SQLite for Standard/Professional; PostgreSQL recommended for Enterprise</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Self-Hosted Deployment</h3>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Client Responsibility:</strong> Infrastructure uptime, network security, resource allocation, backups</p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Oriphim Provides:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Python package installation (<code>pip install -e .</code>)</li>
                <li>FastAPI application code</li>
                <li>SQLite schema initialization</li>
                <li>Documentation and integration examples</li>
              </ul>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Update Cadence:</strong> Security patches via GitHub releases; feature updates quarterly</li>
                <li><strong>Support:</strong> Limited to application configuration and API integration—not underlying OS/infrastructure</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Hybrid Deployment (Enterprise Only)</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Validation Engine:</strong> On-premises Python deployment (client VPC/data center)</li>
                <li><strong>Audit Logging:</strong> Local SQLite or client-managed PostgreSQL</li>
                <li><strong>Compliance PDF Export:</strong> Generated on-premises, no cloud transmission required</li>
                <li><strong>Support:</strong> Custom integration assistance included in Enterprise tier</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">4. Security Commitments</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Authentication &amp; Access</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>API Authentication:</strong> Request-level validation via headers (no API key system in v1.0)</li>
                <li><strong>Self-Hosted Security:</strong> Client manages access control to deployment endpoint</li>
                <li><strong>Network Security:</strong> Recommend deployment behind VPN/firewall for production use</li>
                <li><strong>Future Roadmap:</strong> API key authentication planned for Q2 2026</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Data Handling</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Minimal PII Storage:</strong> Validation requests stored in local SQLite (agent_id, samples, metrics)</li>
                <li><strong>Audit Log Storage:</strong> SQLite with hash-chained integrity verification</li>
                <li><strong>Log Retention:</strong> Client-configurable (default: unlimited for self-hosted; 12 months for cloud)</li>
                <li><strong>Client Isolation:</strong> Not applicable for self-hosted; cloud deployments use dedicated instances per client</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Vulnerability Management</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Security Updates:</strong> Published via GitHub releases with CVE details</li>
                <li><strong>CVE Response:</strong> Critical vulnerabilities patched within 72 hours (client applies updates)</li>
                <li><strong>Incident Notification:</strong> Security breaches disclosed immediately via email and GitHub advisory</li>
                <li><strong>Dependency Management:</strong> Regular updates to FastAPI, Pydantic, and sentence-transformers</li>
              </ul>
            </section>

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
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">API crashes, database corruption, total validation failure</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">4 business hours</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">2 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email, GitHub Issues</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P2 – Major</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Degraded latency (&gt;500ms p95), incorrect validation logic</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">1 business day</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">5 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email, GitHub Issues</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P3 – Minor</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Non-critical bugs, documentation errors, feature gaps</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">2 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">10 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email, GitHub Issues</td>
                    </tr>
                    <tr className="bg-warm-ivory/30">
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown"><strong>P4 – Enhancement</strong></td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Feature requests, integration questions, optimization requests</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">3 business days</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Best effort</td>
                      <td className="border border-charcoal-brown/30 px-4 py-3 text-charcoal-brown">Email, GitHub Discussions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Support Tiers</h3>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Standard Tier ($10-20k/mo):</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Email support (business hours: 9 AM – 6 PM ET, Mon–Fri)</li>
                <li>GitHub issue tracking</li>
                <li>Access to documentation and demo materials</li>
                <li>Monthly validation analytics report (self-service via <code>/v2/health</code>)</li>
              </ul>
              
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Professional Tier ($30-40k/mo):</strong></p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>All Standard features</li>
                <li>Slack channel access with engineering team</li>
                <li>Extended support hours (8 AM – 8 PM ET, Mon–Fri)</li>
                <li>Quarterly integration review calls</li>
                <li>Custom constraint configuration assistance</li>
              </ul>
              
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Enterprise Tier ($50k+/mo):</strong></p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li>All Professional features</li>
                <li>Dedicated Slack channel with priority response</li>
                <li>Named technical account manager</li>
                <li>Custom validation rule development and tuning</li>
                <li>Monthly executive reports with compliance analytics</li>
                <li>On-call support for P1 incidents (4-hour response, 24/7)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">6. Change Management</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Version Control</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Semantic Versioning:</strong> MAJOR.MINOR.PATCH (e.g., v1.0.0, current release)</li>
                <li><strong>Backward Compatibility:</strong> API endpoints maintain compatibility within MAJOR version</li>
                <li><strong>Version Pinning:</strong> Clients self-host and control update cadence; cloud clients notified 30 days before MAJOR updates</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Update Notifications</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Security Patches:</strong> Immediate notification via email + GitHub security advisory</li>
                <li><strong>Feature Releases:</strong> 14-day advance notice via email with changelog (GitHub releases)</li>
                <li><strong>Deprecations:</strong> 90-day notice before endpoint or feature removal</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Testing Environments</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Local Testing:</strong> Clients run <code>uvicorn app.main:app --reload</code> for development testing</li>
                <li><strong>Demo Environment:</strong> <code>/demo</code> folder includes mock exchange and agent examples</li>
                <li><strong>Staging Recommendation:</strong> Deploy separate instance with test data before production rollout</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">7. Monitoring &amp; Transparency</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Health Monitoring</h3>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong><code>/v2/health</code> Endpoint:</strong> Real-time system health metrics</p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Uptime request count</li>
                <li>Recent divergence average</li>
                <li>Violation rate</li>
                <li>Drift detection status</li>
                <li>GREEN/YELLOW/RED indicator</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>Client Responsibility:</strong> Monitor endpoint via external service (e.g., Datadog, Prometheus)
              </p>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Analytics &amp; Reporting</h3>
              <p className="text-charcoal-brown leading-relaxed mb-2">Built-in visibility via API responses:</p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Validation Outcomes:</strong> Each response includes <code>indicator</code> (GREEN/YELLOW/RED)</li>
                <li><strong>Confidence Scoring:</strong> Per-request confidence assessment (0.0-1.0)</li>
                <li><strong>Drift Alerts:</strong> Behavioral anomaly detection in <code>/v2/health</code></li>
                <li><strong>Audit Trail:</strong> SQLite database query access for historical analysis</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Incident Post-Mortems</h3>
              <p className="text-charcoal-brown leading-relaxed">
                For P1/P2 incidents affecting cloud-hosted clients:
              </p>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li>Root cause analysis within 10 business days</li>
                <li>GitHub issue with detailed timeline and corrective actions</li>
                <li>Transparent disclosure (unless security-sensitive)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">8. Proof of Concept (POC) Terms</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">POC Scope (30-Day Duration)</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>No SLA Enforcement:</strong> Performance and uptime targets are best-effort during POC
              </p>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">POC Success Criteria</h3>
              <p className="text-charcoal-brown leading-relaxed mb-2">Mutually defined before POC start. Example metrics:</p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>"Block ≥3 constraint violations that current system would miss"</li>
                <li>"Detect ≥5 hallucination attempts via divergence scoring"</li>
                <li>"Demonstrate &lt;200ms rollback capability"</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">POC to Production Migration</h3>
              <p className="text-charcoal-brown leading-relaxed">
                Zero-downtime upgrade—validation rules and audit logs preserved. Self-hosted: Same deployment, upgrade support tier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">9. Limitations &amp; Exclusions</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">SLA Does Not Cover:</h3>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Client Infrastructure:</strong> Server outages, network failures, insufficient CPU/memory allocation</li>
                <li><strong>Misconfiguration:</strong> Incorrect constraint thresholds, improperly formatted API requests</li>
                <li><strong>Third-Party Dependencies:</strong> OpenAI API failures (for live LLM demos), market data provider outages</li>
                <li><strong>Force Majeure:</strong> Natural disasters, acts of war, government-mandated service disruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">10. Compliance &amp; Legal</h2>
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Regulatory Alignment (Startup Reality)</h3>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>SOC 2 Type II:</strong> Not currently certified. Roadmap for 2027 pending customer demand and funding</li>
                <li><strong>GDPR/CCPA Compliance:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Minimal data collection by design (no customer PII required)</li>
                    <li>Audit logs client-controlled (self-hosted) or isolated per client (cloud)</li>
                    <li>Data deletion requests honored within 30 days</li>
                  </ul>
                </li>
                <li><strong>Financial Regulations:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Hash-chained audit trails designed to support FINRA/SEC record-keeping requirements</li>
                    <li>Cryptographic event integrity verification (SHA-256)</li>
                    <li>Compliance PDF export via <code>/v3/compliance/export</code></li>
                    <li><strong>Note:</strong> Oriphim provides audit tooling; regulatory interpretation is client responsibility</li>
                  </ul>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">SLA Enforcement</h3>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                This SLA applies only to clients with active, paid contracts under a Master Service Agreement. Oriphim reserves the right to update this SLA with 30 days' written notice to Professional/Enterprise clients; Standard tier may be updated with 14 days' notice.
              </p>
              
              <h3 className="text-xl font-semibold text-carbon-black mb-3 mt-6">Dispute Resolution</h3>
              <p className="text-charcoal-brown leading-relaxed">
                SLA credit disputes submitted via email within 30 days of incident. Oriphim responds within 10 business days. If unresolved, binding arbitration per MSA terms applies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">11. Contact &amp; Escalation</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Technical Support:</strong> <a href="mailto:support@oriphim.com" className="text-blood-red hover:underline">support@oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed mb-2"><strong>Sales &amp; Onboarding:</strong> <a href="mailto:sales@oriphim.com" className="text-blood-red hover:underline">sales@oriphim.com</a></p>
              <p className="text-charcoal-brown leading-relaxed"><strong>Documentation:</strong> GitHub Repository: <a href="https://github.com/oriphim/oriphim-infra" className="text-blood-red hover:underline">https://github.com/oriphim/oriphim-infra</a></p>
            </section>

            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">12. SLA Review Cadence</h2>
              <ul className="list-disc pl-6 text-charcoal-brown space-y-2">
                <li><strong>Quarterly:</strong> Performance metrics review with Professional/Enterprise clients (self-service reports via <code>/v2/health</code> and audit logs)</li>
                <li><strong>Annually:</strong> SLA terms renegotiation aligned with MSA renewal</li>
                <li><strong>Ad-Hoc:</strong> Post-major incident (P1/P2) or upon client request</li>
              </ul>
              <p className="text-charcoal-brown mt-4"><em>Last Updated: February 23, 2026</em></p>
              <p className="text-charcoal-brown"><em>Version: 3.0 (Production-Ready Self-Hosted + Cloud Hybrid)</em></p>
              <p className="text-charcoal-brown">© 2026 Oriphim Labs LLC. All rights reserved.</p>
            </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
