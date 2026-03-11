'use client'

import type { MouseEvent } from 'react'

export default function Hero() {
  const handleGlassMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    currentTarget.style.setProperty('--mx', `${x}px`);
    currentTarget.style.setProperty('--my', `${y}px`);
  };

  const handleGlassMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty('--mx', '50%');
    event.currentTarget.style.setProperty('--my', '50%');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <p className="mono text-brand-green mb-4 tracking-[0.35em] text-xs uppercase">
            AI CIRCUIT BREAKERS FOR FINANCIAL SYSTEMS
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-text-primary">
            Stop Autonomous AI <br />
            <span className="font-bold text-accent-green">Before It Breaks.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-normal max-w-2xl leading-relaxed mb-12">
            Your trading agents execute thousands of transactions per second. A single hallucinated action can trigger regulatory violations, market manipulation flags, and multi-million dollar losses. Oriphim validates every action in real-time—blocking the impossible before it executes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              suppressHydrationWarning
              onClick={() => scrollToSection('access')}
              onMouseMove={handleGlassMouseMove}
              onMouseLeave={handleGlassMouseLeave}
              className="mono glass-green-button text-white px-8 py-4 rounded-lg font-bold"
            >
              SCHEDULE PROOF OF CONCEPT
            </button>
            <button
              suppressHydrationWarning
              onClick={() => scrollToSection('infrastructure')}
              className="mono bg-transparent text-text-primary px-8 py-4 rounded-lg border border-brand-green/40 hover:border-accent-green hover:text-accent-green transition-colors"
            >
              HOW IT WORKS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
