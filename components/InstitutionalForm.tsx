'use client'

import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://suzmovbxrxqxzqzcqnlu.supabase.co';
const supabaseKey = 'sb_publishable_hRfPv4B86Qdsn2-hbbHIgA_2Z9K64Lq';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function InstitutionalForm() {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: 'Processing your request...', type: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        institution: formData.get('institution') as string,
        email: formData.get('email') as string,
        capital_base: formData.get('capital_base') as string,
        integration: formData.get('integration') as string,
        message: formData.get('message') as string,
        submitted_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('institutional_inquiries').insert([data]);

      if (error) throw error;

      setFormStatus({
        message: '✓ Engagement request received. Our team will contact you within 48 hours.',
        type: 'success',
      });
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        message: '✗ Error submitting request. Please email us directly or try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="access" className="relative z-10 py-24 bg-space-indigo/10 border-t border-carbon-black/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-carbon-black">Financial Institution Partnership</h2>
        <p className="text-charcoal-brown mb-12">
          <span className="text-carbon-black font-bold">Note:</span> We accept{' '}
          <span className="text-blood-red font-bold">1 hedge fund or financial institution per quarter</span> for deep integration.
          This ensures white-glove onboarding and dedicated validation infrastructure.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">FIRM NAME</label>
            <input
              type="text"
              name="institution"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
              placeholder="Your Hedge Fund or Financial Institution"
            />
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">CONTACT EMAIL</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
              placeholder="your@firm.com"
            />
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">ASSETS UNDER MANAGEMENT</label>
            <input
              type="text"
              name="capital_base"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
              placeholder="e.g. $500M, $2B"
            />
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">AI USE CASE</label>
            <select
              name="integration"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
            >
              <option value="">Select Your AI Use Case</option>
              <option value="algorithmic-trading">Algorithmic Trading Agents</option>
              <option value="portfolio-management">Autonomous Portfolio Management</option>
              <option value="market-making">AI-Powered Market Making</option>
              <option value="settlement">Automated Settlement & Operations</option>
              <option value="compliance">Compliance & Risk Monitoring</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">PRIMARY CONCERN</label>
            <textarea
              name="message"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold h-32"
              placeholder="e.g., We need to validate our trading agents before production, or We're concerned about regulatory violations from AI errors..."
            ></textarea>
          </div>
          {formStatus.message && (
            <div
              className={`text-sm text-center py-2 ${
                formStatus.type === 'success'
                  ? 'text-blood-red'
                  : formStatus.type === 'error'
                  ? 'text-deep-crimson'
                  : 'text-charcoal-brown'
              }`}
            >
              {formStatus.message}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blood-red text-floral-white font-bold py-4 mt-4 hover:bg-deep-crimson transition-colors mono uppercase disabled:opacity-50"
          >
            {isSubmitting ? 'SUBMITTING...' : 'Request Partnership'}
          </button>
        </form>
      </div>
    </section>
  );
}
