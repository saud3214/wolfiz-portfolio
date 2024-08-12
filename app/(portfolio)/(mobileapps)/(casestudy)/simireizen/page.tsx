'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Lexend } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  simiReizen,
  setupSvgInteractions,
  setupScrollAnimation,
  ColorBlocks,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import ParallaxWrapper from '@/app/components/cards';
import useSmoothScroll from '@/app/components/ss';
import {
  RevealOnScroll,
  RevealOnScrollX,
  RevealOnScrollLeft,
  RevealOnScrollLeftText,
  RevealOnScrollLeftImage,
  RevealOnScrollXImage,
} from '@/app/components/revealelement';

const urbanist = Lexend({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600'],
});

export default function Simireizen() {
  useSmoothScroll();
  useEffect(() => {
    simiReizen();
    setupSvgInteractions();
    setupScrollAnimation();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex ]   ${urbanist.className}`}
      >
        <div className="grid grid-cols-12 w-full  items-center justify-center   ">
          <div className="col-span-12 items-center justify-center flex ">
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="h-[100vh] bg-srbg1 bg-top bg-cover bg-no-repeat  p-10 flex flex-col  w-full justify-between items-center content1  ">
                <div className="w-full items-center justify-start flex flex-col text-white pt-5 gap-3">
                  <div className="flex items-center  relative      ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sr/logo.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <span className="text-6xl text-white font-semibold">
                    Simi Reizen
                  </span>
                  <span className="text-sm font-medium w-1/2 2xl:w-1/3 text-center 2xl:px-10">
                    Simi Reizen is a specialized travel agency offering
                    adventure and group travel experiences for young adults.
                  </span>
                </div>

                <div className="w-11/12 items-center justify-between flex rounded-3xl 2xl:pb-10  pb-10  relative ">
                  <div className="bg-white/30 backdrop-blur-sm 2xl:w-96 w-80 flex items-center justify-center text-center gap-7 flex-col  text-white 2xl:p-10 p-5 rounded-3xl">
                    <div className="flex items-center  relative  w-14    ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/icon1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-sm font-medium ">
                      Our solution streamlined trip booking, making it quick and
                      effortless for users.
                    </span>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm 2xl:w-96 w-80 flex items-center justify-center text-center gap-7 flex-col  text-white 2xl:p-10 p-5 rounded-3xl">
                    <div className="flex items-center  relative  w-14    ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/icon2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-sm font-medium ">
                      Our solution streamlined trip booking, making it quick and
                      effortless for users.
                    </span>
                  </div>
                  <div className="absolute w-full 2xl:top-[-60%]   xl:top-[-20%] z-10">
                    <div className=" absolute  left-[38%]    w-1/4  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/iPhone.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-end flex flex-col  bg-srbg3 bg-cover bg-top   bg-no-repeat relative h-full">
                <div className="h-96   "></div>
                <div className="w-11/12 items-center justify-center flex flex-col text-center gap-5  p-10 mt-20">
                  <span className="text-6xl uppercase font-semibold">
                    welcome
                  </span>
                  <span className="w-1/2 text-xl">
                    Simi Reizen, a leading travel agency known for its adventure
                    trips and unique travel experiences, aimed to enhance its
                    digital presence by launching a dedicated mobile app. The
                    goal was to provide a seamless, user-friendly interface for
                    booking trips, managing itineraries, and accessing travel
                    information on the go. <br></br> <br></br> Our task was to
                    design a UI/UX that would meet these requirements while
                    embodying the spirit of adventure and exploration that
                    defines Simi Reizen.
                  </span>
                </div>
                <div className=" w-11/12 grid grid-cols-12 items-center justify-center py-10 h-full">
                  <div className="col-span-3 items-end justify-center h-full flex ">
                    <div className=" flex items-center w-7/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/Component 8.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-end justify-end h-full">
                    <div className=" flex items-center  w-full  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/iphone2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>

                  <div className="col-span-3 items-center justify-center flex  ">
                    <div className=" flex items-center w-7/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/Component 8.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>

                <div className="w-11/12  grid grid-cols-12  items-center  ">
                  <div className="col-span-4 ">
                    <div className=" flex items-center w-11/12   ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/iPhone3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-8 flex flex-col items-start justify-center ">
                    <div className="p-8 rounded-lg  mx-auto">
                      <h2 className="text-xl font-medium mb-2 ">
                        Problem Statement
                      </h2>
                      <h1 className="text-[3vw] font-bold  2xl:mb-8 mb-2">
                        Let’s go deeper with places and routes
                      </h1>
                      <p className=" 2xl:mb-6 mb-2 text-xl font-medium">
                        Simi Reizen, a renowned adventure travel agency,
                        recognized the need to modernize its customer engagement
                        and booking processes.
                        <br></br> <br></br>Users faced difficulties navigating
                        the website, booking trips, and managing their
                        itineraries, which resulted in a suboptimal user
                        experience.
                      </p>

                      <h3 className="2xl:text-4xl text-2xl font-medium mb-4">
                        Problem Include
                      </h3>

                      <div className="flex gap-10 items-center">
                        <div className="flex gap-3 items-center">
                          <div className=" flex items-center  ">
                            <Image
                              className=" relativepos "
                              src="/mobileapps/sr/location.png"
                              alt="Background 1"
                              fill
                            />
                          </div>
                          <h4 className="font-medium 2xl:text-2xl text-xl">
                            Navigating The Website
                          </h4>
                        </div>
                        <div className="flex gap-3 items-center">
                          <div className=" flex items-center  ">
                            <Image
                              className=" relativepos "
                              src="/mobileapps/sr/clickicon.png"
                              alt="Background 1"
                              fill
                            />
                          </div>
                          <h4 className="font-medium 2xl:text-2xl text-xl">
                            Booking Trips
                          </h4>
                        </div>
                        <div className="flex gap-3 items-center">
                          <div className=" flex items-center  ">
                            <Image
                              className=" relativepos "
                              src="/mobileapps/sr/clickicon.png"
                              alt="Background 1"
                              fill
                            />
                          </div>
                          <h4 className="font-medium 2xl:text-2xl text-xl">
                            Need For Modernization
                          </h4>
                        </div>
                      </div>
                      <div className="flex gap-5 2xl:pt-10 pt-5 w-full items-center justify-between">
                        <div className=" flex items-center   ">
                          <Image
                            className=" relativepos "
                            src="/mobileapps/sr/Frame 6.png"
                            alt="Background 1"
                            fill
                          />
                        </div>

                        <div className=" flex items-center  ">
                          <Image
                            className=" relativepos "
                            src="/mobileapps/sr/Frame 6 (1).png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-11/12  grid grid-cols-12  items-start justify-center   pb-10 ps-10 svgcontainer">
                  <div className="col-span-12 items-center justify-center text-center flex flex-col relative -mb-20">
                    <h2 className="text-3xl font-medium mb-2 ">
                      Design Process
                    </h2>
                    <h1 className="text-[3vw] font-bold w-1/2">
                      Crafting an Adventure Ready Experience
                    </h1>
                  </div>
                  <div className="col-span-3 items-start justify-center flex flex-col p-5 gap-10">
                    <div className="box box1">
                      <div className="svg">
                        <svg
                          width="286"
                          height="309"
                          viewBox="0 0 286 309"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_135_5262)">
                            <path
                              d="M83.5754 121.596L64.5767 69.4182L74.4505 71.4044L106.908 110.03L83.5754 121.596Z"
                              fill="#A2A2A3"
                            />
                            <path
                              d="M131.915 80.387L13.9481 181.343C8.40246 186.092 9.55225 194.966 16.1255 198.147L240.097 306.397C247.408 309.931 255.695 303.847 254.515 295.813L215.309 29.4371C214.15 21.5583 204.767 18.046 198.714 23.2184L131.916 80.3815"
                              fill="#D2D2D2"
                            />
                            <path
                              d="M224.001 269.463L98.7434 108.803L65.068 70.1967C62.7544 67.2994 65.4847 63.1383 69.0588 64.1045L131.286 80.9611L224.001 269.463Z"
                              fill="#B4B6B7"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_135_5262">
                              <rect
                                width="280.474"
                                height="255.067"
                                fill="white"
                                transform="translate(285.222 29.8384) rotate(96.51)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <span className="text-3xl font-medium">
                      <ol>
                        <li>User Research and Discovery</li>
                      </ol>
                    </span>
                    <span className="text-start flex  text-base font-medium">
                      Conducted in-depth user surveys and stakeholder interviews
                      to understand user needs, preferences, and pain points.
                    </span>
                  </div>
                  <div className="col-span-3 items-start justify-start flex flex-col p-5 gap-5 mt-48 pt-20">
                    <div className="box box2 rotate-[-40deg]">
                      <div className="svg">
                        <svg
                          width="286"
                          height="309"
                          viewBox="0 0 286 309"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_135_5262)">
                            <path
                              d="M83.5754 121.596L64.5767 69.4182L74.4505 71.4044L106.908 110.03L83.5754 121.596Z"
                              fill="#A2A2A3"
                            />
                            <path
                              d="M131.915 80.387L13.9481 181.343C8.40246 186.092 9.55225 194.966 16.1255 198.147L240.097 306.397C247.408 309.931 255.695 303.847 254.515 295.813L215.309 29.4371C214.15 21.5583 204.767 18.046 198.714 23.2184L131.916 80.3815"
                              fill="#D2D2D2"
                            />
                            <path
                              d="M224.001 269.463L98.7434 108.803L65.068 70.1967C62.7544 67.2994 65.4847 63.1383 69.0588 64.1045L131.286 80.9611L224.001 269.463Z"
                              fill="#B4B6B7"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_135_5262">
                              <rect
                                width="280.474"
                                height="255.067"
                                fill="white"
                                transform="translate(285.222 29.8384) rotate(96.51)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <span className="text-3xl font-medium ">
                      <ol start={2}>
                        <li>Wireframing and Prototyping</li>
                      </ol>
                    </span>
                    <span className="text-start flex  text-base font-medium">
                      Developed detailed wireframes and interactive prototypes
                      to visualize the app’s structure and user flow and
                      intuitive experience.
                    </span>
                  </div>
                  <div className="col-span-3 items-start justify-end flex flex-col p-5 gap-5 mt-48 pt-20">
                    <div className="box box2  -rotate-[80deg]">
                      <div className="svg">
                        <svg
                          width="286"
                          height="309"
                          viewBox="0 0 286 309"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_135_5262)">
                            <path
                              d="M83.5754 121.596L64.5767 69.4182L74.4505 71.4044L106.908 110.03L83.5754 121.596Z"
                              fill="#A2A2A3"
                            />
                            <path
                              d="M131.915 80.387L13.9481 181.343C8.40246 186.092 9.55225 194.966 16.1255 198.147L240.097 306.397C247.408 309.931 255.695 303.847 254.515 295.813L215.309 29.4371C214.15 21.5583 204.767 18.046 198.714 23.2184L131.916 80.3815"
                              fill="#D2D2D2"
                            />
                            <path
                              d="M224.001 269.463L98.7434 108.803L65.068 70.1967C62.7544 67.2994 65.4847 63.1383 69.0588 64.1045L131.286 80.9611L224.001 269.463Z"
                              fill="#B4B6B7"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_135_5262">
                              <rect
                                width="280.474"
                                height="255.067"
                                fill="white"
                                transform="translate(285.222 29.8384) rotate(96.51)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <span className="text-3xl font-medium">
                      <ol start={3}>
                        <li>
                          User Interface <br></br> Design
                        </li>
                      </ol>
                    </span>
                    <span className="text-start flex  text-base font-medium">
                      Created a visually appealing and consistent design that
                      reflects Simi Reizen’s adventurous brand identity and
                      using vibrant colors
                    </span>
                  </div>
                  <div className="col-span-3 items-start justify-center flex flex-col p-5 gap-10">
                    <div className="box box2 -rotate-[90deg]">
                      <div className="svg">
                        <svg
                          width="286"
                          height="309"
                          viewBox="0 0 286 309"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_135_5262)">
                            <path
                              d="M83.5754 121.596L64.5767 69.4182L74.4505 71.4044L106.908 110.03L83.5754 121.596Z"
                              fill="#0C648D"
                            />
                            <path
                              d="M131.915 80.387L13.9481 181.343C8.40246 186.092 9.55225 194.966 16.1255 198.147L240.097 306.397C247.408 309.931 255.695 303.847 254.515 295.813L215.309 29.4371C214.15 21.5583 204.767 18.046 198.714 23.2184L131.916 80.3815"
                              fill="#07AAF6"
                            />
                            <path
                              d="M224.001 269.463L98.7434 108.803L65.068 70.1967C62.7544 67.2994 65.4847 63.1383 69.0588 64.1045L131.286 80.9611L224.001 269.463Z"
                              fill="#0C648D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_135_5262">
                              <rect
                                width="280.474"
                                height="255.067"
                                fill="white"
                                transform="translate(285.222 29.8384) rotate(96.51)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <span className="text-3xl font-medium items-center justify-center flex">
                      <ol start={4}>
                        <li>User Experience Enhancements</li>
                      </ol>
                    </span>
                    <span className="text-start flex  text-base font-medium">
                      Created a visually appealing and consistent design that
                      reflects Simi Reizen’s adventurous brand identity and
                      using vibrant colors
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center justify-center w-11/12 py-10 ">
                  <div className="col-span-6 flex flex-col items-center justify-center gap-5 h-full">
                    <div className="p-10 bg-[#07AAF6]  flex flex-col items-start justify-center rounded-3xl text-white w-11/12 h-full color-loop">
                      <h2 className="text-2xl font-medium mb-2 ">
                        Solution Statement
                      </h2>
                      <h1 className="text-[3vw] font-bold ">
                        Modernizing the Travel Experience
                      </h1>
                      <span className="text-2xl font-medium mb-2 ">
                        To enhance the customer experience and address the
                        challenges faced by Simi Reizen, we developed a modern
                        mobile app featuring a deep dive into historic places
                        and routes.
                      </span>
                    </div>
                    <div className=" flex items-center  w-11/12 h-full  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/ss1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex flex-col gap-5">
                    <div className=" flex items-center  w-11/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/ss2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className=" flex items-center  w-11/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/ss3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-srbg4 bg-center bg-cover h-[100vh] w-full py-10">
                <div className=" grid grid-cols-12 items-center justify-center w-full h-full ">
                  <div className=" col-span-6 items-center justify-between flex flex-col h-full pt-20 ps-16 pe-2">
                    <div className="flex w-full items-start ps-10 ">
                      <span className="text-4xl font-normal">Lexend</span>
                    </div>
                    <div className="flex w-full items-center justify-center   ">
                      <span className="text-[9vw] font-light justify-self-center w-10/12 ">
                        Aa1
                      </span>
                    </div>
                    <div className="flex w-full items-start justify-end ">
                      <span className=" font-bold text-2xl justify-self-end">
                        A a B b C c D d E e F f G g H h I i J j K k L l M m N n
                        O o <br></br> P p Q q R r S s T t U u V v W w X x Y y Z
                        z
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center group overflow-hidden">
                    <div
                      className="w-full items-end justify-end flex relative bg-[#EF23A1] h-[95vh] ps-20 pt-20  overflow-hidden transition-all
                     duration-300 group-hover:bg-[#000000] group-hover:transition-all  group-hover:duration-[2500ms] "
                    >
                      <div className="w-full items-start justify-start ps-10 absolute top-0  text-3xl font-bold  ">
                        <div className="relative mt-6">
                          <span className="text-white text-4xl font-bold group-hover:hidden group-hover:transition-all  group-hover:duration-[1500ms]">
                            #EF23A1
                          </span>
                          <span className="text-white text-4xl font-bold hidden group-hover:flex group-hover:transition-all  group-hover:duration-[1500ms]">
                            #000000
                          </span>
                        </div>
                      </div>
                      <div
                        className="bg-[#07AAF6]  items-end justify-end ps-10 pt-40 w-full h-full relative -rotate-[20deg] rounded-3xl top-[4%] left-[20%] 
                       transition-all duration-700 group-hover:bg-[#FFFFFF]  group-hover:rotate-[340deg]   group-hover:transition-all  group-hover:duration-[2500ms] "
                      >
                        <div className="w-full items-start justify-start ps-10 absolute top-0  text-3xl font-bold  ">
                          <div className="relative mt-6">
                            <span className="text-white text-4xl font-bold group-hover:hidden mt-10 group-hover:delay-1000 group-hover:transition-all  group-hover:duration-[1500ms]">
                              #07AAF6
                            </span>
                            <span className="text-black text-4xl font-bold hidden group-hover:flex group-hover:delay-1000 group-hover:transition-all  group-hover:duration-[1500ms]">
                              #FFFFFF
                            </span>
                          </div>
                        </div>
                        <div
                          className="bg-[#F7D239]  items-end justify-end ps-10 pt-10 w-full h-full relative rounded-3xl 
                        -rotate-[20deg] top-[15%] left-[10%] transition-all duration-700 group-hover:bg-[#CCCBC7]   group-hover:rotate-[340deg] 
                         group-hover:transition-all  group-hover:duration-[1500ms]"
                        >
                          <div className="w-full items-start justify-start ps-10 absolute top-0  text-3xl font-bold  ">
                            <div className="relative mt-6">
                              <span className="text-black text-4xl font-bold group-hover:hidden">
                                #F7D239
                              </span>
                              <span className="text-black text-4xl font-bold hidden group-hover:flex">
                                #CCCBC7
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-center justify-center w-full bg-[#CCCCCC] p-10 ">
                <div className="grid grid-cols-12 items-center justify-between w-11/12  gap-5">
                  <div
                    className="col-span-8 flex flex-col items-start justify-center gap-5
                  "
                  >
                    <span className="text-5xl font-bold"> Wireframing</span>
                    <span className="text-3xl font-normal">
                      During the wireframing and prototyping phase, our primary
                      focus was on mapping out the app’s structure and user
                      journey to ensure a seamless and intuitive experience. We
                      began by creating detailed wireframes for each screen,
                      outlining the placement of elements such as buttons,
                      menus, and content areas.
                    </span>
                    <span className="text-3xl font-bold">
                      Heres a detailed look at the process:
                    </span>
                    <span className="text-5xl font-bold mt-4">
                      {' '}
                      Main Elemenets
                    </span>
                    <div className=" w-full flex items-center justify-between">
                      <div className=" flex items-center    ">
                        <Image
                          className=" relativepos "
                          src="/mobileapps/sr/me1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className=" flex items-center    ">
                        <Image
                          className=" relativepos "
                          src="/mobileapps/sr/me2.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className=" flex items-center    ">
                        <Image
                          className=" relativepos "
                          src="/mobileapps/sr/me3.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className=" flex items-center   w-10/12  ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sr/wf1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
