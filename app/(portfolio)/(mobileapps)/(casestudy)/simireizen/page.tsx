'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Lexend } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  textColor,
  largeImage,
  movingText,
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
  weight: ['400', '700', '500', '600'],
});

export default function Simireizen() {
  useSmoothScroll();
  useEffect(() => {
    textColor();
    largeImage();
    movingText();
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
                        src="/mobileapps/sr/iphone.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-end flex flex-col  bg-srbg3 bg-cover bg-top   bg-no-repeat relative h-full">
                <div className="h-96 p-2 bg-red-800 "></div>
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
                        src="/mobileapps/sr/iphone3.png"
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
                      <h1 className="text-6xl font-bold  mb-8">
                        Let’s go deeper with places and routes
                      </h1>
                      <p className=" mb-6 text-xl font-medium">
                        Simi Reizen, a renowned adventure travel agency,
                        recognized the need to modernize its customer engagement
                        and booking processes.
                        <br></br> <br></br>Users faced difficulties navigating
                        the website, booking trips, and managing their
                        itineraries, which resulted in a suboptimal user
                        experience.
                      </p>

                      <h3 className="text-4xl font-medium mb-4">
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
                          <h4 className="font-medium text-2xl">
                            Navigating The <br></br> Website
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
                          <h4 className="font-medium text-2xl">
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
                          <h4 className="font-medium text-2xl">
                            Need For Modernization
                          </h4>
                        </div>
                      </div>
                      <div className="flex gap-5 pt-10 w-full items-center justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
