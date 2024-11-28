// Importing necessary modules and styles
import { useEffect } from 'react';
import Image from 'next/image';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import { preloadImages } from '../../public/js/utils';
import { ImageTrail } from '../../public/js/imageTrail';

interface ImageTrailProps {
  images: string[];
}

const ImageGallery: React.FC<ImageTrailProps> = ({ images }) => {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLElement>('.content__img');
    const noImageZones =
      document.querySelectorAll<HTMLElement>('.no-image-zone');

    // Variable to track if the cursor is in an excluded zone
    let hideImages = false;

    // Add event listeners to each excluded div
    noImageZones.forEach((zone) => {
      zone.addEventListener('mouseenter', () => {
        hideImages = true;
      });
      zone.addEventListener('mouseleave', () => {
        hideImages = false;
      });
    });

    document.addEventListener('mousemove', (event: MouseEvent) => {
      images.forEach((image) => {
        if (hideImages) {
          // Ensure the image is hidden and stops moving
          image.style.opacity = '0';
        }
      });
    });
    preloadImages('.content__img-inner').then(() => {
      // Once all images are preloaded, remove the 'loading' class from the body element.
      const contentElement = document.querySelector('.content');

      if (contentElement) {
        new ImageTrail(contentElement as HTMLElement);
      } else {
        console.error("Element with class 'content' not found");
      }
    });

    // Running imagesLoaded and GSAP effects when component mounts
    imagesLoaded('.content', { background: true }, () => {
      gsap.to('.content__img', {
        opacity: 0,

        duration: 1,
        ease: 'power4.out',
      });
    });
  }, []);

  // Array of image sources

  return (
    <div className="content">
      {images.map((src, index) => (
        <div key={index} className="content__img" style={{ opacity: 0 }}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
      ))}
      <style jsx>{`
        .content {
          grid-area: content;
          border-radius: 8px;
          background: var(--color-bg-content);
          position: relative;
          z-index: 100;
          width: 100%;
          height: 100%;
        }

        .content__img {
          width: 250px;
          height: 150px;
          aspect-ratio: var(--img-ratio);
          border-radius: 20px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          overflow: hidden;
          will-change: transform, filter;
        }

        .content__img-inner {
          background-position: 50% 50%;
          width: 300px;
          height: 150px;
          background-size: cover;
          position: absolute;
          top: calc(-1 * var(--img-offset-y) / 2);
          left: calc(-1 * var(--img-offset-x) / 2);
        }

        :root {
          --img-width: 190px;
          --img-ratio: 1.1;
          --img-offset-x: 20px;
          --img-offset-y: 20px;
          --img-border-radius: 7px;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
