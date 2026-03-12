'use client'

import { useRef } from 'react'

export default function CoreCompetencies() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="infrastructure" className="relative z-10 py-24 border-t border-brand-green/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-text-primary">Core Competencies</h2>
            <div className="h-1 w-20 bg-brand-green"></div>
          </div>
          <p className="mono text-xs text-text-secondary mt-4 md:mt-0">PRE-EXECUTION // VALIDATION // COMPLIANCE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel rounded-2xl p-8 transition-all group hover:-translate-y-1">
            <div className="mono text-4xl text-text-secondary/40 mb-6 group-hover:text-accent-green transition-colors">01</div>
            <h3 className="text-xl font-bold mb-4 text-text-primary">
              Pre-Execution Logic
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              Every AI action is mathematically verified against your fund's risk parameters before it reaches the exchange.
              No balance violations. No hallucinated assets. Zero-trust execution by design.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 transition-all group hover:-translate-y-1">
            <div className="mono text-4xl text-text-secondary/40 mb-6 group-hover:text-accent-green transition-colors">02</div>
            <h3 className="text-xl font-bold mb-4 text-text-primary">Real-Time Compliance</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              Bypass the post-mortem audit cycle. Oriphim maps agent intent directly to MiFID II and
              Dodd-Frank protocols at the source. Stop violations before they exist.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 transition-all group hover:-translate-y-1">
            <div className="mono text-4xl text-text-secondary/40 mb-6 group-hover:text-accent-green transition-colors">03</div>
            <h3 className="text-xl font-bold mb-4 text-text-primary">Immutable Proof</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              Generate cryptographically signed execution logs that prove compliance to regulators instantly.
              Transform your audit trail from a liability into a competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
