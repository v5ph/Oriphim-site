'use client'

import type { MouseEvent } from 'react'

export default function AgenticAudit() {
  const handleGlassMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = (0.5 - (y / rect.height)) * 6;

    currentTarget.style.setProperty('--mx', `${x}px`);
    currentTarget.style.setProperty('--my', `${y}px`);
    currentTarget.style.setProperty('--tilt-x', `${rotateX}deg`);
    currentTarget.style.setProperty('--tilt-y', `${rotateY}deg`);
  };

  const handleGlassMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty('--mx', '50%');
    event.currentTarget.style.setProperty('--my', '50%');
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <section id="quant-audit" className="relative z-10 py-24 border-t border-brand-green/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-text-primary">72-Hour Risk Report for Autonomous Trading Systems</h2>
        <p className="text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          Submit your agent decision logs from staging and get a deterministic risk map in 72 hours.
          Oriphim flags every action that would violate regulatory rules, breach position limits, or create market-abuse exposure before production rollout.
        </p>
        <a
          href="#access"
          onMouseMove={handleGlassMouseMove}
          onMouseLeave={handleGlassMouseLeave}
          className="px-4 py-2 rounded-lg glass-nav-button font-semibold inline-block"
        >
          Request Your 72-Hour Risk Report
        </a>
      </div>
    </section>
  );
}
