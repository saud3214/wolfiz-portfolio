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
        <div className="grid grid-cols-12 w-full  items-center justify-center    ">
          <div className="col-span-12 items-center justify-center flex flex-col w-full ">
            <div className="w-full items-center justify-center flex flex-col relative">
              <div className="w-full flex items-start justify-center bg-[#20B4E3]  h-[60vh] pt-10 relative">
                <div className="flex  items-center  relative    w-3/5   ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/avcons/logo.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>

              <div className="w-11/12 flex items-start justify-between gap-10 pb-10 h-[30vh] ">
                <div className="flex  items-center  absolute    w-8/12  top-[45%]  ">
                  <SrLeft>
                    <Image
                      className=" relativepos  "
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
                      className=" relativepos  "
                      src="/mobileapps/avcons/mobie.png"
                      alt="Background 1"
                      fill
                      priority
                    />
                  </SrBottom>
                </div>
              </div>
            </div>

            <div className="w-full items-center justify-center flex flex-col mt-10">
              <div className="w-full items-center justify-center h-36 mt-10">
                <GradualSpacing
                  className="text-[#263C51] text-7xl font-bold uppercase  "
                  text="get your stuff"
                />
                <GradualSpacing
                  className="text-[#263C51] text-7xl font-bold uppercase"
                  text="delivered today"
                />
              </div>

              <span className="text-[#263C51] text-3xl font-medium w-9/12 py-10 text-center">
                We connect shippers and carriers to haul together. Find and book
                loads for you and your fleet, easily upload documents, and get
                paid quickly with the tap of a button.
              </span>
            </div>
            <div className="w-11/12 items-center justify-center flex py-10 gap-20">
              <div className="flex  items-center    relative w-3/12">
                <Image
                  className=" relativepos  "
                  src="/mobileapps/avcons/ps.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex  items-center    relative  w-3/12">
                <Image
                  className=" relativepos  "
                  src="/mobileapps/avcons/ss.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
            <div className=" w-full items-center justify-center flex py-5 bg-[#20B4E3] my-10">
              <DualTextVelocityScroll
                text1=" get paid just with a tap "
                text2=" CONNECT, BOOK, MANAGE WITH "
                imageSrc="/mobileapps/avcons/Vector.png" // Provide the path to your image
                imageAlt="Description of the image"
                default_velocity={5}
                className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-6xl md:leading-[5rem] uppercase items-center justify-center"
              />
            </div>
            <div className=" w-full items-center justify-start flex flex-col py-10 ">
              <div className="w-full items-center justify-center h-24 ">
                <GradualSpacing
                  className="text-[#263C51] text-7xl font-bold uppercase"
                  text="design process"
                />
              </div>
              <div className="grid grid-cols-12  items-start justify-start  w-11/12 pt-10">
                <div className="col-span-3 items-center justify-center flex w-full  ">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/analyse.png"
                    iconSrcw="/mobileapps/avcons/analysewhite.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="ANALYSE"
                    description="Examining details to understand problems, solutions, and insights."
                  />
                </div>
                <div className="col-span-3 items-center justify-center flex w-full pt-40 ">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/Defineb.png"
                    iconSrcw="/mobileapps/avcons/Definew.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="DEFINE"
                    description="identifying and clarifying the main problems or key issues."
                  />
                </div>
                <div className="col-span-3 items-center justify-center flex w-full pt-20 ">
                  <HoverCard
                    iconSrc="/mobileapps/avcons/Ideab.png"
                    iconSrcw="/mobileapps/avcons/Ideaw.png"
                    arrowImageSrc="/mobileapps/avcons/arrow.png" // Path to your arrow image
                    title="IDEATE "
                    description="generating and brainstorming potential solutions or ideas."
                  />
                </div>
                <div className="col-span-3 items-center justify-center flex w-full  ">
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
            <div className="w-11/12 flex items-center justify-center ">
              <div className="flex  items-center    relative w-9/12">
                <Image
                  className=" relativepos  "
                  src="/mobileapps/avcons/screens2.gif"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
            <div className="grid grid-cols-12   w-11/12 py-10  gap-10">
              <div className="col-span-6 flex items- justify-start">
                <div className="flex  items-center    relative w-full ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/avcons/shrt.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-6 flex items-center justify-end">
                <div className="flex  items-center    relative  w-full ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/avcons/shrt2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-12 flex items-start justify-start h-[85%] relative">
                <div className="flex  items-center    relative  w-full h-[99%] ">
                  <Image
                    className=" relativepos  object-cover rounded-3xl"
                    src="/mobileapps/avcons/logo2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-12 flex flex-col items-center justify-center py-10">
                <div className="w-full items-center justify-center h-36 ">
                  <GradualSpacing
                    className="text-[#263C51] text-7xl font-bold uppercase  "
                    text="information  "
                  />
                  <GradualSpacing
                    className="text-[#263C51] text-7xl font-bold uppercase"
                    text="architecture"
                  />
                </div>
                <div className="flex  items-center    relative  w-full pt-10">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/avcons/ia.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-12 flex flex-col items-center justify-center py-10">
                <div className="w-full items-center justify-center h-24 ">
                  <GradualSpacing
                    className="text-[#263C51] text-7xl font-bold uppercase  "
                    text="colors and typography  "
                  />
                </div>
                <div className="w-10/12 items-center justify-between flex">
                  <div className="flex  items-center    relative  ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/avcons/logo3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center    relative  ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/avcons/logo4.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center    relative  ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/avcons/logo5.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="flex  items-center    relative pt-10 ">
                  <Image
                    className=" relativepos w-full "
                    src="/mobileapps/avcons/aa.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-12 items-center justify-center w-full flex flex-col pt-10">
                <div className="w-full items-center justify-center h-24 ">
                  <GradualSpacing
                    className="text-[#263C51] text-7xl font-bold uppercase  "
                    text="revenue screens  "
                  />
                </div>
                <div className="flex  items-center    relative pt-10 w-full ">
                  <Image
                    className=" relativepos   rounded-3xl "
                    src="/mobileapps/avcons/Re2.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-6  items-center justify-center flex pt-20">
                <div className="flex  items-center    relative w-11/12 h-[90vh]">
                  <Image
                    className=" relativepos   rounded-3xl "
                    src="/mobileapps/avcons/logo6.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-6  items-center justify-center flex pt-20">
                <div className="flex  items-center    relative  w-11/12 h-[90vh] ">
                  <Image
                    className=" relativepos   rounded-3xl "
                    src="/mobileapps/avcons/Row.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="w-full items-center justify-center flex">
              <div className="flex  items-center    relative  w-full h-[100vh] ">
                <Image
                  className=" relativepos   object-cover  "
                  src="/mobileapps/avcons/last.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
