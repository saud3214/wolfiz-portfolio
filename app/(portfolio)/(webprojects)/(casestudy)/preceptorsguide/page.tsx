'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Preceptors() {
  useEffect(() => {});

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
      >
        <div className="   w-full  items-center justify-center flex flex-col  h-[100vh] bg-pg1 bg-center bg-cover ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10  w-full ">
            <div className="col-span-12 lg:col-span-6  items-center flex justify-center h-full w-full  text-white">
              <div className=" items-start flex justify-center  lg:w-[80%] w-11/12  flex-col lg:ps-5  lg:gap-11 gap-5">
                <div className="flex gap-3 ">
                  <div className="  flex items-center w-10  relative">
                    <Image
                      className=" relativepos "
                      src="/pg/logo.png"
                      alt="Background 1"
                      fill
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className=" lg:text-6xl text-3xl font-semibold">
                      <AnimatedText2 text="Preceptor’s Guide "></AnimatedText2>
                    </div>
                    <span>Float Nursing</span>
                  </div>
                </div>
                <span className="lg:text-5xl text-3xl font-medium">
                  Preceptors Guild with
                </span>
                <span className="lg:text-5xl text-3xl font-medium  text-pg">
                  Confidence
                </span>

                <div className="items-center justify-center flex bg-pg px-16 py-4 rounded-lg text-black text-lg font-medium  mt-5">
                  Case Study
                </div>
              </div>
            </div>
            <div className="flex  lg:col-span-6 col-span-12 items-center lg:justify-end justify-center flex-col   gap-3 ">
              <div className="w-full  flex items-center pt-10 lg:pt-0  relative">
                <Image
                  className=" relativepos "
                  src="/pg/laptop1.png"
                  alt="Background 1"
                  fill
                  priority
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full  items-center  flex  bg-pg2 bg-center bg-cover ">
          <div className=" grid grid-cols-12 items-center justify-center  w-full  ">
            <div
              className="col-span-12   items-center flex  flex-col justify-center h-full w-full pt-10
             "
            >
              <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2">
                <span className="xl:ms-16 ms-3 my-5"> About The Project</span>
                <div className="  flex items-center  w-60 ">
                  <Image
                    className=" relativepos "
                    src="/pg/text.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col items-center justify-between w-11/12 ">
                <div className="flex  lg:w-1/2 text-xl xl:p-12 pt-5 lg:pt-0 ">
                  <span>
                    Renowned expert Jenny Toussaint presents the latest
                    Comprehensive Guide, designed to thoroughly cover nursing
                    concepts and techniques. This guide not only reviews
                    essential content to challenge your critical thinking,
                    crucial for acing modern nursing tests, but also adds a
                    valuable dimension to your career development. Its
                    structure, based on nursing topics, makes it the perfect
                    companion throughout your nursing education.
                  </span>
                </div>
                <div className="  flex items-center lg:w-1/2 w-full   ">
                  <Image
                    className=" relativepos "
                    src="/pg/book.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between w-11/12  h-full pb-10">
                <div className="border border-dashed border-pg lg:p-10 p-5 flex  flex-col items-center justify-center   bg-white/30 backdrop-blur-sm lg:w-[45%] w-full h-full rounded-3xl gap-5">
                  <span className="lg:text-5xl text-3xl text-pgc2 font-medium">
                    The Problem
                  </span>
                  <span className="text-xl ">
                    A problem statement in a literary analysis might describe
                    the central conflict or theme the book addresses, or a
                    specific question about the books content, style, or meaning
                    that the analysis aims to explore. If its for a research
                    paper or academic study related to a book, the problem
                    statement would outline the main research question or
                    hypothesis and the specific issues the study intends to
                    address.
                  </span>
                </div>
                <div className="border border-dashed border-pg lg:p-10 p-5 flex  flex-col items-center justify-center   bg-white/30 backdrop-blur-sm lg:w-[45%] w-full h-full rounded-3xl gap-5 mt-10 lg:mt-0">
                  <span className="text-5xl text-pgc2 font-medium">
                    The Solution
                  </span>
                  <span className="text-xl ">
                    The project will implement a targeted outreach campaign to
                    increase awareness of the after-school programs, develop new
                    activities based on youth interests, and establish a youth
                    advisory council to provide ongoing feedback. These steps
                    aim to boost participation, enhance program relevance, and
                    foster stronger community ties
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full  items-center  flex   ">
          <div className=" grid grid-cols-12 items-center justify-center  w-full  ">
            <div className="col-span-12   items-center flex  flex-col justify-center h-full w-full lg:pt-10 ">
              <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2">
                <span className="xl:ms-16 ms-3 my-5">Project Duration</span>
                <div className="  flex items-center  w-60 ">
                  <Image
                    className=" relativepos "
                    src="/pg/text.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="  flex items-center w-full   ">
                <Image
                  className=" relativepos "
                  src="/pg/pd.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full  items-center  flex  bg-pg3 bg-contain bg-no-repeat bg-right-bottom  ">
          <div className=" grid grid-cols-12 items-center justify-center  w-full  ">
            <div className="col-span-12   items-start flex  flex-col justify-center h-full w-full pt-10 ">
              <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2">
                <span className="xl:ms-16 ms-3 my-5">Color & Typography </span>
                <div className="  flex items-center  w-60 ">
                  <Image
                    className=" relativepos "
                    src="/pg/text.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <span className="xl:ms-16 ms-3 my-5 text-pgc2 xl:text-7xl text-3xl font-medium lg:py-16">
                Inter
              </span>
              <div className="flex w-full items-start justify-center">
                <div className="flex  lg:flex-row flex-col  items-start justify-between w-11/12">
                  <div className="  flex items-center   lg:w-1/2  w-2/3 order-2 lg:order-1 ">
                    <Image
                      className=" relativepos "
                      src="/pg/colors.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <span className="xl:ms-16 lg:ms-3 my-5 text-pgc2 xl:text-7xl text-3xl font-medium lg:py-16 order-1 lg:order-2">
                    Colors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full h-full  items-center justify-center flex flex-col ">
          <div className="w-full grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex flex-col col-span-12 items-center">
              <div className="flex  items-center   flex-col  w-full mt-10">
                <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2">
                  <span className="xl:ms-16 ms-3 my-5">Wireframe </span>
                  <div className="  flex items-center  w-60 ">
                    <Image
                      className=" relativepos "
                      src="/pg/text.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="flex  items-center  justify-end   pt-10  w-full">
                  <div className="flex  items-center  w-2/5 mb-3  h-full relative ">
                    <Image
                      className="  relativepos4 "
                      src="/pg/wf2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  w-1/2 mb-3  h-full relative   ">
                    <Image
                      className="  relativepos "
                      src="/pg/wf1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  lg:py-10 w-full    ">
            <div className="col-span-12    flex flex-col items-center justify-start h-full w-full lg:pt-10 lg:mt-10">
              <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2 py-10">
                <span className="xl:ms-16 ms-3 my-5">Design Process </span>
                <div className="  flex items-center  w-60 ">
                  <Image
                    className=" relativepos "
                    src="/pg/text.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="  flex items-center w-11/12  ">
                <Image
                  className=" relativepos "
                  src="/pg/dp.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full h-full  items-center justify-center flex flex-col ">
          <div className="grid grid-cols-12 items-start justify-center mb-5 w-full ">
            <div className="flex flex-col col-span-12 items-center">
              <div className="flex  items-center   flex-col  w-full mt-10">
                <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2 lg:py-10">
                  <span className="xl:ms-16 ms-3 my-5">Virtual Design </span>
                  <div className="  flex items-center  w-60 ">
                    <Image
                      className=" relativepos "
                      src="/pg/text.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="flex   w-full items-center justify-center lg:px-20 pt-10">
                  <div className="flex  items-center  w-[45%] w mb-3  relative  ">
                    <Image
                      className="  relativepos3 "
                      src="/pg/vd1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  w-1/2 mb-3  relative  ">
                    <Image
                      className="  relativepos "
                      src="/pg/vd2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="bg-pg flex w-full  py-10 items-center">
                <div className="flex  items-center  mb-3   relative lg:w-1/2 w-2/3  ">
                  <Image
                    className="  relativepos "
                    src="/pg/laptop2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center   mb-3  relative lg:w-1/4   w-1/2  ">
                  <Image
                    className="  relativepos "
                    src="/pg/iphone.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  lg:py-10 w-full    ">
            <div className="col-span-12    flex flex-col items-center justify-start h-full w-full lg:pt-10 lg:mt-10">
              <div className="w-full flex flex-col lg:text-5xl text-3xl font-medium text-pgc2 py-10">
                <span className="xl:ms-16 ms-3 my-5">Usability Testing </span>
                <div className="  flex items-center  w-60 ">
                  <Image
                    className=" relativepos "
                    src="/pg/text.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="  flex items-center w-11/12  ">
                <Image
                  className=" relativepos "
                  src="/pg/ut.png"
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
