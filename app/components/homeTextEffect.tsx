import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ClipTitleProps {
  text: string;
  duration?: number;
  stagger?: number;
  x?: number;
  y?: number;
  ease?: [number, number, number, number];
}

const ClipTitle: React.FC<ClipTitleProps> = ({
  text,
  duration = 0.8,
  stagger = -0.05,
  x = -30,
  y = 30,
  ease = [0.25, 0.1, 0.25, 1],
}) => {
  const characters = useMemo(() => text.split(''), [text]);

  // Ref for the text container to detect viewport entry
  const ref = useRef<HTMLDivElement>(null);

  // Detect if the ref is in view
  const isInView = useInView(ref, { once: false, margin: '0px 0px -20% 0px' });

  // Animation variants for each character
  const characterVariants = {
    hidden: {
      clipPath: 'inset(0% 100% 120% 0%)',
      x,
      y,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      x: 0,
      y: 0,
      transition: {
        duration,
        ease,
      },
    },
  };

  return (
    <motion.div ref={ref} style={{ display: 'flex', overflow: 'hidden' }}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={characterVariants}
          transition={{
            delay: index * Math.abs(stagger),
            duration,
            ease,
          }}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre', // Preserve spaces
            padding: '0 5px', // Prevent clipping by adding a bit of space between characters
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ClipTitle;
