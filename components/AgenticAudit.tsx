export default function AgenticAudit() {
  return (
    <section id="quant-audit" className="relative z-10 py-24 border-t border-carbon-black/10 bg-space-indigo/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-carbon-black">AI Risk Assessment for Trading Systems</h2>
        <p className="text-charcoal-brown mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          Before deploying autonomous agents to production: Submit your agent's decision logs from staging. 
          Within 72 hours, Oriphim delivers a <span className="text-blood-red font-bold">Risk Report</span> identifying 
          every action that would violate regulatory rules, breach position limits, or expose your firm to avoidable losses.
        </p>
        <a
          href="#access"
          className="mono bg-blood-red text-floral-white font-bold px-10 py-4 hover:bg-deep-crimson transition-colors inline-block"
        >
          START RISK ASSESSMENT
        </a>
      </div>
    </section>
  );
}
