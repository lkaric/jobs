import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jobs - Coming Soon',
  description: 'First transparent job board in the region.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          playfairDisplay.variable,
          'bg-canvas-light',
          'dark:bg-canvas-dark',
          'text-neutral-900',
          'dark:text-white',
          'transition-colors',
          'duration-500',
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
