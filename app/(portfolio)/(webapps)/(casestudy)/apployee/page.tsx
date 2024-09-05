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

import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  RevealOnScroll,
  SrTop,
  RotateText,
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
              <div className="flex flex-col items-center justify-start w-full p-10  relative h-[130vh] ">
                <div className="bg-apployeebg1 bg-cover bg-center bg-no-repeat w-full h-[80vh] rounded-3xl p-10 flex flex-col ">
                  <div className="flex text-white items-center justify-between font-semibold text-sm">
                    <span>2024</span>
                    <div className="flex  items-center  relative w-[10%]   ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/logo.svg"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span> CASE STUDY</span>
                  </div>
                  <div className="flex flex-col items-center justify-center  h-32 2xl:mt-10">
                    <GradualSpacing
                      className="text-[4vw] font-semibold text-white uppercase  2xl:leading-[90px] leading-[50px]"
                      text="TRACK & MANAGE"
                    />
                    <GradualSpacing
                      className="text-[4vw] font-semibold text-white uppercase  2xl:leading-[90px] leading-[50px]"
                      text="DRIVERS PERFORMACE"
                    />
                  </div>
                  <div className="w-10/12 flex rounded-3xl h-[90vh] absolute -bottom-[1%] right-[8%] ">
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
                          src="../../../../../mobileapps/apployee/apployee.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full  ">
                <div className="2xl:w-1/2 w-2/3 text-center text-3xl pb-16 pt-5">
                  <span>
                    Apployee coaching portal simplifies Driver management system
                    with a revolutionary platform that streamlines HR, enhances
                    contract and onboarding processes, and provides an
                    intuitive, unified dashboard.
                  </span>
                </div>
                <div className="bg-apployeebg2 bg-cover bg-center bg-no-repeat w-[95%] flex items-start justify-center p-10 2xl:gap-20 gap-10 rounded-3xl mb-10">
                  <div className="flex  items-center  relative  w-1/4 animate-zoom-in">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/about.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                  <div className="flex  items-center  relative  w-1/4 mt-[10%] ">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/problem.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                  <div className="flex  items-center  relative  w-1/4 mt-[20%] ">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/solution.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                </div>
                <div className="flex  items-center justify-center  h-20 my-10">
                  <GradualSpacing
                    className="text-[4vw] font-semibold uppercase "
                    text="project timeline"
                  />
                </div>
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
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/tl5.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                </div>

                <div className="flex  items-center justify-center  h-20 my-10 2xl:pt-10">
                  <GradualSpacing
                    className="text-[4vw] font-semibold uppercase "
                    text="informtion architecture"
                  />
                </div>
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

                <div className="flex  items-center justify-center  h-20 my-10">
                  <GradualSpacing
                    className="text-[4vw] font-semibold uppercase "
                    text="Style guidline"
                  />
                </div>
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
                    <span className="2xl:text-3xl text-2xl ">
                      <span className="font-semibold">
                        Appolyee elevates its visual appeal with the modern
                        Poppins fonts
                      </span>
                      adding a touch of sophistication to the platforms user
                      interface.
                    </span>
                    <br></br>
                    <span className="2xl:text-3xl text-2xl pt-10">
                      Poppins’s overall user experience, making Apployee a
                      visually pleasing and user-friendly solution.
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-center py-10 relative my-10">
                <div className="w-1/4 flex relative -right-[8%] ">
                  <div className="flex  items-center     w-full relative] ">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/cwn.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                </div>
                <div className="w-1/4  flex flex-col gap-5 -right-[4%] relative">
                  <div className="flex  items-center    relative w-full">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/cpn.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                  <div className="flex  items-center    relative w-full">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/cgrn.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                </div>
                <div className="w-1/4 flex ">
                  <div className="flex  items-center    relative w-full ">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/cbn.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                </div>
                <div className="w-1/4  flex flex-col gap-5 -left-[4%] relative">
                  <div className="flex  items-center    relative w-full">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/csbn.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                  <div className="flex  items-center    relative w-full">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/co2.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                </div>
                <div className="w-1/4 flex relative -left-[8%]">
                  <div className="flex  items-center    relative w-full ">
                    <RotateText>
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/apployee/cgn.png"
                        alt="Background 1"
                        fill
                      />
                    </RotateText>
                  </div>
                </div>
              </div>
              <div className="w-11/12 flex items-center justify-center pb-10 gap-10 ">
                <div className="flex  items-center    relative w-1/2 ">
                  <SrLeft>
                    <div className="flex  items-center    relative w-full h-[80vh] object-cover">
                      <Image
                        className=" relativepos object-cover rounded-3xl"
                        src="/mobileapps/apployee/img1n.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SrLeft>
                </div>
                <div className="flex  items-center    relative w-1/2 ">
                  <SrRight>
                    <div className="flex  items-center    relative w-full h-[80vh] object-cover">
                      <Image
                        className=" relativepos object-cover rounded-3xl"
                        src="/mobileapps/apployee/img2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SrRight>
                </div>
              </div>
              <div className="w-11/12 flex items-center justify-center pb-10 gap-10   h-[80vh] relative">
                <div className="flex w-8/12 items-start flex-col justify-center">
                  <span className="font-semibold text-[4vw] 2xl:leading-[100px] leading-[50px]">
                    Get hold of your <br></br> driver’s Management<br></br>
                    system
                  </span>
                  <span className="text-lg pt-5 w-10/12">
                    Apployee coaching portal simplifies Driver management system
                    with a revolutionary platform that streamlines HR, enhances
                    contract and onboarding processes, and provides an
                    intuitive, unified dashboard.
                  </span>
                </div>
                <div className="w-4/12 relative">
                  <div className="flex  items-center    relative w-10/12 ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/apployee/man.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center      absolute right-[8%] -top-[10%] w-1/3 ">
                    <SrTop>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/set.png"
                        alt="Background 1"
                        fill
                      />
                    </SrTop>
                  </div>
                  <div className="flex  items-center      absolute right-[8%] -bottom-[10%] w-2/5 ">
                    <SrBottom>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/search.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                  <div className="flex  items-center      absolute -left-[14%] bottom-[40%] w-1/3 ">
                    <SrTop>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/drivers.png"
                        alt="Background 1"
                        fill
                      />
                    </SrTop>
                  </div>

                  <div className="flex  items-center      absolute -left-[22%] bottom-[30%] w-2/5 ">
                    <SrLeft>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/pg.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 w-10/12 items-center justify-center gap-10 pb-10 mt-10">
                <div className="col-span-12 flex items-center justify-center">
                  <div className="flex  items-center justify-center  h-20 ">
                    <GradualSpacing
                      className="text-[4vw] font-semibold uppercase "
                      text="Social Media posts"
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex  items-center    relative w-full">
                    <SrLeft>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/sm1.png"
                        alt="Background 1"
                        fill
                      />
                    </SrLeft>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex  items-center    relative w-full">
                    <SrBottom>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/sm3.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex  items-center    relative w-full">
                    <SrRight>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/apployee/sm2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrRight>
                  </div>
                </div>
              </div>
              <div className="w-10/12 flex flex-col items-center justify-center gap-10 my-10">
                <div className="flex  items-center justify-center  h-20 ">
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="Buttons"
                  />
                </div>
                <div className="flex  items-center    relative w-full ">
                  <SrBottom>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/apployee/butns.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
                <div className="grid grid-cols-12 w-full items-start justify-center gap-10 pt-10 ">
                  <div className="col-span-4 items-center justify-center flex flex-col gap-10">
                    <span className="text-3xl font-semibold">Menu</span>
                    <div className="flex  items-center    relative w-full">
                      <SrLeft>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/apployee/icon1.png"
                          alt="Background 1"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="col-span-4 items-center justify-center flex flex-col gap-10">
                    <span className="text-3xl font-semibold">
                      Activities Icon
                    </span>

                    <div className="flex  items-center    relative w-2/3">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/apployee/icon2.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-4 items-center justify-center flex flex-col gap-10">
                    <span className="text-3xl font-semibold">
                      Dashboard Icons
                    </span>

                    <div className="flex  items-center    relative w-full">
                      <SrRight>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/apployee/icon3.png"
                          alt="Background 1"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12 bg-[#46AD77] flex items-center justify-center rounded-3xl mb-10">
                <div className="flex  items-center    relative w-10/12">
                  <SrBottom>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/apployee/img3.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="flex  items-center    relative w-11/12 py-10">
                <SrBottom>
                  <Image
                    className=" relativepos "
                    src="/mobileapps/apployee/lastn.png"
                    alt="Background 1"
                    fill
                  />
                </SrBottom>
                <div className="flex flex-col  items-start justify-center  h-20 top-[5%] left-1 absolute ">
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="Sign up/ sign in"
                  />
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="Screen"
                  />
                </div>
                <div className="flex flex-col  items-start justify-center  h-20 top-[24%] right-10 absolute ">
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="performance"
                  />
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="dashboard"
                  />
                </div>
                <div className="flex flex-col  items-start justify-center  h-20 top-[40%] left-10 absolute ">
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="Company, driver"
                  />
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="Behaviour, Module"
                  />
                </div>
                <div className="flex flex-col  items-start justify-center  h-20 bottom-[20%] right-10 absolute ">
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="Notifications &"
                  />
                  <GradualSpacing
                    className="text-[3vw] font-semibold uppercase "
                    text="settings"
                  />
                </div>
              </div>
              <div className="w-11/12 flex items-center justify-center pb-10">
                <div className="flex  items-center    relative w-full">
                  <SrBottom>
                    <Image
                      className=" relativepos "
                      src="/mobileapps/apployee/last2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
