'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { MouseEvent } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGlassMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
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

  const handleGlassMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty('--mx', '50%');
    event.currentTarget.style.setProperty('--my', '50%');
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-brand-green/20 bg-panel/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="logo font-bold tracking-[0.35em] text-sm text-text-primary">ORIPHIM</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 mono text-xs text-text-secondary">
          <button suppressHydrationWarning onClick={() => scrollToSection('infrastructure')} className="hover:text-accent-green transition-colors">
            EXECUTION GATE
          </button>
          <button suppressHydrationWarning onClick={() => scrollToSection('licensing')} className="hover:text-accent-green transition-colors">
            FAILURE STATES
          </button>
          <button
            suppressHydrationWarning
            onClick={() => scrollToSection('access')}
            onMouseMove={handleGlassMouseMove}
            onMouseLeave={handleGlassMouseLeave}
            className="px-4 py-2 rounded-lg glass-nav-button font-semibold"
          >
            REQUEST RISK REPORT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center rounded"
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-text-primary transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-text-primary transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-text-primary transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-panel border-b border-brand-green/20">
          <div className="flex flex-col gap-4 p-6 mono text-xs text-text-secondary">
            <button suppressHydrationWarning onClick={() => scrollToSection('infrastructure')} className="text-left hover:text-accent-green transition-colors">
              EXECUTION GATE
            </button>
            <button suppressHydrationWarning onClick={() => scrollToSection('licensing')} className="text-left hover:text-accent-green transition-colors">
              FAILURE STATES
            </button>
            <button
              suppressHydrationWarning
              onClick={() => scrollToSection('access')}
              onMouseMove={handleGlassMouseMove}
              onMouseLeave={handleGlassMouseLeave}
              className="px-4 py-2 rounded-lg glass-nav-button font-semibold text-center"
            >
              REQUEST RISK REPORT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
