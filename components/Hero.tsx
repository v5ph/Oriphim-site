'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <p className="mono text-blood-red mb-4 tracking-widest text-xs uppercase">
            AI CIRCUIT BREAKERS FOR FINANCIAL SYSTEMS
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-carbon-black">
            Stop Autonomous AI <br />
            <span className="font-bold glow-text text-blood-red">Before It Breaks.</span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-brown font-normal max-w-2xl leading-relaxed mb-12">
            Your trading agents execute thousands of transactions per second. A single hallucinated action can trigger regulatory violations, market manipulation flags, and multi-million dollar losses. Oriphim validates every action in real-time—blocking the impossible before it executes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('access')}
              className="mono bg-blood-red text-floral-white px-8 py-4 font-bold hover:bg-deep-crimson transition-colors"
            >
              SCHEDULE PROOF OF CONCEPT
            </button>
            <button
              onClick={() => scrollToSection('infrastructure')}
              className="mono bg-transparent text-carbon-black px-8 py-4 border border-carbon-black/30 hover:border-blood-red hover:text-blood-red transition-colors"
            >
              HOW IT WORKS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
