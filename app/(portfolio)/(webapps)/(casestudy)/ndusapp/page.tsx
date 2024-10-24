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
              <div className="flex flex-col w-full items-center justify-end lg:p-10 p-5 lg:h-[100vh] h-[50vh] bg-gradient-to-b from-black to-[#115811]">
                <div className="flex  items-center  relative  md:w-2/3 w-11/12   ">
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
                  <div className=" md:col-span-6  col-span-12 flex ">
                    <div className="flex  items-center  relative w-full h-[50vh]   ">
                      <Image
                        className=" relativepos  object-cover "
                        src="/mobileapps/ndusapp/ps.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className=" md:col-span-6  col-span-12 flex  flex-col text-start bg-ndubg2 bg-cover bg-center bg-no-repeat p-10 h-full items-start justify-center">
                    <span className="text-white text-3xl font-semibold">
                      PROBLEM STATMENT:
                    </span>
                    <RevealOnScroll>
                      <span className="text-white 2xl:text-2xl lg:text-xl text-lg md:font-medium">
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
                  <div className=" md:col-span-6  col-span-12 flex  flex-col text-start bg-ndubg2 bg-cover bg-center bg-no-repeat p-10 h-full items-start justify-center">
                    <span className="text-white text-3xl font-semibold uppercase">
                      solution statement:
                    </span>
                    <RevealOnScroll>
                      <span className="text-white 2xl:text-2xl lg:text-xl text-lg md:font-medium">
                        We propose an advanced scheduling app that simplifies
                        and optimizes course and resource management. It will
                        feature an intuitive interface, real-time conflict
                        resolution, seamless integration with existing systems,
                        and analytics tools to enhance decision-making and
                        maximize efficiency.
                      </span>
                    </RevealOnScroll>
                  </div>
                  <div className=" md:col-span-6  col-span-12 flex items-center justify-center  bg-ndubg6 bg-cover bg-center bg-no-repeat  w-full h-[50vh]   "></div>
                </div>
              </div>

              <div className="w-full flex flex-col items-start justify-start bg-ndubg4 bg-center bg-cover bg-no-repeat  lg:p-10 p-5">
                <RevealOnScroll>
                  <span className="bg-gradient-to-r from-[#82D674] to-[#205532] bg-clip-text text-transparent 2xl:text-[4vw] lg:text-[3vw] text-[5vw] font-bold uppercase">
                    colors & typography
                  </span>
                </RevealOnScroll>
                <SrBottom>
                  <span className="text-white 2xl:text-[4vw] lg:text-[3vw] text-[5vw]  font-bold uppercase 2xl:leading-[90px] mt-5">
                    Inter <br></br> helvatica
                  </span>
                </SrBottom>
                <div className="w-full items-center justify-center flex flex-col ">
                  <div className="flex  items-center  relative   lg:w-[25%] w-4/12  -mt-10 ">
                    <SrBottom>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/ndusapp/cap.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>

                  <div className="w-full flex flex-col lg:items-end justify-end items-center text-white 2xl:text-4xl lg:text-2xl text-lg font-bold px-5 pt-10">
                    <span>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ <br></br>
                      1234567890!@#$%^&*()_+-=
                    </span>
                    <div className="flex  items-center  lg:absolute  lg:left-[10%]  lg:w-[22%] w-6/12 pt-5 lg:pt-0 ">
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

              <div className="lg:w-11/12 w-full flex items-center justify-center pb-10">
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
              <div className="w-full items-center justify-center flex md:flex-row flex-col bg-ndubg5 bg-cover bg-center bg-no-repeat lg:p-10 p-5">
                <div className="flex  items-center md:w-1/2 w-11/12  justify-center  ">
                  <SrBottom>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/ndusapp/laptop.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
                <div className="flex  items-center  md:w-1/2 w-11/12 justify-center md:pt-0 pt-5">
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
                  <span className="uppercase  md:text-6xl text-3xl  font-bold text-[#072507]">
                    <AnimatedText2 text="design process"></AnimatedText2>
                  </span>

                  <div className="w-full items-start justify-start  flex  pt-10 ">
                    <div className="w-[90%] flex items-end justify-between">
                      <div className="flex  items-center md:w-5/12  w-8/12   ">
                        <SrLeft>
                          <Image
                            className=" relativepos  "
                            src="/mobileapps/ndusapp/dp2n.png"
                            alt="Background 1"
                            fill
                          />
                        </SrLeft>
                      </div>
                      <div className="flex  items-center  md:w-5/12  w-8/12  ">
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
                    <div className="w-[90%] flex items-start justify-between">
                      <div className="flex  items-center md:w-[50%] w-[65%]     ">
                        <SrLeft>
                          <Image
                            className=" relativepos  "
                            src="/mobileapps/ndusapp/dp3n.png"
                            alt="Background 1"
                            fill
                          />
                        </SrLeft>
                      </div>
                      <div className="flex  items-center   md:w-[35%] w-[45%] ">
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
                    <span className="bg-gradient-to-r from-[#82D674] to-[#205532] bg-clip-text text-transparent 2xl:text-[5vw] md:text-[3vw] text-[6vw] font-bold uppercase md:py-20 py-10">
                      app screen
                    </span>
                  </div>
                </RevealOnScroll>
                <div className="flex  items-center w-full md:pb-20 pb-10   ">
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
                    <div className="flex items-center w-full lg:h-[100vh] h-[30vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full lg:h-[100vh] h-[30vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full lg:h-[100vh] h-[30vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full lg:h-[100vh] h-[30vh]">
                      <Image
                        className="relativepos"
                        src="/mobileapps/ndusapp/s4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center w-full lg:h-[100vh] h-[30vh]">
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
                <span className=" 2xl:text-[4vw] lg:text-[3vw] text-[5vw] font-bold uppercase pt-10 text-[#82D674]">
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
