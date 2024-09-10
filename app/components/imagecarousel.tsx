import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { id: 1, src: '/mobileapps/sc/img1.png', alt: 'Burger' },
  { id: 2, src: '/mobileapps/sc/img2.png', alt: 'Rice' },
  { id: 3, src: '/mobileapps/sc/img4.png', alt: 'Fries' },
  { id: 4, src: '/mobileapps/sc/img3.png', alt: 'Salad' },
];

export default function ImageCarousel() {
  // Initialize rotation state for the large image
  const [largeImageRotation, setLargeImageRotation] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<number>(1); // Track selected thumbnail

  const handleClick = (id: number) => {
    // Set rotation based on clicked image id
    let rotation = 0;
    switch (id) {
      case 1:
        rotation = 0;
        break;
      case 2:
        rotation = -90;
        break;
      case 3:
        rotation = -180;
        break;
      case 4:
        rotation = -270;
        break;
      default:
        rotation = 0;
    }

    setLargeImageRotation(rotation);
    setSelectedId(id); // Update selected thumbnail
  };

  // Automatically change images every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedId((prevId) => {
        const nextId = prevId < images.length ? prevId + 1 : 1;
        handleClick(nextId);
        return nextId;
      });
    }, 3000); // 500ms interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-start justify-start gap-10 2xl:mt-10   ">
      {/* Thumbnails */}
      <div className="flex space-y-6 items-center justify-center gap-5 h-44 ">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => handleClick(image.id)}
            className={`relative transition-transform duration-300 ${
              selectedId === image.id
                ? 'border-b-2 border-yellow-400 border-glow-yellow'
                : ''
            }`}
          >
            <div
              className={`relative w-[9vw] h-[18vh] rounded-full overflow-hidden transition-transform duration-300  `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-full p-1"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Large Image */}
      <div className=" w-full h-full flex items-center justify-center ">
        <div
          className={`  transition-transform duration-700 w-[53%] h-full absolute -right-[33%] object-cover  -bottom-[34%] `}
          style={{
            transform: `rotate(${largeImageRotation}deg)`,
          }}
        >
          <Image
            src="/mobileapps/sc/alldish3.png" // Assuming you want to show the first image in the large view
            alt="all dish"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
