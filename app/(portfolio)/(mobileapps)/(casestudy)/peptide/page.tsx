'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  setupScrollAnimation,
  movingText2,
  animation1,
  animation2,
  animation3,
  animation4,
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

export default function Peptide() {
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
              <div className="grid grid-cols-12 items-center justify-center bg-peptidebg1 bg-cover bg-center bg-no-repeat  w-full p-10 ">
                <div className="col-span-6  flex items-center justify-center  ">
                  <div className="flex  items-center  relative  w-[65%]      ">
                    <SrBottom>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/peptide/iphone.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center justify-center w-10/12 py-10 mt-10 gap-10">
                <div className="flex flex-col col-span-12  items-start justify-center  ">
                  <RevealOnScroll>
                    <div className="flex flex-col w-full items-start justify-center">
                      <span className="text-xl font-medium  uppercase text-[#808082]">
                        project overview
                      </span>

                      <span className="text-4xl font-semibold  mt-2 mb-4  ">
                        Exploring Peptide
                      </span>

                      <span className=" text-2xl  mt-2  2xl:pe-10 2xl:pb-10">
                        Welcome to Peptide Calculator! Our user-friendly guide
                        will walk you through the seamless process of harnessing
                        the power of peptide dosage calculations. Whether you’re
                        a seasoned researcher, a healthcare professional, or
                        simply curious about peptides, our step-by-step
                        instructions will ensure you make the most of our
                        platform. Discover precise dosage insights and unlock
                        the potential of your peptide experiments effortlessly
                        with the Peptide Calculator.
                      </span>
                    </div>
                  </RevealOnScroll>
                </div>
                <div className="col-span-6 flex items-center justify-center ">
                  <SrLeft>
                    <div className="flex  items-center  relative  w-full h-[60vh]       ">
                      <Image
                        className=" relativepos object-cover rounded-3xl"
                        src="/mobileapps/peptide/ep1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SrLeft>
                </div>
                <div className="col-span-6 flex items-center justify-center">
                  <SrRight>
                    <div className="flex  items-center  relative  w-full h-[60vh]       ">
                      <Image
                        className=" relativepos object-cover rounded-3xl"
                        src="/mobileapps/peptide/logo.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SrRight>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center justify-center w-10/12 py-10 2xl:mt-10 gap-10">
                <div className="flex flex-col col-span-12  items-center justify-center  text-center ">
                  <SrBottom>
                    <div className="flex flex-col w-full items-center justify-center">
                      <span className="text-xl font-medium  uppercase text-[#808082]">
                        problem statement
                      </span>
                      <span className="2xl:text-5xl text-4xl font-semibold  mt-2 mb-4   ">
                        Challenges In Peptide Calc <br></br>App Design
                      </span>
                      <span className=" text-2xl  mt-2  2xl:pe-10 2xl:pb-10 2xl:w-9/12">
                        Peptide dosage calculations are critical in medical
                        research, healthcare, and experimental science but
                        present several challenges:
                      </span>
                    </div>
                  </SrBottom>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center justify-center  bg-[#ECFBFD] p-10 my-10 h-[100vh] relative animationcontainer">
                <div className="flex  items-center  relative   w-[25%]     ">
                  <RotateText>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/p1.png"
                      alt="Background 1"
                      fill
                    />
                  </RotateText>
                </div>

                <div className="flex  items-center  absolute  w-[15%]  left-[20%]  top-[19%]  rite  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/complex.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[15%]  left-[20%]  bottom-[18%]  rite  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/access.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[15%]  right-[25%]  top-[13%] lift  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/uf.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[15%]  right-[20%]  bottom-[18%] lift   ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/accuracy.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[25%]  left-[27%]  top-[1%]   ">
                  <SrTop>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/tt.png"
                      alt="Background 1"
                      fill
                    />
                  </SrTop>
                </div>
                <div className="flex  items-center  absolute  w-[25%]  left-[12%]  top-[41%]  rite  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/lt.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[25%]  left-[44%]  bottom-[1%]   ">
                  <SrBottom>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/bt.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
                <div className="flex  items-center  absolute  w-[25%]  right-[12%]  top-[41%] lift   ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/rt.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center justify-center w-10/12 py-10  gap-10">
                <div className="flex flex-col col-span-12  items-center justify-center  text-center ">
                  <RevealOnScroll>
                    <div className="flex flex-col w-full items-center justify-center">
                      <span className="text-xl font-medium  uppercase text-[#808082]">
                        solution statement
                      </span>
                      <span className="2xl:text-5xl text-4xl font-semibold  mt-2 mb-4   ">
                        Innovative Solutions for <br></br>
                        Peptide Calc App Design
                      </span>
                      <span className=" 2xl:text-2xl  text-xl mt-2  2xl:pe-10 2xl:pb-10 2xl:w-9/12">
                        <span className="text-lime-600">
                          Peptide Calculator{' '}
                        </span>
                        simplifies complex peptide dosage calculations with an
                        intuitive app. It offers precise, user-friendly, and
                        accessible dosage information, enhancing accuracy and
                        efficiency for researchers, healthcare professionals,
                        and curious individuals.
                      </span>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>

              <div className="w-full  flex  items-center justify-center  bg-gradient-to-r from-[#62B26B] to-[#18A0B7] p-20 my-10  relative animationcontainer2  ">
                <div className="flex  items-center  relative    w-[23%]   ">
                  <SrBottom>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/iphone2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
                <div className="flex  items-center  absolute  w-[20%]  left-[23%]  top-[13%]  lift2 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/lt1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[35%]  left-[12%]  top-[37%]   lift2">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/lt2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[27%]  left-[18%]  bottom-[27%]  lift2 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/lt3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[35%]  left-[17%]  bottom-[15%]  lift2 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/lt4.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[23%]  right-[20%]  top-[13%]  rite2 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/rt1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[27%]  right-[17%]  top-[27%]  rite2 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/rt2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[34%]  right-[12%]  bottom-[38%]   rite2">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/rt3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute  w-[32%]  right-[14%]  bottom-[18%] rite2  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/rt4.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-11/12 items-center justify-around flex flex-col  bg-white p-5 ">
                <div className="2xl:w-11/12 w-full flex items-center justify-start 2xl:gap-20 gap-10 pb-10">
                  <span className="text-7xl font-bold ">SF Pro Text</span>
                  <div className="px-10 py-4 font-bold text-2xl bg-gray-300 rounded-3xl">
                    Bold
                  </div>
                  <div className="px-10 py-4 font-semibold text-2xl bg-gray-300 rounded-3xl">
                    Semibold
                  </div>
                  <div className="px-10 py-4 font-normal text-2xl bg-gray-300 rounded-3xl">
                    Regular
                  </div>
                </div>
                <div className="2xl:w-11/12 w-full flex items-center justify-between gap-10 py-10">
                  <SrLeft>
                    <span className="text-3xl font-medium ">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br></br>
                      abcdefghijkImnopqrstuvwxys
                      <br></br>1234567890
                    </span>
                  </SrLeft>

                  <div className="flex  items-center  relative  w-[30%] ">
                    <SrRight>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/aa.png"
                        alt="Background 1"
                        fill
                      />
                    </SrRight>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <SrBottom>
                    <div className=" grid grid-cols-10 items-center justify-center gap-5 2xl:w-11/12 w-full h-32 my-10">
                      <div className="bg-[#00C2B7] flex items-end  justify-end h-full p-5 col-span-2 rounded-3xl text-end font-semibold text-3xl text-white">
                        #00C2B7
                      </div>

                      <div className="bg-[#62B26B] flex items-end  justify-end h-full p-5 col-span-2 rounded-3xl text-end font-semibold text-3xl text-white">
                        #62B26B
                      </div>
                      <div className="bg-[#000] flex items-end  justify-end h-full p-5 col-span-2 rounded-3xl text-end font-semibold text-3xl text-white">
                        #00000
                      </div>
                      <div className="bg-[#f0f0f0] flex items-end  justify-end h-full p-5 col-span-2 rounded-3xl text-end font-semibold text-3xl">
                        #F0F0F0
                      </div>
                      <div className="bg-[#ECFBFD] flex items-end  justify-end h-full p-5 col-span-2 rounded-3xl text-end font-semibold text-3xl">
                        #ECFBFD
                      </div>
                    </div>
                  </SrBottom>
                </div>

                <div className=" w-full items-center justify-between flex gap-5 py-10">
                  <div className="flex flex-col w-1/3 items-center justify-center text-center gap-4 ">
                    <RevealOnScroll>
                      <span className="text-2xl font-semibold">Navigation</span>
                    </RevealOnScroll>
                    <div className="flex  items-center  relative w-full   ">
                      <SrLeft>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/peptide/i1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 items-center justify-center text-center gap-4 ">
                    <SrBottom>
                      <span className="text-2xl font-semibold">Popups</span>
                    </SrBottom>
                    <div className="flex  items-center  relative  w-2/5   ">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/peptide/ic2.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 items-center justify-center text-center gap-4 ">
                    <SrBottom>
                      <span className="text-2xl font-semibold">Menu</span>
                    </SrBottom>

                    <div className="flex  items-center  relative w-full   ">
                      <SrRight>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/peptide/ic3.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center justify-center w-full">
                <div className="col-span-6 items-center justify-center bg-[#00C2B7] flex py-20">
                  <div className="flex  items-center  relative  w-[45%]   ">
                    <SrLeft>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/iphone2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                </div>
                <div className="col-span-6 items-center justify-center bg-[#62B26B] flex py-20 h-full flex-col">
                  <div className="flex  items-center  relative  w-[80%]   ">
                    <SrRight>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/asp.png"
                        alt="Background 1"
                        fill
                      />
                    </SrRight>
                  </div>
                  <div className="flex items-center justify-center gap-10 pt-10">
                    <div className="flex  items-center  relative  w-[35%]   ">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/peptide/logovlack.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                    <div className="flex  items-center  relative  w-[35%]   ">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/peptide/logowhite.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center relative bg-black py-16">
                <div className="flex  items-center  relative  w-[75%]   ">
                  <SrBottom>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/mu.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="w-11/12 flex flex-col items-center justify-center py-10 ">
                <span className=" text-6xl font-bold">Design Process</span>
                <div className="w-11/12 items-center justify-center flex pt-10">
                  <div className="flex  items-center  relative  w-[19%]   ">
                    <SrTop>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/dp1.png"
                        alt="Background 1"
                        fill
                      />
                    </SrTop>
                  </div>
                  <div className="flex  items-center  relative  w-[19%] mx-[12%]   ">
                    <SrTop>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/dp3.png"
                        alt="Background 1"
                        fill
                      />
                    </SrTop>
                  </div>
                  <div className="flex  items-center  relative  w-[19%]   ">
                    <SrTop>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/dp5.png"
                        alt="Background 1"
                        fill
                      />
                    </SrTop>
                  </div>
                </div>
                <div className="flex  items-center  relative  w-[75%]   ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/dp.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="w-11/12 items-center justify-center flex pb-10 gap-10">
                  <div className="flex  items-center  relative  w-[19%] mr-[5%]  ">
                    <SrBottom>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/dp2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                  <div className="flex  items-center  relative  w-[19%]  ml-[5%]  ">
                    <SrBottom>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/dp4.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-peptidebg2 bg-cover bg-center bg-no-repeat text-center pt-10 relative">
                <span className="text-6xl font-bold text-white  ">
                  Take Right Measurement <br></br> With Peptide Calculator
                </span>
                <span className="text-3xl font-medium text-white pt-4">
                  Download Exploring Peptide Now
                </span>
                <div className="flex items-center justify-between w-11/12">
                  <div className="flex  items-center  relative  w-[29%]   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/dl.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  absolute  w-[29%] bottom-0 right-[35%]   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/doc.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  relative  w-[26%]   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/peptide/dr.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="w-11/12 flex flex-col items-center justify-center py-10 ">
                <span className=" text-6xl font-semibold py-10">
                  App Screens
                </span>
                <div className=" grid grid-cols-12 w-full items-start justify-start gap-10 pt-10">
                  <div className="col-span-3 flex pt-20  items-center justify-center">
                    <div className="flex  items-center  relative   w-10/12   ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center justify-center ">
                    <div className="flex  items-center  relative   w-10/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex pt-20 items-center justify-center">
                    <div className="flex  items-center  relative   w-10/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center justify-center ">
                    <div className="flex  items-center  relative   w-10/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex pt-20 items-center justify-center">
                    <div className="flex  items-center  relative     w-10/12 ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s5.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <div className="flex  items-center  relative    w-10/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s6.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex pt-20 items-center justify-center">
                    <div className="flex  items-center  relative     w-10/12 ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s7.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <div className="flex  items-center  relative    w-10/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/peptide/s8.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex  items-center justify-center ">
                <div className="flex  items-center  relative    w-1/2  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/mu2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  relative    w-1/2  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/mu2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-10/12 flex  items-center justify-center  ">
                <div className="flex  items-center  relative    w-2/5 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/insta1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  relative    w-2/5  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/insta2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  relative     w-2/5 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/insta3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="w-full flex  items-center justify-center  ">
                <div className="flex  items-center  relative     ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/peptide/last.png"
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
