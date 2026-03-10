export default function TechnicalDifferentiators() {
  const comparisons = [
    {
      approach: 'Monitoring only',
      example: '(e.g., Datadog alerts)',
      gap: 'You see the loss AFTER it happens',
      oriphim: 'Validation BEFORE execution'
    },
    {
      approach: 'Rule engines',
      example: '',
      gap: "Can't detect hallucinations (AI making up facts)",
      oriphim: 'Semantic + numeric validation catches both'
    },
    {
      approach: 'Human approval gates',
      example: '',
      gap: "Slows execution, doesn't scale to 1000s/sec",
      oriphim: 'Autonomous + cryptographically signed'
    },
    {
      approach: 'Log analysis',
      example: '',
      gap: 'Post-mortem investigation (too late)',
      oriphim: 'Immutable chain-of-custody proof'
    },
    {
      approach: 'Proxy filters',
      example: '',
      gap: 'Requires SSL keys, network latency',
      oriphim: 'Async + API-based (no SSL required)'
    },
    {
      approach: 'SDK wrappers',
      example: '',
      gap: 'Can crash agent if validation fails',
      oriphim: 'Atomic rollback preserves agent state'
    }
  ];

  return (
    <section id="licensing" className="relative z-10 py-24 bg-panel/70 border-t border-brand-green/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-text-primary">AI Solutions Are Great Until They Arent</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Monitoring, rule engines, approval gates—they all fail at the moment that matters. Here's where the gaps are, and why they're not acceptable at scale.
          </p>
        </div>

        <div className="overflow-x-auto glass-panel">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-brand-green/25">
                <th className="text-left py-4 px-4 font-bold text-text-primary mono text-sm">Approach</th>
                <th className="text-left py-4 px-4 font-bold text-text-primary mono text-sm">Gap</th>
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
