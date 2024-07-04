'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Unbounded } from 'next/font/google';
import { PageTransition } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Unbounded({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Leadspeddllers() {
  useEffect(() => {
    csimages();
  });

  return (
    <PageTransition>
      <div
        className={` w-full items-center justify-center flex flex-col    ${urbanist.className} `}
      >
        <div className=" w-full  items-center justify-center flex flex-col  bg-gradient-to-b from-black  to-[#792C21]   ">
          <div className=" grid grid-cols-12 items-start justify-center   w-[100%] ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center   lg:mt-20 w-full    ">
                <Image
                  className=" relativepos  "
                  src="/lp/laptop.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12 items-start justify-center   bg-black  w-full ">
            <div className="flex   col-span-12 items-center justify-center flex-col   gap-3  ">
              <div className="flex flex-col  items-center  w-full gap-5 ">
                <div className="  flex justify-between items-center w-full pr-16 ">
                  <div className="flex items-center w-9/12">
                    <div className="bg-[#EC6451] h-4 w-1/6"> </div>
                    <span className="text-5xl text-white font-semibold">
                      About the Project
                    </span>
                  </div>
                  <span className="text-[120px] text-[#1D0D0A]">01</span>
                </div>
                <div className="flex w-full items-end justify-end">
                  <div className="bg-lp1 bg-contain bg- bg-no-repeat  lg:w-11/12 flex items-end justify-end  py-10  px-16">
                    <div className="text-white border border-gray-300 shadow-lg drop-shadow-lg rounded-3xl  w-2/3 p-20 mr-4  bg-gradient-to-r from-[#030000] via-[#491A14]  to-[#762B21]  backdrop-blur-2xl backdrop-saturate-50">
                      <span>
                        Partnering with this lead generation service was a
                        game-changer for us. Their ability to understand our
                        industrys nuances and deliver leads tailored to our
                        ideal customer profile was impressive. Our conversion
                        rates soared, and were seeing tangible growth thats
                        directly tied to their expertise
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  items-center   flex-col  w-full ">
                <div className="  flex justify-between items-center w-full pl-16 ">
                  <span className="text-[120px] text-[#1D0D0A]">02</span>

                  <div className="flex items-center w-9/12 justify-end">
                    <span className="text-5xl text-white font-semibold">
                      Problems
                    </span>
                    <div className="bg-[#EC6451] h-4 w-1/6"> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="bg-lp2 bg-contain bg-right bg-no-repeat  lg:w-11/12 flex items-end justify-start  p-16">
                    <div className="text-white border border-gray-300 shadow-lg drop-shadow-lg rounded-3xl  xl:w-2/3 p-20 mr-4  backdrop-blur-sm bg-white/10 bg-opacity-50">
                      <span>
                        From startups to industry leaders, our diverse clientele
                        spans various sectors and sizes. Were proud to have
                        supported businesses of various kinds in their journey
                        to harness the potential of strategic lead generation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  items-center  w-full gap-5 ">
                <div className="  flex justify-between items-center w-full pr-16 ">
                  <div className="flex items-center w-9/12">
                    <div className="bg-[#EC6451] h-4 w-1/6"> </div>
                    <span className="text-5xl text-white font-semibold">
                      Solutions
                    </span>
                  </div>
                  <span className="text-[120px] text-[#1D0D0A]">03</span>
                </div>
                <div className="flex w-full items-end justify-end">
                  <div className="bg-lp3 bg-contain bg- bg-no-repeat  lg:w-11/12 flex items-center justify-center  py-10  px-16">
                    <div className="text-white border border-gray-300 shadow-lg drop-shadow-lg rounded-3xl  w-2/3 p-20 mr-4  bg-gradient-to-r from-[#030000] via-[#491A14]  to-[#762B21]  backdrop-blur-2xl backdrop-saturate-50">
                      <span>
                        Partnering with this lead generation service was a
                        game-changer for us. Their ability to understand our
                        industrys nuances and deliver leads tailored to our
                        ideal customer profile was impressive. Our conversion
                        rates soared, and were seeing tangible growth thats
                        directly tied to their expertise
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-10 ">
            <div className="  flex  items-start w-full justify-end  ">
              <div className="flex items-center w-9/12 justify-end pt-16">
                <span className="text-5xl text-white font-semibold">
                  Design Timeline
                </span>
                <div className="bg-[#EC6451] h-4 w-1/6"> </div>
              </div>
            </div>
            <div className="flex  items-center   lg:mt-10 w-full  p-10  ">
              <Image
                className=" relativepos  "
                src="/lp/dt.png"
                alt="Background 1"
                fill
              />
            </div>
          </div>
          <div className="w-full py-10">
            <div className="  flex  items-start w-full justify-start  ">
              <div className="flex items-center w-9/12 justify-start">
                <div className="bg-[#EC6451] h-4 w-1/6"> </div>
                <span className="text-5xl text-white font-semibold">
                  Design Process
                </span>
              </div>
            </div>
            <div className="flex  items-center    w-full  p-10  ">
              <Image
                className=" relativepos  "
                src="/lp/dp.png"
                alt="Background 1"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
