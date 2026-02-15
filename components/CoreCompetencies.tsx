export default function CoreCompetencies() {
  return (
    <section id="infrastructure" className="relative z-10 py-24 border-t border-carbon-black/10 bg-carbon-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-carbon-black">Core Competencies</h2>
            <div className="h-1 w-20 bg-blood-red"></div>
          </div>
          <p className="mono text-xs text-charcoal-brown mt-4 md:mt-0">INVARIANCE // COMPLIANCE // RECOVERY</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 hover:shadow-lg transition-all group">
            <div className="mono text-4xl text-charcoal-brown/40 mb-6 group-hover:text-blood-red transition-colors">01</div>
            <h3 className="text-xl font-bold mb-4 text-carbon-black">
              The Law of Physical Invariance (The 424 Sentinel)
            </h3>
            <p className="text-charcoal-brown leading-relaxed text-sm">
              Probabilistic models are physically illiterate. Our V-Layer intercepts agentic proposals and
              validates them against hard physical constraints—thermodynamics, stoichiometry, and market
              protocols. If the math doesn't check out, the 424 Sentinel blocks execution in real-time.
            </p>
          </div>

          <div className="glass-panel p-8 hover:shadow-lg transition-all group">
            <div className="mono text-4xl text-charcoal-brown/40 mb-6 group-hover:text-blood-red transition-colors">02</div>
            <h3 className="text-xl font-bold mb-4 text-carbon-black">Audit-Ready Integrity (2026 Compliance)</h3>
            <p className="text-charcoal-brown leading-relaxed text-sm">
              Governance isn't theater; it's infrastructure. We provide the immutable Chain-of-Thought logs
              required to satisfy the 2026 regulatory cliff, including the EU AI Act and California's SB 243.
              Turn your "Black Box" into a transparent, audit-ready asset.
            </p>
          </div>

          <div className="glass-panel p-8 hover:shadow-lg transition-all group">
            <div className="mono text-4xl text-charcoal-brown/40 mb-6 group-hover:text-blood-red transition-colors">03</div>
            <h3 className="text-xl font-bold mb-4 text-carbon-black">Agent Rewind (State-Controlled Recovery)</h3>
            <p className="text-charcoal-brown leading-relaxed text-sm">
              When an agent drifts, you can't just kill the process; you need to restore the system. Our
              protocol provides a version-controlled log of every agentic state change, allowing enterprises to
              rollback a compromised system to a "Clean State" post-incident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
