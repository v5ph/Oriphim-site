'use client'

import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateAUM = (aum: string): boolean => {
  // Must contain a number and either M, B, or million/billion
  const aumRegex = /\$?\d+(\.\d+)?[MB]|\d+\s*(million|billion)/i;
  return aumRegex.test(aum);
};

export default function InstitutionalForm() {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({});
    setFormStatus({ message: 'Processing your request...', type: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const capitalBase = formData.get('capital_base') as string;
      
      // Client-side validation
      const errors: Record<string, string> = {};
      
      if (!validateEmail(email)) {
        errors.email = 'Please enter a valid email address';
      }
      
      if (!validateAUM(capitalBase)) {
        errors.capital_base = 'Please enter AUM in format like "$500M" or "$2B"';
      }
      
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        setFormStatus({
          message: 'Please correct the errors above',
          type: 'error',
        });
        setIsSubmitting(false);
        return;
      }

      const data = {
        institution: (formData.get('institution') as string).trim(),
        email: email.trim().toLowerCase(),
        capital_base: capitalBase.trim(),
        integration: formData.get('integration') as string,
        message: (formData.get('message') as string).trim(),
        submitted_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('institutional_inquiries').insert([data]);

      if (error) throw error;

      setFormStatus({
        message: '✓ Engagement request received. Our team will contact you within 48 hours.',
        type: 'success',
      });
      
      // Reset form only if it exists
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
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
              aria-label="Firm name"
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
              aria-label="Contact email"
              aria-invalid={validationErrors.email ? 'true' : 'false'}
              className={`w-full bg-floral-white border ${
                validationErrors.email ? 'border-blood-red' : 'border-carbon-black/20'
              } text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold`}
              placeholder="your@firm.com"
            />
            {validationErrors.email && (
              <p className="text-blood-red text-xs mt-1">{validationErrors.email}</p>
            )}
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">ASSETS UNDER MANAGEMENT</label>
            <input
              type="text"
              name="capital_base"
              required
              aria-label="Assets under management"
              aria-invalid={validationErrors.capital_base ? 'true' : 'false'}
              className={`w-full bg-floral-white border ${
                validationErrors.capital_base ? 'border-blood-red' : 'border-carbon-black/20'
              } text-carbon-black px-4 py-3 focus:border-blood-red transition-colors font-bold`}
              placeholder="e.g. $500M, $2B"
            />
            {validationErrors.capital_base && (
              <p className="text-blood-red text-xs mt-1">{validationErrors.capital_base}</p>
            )}
          </div>
          <div>
            <label className="mono text-xs text-charcoal-brown block mb-2">AI USE CASE</label>
            <select
              name="integration"
              required
              aria-label="AI use case"
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
              aria-label="Primary concern"
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
