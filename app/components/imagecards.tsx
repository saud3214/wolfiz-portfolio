import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageStack = () => {
  const [activeImage, setActiveImage] = useState(0); // To track the current active image
  const [rotation, setRotation] = useState(0); // To track the rotation of the main div

  useEffect(() => {
    const animateImages = () => {
      const timers = [
        setTimeout(() => {
          setActiveImage(1);
          setRotation((prev) => prev + 4); // Rotate by 2 degrees
        }, 2000), // First image moves after 2s
        setTimeout(() => {
          setActiveImage(2);
          setRotation((prev) => prev + 2); // Rotate by 2 degrees
        }, 4000), // Second image moves after 2s
        setTimeout(() => {
          setActiveImage(3);
          setRotation((prev) => prev + 2); // Rotate by 2 degrees
        }, 6000), // Third image moves after 2s
        setTimeout(() => {
          setActiveImage(0);
          setRotation(0); // Rotate by 2 degrees
        }, 8000), // Reset to the first image after 2s
      ];

      return () => timers.forEach(clearTimeout); // Clear timeouts on cleanup
    };

    animateImages();
    const interval = setInterval(animateImages, 9000); // Run the animation every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="relative size-96 flex transition-transform duration-1000"
      style={{ transform: `rotate(${rotation}deg)` }} // Apply rotation
    >
      {/* Image 1 */}
      <Image
        src="/website/kingdom/c4n.png"
        alt="Image 1"
        className={`absolute top-0 left-0 w-full h-full  transition-all duration-1000 rotate-0 ease-in-out z-20 ${
          activeImage >= 1
            ? 'translate-x-full -translate-y-full opacity-0 z-10'
            : 'translate-x-0 translate-y-0 opacity-100'
        }`}
        width={250}
        height={250}
      />

      {/* Image 2 */}
      <Image
        src="/website/kingdom/c7n.png"
        alt="Image 2"
        className={`absolute top-0 left-0 w-full h-full  transition-all duration-1000 rotate-[12deg] ease-in-out z-10 ${
          activeImage >= 2
            ? 'translate-x-full -translate-y-full opacity-0 z-20'
            : 'translate-x-0 translate-y-0 opacity-100'
        }`}
        width={250}
        height={250}
      />

      {/* Image 3 */}
      <Image
        src="/website/kingdom/c5n.png"
        alt="Image 3"
        className={`absolute top-0 left-0 w-full h-full  transition-all duration-1000 rotate-[24deg] ease-in-out z-0 ${
          activeImage >= 3
            ? 'translate-x-full -translate-y-full opacity-0 z-0'
            : 'translate-x-0 translate-y-0 opacity-100'
        }`}
        width={250}
        height={250}
      />
    </div>
  );
};

export default ImageStack;
