export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-carbon-black/10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-brown mono">
      <div>&copy; 2026 ORIPHIM LABS LLC.</div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-blood-red transition-colors">
          AGENTIC FRAMEWORKS
        </a>
        <a href="#" className="hover:text-blood-red transition-colors">
          API DOCUMENTATION
        </a>
      </div>
    </footer>
  );
}
