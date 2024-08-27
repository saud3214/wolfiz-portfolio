'use client';

import { AnimatePresence, motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.7,
  delayMultiple = 0.07,
  framerProps = {
    hiddens: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-3% 0px -3% 0px' }); // Customize the margin as needed

  return (
    <div ref={ref} className="flex justify-center">
      <AnimatePresence>
        {isInView &&
          text.split('').map((char, i) => (
            <motion.h1
              key={i}
              initial="hiddens"
              animate="visible"
              exit="hiddens"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn('drop-shadow-sm', className)}
            >
              {char === ' ' ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
      </AnimatePresence>
    </div>
  );
}
