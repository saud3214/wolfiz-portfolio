'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  setupScrollAnimation,
  movingText2,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  RevealOnScroll,
} from '@/app/components/revealelement';
import { AnimatedText2 } from '@/app/components/animatedtext';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';

const urbanist = Inter({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '900'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function Ndusapp() {
  const swiperRef = useRef<SwiperCore | null>(null);

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
              <div className="flex flex-col w-full items-center justify-end p-10 h-[100vh] bg-gradient-to-b from-black to-[#115811]">
                {/* <div className="flex  items-center  relative w-[20%]    ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/logo2.png"
                    alt="Background 1"
                    fill
                  />
                </div> */}
                <div className="flex  items-center  relative  w-2/3   ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/ndusapp/home3.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex flex-col w-full items-center justify-center ">
                <div className="grid grid-cols-12 w-full items-center justify-center  ">
                  <div className=" col-span-6 flex ">
                    <div className="flex  items-center  relative w-full h-[50vh]   ">
                      <Image
                        className=" relativepos  object-cover "
                        src="/mobileapps/ndusapp/ps.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className=" col-span-6 flex  flex-col text-start bg-ndubg2 bg-cover bg-center bg-no-repeat p-10 h-full items-start justify-center">
                    <span className="text-white text-3xl font-semibold">
                      PROBLEM STATMENT:
                    </span>
                    <RevealOnScroll>
                      <span className="text-white 2xl:text-2xl text-xl font-medium">
                        Universities often face inefficiencies with outdated
                        scheduling systems that lead to conflicts and
                        administrative burdens. The goal is to create an
                        intuitive app that minimizes scheduling conflicts,adapts
                        to changes, integrates with existing systems, optimizes
                        resource use, and provides useful analytics, improving
                        overall efficiency and user satisfaction
                      </span>
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="grid grid-cols-12 w-full items-center justify-center  ">
                  <div className=" col-span-6 flex  flex-col text-start bg-ndubg2 bg-cover bg-center bg-no-repeat p-10 h-full items-start justify-center">
                    <span className="text-white text-3xl font-semibold uppercase">
                      solution statement:
                    </span>
                    <RevealOnScroll>
                      <span className="text-white 2xl:text-2xl text-xl font-medium">
                        We propose an advanced scheduling app that simplifies
                        and optimizes course and resource management. It will
                        feature an intuitive interface, real-time conflict
                        resolution, seamless integration with existing systems,
                        and analytics tools to enhance decision-making and
                        maximize efficiency.
                      </span>
                    </RevealOnScroll>
                  </div>
                  <div className=" col-span-6 flex items-center justify-center  bg-ndubg6 bg-cover bg-center bg-no-repeat  w-full h-[50vh]   "></div>
                </div>
              </div>

              <div className="w-full flex flex-col items-start justify-start bg-ndubg4 bg-center bg-cover bg-no-repeat  p-10">
                <RevealOnScroll>
                  <span className="bg-gradient-to-r from-[#82D674] to-[#205532] bg-clip-text text-transparent 2xl:text-[4vw] text-[3vw] font-bold uppercase">
                    colors & typography
                  </span>
                </RevealOnScroll>
                <SrBottom>
                  <span className="text-white 2xl:text-[4vw] text-[3vw] font-bold uppercase 2xl:leading-[90px] mt-5">
                    Inter <br></br> helvatica
                  </span>
                </SrBottom>
                <div className="w-full items-center justify-center flex flex-col ">
                  <div className="flex  items-center  relative   w-[25%]  -mt-10 ">
                    <SrBottom>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/cap.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>

                  <div className="w-full flex items-end justify-end text-white 2xl:text-4xl text-2xl font-bold px-5 pt-10">
                    <span>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ <br></br>
                      1234567890!@#$%^&*()_+-=
                    </span>
                    <div className="flex  items-center  absolute  left-[10%]  w-[22%]  ">
                      <SrLeft>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/ndusapp/aa.png"
                          alt="Background 1"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-11/12 items-center justify-center pb-10">
                <div className="flex  items-center w-full  ">
                  <SrBottom>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/ndusapp/color2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="w-full items-center justify-center flex bg-ndubg5 bg-cover bg-center bg-no-repeat p-10">
                <div className="flex  items-center w-1/2  justify-center  ">
                  <SrBottom>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/ndusapp/laptop.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
                <div className="flex  items-center  w-1/2 justify-center ">
                  <SrLeft>
                    <Image
                      className=" relativepos    "
                      src="/mobileapps/ndusapp/mu3new.png"
                      alt="Background 1"
                      fill
                    />
                  </SrLeft>
                </div>
              </div>

              <div className="w-full bg-white flex items-center justify-center p-10">
                <div className="w-11/12 flex flex-col items-center justify-center">
                  <span className="uppercase  text-6xl font-bold text-[#072507]">
                    <AnimatedText2 text="design process"></AnimatedText2>
                  </span>

                  <div className="w-full items-start  flex  pt-10 ">
                    <div className="w-[80%] flex items-end justify-between">
                      <div className="flex  items-center w-5/12    ">
                        <SrLeft>
                          <Image
                            className=" relativepos  "
                            src="/mobileapps/ndusapp/dp2n.png"
                            alt="Background 1"
                            fill
                          />
                        </SrLeft>
                      </div>
                      <div className="flex  items-center  w-5/12  ">
                        <SrRight>
                          <Image
                            className=" relativepos  "
                            src="/mobileapps/ndusapp/dp1n.png"
                            alt="Background 1"
                            fill
                          />
                        </SrRight>
                      </div>
                    </div>
                  </div>
                  <div className="w-full items-end justify-end  flex">
                    <div className="w-[80%] flex items-start justify-between">
                      <div className="flex  items-center w-[50%]     ">
                        <SrLeft>
                          <Image
                            className=" relativepos  "
                            src="/mobileapps/ndusapp/dp3n.png"
                            alt="Background 1"
                            fill
                          />
                        </SrLeft>
                      </div>
                      <div className="flex  items-center   w-[35%] ">
                        <SrRight>
                          <Image
                            className=" relativepos  "
                            src="/mobileapps/ndusapp/dp4n.png"
                            alt="Background 1"
                            fill
                          />
                        </SrRight>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full items-center justify-center flex flex-col bg-gradient-to-b from-[#000000] to-[#023019] ">
                <RevealOnScroll>
                  <div className="flex w-full items-center justify-center">
                    <span className="bg-gradient-to-r from-[#82D674] to-[#205532] bg-clip-text text-transparent 2xl:text-[5vw] text-[3vw] font-bold uppercase py-20">
                      app screen
                    </span>
                  </div>
                </RevealOnScroll>
                <div className="flex  items-center w-full pb-20   ">
                  <SrBottom>
                    <Image
                      className=" relativepos    "
                      src="/mobileapps/ndusapp/screen1.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="w-full h-full flex ">
                <Swiper
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: false }}
                  effect="slide"
                  speed={1000}
                  className="w-full h-full items-center"
                >
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full h-[100vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full h-[100vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full h-[100vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full h-[100vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full h-[100vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s5.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="w-full items-center justify-center flex flex-col  ">
                <span className=" 2xl:text-[4vw] text-[3vw] font-bold uppercase pt-10 text-[#82D674]">
                  <AnimatedText2 text="information architecture"></AnimatedText2>
                </span>
                <div className="flex  items-center w-11/12 pb-10   ">
                  <RevealOnScroll>
                    <Image
                      className=" relativepos    "
                      src="/mobileapps/ndusapp/ia2.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
