'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Inria_Sans } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import AnimatedCardsKC from '@/app/components/animatedbeam';
import ExpandingCards from '@/app/components/cardsKC';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import { motion, useScroll, useTransform } from 'framer-motion';
import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  SrTop,
  RevealOnScroll,
  RotateImage,
  RotateText,
  RevealOnScrollXImage,
  TopImage,
  BottomImage,
  RevealOnScrollLeft,
} from '@/app/components/revealelement';

const urbanist = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function KingdomConnect() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useSmoothScroll();
  useEffect(() => {}, []);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 ">
              <div className="w-full h-[100vh] flex items-center justify-center bg-kcbg1 bg-center bg-cover bg-no-repeat">
                <div className="w-11/12 h-5/6 items-start justify-start flex flex-col p-5 ">
                  <div className="relative w-[15%]    ">
                    <Image
                      className=" relativepos "
                      src="/website/kingdom/logo.png"
                      alt="img"
                      fill
                    />
                  </div>
                  <span className="text-4xl font-bold text-white mt-5">
                    Welcom to
                  </span>
                  <span className="text-8xl font-bold text-white mt-2 uppercase">
                    Kingdom
                  </span>
                  <div className="relative w-[85%]  pt-5  ">
                    <Image
                      className=" relativepos "
                      src="/website/kingdom/Connect.png"
                      alt="img"
                      fill
                    />
                  </div>
                  <span className="text-4xl font-bold text-white mt-5">
                    Support whenever you need it
                  </span>
                  <div className="relative w-[15%]  pt-5  ">
                    <Image
                      className=" relativepos "
                      src="/website/kingdom/btn.png"
                      alt="img"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[100vh] items-center justify-center  flex  relative">
                <div className="w-full h-[100vh] object-cover">
                  <video
                    className="roundvideo object-cover h-[100vh] w-full    "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source src="/website/kingdom/video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute w-1/3 top-[10%] right-[10%]   ">
                  <Image
                    className=" relativepos "
                    src="/website/kingdom/t1.png"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className=" w-11/12 items-center justify-between flex py-10 gap-10">
                <div className="relative w-1/3   ">
                  <Image
                    className=" relativepos "
                    src="/website/kingdom/aa.png"
                    alt="img"
                    fill
                  />
                </div>
                <div className="relative w-2/3    ">
                  <Image
                    className=" relativepos "
                    src="/website/kingdom/t2.png"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className=" w-11/12 items-center justify-between flex my-10 gap-10   overflow-hidden">
                <div className="w-1/3 flex items-center justify-center h-[65vh]">
                  <AnimatedCardsKC />
                </div>

                <div className="relative w-2/3   h-[65vh] object-cover  ">
                  <Image
                    className=" relativepos  object-cover"
                    src="/website/kingdom/cpic2.png"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className="w-full bg-orange-600 py-5 my-10">
                <VelocityScroll
                  text="Light   Reguler  Bold Italic"
                  default_velocity={3}
                  className=" text-center text-7xl  text-white font-light "
                />
              </div>
              <div className="w-full items-center justify-center flex ">
                <div className="grid grid-cols-12 w-11/12 ">
                  <div className="col-span-7 flex items-center justify-center bg-black ">
                    <div className="w-full  object-cover">
                      <video
                        className="roundvideo object-cover  w-full    "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/kingdom/video.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center justify-center relative ">
                    <div className="relative w-2/3 animate-slow-spin ">
                      <Image
                        className=" relativepos  "
                        src="/website/kingdom/t3.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className=" w-2/5 absolute ">
                      <Image
                        className=" relativepos  "
                        src="/website/kingdom/logoblue.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex items-center justify-center  my-10 overflow-hidden ">
                    <ExpandingCards />
                  </div>
                  {/* <div className="col-span-12 items-center justify-center flex flex-col gap-10 my-10">
                    <span className="text-6xl font-bold capitalize text-[#6E3385]">
                      <span className="text-[#FF7f40]">kingdom</span> connect
                    </span>
                    <div className="w-2/5 relative hover:scale-x-125   transition-all duration-300 ease-in-out  object-cover">
                      <Image
                        className="object-cover relativepos"
                        src="/website/kingdom/img1.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className="w-full flex items-center justify-between  group ">
                      <div className="w-[40%] relative group-hover:scale-x-110   transition-all duration-300 ease-in-out  object-cover">
                        <Image
                          className="object-cover relativepos"
                          src="/website/kingdom/img2.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="w-[40%] relative group-hover:scale-x-110   transition-all duration-300 ease-in-out  object-cover">
                        <Image
                          className="object-cover relativepos"
                          src="/website/kingdom/img3.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="col-span-6 pb-10 mr-5">
                    <div className=" w-full h-full">
                      <Image
                        className="object-cover relativepos"
                        src="/website/kingdom/img4.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>

                  <div className="col-span-6 pb-10 flex flex-col ml-5">
                    <div className=" w-full h-5/6">
                      <Image
                        className="object-cover relativepos h-5/6"
                        src="/website/kingdom/c1.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className=" w-full h-5/6">
                      <Image
                        className="object-cover relativepos h-5/6"
                        src="/website/kingdom/c2.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-5 pb-10 flex flex-col mr-5 h-full">
                    <div className="w-full  object-cover h-full">
                      <video
                        className="roundvideo object-cover  w-full    "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/kingdom/video.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-span-7 bg-[#6E3385] hover:bg-[#FF7f40] mb-10 ml-5">
                    <div className=" w-full ">
                      <Image
                        className="object-cover relativepos "
                        src="/website/kingdom/c3.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center w-full">
                <div className="w-full  object-cover h-full">
                  <video
                    className="roundvideo object-cover  w-full    "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source src="/website/kingdom/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="w-full  items-center justify-center my-10 flex">
                <div className="relative w-64 h-64 flex ">
                  <Image
                    src="/website/kingdom/c1.png"
                    alt="Image 1"
                    className="absolute top-0 left-0 w-full h-full border-4 border-orange-500 transform rotate-0"
                    width={250}
                    height={250}
                  />
                  <Image
                    src="/website/kingdom/c1.png"
                    alt="Image 2"
                    className="absolute top-0 left-0 w-full h-full border-4 border-orange-500 transform rotate-12"
                    width={250}
                    height={250}
                  />
                  <Image
                    src="/website/kingdom/c1.png"
                    alt="Image 3"
                    className="absolute top-0 left-0 w-full h-full border-4 border-orange-500 transform rotate-[24deg]"
                    width={250}
                    height={250}
                  />
                  {/* Add more images as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
