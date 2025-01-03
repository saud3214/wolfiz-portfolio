import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex justify-center items-center w-full pt-5 md:pt-0 ">
      <div className="flex w-full items-center justify-center md:gap-6 gap-3">
        <div className=" flex justify-center items-center md:w-1/2 w-2/3">
          <Image
            src={selectedImage}
            alt="Selected"
            fill
            className="object-cover relativepos"
          />
        </div>

        <div className="flex flex-col gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative w-[15vw] h-[15vh] cursor-pointer transition-opacity ${
                selectedImage === img ? 'ring-2 ring-yellow-500' : ''
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                fill
                className="object-contain"
              />
              {/* Overlay to show the selected state */}
              {selectedImage === img && (
                <div className="absolute inset-0 bg-yellow-500 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
