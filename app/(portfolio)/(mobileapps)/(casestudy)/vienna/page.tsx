'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PT_Serif, Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  setupScrollAnimation,
  movingText2,
  animation1,
  animation2,
  animation3,
  animation4,
  ScrollOnTop,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import WordPullUp from '@/components/magicui/word-pull-up';

import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  SrTop,
  RevealOnScroll,
  RotateImage,
  RotateText,
  RevealOnScrollXImage,
  TopImage,
  BottomImage,
} from '@/app/components/revealelement';
import { AnimatedText2, AnimatedText3 } from '@/app/components/animatedtext';
const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '600'],
});
export default function Vienna() {
  const [activeImage, setActiveImage] = useState(1);

  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
    movingText2();
    animation1();
    animation2();
    animation3();
    animation4();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex  col-span-12 items-center justify-center flex-col w-full  ">
              <div className="flex flex-col items-center justify-between h-[100vh]  w-full relative ">
                <div className="bg-gradient-to-r from-transparent      to-black absolute  w-full h-full  "></div>
                <div className="videoContainer w-full ">
                  <video
                    className="roundvideo"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source
                      src="../../../../../mobileapps/vienna/4 video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="w-10/12 items-center justify-end flex pt-20 2xl:pe-20">
                  <div className="flex  items-center  w-1/2 justify-center  relative ">
                    <Image
                      className=" relativepos    "
                      src="/mobileapps/vienna/ht1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center text-white  bg-black/50 backdrop-blur-sm  h-52 w-full">
                  <div className="grid grid-cols-12 items-center justify-center w-11/12 ">
                    <div className=" col-span-6 flex flex-col items-start justify-start gap-2 ">
                      <span className="text-2xl font-medium">
                        Discover Vienna’s Iconic Landmarks
                      </span>
                      <span className="text-xl">
                        From the grandeur of Schönbrunn Palace to the vibrant
                        streets of the Naschmarkt, Vienna invites you to uncover
                        its rich history, stunning architecture, and
                        unforgettable cultural experiences.
                      </span>
                    </div>
                    <div className=" col-span-3 flex flex-col items-center justify-center gap-2 animate-slow-bounce">
                      <span className="text-2xl font-medium ">Scroll Down</span>
                      <div className="flex  items-center    relative ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/Arrow.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                    <div className=" col-span-3 flex flex-col items-center justify-center relative">
                      <div className="flex  items-center   w-5/12  animate-slow-spin  relative ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/logo1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className="flex  items-center   absolute w-1/5    ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/V.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full flex flex-col items-center justify-start  py-20 bg-[#F5F7FB] ">
                <div className="w-11/12  flex items-center justify-center h-40">
                  <GradualSpacing
                    className={`text-[8vw] font-bold text-[#E5E5E5] uppercase ${ptserif.className}`}
                    text="adventure awaits"
                  />
                </div>
                <div className="grid grid-cols-12 items-center justify-center w-11/12 ">
                  <div className="col-span-3 items-center justify-center  ">
                    <span className="text-4xl font-semibold text-[#EA0000] capitalize ">
                      vienna is not just a destination
                    </span>
                  </div>
                  <div className="col-span-6 items-center justify-center">
                    {/* Images */}
                    <div className="flex items-center h-[60vh] w-full">
                      {activeImage === 1 && (
                        <div className=" w-full h-full ">
                          <video
                            className="roundvideo h-full"
                            autoPlay
                            muted
                            loop
                            preload="auto"
                            playsInline
                          >
                            <source
                              src="/mobileapps/vienna/laptop.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      )}
                      {activeImage === 2 && (
                        <div className=" w-full h-full ">
                          <Image
                            className="relativepos"
                            src="/mobileapps/vienna/1f.jpg"
                            alt="Background 2"
                            fill
                            priority
                          />
                        </div>
                      )}
                      {activeImage === 3 && (
                        <div className=" w-full h-full ">
                          <Image
                            className="relativepos"
                            src="/mobileapps/vienna/2f.jpg"
                            alt="Background 3"
                            fill
                          />
                        </div>
                      )}
                      {activeImage === 4 && (
                        <div className=" w-full h-full ">
                          <Image
                            className="relativepos"
                            src="/mobileapps/vienna/3f.jpg"
                            alt="Background 4"
                            fill
                          />
                        </div>
                      )}
                    </div>

                    {/* Spans */}
                    <div className="w-full items-center justify-center gap-10 flex pt-10 font-bold text-4xl">
                      <span
                        onClick={() => setActiveImage(1)}
                        className={`cursor-pointer ${
                          activeImage === 1 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        01
                      </span>
                      <span
                        onClick={() => setActiveImage(2)}
                        className={`cursor-pointer ${
                          activeImage === 2 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        02
                      </span>
                      <span
                        onClick={() => setActiveImage(3)}
                        className={`cursor-pointer ${
                          activeImage === 3 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        03
                      </span>
                      <span
                        onClick={() => setActiveImage(4)}
                        className={`cursor-pointer ${
                          activeImage === 4 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        04
                      </span>
                    </div>
                  </div>

                  <div className="col-span-3 items-center justify-center">
                    <span className="text-xl  ">
                      Vienna Unwrapped is a digital guide that invites travelers
                      to experience Vienna beyond the surface. The goal of this
                      website design project was to create an engaging,
                      user-friendly platform that highlights Viennas rich
                      history, vibrant culture, and hidden treasures.
                    </span>
                  </div>
                </div>
              </div>
              <div className=" w-full items-start justify-center flex  bg-viennabg1 bg-cover bg-center bg-no-repeat py-10">
                <div className="grid grid-cols-12 items-center justify-center w-11/12 gap-10">
                  <div className="col-span-9 bg-[#EA0000] flex flex-col text-white p-5 items-start justify-start relative overflow-hidden">
                    <span className="text-xs  mb-10">
                      www.vienna-unwrapped.com
                    </span>
                    <WordPullUp
                      className="text-7xl font-bold text-start "
                      words="Experience Vianna's"
                    />
                    <div className="flex items-center justify-center">
                      <WordPullUp
                        className="text-7xl font-bold text-start "
                        words="Authentic Spirit"
                      />
                      <span className="text-8xl font-black animate-bounce">
                        .
                      </span>
                      <div className="flex  items-center   w-1/5  animate-slow-spin  absolute -right-28 top-10 ">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/logo1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex justify-end ">
                    <div className="flex  items-center  w-[55%] ">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/log2.gif"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex flex-col items-center justify-center relative ">
                    <div className=" w-full h-[50vh] ">
                      <video
                        className="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="../../../../../mobileapps/vienna/4 video.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="w-full bg-[#EA0000] flex flex-col text-white p-3 items-center justify-center relative overflow-hidden">
                      <span className="text-3xl font-bold">
                        Your Gateway to Imperial Splendor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center py-10 pt-20 ">
                <div className="flex w-11/12 items-center justify-between">
                  <span className="text-[#EA0000] text-3xl font-semibold w-">
                    Highlighting Vienna’s <br></br> charm in travel guides
                  </span>
                  <span className=" text-base w-1/3">
                    Travelers struggle to find Viennas authentic essence amidst
                    a flood of generic information. Many sites lack a cohesive,
                    inspiring design for discovering the city.
                  </span>
                </div>
                <div className="grid grid-cols-12 items-end justify-center w-11/12 pt-20 gap-5">
                  <div className="col-span-3 items-center justify-center flex">
                    <div className="flex  items-center  relative w-full">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/frame1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 items-center justify-center flex">
                    <div className="flex  items-center  relative w-full">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/frame2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 items-center justify-center flex relative overflow-hidden">
                    <div className="flex  items-center  relative w-full">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/frame4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="flex  items-center  absolute w-2/3 -bottom-[35%]">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/vienna/watch.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-3 items-center justify-center flex">
                    <div className="flex  items-center  relative w-full">
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/vienna/frame3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex h-[100vh] my-10">
                <div className="grid grid-cols-12 w-full ">
                  <div className="col-span-6 items-center justify-center flex flex-col bg-[#EA0000] text-white group overflow-hidden">
                    <div className="w-full h-[50vh] bg-[#EA0000] flex flex-col justify-center items-center relative cursor-pointer p-10">
                      <span className="text-white text-8xl transform transition-all duration-300 group-hover:translate-y-36 group-hover:scale-50 group-hover:translate-x-96">
                        Aa
                      </span>
                      <span className="text-white text-2xl absolute bottom-10 right-10 transform transition-all duration-300 group-hover:-translate-y-36 group-hover:scale-[2.5] group-hover:-translate-x-96">
                        Roboto
                      </span>
                    </div>
                    <div className="flex  items-center  relative overflow-hidden ">
                      <div className="hover:scale-150  transition-all duration-300">
                        <Image
                          className=" relativepos    "
                          src="/mobileapps/vienna/newspaper.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
