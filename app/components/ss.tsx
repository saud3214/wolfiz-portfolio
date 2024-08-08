import { useEffect } from 'react';
import Lenis from 'lenis';

const useSmoothScroll = () => {
  interface CustomLenisOptions extends Partial<typeof Lenis> {
    smooth?: boolean;
    smoothTouch?: boolean;
    direction?: 'vertical' | 'horizontal';
  }
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
