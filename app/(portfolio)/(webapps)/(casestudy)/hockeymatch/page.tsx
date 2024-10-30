'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Roboto, Libre_Caslon_Text } from 'next/font/google';
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
import { MarqueePA } from '@/app/components/cardsPA';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import ImageGallery from '@/app/components/hmimages';
import HoverImageComponent from '@/app/components/imgontext';
const urbanist = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
const lcs = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

interface ImageSequenceProps {
  images: { src: string; alt: string }[];
}

export default function HockeyMatch() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const images = [
    { src: '/hockey/regular.png', alt: 'Image 1' },
    { src: '/hockey/med.png', alt: 'Image 2' },
    { src: '/hockey/semibold.png', alt: 'Image 3' },
    { src: '/hockey/bold.png', alt: 'Image 4' },
  ];
  const images2 = [
    { src: '/hockey/reg.png', alt: 'Image 1' },
    { src: '/hockey/medi.png', alt: 'Image 2' },
    { src: '/hockey/sb.png', alt: 'Image 3' },
    { src: '/hockey/boldt.png', alt: 'Image 4' },
  ];
  const images3 = [
    '/hockey/botl.png',
    '/hockey/helmet.png',
    '/hockey/player.png',
    '/hockey/mobile.png',
  ];

  useSmoothScroll();
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds delay

    return () => clearInterval(interval);
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 w-full ">
              <div className="w-full md:h-[70vh] h- items-center justify-center flex">
                <video
                  className=" w-full h-full object-cover z-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/hockey/first.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-full md:h-[100vh] items-center justify-center flex relative">
                <div className="grid grid-cols-12  items-center justify-center w-full h-full  ">
                  <div className="md:col-span-6 col-span-12 bg-[#F59B08] items-center justify-center h-full w-full flex flex-col">
                    <div className=" w-1/4 absolute bottom-0  left-0   ">
                      <Image
                        className=" relativepos"
                        src="/hockey/hockey.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className=" w-1/4 absolute top-[3%]  left-[37%] hidden md:flex   ">
                      <Image
                        className=" relativepos"
                        src="/hockey/logo.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="md:w-3/4 w-11/12 items-start justify-center flex flex-col gap-5 p-5">
                      <span className="font-black text-white md:text-7xl text-3xl uppercase">
                        Victory <br /> comes to
                        <br /> those
                        <br /> prepared
                      </span>
                      <span className="text-black  text-lg font-bold">
                        A Case Study in Hockey Mastery
                      </span>
                      <span className="font-medium  md:w-9/12 w-11/12">
                        This case study meticulously examines how these
                        intricate challenges were addressed, highlighting
                        pivotal moments where strategic decisions either
                        elevated the teams performance to new heights or
                        underscored areas needing improvement.
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center h-full w-full md:flex hidden ">
                    <div className="w-full h-full flex items-center justify-center">
                      <video
                        className="relative z-10 w-11/12 " // Set custom size for front video
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source
                          src="/website/hockey/tab.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  items-center justify-center flex relative overflow-hidden group">
                <div className="grid grid-cols-12  items-center justify-center w-full h-full group-hover:-translate-x-1/2 transform transition-all duration-1000 opacity-100 group-hover:opacity-0  ">
                  <div className="col-span-7  items-center ">
                    <div className="relative  w-11/12  ">
                      <Image
                        className=" relativepos"
                        src="/hockey/slide1.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-5  items-center  justify-center flex">
                    <div className="relative  w-11/12  ">
                      <Image
                        className=" relativepos"
                        src="/hockey/slide2.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12  items-center justify-center w-full h-full opacity-0 group-hover:opacity-100  -translate-x-full  group-hover:translate-x-0 transform transition-all duration-1000  absolute ">
                  <div className="col-span-5  items-center  justify-center flex">
                    <div className="relative  w-11/12  ">
                      <Image
                        className=" relativepos"
                        src="/hockey/slide2.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-7  items-end justify-end flex ">
                    <div className="relative  w-11/12  ">
                      <Image
                        className=" relativepos"
                        src="/hockey/slide2n.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-full items-center justify-center flex pt-10">
                <div className="w-full items-center justify-center relative  ">
                  <div className="relative  flex flex-col items-start justify-center md:h-[40vh] ">
                    <div
                      id="videoDiv"
                      className="video-container flex flex-col h-full absolute z-0 w-full"
                    >
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="h-full"
                      >
                        <source src="/hockey/strongvid.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className=" flex items-center absolute w-full top-[0%] h-full z-10    ">
                      <Image
                        className=" relativepos  "
                        src="/hockey/strong.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12 h-full items-start justify-start flex flex-col gap-5 pb-5">
                <div className=" flex items-center relative w-auto   z-10  text-black font-bold text-[4vw]   leading-none uppercase  ">
                  <span>
                    Victory Comes to <br /> those prepared.
                  </span>
                </div>
                <div className="w-full h-  items-center justify-between flex">
                  <span className="md:w-1/2 w-11/12">
                    This case study meticulously examines how these intricate
                    challenges were addressed, highlighting pivotal moments
                    where strategic decisions either elevated the teams
                    performance to new heights or underscored areas needing
                    improvement.
                  </span>
                  <div className=" w-1/6  md:flex hidden   ">
                    <Image
                      className=" relativepos"
                      src="/hockey/hmy.png" // Replace with your image path
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full items-center justify-center flex">
                <div className="grid grid-cols-12 items-center justify-center w-full">
                  <div className="md:col-span-4 col-span-12 flex flex-col items-center justify-center bg-[#FE9A01] relative">
                    <div className="relative  w-full md:h-[100vh]  object-cover ">
                      <Image
                        className=" relativepos object-cover"
                        src="/hockey/aa.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div>
                      {images2.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute transition-opacity duration-1000 ease-in-out bottom-[20%] left-[25%] ${
                            visibleIndex === index ? 'opacity-100' : 'opacity-0'
                          } w-24 h-4`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    <span className="absolute bottom-[16%] left-[25%] text-xl font-semibold  lowercase">
                      - 720 PLAYERS Registered
                    </span>
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute transition-opacity duration-1000 ease-in-out top-[10%] left-[25%] ${
                          visibleIndex === index ? 'opacity-100' : 'opacity-0'
                        } md:w-[15vw] w-[40vw]  h-[15vh]`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="md:col-span-8 col-span-12 flex flex-col items-center justify-center relative w-full">
                    <div>
                      <ImageGallery images={images3} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full items-center justify-center ">
                <div className="grid grid-cols-12 w-full items-center justify-center pt-5 ">
                  <div className="col-span-6 items-start justify-start flex">
                    <div className="relative  w-full  ">
                      <Image
                        className=" relativepos "
                        src="/hockey/img1.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex">
                    <div className="relative  w-full p-[5%]  ">
                      <Image
                        className=" relativepos"
                        src="/hockey/img2.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 items-center justify-center  font-bold text-3xl bg-yellow-600 py-3">
                    <VelocityScroll text="Frozen Battle Arena"></VelocityScroll>
                  </div>
                  <div className="col-span-12 items-center justify-center md:block hidden ">
                    <HoverImageComponent />
                  </div>
                  <div className="col-span-12 relative group">
                    <div className="relative  w-full   ">
                      <Image
                        className=" relativepos"
                        src="/hockey/lastn.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="uppercase absolute text-[6vw] font-bold top-[40%] left-[10%] leading-none group-hover:text-yellow-600">
                      Game <br></br>changer.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
