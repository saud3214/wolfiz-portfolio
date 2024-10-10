// pages/index.tsx
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Home = () => {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (lightRef.current && imageRef.current) {
      // Get the bounding box of the image container
      const imageBounds = imageRef.current.getBoundingClientRect();

      const { clientX, clientY } = e;

      // Calculate the position of the light relative to the image container
      const xPos = clientX - imageBounds.left - 230; // Offset to center the light
      const yPos = clientY - imageBounds.top - 230; // Offset to center the light

      lightRef.current.style.left = `${xPos}px`;
      lightRef.current.style.top = `${yPos}px`;
    }
  };

  useEffect(() => {
    // Listen to mousemove within the image container
    if (imageRef.current) {
      imageRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div
        className="relative inline-block w-full  overflow-hidden"
        ref={imageRef}
      >
        <Image
          src="/website/1947pa/np.png" // Replace with your image path
          alt="Timeless"
          fill
          className="object-cover relativepos"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 pointer-events-none" />

        <div
          ref={lightRef}
          className="absolute rounded-full pointer-events-none w-[25vw] h-[50vh] bg-white opacity-100 mix-blend-soft-light"
        />
      </div>
    </div>
  );
};

export default Home;
