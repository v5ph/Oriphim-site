import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 pt-16 pb-10 border-t border-brand-green/20 max-w-7xl mx-auto px-6 text-xs text-text-secondary mono">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; 2026 ORIPHIM LABS LLC.</div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/blog" className="px-3 py-1.5 border border-brand-green/20 rounded-full hover:text-accent-green hover:border-accent-green/50 transition-colors">
            BLOG
          </Link>
          <Link href="/legal" className="px-3 py-1.5 border border-brand-green/20 rounded-full hover:text-accent-green hover:border-accent-green/50 transition-colors">
            LEGAL
          </Link>
          <Link href="/privacy" className="px-3 py-1.5 border border-brand-green/20 rounded-full hover:text-accent-green hover:border-accent-green/50 transition-colors">
            PRIVACY
          </Link>
          <Link href="/sla" className="px-3 py-1.5 border border-brand-green/20 rounded-full hover:text-accent-green hover:border-accent-green/50 transition-colors">
            SLA
          </Link>
        </div>
      </div>
    </footer>
  );
}
