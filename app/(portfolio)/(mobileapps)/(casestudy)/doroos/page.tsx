'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
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
} from '@/app/components/revealelement';
import { AnimatedText2 } from '@/app/components/animatedtext';
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '900'],
});

export default function Doroos() {
  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} bg-black`}
      >
        <div className="flex items-center justify-center w-full ">
          <div className="grid items-center justify-center w-11/12 grid-cols-12 ">
            <div className="flex flex-col items-center justify-center col-span-12 gap-3 lg:p-10">
              <div className="h-[90vh] bg-drbg1 bg-cover bg-center bg-no-repeat flex items-center justify-center w-full  rounded-3xl  mt-10 lg:mt-0">
                <div className="flex flex-col items-center justify-center w-11/12 lg:flex-row lg:justify-between">
                  <div className="flex flex-col items-center justify-center w-full gap-5 pt-10 text-center lg:w-1/2 lg:items-start lg:text-start lg:pt-0">
                    <div className="flex items-center justify-start w-full gap-3">
                      <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                        Case Study
                      </div>

                      <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                        UI/UX Design
                      </div>
                      <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                        Learning App
                      </div>
                    </div>

                    <span className="text-5xl font-bold text-white uppercase 2xl:text-8xl xl:text-6xl ">
                      <AnimatedText2 text="doroos"></AnimatedText2>
                    </span>

                    <SrBottom>
                      <span className="2xl:text-[45px] text-xl font-bold capitalize text-white ">
                        learning app case study
                      </span>
                    </SrBottom>
                  </div>
                  <div className="flex items-center justify-center w-full pt-10 lg:w-1/2 lg:pt-0">
                    <div className="relative flex items-center w-3/4 lg:w-7/12 ">
                      <SrTop>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/iphone1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrTop>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center bg-[#053B3A] mt-10 rounded-3xl">
                <div className="relative flex items-center w-9/12 lg:w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/doroos/logo.gif"
                    alt="Background 1"
                    fill
                    unoptimized
                  />
                </div>
                <SrBottom>
                  <div className="items-center justify-center hidden gap-3 lg:flex">
                    <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                      Case Study
                    </div>

                    <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                      UI/UX Design
                    </div>
                    <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                      Learning App
                    </div>
                    <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                      Branding
                    </div>
                    <div className="lg:py-5 py-2  lg:px-6 px-3 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  lg:text-2xl text-base font-bold">
                      Mobile App Design
                    </div>
                  </div>
                </SrBottom>
                <div className="grid items-center justify-center grid-cols-12 gap-5 px-2 lg:py-20 lg:px-0 lg:gap-0 ">
                  <div className="flex items-center justify-center order-2 col-span-12 lg:col-span-5 lg:order-1">
                    <div className="relative flex items-center w-11/12 lg:w-9/12 ">
                      <SrLeft>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/ss.png"
                          alt="Background 1"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center order-1 col-span-12 gap-5 lg:col-span-7 lg:items-start lg:order-2 lg:gap-0 ">
                    <div className="relative flex items-center w-full lg:w-10/12 ">
                      <RevealOnScroll>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/pst2.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScroll>
                    </div>
                    <span className="w-full text-lg font-medium text-white lg:text-2xl lg:w-10/12 ">
                      Learners need personalized content, and educators struggle
                      to reach them. An intuitive app with diverse courses can
                      bridge this gap.
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-end order-4 col-span-12 gap-5 pt-10 lg:col-span-7 lg:items-end lg:text-end lg:order-3 lg:gap-0 lg:pt-0 ">
                    <div className="relative flex items-center w-full lg:w-10/12 ">
                      <RevealOnScroll>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/sst2.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScroll>
                    </div>
                    <span className="w-full text-xl font-medium text-white lg:text-2xl lg:w-10/12 ">
                      Our app connects learners with diverse courses, offering
                      personalized recommendations and flexible learning, while
                      helping educators reach a wider audience.
                    </span>
                  </div>
                  <div className="flex items-center justify-center order-4 col-span-12 pb-5 lg:col-span-5 lg:order-3 lg:pb-0">
                    <div className="relative flex items-center w-11/12 lg:w-9/12 ">
                      <SrRight>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/ps.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-5 py-20 bg-right-top bg-no-repeat bg-contain bg-drbg2 ">
                <div className="relative flex items-center w-full lg:w-4/12 ">
                  <RevealOnScroll>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/dpt.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScroll>
                </div>
                <div className="flex items-center justify-center w-full gap-5 ">
                  <div className="grid items-center justify-center w-full grid-cols-12 gap-5">
                    <div className="flex items-center justify-center order-2 col-span-12 lg:col-span-4 lg:order-1">
                      <SrLeft>
                        <div className="flex items-center justify-center w-full">
                          <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                            <div className="flex items-end justify-end w-full ">
                              <div className="relative flex items-center w-1/4 lg:w-1/6 ">
                                <Image
                                  className=" relativepos"
                                  src="/mobileapps/doroos/icon1.png"
                                  alt="Background 1"
                                  fill
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-3 text-white ">
                              <span className="text-5xl font-bold">
                                Analyse
                              </span>
                              <span className="text-2xl font-semibold">
                                User Research, User Interviews, Problem
                                Statements
                              </span>
                            </div>
                          </div>
                        </div>
                      </SrLeft>
                    </div>
                    <div className="flex items-start justify-start order-1 col-span-12 lg:col-span-8 lg:order-2">
                      <span className="text-xl font-medium text-white 2xl:w-7/12">
                        The design process for the learning app starts with
                        audience research and competitor analysis. Initial
                        concepts and wireframes are developed, followed by
                        creating interactive prototypes to test the user
                        journey. The user interface is designed for aesthetics,
                        usability, and consistency. User testing helps refine
                        the design, and detailed specifications are prepared for
                        developers. After launching, user feedback is collected
                        for ongoing improvements and future updates.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid items-center justify-center w-full grid-cols-12 gap-5 ">
                  <div className="flex items-center justify-center col-span-12 lg:col-span-4">
                    <SrLeft>
                      <div className="flex items-center justify-center w-full">
                        <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                          <div className="flex items-end justify-end w-full ">
                            <div className="relative flex items-center w-1/4 lg:w-1/6 ">
                              <Image
                                className=" relativepos"
                                src="/mobileapps/doroos/icon2.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-full gap-3 text-white text-start">
                            <span className="text-5xl font-bold"> Define</span>
                            <span className="text-2xl font-semibold">
                              User Persona, Empathy Mapping
                            </span>
                          </div>
                        </div>
                      </div>
                    </SrLeft>
                  </div>
                  <div className="flex items-center justify-center col-span-12 lg:col-span-4">
                    <SrBottom>
                      <div className="flex items-center justify-center w-full">
                        <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                          <div className="flex items-end justify-end w-full ">
                            <div className="relative flex items-center w-1/4 lg:w-1/6 ">
                              <Image
                                className=" relativepos"
                                src="/mobileapps/doroos/icon3.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-full gap-3 text-white text-start">
                            <span className="text-5xl font-bold"> Ideate</span>
                            <span className="text-2xl font-semibold">
                              User Flow, Information Architecture
                            </span>
                          </div>
                        </div>
                      </div>
                    </SrBottom>
                  </div>
                  <div className="flex items-center justify-center col-span-12 lg:col-span-4">
                    <SrRight>
                      <div className="flex items-center justify-center w-full">
                        <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                          <div className="flex items-end justify-end w-full ">
                            <div className="relative flex items-center w-1/4 lg:w-1/6 ">
                              <Image
                                className=" relativepos"
                                src="/mobileapps/doroos/icon4.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-full gap-3 text-white text-start">
                            <span className="text-5xl font-bold"> Design</span>
                            <span className="text-2xl font-semibold">
                              Low/High Fidelity Wireframes, Prototyping
                            </span>
                          </div>
                        </div>
                      </div>
                    </SrRight>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full bg-left-top bg-no-repeat bg-contain bg-drbg2 lg:py-20 ">
                <div className="relative flex items-center w-full lg:w-4/12 ">
                  <RevealOnScroll>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/iat.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScroll>
                </div>
                <div className="relative flex items-center pt-10 ">
                  <SrBottom>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/iap.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="grid w-full grid-cols-12 gap-5 pb-10 bg-left-top bg-no-repeat bg-contain bg-drbg2 lg:gap-10">
                <div className="flex flex-col items-center justify-start h-full col-span-12 gap-5 lg:col-span-4 lg:items-start lg:gap-10">
                  <div className="relative flex items-center justify-center w-full pt-10">
                    <SrLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/doroos/logo2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full h-full px-5 py-10 bg-center bg-no-repeat bg-cover bg-drbg3 rounded-3xl">
                    <SrLeft>
                      <span className="font-black lg:text-7xl text-5xl text-white uppercase 2xl:leading-[100px]">
                        Bringing<br></br>your<br></br>Vision to<br></br>life
                      </span>
                    </SrLeft>
                    <div className="relative flex items-center w-full pt-10 ">
                      <SrBottom>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/mu1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-8 ">
                  <div className="flex items-center justify-between w-full gap-5">
                    <div className="flex flex-col items-end justify-end gap-5 ">
                      <div className="relative flex items-center w-2/5 ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/logo2.gif"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className="relative flex items-center w-full ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/cap.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                    <div className="flex  items-center  relative  lg:w-[45%] w-1/2    ">
                      <SrRight>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/doroos/mu2.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                  <div className="relative flex items-center w-full pt-5 lg:pt-10 ">
                    <SrBottom>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/doroos/mu3.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-center justify-center w-full">
                <div className="relative flex items-center w-full lg:pt-10 lg:w-1/3">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/doroos/tft.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center justify-between w-full py-10 lg:py-0">
                  <span className="2xl:text-[18vw] xl:text-[10vw] text-5xl text-[#2CB1A9] font-black 2xl:leading-[350px] ">
                    <RotateText>Urbanist</RotateText>
                  </span>
                  <div className="flex flex-col items-end justify-end h-full gap-5 text-2xl">
                    <span className="  text-[#2CB1A9] font-normal">
                      Reguler
                    </span>
                    <span className="  text-[#2CB1A9] font-semibold">
                      Semibold
                    </span>
                    <span className="  text-[#2CB1A9] font-bold">Bold</span>
                  </div>
                </div>
                <div className="w-full text-xl font-medium text-white text-start lg:text-4xl">
                  <span className="w-11/12">
                    <span className="font-black"> Urbanist</span> is a
                    low-contrast, geometric sans-serif inspired by Modernist
                    typography and design. The project was launched by Corey Hu
                    in 2020 with 9 weights and accompanying italics.
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-10 p-3 mt-10 text-center text-white bg-center bg-no-repeat bg-cover bg-drbg4 2xl:p-16 xl:p-8 rounded-3xl">
                <SrBottom>
                  <span className="text-5xl 2xl:text-8xl xl:text-6xl ">
                    Put Your Course in the
                    <span className="text-[#2CB1A9] font-bold">Spotlight!</span>
                  </span>
                </SrBottom>
                <span className="pb-3 text-3xl xl:text-5xl lg:pb-0">
                  Expand Your Reach and Impact with Targeted Advertising
                </span>
              </div>

              <div className="relative flex items-center justify-center w-full pt-10 mt-10">
                <RotateImage>
                  <div className="relative flex items-center w-full ">
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/circle.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </RotateImage>
                <div className="flex  items-center  absolute top-[10%] lg:left-[15%]   left-[2%]    ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/c1.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
                <div className="flex  items-center  absolute top-[10%] lg:right-[15%]  right-[2%]     ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/c2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
                <div className="flex  items-center  absolute bottom-[10%] lg:right-[13%] right-[1%]      ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/doroos/c3.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
                <div className="absolute flex items-center w-1/4 ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/doroos/sct.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="flex items-center justify-center w-full mt-10">
                <div className="relative flex items-center w-full lg:w-1/2 ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/doroos/screen.gif"
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
