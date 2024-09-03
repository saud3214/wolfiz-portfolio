import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  initialScale?: number;
  finalScale?: number;
  duration?: number;
  className?: string;
  initialWidth?: number; // Initial width in pixels
  initialHeight?: number; // Initial height in pixels
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  initialScale = 0.5,
  finalScale = 1,
  duration = 1,
  className = '',
  initialWidth = 500, // Default initial width
  initialHeight = 500, // Default initial height
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: '-15% 0px -45% 0px' }); // Custom margin settings

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: finalScale,
        borderRadius: '0%', // Rectangular shape when in view
        width: '100%', // Full width when in view
        height: '100%', // Full height when in view
        transition: { duration },
      });
    } else {
      controls.start({
        scale: initialScale,
        borderRadius: '50%', // Fully rounded shape when out of view
        width: initialWidth, // Initial width in pixels
        height: initialHeight, // Initial height in pixels
        transition: { duration },
      });
    }
  }, [
    isInView,
    controls,
    finalScale,
    initialScale,
    duration,
    initialWidth,
    initialHeight,
  ]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{
        scale: initialScale,
        borderRadius: '50%',
        width: initialWidth, // Set initial width in pixels
        height: initialHeight, // Set initial height in pixels
      }}
      animate={controls}
      style={{
        width: '100%', // Ensure the container takes full width
        height: '100%', // Ensure the container takes full height
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%', // Ensure initial roundness
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            className="object-cover"
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedImage;
