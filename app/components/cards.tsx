// components/AnimatedCards.tsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCards: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.card:not(:first-child)',
      {
        x: () => window.innerWidth / 2 + 100,
        rotate: -90,
      },
      {
        x: 0,
        stagger: 0.5,
        rotate: 0,
        scrollTrigger: {
          pin: '.container',
          markers: true,
          scrub: true,
          start: 'top ]center',
          end: '+=10000',
          invalidateOnRefresh: true,
        },
      },
    );
  }, []);

  return (
    <>
      <div className="h-[60vh] opacity-20"></div>
      <div className="container bg-gray-500 h-screen flex items-center justify-center w-full">
        <div className="cards relative w-[200px] h-[200px] mx-auto overflow-hidden">
          <div className="card absolute top-0 left-0 w-full h-full bg-[#dda0dd]"></div>
          <div className="card absolute top-0 left-0 w-full h-full bg-[#a9a0dd]"></div>
          <div className="card absolute top-0 left-0 w-full h-full bg-[#dda0dd]"></div>
          <div className="card absolute top-0 left-0 w-full h-full bg-[#a9a0dd]"></div>
          <div className="card absolute top-0 left-0 w-full h-full bg-[#dda0dd]"></div>
        </div>
      </div>
      <div className="h-[60vh] opacity-20"></div>
    </>
  );
};

export default AnimatedCards;
