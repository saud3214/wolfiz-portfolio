'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Bestcare() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full  flex flex-col items-center justify-center p-5  ${urbanist.className}`}
      >
        <div className="grid grid-cols-12 w-full   items-start justify-center   bg-bc1 bg-cover bg-center bg-no-repeat rounded-3xl h-[250vh]   ">
          <div className="col-span-12 w-full flex flex-col  items-center justify-center ">
            <div className="flex items-center pt-20 w-20  ">
              <Image
                className=" relativepos "
                src="/bc/logo.png"
                alt="Background 1"
                fill
              />
            </div>

            <span className=" lg:text-[19vw] text-[15vw] text-3xl font-semibold  lg:h-96 h-60 text-center flex items-center ht text-transparent  ">
              <AnimatedText2 text="BESTCARE"></AnimatedText2>
            </span>
            <span className="text-4xl text-white  xl:w-1/3 text-center pt-10">
              A Digital Platform That Aims To Provide Users a Wellbeing &
              Tailored Support Services
            </span>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-center justify-center col-span-12  ">
              <div className="flex items-start flex-col">
                <span className="text-3xl text-[#6A7B95]">
                  About the BestCare
                </span>
                <span className="font-bold lg:text-6xl text-[#0066A5] pt-10  text-2xl">
                  Bestcare24, a premier home care provider in Southampton,
                  offers personalized services for individuals aged 18 and
                  above, with high-quality care plans tailored to each clients
                  needs and preferences.
                </span>
              </div>

              <div className="flex items-center pt-20  justify-center w-3/4">
                <Image
                  className=" relativepos "
                  src="/bc/img.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex py-10  bg-bc2 bg-cover bg-center bg-no-repeat rounded-3xl    ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-11/12 items-start justify-center col-span-12  text-white ">
              <span className="text-5xl font-bold pt-10">
                Problem Statatement
              </span>
              <span className="text-3xl py-10">
                The inadequate representation of our product is caused by the
                outdated design and lack of essential features on our current
                website, resulting in hindered user engagement and reduced sales
                conversions. This necessitates a redesign of the website to
                enhance user experience, align with our brand image, and drive
                business growth
              </span>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  text-[#0066A5] ">
              <span className="text-5xl font-bold pt-10">
                Solution Statement
              </span>
              <span className="text-3xl py-10 text-[#6A7B95]">
                The inadequate representation of our product is caused by the
                outdated design and lack of essential features on our current
                website, resulting in hindered user engagement and reduced sales
                conversions. This necessitates a redesign of the website to
                enhance user experience, align with our brand image, and drive
                business growth
              </span>
              <div className="lg:grid flex flex-col  grid-cols-12  w-full items-center justify-center gap-5 py-10">
                <div className="border-4 border-[#0066A5] rounded-xl p-5 flex flex-col pt-10 col-span-3  h-full ">
                  <div className="w-10 h-10 rounded-full  border border-[#0066A5] font-bold items-center justify-center flex">
                    <span>01</span>
                  </div>
                  <span className="font-semibold text-2xl py-10">
                    Outdated Design
                  </span>

                  <span className="text-[#6A7B95] pb-10">
                    If the current website looks outdated or unprofessional, it
                    might not effectively represent the product or brand.
                  </span>
                </div>

                <div className="border-4 border-[#0066A5] rounded-xl p-5 flex flex-col pt-10 col-span-3 h-full">
                  <div className="w-10 h-10 rounded-full  border border-[#0066A5] font-bold items-center justify-center flex">
                    <span>02</span>
                  </div>
                  <span className="font-semibold text-2xl py-10">
                    Improved Functionality
                  </span>

                  <span className="text-[#6A7B95] pb-10">
                    The current website lacks certain features or
                    functionalities that are now essential for better user
                    experience or e-commerce capabilities.
                  </span>
                </div>

                <div className="border-4 border-[#0066A5] rounded-xl p-5 flex flex-col pt-10 col-span-3 h-full">
                  <div className="w-10 h-10 rounded-full  border border-[#0066A5] font-bold items-center justify-center flex">
                    <span>03</span>
                  </div>
                  <span className="font-semibold text-2xl py-10">
                    Mobile Responsiveness
                  </span>

                  <span className="text-[#6A7B95] pb-10">
                    With the increasing use of mobile devices, a new website
                    might be necessary to ensure that the product is easily
                    accessible and usable on smartphones and tablets.
                  </span>
                </div>

                <div className="border-4 border-[#0066A5] rounded-xl p-5 flex flex-col pt-10 col-span-3 h-full">
                  <div className="w-10 h-10 rounded-full  border border-[#0066A5] font-bold items-center justify-center flex">
                    <span>03</span>
                  </div>
                  <span className="font-semibold text-2xl py-10">
                    Better Content Management
                  </span>

                  <span className="text-[#6A7B95] pb-10">
                    The current website lacks certain features or
                    functionalities that are now essential for better user
                    experience or e-commerce capabilities.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  text-[#0066A5] ">
              <span className="text-5xl font-bold">Design Process</span>

              <div className="flex items-center justify-between pt-10  w-full gap-5 ">
                <div className="flex items-center  w-1/2">
                  <Image
                    className=" relativepos "
                    src="/bc/dp1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center   w-1/2">
                  <Image
                    className=" relativepos "
                    src="/bc/dp2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  text-[#0066A5] ">
              <span className="text-5xl font-bold pt-10">
                Colors & Typography
              </span>
              <div className="flex flex-col w-full items-center justify-center py-10">
                <div className="flex items-center  w-9/12">
                  <Image
                    className=" relativepos "
                    src="/bc/p.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex w-full items-center justify-between py-10">
                  <div className="flex items-center w-1/4 ">
                    <Image
                      className=" relativepos "
                      src="/bc/aa.png"
                      alt="Background 1"
                      fill
                    />
                  </div>

                  <div className="flex lg:w-2/3  w-full items-center justify-center">
                    <div className=" bg-white  lg:w-2/3 w-full">
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
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                  <div className="flex items-center justify-center flex-col gap-5">
                    <div className="w-80 h-80 bg-[#13568F] rounded-full"></div>
                    <span className="text-[#828282]">13568F</span>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-5">
                    <div className="w-80 h-80 bg-[#EE7421] rounded-full"></div>
                    <span className="text-[#828282]">EE7421</span>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-5">
                    <div className="w-80 h-80 bg-[#D9D9D9] rounded-full"></div>
                    <span className="text-[#828282]"> D9D9D9</span>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-5">
                    <div className="w-80 h-80 bg-[#5DA5E2] rounded-full"></div>
                    <span className="text-[#828282]">5DA5E2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex lg:pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  text-[#0066A5] ">
              <span className="text-5xl font-bold pt-10">Wire Frames</span>
              <div className="w-full flex items-center justify-center">
                <div className=" flex w-full items-center justify-center mt-10 gap-5">
                  <div className="flex items-center  mt-20 lg:w-[45%] w-1/2 ">
                    <Image
                      className=" relativepos "
                      src="/bc/wf.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex items-center lg:w-[45%] w-1/2 ">
                    <Image
                      className=" relativepos "
                      src="/bc/wf.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex lg:pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  text-[#0066A5] ">
              <span className="text-5xl font-bold py-10">Virtual Design</span>
              <div className="w-full flex items-center justify-center">
                <div className="flex items-center  lg:w-3/4 w-full  ">
                  <Image
                    className=" relativepos "
                    src="/bc/vd.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-start justify-center flex lg:pt-10   bg-bc3 bg-cover bg-center bg-no-repeat rounded-3xl mt-10">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  ">
              <span className="text-5xl font-bold py-10 text-white">
                Mock Up
              </span>
              <div className="w-full flex items-center justify-center">
                <div className="flex items-center  lg:w-3/4 w-10/12  ">
                  <Image
                    className=" relativepos "
                    src="/bc/iphone.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex lg:pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-start justify-center col-span-12  ">
              <span className="text-5xl font-bold py-10  text-[#0066A5]">
                Testing
              </span>
              <div className="w-full flex items-center justify-center">
                <div className="flex items-center  lg:w-11/12  w-full ">
                  <Image
                    className=" relativepos "
                    src="/bc/t.png"
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
