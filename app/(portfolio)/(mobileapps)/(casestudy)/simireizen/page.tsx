'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Lexend } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  simiReizen,
  setupSvgInteractions,
  setupScrollAnimation,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  SrTop,
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
        <div className="grid items-center justify-center w-full grid-cols-12 ">
          <div className="flex items-center justify-center col-span-12 ">
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="md:h-[100vh] h-[80vh] bg-srbg1 bg-top bg-cover bg-no-repeat  md:p-10 p-5 flex flex-col  w-full justify-between items-center content1 relative ">
                <SrTop>
                  <div className="flex flex-col items-center justify-start w-full gap-3 pt-10 text-white md:pt-5">
                    <div className="flex items-center  relative md:w-[12%]   w-1/2    ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/sr/logo.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-4xl font-semibold text-white md:text-6xl">
                      Simi Reizen
                    </span>
                    <span className="w-full text-sm font-medium text-center md:w-1/2 2xl:w-1/3 2xl:px-10">
                      Simi Reizen is a specialized travel agency offering
                      adventure and group travel experiences for young adults.
                    </span>
                  </div>
                </SrTop>
                <div className="flex flex-col items-center w-11/12 pb-10 md:justify-between md:flex-row rounded-3xl 2xl:pb-10 md:relative ">
                  <SrLeft>
                    <div className="flex-col items-center justify-center hidden p-5 text-center text-white bg-white/30 backdrop-blur-sm 2xl:w-96 w-80 md:flex gap-7 2xl:p-10 rounded-3xl">
                      <div className="relative flex items-center w-14 ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/icon1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <span className="text-sm font-medium ">
                        Our solution streamlined trip booking, making it quick
                        and effortless for users.
                      </span>
                    </div>
                  </SrLeft>
                  <div className="bg-white/30 backdrop-blur-sm  w-[40vw] z-10 flex md:hidden items-center justify-center text-center gap-3 flex-col  text-white  p-1 rounded-lg absolute top-[45%] left-[3%]">
                    <div className="relative flex items-center w-14 ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/sr/icon1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-xs ">
                      Our solution streamlined trip booking, making it quick and
                      effortless for users.
                    </span>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm  w-[40vw] z-10 flex md:hidden items-center justify-center text-center gap-3 flex-col  text-white  p-1 rounded-lg absolute bottom-[1%] right-[3%]">
                    <div className="relative flex items-center w-14 ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/sr/icon1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-xs ">
                      Our solution streamlined trip booking, making it quick and
                      effortless for users.
                    </span>
                  </div>
                  <div>
                    <SrRight>
                      <div className="flex-col items-center justify-center hidden p-5 text-center text-white bg-white/30 backdrop-blur-sm 2xl:w-96 w-80 md:flex gap-7 2xl:p-10 rounded-3xl">
                        <div className="relative flex items-center w-14 ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/icon2.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <span className="text-sm font-medium ">
                          Our solution streamlined trip booking, making it quick
                          and effortless for users.
                        </span>
                      </div>
                    </SrRight>
                  </div>
                  <div className="absolute w-full 2xl:top-[-60%]   lg:top-[-20%] md:z-10 top-[60%]">
                    <div className=" absolute   md:left-[38%]  left-[12%]   md:w-1/4 w-3/4  ">
                      <SrBottom>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/iPhone.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-center justify-end w-full h-full bg-top bg-no-repeat bg-cover bg-srbg3">
                <div className="md:h-[40vh]  h-[30vh]  "></div>

                <div className="flex flex-col items-center justify-center w-11/12 gap-5 p-5 mt-20 text-center md:p-10">
                  <SrTop>
                    <div className="flex flex-col items-center justify-center w-full">
                      <span className="text-2xl font-semibold uppercase md:text-6xl">
                        welcome
                      </span>

                      <span className="w-full text-sm md:w-1/2 md:text-xl">
                        Simi Reizen, a leading travel agency known for its
                        adventure trips and unique travel experiences, aimed to
                        enhance its digital presence by launching a dedicated
                        mobile app. The goal was to provide a seamless,
                        user-friendly interface for booking trips, managing
                        itineraries, and accessing travel information on the go.
                        <br></br> <br></br> Our task was to design a UI/UX that
                        would meet these requirements while embodying the spirit
                        of adventure and exploration that defines Simi Reizen.
                      </span>
                    </div>
                  </SrTop>
                </div>

                <div className="grid items-center justify-center w-11/12 h-full grid-cols-12 py-10 ">
                  <div className="flex items-center justify-center order-2 h-full col-span-6 pt-5 md:col-span-3 md:items-end md:order-1 md:pt-0 ">
                    <div className="flex items-center w-7/12 ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/sr/Component 8.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end order-1 h-full col-span-12 md:col-span-6 md:items-end md:order-2">
                    <SrBottom>
                      <div className="flex items-center w-full ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/iphone2.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SrBottom>
                  </div>

                  <div className="flex items-center justify-center order-2 col-span-6 pt-5 md:col-span-3 md:order-3 md:pt-0">
                    <div className="flex items-center w-7/12 ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/sr/Component 8.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>

                <div className="grid items-center w-full grid-cols-12 md:w-11/12 ">
                  <div className="flex flex-col h-full col-span-4 p-1">
                    <SrLeft>
                      <div className="flex items-center w-full md:w-11/12 ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/iPhone3n.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SrLeft>
                    <div className="flex flex-col items-start gap-1 pt-5 md:hidden">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center w-5 ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/location.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <h4 className="text-xs font-medium md:text-xl 2xl:text-2xl">
                          Navigating The Website
                        </h4>
                      </div>
                      <div className="flex items-start justify-start gap-2 ">
                        <div className="flex items-center w-4">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/clickicon.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <h4 className="text-xs font-medium md:text-xl 2xl:text-2xl">
                          Booking Trips
                        </h4>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center w-6">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/clickicon.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <h4 className="text-xs font-medium md:text-xl 2xl:text-2xl">
                          Need For Modernization
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center col-span-8 ">
                    <div className="p-2 mx-auto rounded-lg md:p-8">
                      <SrBottom>
                        <h2 className="mb-2 text-sm font-medium md:text-xl ">
                          Problem Statement
                        </h2>
                        <h1 className="md:text-[3vw]  text-[6vw] font-bold  2xl:mb-8 mb-2">
                          Let’s go deeper with places and routes
                        </h1>
                        <p className="mb-2 text-sm font-medium md:text-xl 2xl:mb-6">
                          Simi Reizen, a renowned adventure travel agency,
                          recognized the need to modernize its customer
                          engagement and booking processes.
                          <br></br> <br></br>Users faced difficulties navigating
                          the website, booking trips, and managing their
                          itineraries, which resulted in a suboptimal user
                          experience.
                        </p>

                        <h3 className="hidden mb-4 text-2xl font-medium 2xl:text-4xl md:block">
                          Problem Include
                        </h3>

                        <div className="items-center hidden gap-10 md:flex">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center ">
                              <Image
                                className=" relativepos"
                                src="/mobileapps/sr/location.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                            <h4 className="text-xl font-medium 2xl:text-2xl">
                              Navigating The Website
                            </h4>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center ">
                              <Image
                                className=" relativepos"
                                src="/mobileapps/sr/clickicon.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                            <h4 className="text-xl font-medium 2xl:text-2xl">
                              Booking Trips
                            </h4>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center ">
                              <Image
                                className=" relativepos"
                                src="/mobileapps/sr/clickicon.png"
                                alt="Background 1"
                                fill
                              />
                            </div>
                            <h4 className="text-xl font-medium 2xl:text-2xl">
                              Need For Modernization
                            </h4>
                          </div>
                        </div>
                      </SrBottom>
                      <div className="flex items-center justify-between w-full gap-5 pt-5 2xl:pt-10">
                        <SrRight>
                          <div className="flex items-center ">
                            <Image
                              className=" relativepos"
                              src="/mobileapps/sr/Frame 6.png"
                              alt="Background 1"
                              fill
                            />
                          </div>
                        </SrRight>
                        <SrRight>
                          <div className="flex items-center ">
                            <Image
                              className=" relativepos"
                              src="/mobileapps/sr/Frame 6 (1).png"
                              alt="Background 1"
                              fill
                            />
                          </div>
                        </SrRight>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid items-start justify-center w-11/12 grid-cols-12 gap-5 p-2 pb-10 mt-10 md:gap-0 md:ps-10 svgcontainer md:mt-10">
                  <div className="relative flex flex-col items-center justify-center col-span-12 text-center md:-mb-20">
                    <SrTop>
                      <h2 className="mb-2 text-3xl font-medium ">
                        Design Process
                      </h2>
                    </SrTop>

                    <h1 className="text-[3vw] font-bold w-1/2">
                      Crafting an Adventure Ready Experience
                    </h1>
                  </div>
                  <div className="flex flex-col items-start justify-center col-span-6 gap-2 p-2 md:col-span-3 md:gap-10 md:p-5">
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
                    <span className="text-lg font-medium md:text-3xl">
                      <ol>
                        <li>User Research and Discovery</li>
                      </ol>
                    </span>
                    <span className="flex text-sm font-medium md:text-base text-start">
                      Conducted in-depth user surveys and stakeholder interviews
                      to understand user needs, preferences, and pain points.
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start col-span-6 gap-2 p-2 md:col-span-3 md:gap-5 md:p-5 md:pt-20 md:mt-48">
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
                    <span className="text-lg font-medium md:text-3xl">
                      <ol start={2}>
                        <li>Wireframing and Prototyping</li>
                      </ol>
                    </span>
                    <span className="flex text-sm font-medium md:text-base text-start">
                      Developed detailed wireframes and interactive prototypes
                      to visualize the app’s structure and user flow and
                      intuitive experience.
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-end col-span-3 gap-2 p-2 pt-5 mt-5 md:gap-5 md:p-5 md:pt-20 md:mt-48">
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
                    <span className="text-lg font-medium md:text-3xl">
                      <ol start={3}>
                        <li>
                          User Interface <br></br> Design
                        </li>
                      </ol>
                    </span>
                    <span className="flex text-sm font-medium md:text-base text-start">
                      Created a visually appealing and consistent design that
                      reflects Simi Reizen’s adventurous brand identity and
                      using vibrant colors
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-center col-span-3 gap-10 p-5">
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
                    <span className="flex items-center justify-center text-lg font-medium md:text-3xl">
                      <ol start={4}>
                        <li>User Experience Enhancements</li>
                      </ol>
                    </span>
                    <span className="flex text-sm font-medium md:text-base text-start">
                      Created a visually appealing and consistent design that
                      reflects Simi Reizen’s adventurous brand identity and
                      using vibrant colors
                    </span>
                  </div>
                </div>

                <div className="grid items-center justify-center w-11/12 grid-cols-12 gap-5 py-10 md:gap-0 ">
                  <div className="flex flex-col items-center justify-center h-full col-span-12 gap-5 md:col-span-6">
                    <SrLeft>
                      <div className="flex items-center justify-center w-full">
                        <div className="p-10 bg-[#07AAF6]  flex flex-col items-start justify-center rounded-3xl text-white w-11/12 h-full color-loop">
                          <h2 className="mb-2 text-2xl font-medium ">
                            Solution Statement
                          </h2>
                          <h1 className="text-[3vw] font-bold ">
                            Modernizing the Travel Experience
                          </h1>
                          <span className="mb-2 text-2xl font-medium ">
                            To enhance the customer experience and address the
                            challenges faced by Simi Reizen, we developed a
                            modern mobile app featuring a deep dive into
                            historic places and routes.
                          </span>
                        </div>
                      </div>
                    </SrLeft>
                    <div className="flex items-center w-11/12 h-full ">
                      <SrBottom>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/ss1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center col-span-12 gap-5 md:col-span-6">
                    <div className="flex items-center w-11/12 ">
                      <SrTop>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/ss2.png"
                          alt="Background 1"
                          fill
                        />
                      </SrTop>
                    </div>
                    <div className="flex items-center w-11/12 ">
                      <SrRight>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/ss3.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center  md:h-[100vh] w-full md:py-10">
                <div className="grid items-center justify-center w-full h-full grid-cols-12 ">
                  <div className="flex flex-col items-start justify-between  col-span-12 px-5 py-5  bg-cover bg-srbg4 bg-center md:items-center md:px-0 md:pt-20 md:col-span-6 md:ps-16 pe-2 md:py-0 h-[60vh] md:h-full">
                    <div className="flex items-start w-full md:ps-10 ">
                      <span className="text-4xl font-normal">Lexend</span>
                    </div>
                    <div className="flex items-center justify-center w-full ">
                      <SrLeft>
                        <span className="md:text-[9vw] text-[7rem] leading-none font-light justify-self-center md:w-10/12 ">
                          Aa1
                        </span>
                      </SrLeft>
                    </div>
                    <div className="flex items-start justify-end w-full ">
                      <span className="text-xl font-bold md:text-2xl justify-self-end">
                        A a B b C c D d E e F f G g H h I i J j K k L l M m N n
                        O o <br></br> P p Q q R r S s T t U u V v W w X x Y y Z
                        z
                      </span>
                    </div>
                  </div>
                  <div className="items-center justify-center col-span-12 overflow-hidden md:col-span-6 group">
                    <SrRight>
                      <div
                        className="w-full items-end justify-end flex relative bg-[#EF23A1] md:h-[100vh] h-[80vh] ps-20 pt-20  overflow-hidden transition-all
                     duration-100 group-hover:bg-[#000000] group-hover:transition-all  group-hover:duration-1000 "
                      >
                        <div className="absolute top-0 items-start justify-start w-full text-3xl font-bold ps-10 ">
                          <div className="relative mt-6">
                            <span className="text-4xl font-bold text-white group-hover:hidden group-hover:transition-all group-hover:duration-1000">
                              #EF23A1
                            </span>
                            <span className="text-white text-4xl font-bold hidden group-hover:flex group-hover:transition-all  group-hover:duration-[1500ms]">
                              #000000
                            </span>
                          </div>
                        </div>
                        <div
                          className="bg-[#07AAF6]  items-end justify-end ps-10 pt-40 w-full h-full relative -rotate-[20deg] rounded-3xl top-[4%] left-[20%] 
                       transition-all duration-1000 group-hover:bg-[#FFFFFF]  group-hover:rotate-[340deg]   group-hover:transition-all  group-hover:duration-1000 "
                        >
                          <div className="absolute top-0 items-start justify-start w-full text-3xl font-bold ps-10 ">
                            <div className="relative mt-6">
                              <span className="mt-10 text-4xl font-bold text-white group-hover:hidden group-hover:delay-1000 group-hover:transition-all group-hover:duration-1000">
                                #07AAF6
                              </span>
                              <span className="text-black text-4xl font-bold hidden group-hover:flex group-hover:delay-1000 group-hover:transition-all  group-hover:duration-[1500ms]">
                                #FFFFFF
                              </span>
                            </div>
                          </div>
                          <div
                            className="bg-[#F7D239]  items-end justify-end ps-10 pt-10 w-full h-full relative rounded-3xl 
                        -rotate-[20deg] top-[15%] left-[10%] transition-all duration-1000 group-hover:bg-[#CCCBC7]   group-hover:rotate-[340deg] 
                         group-hover:transition-all  group-hover:duration-1000"
                          >
                            <div className="absolute top-0 items-start justify-start w-full text-3xl font-bold ps-10 ">
                              <div className="relative mt-6">
                                <span className="text-4xl font-bold text-black group-hover:hidden">
                                  #F7D239
                                </span>
                                <span className="hidden text-4xl font-bold text-black group-hover:flex">
                                  #CCCBC7
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SrRight>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-center justify-center w-full bg-[#CCCCCC] pt-10 md:pt-0  ">
                <div className="grid items-center justify-between w-11/12 grid-cols-12 gap-5 md:p-10">
                  <div className="flex flex-col items-start justify-center col-span-12 gap-2 md:gap-5 md:col-span-8 ">
                    <SrTop>
                      <div className="flex flex-col items-start justify-center w-full gap-2 md:gap-5">
                        <span className="text-2xl font-bold md:text-5xl">
                          Wireframing
                        </span>
                        <span className="font-normal text-lg: md:text-3xl">
                          During the wireframing and prototyping phase, our
                          primary focus was on mapping out the app’s structure
                          and user journey to ensure a seamless and intuitive
                          experience. We began by creating detailed wireframes
                          for each screen, outlining the placement of elements
                          such as buttons, menus, and content areas.
                        </span>
                        <span className="text-lg font-bold md:text-3xl">
                          Heres a detailed look at the process:
                        </span>
                        <span className="text-2xl font-bold md:mt-4 md:text-5xl">
                          Main Elemenets
                        </span>
                      </div>
                    </SrTop>
                    <SrLeft>
                      <div className="flex items-center justify-between w-full ">
                        <div className="flex items-center ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/me1.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <div className="flex items-center ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/me2.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                        <div className="flex items-center ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/sr/me3.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>{' '}
                    </SrLeft>
                  </div>
                  <div className="flex items-center justify-center col-span-12 md:col-span-4">
                    <div className="flex items-center w-10/12 ">
                      <SrBottom>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/wf1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="flex items-center w-10/12 ">
                    <Image
                      className=" relativepos"
                      src="/mobileapps/sr/mu12.gif"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full ">
                <div className="grid items-center justify-center w-11/12 grid-cols-12 gap-5 py-10 md:gap-10">
                  <div className="flex items-center justify-center h-full col-span-6 rounded-3xl">
                    <SrLeft>
                      <div className="flex items-center w-full h-full ">
                        <Image
                          className=" relativepos rounded-3xl"
                          src="/mobileapps/sr/f12.gif"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SrLeft>
                  </div>
                  <div className="flex items-center justify-center col-span-6">
                    <SrRight>
                      <div className="flex items-center w-full rounded-3xl">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/f1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SrRight>
                  </div>
                  <div className="flex items-center justify-center col-span-12">
                    <SrBottom>
                      <div className="flex items-center w-full rounded-3xl">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/sr/f3.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SrBottom>
                  </div>
                  <div className="flex items-center justify-center col-span-12">
                    <div className="flex items-center w-full ">
                      <SrBottom>
                        <Image
                          className=" relativepos rounded-3xl"
                          src="/mobileapps/sr/f4.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center col-span-12 md:py-10 md:flex-row">
                    <div className="top-0 flex items-center justify-end w-full py-5 md:absolute md:py-0">
                      <div className="flex flex-col w-full md:w-2/3 md:pe-10">
                        <SrTop>
                          <div className="flex flex-col w-full gap-2 md:gap-5">
                            <span className="text-2xl font-bold md:text-5xl">
                              User Flow
                            </span>
                            <span className="text-sm font-normal md:text-3xl">
                              Upon launching the app, users are greeted with a
                              welcome message on the Home Screen, featuring a
                              quick access search bar and a selection of popular
                              destinations. From here, users can navigate to the
                              Search Trips section, where they enter their
                              desired destination, travel dates, and
                              preferences. The app then displays search results,
                              which can be filtered by price, activity type, and
                              duration.s
                            </span>
                          </div>
                        </SrTop>
                      </div>
                    </div>
                    <div className="relative flex items-center w-11/12 ">
                      <Image
                        className="object-fill relativepos"
                        src="/mobileapps/sr/uf.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>

                <div className="relative items-center justify-center w-full ">
                  <div className="relative  flex items-center justify-center md:h-[80vh] h-[25vh] ">
                    <div
                      id="videoDiv"
                      className="absolute z-0 flex flex-col w-full h-full video-container"
                    >
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="h-full"
                      >
                        <source
                          src="/mobileapps/sr/Sequence2.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className=" flex items-center absolute w-full top-[0%] h-full z-10    ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/sr/jahaz.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className=" flex items-center absolute w-auto bottom-[65%]  z-10  text-white font-bold text-[5vw] left-[4%]   ">
                      <SrLeft>
                        <span> Discover Your</span>
                      </SrLeft>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
