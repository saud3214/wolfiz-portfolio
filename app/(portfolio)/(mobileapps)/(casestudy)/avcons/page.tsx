'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { setupScrollAnimation } from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import useSmoothScroll from '@/app/components/ss';
import WordPullUp from '@/components/magicui/word-pull-up';
import { DualTextVelocityScroll } from '@/components/magicui/scroll-based-velocity';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import HoverCard from '@/app/components/cards';
import {
  SrLeft,
  SrRight,
  SrBottom,
  SrTop,
} from '@/app/components/revealelement';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '700'],
});

export default function Avcons() {
  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex   ${urbanist.className}`}
      >
        <div className="grid items-center justify-center w-full grid-cols-12 ">
          <div className="flex flex-col items-center justify-center w-full col-span-12 ">
            <div className="relative flex flex-col items-center justify-center w-full">
              <div className="w-full flex flex-col lg:flex-row lg:items-start  items-center justify-center bg-[#20B4E3]   h-[60vh] lg:pt-10 relative">
                <div className="relative flex items-center w-11/12 lg:w-3/5 ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/avcons/logo.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
                <div className="flex items-start justify-between w-11/12 gap-10 pb-10 lg:hidden ">
                  <div className="absolute flex items-center w-11/12 lg:w-8/12 ">
                    <SrLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/avcons/truck.png"
                        alt="Background 1"
                        fill
                        priority
                      />
                    </SrLeft>
                  </div>
                  <div className="  items-center    absolute  w-[15%]   right-[8%] hidden ">
                    <SrBottom>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/avcons/mobie.png"
                        alt="Background 1"
                        fill
                        priority
                      />
                    </SrBottom>
                  </div>
                </div>
              </div>

              <div className="w-11/12 lg:flex hidden items-start justify-between gap-10 pb-10 h-[30vh] ">
                <div className="flex  items-center  absolute    w-8/12  top-[45%]  ">
                  <SrLeft>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/avcons/truck.png"
                      alt="Background 1"
                      fill
                      priority
                    />
                  </SrLeft>
                </div>
                <div className="flex  items-center    absolute  w-[15%]   right-[8%] top-[30%]">
                  <SrBottom>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/avcons/mobie.png"
                      alt="Background 1"
                      fill
                      priority
                    />
                  </SrBottom>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-10">
              <div className="items-center justify-center hidden w-full mt-10 h-36 lg:block">
                <GradualSpacing
                  className="text-[#263C51] text-7xl font-bold uppercase  "
                  text="get your stuff"
                />
                <GradualSpacing
                  className="text-[#263C51] text-7xl font-bold uppercase"
                  text="delivered today"
                />
              </div>
              <div className="items-center justify-center block w-full h-24 lg:hidden">
                <GradualSpacing
                  className="text-[#263C51] text-4xl font-bold uppercase  "
                  text="get your stuff"
                />
                <GradualSpacing
                  className="text-[#263C51] text-4xl font-bold uppercase"
                  text="delivered today"
                />
              </div>

              <span className="text-[#263C51] lg:text-3xl text-2xl font-medium lg:w-9/12 w-11/12 lg:py-10 text-center">
                We connect shippers and carriers to haul together. Find and book
                loads for you and your fleet, easily upload documents, and get
                paid quickly with the tap of a button.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-11/12 gap-5 lg:flex-row lg:py-10 lg:gap-20">
              <div className="relative flex items-center w-11/12 pt-10 lg:w-3/12 lg:pt-0">
                <SrLeft>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/avcons/ps.png"
                    alt="Background 1"
                    fill
                  />
                </SrLeft>
              </div>
              <div className="relative flex items-center w-11/12 lg:w-3/12">
                <SrRight>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/avcons/ss.png"
                    alt="Background 1"
                    fill
                  />
                </SrRight>
              </div>
            </div>
            <div className=" w-full items-center justify-center flex py-5 bg-[#20B4E3] my-10">
              <DualTextVelocityScroll
                text1=" get paid just with a tap "
                text2=" CONNECT, BOOK, MANAGE WITH "
                imageSrc="/mobileapps/avcons/Vector.png" // Provide the path to your image
                imageAlt="Description of the image"
                default_velocity={5}
                className="font-display text-center lg:text-3xl text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-6xl md:leading-[5rem] uppercase items-center justify-center"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full lg:py-10">
              <div className="items-center justify-center hidden w-full h-24 lg:block">
                <GradualSpacing
                  className="text-[#263C51] text-7xl font-bold uppercase"
                  text="design process"
                />
              </div>
              <div className="items-center justify-center block w-full h-12 lg:hidden ">
                <GradualSpacing
                  className="text-[#263C51] text-4xl font-bold uppercase"
                  text="design process"
                />
              </div>
              <div className="grid items-start justify-start w-11/12 grid-cols-12 pt-10">
                <div className="flex items-center justify-center w-full col-span-12 lg:col-span-3 ">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/analyse.png"
                    iconSrcw="/mobileapps/avcons/analysewhite.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="ANALYSE"
                    description="Examining details to understand problems, solutions, and insights."
                  />
                </div>
                <div className="flex items-center justify-center w-full col-span-12 pt-10 lg:col-span-3 lg:pt-40 ">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/Defineb.png"
                    iconSrcw="/mobileapps/avcons/Definew.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="DEFINE"
                    description="identifying and clarifying the main problems or key issues."
                  />
                </div>
                <div className="flex items-center justify-center w-full col-span-12 pt-10 lg:col-span-3 lg:pt-20 ">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/Ideab.png"
                    iconSrcw="/mobileapps/avcons/Ideaw.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="IDEATE "
                    description="generating and brainstorming potential solutions or ideas."
                  />
                </div>
                <div className="flex items-center justify-center w-full col-span-12 py-10 lg:col-span-3 lg:py-0">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/Designb.png"
                    iconSrcw="/mobileapps/avcons/Designw.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="DESIGN "
                    description="creating and planning solutions or strategies."
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-11/12 ">
              <div className="relative flex items-center w-full lg:w-9/12">
                <Image
                  className=" relativepos"
                  src="/mobileapps/avcons/screens2.gif"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
            <div className="grid w-11/12 grid-cols-12 py-10 lg:gap-10">
              <div className="justify-start hidden col-span-6 lg:flex items-">
                <div className="relative flex items-center w-full ">
                  <SrLeft>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/avcons/shrt.png"
                      alt="Background 1"
                      fill
                    />
                  </SrLeft>
                </div>
              </div>
              <div className="items-center justify-end hidden col-span-6 lg:flex">
                <div className="relative flex items-center w-full ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/avcons/shrt2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>
              </div>
              <div className="col-span-12 lg:flex hidden items-start justify-start h-[85%] relative">
                <SrBottom>
                  <div className="flex  items-center    relative  w-full h-[99%] ">
                    <Image
                      className="object-cover relativepos rounded-3xl"
                      src="/mobileapps/avcons/logo2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </SrBottom>
              </div>
              <div className="flex flex-col items-center justify-center col-span-12 lg:py-10">
                <div className="items-center justify-center hidden w-full h-36 lg:block ">
                  <GradualSpacing
                    className="text-[#263C51] text-7xl font-bold uppercase  "
                    text="information  "
                  />
                  <GradualSpacing
                    className="text-[#263C51] text-7xl font-bold uppercase"
                    text="architecture"
                  />
                </div>
                <div className="items-center justify-center block w-full h-20 lg:hidden ">
                  <GradualSpacing
                    className="text-[#263C51] text-4xl font-bold uppercase  "
                    text="information  "
                  />
                  <GradualSpacing
                    className="text-[#263C51] text-4xl font-bold uppercase"
                    text="architecture"
                  />
                </div>
                <div className="relative flex items-center w-full pt-10">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/avcons/ia.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center col-span-12 py-10">
                <div className="items-center justify-center hidden w-full h-24 lg:block">
                  <GradualSpacing
                    className="text-[#263C51] lg:text-7xl text-3xl font-bold uppercase  "
                    text="colors and typography  "
                  />
                </div>
                <div className="items-center justify-center block w-full h-12 lg:hidden">
                  <GradualSpacing
                    className="text-[#263C51] text-3xl font-bold   "
                    text="Colors And Typography  "
                  />
                </div>

                <div className="flex flex-col items-center justify-between w-10/12 gap-5 lg:flex-row lg:gap-0">
                  <div className="relative flex items-center w-3/4 lg:w-1/4 ">
                    <SrBottom>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/avcons/logo3.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                  <div className="relative flex items-center w-3/4 lg:w-1/4">
                    <SrBottom>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/avcons/logo4.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                  <div className="relative flex items-center w-3/4 lg:w-1/4 ">
                    <SrBottom>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/avcons/logo5.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
                <div className="relative flex items-center pt-10 ">
                  <Image
                    className="w-full relativepos"
                    src="/mobileapps/avcons/aa.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full col-span-12 lg:pt-10">
                <div className="items-center justify-center w-full h-12 lg:h-24 ">
                  <GradualSpacing
                    className="text-[#263C51] lg:text-7xl text-4xl font-bold uppercase  "
                    text="revenue screens  "
                  />
                </div>
                <div className="relative flex items-center w-full pt-10 ">
                  <Image
                    className=" relativepos rounded-3xl"
                    src="/mobileapps/avcons/Re2.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex items-center justify-center col-span-12 pt-10 lg:col-span-6 lg:pt-20">
                <SrLeft>
                  <div className="flex  items-center    relative  lg:w-11/12 w-full  lg:h-[70vh] ">
                    <Image
                      className=" relativepos rounded-3xl"
                      src="/mobileapps/avcons/logo6.gif"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </SrLeft>
              </div>
              <div className="flex items-center justify-center col-span-12 pt-10 lg:col-span-6 lg:pt-20">
                <SrRight>
                  <div className="flex  items-center    relative  lg:w-11/12 w-full  lg:h-[70vh] ">
                    <Image
                      className=" relativepos rounded-3xl"
                      src="/mobileapps/avcons/Row2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </SrRight>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="relative flex items-center w-full ">
                <SrBottom>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/avcons/last2.png"
                    alt="Background 1"
                    fill
                  />
                </SrBottom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
