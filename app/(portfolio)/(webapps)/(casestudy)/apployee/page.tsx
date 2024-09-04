'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  setupScrollAnimation,
  movingText2,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import GradualSpacing from '@/components/magicui/gradual-spacing';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  RevealOnScroll,
} from '@/app/components/revealelement';
import { AnimatedText2 } from '@/app/components/animatedtext';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';

const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600', '900'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function Apployee() {
  const swiperRef = useRef<SwiperCore | null>(null);

  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
    movingText2();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} bg-[#EDEFF0]`}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex  col-span-12 items-center justify-center flex-col w-full  ">
              <div className="flex flex-col items-center justify-start w-full p-10  relative h-[120vh] ">
                <div className="bg-apployeebg1 bg-cover bg-center bg-no-repeat w-full h-[80vh] rounded-3xl p-10 flex flex-col ">
                  <div className="flex text-white items-center justify-between font-semibold text-sm">
                    <span>2024</span>
                    <div className="flex  items-center  relative    ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/logo.svg"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span> CASE STUDY</span>
                  </div>
                  <div className="flex flex-col items-center justify-center  h-36 2xl:mt-10">
                    <GradualSpacing
                      className="text-[5vw] font-semibold text-white uppercase  2xl:leading-[100px] leading-[50px]"
                      text="TRACK & MANAGE"
                    />
                    <GradualSpacing
                      className="text-[5vw] font-semibold text-white uppercase  2xl:leading-[100px] leading-[50px]"
                      text="DRIVERS PERFORMACE"
                    />
                  </div>
                  <div className="w-10/12 flex rounded-3xl h-[70vh] absolute bottom-[5%] right-[8%] ">
                    <div className=" w-full  rounded-3xl ">
                      <video
                        className="roundvideo rounded-3xl "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="../../../../../mobileapps/vienna/vienna.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full  ">
                <div className="2xl:w-1/2 w-2/3 text-center text-3xl pb-10">
                  <span>
                    Apployee coaching portal simplifies Driver management system
                    with a revolutionary platform that streamlines HR, enhances
                    contract and onboarding processes, and provides an
                    intuitive, unified dashboard.
                  </span>
                </div>
                <div className="bg-apployeebg2 bg-cover bg-center bg-no-repeat w-[95%] flex items-start justify-center p-10 2xl:gap-20 gap-10 rounded-3xl mb-10">
                  <div className="flex  items-center  relative  w-1/4 animate-zoom-in">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/apployee/about.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  relative  w-1/4 mt-[10%] ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/apployee/problem.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  relative  w-1/4 mt-[20%] ">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/apployee/solution.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <span className="text-[4vw] font-semibold uppercase">
                  project timeline
                </span>
                <div className="w-full items-start justify-center flex bg-apployeebg3 bg-contain  bg-no-repeat h-[100vh] bg-bottom relative">
                  <div className="flex  items-center    w-[20%] absolute  left-[15%] top-[10%]">
                    <SrLeft>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/tl1.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="flex  items-center    w-[20%] absolute  left-[33%] top-[25%]">
                    <SrLeft>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/tl2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="flex  items-center    w-[20%] absolute  left-[49%] top-[40%]">
                    <SrLeft>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/tl3.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="flex  items-center    w-[20%] absolute  right-[15%] top-[55%]">
                    <SrLeft>
                      {' '}
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/tl4.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="flex  items-center    w-[20%] absolute  right-[30%] top-[70%]">
                    <SrLeft>
                      {' '}
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/tl5.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                </div>
                <span className="text-[4vw] font-semibold uppercase my-10">
                  informtion architecture
                </span>
                <span className=" w-2/3 text-center text-3xl pb-10">
                  The information architecture of our product is meticulously
                  designed to create a seamless and intuitive user experience.
                  By organizing and structuring data logically, we ensure
                  effortless navigation, facilitating quick access to essential
                  features. This thoughtfully crafted information architecture
                  enhances user efficiency and engagement, forming the backbone
                  of a user-friendly and efficient system.
                </span>
                <div className="bg-[#0F172A] items-center justify-center flex w-[95%] rounded-3xl p-10 mb-10 group relative transition-all duration-300">
                  <div className="flex  items-center    w-[80%] group-hover:hidden transition-all duration-300 h-full">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/apployee/iag.png"
                      alt="Background 1"
                      fill
                      priority
                    />
                  </div>
                  <div className="hidden  items-center    w-[80%] group-hover:flex transition-all duration-300 h-full">
                    <Image
                      className=" relativepos  "
                      src="/mobileapps/apployee/iar.png"
                      alt="Background 1"
                      fill
                      priority
                    />
                  </div>
                </div>
                <span className="text-[4vw] font-semibold uppercase mb-10">
                  Style guidline
                </span>
                <div className="flex  items-center justify-around pb-10 w-11/12">
                  <div className="flex  items-center    w-[40%]">
                    <SrLeft>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/aa.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="w-[40%] text-start flex flex-col items-center ">
                    <span className="text-3xl ">
                      <span className="font-semibold">
                        Appolyee elevates its visual appeal with the modern
                        Poppins fonts
                      </span>
                      adding a touch of sophistication to the platforms user
                      interface.
                    </span>
                    <br></br>
                    <span className="text-3xl pt-10">
                      Poppins’s overall user experience, making Apployee a
                      visually pleasing and user-friendly solution.
                    </span>
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
