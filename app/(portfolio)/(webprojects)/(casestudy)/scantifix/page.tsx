'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Scantifix() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col    ${urbanist.className} `}
      >
        <div className=" bg-sf1 bg-cover bg-center bg-no-repeat  w-full  items-center justify-center flex flex-col  h-[100vh] ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10  w-full ">
            <div className="flex  col-span-5 items-center justify-end flex-col   gap-3 w-full h-full ">
              <div className="flex flex-col w-1/2 items-start justify-start gap-4">
                <div className="flex items-center justify-center gap-2  ">
                  <Image
                    className=" relativepos  "
                    src="/scantifix/logo.png"
                    alt="Background 1"
                    fill
                  />
                  <span className="gradient-text font-semibold text-5xl">
                    Scantifix
                  </span>
                </div>
                <span className=" text-gray-400">Visit Store</span>
                <span className="gradient-text2 font-bold text-4xl">
                  Case Study
                </span>
              </div>
            </div>
            <div className="flex  col-span-7 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center  w-4/5     ">
                <Image
                  className=" relativepos  "
                  src="/scantifix/laptop1.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col bg-sf2 bg-contain bg-left-top bg-no-repeat   ">
          <div className=" grid grid-cols-12 items-start justify-center w-[90%]  py-10  ">
            <div className="flex  col-span-6 items-start  flex-col   gap-10  h-full ">
              <div className="flex flex-col items-start justify-start gap-4 py-10 h-1/2">
                <div className="flex items-start justify-start  flex-col   t ">
                  <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                    01
                  </span>
                  <span className="font-bold text-6xl text-[#2D2D2D]">
                    About Project
                  </span>
                </div>
                <span className=" text-gray-400 lg:pr-20">
                  Youll discover the BARE minimum of preservatives, if any at
                  all. Our products are suitable even for the most chemically
                  sensitive individuals. Were dedicated to revolutionizing
                  cosmetics through cutting-edge technology and forward-thinking
                  R&D, coupled with third-party testing.
                </span>
              </div>

              <div className="flex flex-col items-start justify-start gap-4 py-10">
                <div className="flex items-center justify-center gap-2  ">
                  <div className="flex items-start justify-start  flex-col   t ">
                    <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                      02
                    </span>
                    <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1">
                      <div className="h-10 w-1 bg-pink-300"></div>
                      Objective & Goals
                    </span>
                  </div>
                </div>
                <span className=" text-gray-400 flex gap-5 ">
                  <ul className="list-disc text-xl ps-5">
                    <li>Access to Market Data</li>
                    <li>Trading Tools and Features</li>
                    <li>Security and Reliability</li>
                    <li>Compliance and Transparency</li>
                    <li>User-Friendly Interface.</li>
                  </ul>
                  <ul className="list-disc text-xl ps-5">
                    <li>Access to Market Data</li>
                    <li>Trading Tools and Features</li>
                    <li>Security and Reliability</li>
                    <li>Compliance and Transparency</li>
                    <li>User-Friendly Interface.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="flex  col-span-6 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center    w-10/12   ">
                <Image
                  className=" relativepos  "
                  src="/scantifix/iphone.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col bg-sf3 bg-cover bg-center bg-no-repeat   ">
          <div className=" grid grid-cols-12 items-center justify-center w-[90%]  py-10  ">
            <div className="flex  col-span-6 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center    2xl:w-2/3 w-3/4   ">
                <Image
                  className=" relativepos  "
                  src="/scantifix/step3.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>

            <div className="flex  col-span-6 items-start  flex-col   gap-10  h-full ">
              <div className="flex flex-col items-start justify-start gap-4 py-10 h-1/2">
                <div className="flex items-start justify-start  flex-col   t ">
                  <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                    03
                  </span>
                  <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                    <div className="h-10 w-1 bg-pink-300"></div>
                    Problem statement
                  </span>
                </div>
                <span className=" text-gray-400 lg:w-10/12 2xl:pr-5">
                  Many online stores face challenges in providing a seamless and
                  personalized shopping experience to customers, leading to
                  lower conversion rates and customer satisfaction.Many online
                  stores face challenges in providing a seamless and
                  personalized shopping experience to customers, leading to
                  lower conversion rates and customer satisfaction.
                </span>
              </div>

              <div className="flex flex-col items-start justify-start gap-4 py-10">
                <div className="flex items-center justify-center gap-2  ">
                  <div className="flex items-start justify-start  flex-col    ">
                    <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 pt-20">
                      <div className="h-10 w-1 bg-pink-300"></div>
                      Solution statement
                    </span>
                  </div>
                </div>
                <span className=" text-gray-400 lg:w-10/12 2xl:pr-5">
                  Additionally, our solution includes implementing an efficient
                  inventory management system with automated order fulfillment
                  processes, reducing errors and improving order accuracy. By
                  leveraging data analytics and machine learning, we will also
                  offer personalized product recommendations and targeted
                  marketing campaigns, enhancing the overall shopping experience
                  and driving customer loyalty and repeat purchases.
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full col-span-12">
              <div className="flex items-start justify-start  flex-col   w-full ">
                <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                  04
                </span>
                <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                  <div className="h-10 w-1 bg-pink-300"></div>
                  Design Process
                </span>
              </div>
              <div className="flex  items-center py-10     ">
                <Image
                  className=" relativepos  "
                  src="/scantifix/dp.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col bg-sf4 bg-contain bg-right-top bg-no-repeat   ">
          <div className=" grid grid-cols-12 items-center justify-center w-[90%]  py-10  ">
            <div className="flex  col-span-12 items-center justify-center flex-col  gap-3">
              <div className="flex items-start justify-start  flex-col   w-full ">
                <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                  05
                </span>
                <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                  <div className="h-10 w-1 bg-pink-300"></div>
                  Colors & Typography
                </span>
              </div>

              <div className="flex  w-10/12 items-center justify-start gap-10 mt-10">
                <span className="font-bold text-7xl ">Urbanist</span>
                <div className="flex  items-center    ">
                  <Image
                    className=" relativepos  "
                    src="/scantifix/aa.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>

              <div className="flex items-center justify-start w-full py-10">
                <div className="flex lg:w-2/3  w-full items-center justify-center">
                  <div className="   lg:w-2/3 w-full">
                    <table className="w-full text-left ">
                      <thead>
                        <tr className="text-xl ">
                          <th className="font-medium text-gray-500">Name</th>
                          <th className="font-medium text-gray-500">
                            Font size
                          </th>
                          <th className="font-medium text-gray-500">
                            Font size
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2">
                            <span className="text-cyan-500 font-bold text-5xl">
                              Heading 1
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              Bold
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              80 px
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">
                            <span className="text-cyan-500 font-semibold text-4xl">
                              Heading 2
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              Semi Bold
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              64 px
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">
                            <span className="text-cyan-500 font-semibold text-3xl">
                              Heading 3
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              Semi Bold
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              36 px
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">
                            <span className="text-cyan-500 font-semibold text-2xl">
                              Heading 4
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              Semi Bold
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-semibold text-gray-500">
                              32 px
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">
                            <span className="text-cyan-500 font-normal text-xl">
                              Heading 5
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-normal">Regular</span>
                          </td>
                          <td className="py-2">
                            <span className="font-normal">20 px</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">
                            <span className="text-cyan-500 font-light text-lg">
                              Heading 6
                            </span>
                          </td>
                          <td className="py-2">
                            <span className="font-light">Light</span>
                          </td>
                          <td className="py-2">
                            <span className="font-light">16 px</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex  items-center    ">
                  <Image
                    className=" relativepos  "
                    src="/scantifix/color.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sf5 bg-contain bg-right-bottom bg-no-repeat   w-full h-full  items-center justify-center flex flex-col ">
          <div className="w-[88%] grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex flex-col col-span-12 items-center">
              <div className="flex items-start justify-start  flex-col   w-full ">
                <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                  06
                </span>
                <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                  <div className="h-10 w-1 bg-pink-300"></div>
                  Project Timeline
                </span>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full py-10 ">
                <div className="flex items-center lg:w-1/2  w-11/12 ">
                  <Image
                    className=" relativepos "
                    src="/csimages/ps1.png"
                    alt="Background 1"
                    fill
                    objectFit="contains"
                    // Ensure the image covers the container without stretching
                  />
                </div>
                <div className="flex items-center lg:w-1/2  w-11/12 ">
                  <Image
                    className=" relativepos "
                    src="/csimages/ps2.png"
                    alt="Background 1"
                    fill
                    objectFit="contains"
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sf6 bg-contain bg-right-bottom bg-no-repeat   w-full h-full  items-center justify-center flex flex-col ">
          <div className="w-[88%] grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex flex-col col-span-12 items-center">
              <div className="flex  items-center   flex-col  w-full mt-10">
                <div className="flex items-start justify-start  flex-col   w-full ">
                  <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                    07
                  </span>
                  <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                    <div className="h-10 w-1 bg-pink-300"></div>
                    Wire Frames
                  </span>
                </div>
                <div className="flex w-full items-center justify-center px-20 pt-10">
                  <div className="flex  items-center  w-1/2 mb-3  h-full relative ">
                    <Image
                      className="  relativepos "
                      src="/scantifix/wf1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  w-1/2 mb-3  h-full relative  ">
                    <Image
                      className="  relativepos2 "
                      src="/scantifix/wf2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  items-center justify-center flex flex-col h-full ">
          <div className="w-[100%] grid grid-cols-12 items-start justify-center  ">
            <div className="flex flex-col col-span-12 items-center">
              <div className="flex items-start justify-start  flex-col   w-[88%] ">
                <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                  08
                </span>
                <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                  <div className="h-10 w-1 bg-pink-300"></div>
                  Virtual Design
                </span>
              </div>
              <div className="flex items-center justify-center  w-full">
                <div className="flex items-center w-full   ">
                  <Image
                    className=" relativepos "
                    src="/scantifix/vd.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sf7 bg-contain bg-bottom bg-no-repeat   w-full  items-center justify-center flex flex-col ">
          <div className="w-full grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex items-center  pt-20 w-[45%]   ">
                <Image
                  className=" relativepos "
                  src="/scantifix/vd2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="lg:flex items-center  hidden  w-[45%]   ">
                <Image
                  className=" relativepos "
                  src="/scantifix/vd3.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sf8 bg-contain bg-left-top bg-no-repeat   w-full  items-center justify-center flex flex-col pt-10 ">
          <div className="w-full grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col   gap-3  w-full">
              <div className="flex items-start justify-start  flex-col   w-[88%] ">
                <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                  09
                </span>
                <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                  <div className="h-10 w-1 bg-pink-300"></div>
                  Mockup
                </span>
              </div>

              <div className="lg:flex items-center  w-1/2     ">
                <Image
                  className=" relativepos "
                  src="/scantifix/iphone2.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
              <div className=" flex items-center justify-start w-full">
                <div className="lg:flex items-center   w-10/12     ">
                  <Image
                    className=" relativepos "
                    src="/scantifix/laptop2.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sf8 bg-contain bg-left-top bg-no-repeat   w-full  items-center justify-center flex flex-col pt-10 ">
          <div className="w-full grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col   gap-3  w-full">
              <div className="flex items-start justify-start  flex-col   w-[88%] ">
                <span className=" font-bold text-9xl gradient-text3 leading-[95px]">
                  10
                </span>
                <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1 ">
                  <div className="h-10 w-1 bg-pink-300"></div>
                  Testing
                </span>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 py-10">
                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#F9E96E]  to-[#ED6BF8] flex items-center justify-center shadow-lg">
                  <p className="text-center text-gray-800 font-medium text-3xl px-4">
                    Test Planning & Control
                  </p>
                </div>
                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#F9E96E]  to-[#ED6BF8] flex items-center justify-center shadow-lg">
                  <p className="text-center text-gray-800 font-medium text-3xl px-4">
                    Test Analysis & Design
                  </p>
                </div>
                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#F9E96E]  to-[#ED6BF8] flex items-center justify-center shadow-lg">
                  <p className="text-center text-gray-800 font-medium text-3xl px-4">
                    Test Implement& Execution
                  </p>
                </div>
                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#F9E96E]  to-[#ED6BF8] flex items-center justify-center shadow-lg">
                  <p className="text-center text-gray-800 font-medium text-3xl px-4">
                    Evaluate Exit Criteria & Reporting
                  </p>
                </div>

                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#F9E96E]  to-[#ED6BF8] flex items-center justify-center shadow-lg">
                  <p className="text-center text-gray-800 font-medium text-3xl px-4">
                    Test Closure Activities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
