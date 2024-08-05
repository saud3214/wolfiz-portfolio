import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const updateDotPosition = () => {
    if (dotRef.current) {
      const dot = dotRef.current;
      const dotWidth = dot.offsetWidth / 2;
      const dotHeight = dot.offsetHeight / 2;

      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      gsap.to(dot, {
        x: mousePos.current.x - dotWidth + scrollX,
        y: mousePos.current.y - dotHeight + scrollY,
        duration: 0.1,
        ease: 'power3.Out',
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      updateDotPosition();
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', updateDotPosition);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', updateDotPosition);
    };
  }, []);

  // Apply hover effect
  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(dotRef.current, {
        scale: 3,
        opacity: 1,
        borderColor: 'blue',
        backgroundColor: '',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(dotRef.current, {
        scale: 1,
        opacity: 1,
        borderColor: 'transparent',
        backgroundColor: '',
      });
    };

    const hoverTargets = document.querySelectorAll('span');

    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot fixed top-0 left-0 w-5 h-5  rounded-full pointer-events-none z-50"
    ></div>
  );
};

export default CursorDot;
