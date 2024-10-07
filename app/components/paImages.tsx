import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    small: '/website/1947pa/c1.png',
    large: '/website/1947pa/c1c.png',
    alt: 'Image 1',
  },
  {
    small: '/image2_small.jpg',
    large: '/image2_large.jpg',
    alt: 'Image 2',
  },
  {
    small: '/image3_small.jpg',
    large: '/image3_large.jpg',
    alt: 'Image 3',
  },
];

const ImageGallery: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on the main page
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  }, [fullscreenImage]);

  const openFullscreen = (largeImageUrl: string) => {
    setFullscreenImage(largeImageUrl);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="relative">
      {/* Image Gallery */}
      <div className="flex space-x-4">
        {images.map((img, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={img.small}
              alt={img.alt}
              width={100}
              height={100}
              className="object-cover"
              onClick={() => openFullscreen(img.large)}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-auto">
          {/* Scrollable Modal Container */}
          <div className="relative w-full h-full max-h-screen p-4 flex flex-col items-center justify-center">
            {/* Close Button */}
            <span
              className="absolute top-4 right-4 text-white text-4xl cursor-pointer z-50"
              onClick={closeFullscreen}
            >
              &times;
            </span>

            {/* Scrollable Image Container */}
            <div
              className="flex-grow w-full max-w-5xl  p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={fullscreenImage}
                alt="Fullscreen Image"
                width={1600}
                height={900}
                className=" w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
