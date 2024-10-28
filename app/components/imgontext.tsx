import { useState } from 'react';
import Image from 'next/image';

const HoverImageComponent: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleMouseEnter = (image: string) => {
    setActiveImage(image);
  };

  const handleMouseLeave = () => {
    setActiveImage(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center md:h-screen   bg-hmbg1 bg-center bg-cover bg-no-repeat">
      {/* Text Section (Column Layout) */}
      <div className="flex flex-col space-y-4 text-start text-[4vw] text-white    font-bold uppercase  w-8/12 ">
        <span
          className="hover-text cursor-pointer hover:text-yellow-500"
          onMouseEnter={() => handleMouseEnter('image1')}
          onMouseLeave={handleMouseLeave}
        >
          EVERY GAME is a new
        </span>
        <span
          className="hover-text cursor-pointer  ml-[20%] hover:text-yellow-500"
          onMouseEnter={() => handleMouseEnter('image2')}
          onMouseLeave={handleMouseLeave}
        >
          OPPORTUNITY to
        </span>
        <span
          className="hover-text cursor-pointer  hover:text-yellow-500"
          onMouseEnter={() => handleMouseEnter('image3')}
          onMouseLeave={handleMouseLeave}
        >
          SHOWCASE skills
        </span>
        <span
          className="hover-text cursor-pointer ml-[20%] hover:text-yellow-500"
          onMouseEnter={() => handleMouseEnter('image4')}
          onMouseLeave={handleMouseLeave}
        >
          determination, and
        </span>
        <span
          className="hover-text cursor-pointer hover:text-yellow-500"
          onMouseEnter={() => handleMouseEnter('image5')}
          onMouseLeave={handleMouseLeave}
        >
          passion on the ice.
        </span>
      </div>

      {/* Image Section */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {/* Image 1 - Positioned on the Top */}
        <div
          className={`absolute transition-opacity duration-500 ${
            activeImage === 'image1' ? 'opacity-100' : 'opacity-0'
          } w-52 h-52 top-10 left-1/2 transform -translate-x-1/2`}
        >
          <Image
            src="/hockey/h1.png"
            alt="Image 1"
            width={208}
            height={208}
            objectFit="cover"
            priority
          />
        </div>

        {/* Image 2 - Positioned on the Left */}
        <div
          className={`absolute transition-opacity duration-500 z-50 ${
            activeImage === 'image2' ? 'opacity-100' : 'opacity-0'
          } w-52 h-52 top-1/2 left-10 transform -translate-y-1/2`}
        >
          <Image
            src="/hockey/h2.png"
            alt="Image 2"
            width={208}
            height={208}
            objectFit="cover"
            priority
          />
        </div>

        {/* Image 3 - Positioned on the Right */}
        <div
          className={`absolute transition-opacity duration-500 ${
            activeImage === 'image3' ? 'opacity-100' : 'opacity-0'
          } w-52 h-52 top-1/2 right-10 transform -translate-y-1/2`}
        >
          <Image
            src="/hockey/h1.png"
            alt="Image 3"
            width={208}
            height={208}
            objectFit="cover"
            priority
          />
        </div>

        {/* Image 4 - Positioned at the Bottom */}
        <div
          className={`absolute transition-opacity duration-500 ${
            activeImage === 'image4' ? 'opacity-100' : 'opacity-0'
          } w-52 h-52 bottom-10 left-1/2 transform -translate-x-1/2`}
        >
          <Image
            src="/hockey/h2.png"
            alt="Image 4"
            width={208}
            height={208}
            objectFit="cover"
            priority
          />
        </div>
        <div
          className={`absolute transition-opacity duration-500 ${
            activeImage === 'image5' ? 'opacity-100' : 'opacity-0'
          } w-52 h-52 bottom-10 left-1/2 transform -translate-x-1/2`}
        >
          <Image
            src="/hockey/h1.png"
            alt="Image 4"
            width={208}
            height={208}
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HoverImageComponent;
