'use client';

import { AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      {children}
    </AnimatePresence>
  );
}
