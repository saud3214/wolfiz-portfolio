import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface ParallaxWrapperProps {
  children: ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (wrapperRef.current) {
        const moveinX = (e.pageX * -1) / 100;
        const moveinY = (e.pageY * -1) / 100;

        gsap.to(wrapperRef.current, {
          backgroundPosition: `${moveinX}px ${moveinY}px`,
          duration: 0.3,
          ease: 'power3.out',
        });
      }
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ParallaxWrapper;
