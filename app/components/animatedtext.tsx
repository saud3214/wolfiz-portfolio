/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// 1. Wave Effect
export const AnimatedText = ({ text }: { text: string }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
          whileHover={{
            y: -10,
            transition: { type: 'spring', stiffness: 300 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 2. Typewriter Effect
export const TypewriterText = ({ text }: { text: string }) => {
  const sentences = text.split('. ');
  return (
    <div>
      {sentences.map((sentence, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 2, duration: 1 }}
        >
          {sentence.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 2 + charIndex * 0.05,
                duration: 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </div>
  );
};

export const AnimatedText2 = ({ text }: { text: string }) => {
  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.04 * i,
        duration: 0.2,
      },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          observer.unobserve(containerRef.current); // Unobserve after animation starts
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className="titledisplay"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{
            scale: 1.2,
            rotate: Math.random() * 20 - 10,
            transition: { type: 'spring', stiffness: 300 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 3. Gradient Flow Effect
export const GradientFlowText = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      style={{
        backgroundImage:
          'linear-gradient(to right, #ffffff, #f3a4a4, #8a1616, #8a0505)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {text}
    </motion.div>
  );
};

export const GradientFlowTextRzfx = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ duration: 3, repeat: 3, ease: 'linear' }}
      style={{
        backgroundImage:
          'linear-gradient(to right, #490808, #e0c2c2, #972d2d, #645a5a)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {text}
    </motion.div>
  );
};

// 4. Bounce and Spin Effect
export const BounceSpinText = ({ text }: { text: string }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
          whileHover={{
            scale: [1, 1.2, 1],
            rotate: [0, 80, 0],
            transition: { duration: 0.5 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 5. Glitch Effect
export const GlitchText = ({ text }: { text: string }) => {
  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: 'rgba(255,0,0,0.7)',
        }}
        animate={{ x: [-2, 2, -2], y: [2, -2, 2] }}
        transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
      >
        {text}
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: 'rgba(0,255,0,0.7)',
        }}
        animate={{ x: [2, -2, 2], y: [-2, 2, -2] }}
        transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
      >
        {text}
      </motion.div>
      <div>{text}</div>
    </div>
  );
};

// 6. 3D Flip Effect
export const FlipText = ({ text }: { text: string }) => {
  return (
    <div style={{ perspective: '1000px' }}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block' }}
          initial={{ rotateY: 0 }}
          whileHover={{
            rotateY: 360,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};
