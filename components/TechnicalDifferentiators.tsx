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
    <section className="relative z-10 py-24 bg-floral-white border-t border-carbon-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-carbon-black">Why Oriphim Is Different</h2>
          <p className="text-charcoal-brown max-w-2xl mx-auto">
            Every approach to AI safety has a gap. Here's what makes us different—without the BS.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-carbon-black/20">
                <th className="text-left py-4 px-4 font-bold text-carbon-black mono text-sm">Approach</th>
                <th className="text-left py-4 px-4 font-bold text-carbon-black mono text-sm">Gap</th>
                <th className="text-left py-4 px-4 font-bold text-blood-red mono text-sm">Oriphim Solution</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-space-indigo/5' : ''}>
                  <td className="py-4 px-4 border-b border-carbon-black/10">
                    <div className="font-bold text-carbon-black text-sm">{row.approach}</div>
                    {row.example && <div className="text-xs text-charcoal-brown mt-1">{row.example}</div>}
                  </td>
                  <td className="py-4 px-4 border-b border-carbon-black/10 text-charcoal-brown text-sm">
                    {row.gap}
                  </td>
                  <td className="py-4 px-4 border-b border-carbon-black/10 text-blood-red font-bold text-sm">
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
