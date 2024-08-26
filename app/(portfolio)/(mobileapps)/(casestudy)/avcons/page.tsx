'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { setupScrollAnimation } from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import useSmoothScroll from '@/app/components/ss';
import WordPullUp from '@/components/magicui/word-pull-up';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import GradualSpacing from '@/components/magicui/gradual-spacing';

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
          <div className="col-span-12 items-center justify-center flex flex-col w-full  ">
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
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/avcons/truck.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
                <div className="flex  items-center    absolute  w-[15%]   right-[8%] top-[30%]">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/avcons/mobie.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="w-full items-center justify-center flex flex-col">
              <GradualSpacing
                className="text-[#263C51] text-8xl font-bold uppercase mt-10 "
                text=" get your stuff"
              />
              <GradualSpacing
                className="text-[#263C51] text-8xl font-bold uppercase"
                text=" delivered today"
              />

              <span className="text-[#263C51] text-3xl font-medium w-9/12 py-10">
                We connect shippers and carriers to haul together. Find and book
                loads for you and your fleet, easily upload documents, and get
                paid quickly with the tap of a button.
              </span>
            </div>
            <div className="w-11/12 items-center justify-around flex py-10">
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
            <div className=" w-full items-center justify-center flex py-10 bg-[#20B4E3] my-10">
              <VelocityScroll
                text="get paid just with a tap CONNECT, BOOK, MANAGE WITHA"
                default_velocity={5}
                className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] uppercase"
              />
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
