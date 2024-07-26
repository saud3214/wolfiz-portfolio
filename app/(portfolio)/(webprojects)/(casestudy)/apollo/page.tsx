'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Apollo() {
  useEffect(() => {});

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col text-white ${urbanist.className}`}
      >
        <div className=" bg-gradient-to-b from-[#0D2165] via-[#071744] to-[#000D22]  w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 bg-apollo1 bg-center bg-contain bg-no-repeat ">
            <div className="flex flex-col col-span-12 items-center justify-center pt-10 text-center gap-5">
              <div className="flex items-center   lg:w-1/4 w-2/3 pt-10 relative ">
                <Image
                  className=" relativepos "
                  src="/apollo/logo.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>

              <span className=" lg:text-3xl text-2xl  pt-8 ">
                losangelestattooshop.com
              </span>
              <span className=" lg:text-3xl text-2xl lg:pt-12 font-semibold ">
                UI/UX
              </span>

              <span className=" text-lg lg:pt-8  lg:w-1/2 ">
                Using state of the art advancements in tattoo machine
                technology, your artist will be able to complete your tattoo
                with greater precision, less damage to the skin in a shorter
                time. That means less time in the chair and a faster better
                looking tattoo.
              </span>

              <div className="flex items-center lg:pt-12  lg:w-1/4  w-1/3 relative">
                <Image
                  className=" relativepos "
                  src="/apollo/main.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <span className=" lg:text-3xl text-2xl lg:pt-12 font-semibold uppercase">
                Wireframes
              </span>

              <span className=" text-lg lg:pt-8  lg:w-1/2 w-3/4 ">
                From main page to sub-pages each one of them thought out and
                designed individually.
              </span>

              <div className="flex flex-col lg:flex-row items-center  gap-5 pb-10">
                <div className="flex items-center lg:pt-12 pt-5 lg:w-1/2 w-full relative">
                  <Image
                    className=" relativepos "
                    src="/apollo/wf1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center lg:pt-12  lg:w-1/2 w-full  lg:mt-10 relative">
                  <Image
                    className=" relativepos "
                    src="/apollo/wf2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <span className=" lg:text-3xl text-2xl lg:pt-12 font-semibold uppercase ">
                Problem Statement
              </span>

              <span className=" text-lg pt-8  lg:w-1/2 w-11/12 ">
                The client lacked an online presence for their tattoo services,
                resulting in reduced visibility and missed business
                opportunities. A professional, user-friendly website was needed
                to showcase the artists portfolio, provide service information,
                and facilitate appointment bookings, ultimately attracting more
                customers and driving business growth
              </span>

              <span className=" lg:text-3xl text-2xl lg:pt-20 font-semibold uppercase  mt-10">
                Style Guidline
              </span>

              <span className=" text-lg pt-8  lg:w-1/2 w-11/12 ">
                The power of blue and white oriented colors and modern serif
                font choices,have helped us to create a reliable and bold Tattoo
                services platform.
              </span>

              <div className="lg:space-x-20 flex lg:flex-row flex-col lg:pt-16  mt-10">
                <div className="flex items-center justify-center flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-white shadow-glow-white"></div>
                  </div>
                  <span>#213B8D</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-[#EEAD04] shadow-glow-yellow"></div>
                  </div>
                  <span>#EEAD04</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-[#09184B] shadow-glow-blue"></div>
                  </div>
                  <span>#09184B</span>
                </div>

                <div className="flex  items-center justify-center flex-col gap-5">
                  <div className="p-5 flex border-4 border-[#213B8D] ">
                    <div className="inline-block h-40 w-48 bg-[#BEBEBE] shadow-glow-gray"></div>
                  </div>
                  <span>#BEBEBE</span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row  items-center  lg:mt-20 lg:pt-20  justify-around  w-full gap-5 lg:gap-0">
                <span className="lg:text-3xl text-2xl lg:-rotate-90 text-[##BEBEBE]">
                  FONTS
                </span>
                <div className=" items-center   lg:w-1/4  w-1/3 relative ">
                  <Image
                    className=" relativepos "
                    src="/apollo/aa.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  lg:w-1/3 w-2/4 relative ">
                  <Image
                    className=" relativepos "
                    src="/apollo/abc.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <span className=" lg:text-3xl text-2xl lg:pt-20 font-semibold uppercase  mt-10">
                hOMEPAGE
              </span>

              <span className=" text-lg lg:pt-8  lg:w-1/2 w-11/12 ">
                The Journey begins here, dont forget to scroll
              </span>

              <div className="flex  flex-col items-center  lg:pt-10  justify-around  w-full">
                <div className=" items-center  lg:w-[90%]  w-full  relative  ">
                  <Image
                    className=" relativepos "
                    src="/apollo/laptop.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center lg:w-[75%]  w-10/12 relative ">
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
              <div className="flex items-center lg:w-[75%] w-10/12  relative  ">
                <Image
                  className=" relativepos "
                  src="/apollo/home3.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <span className=" text-3xl lg:pt-20 font-semibold uppercase  mt-10">
                Other Pages
              </span>
              <div className="flex items-center  pt-10 w-1/3 lg:w-1/6 relative ">
                <Image
                  className=" relativepos "
                  src="/apollo/icons.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex lg:flex-row flex-col w-full lg:items-start items-center justify-center gap-5  lg:pt-10 mt-10">
                <div className="flex items-center  lg:w-[32%]  w-1/2 relative ">
                  <Image
                    className=" relativepos "
                    src="/apollo/op1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center lg:w-[32%]  w-1/2 relative  ">
                  <Image
                    className=" relativepos "
                    src="/apollo/op2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center lg:w-[32%]  w-1/2  relative">
                  <Image
                    className=" relativepos "
                    src="/apollo/op3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <span className=" lg:text-3xl text-2xl font-semibold uppercase  lg:mt-10">
                Project Duration
              </span>
              <div className="flex items-center   lg:pt-16 pt-5  lg:w-3/4  w-11/12 relative ">
                <Image
                  className=" relativepos "
                  src="/apollo/pd.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center   lg:pt-16  lg:w-3/4 w-11/12 relative">
                <Image
                  className=" relativepos "
                  src="/apollo/laptop2.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center   lg:w-10/12 w-11/12 relative  ">
                <Image
                  className=" relativepos "
                  src="/apollo/iphones.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <span className=" lg:text-3xl text-2xl font-semibold uppercase  mt-10">
                Testing
              </span>
              <div className="flex items-center lg:py-10 py-5  w-11/12 relative ">
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
