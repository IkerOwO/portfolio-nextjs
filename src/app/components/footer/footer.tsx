
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/90 text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Iker. Creado con Next.js y Tailwind.
        </p>
        <div className="flex items-center gap-3 text-sm text-slate-200">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 ring-1 ring-cyan-500/20">
            <span>Made with</span>
            <span role="img" aria-label="corazón">❤️</span>
          </span>
          <span className="text-cyan-300 font-medium">by Iker</span>
        </div>
      </div>
    </footer>
  );
}
