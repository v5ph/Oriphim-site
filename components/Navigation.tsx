'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-carbon-black/10 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="logo font-bold tracking-tighter text-lg text-carbon-black">O R I P H I M</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 mono text-xs text-charcoal-brown">
          <button onClick={() => scrollToSection('infrastructure')} className="hover:text-blood-red transition-colors">
            WATCHER PROTOCOL
          </button>
          <button onClick={() => scrollToSection('licensing')} className="hover:text-blood-red transition-colors">
            AUDIT & COMPLIANCE
          </button>
          <button 
            onClick={() => scrollToSection('access')} 
            className="px-4 py-2 bg-blood-red text-floral-white rounded hover:bg-blood-red/90 transition-colors font-semibold"
          >
            BOOK DEMO
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen ? 'true' : 'false'}
        >
          <span className={`w-full h-0.5 bg-carbon-black transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-carbon-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-carbon-black transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass-panel border-b border-carbon-black/10">
          <div className="flex flex-col gap-4 p-6 mono text-xs text-charcoal-brown">
            <button onClick={() => scrollToSection('infrastructure')} className="text-left hover:text-blood-red transition-colors">
              WATCHER PROTOCOL
            </button>
            <button onClick={() => scrollToSection('licensing')} className="text-left hover:text-blood-red transition-colors">
              AUDIT & COMPLIANCE
            </button>
            <button 
              onClick={() => scrollToSection('access')} 
              className="px-4 py-2 bg-blood-red text-floral-white rounded hover:bg-blood-red/90 transition-colors font-semibold text-center"
            >
              BOOK DEMO
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
