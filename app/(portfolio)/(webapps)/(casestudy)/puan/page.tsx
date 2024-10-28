'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import AnimatedCardsKC from '@/app/components/animatedbeam';
import ExpandingCards from '@/app/components/cardsKC';
import useSmoothScroll from '@/app/components/ss';
import AvatarCircles from '@/components/ui/avatar-circles';
import { SrLeft, SrRight, SrBottom } from '@/app/components/revealelement';
import { AnimatedText2 } from '@/app/components/animatedtext';
import ImageStack from '@/app/components/imagecards';
import Home from '@/app/components/paImages';
import { MarqueePuan1 } from '@/app/components/Marqueepuan1';

import GradualSpacing from '@/components/magicui/gradual-spacing';
import ImageGallery from '@/app/components/hmimages';
import HoverImageComponent from '@/app/components/imgontext';
const urbanist = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

const slides = [
  { src: '/puan/black.png', alt: 'First Image' },
  { src: '/puan/red.png', alt: 'Second Image' },
  { src: '/puan/blue.png', alt: 'Third Image' },
];

export default function Puan() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useSmoothScroll();

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col max-w-[1920px]  ${urbanist.className} `}
      >
        <div className=" grid grid-cols-12 items-center justify-center   w-full   bg-puanbg1 bg-bottom bg-no-repeat bg-contain h-[80vh] mb-10">
          <div className="md:col-span-6 col-span-12 bg-[#C4161C] bg-opacity-90 h-full w-full items-center justify-center flex p-3 relative">
            <div className="relative w-10/12 ">
              <Image
                className=" relativepos"
                src="/puan/t1.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  bottom-[7%] left-[10%] w-[25%] ">
              <Image
                className=" relativepos"
                src="/puan/t2.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
          </div>
          <div className="w-full h-full col-span-12 bg-opacity-25 md:col-span-6">
            <MarqueePuan1 />
          </div>
        </div>
        <div className="grid items-center justify-center w-11/12 grid-cols-12 gap-5 py-5 md:py-10 md:gap-0">
          <div className="flex items-center justify-center w-full col-span-6">
            <div className="relative w-full md:w-3/5 ">
              <SrLeft>
                <Image
                  className=" relativepos"
                  src="/puan/loo2.png" // Replace with your image path
                  alt="Background 1"
                  fill
                />
              </SrLeft>
            </div>
          </div>
          <div className="flex items-center justify-center w-full col-span-6">
            <div className="relative w-full md:w-10/12 ">
              <SrBottom>
                <Image
                  className=" relativepos"
                  src="/puan/t3.png" // Replace with your image path
                  alt="Background 1"
                  fill
                />
              </SrBottom>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center w-full grid-cols-12 py-5 md:py-10">
          <div className="col-span-12 ">
            <div className="w-full md:h-[80vh] items-center justify-center flex">
              <video
                className="z-0 object-cover w-full h-full "
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/puan/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center w-11/12 grid-cols-12 py-5 md:grid-cols-11 md:py-10">
          <div className="items-start col-span-12 pb-5 md:col-span-11 md:pb-10 ">
            <div className="relative w-1/2 md:w-1/ ">
              <Image
                className=" relativepos"
                src="/puan/t4.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3 md:h-full h-[20vh]">
            <div className="flex items-end justify-center h-full">
              <div className="group relative w-10/12 bg-[#3B3B6D] transition-all duration-500 ease-in-out h-2/3 hover:h-full overflow-hidden">
                <p className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-full group-hover:translate-y-0 -rotate-90 text-white md:text-2xl text-sm md:font-bold font-semibold transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  Bold Italic
                </p>
              </div>
            </div>
          </div>
          <div className="h-full col-span-3 md:col-span-2">
            <div className="flex items-end justify-center h-full">
              <div className="group relative w-10/12 bg-[#C3072F] transition-all duration-500 ease-in-out h-2/3 hover:h-full overflow-hidden">
                <p className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-full group-hover:translate-y-0 -rotate-90 text-white md:text-2xl text-sm md:font-bold font-semibold transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  Regular
                </p>
              </div>
            </div>
          </div>
          <div className="h-full col-span-3 md:col-span-2">
            <div className="flex items-end justify-center h-full">
              <div className="group relative w-10/12 bg-[#090756] transition-all duration-500 ease-in-out h-2/3 hover:h-full overflow-hidden">
                <p className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-full group-hover:translate-y-0 -rotate-90 text-white md:text-2xl text-base md:font-bold font-semibold transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  Bold
                </p>
              </div>
            </div>
          </div>
          <div className="h-full col-span-3 md:col-span-2 ">
            <div className="flex items-end justify-center h-full">
              <div className="group relative w-10/12 bg-[#005B31] transition-all duration-500 ease-in-out h-2/3 hover:h-full overflow-hidden">
                <p className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-full group-hover:translate-y-0 -rotate-90 text-white md:text-2xl text-base md:font-bold font-semibold transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  Inter
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-12 p-3 md:col-span-3">
            <div className="relative w-11/12 md:w-full ">
              <Image
                className=" relativepos"
                src="/puan/aa.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
          </div>
        </div>

        <div className="grid items-center justify-center w-11/12 grid-cols-12 py-5 md:py-10">
          <div className="items-start col-span-12 pb-10 ">
            <div className="relative w-1/2 md:w-1/4 ">
              <Image
                className=" relativepos"
                src="/puan/t5.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center col-span-12 group ">
            <div className="relative w-full md:w-9/12 ">
              <Image
                className=" relativepos"
                src="/puan/lap2.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[18%] bottom-[14%]  left-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out ">
              <Image
                className=" relativepos"
                src="/puan/b1.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[25%] bottom-[5%]  left-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <Image
                className=" relativepos"
                src="/puan/b1h.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[18%] bottom-[14%]  right-[19%]  opacity-100 group-hover:opacity-0 transition-opacity duration-1000 ease-in-out">
              <Image
                className=" relativepos"
                src="/puan/b2.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[25%] bottom-[5%]  right-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <Image
                className=" relativepos"
                src="/puan/b2h.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[18%] bottom-[44.5%]  left-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-1000 ease-in-out  ">
              <Image
                className=" relativepos"
                src="/puan/u1.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[30%] top-[1%]  left-[5%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <Image
                className=" relativepos"
                src="/puan/u1h.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[30%] top-[1%]  right-[10%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <Image
                className=" relativepos"
                src="/puan/u2h.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute  w-[18%] bottom-[44.5%]  right-[19%] opacity-100 group-hover:opacity-0 transition-opacity duration-1000 ease-in-out ">
              <Image
                className=" relativepos"
                src="/puan/u2.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-12 items-center justify-center   w-full md:h-[70vh] h-[30vh] pt-10  ">
          <div className="flex items-center justify-center w-full h-full col-span-12">
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-transform duration-1000 ${
                      index === currentIndex
                        ? 'transform translate-y-0'
                        : 'transform translate-y-full'
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-12 items-center justify-center   w-full md:h-[80vh] md:py-10  py-5 ">
          <div className="flex items-center justify-center w-full h-full col-span-12">
            <div className="relative flex gap-5 overflow-x-hidden">
              <div className="flex gap-5 py-5 animate-marquee whitespace-nowrap">
                <div className="relative w-1/2 md:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m1.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="relative w-1/2 md:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m2.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="relative w-1/2 md:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m3.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="relative w-1/2 md:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m4.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="absolute top-0 flex h-full gap-5 py-5 ml-6 animate-marquee2 whitespace-nowrap">
                <div className="relative w-1/2 h-full md:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m1.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="relative w-1/2 md:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m2.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="relative w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m3.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="relative w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/puan/m4.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid items-center justify-center w-full grid-cols-12 pb-10 group">
          <div className="flex items-center justify-center col-span-12 py-5 ">
            <div className="relative w-9/12 ">
              <Image
                className=" relativepos"
                src="/puan/t6.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>

            <div className="absolute left-[11%] top-[-2%] w-[12%] opacity-100 group-hover:opacity-0  group-hover:-translate-x-full transform duration-500 ease-in transition-all  ">
              <Image
                className=" relativepos"
                src="/puan/img1.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute left-[41%] top-[-2%] w-[12%] opacity-100 group-hover:opacity-0  group-hover:-translate-y-full transform duration-500 ease-in transition-all  ">
              <Image
                className=" relativepos"
                src="/puan/img2.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute right-[11%] top-[-2%] w-[12%] opacity-100 group-hover:opacity-0  group-hover:translate-x-full transform duration-500 ease-in transition-all  ">
              <Image
                className=" relativepos"
                src="/puan/img3.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute right-[11%] bottom-[15%] w-[12%] opacity-100 group-hover:opacity-0  group-hover:translate-y-full transform duration-500 ease-in transition-all  ">
              <Image
                className=" relativepos"
                src="/puan/img4.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
            <div className="absolute left-[28%] bottom-[5%] w-[12%] opacity-100 group-hover:opacity-0  group-hover:translate-y-full transform duration-500 ease-in transition-all  ">
              <Image
                className=" relativepos"
                src="/puan/img5.png" // Replace with your image path
                alt="Background 1"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
