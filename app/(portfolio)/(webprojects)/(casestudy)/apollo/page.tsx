'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Apollo() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col text-white ${urbanist.className}`}
      >
        <div className=" bg-gradient-to-b from-[#0D2165] via-[#071744] to-[#000D22]  w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 bg-apollo1 bg-center bg-contain bg-no-repeat ">
            <div className="flex flex-col col-span-12 items-center justify-center pt-10 text-center gap-5">
              <div className="flex items-center   w-1/4 pt-10 ">
                <Image
                  className=" relativepos "
                  src="/apollo/logo.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <span className=" text-3xl pt-8 ">losangelestattooshop.com</span>
              <span className=" text-3xl pt-12 font-semibold ">UI/UX</span>

              <span className=" text-lg pt-8  w-1/2 ">
                Using state of the art advancements in tattoo machine
                technology, your artist will be able to complete your tattoo
                with greater precision, less damage to the skin in a shorter
                time. That means less time in the chair and a faster better
                looking tattoo.
              </span>

              <div className="flex items-center pt-12  w-1/4 ">
                <Image
                  className=" relativepos "
                  src="/apollo/main.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <span className=" text-3xl pt-12 font-semibold uppercase">
                Wireframes
              </span>

              <span className=" text-lg pt-8  w-1/2 ">
                From main page to sub-pages each one of them thought out and
                designed individually.
              </span>

              <div className="flex items-center  gap-5 pb-10">
                <div className="flex items-center pt-12  w-1/2 ">
                  <Image
                    className=" relativepos "
                    src="/apollo/wf1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center pt-12  w-1/2  mt-10">
                  <Image
                    className=" relativepos "
                    src="/apollo/wf2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <span className=" text-3xl pt-12 font-semibold uppercase ">
                Problem Statement
              </span>

              <span className=" text-lg pt-8  w-1/2 ">
                The client lacked an online presence for their tattoo services,
                resulting in reduced visibility and missed business
                opportunities. A professional, user-friendly website was needed
                to showcase the artists portfolio, provide service information,
                and facilitate appointment bookings, ultimately attracting more
                customers and driving business growth
              </span>

              <span className=" text-3xl pt-20 font-semibold uppercase  mt-10">
                Style Guidline
              </span>

              <span className=" text-lg pt-8  w-1/2 ">
                The power of blue and white oriented colors and modern serif
                font choices,have helped us to create a reliable and bold Tattoo
                services platform.
              </span>

              <div className="space-x-20 flex lg:flex-row flex-col pt-16  mt-10">
                <div className="flex flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-white shadow-glow-white"></div>
                  </div>
                  <span>#213B8D</span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-[#EEAD04] shadow-glow-yellow"></div>
                  </div>
                  <span>#EEAD04</span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-[#09184B] shadow-glow-blue"></div>
                  </div>
                  <span>#09184B</span>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-[#BEBEBE] shadow-glow-gray"></div>
                  </div>
                  <span>#BEBEBE</span>
                </div>
              </div>

              <div className="flex  items-center  lg:mt-20 pt-20  justify-around  w-full">
                <span className="text-3xl -rotate-90 text-[##BEBEBE]">
                  FONTS
                </span>
                <div className=" items-center   w-1/4   ">
                  <Image
                    className=" relativepos "
                    src="/apollo/aa.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  w-1/3  ">
                  <Image
                    className=" relativepos "
                    src="/apollo/abc.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <span className=" text-3xl pt-20 font-semibold uppercase  mt-10">
                hOMEPAGE
              </span>

              <span className=" text-lg pt-8  w-1/2 ">
                The Journey begins here, dont forget to scroll
              </span>

              <div className="flex  flex-col items-center  pt-10  justify-around  w-full">
                <div className=" items-center  w-[90%]     ">
                  <Image
                    className=" relativepos "
                    src="/apollo/laptop.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center w-[75%]   ">
                  <Image
                    className=" relativepos "
                    src="/apollo/home2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  bg-[#09184B]   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center justify-center  text-center g">
              <div className="flex items-center w-[75%]   ">
                <Image
                  className=" relativepos "
                  src="/apollo/home3.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <span className=" text-3xl pt-20 font-semibold uppercase  mt-10">
                Other Pages
              </span>
              <div className="flex items-center  pt-10  ">
                <Image
                  className=" relativepos "
                  src="/apollo/icons.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex lg:flex-row flex-col w-full items-start justify-center gap-5  pt-10 mt-10">
                <div className="flex items-center  w-[32%]  ">
                  <Image
                    className=" relativepos "
                    src="/apollo/op1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  w-[32%]   ">
                  <Image
                    className=" relativepos "
                    src="/apollo/op2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  w-[32%]   ">
                  <Image
                    className=" relativepos "
                    src="/apollo/op3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <span className=" text-3xl font-semibold uppercase  mt-10">
                Project Duration
              </span>
              <div className="flex items-center   pt-16  w-3/4 ">
                <Image
                  className=" relativepos "
                  src="/apollo/pd.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center   pt-16  w-3/4 ">
                <Image
                  className=" relativepos "
                  src="/apollo/laptop2.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center   w-10/12  ">
                <Image
                  className=" relativepos "
                  src="/apollo/iphones.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <span className=" text-3xl font-semibold uppercase  mt-10">
                Testing
              </span>
              <div className="flex items-center py-10  w-11/12 ">
                <Image
                  className=" relativepos "
                  src="/apollo/testing.png"
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
