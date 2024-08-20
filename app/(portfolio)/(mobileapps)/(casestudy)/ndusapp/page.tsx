'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  setupScrollAnimation,
  movingText2,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';

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
} from '@/app/components/revealelement';
import { AnimatedText2, AnimatedText3 } from '@/app/components/animatedtext';
const urbanist = Inter({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '900'],
});

export default function Ndusapp() {
  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
    movingText2();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} bg-black`}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex  col-span-12 items-center justify-center flex-col w-full  ">
              <div className="flex w-full items-center justify-center h-[100vh]">
                <div className="flex  items-center  relative  w-full h-[100vh]     ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/home2.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex flex-col w-full items-center justify-center ">
                <div className="grid grid-cols-12 w-full items-center justify-center  h-[60vh]">
                  <div className=" col-span-6 flex text-start bg-ndubg1 bg-cover bg-center bg-no-repeat p-10 h-full items-center justify-start">
                    <span className="text-white 2xl:text-5xl text-4xl font-bold uppercase 2xl:leading-[60px]">
                      national<br></br> defense<br></br> university <br></br>
                      scheduler app
                    </span>
                  </div>
                  <div className=" col-span-6 flex  flex-col text-start bg-ndubg2 bg-cover bg-center bg-no-repeat p-10 h-full items-start justify-center">
                    <span className="text-white text-3xl font-semibold">
                      PROBLEM STATMENT:
                    </span>
                    <span className="text-white 2xl:text-2xl text-xl font-medium">
                      Universities often face inefficiencies with outdated
                      scheduling systems that lead to conflicts and
                      administrative burdens. The goal is to create an intuitive
                      app that minimizes scheduling conflicts,adapts to changes,
                      integrates with existing systems, optimizes resource use,
                      and provides useful analytics, improving overall
                      efficiency and user satisfaction
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 w-full items-center justify-center  h-[60vh]">
                  <div className=" col-span-6 flex  flex-col text-start bg-ndubg2 bg-cover bg-center bg-no-repeat p-10 h-full items-start justify-center">
                    <span className="text-white text-3xl font-semibold uppercase">
                      solution statement:
                    </span>
                    <span className="text-white 2xl:text-2xl text-xl font-medium">
                      We propose an advanced scheduling app that simplifies and
                      optimizes course and resource management. It will feature
                      an intuitive interface, real-time conflict resolution,
                      seamless integration with existing systems, and analytics
                      tools to enhance decision-making and maximize efficiency.
                    </span>
                  </div>
                  <div className=" col-span-6 flex items-center justify-center  bg-ndubg6 bg-cover bg-center bg-no-repeat  w-full h-full   "></div>
                </div>
              </div>

              <div className="w-full flex flex-col items-start justify-start bg-ndubg4 bg-center bg-cover bg-no-repeat  p-10">
                <span className="bg-gradient-to-r from-[#82D674] to-[#205532] bg-clip-text text-transparent 2xl:text-[5vw] text-[3vw] font-bold uppercase">
                  colors & typography
                </span>

                <span className="text-white 2xl:text-[5vw] text-[3vw] font-bold uppercase 2xl:leading-[90px] mt-5">
                  Inter <br></br> helvatica
                </span>
                <div className="w-full items-center justify-center flex flex-col pt-10">
                  <div className="flex  items-center  relative   w-2/5    ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/ndusapp/cap.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="w-full flex items-end justify-end text-white 2xl:text-4xl text-2xl font-bold px-5 py-10">
                    <span>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ <br></br>
                      1234567890!@#$%^&*()_+-=
                    </span>
                    <div className="flex  items-center  absolute  left-[10%]  w-1/4  ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/aa.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-10/12 items-center justify-center py-20">
                <div className="flex  items-center w-full  ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/color.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-full items-center justify-center flex bg-ndubg5 bg-cover bg-center bg-no-repeat">
                <div className="flex  items-center w-10/12   ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/laptop.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="w-full bg-white flex items-center justify-center p-10">
                <div className="w-11/12 flex flex-col items-center justify-center">
                  <span className="uppercase  text-8xl font-bold text-[#072507]">
                    design process
                  </span>

                  <div className="w-full items-center justify-between flex">
                    <div className="flex  items-center w-1/2    ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/dp1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="flex  items-center   w-1/2  ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/dp2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full items-center justify-between flex">
                    <div className="flex  items-center w-1/2    ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/dp3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="flex  items-center   w-1/2  ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/dp4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex   ">
                <div className="flex  items-center   w-1/2   ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/mu1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center   w-1/2  ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/mu2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-gradient-to-r from-[#00582F] to-[#00BE65] p-20">
                <span className=" 2xl:text-[5vw] text-[3vw] font-bold uppercase py-10 text-[#82D674]">
                  information architecture
                </span>
                <div className="flex  items-center w-11/12 pb-10   ">
                  <Image
                    className=" relativepos    "
                    src="/mobileapps/ndusapp/ia.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-full items-center justify-center flex p-10">
                <div className="flex  items-center  w-11/12  ">
                  <Image
                    className=" relativepos    "
                    src="/mobileapps/ndusapp/mu3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-gradient-to-b from-[#000000] to-[#023019] ">
                <span className="bg-gradient-to-r from-[#82D674] to-[#205532] bg-clip-text text-transparent 2xl:text-[5vw] text-[3vw] font-bold uppercase py-20">
                  app screen
                </span>
                <div className="flex  items-center w-full pb-20   ">
                  <Image
                    className=" relativepos    "
                    src="/mobileapps/ndusapp/screen1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="w-full items-center justify-center flex  ">
                <div className="flex  items-center    ">
                  <Image
                    className=" relativepos    "
                    src="/mobileapps/ndusapp/screens.gif"
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
