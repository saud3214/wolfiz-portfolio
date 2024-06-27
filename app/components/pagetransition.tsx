import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';
// 1. Fade and Scale
export const FadeScale = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// 2. Slide from Side
export const SlideFromSide = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -500 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 500 }}
    transition={{ type: 'just', stiffness: 260, damping: 50, duration: 0.9 }}
  >
    {children}
  </motion.div>
);

export const SlideFromRight = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: '50%' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '-50%' }}
    transition={{ type: 'just', stiffness: 260, damping: 50, duration: 0.9 }}
  >
    {children}
  </motion.div>
);
// 3. Rotate and Fade
export const RotateFade = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -10 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: 10 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// 4. Staggered Children
export const StaggeredChildren = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
      hidden: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
    }}
  >
    {React.Children.map(children, (child) => (
      <motion.div
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);

// 5. Blur and Fade
export const BlurFade = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(20px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, filter: 'blur(20px)' }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Usage example
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <FadeScale>{children}</FadeScale>
);
