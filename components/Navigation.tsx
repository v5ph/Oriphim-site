'use client'

import Link from 'next/link'

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-carbon-black/10 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="logo font-bold tracking-tighter text-lg text-carbon-black">O R I P H I M</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 mono text-xs text-charcoal-brown">
          <button onClick={() => scrollToSection('infrastructure')} className="hover:text-blood-red transition-colors">
            WATCHER PROTOCOL
          </button>
          <button onClick={() => scrollToSection('quant-audit')} className="hover:text-blood-red transition-colors">
            AGENT REWIND
          </button>
          <button onClick={() => scrollToSection('licensing')} className="hover:text-blood-red transition-colors">
            AUDIT & COMPLIANCE
          </button>
        </div>
      </div>
    </nav>
  );
}
