import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-canvas-light dark:bg-canvas-dark">
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 dark:opacity-20">
          <div className="w-[500px] h-[500px] bg-brand-accent/30 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-2xl text-center">
          <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block">404</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-6">
            Not found.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
            The page you’re looking for doesn’t exist (or it moved). Head back home and you’ll be in the right place.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back home
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white px-6 py-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Join early access
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
