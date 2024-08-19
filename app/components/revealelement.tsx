import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
interface CommonProps {
  children: ReactNode;
}

interface RotateImageProps extends CommonProps {}
interface RotateTextProps extends CommonProps {}

export const RotateText: React.FC<RotateTextProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '-15% 0px -15% 0px', // Similar to scroll margins or thresholds in GSAP
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.2,
          ease: 'easeInOut',
        },
      });
    } else {
      controls.start({
        scale: 0.5,
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ scale: 0.5 }}>
      {children}
    </motion.div>
  );
};
export const RotateImage: React.FC<RotateImageProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '-15% 0px -30% 0px', // Similar to scroll margins or thresholds in GSAP
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 0,
        transition: {
          duration: 1,
          delay: 0.5,
          ease: 'easeInOut',
        },
      });
    } else {
      controls.start({
        rotate: 90,
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ rotate: 90 }}>
      {children}
    </motion.div>
  );
};

interface RevealOnScrollProps {
  children: ReactNode;
  width?: string | number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-10% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const RevealOnScrollX: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-5% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.6, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const RevealOnScrollXImage: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200, rotate: 10 },
          visible: { opacity: 1, x: 0, rotate: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.6, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};
export const RevealOnScrollLeft: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-5% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.2, ease: 'backInOut' }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.6, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const RevealOnScrollLeftText: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-5% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.6, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const RevealOnScrollLeftImage: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-5% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200, rotate: -10 },
          visible: { opacity: 1, x: 0, rotate: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.6, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const SrLeft: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: 'easeOut',
          type: 'spring',
          bounce: 0.3, // Adjust the bounce value as needed
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 1.5,
          ease: 'easeIn',
          type: 'spring',
          bounce: 0.3, // Apply bounce to this transition as well
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const SrRight: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: 'easeOut',
          type: 'spring',
          bounce: 0.3, // Adjust the bounce value as needed
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 1.5,
          ease: 'easeIn',
          type: 'spring',
          bounce: 0.3, // Apply bounce to this transition as well
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const SrTop: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: 'easeOut',
          type: 'spring',
          bounce: 0.3, // Adjust the bounce value as needed
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 1.5,
          ease: 'easeIn',
          type: 'spring',
          bounce: 0.3, // Apply bounce to this transition as well
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const SrBottom: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: 'easeOut',
          type: 'spring',
          bounce: 0.3, // Adjust the bounce value as needed
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 1.5,
          ease: 'easeIn',
          type: 'spring',
          bounce: 0.3, // Apply bounce to this transition as well
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--background)',
          zIndex: 20,
        }}
      />
    </div>
  );
};
