'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Nht() {
  return (
    <div
      className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
    >
      <div className="bg-rzfx-bg1 bg-cover bg-center bg-no-repeat   w-full items-center justify-center flex h-[100vh]">
        <div className="grid grid-cols-12 w-full  items-center justify-center ">
          <div className="col-span-12 lg:col-span-3  items-center flex justify-center h-full w-full lg:ps-10">
            <div className=" items-start flex justify-center  w-[80%]  flex-col lg:ps-5  gap-11">
              <span className="text-6xl font-semibold">Rockzfx</span>
              <span className="text-5xl font-medium">
                Forex Trading <br /> Website
              </span>
              <span className="text-4xl font-medium">UI Case Study</span>
              <div className="items-start flex   w-full  gap-5 justify-center">
                <span className="text-3xl font-medium mr-10">Tool’s Used</span>
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
          <div className="col-span-9 w-full h-[90%] items-center justify-center lg:flex hidden  mt-5">
            <Image
              className="relativepos "
              src="/csimages/rzfxbg2.png"
              alt="Background 1"
              layout="fill"
              objectFit="contains" // Ensure the image covers the container without stretching
            />
          </div>
        </div>
      </div>
      <div className="bg-rzfx-bg3 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex ">
        <div className="grid grid-cols-12 w-full ">
          <div className="lg:col-span-6 col-span-12 flex items-start justify-center w-full  ">
            <div className="flex items-start  ps-3 2xl:w-[80%] w-full flex-col">
              <div className="flex flex-col">
                <span className="text-[120px] text-[#D9D8D3]">01</span>
                <span className="text-5xl text-[#22CADB] font-semibold">
                  About Project
                </span>
                <div className="h-1 w-44 border-2 my-3 border-[#22CADB]"></div>
                <span className="text-2xl my-3">
                  A young family man, stuck in the rat race, earned a good
                  salary but still found myself in debt. I decided to change
                  things around. I dabbled in online blogging, multi level
                  marketing, online gambling and buying a selling cars. I done
                  well but it was not something I enjoyed doing all of the time.
                  My time was owned and I wanted to own my time.I found trading
                  at 24 when a friend introduced hyper scalping to me. We used
                  indicators to trade the 1 minute timeframe and would on
                  average catch 3- 10 pips at a time. The adrenaline rush was
                  unex plainable. But it eventually led to blown accounts due to
                  greed.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[120px] text-[#D9D8D3]">02</span>
                <span className="text-5xl text-[#22CADB] font-semibold">
                  Objectives & Goals
                </span>
                <div className="h-1 w-44 border-2 my-3 border-[#22CADB]"></div>
                <div className="flex flex-col lg:flex-row gap-5">
                  <span className="text-2xl my-3 ps-10">
                    <ul className="list-disc">
                      <li> Access to Market Data</li>
                      <li> Trading Tools and Features</li>
                      <li>Security and Reliability</li>
                      <li> Compliance and Transparency</li>
                      <li> User-Friendly Interface</li>
                    </ul>
                  </span>
                  <span className="text-2xl my-3 ps-10">
                    <ul className="list-disc">
                      <li> Access to Market Data</li>
                      <li> Trading Tools and Features</li>
                      <li>Security and Reliability</li>
                      <li> Compliance and Transparency</li>
                      <li> User-Friendly Interface</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 w-full  items-center justify-end lg:flex  mt-5  hidden ">
            <Image
              className="relativepos  "
              src="/csimages/rzfxmobiles.png"
              alt="Background 1"
              fill
              // Ensure the image covers the container without stretching
            />
          </div>
        </div>
      </div>
      <div className="bg-rzfx-bg4 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className="w-[88%] grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="lg:col-span-6 col-span-12 flex items-center justify-start w-full  ">
            <div className="flex flex-col">
              <span className="text-[120px] text-[#D9D8D3]">03</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Problem Statement
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
              <div className="border-b-[10px] border-r-[10px] border-[#22CADB] bg-white w-full rounded-3xl drop-shadow-xl  bg-opacity-5 mt-10">
                <div className="text-xl  bg-white  bg-opacity-40  rounded-2xl  px-5 pt-10 pb-5 gap-10  shadow-xl  flex flex-col lg:flex-row  items-center">
                  <ul className="list-disc pl-10 gap-2 flex flex-col order-2 lg:order-1  ">
                    <li> Limited Access to Information</li>
                    <li> Complexity of Financial Markets</li>
                    <li>Technical Barriers</li>
                    <li>Customer Support and Service</li>
                    <li> Lack of Education and Guidance</li>
                    <li> Regulatory Compliance.  </li>
                    <li> Security Concerns.</li>
                    <li> Customer Support and Service</li>
                  </ul>
                  <div className="flex  lg:w-[40%]  w-5/6   order-1 lg:order-2 ">
                    <Image
                      className=" relativepos "
                      src="/csimages/undraw_access_denied_re_awnf 1.png"
                      alt="Background 1"
                      fill
                      // Ensure the image covers the container without stretching
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 flex items-center justify-start w-full  ">
            <div className="flex flex-col">
              <span className="text-[120px] text-[#D9D8D3] opacity-0 hidden lg:block">
                03
              </span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Solution Statement
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
              <div className="border-l-[10px] border-t-[10px] border-[#22CADB] bg-white w-full rounded-3xl drop-shadow-xl   bg-opacity-5 mt-10">
                <div className="text-xl  bg-white  bg-opacity-40  rounded-2xl  px-5 pt-10 pb-5 gap-5  flex  flex-col lg:flex-row  items-center">
                  <ul className="list-disc pl-10 gap-2 flex flex-col  order-2 lg:order-1 ">
                    <li>Enhanced Market Information Access.</li>
                    <li> Advance Trading Platform.</li>
                    <li>Enhanced Security Measures. </li>
                    <li>Educational Resources.</li>
                    <li> Mobile Optimization.</li>
                    <li> Regulatory Compliance.  </li>
                    <li> Continuous Improvement.</li>
                    <li> Proactive Customer Support</li>
                  </ul>
                  <div className="flex mr-5 lg:w-[40%]  w-5/6  order-1 lg:order-2 ">
                    <Image
                      className=" relativepos "
                      src="/csimages/Group 2.png"
                      alt="Background 1"
                      fill
                      // Ensure the image covers the container without stretching
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[88%] w-full grid grid-cols-12 items-start justify-center  my-10 ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-full">
              <span className="text-[120px] text-[#D9D8D3]">04</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Design Process
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
            </div>
            <div className="flex justify-between w-[80%] ">
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">Empathize</span>
                <ul className="list-disc text-xl">
                  <li>Qualitative Research.</li>
                  <li> Quantitative Research</li>
                  <li> Competitor Analysis</li>
                </ul>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">Ideate</span>
                <ul className="list-disc text-xl">
                  <li>User Journey Map.</li>
                  <li>Story board</li>
                  <li>User Flow</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">Prototype</span>
                <ul className="list-disc text-xl">
                  <li>Low fi wireframes</li>
                  <li>Mid fi wireframe</li>
                  <li> high fi wireframe</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between w-[85%] mt-10 ">
              <div className="lg:flex hidden justify-between w-full">
                <div className="flex  items-center w-60 h-60 ">
                  <Image
                    className=" relativepos "
                    src="/csimages/dp1.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>

                <div className="flex items-center w-60 h-60">
                  <Image
                    className=" relativepos "
                    src="/csimages/dp2.png"
                    alt="Background 1"
                    fill
                    objectFit="contains"
                    // Ensure the image covers the container without stretching
                  />
                </div>
                <div className="flex items-center w-60 h-60">
                  <Image
                    className=" relativepos "
                    src="/csimages/dp3.png"
                    alt="Background 1"
                    fill
                    objectFit="contains"
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </div>
              <div className="lg:flex hidden justify-around w-full">
                <div className="flex  items-center w-60 h-60 ">
                  <Image
                    className=" relativepos "
                    src="/csimages/dp4.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>

                <div className="lg:flex hidden items-center w-60 h-60  ">
                  <Image
                    className=" relativepos "
                    src="/csimages/dp5.png"
                    alt="Background 1"
                    fill
                    objectFit="contains"
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </div>
              <div className="flex justify-around w-full">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">Define</span>
                  <ul className="list-disc text-xl">
                    <li>User Persona</li>
                    <li>Empathy Map</li>
                    <li>Affinity Maping </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">Test</span>
                  <ul className="list-disc text-xl">
                    <li>Usability Testing</li>
                    <li>Feedbacks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-rzfx-bg5 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className="w-[88%] grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-full ">
              <span className="text-[120px] text-[#D9D8D3]">05</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Typography & Colors
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
            </div>
            <div className="lg:p-20 flex flex-col md:flex-row w-full items-center justify-center">
              <div className="flex items-center flex-col justify-center  ">
                <Image
                  className=" relativepos w-64 "
                  src="/csimages/Patterns.png"
                  alt="Background 1"
                  fill
                  objectFit="contains"
                />
                <span className="font-bold text-5xl text-[#22CADB]">
                  Urbanist
                </span>
              </div>
              <div className="flex lg:w-2/3  w-full items-center justify-center">
                <div className=" bg-white  lg:w-2/3 w-full">
                  <table className="w-full text-left ">
                    <thead>
                      <tr className="text-xl ">
                        <th className="font-medium text-gray-500">Name</th>
                        <th className="font-medium text-gray-500">Font size</th>
                        <th className="font-medium text-gray-500">Font size</th>
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
            <div className=" h-52 w-full flex justify-between">
              <div className="bg-[#22CADB]  rounded-xl lg:w-[30%] w-[40%] flex items-center justify-center text-white h-full font-semibold lg:text-3xl text-xl">
                22CADB <br /> Primary Color
              </div>
              <div className="bg-[#E6F8FA]  rounded-xl lg:w-[5%] w-[9%] flex items-center justify-center text-black h-full  font-semibold lg:text-3xl text-xl">
                <span className="-rotate-90">E6F8FA </span>
              </div>
              <div className="bg-[#000]  rounded-xl lg:w-[5%] w-[9%] flex items-center justify-center text-white h-full  font-semibold lg:text-3xl text-xl">
                <span className="-rotate-90">00000 </span>
              </div>
              <div className="bg-[#222]  rounded-xl lg:w-[5%] w-[9%] flex items-center justify-center text-white h-full  font-semibold lg:text-3xl text-xl">
                <span className="-rotate-90">22222 </span>
              </div>
              <div className="bg-[#AEAEAE]  rounded-xl lg:w-[5%] w-[9%] flex items-center justify-center text-white h-full  font-semibold lg:text-3xl text-xl">
                <span className="-rotate-90">AEAEAE </span>
              </div>
              <div className="bg-[#616161]  rounded-xl lg:w-[5%] w-[9%] flex items-center justify-center text-white h-full  font-semibold lg:text-3xl text-xl">
                <span className="-rotate-90">616161 </span>
              </div>
              <div className="bg-[#2C2C2C]  rounded-xl lg:w-[5%] w-[9%] flex items-center justify-center text-white h-full  font-semibold lg:text-3xl text-xl">
                <span className="-rotate-90">2C2C2C </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-rzfx-bg6 bg-cover bg-center bg-no-repeat   w-full h-full  items-center justify-center flex flex-col ">
        <div className="w-[88%] grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-full ">
              <span className="text-[120px] text-[#D9D8D3]">06</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Project scheduling
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full ">
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

      <div className="w-full  items-center justify-center flex flex-col h-full ">
        <div className="w-[100%] grid grid-cols-12 items-start justify-center  ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-[88%] ">
              <span className="text-[120px] text-[#D9D8D3]">07</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Wire Frames
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
            </div>

            <div className="flex items-center justify-center  w-full">
              <div className="flex items-center w-full   ">
                <Image
                  className=" relativepos "
                  src="/csimages/wf1.png"
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

      <div className="bg-rzfx-bg7 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className="w-[100%] grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-3">
            <div className="flex items-center  pt-20   ">
              <Image
                className=" relativepos "
                src="/csimages/wf2.png"
                alt="Background 1"
                fill
                objectFit="contains"
                // Ensure the image covers the container without stretching
              />
            </div>
            <div className="flex items-center    ">
              <Image
                className=" relativepos "
                src="/csimages/wf2.png"
                alt="Background 1"
                fill
                objectFit="contains"
                // Ensure the image covers the container without stretching
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  items-center justify-center flex flex-col ">
        <div className="w-[100%] grid grid-cols-12 items-start justify-center  ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-[88%] ">
              <span className="text-[120px] text-[#D9D8D3]">08</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Visual Design
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
            </div>

            <div className="flex items-center justify-center  w-full">
              <div className="flex items-center w-full   ">
                <Image
                  className=" relativepos "
                  src="/csimages/Overview.png"
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
      <div className="bg-rzfx-bg8 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className="w-[100%] grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-3">
            <div className="flex items-center  pt-20   ">
              <Image
                className=" relativepos "
                src="/csimages/vd2.png"
                alt="Background 1"
                fill
                objectFit="contains"
                // Ensure the image covers the container without stretching
              />
            </div>
          </div>
        </div>
      </div>

      <div className="  w-full  items-center justify-center flex flex-col h-full ">
        <div className="w-[100%] grid grid-cols-12 items-start justify-center  ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-[88%] ">
              <span className="text-[120px] text-[#D9D8D3]">09</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Mock Up
              </span>
              <div className="h-1 w-44 border-2 my-3 mb-10 border-[#22CADB]"></div>
            </div>

            <div className="flex items-center justify-center  w-full bg-rzfx-bg9 bg-cover bg-center bg-no-repeat p-10 flex-col md:flex-row">
              <div className="flex items-center    ">
                <Image
                  className=" relativepos "
                  src="/csimages/iphonerzfx.png"
                  alt="Background 1"
                  fill
                  objectFit="contains"
                  // Ensure the image covers the container without stretching
                />
              </div>
              <div className="flex items-center    ">
                <Image
                  className=" relativepos "
                  src="/csimages/laptopmu.png"
                  alt="Background 1"
                  fill
                  objectFit="contains"
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
            <div className="flex items-center justify-center  w-full bg-rzfx-bg10 bg-cover bg-center bg-no-repeat p-10 flex-col md:flex-row gap-10">
              <div className="flex items-center  lg:w-[20%]  w-1/2   ">
                <Image
                  className=" relativepos  w-full"
                  src="/csimages/mu1.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center  lg:w-[20%]  w-1/2  lg:pb-20 lg:mb-20  ">
                <Image
                  className=" relativepos w-full"
                  src="/csimages/mu2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center lg:w-[20%]  w-1/2  ">
                <Image
                  className=" relativepos w-full "
                  src="/csimages/mu3.png"
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

      <div className="  w-full  items-center justify-center flex flex-col h-full py-10 ">
        <div className="w-[100%] grid grid-cols-12 items-start justify-center  ">
          <div className="flex flex-col col-span-12 items-center">
            <div className="flex flex-col items-start justify-start w-[88%] ">
              <span className="text-[120px] text-[#D9D8D3]">10</span>
              <span className="text-5xl text-[#22CADB] font-semibold">
                Testing
              </span>
              <div className="h-1 w-44 border-2 my-3 border-[#22CADB]"></div>
            </div>

            <div>
              <div className="flex items-center  pt-20   ">
                <Image
                  className=" relativepos "
                  src="/csimages/step10.png"
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
    </div>
  );
}
