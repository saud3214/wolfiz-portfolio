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

const urbanist = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
const lcs = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function PartitionArchive() {
  useSmoothScroll();
  useEffect(() => {}, []);

  const images = [
    {
      small: '/website/1947pa/c1n.png',
      large: '/website/1947pa/c1cn.png',
      alt: 'Image 1',
    },
    {
      small: '/website/1947pa/c2n.png',
      large: '/website/1947pa/c2c.png',
      alt: 'Image 2',
    },
    {
      small: '/website/1947pa/c3n.png',
      large: '/website/1947pa/c3c.png',
      alt: 'Image 3',
    },
  ];
  const imageTexts = [
    {
      title: 'Home Page',
      subtitle: 'Unveiling',
    },
    {
      title: 'Collection Page',
      subtitle: 'Visual',
    },
    {
      title: 'Mission Page',
      subtitle: 'Journey',
    },
  ];

  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const openFullscreen = (largeImageUrl: string) => {
    setFullscreenImage(largeImageUrl);
  };
  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 ">
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative h-screen w-full overflow-hidden">
                  {/* Background Video */}
                  <video
                    className="absolute top-0 left-0 h-full w-full object-cover"
                    src="/website/1947pa/video.mp4"
                    autoPlay
                    muted
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="absolute top-[5%] w-[10%] ">
                      <Image
                        className="relativepos object-cover"
                        src="/website/1947pa/logo.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <h1
                        className={`text-[6vw] font-bold leading-none  ${lcs.className} `}
                      >
                        Parti
                      </h1>
                      <h1
                        className={`text-[6vw] font-bold leading-none  ${lcs.className} `}
                      >
                        tioned
                      </h1>
                    </div>

                    <span className="text-3xl font-bold">
                      A Journey Through the 1947 Partition Archive
                    </span>
                  </div>
                  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-pabg1 bg-center bg-cover bg-no-repeat py-10 ">
                <div className=" grid grid-cols-12 w-11/12 items-center justify-start gap-10">
                  <div className="col-span-12 text-start flex flex-col ">
                    <span className="text-[5vw] leading-none font-bold mt-5">
                      Showcase Hub
                    </span>
                    <span className="text-2xl font-bold mt-3">
                      Unearthing personal stories of loss, hope, and survival,
                      this archive weaves together the lived experiences of
                      millions displaced by the Partition. A collection of
                      first-hand accounts from those who lived through the
                      tumultuous Partition, capturing memories.
                    </span>
                  </div>

                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="col-span-4 flex items-center justify-center w-full relative cursor-pointer group"
                    >
                      <Image
                        src={img.small}
                        alt={img.alt}
                        fill
                        className="relativepos object-cover"
                        onClick={() => openFullscreen(img.large)}
                      />

                      <div
                        className={`absolute flex flex-col text-center text-white font-semibold text-4xl transition-opacity  ${lcs.className}  z-0`}
                      >
                        {/* Normal state text */}
                        <span className="group-hover:opacity-0">
                          {imageTexts[index].title}
                        </span>
                        <span className="group-hover:opacity-0">
                          {imageTexts[index].subtitle}
                        </span>

                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity ">
                          Click to View
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="relative col-span-12">
                    {fullscreenImage && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
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
                            className="flex-grow w-full max-w-5xl overflow-auto p-4"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Image
                              src={fullscreenImage}
                              alt="Fullscreen Image"
                              width={1600}
                              height={900}
                              className="object-contain w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex bg-pabg2 bg-center bg-cover bg-no-repeat">
                <Home />
              </div>
              <div className="w-full items-center justify-center flex bg-pabg3 bg-center bg-cover bg-no-repeat h-[100vh]">
                <div className="grid grid-cols-12 items-center justify-center w-full h-full">
                  <div className="col-span-6 items-center justify-center flex flex-col  font-semibold text-6xl relative h-full">
                    <div className=" items-start justify-center flex flex-col w-[80%] relative ">
                      <span>
                        Unwritten <br /> Borders
                      </span>
                      <span className=" font-bold  text-2xl pe-2 mt-2">
                        Unearthing personal stories of loss, hope, and survival,
                        this archive weaves together the lived experiences of
                        millions displaced by the Partition.
                      </span>
                    </div>
                    <div className="absolute   w-[80%]  bottom-[10%]">
                      <Image
                        className=" relativepos"
                        src="/website/1947pa/st.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-start  flex flex-col h-full relative gap-5 ">
                    <div className="w-full h-[50vh] pe-10">
                      <video
                        className="roundvideo object-cover h-[50vh] w-full rounded-3xl mt-10  "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/grammarnow/video1.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="w-full bg-[#C2994C] p-10 absolute bottom-[5%] text-2xl flex-col font-bold flex gap-5">
                      <div className="flex gap-10 ">
                        <div className="relative   ">
                          <Image
                            className=" relativepos"
                            src="/website/1947pa/ar.png" // Replace with your image path
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <div className="relative   ">
                          <Image
                            className=" relativepos"
                            src="/website/1947pa/al.png" // Replace with your image path
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <div className=" flex items-end h-[12vh] absolute right-0 top-[-8%]">
                          <MarqueePA />
                        </div>
                      </div>

                      <span className=" font-bold text-4xl pt-10">
                        1947 Timeline
                      </span>
                      <span>
                        Unearthing personal stories of loss, hope, and survival,
                        this archive weaves together the lived experiences of
                        millions displaced by the Partition.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex h-[100vh] relative">
                <div className="w-full h-full items-center justify-center flex relative">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="/website/grammarnow/video1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <video
                    className="relative z-10 w-[300px] h-[200px]" // Set custom size for front video
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/website/1947pa/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="w-full items-center justify-center flex">
                <div className="relative  w-full  ">
                  <Image
                    className=" relativepos"
                    src="/website/1947pa/oneimg.png" // Replace with your image path
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
