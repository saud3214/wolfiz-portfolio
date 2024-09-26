import { useEffect, useState, useRef } from 'react';

const AnimatedCardsKC = () => {
  const [showCard, setShowCard] = useState(1); // Start with 1 to show the first card immediately
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the card animation when the container enters the viewport
            let delay = 0;
            const interval = setInterval(() => {
              setShowCard((prev) => (prev < 4 ? prev + 1 : prev));
              delay++;
              if (delay === 3) {
                // only delay for the remaining 3 cards
                clearInterval(interval);
              }
            }, 1000); // 2 seconds delay for remaining cards
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the container is in the viewport
    );

    if (cardContainerRef.current) {
      observer.observe(cardContainerRef.current);
    }

    return () => {
      if (cardContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center   w-full h-full">
      <div className="space-y-3 relative w-full h-full " ref={cardContainerRef}>
        {/* Primary Card */}
        {showCard >= 1 && (
          <div
            className={`absolute transition-transform transform duration-700 ease-in-out translate-y-0 opacity-100 bg-[#6E3385] h-full w-full flex items-start justify-center gap-10 font-bold p-10 z-10 `}
          >
            <span className="text-white text-3xl">Primary</span>
            <span className="text-white text-3xl ">6E3385</span>
          </div>
        )}

        {/* Secondary Card */}
        {showCard >= 2 && (
          <div
            className={`absolute transition-transform transform duration-700 ease-in-out ${
              showCard >= 2
                ? 'translate-y-[17%] opacity-100'
                : '-translate-y-full opacity-0'
            } bg-[#FF7F40] h-full w-full flex items-start justify-center gap-10 font-bold p-10 z-20`}
          >
            {' '}
            <span className="text-white text-3xl">Secondary</span>
            <span className="text-white text-3xl">FF7F40</span>
          </div>
        )}

        {/* Gray Card */}
        {showCard >= 3 && (
          <div
            className={`absolute transition-transform transform duration-700 ease-in-out ${
              showCard >= 3
                ? 'translate-y-[35%] opacity-100'
                : '-translate-y-full opacity-0'
            } bg-gray-400 h-full w-full flex items-start justify-center gap-10 font-bold p-10 z-30`}
          >
            {' '}
            <span className="text-white text-3xl">Gray</span>
            <span className="text-white text-3xl">Gray</span>
          </div>
        )}

        {/* Black Card */}
        {showCard >= 4 && (
          <div
            className={`absolute transition-transform transform duration-700 ease-in-out ${
              showCard >= 4
                ? 'translate-y-[54%] opacity-100'
                : '-translate-y-full opacity-0'
            } bg-black h-full w-full flex items-start justify-center gap-10 font-bold p-10 z-40`}
          >
            {' '}
            <span className="text-white text-3xl">Black</span>
            <span className="text-white text-3xl">Black</span>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedCardsKC;
