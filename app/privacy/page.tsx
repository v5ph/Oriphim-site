import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Privacy Policy - Oriphim Labs',
  description: 'Privacy policy and data handling practices for Oriphim Labs services.'
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
            Oriphim Labs LLC ("Oriphim", "we", "our") is committed to protecting the privacy and security of our clients' information. This Privacy Policy explains how we collect, use, and safeguard data when you access our signal engines and services.
          </p>
        </ScrollReveal>
        
        <div className="prose prose-lg max-w-none">
          <ScrollReveal delay={100}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Information We Collect</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Account Information:</strong> Name, email address, company affiliation</li>
                <li><strong>Technical Data:</strong> IP addresses, API usage logs, request timestamps</li>
                <li><strong>Billing Information:</strong> Processed securely via third-party payment processor (Stripe)</li>
                <li><strong>Usage Analytics:</strong> Signal access patterns, model version usage, system performance metrics</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">How We Use Your Data</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                We use collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Providing and maintaining API access and signal delivery</li>
                <li>Technical support and troubleshooting</li>
                <li>Billing and payment processing</li>
                <li>Fraud prevention and security monitoring</li>
                <li>Service improvement and performance optimization</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Sharing & Third Parties</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                <strong>We do not sell your data.</strong> Client information is shared only with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li><strong>Infrastructure Providers:</strong> Secure hosting and database services (e.g., Supabase, Cloudflare)</li>
                <li><strong>Payment Processors:</strong> Stripe for secure billing transactions</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                All third-party providers are bound by strict confidentiality and security agreements.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Security</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>TLS encryption for all data transmission</li>
                <li>Encrypted storage for sensitive data</li>
                <li>Regular API key rotation (90-day cycle)</li>
                <li>Access control and authentication protocols</li>
                <li>Automated security monitoring and anomaly detection</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Client Confidentiality</h2>
              <p className="text-charcoal-brown leading-relaxed">
                Strategy names, signal access patterns, and all usage data are treated as strictly confidential. We do not disclose which clients are using our services or how they are being used without explicit consent.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Cookies & Tracking</h2>
              <p className="text-charcoal-brown leading-relaxed">
                Our website uses minimal, privacy-safe analytics to improve user experience. We do not use invasive tracking technologies or sell browsing data to advertisers.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Data Retention</h2>
              <p className="text-charcoal-brown leading-relaxed">
                We retain account and usage data for 12 months following account closure or license termination. Billing records are retained as required by law (typically 7 years). Clients may request earlier deletion subject to legal and operational constraints.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Your Rights</h2>
              <p className="text-charcoal-brown leading-relaxed mb-4">
                Depending on your jurisdiction (e.g., CCPA, GDPR), you may have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-charcoal-brown space-y-2">
                <li>Access your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of certain data processing activities</li>
                <li>Receive a copy of your data in portable format</li>
              </ul>
              <p className="text-charcoal-brown leading-relaxed">
                To exercise these rights, contact us at <a href="mailto:privacy@oriphim.com" className="text-blood-red hover:underline">privacy@oriphim.com</a>
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Changes to This Policy</h2>
              <p className="text-charcoal-brown leading-relaxed">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email to active clients. Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <section className="mb-8 p-6 bg-warm-ivory/50 rounded">
              <h2 className="text-2xl font-bold text-carbon-black mb-4">Contact Us</h2>
              <p className="text-charcoal-brown leading-relaxed mb-2">
                For privacy-related inquiries or data requests:
              </p>
              <p className="text-charcoal-brown">
                <a href="mailto:privacy@oriphim.com" className="text-blood-red hover:underline">privacy@oriphim.com</a>
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
