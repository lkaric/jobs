'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Button, Form, Input } from 'react-aria-components';

export const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setEmail(''), 1000);
    }
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-canvas-light dark:bg-canvas-dark">
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 dark:opacity-20">
          <div className="w-[500px] h-[500px] bg-brand-accent/30 rounded-full blur-[120px] animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl text-center"
        >
          <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block">Early Access</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-6">
            The Pro Experience.
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
            We're building a dedicated ecosystem for engineering talent. Exclusive salary data, company reviews, and
            AI-powered interview prep.
          </p>

          {!subscribed ? (
            <Form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter@email.com"
                className="w-full pl-6 pr-16 py-4 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:border-neutral-900 dark:focus:border-brand-accent outline-none text-neutral-900 dark:text-white placeholder-neutral-400 transition-all shadow-xl"
                required
              />
              <Button
                type="submit"
                className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
              >
                <ArrowRight size={20} aria-hidden="true" />
              </Button>
            </Form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-4 text-green-600 dark:text-green-400"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                <Check size={32} aria-hidden="true" />
              </div>
              <p className="text-xl font-medium text-neutral-900 dark:text-white">You're on the list.</p>
            </motion.div>
          )}

          <div className="mt-16 flex items-center justify-center gap-8 text-neutral-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-neutral-900 dark:text-white">500+</span>
              <span className="text-xs uppercase tracking-wider">Companies</span>
            </div>
            <div className="w-px h-8 bg-neutral-200 dark:bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-neutral-900 dark:text-white">€85k</span>
              <span className="text-xs uppercase tracking-wider">Avg Salary</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
