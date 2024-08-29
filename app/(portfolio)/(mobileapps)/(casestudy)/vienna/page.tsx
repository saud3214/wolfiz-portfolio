'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PT_Serif, Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  setupScrollAnimation,
  movingText2,
  animation1,
  animation2,
  animation3,
  animation4,
  ScrollOnTop,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import GradualSpacing from '@/components/magicui/gradual-spacing';

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
} from '@/app/components/revealelement';
import { AnimatedText2, AnimatedText3 } from '@/app/components/animatedtext';
const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '600'],
});
export default function Vienna() {
  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
    movingText2();
    animation1();
    animation2();
    animation3();
    animation4();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex  col-span-12 items-center justify-center flex-col w-full  ">
              <div className="flex flex-col items-center justify-between h-[100vh]  w-full relative ">
                <div className="bg-gradient-to-r from-transparent      to-black absolute  w-full h-full  "></div>
                <div className="videoContainer w-full ">
                  <video
                    className="roundvideo"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source
                      src="../../../../../mobileapps/vienna/4 video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="w-10/12 items-center justify-end flex pt-20 2xl:pe-20">
                  <div className="flex  items-center  w-1/2 justify-center  relative ">
                    <Image
                      className=" relativepos    "
                      src="/mobileapps/vienna/ht1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center text-white  bg-black/50 backdrop-blur-sm  h-52 w-full">
                  <div className="grid grid-cols-12 items-center justify-center w-11/12 ">
                    <div className=" col-span-6 flex flex-col items-start justify-start gap-2 ">
                      <span className="text-2xl font-medium">
                        Discover Vienna’s Iconic Landmarks
                      </span>
                      <span className="text-xl">
                        From the grandeur of Schönbrunn Palace to the vibrant
                        streets of the Naschmarkt, Vienna invites you to uncover
                        its rich history, stunning architecture, and
                        unforgettable cultural experiences.
                      </span>
                    </div>
                    <div className=" col-span-3 flex flex-col items-center justify-center gap-2 animate-slow-bounce">
                      <span className="text-2xl font-medium ">Scroll Down</span>
                      <div className="flex  items-center    relative ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/Arrow.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                    <div className=" col-span-3 flex flex-col items-center justify-center relative">
                      <div className="flex  items-center   w-5/12  animate-slow-spin  relative ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/logo1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className="flex  items-center   absolute w-1/5    ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/V.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full flex flex-col items-center justify-start h-[100vh] ">
                <div className="w-11/12  flex items-center justify-center">
                  <GradualSpacing
                    className={`text-[8vw] font-bold text-[#E5E5E5] uppercase ${ptserif.className}`}
                    text="adventure awaits"
                  />
                </div>
                <div className="grid grid-cols-12 items-center justify-center w-11/12 ">
                  <div className="col-span-3 items-center justify-center">
                    <span className="text-4xl font-semibold text-[#EA0000] capitalize">
                      vienna is not just a destination
                    </span>
                  </div>
                  <div className="col-span-6 items-center justify-center">
                    <div className="flex  items-center  relative    ">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="  items-center  hidden relative   ">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="  items-center  hidden   relative">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>

                    <div className="  items-center  hidden  relative ">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="w-full items-center justify-center  gap-10 flex pt-10 font-bold  text-4xl">
                      <span>01</span>
                      <span>02</span>
                      <span>03</span>
                      <span>04</span>
                    </div>
                  </div>
                  <div className="col-span-3 items-center justify-center">
                    <span className="text-xl  ">
                      Vienna Unwrapped is a digital guide that invites travelers
                      to experience Vienna beyond the surface. The goal of this
                      website design project was to create an engaging,
                      user-friendly platform that highlights Viennas rich
                      history, vibrant culture, and hidden treasures.
                    </span>
                  </div>
                </div>
              </div>
              <div className=" w-full items-center justify-center flex bg-viennabg1 bg-cover bg-center bg-no-repeat h-[100vh]"></div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
