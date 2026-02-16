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
        <h2 className="text-3xl font-bold mb-6 text-carbon-black">Enterprise Engagement</h2>
        <p className="text-charcoal-brown mb-12">
          <span className="text-carbon-black font-bold">Note:</span> Oriphim accepts only{' '}
          <span className="text-blood-red font-bold">2 new enterprise integrations per quarter</span> to
          maintain the V-Layer substrate.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">ORGANIZATION NAME</label>
            <input
              type="text"
              name="institution"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
              placeholder="Your Company/Organization Name"
            />
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">CONTACT EMAIL</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
              placeholder="contact@yourcompany.com"
            />
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">ORGANIZATION SIZE</label>
            <input
              type="text"
              name="capital_base"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
              placeholder="e.g. 500 employees, $50M ARR"
            />
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">INTEGRATION TYPE</label>
            <select
              name="integration"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold"
            >
              <option value="">Select Integration Type</option>
              <option value="watcher-protocol">Watcher Protocol Integration</option>
              <option value="biopharma-safety">BioPharma Safety Audit</option>
              <option value="quant-finance">Quant-Finance Logic Gateway</option>
              <option value="aerospace-logic">Aerospace Logic Check</option>
            </select>
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">PRIMARY RISK CONCERN</label>
            <textarea
              name="message"
              required
              className="w-full bg-floral-white border border-carbon-black/20 text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold h-32"
              placeholder="e.g., Our agents are hallucinating physics, or we need to satisfy 2026 regulatory audit logs..."
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
            {isSubmitting ? 'SUBMITTING...' : 'Initialize Engagement'}
          </button>
        </form>
      </div>
    </section>
  );
}
