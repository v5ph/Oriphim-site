export default function AgenticAudit() {
  return (
    <section id="quant-audit" className="relative z-10 py-24 border-t border-brand-green/20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-text-primary">AI Risk Assessment for Trading Systems</h2>
        <p className="text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          Before deploying autonomous agents to production: Submit your agent's decision logs from staging. 
          Within 72 hours, Oriphim delivers a <span className="text-accent-green font-bold">Risk Report</span> identifying 
          every action that would violate regulatory rules, breach position limits, or expose your firm to avoidable losses.
        </p>
        <a
          href="#access"
          className="mono bg-brand-green text-bg-primary font-bold px-10 py-4 hover:bg-accent-green transition-colors inline-block"
        >
          START RISK ASSESSMENT
        </a>
      </div>
    </section>
  );
}
