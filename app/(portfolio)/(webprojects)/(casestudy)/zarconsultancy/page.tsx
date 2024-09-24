'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';
import { MarqueeDemo } from '@/app/components/cards6';

import GradualSpacing from '@/components/magicui/gradual-spacing';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  RevealOnScrollLeft,
} from '@/app/components/revealelement';

const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function ZarConsultancy() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              <div className="w-full h-[80vh] flex items-center justify-center bg-zarbg1 bg-cover bg-center bg-no-repeat p-10 mb-10 pt-20 overflow-hidden">
                <div className="w-1/2 h-full items-start justify-center flex flex-col">
                  <div className="flex flex-col items-center justify-center  h-40  capitalize">
                    <GradualSpacing
                      className="text-[5vw] font-bold text-white   leading-none "
                      text="We maximize"
                    />
                    <GradualSpacing
                      className="text-[5vw] font-bold text-white  leading-none "
                      text="your success"
                    />
                  </div>
                  <div className="w-full flex items-center justify-start mt-5 ps-20">
                    <div className="relative  w-[30%]   ">
                      <Image
                        className=" relativepos object-cover"
                        src="/website/zar/logo.png"
                        alt="img"
                        fill
                      />
                    </div>{' '}
                  </div>
                </div>
                <div className="w-3/12 flex items-center justify-center">
                  <div className="relative  w-11/12   ">
                    <Image
                      className=" relativepos object-cover"
                      src="/website/zar/down.png"
                      alt="img"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mb-10">
                <div className="relative  w-full   ">
                  <Image
                    className=" relativepos object-cover"
                    src="/website/zar/about.png"
                    alt="img"
                    fill
                  />
                </div>
                <div className="relative  w-full   ">
                  <Image
                    className=" relativepos object-cover"
                    src="/website/zar/ps.png"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className="w-11/12 items-center justify-center flex mb-10">
                <div className="grid grid-cols-12 w-full">
                  <div className="col-span-6 items-center justify-center flex flex-col">
                    <span className="text-7xl font-bold">
                      Colors And <br /> Typography
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-start justify-center flex ">
                <div className="relative  w-1/2 h-full   ">
                  <Image
                    className=" relativepos object-cover h-full"
                    src="/website/zar/cap2.png"
                    alt="img"
                    fill
                  />
                </div>
                <div className="relative  w-1/2  h-full  ">
                  <Image
                    className=" relativepos object-cover"
                    src="/website/zar/shrt.png"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-[100vh] items-center justify-center bg-zarbg2 bg-cover bg-center bg-no-repeat flex ">
                <div className="w-1/2 h-[70vh]">
                  <video
                    className="roundvideo object-cover h-[50vh] w-full rounded-3xl   "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source
                      src="/website/grammarnow/video2.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="w-full h-[100vh] my-10 flex flex-col items-center justify-center">
                <span className="text-5xl font-semibold mb-4">
                  Design Process
                </span>
                <div className="w-11/12 bg-zarbg3 bg-center bg-cover bg-no-repeat h-[80vh] items-center justify-center flex flex-col gap-5">
                  <div className=" w-full items-center justify-center flex gap-10 ">
                    <div className="w-[19%] group">
                      <div className="relative w-full flex group-hover:hidden ">
                        <Image
                          className="relativepos object-cover"
                          src="/website/zar/dp1.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative w-full hidden group-hover:flex">
                        <Image
                          className="relativepos object-cover  group-hover:scale-125"
                          src="/website/zar/dp1b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>

                    <div className="w-[19%] group">
                      <div className="relative w-full flex group-hover:hidden ">
                        <Image
                          className="relativepos object-cover"
                          src="/website/zar/dp2.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative w-full hidden group-hover:flex">
                        <Image
                          className="relativepos object-cover  group-hover:scale-125"
                          src="/website/zar/dp2b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" w-full items-center justify-center flex gap-10 ">
                    <div className="w-[19%] group">
                      <div className="relative w-full flex group-hover:hidden ">
                        <Image
                          className="relativepos object-cover"
                          src="/website/zar/dp3.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative w-full hidden group-hover:flex">
                        <Image
                          className="relativepos object-cover  group-hover:scale-125"
                          src="/website/zar/dp3b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-[19%] group">
                      <div className="relative w-full flex group-hover:hidden ">
                        <Image
                          className="relativepos object-cover"
                          src="/website/zar/dp4.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative w-full hidden group-hover:flex">
                        <Image
                          className="relativepos object-cover  group-hover:scale-125"
                          src="/website/zar/dp4b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-[19%] group">
                      <div className="relative w-full flex group-hover:hidden ">
                        <Image
                          className="relativepos object-cover"
                          src="/website/zar/dp5.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative w-full hidden group-hover:flex">
                        <Image
                          className="relativepos object-cover  group-hover:scale-125"
                          src="/website/zar/dp5b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full items-center justify-center flex flex-col">
                <div className="relative w-full ">
                  <Image
                    className="relativepos "
                    src="/website/zar/sm1.png"
                    alt="img"
                    fill
                  />
                </div>
                <div className="w-full items-center justify-center flex">
                  <div className="relative w-1/2 h-full flex ">
                    <Image
                      className="relativepos "
                      src="/website/zar/sm2n.png"
                      alt="img"
                      fill
                    />
                  </div>
                  <div className="relative w-1/2 ">
                    <Image
                      className="relativepos "
                      src="/website/zar/sm3.png"
                      alt="img"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-white hover:bg-zarbg2 bg-center bg-cover bg-no-repeat py-10 text-center">
                <span className="capitalize text-xl">our services</span>
                <span className="capitalize text-4xl font-semibold">
                  Educational Management <br /> Consulting services
                </span>
                <div className=" grid grid-cols-12 w-11/12 mt-10 ">
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em1.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em2.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em3n.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em4.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em5.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em6.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em7.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full ">
                      <Image
                        className="relativepos "
                        src="/website/zar/em8.png"
                        alt="img"
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
    </SlideFromRight>
  );
}
