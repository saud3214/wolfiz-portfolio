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
  RevealOnScrollXImage,
} from '@/app/components/revealelement';
import { AnimatedText2, AnimatedText3 } from '@/app/components/animatedtext';
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '900'],
});

export default function Doroos() {
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
          <div className=" grid grid-cols-12 items-center justify-center   w-11/12 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  gap-3 p-10">
              <div className="h-[90vh] bg-drbg1 bg-cover bg-center bg-no-repeat flex items-center justify-center w-full  rounded-3xl ">
                <div className=" w-11/12 flex items-center justify-between ">
                  <div className="w-1/2  flex flex-col items-start justify-center gap-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                        Case Study
                      </div>

                      <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                        UI/UX Design
                      </div>
                      <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                        Learning App
                      </div>
                    </div>

                    <span className="text-9xl font-bold uppercase text-white ">
                      <AnimatedText2 text="doroos"></AnimatedText2>
                    </span>

                    <SrBottom>
                      <span className="text-[45px] font-bold capitalize text-white ">
                        learning app case study
                      </span>
                    </SrBottom>
                  </div>
                  <div className="w-1/2 flex items-center justify-center">
                    <div className="flex  items-center  relative  w-7/12   ">
                      <SrTop>
                        <Image
                          className=" relativepos  "
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
                <div className="flex  items-center   w-1/4  relative ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/logo.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
                <SrBottom>
                  <div className="flex items-center justify-center gap-3">
                    <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                      Case Study
                    </div>

                    <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                      UI/UX Design
                    </div>
                    <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                      Learning App
                    </div>
                    <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                      Branding
                    </div>
                    <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                      Mobile App Design
                    </div>
                  </div>
                </SrBottom>
                <div className="grid grid-cols-12 items-center justify-center py-20">
                  <div className="col-span-5 items-center justify-center flex">
                    <div className="flex  items-center  relative  w-9/12   ">
                      <SrLeft>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/ss.png"
                          alt="Background 1"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="col-span-7 items-start justify-center flex flex-col ">
                    <div className="flex  items-center   relative  w-10/12  ">
                      <RevealOnScroll>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/pst2.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScroll>
                    </div>
                    <span className="text-white text-2xl font-medium w-10/12 ">
                      Learners need personalized content, and educators struggle
                      to reach them. An intuitive app with diverse courses can
                      bridge this gap.
                    </span>
                  </div>

                  <div className="col-span-7 items-end justify-end text-end flex flex-col ">
                    <div className="flex  items-center   relative  w-10/12  ">
                      <RevealOnScroll>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/sst2.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScroll>
                    </div>
                    <span className="text-white text-2xl font-medium w-10/12 ">
                      Our app connects learners with diverse courses, offering
                      personalized recommendations and flexible learning, while
                      helping educators reach a wider audience.
                    </span>
                  </div>
                  <div className="col-span-5 items-center justify-center flex">
                    <div className="flex  items-center  relative  w-9/12   ">
                      <SrRight>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/ps.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-drbg2 bg-contain bg-no-repeat bg-right-top py-20 gap-5 ">
                <div className="flex  items-center  relative  w-4/12   ">
                  <RevealOnScroll>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/dpt.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScroll>
                </div>
                <div className=" w-full items-center justify-center flex gap-5 ">
                  <div className="grid grid-cols-12 items-center justify-center w-full gap-5">
                    <div className="col-span-4 items-center justify-center flex">
                      <SrLeft>
                        <div className="w-full items-center justify-center flex">
                          <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                            <div className=" w-full items-end justify-end flex">
                              <div className="flex  items-center  relative     ">
                                <Image
                                  className=" relativepos  "
                                  src="/mobileapps/doroos/icon1.png"
                                  alt="Background 1"
                                  fill
                                />
                              </div>
                            </div>
                            <div className="flex flex-col text-white gap-3 ">
                              <span className="font-bold text-5xl">
                                Analyse
                              </span>
                              <span className="font-semibold text-2xl">
                                User Research, User Interviews, Problem
                                Statements
                              </span>
                            </div>
                          </div>
                        </div>
                      </SrLeft>
                    </div>
                    <div className="col-span-8 items-start justify-start flex">
                      <span className="font-medium text-xl text-white 2xl:w-7/12">
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
                <div className="grid grid-cols-12 items-center justify-center w-full  gap-5 ">
                  <div className="col-span-4 items-center justify-center flex">
                    <SrLeft>
                      <div className="w-full items-center justify-center flex">
                        <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                          <div className=" w-full items-end justify-end flex">
                            <div className="flex  items-center  relative     ">
                              <Image
                                className=" relativepos  "
                                src="/mobileapps/doroos/icon2.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                          </div>
                          <div className="flex flex-col text-white gap-3  text-start w-full">
                            <span className="font-bold text-5xl"> Define</span>
                            <span className="font-semibold text-2xl">
                              User Persona, Empathy Mapping
                            </span>
                          </div>
                        </div>
                      </div>
                    </SrLeft>
                  </div>
                  <div className="col-span-4 items-center justify-center flex">
                    <SrBottom>
                      <div className="w-full items-center justify-center flex">
                        <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                          <div className=" w-full items-end justify-end flex">
                            <div className="flex  items-center  relative     ">
                              <Image
                                className=" relativepos  "
                                src="/mobileapps/doroos/icon3.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                          </div>
                          <div className="flex flex-col text-white gap-3  text-start w-full">
                            <span className="font-bold text-5xl"> Ideat</span>
                            <span className="font-semibold text-2xl">
                              User Flow, Information Architecture
                            </span>
                          </div>
                        </div>
                      </div>
                    </SrBottom>
                  </div>
                  <div className="col-span-4 items-center justify-center flex">
                    <SrRight>
                      <div className="w-full items-center justify-center flex">
                        <div className="h-80 w-full bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                          <div className=" w-full items-end justify-end flex">
                            <div className="flex  items-center  relative     ">
                              <Image
                                className=" relativepos  "
                                src="/mobileapps/doroos/icon4.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                          </div>
                          <div className="flex flex-col text-white gap-3  text-start w-full">
                            <span className="font-bold text-5xl"> Design</span>
                            <span className="font-semibold text-2xl">
                              Low/High Fidelity Wireframes, Prototyping
                            </span>
                          </div>
                        </div>
                      </div>
                    </SrRight>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-drbg2 bg-contain bg-no-repeat bg-left-top py-20 ">
                <div className="flex  items-center  relative  w-4/12   ">
                  <RevealOnScroll>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/iat.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScroll>
                </div>
                <div className="flex  items-center  relative    pt-10 ">
                  <SrBottom>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/iap.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="w-full grid grid-cols-12  bg-drbg2 bg-contain bg-no-repeat bg-left-top pb-10 gap-10">
                <div className="col-span-4 flex flex-col items-start justify-start gap-10 h-full">
                  <div className="flex  items-center  relative    pt-10 ">
                    <SrLeft>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/logo2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="bg-drbg3 bg-cover bg-no-repeat bg-center flex items-start justify-center w-full flex-col py-10  rounded-3xl px-5 h-full">
                    <SrLeft>
                      <span className="font-black text-7xl text-white uppercase leading-[100px]">
                        Bringing<br></br>your<br></br>Vision to<br></br>life
                      </span>
                    </SrLeft>
                    <div className="flex  items-center  relative    pt-10 w-full ">
                      <SrBottom>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/mu1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
                <div className="col-span-8 items-center justify-center flex flex-col ">
                  <div className="flex items-center justify-between gap-5 w-full">
                    <div className=" flex flex-col items-end justify-end gap-5">
                      <div className="flex  items-center  relative     ">
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/logo2.gif"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className="flex  items-center  relative     ">
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/cap.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                    <div className="flex  items-center  relative     ">
                      <SrRight>
                        <Image
                          className=" relativepos  "
                          src="/mobileapps/doroos/mu2.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                  <div className="flex  items-center  relative    pt-10 w-full ">
                    <SrBottom>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/mu3.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col relative">
                <div className="flex  items-center  relative    pt-10  w-1/3 ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/tft.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  justify-between w-full   ">
                  <span className="text-[18vw] text-[#2CB1A9] font-black leading-[350px] ">
                    <RotateText>Urbanist</RotateText>
                  </span>
                  <div className="flex flex-col items-end justify-end h-full text-2xl gap-5">
                    <span className="  text-[#2CB1A9] font-normal">
                      Reguler
                    </span>
                    <span className="  text-[#2CB1A9] font-semibold">
                      Semibold
                    </span>
                    <span className="  text-[#2CB1A9] font-bold">Bold</span>
                  </div>
                </div>
                <div className="w-full text-start text-white text-4xl font-medium">
                  <span className="w-11/12">
                    <span className="font-black"> Urbanist</span> is a
                    low-contrast, geometric sans-serif inspired by Modernist
                    typography and design. The project was launched by Corey Hu
                    in 2020 with 9 weights and accompanying italics.
                  </span>
                </div>
              </div>
              <div className="bg-drbg4 bg-center  bg-cover bg-no-repeat w-full flex flex-col text-center mt-10  text-white p-16 rounded-3xl gap-10">
                <SrBottom>
                  <span className="text-8xl ">
                    Put Your Course in the
                    <span className="text-[#2CB1A9] font-bold">Spotlight!</span>
                  </span>
                </SrBottom>
                <span className="text-5xl">
                  Expand Your Reach and Impact with Targeted Advertising
                </span>
              </div>

              <div className="w-full flex items-center justify-center pt-10 mt-10 relative">
                <RotateImage>
                  <div className="flex  items-center  relative      ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/circle.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </RotateImage>
                <div className="flex  items-center  absolute top-[10%] left-[15%]      ">
                  <SrRight>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/c1.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
                <div className="flex  items-center  absolute top-[10%] right-[15%]      ">
                  <SrRight>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/c2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
                <div className="flex  items-center  absolute bottom-[10%] right-[13%]      ">
                  <SrRight>
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/doroos/c3.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
                <div className="flex  items-center  absolute  w-1/4     ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/sct.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="flex items-center justify-center w-full mt-10">
                <div className="flex  items-center      w-1/2 ">
                  <Image
                    className=" relativepos  "
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
