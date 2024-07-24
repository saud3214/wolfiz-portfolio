'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Archivo } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Archivo({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function NaeemApparel() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
      >
        <div className="   w-full  items-center justify-center flex flex-col  h-[100vh] bg-gradient-to-r from-[#000080] to-[#00001A]  ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10  w-11/12 ">
            <div className="col-span-12 lg:col-span-6  items-center flex justify-center h-full w-full  text-white">
              <div className=" items-start flex justify-center  w-[80%]  flex-col lg:ps-5  gap-11">
                <div className="  flex items-center ">
                  <Image
                    className=" relativepos w-1/4"
                    src="/na/logo.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>

                <div className="lg:text-6xl text-4xl font-semibold flex flex-wrap">
                  <AnimatedText2 text="Naeem Apparel "></AnimatedText2>
                </div>

                <span className="text-4xl font-medium">UI Case Study</span>
                <div className="items-start flex   w-full  gap-10 justify-start">
                  <span className="text-3xl font-medium ">Tool’s Used</span>
                  <div className="flex gap-4">
                    <Image
                      width={50}
                      height={50}
                      alt="image"
                      src="/csimages/adobe.png"
                      className=""
                    />
                    <Image
                      width={50}
                      height={50}
                      alt="image"
                      src="/csimages/figma.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  lg:col-span-6 items-center justify-end flex-col   gap-3 col-span-12 py-5 lg:py-0 ">
              <div className="w-full  flex items-center  ">
                <Image
                  className=" relativepos "
                  src="/na/laptop.png"
                  alt="Background 1"
                  fill
                  priority
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center  lg:.py-10  w-11/12 ">
            <div className="col-span-12    flex flex-col items-center justify-center h-full w-full  text-white pt-10">
              <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl">
                Project Overview
              </span>
              <div className=" w-44 border-2 my-3 border-[#4580AE]"></div>
              <span className="text-black lg:w-9/12  mt-10 text-xl">
                This document details the operational status Naeem Apparel, a
                premium apparel manufacturing company. Including its potential,
                opportunities, and challenges. This information is an
                introduction for apparel buyers to inform them about the
                potential of working with an efficient, product oriented and
                professional manufacturer that can provide them with all types
                of apparel solutions.
              </span>
            </div>
            <div className="col-span-12    flex flex-col items-start justify-start h-full w-full pt-10 lg:mt-10">
              <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl lg:ps-10">
                Design Process
              </span>
              <div className=" w-44 border-2 my-3 border-[#4580AE] lg:ms-10"></div>
              <div className="w-full  flex items-center lg:mt-10 ">
                <Image
                  className=" relativepos "
                  src="/na/dp.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10  w-11/12 ">
            <div className="col-span-12    flex flex-col items-start justify-start h-full w-full lg:pt-10 lg:mt-10">
              <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl  ">
                Problem Statement
              </span>
              <div className="flex w-full gap-10 pt-10 flex-col lg:flex-row">
                <div className="flex items-center justify-center lg:w-[32%] ">
                  <div className="bg-na text-white rounded-r-3xl rounded-bl-3xl p-10 w-full h-[280px] ">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 text-white rounded-full border border-white font-bold">
                        01
                      </div>
                    </div>
                    <h2 className=" font-semibold mb-2 lg:pt-10 text-2xl">
                      Complex Navigation
                    </h2>
                    <p className="font-medium">
                      If the current website looks outdated or unprofessional,
                      it might not effectively represent the product or brand.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center   lg:w-[32%]  ">
                  <div className="bg-na text-white rounded-r-3xl rounded-bl-3xl p-10 w-full h-[280px] ">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 text-white rounded-full border border-white font-bold">
                        02
                      </div>
                    </div>
                    <h2 className=" font-semibold mb-2 lg:pt-10 text-2xl">
                      Checkout Friction
                    </h2>
                    <p className="font-medium">
                      Complicated and lengthy checkout processes, including
                      multiple steps and mandatory account creation, contribute
                      to high cart abandonment rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:w-[32%] ">
                  <div className="bg-na text-white rounded-r-3xl rounded-bl-3xl p-10 w-full h-[280px] ">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 text-white rounded-full border border-white font-bold">
                        03
                      </div>
                    </div>
                    <h2 className=" font-semibold mb-2 lg:pt-10 text-2xl">
                      Mobile Usability
                    </h2>
                    <p className="font-medium">
                      With the growing number of users shopping via mobile
                      devices, many websites are not fully optimized for mobile
                      use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10  w-11/12 ">
            <div className="col-span-12    flex flex-col items-start justify-start h-full w-full lg:pt-10 lg:mt-10">
              <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl ">
                Solution Statement
              </span>
              <div className="flex w-full gap-10 pt-10 flex-col lg:flex-row">
                <div className="flex items-center justify-center lg:w-[32%] ">
                  <div className="bg-na text-white rounded-r-3xl rounded-bl-3xl p-10 w-full lg:h-[280px] ">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 text-white rounded-full border border-white font-bold">
                        01
                      </div>
                    </div>
                    <h2 className=" font-semibold mb-2 lg:pt-10 text-2xl">
                      Difficult Navigation
                    </h2>
                    <p className="font-medium">
                      Users often struggle with poorly structured navigation
                      systems, making it hard to locate desired products quickly
                      and efficiently. This leads to frustration and a higher
                      likelihood of cart abandonment.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center   lg:w-[32%]  ">
                  <div className="bg-na text-white rounded-r-3xl rounded-bl-3xl p-10 w-full lg:h-[280px] ">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 text-white rounded-full border border-white font-bold">
                        02
                      </div>
                    </div>
                    <h2 className=" font-semibold mb-2 lg:pt-10 lg:text-2xl text-xl">
                      Complicated Checkout Process
                    </h2>
                    <p className="font-medium">
                      Lengthy and complex checkout procedures, including
                      mandatory account creation, deter users from completing
                      their purchases, resulting in high abandonment rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:w-[32%] ">
                  <div className="bg-na text-white rounded-r-3xl rounded-bl-3xl p-10 w-full lg:h-[280px] ">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 text-white rounded-full border border-white font-bold">
                        03
                      </div>
                    </div>
                    <h2 className=" font-semibold mb-2 lg:pt-10 text-2xl">
                      Mobile Compatibility Issues
                    </h2>
                    <p className="font-medium">
                      A significant number of users shop via mobile devices, yet
                      many websites are not fully optimized for mobile browsing,
                      leading to a subpar user experience and lost sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10  w-11/12 ">
            <div className="col-span-12    flex flex-col items-start justify-start h-full w-full lg:pt-10 lg:mt-10">
              <span className="text-na font-bold lg:text-6xl text-3xl ">
                Style Guide
              </span>
              <div className="flex w-full items-center ;lg:justify-end py-5">
                <span className="text-na  font-medium text-3xl ">
                  Typography
                </span>
              </div>
              <div className=" flex flex-col bg-na1 bg-contain bg-center bg-no-repeat items-start justify-start  w-full">
                <span className="text-na  font-medium text-3xl py-5 ">
                  Regular
                </span>
                <span className="text-na  font-medium text-3xl py-5 ">
                  Medium
                </span>
                <span className="text-na  font-medium text-3xl py-5 ">
                  SemiBold
                </span>
              </div>
            </div>

            <div className="col-span-12    flex flex-col items-start justify-start h-full w-full pt-10 lg:mt-10">
              <span className="text-na font-bold text-6xl py-10 ">Colors</span>
              <div className=" flex lg:flex-row flex-col  items-center justify-start  w-full">
                <div className="flex lg:w-2/3  w-full items-start justify-start">
                  <div className=" bg-white  lg:w-2/3 w-full">
                    <table className="w-full text-left ">
                      <thead>
                        <tr className="text-xl ">
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
                            <span className="font-normal">Regular</span>
                          </td>
                          <td className="py-2">
                            <span className="font-normal">20 px</span>
                          </td>
                        </tr>
                        <tr>
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

                <div className="  flex items-center justify-center w-full lg:w-1/2 pt-5 lg:pt-0 ">
                  <Image
                    className=" relativepos "
                    src="/na/color.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10 w-full    ">
            <div className="col-span-12    flex flex-col items-center justify-start h-full w-full lg:pt-10 lg:mt-10">
              <div className="w-11/12 mb-5">
                <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl  ">
                  Wire Frames
                </span>
              </div>
              <div className="  flex items-center w-full   ">
                <Image
                  className=" relativepos "
                  src="/na/wf.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10 w-full    ">
            <div className="col-span-12    flex flex-col items-center justify-start h-full w-full lg:pt-10 lg:mt-10">
              <div className="w-11/12 mb-5">
                <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl  ">
                  Visual Design
                </span>
              </div>
              <div className="  flex items-center w-full  ">
                <Image
                  className=" relativepos "
                  src="/na/vd.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="   w-full  items-center  flex flex-col   ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10 w-11/12    ">
            <div className="col-span-12    flex flex-col items-center justify-start h-full w-full lg:-10 lg:mt-10">
              <div className=" mb-5 w-full text-start">
                <span className="text-[#4580AE] font-bold lg:text-6xl text-3xl  ">
                  Visual Design
                </span>
              </div>
              <div className="  flex items-center lg:w-11/12 py-5 w-full ">
                <Image
                  className=" relativepos "
                  src="/na/testing.png"
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
