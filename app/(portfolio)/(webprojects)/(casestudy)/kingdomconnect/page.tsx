'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Inria_Sans } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import AnimatedCardsKC from '@/app/components/animatedbeam';
import ExpandingCards from '@/app/components/cardsKC';
import useSmoothScroll from '@/app/components/ss';
import AvatarCircles from '@/components/ui/avatar-circles';
import { SrLeft, SrRight, SrBottom } from '@/app/components/revealelement';
import { AnimatedText2 } from '@/app/components/animatedtext';
import ImageStack from '@/app/components/imagecards';
import ExpandingCardsVer from '@/app/components/cardsKCVer';
const urbanist = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function KingdomConnect() {
  const avatarUrls = [
    'https://avatars.githubusercontent.com/u/16860528',
    'https://avatars.githubusercontent.com/u/20110627',
    'https://avatars.githubusercontent.com/u/106103625',
    'https://avatars.githubusercontent.com/u/59228569',
  ];
  useSmoothScroll();
  useEffect(() => {}, []);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 ">
              <div className="w-full md:h-[100vh] h-[70vh] flex items-center justify-center bg-kcbg1 bg-center bg-cover bg-no-repeat relative">
                <div className="w-11/12 h-5/6 items-start lg:justify-start justify-center flex flex-col p-5 ">
                  <div className="w-full items-center justify-center flex">
                    <div className="relative md:w-[15%] w-2/3    ">
                      <Image
                        className=" relativepos "
                        src="/website/kingdom/logo.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <span className="md:text-4xl text-2xl font-bold text-white mt-5">
                    Welcom to
                  </span>
                  <span className="lg:text-8xl text-4xl font-bold text-white mt-2 uppercase">
                    <AnimatedText2 text="Kingdom" />
                  </span>

                  <div className="relative w-[85%]  pt-5  ">
                    <SrLeft>
                      <Image
                        className=" relativepos "
                        src="/website/kingdom/Connect.png"
                        alt="img"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <span className="md:text-4xl text-2xl font-bold text-white mt-5">
                    Support whenever you need it
                  </span>
                  <div className="relative md:w-[15%] w-1/3  pt-5  ">
                    <Image
                      className=" relativepos "
                      src="/website/kingdom/btn.png"
                      alt="img"
                      fill
                    />
                  </div>
                  <div className="w-full  items-center justify-center my-10 md:flex hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ImageStack />
                  </div>
                </div>
              </div>
              <div className="w-full md:h-[100vh] items-center justify-center  flex  relative p-1 md:p-0">
                <div className="w-full md:h-[100vh] h-[60vh] object-cover">
                  <video
                    className="roundvideo object-cover md:h-[100vh]  w-full    "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source src="/website/kingdom/video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute md:w-1/3 w-2/3 top-[10%] md:right-[10%] right-[1%]   ">
                  <Image
                    className=" relativepos "
                    src="/website/kingdom/t1.png"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className=" w-11/12 items-center justify-between flex md:py-10 md:gap-10 gap-5">
                <div className="relative md:w-1/3 w-1/2   ">
                  <SrLeft>
                    <Image
                      className=" relativepos "
                      src="/website/kingdom/aa.png"
                      alt="img"
                      fill
                    />
                  </SrLeft>
                </div>
                <div className="relative md:w-2/3  w-9/12   ">
                  <SrRight>
                    <Image
                      className=" relativepos "
                      src="/website/kingdom/t2.png"
                      alt="img"
                      fill
                    />
                  </SrRight>
                </div>
              </div>
              <div className=" w-11/12 items-center lg:justify-between flex lg:flex-row flex-col  my-10 lg:gap-10 gap-5   overflow-hidden">
                <div className="md:w-1/3 w-full flex items-center justify-center h-[65vh] relative ">
                  <AnimatedCardsKC />
                </div>
                <div className="relative w-2/3   lg:h-[65vh] object-cover  lg:flex hidden ">
                  <SrBottom>
                    <Image
                      className=" relativepos  object-cover"
                      src="/website/kingdom/cpic2.png"
                      alt="img"
                      fill
                    />
                  </SrBottom>
                </div>
              </div>
              <div className="w-full bg-orange-600 py-5 my-10 md:block hidden">
                <VelocityScroll
                  text="Light   Reguler  Bold Italic"
                  default_velocity={3}
                  className=" text-center md:text-7xl text-4xl  text-white font-light "
                />
              </div>
              <div className="w-full items-center justify-center flex ">
                <div className="grid grid-cols-12 w-11/12 overflow-hidden ">
                  <div className="md:col-span-7 col-span-12 flex items-center justify-center bg-black ">
                    <div className="w-full  object-cover">
                      <video
                        className="roundvideo object-cover  w-full    "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/kingdom/video2.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="md:col-span-5 col-span-12 flex items-center justify-center relative pt-5 md:pt-0 ">
                    <div className="relative md:w-2/3 w-10/12 animate-slow-spin ">
                      <Image
                        className=" relativepos  "
                        src="/website/kingdom/t3.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className=" md:w-2/5 w-1/2 absolute ">
                      <Image
                        className=" relativepos  "
                        src="/website/kingdom/logoblue.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:flex hidden items-center justify-center  my-10 overflow-hidden   ">
                    <ExpandingCards />
                  </div>
                  <div className="col-span-12 flex md:hidden items-center justify-center  my-10    ">
                    <ExpandingCardsVer />
                  </div>
                  <div className="col-span-12 items-center justify-center md:flex flex-col gap-10 my-10 hidden ">
                    <span className="text-6xl font-bold capitalize text-[#6E3385]">
                      <span className="text-[#FF7f40]">kingdom</span> connect
                    </span>
                    <div className="w-2/5 relative hover:scale-x-125   transition-all duration-300 ease-in-out  object-cover">
                      <Image
                        className="object-cover relativepos"
                        src="/website/kingdom/img1.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className="w-full flex items-center justify-between  group ">
                      <div className="w-[45%] relative group-hover:scale-x-110   transition-all duration-300 ease-in-out  object-cover">
                        <Image
                          className="object-cover relativepos"
                          src="/website/kingdom/img2.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="w-[45%] relative group-hover:scale-x-110   transition-all duration-300 ease-in-out  object-cover">
                        <Image
                          className="object-cover relativepos"
                          src="/website/kingdom/img3.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-6 col-span-12 pb-10 md:mr-5">
                    <div className=" w-full h-full">
                      <Image
                        className="object-cover relativepos"
                        src="/website/kingdom/img4.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>

                  <div className="md:col-span-6 col-span-12 mb-10 flex flex-col md:ml-5 gap-10">
                    <div className=" w-full h-5/6">
                      <SrRight>
                        <Image
                          className="object-cover relativepos h-5/6"
                          src="/website/kingdom/c1.png"
                          alt="img"
                          fill
                        />
                      </SrRight>
                    </div>
                    <div className=" w-full h-5/6 relative">
                      <SrRight>
                        <Image
                          className="object-cover relativepos h-5/6"
                          src="/website/kingdom/c2.png"
                          alt="img"
                          fill
                        />
                      </SrRight>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <AvatarCircles
                          numPeople={999}
                          avatarUrls={avatarUrls}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 mb-10 flex flex-col mr-5 ">
                    <div className="w-full  object-cover  h-full">
                      <video
                        className="roundvideo object-cover  w-full    "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/kingdom/logo.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-span-7 bg-[#6E3385] hover:bg-[#FF7f40]  ml-5 mb-10">
                    <div className=" w-full ">
                      <Image
                        className="object-cover relativepos "
                        src="/website/kingdom/c3.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center w-full">
                <div className="w-full  object-cover h-full">
                  <video
                    className="roundvideo object-cover  w-full    "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source
                      src="/website/kingdom/video3n.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
