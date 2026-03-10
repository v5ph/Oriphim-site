'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 h-40 w-40 rounded-full bg-brand-green/10 blur-3xl"></div>
        <div className="absolute bottom-14 left-8 h-56 w-56 rounded-full bg-accent-green/10 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <p className="mono text-brand-green mb-4 tracking-[0.35em] text-xs uppercase">
            AI CIRCUIT BREAKERS FOR FINANCIAL SYSTEMS
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-text-primary">
            Stop Autonomous AI <br />
            <span className="font-bold glow-text text-accent-green">Before It Breaks.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-normal max-w-2xl leading-relaxed mb-12">
            Your trading agents execute thousands of transactions per second. A single hallucinated action can trigger regulatory violations, market manipulation flags, and multi-million dollar losses. Oriphim validates every action in real-time—blocking the impossible before it executes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              suppressHydrationWarning
              onClick={() => scrollToSection('access')}
              className="mono bg-brand-green text-bg-primary px-8 py-4 font-bold hover:bg-accent-green transition-colors"
            >
              SCHEDULE PROOF OF CONCEPT
            </button>
            <button
              suppressHydrationWarning
              onClick={() => scrollToSection('infrastructure')}
              className="mono bg-transparent text-text-primary px-8 py-4 border border-brand-green/40 hover:border-accent-green hover:text-accent-green transition-colors"
            >
              HOW IT WORKS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
