export default function TechnicalDifferentiators() {
  const comparisons = [
    {
      approach: 'Monitoring tools',
      example: '(e.g., Datadog alerts)',
      gap: 'You lose money in real-time and find out via alert',
      oriphim: 'Execution is blocked before it reaches the order book'
    },
    {
      approach: 'Rule engines',
      example: '',
      gap: 'Static policy misses semantic hallucinations under market stress',
      oriphim: 'Semantic + numeric validation on every action'
    },
    {
      approach: 'Human approval gates',
      example: '',
      gap: 'You sacrifice 90% of AI speed for 10% more safety',
      oriphim: 'Full-speed execution with sub-millisecond validation'
    },
    {
      approach: 'Log analysis',
      example: '',
      gap: 'Evidence arrives after exposure, not before risk',
      oriphim: 'Immutable chain-of-custody proof'
    },
    {
      approach: 'Proxy filters',
      example: '',
      gap: 'Operational overhead and latency increase attack surface',
      oriphim: 'Async + API-based (no SSL required)'
    },
    {
      approach: 'SDK wrappers',
      example: '',
      gap: 'Validation faults can corrupt state and break execution loops',
      oriphim: 'Atomic rollback preserves agent state'
    }
  ];

  return (
    <section id="licensing" className="relative z-10 py-24 border-t border-brand-green/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-text-primary">The Logic Trap in Autonomous Trading</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Most tools tell you what failed after the event. Oriphim acts as a deterministic execution gate that prevents failure states before execution.
          </p>
        </div>

        <div className="overflow-x-auto glass-panel">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-brand-green/25">
                <th className="text-left py-4 px-4 font-bold text-text-primary mono text-sm">Approach</th>
                <th className="text-left py-4 px-4 font-bold text-text-primary mono text-sm">Failure State</th>
                <th className="text-left py-4 px-4 font-bold text-accent-green mono text-sm">Oriphim Solution</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-brand-green/5' : ''}>
                  <td className="py-4 px-4 border-b border-brand-green/15">
                    <div className="font-bold text-text-primary text-sm">{row.approach}</div>
                    {row.example && <div className="text-xs text-text-secondary mt-1">{row.example}</div>}
                  </td>
                  <td className="py-4 px-4 border-b border-brand-green/15 text-text-secondary text-sm">
                    {row.gap}
                  </td>
                  <td className="py-4 px-4 border-b border-brand-green/15 text-brand-green font-bold text-sm">
                    {row.oriphim}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
