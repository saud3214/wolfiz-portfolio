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

export default function HockeyMatch() {
  useSmoothScroll();
  useEffect(() => {}, []);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 w-full ">
              <div className="w-full h-[70vh] items-center justify-center flex">
                <video
                  className=" w-full h-full object-cover z-0"
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
              </div>
              <div className="w-full h-[100vh] items-center justify-center flex relative">
                <div className="grid grid-cols-12  items-center justify-center w-full h-full  ">
                  <div className="col-span-6 bg-[#F59B08] items-center justify-center h-full w-full flex flex-col">
                    <div className=" w-1/4 absolute bottom-0  left-0   ">
                      <Image
                        className=" relativepos"
                        src="/hockey/hockey.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className=" w-1/4 absolute top-[3%]  left-[37%]   ">
                      <Image
                        className=" relativepos"
                        src="/hockey/logo.png" // Replace with your image path
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="w-3/4 items-start justify-center flex flex-col gap-5">
                      <span className="font-black text-white text-7xl uppercase">
                        Victory <br /> comes to
                        <br /> those
                        <br /> prepared
                      </span>
                      <span className="text-black  text-lg font-bold">
                        A Case Study in Hockey Mastery
                      </span>
                      <span className="font-medium  w-9/12">
                        This case study meticulously examines how these
                        intricate challenges were addressed, highlighting
                        pivotal moments where strategic decisions either
                        elevated the teams performance to new heights or
                        underscored areas needing improvement.
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center h-full w-full flex">
                    <div className="w-full h-full flex items-center justify-center">
                      <video
                        className="relative z-10 w-11/12 " // Set custom size for front video
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source
                          src="/website/1947pa/video.mp4"
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
              <div className=" w-full h-full items-center justify-center flex">
                <div className="w-full items-center justify-center relative  ">
                  <div className="relative  flex items-center justify-center h-[80vh] ">
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
                        <source
                          src="/mobileapps/sr/Sequence2.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className=" flex items-center absolute w-full top-[0%] h-full z-10    ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/sr/jahaz.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className=" flex items-center absolute w-auto bottom-[5%]  z-10  text-black font-bold text-[2vw] left-[4%]    ">
                      <span>
                        Victory Comes to <br /> those prepared.
                      </span>
                    </div>
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
