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
              <div className="w-full items-center justify-end flex flex-col  bg-srbg3 bg-cover bg-center   bg-no-repeat relative h-full">
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
                <div className="w-full flex items-center justify-center pt-10">
                  <div className=" flex items-center   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sr/Component 8.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className=" flex items-center   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sr/iphone2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className=" flex items-center   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sr/Component 8.png"
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
    </SlideFromRight>
  );
}
