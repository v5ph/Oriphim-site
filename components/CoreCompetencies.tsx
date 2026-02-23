'use client'

import { useEffect, useState, useRef } from 'react'

export default function CoreCompetencies() {
  const [isScrolled, setIsScrolled] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Get the distance from top of section to viewport top
        const sectionTop = sectionRef.current.getBoundingClientRect().top
        // If section is past the banner (roughly 400px), turn text black
        setIsScrolled(sectionTop < 300)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="infrastructure" className="relative z-10 py-24 border-t border-carbon-black/10 bg-carbon-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
              isScrolled ? 'text-carbon-black' : 'text-floral-white'
            }`}>
              Core Competencies
            </h2>
            <div className="h-1 w-20 bg-blood-red"></div>
          </div>
          <p className="mono text-xs text-charcoal-brown mt-4 md:mt-0">PRE-EXECUTION // VALIDATION // COMPLIANCE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 hover:shadow-lg transition-all group">
            <div className="mono text-4xl text-charcoal-brown/40 mb-6 group-hover:text-blood-red transition-colors">01</div>
            <h3 className="text-xl font-bold mb-4 text-carbon-black">
              Mathematical Constraint Validation
            </h3>
            <p className="text-charcoal-brown leading-relaxed text-sm">
              Every AI trade is mathematically validated before execution. No fractional shares. Balance always ≥ 0. Position limits enforced. 
              Oriphim blocks hallucinated actions that would violate the laws of finance—preventing the impossible from happening.
            </p>
          </div>

          <div className="glass-panel p-8 hover:shadow-lg transition-all group">
            <div className="mono text-4xl text-charcoal-brown/40 mb-6 group-hover:text-blood-red transition-colors">02</div>
            <h3 className="text-xl font-bold mb-4 text-carbon-black">Real-Time Regulatory Compliance</h3>
            <p className="text-charcoal-brown leading-relaxed text-sm">
              Automatic detection of MiFID II, Dodd-Frank, wash sale, and pattern day trading violations. 
              Your autonomous agents integrate regulatory rules at the source, not as an afterthought. 
              Stop violations before regulators do.
            </p>
          </div>

          <div className="glass-panel p-8 hover:shadow-lg transition-all group">
            <div className="mono text-4xl text-charcoal-brown/40 mb-6 group-hover:text-blood-red transition-colors">03</div>
            <h3 className="text-xl font-bold mb-4 text-carbon-black">Audit-Ready Execution Logs</h3>
            <p className="text-charcoal-brown leading-relaxed text-sm">
              Cryptographically signed logs show *why* each action was approved or blocked. 
              When regulators ask, you have proof your AI operated within guardrails. 
              Transform compliance from liability to competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
