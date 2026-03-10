import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-brand-green/20 max-w-7xl mx-auto px-6 text-xs text-text-secondary mono">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; 2026 ORIPHIM LABS LLC.</div>
        <div className="flex gap-4">
          <Link href="/legal" className="hover:text-accent-green transition-colors">
            LEGAL
          </Link>
          <Link href="/privacy" className="hover:text-accent-green transition-colors">
            PRIVACY
          </Link>
          <Link href="/sla" className="hover:text-accent-green transition-colors">
            SLA
          </Link>
        </div>
      </div>
    </footer>
  );
}
