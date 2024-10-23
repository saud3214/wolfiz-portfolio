'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';

import GradualSpacing from '@/components/magicui/gradual-spacing';
import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  RevealOnScroll,
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
            <div className="flex flex-col items-center justify-center col-span-12 ">
              <div className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-center bg-zarbg1 bg-cover bg-center bg-no-repeat md:p-10 p-5 mb-10 md:pt-20  overflow-hidden">
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 md:items-start">
                  <div className="flex flex-col items-center justify-center h-24 capitalize lg:h-40">
                    <GradualSpacing
                      className="md:text-[5vw] text-[10vw] font-bold text-white   leading-none "
                      text="We maximize"
                    />
                    <GradualSpacing
                      className="md:text-[5vw] text-[10vw] font-bold text-white  leading-none "
                      text="your success"
                    />
                  </div>
                  <div className="flex items-center justify-center w-full mt-5 md:justify-start lg:ps-20">
                    <div className="relative  md:w-[30%] w-10/12  pt-5 ">
                      <Image
                        className="object-cover relativepos"
                        src="/website/zar/logo.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className="items-center justify-center hidden w-1/2 lg:w-3/12 lg:flex">
                  <div className="relative w-3/4 rotate-2 ">
                    <SrBottom>
                      <Image
                        className="object-cover relativepos"
                        src="/website/zar/down2.png"
                        alt="img"
                        fill
                      />
                    </SrBottom>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mb-10">
                <div className="relative w-full ">
                  <RevealOnScroll>
                    <Image
                      className="object-cover relativepos"
                      src="/website/zar/about.png"
                      alt="img"
                      fill
                    />
                  </RevealOnScroll>
                </div>
                <div className="relative w-full ">
                  <RevealOnScroll>
                    <Image
                      className="object-cover relativepos"
                      src="/website/zar/ps.png"
                      alt="img"
                      fill
                    />
                  </RevealOnScroll>
                </div>
              </div>
              <div className="flex items-center justify-center w-11/12 mb-10 lg:py-10">
                <div className="grid w-full grid-cols-12">
                  <div className="flex items-start justify-start col-span-12 ">
                    <SrLeft>
                      <span className="pb-10 text-5xl font-bold lg:text-7xl">
                        Colors And <br /> Typography
                      </span>
                    </SrLeft>
                  </div>
                  <div className="flex items-end justify-center col-span-12 pt-10 md:col-span-6 md:justify-start md:pt-0">
                    <div className="relative w-11/12 md:w-3/4 ">
                      <SrLeft>
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/text.png"
                          alt="img"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center col-span-12 md:col-span-6 md:items-end">
                    <div className="relative w-11/12 mt-10 md:w-3/4 ">
                      <SrRight>
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/aa.png"
                          alt="img"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center w-full ">
                <div className="relative w-1/2 h-full ">
                  <SrLeft>
                    <Image
                      className="object-cover h-full relativepos"
                      src="/website/zar/cap2.png"
                      alt="img"
                      fill
                    />
                  </SrLeft>
                </div>
                <div className="relative w-1/2 h-full ">
                  <SrRight>
                    <Image
                      className="object-cover relativepos"
                      src="/website/zar/shrt.png"
                      alt="img"
                      fill
                    />
                  </SrRight>
                </div>
              </div>
              <div className="w-full h-[100vh] items-center justify-center  flex ">
                <div className="w-full h-[100vh] object-cover">
                  <video
                    className="roundvideo object-cover h-[100vh] w-full     "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source src="/website/zar/laptop2.mp4 " type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="w-full lg:h-[100vh] my-10 flex flex-col items-center justify-center">
                <span className="pb-5 text-5xl font-semibold">
                  Design Process
                </span>

                <div className="w-11/12 bg-zarbg3 bg-center bg-cover bg-no-repeat md:h-[80vh] items-center justify-center flex flex-col gap-5">
                  <div className="flex items-center justify-center w-full gap-5 md:gap-10">
                    <div className="md:w-[19%]  w-1/3 group">
                      <div className="relative flex w-full group-hover:hidden ">
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/dp1.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative hidden w-full group-hover:flex">
                        <Image
                          className="object-cover relativepos group-hover:scale-125"
                          src="/website/zar/dp1b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>

                    <div className="md:w-[19%]  w-1/3 group">
                      <div className="relative flex w-full group-hover:hidden ">
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/dp2.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative hidden w-full group-hover:flex">
                        <Image
                          className="object-cover relativepos group-hover:scale-125"
                          src="/website/zar/dp2b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full gap-5 md:gap-10">
                    <div className="md:w-[19%]  w-1/3 group">
                      <div className="relative flex w-full group-hover:hidden ">
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/dp3.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative hidden w-full group-hover:flex">
                        <Image
                          className="object-cover relativepos group-hover:scale-125"
                          src="/website/zar/dp3b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                    <div className="md:w-[19%]  w-1/3 group">
                      <div className="relative flex w-full group-hover:hidden ">
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/dp4.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative hidden w-full group-hover:flex">
                        <Image
                          className="object-cover relativepos group-hover:scale-125"
                          src="/website/zar/dp4b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                    <div className="md:w-[19%]  w-1/3 group">
                      <div className="relative flex w-full group-hover:hidden ">
                        <Image
                          className="object-cover relativepos"
                          src="/website/zar/dp5.png"
                          alt="img"
                          fill
                        />
                      </div>
                      <div className="relative hidden w-full group-hover:flex">
                        <Image
                          className="object-cover relativepos group-hover:scale-125"
                          src="/website/zar/dp5b.png"
                          alt="img"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full">
                <SrBottom>
                  <div className="relative w-full ">
                    <Image
                      className="relativepos "
                      src="/website/zar/sm1.png"
                      alt="img"
                      fill
                    />
                  </div>
                </SrBottom>
                <div className="flex items-center justify-center w-full">
                  <div className="relative flex w-1/2 h-full ">
                    <SrLeft>
                      <Image
                        className="relativepos "
                        src="/website/zar/sm2n.png"
                        alt="img"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="relative w-1/2 ">
                    <SrRight>
                      <Image
                        className="relativepos "
                        src="/website/zar/sm3.png"
                        alt="img"
                        fill
                      />
                    </SrRight>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full py-10 text-center bg-white bg-center bg-no-repeat bg-cover hover:bg-zarbg2">
                <span className="text-xl capitalize">our services</span>

                <span className="text-4xl font-semibold capitalize">
                  Educational Management <br /> Consulting services
                </span>

                <div className="grid w-11/12 grid-cols-12 mt-10 ">
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrLeft>
                        <Image
                          className="relativepos "
                          src="/website/zar/em1.png"
                          alt="img"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrBottom>
                        <Image
                          className="relativepos "
                          src="/website/zar/em2.png"
                          alt="img"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrBottom>
                        <Image
                          className="relativepos "
                          src="/website/zar/em3n.png"
                          alt="img"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrRight>
                        <Image
                          className="relativepos "
                          src="/website/zar/em4.png"
                          alt="img"
                          fill
                        />
                      </SrRight>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrLeft>
                        <Image
                          className="relativepos "
                          src="/website/zar/em5.png"
                          alt="img"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrBottom>
                        <Image
                          className="relativepos "
                          src="/website/zar/em6.png"
                          alt="img"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrBottom>
                        <Image
                          className="relativepos "
                          src="/website/zar/em7.png"
                          alt="img"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="relative w-full ">
                      <SrRight>
                        <Image
                          className="relativepos "
                          src="/website/zar/em8.png"
                          alt="img"
                          fill
                        />
                      </SrRight>
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
