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
                  <video
                    className="absolute top-0 left-0 h-full w-full object-cover"
                    src="/website/1947pa/video.mp4"
                    autoPlay
                    muted
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white w-full">
                    <div className="absolute top-[5%] lg:w-[10%] w-[35%] ">
                      <Image
                        className="relativepos object-cover"
                        src="/website/1947pa/logo.png"
                        alt="img"
                        fill
                      />
                    </div>

                    <div className="items-center justify-center  w-full lg:h-28 h-20 block">
                      <GradualSpacing
                        className={`md:text-[6vw] text-[12vw] font-bold leading-none  ${lcs.className} `}
                        text="Partitioned"
                      />
                    </div>
                    <div className=" w-full  flex  text-center ">
                      <SrBottom>
                        <span className="md:text-3xl text-xl font-bold">
                          A Journey Through the 1947 Partition Archive
                        </span>
                      </SrBottom>
                    </div>
                  </div>
                  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-pabg1 bg-center bg-cover bg-no-repeat py-10 ">
                <div className=" grid grid-cols-12 w-11/12 items-center justify-start lg:gap-10 gap-5">
                  <div className="col-span-12 text-start flex flex-col ">
                    <SrBottom>
                      <span className="md:text-[5vw] text-[8vw]  leading-none font-bold mt-5">
                        Showcase Hub
                      </span>
                    </SrBottom>
                    <span className="md:text-2xl text-lg lg:font-bold font-semibold mt-3">
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
                      className="lg:col-span-4 col-span-12 flex items-center justify-center w-full relative cursor-pointer group"
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
                        <div className="relative w-full h-full max-h-screen p-4 flex flex-col items-center justify-center">
                          <span
                            className="absolute top-4 right-4 text-white text-4xl cursor-pointer z-50"
                            onClick={closeFullscreen}
                          >
                            &times;
                          </span>
                          <div
                            className=" w-full max-w-5xl overflow-auto "
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
              <div className="w-full items-center justify-center lg:flex hidden bg-pabg2 bg-center bg-cover bg-no-repeat">
                <Home />
              </div>
              <div className="w-full items-center justify-center flex bg-pabg3 bg-center bg-cover bg-no-repeat lg:h-[100vh] h-auto">
                <div className="grid grid-cols-12 items-center justify-center w-full h-full pt-5 lg:pt-0 ">
                  <div className="md:col-span-6 col-span-12 items-center justify-center flex flex-col  font-semibold lg:text-6xl text-3xl p-3 lg:p-0 relative h-full">
                    <div className=" items-start justify-center flex flex-col lg:w-[80%] w-11/12 relative ">
                      <span>
                        Unwritten <br /> Borders
                      </span>
                      <span className=" font-bold  lg:text-2xl text-xl pe-2 mt-2">
                        Unearthing personal stories of loss, hope, and survival,
                        this archive weaves together the lived experiences of
                        millions displaced by the Partition.
                      </span>
                    </div>
                    <div className="absolute   w-[80%]  bottom-[10%] lg:flex hidden">
                      <Image
                        className=" relativepos"
                        src="/website/1947pa/st.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 col-span-12 items-center justify-start  flex flex-col h-full relative gap-5 ">
                    <div className="w-full h-[50vh] lg:pe-10">
                      <video
                        className="roundvideo object-cover h-[50vh] w-full rounded-3xl lg:mt-10 p-2 lg:p-0    "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/1947pa/video2.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="w-full bg-[#C2994C] lg:p-10 p-5 lg:absolute bottom-[5%] lg:text-2xl text-lg flex-col font-bold flex gap-5">
                      <div className="lg:flex hidden lg:gap-10  ">
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
                        <div className=" lg:flex hidden items-end h-[12vh] lg:absolute right-0 top-[-8%]">
                          <MarqueePA />
                        </div>
                      </div>

                      <span className=" font-bold lg:text-4xl text-xl lg:pt-10 pt-5">
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
              <div className="w-full items-center justify-center flex md:h-[100vh] h-[70vh] relative">
                <div className="w-full h-full items-center justify-center flex flex-col align-text-top relative">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/website/1947pa/f1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="w-full items-center justify-center flex ">
                <div className="grid grid-cols-12 items-center justify-center w-11/12   pt-5 mb-10 gap-5 lg:gap-0  ">
                  <div className="col-span-6 items-center justify-center ">
                    <div className="relative  lg:w-9/12 w-full  ">
                      <Image
                        className=" relativepos"
                        src="/website/1947pa/aa.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center ">
                    <div className="relative  lg:w-10/12  w-full ">
                      <Image
                        className=" relativepos"
                        src="/website/1947pa/font.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex  overflow-hidden relative">
                <div className="grid grid-cols-12 items-center justify-center w-full group     ">
                  <div className="col-span-6 items-center justify-center ">
                    <div className="relative  w-full group-hover:-translate-y-full transform transition-all duration-1000  ">
                      <Image
                        className=" relativepos "
                        src="/website/1947pa/dp.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex flex-col h-full">
                    <div className="relative  w-full h-full  group-hover:-translate-y-full transform transition-all duration-1000 ">
                      <Image
                        className=" relativepos"
                        src="/website/1947pa/47.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="relative  w-full h-full group-hover:translate-y-full transform transition-all duration-1000 ">
                      <Image
                        className=" relativepos"
                        src="/website/1947pa/vm.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 items-center  justify-center  absolute  -translate-x-1/4 group-hover:-translate-x-[1%] transform transition-all duration-700 opacity-0 group-hover:opacity-100 z-40 h-full ">
                    <div className="relative  w-[85%]  h-full   ">
                      <Image
                        className=" relativepos "
                        src="/website/1947pa/dp1.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 items-center  justify-center  absolute  -translate-x-1/4 group-hover:translate-x-[110%] transform transition-all duration-700 opacity-0 group-hover:opacity-100 z-30 h-full">
                    <div className="relative  w-full  h-full   ">
                      <Image
                        className=" relativepos object-contain"
                        src="/website/1947pa/dp2.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 items-center  justify-center  absolute  -translate-x-1/4 group-hover:translate-x-[210%] transform transition-all duration-700 opacity-0 group-hover:opacity-100 z-20 h-full ">
                    <div className="relative  w-full h-full   ">
                      <Image
                        className=" relativepos object-contain"
                        src="/website/1947pa/dp3.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 items-center  justify-center  absolute  -translate-x-1/4 group-hover:translate-x-[310%] transform transition-all duration-700 opacity-0 group-hover:opacity-100 z-10 h-full">
                    <div className="relative  w-full h-full   ">
                      <Image
                        className=" relativepos object-contain"
                        src="/website/1947pa/dp4.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
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
