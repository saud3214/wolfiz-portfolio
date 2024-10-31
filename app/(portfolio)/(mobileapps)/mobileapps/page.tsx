'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import {
  csimages,
  backgroundimages,
} from '../../(webprojects)/webprojects/animation';
import { Poppins } from 'next/font/google';
import { easeIn, motion } from 'framer-motion';
import { SlideFromSide } from '../../../components/pagetransition';

import {
  AnimatedText,
  AnimatedText2,
  GradientFlowText,
  BounceSpinText,
} from '../../../components/animatedtext';

import { Mousewheel, EffectFade, Pagination } from 'swiper/modules';
SwiperCore.use([Mousewheel, EffectFade, Pagination]);

const archivo = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});
export default function Mobileapps() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const interleaveOffset = 0.8; // Adjust this value as needed

  useEffect(() => {
    csimages();

    const handleProgress = () => {
      const swiper = swiperRef.current;
      if (swiper) {
        swiper.slides.forEach((slide: HTMLElement) => {
          const slideProgress = (slide as any).progress; // Type casting here
          const innerOffset = swiper.height * interleaveOffset;
          const innerTranslate = slideProgress * innerOffset * -1;

          gsap.set(slide.querySelector('.slide-inner'), {
            y: innerTranslate,
          });
        });
      }
    };
    const handleSetTransition = (slider: any, speed: number) => {
      const swiper = swiperRef.current;
      if (swiper) {
        swiper.slides.forEach((slide) => {
          slide.style.transition = `${speed}ms`;
          const innerElement = slide.querySelector(
            '.slide-inner',
          ) as HTMLElement;
          if (innerElement) {
            innerElement.style.transition = `${speed}ms`;
          }
        });
      }
    };

    const handleMouseEnter = (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    };

    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach((bullet, index) => {
      const mouseEnterHandler = () => handleMouseEnter(index);
      bullet.addEventListener('mouseenter', mouseEnterHandler);

      const swiper = swiperRef.current;

      if (swiper) {
        swiper.on('progress', handleProgress);
        swiper.on('setTransition', handleSetTransition);

        // Cleanup function to remove event listeners
        return () => {
          swiper.off('progress', handleProgress);
          swiper.off('setTransition', handleSetTransition);
          bullet.removeEventListener('mouseenter', mouseEnterHandler);
        };
      }
    });
  }, []);

  return (
    <div className="flex items-center w-full h-full ">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        direction="vertical"
        mousewheel={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1000}
        className="items-center w-full h-full slideclas swiper-container"
      >
        {/* <SwiperSlide className=" swiper-slide bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#FEAB16] via-[#E84D21] to-[#DF2826] flex items-center justify-center">
            <div className="grid grid-cols-12 slide-inner ">
              <div className="flex order-2 h-full col-span-12 lg:col-span-5 protitle lg:order-1">
                <div className="flex flex-col items-start titlendis">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="SUE CHEF" />
                    </text>
                  </div>
                  <div className={archivo.className}>
                    <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                      In Ticino we offer you state-of-the-art skin patches and
                      prostheses to forget about baldness, receding hairline and
                      thinning – without ever having to take them off, not even
                      for washing and playing sports!
                    </span>
                  </div>
                  <Link href={'/suechef'} className="mt-8 ">
                    <button className="button arrow2">Open Case Study</button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#DF2826] h-[24vh]">
                    <div
                      id="videoDiv"
                      className="video-container flex flex-col h-[24vh]"
                    >
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="h-[23.3vh]"
                      >
                        <source
                          src="https://www.shutterstock.com/shutterstock/videos/3494067845/preview/stock-footage-neon-orange-color-clear-waving-flag-d-vivid-flag-waving-colorful-neon-orange-seamless-loop.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 h-full col-span-12 lg:col-span-7 lg:order-2 ">
                <div className="grid items-center h-full">
                  <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-sccard  cursor-pointer   shadow-glow-gray  rounded-3xl csimg"></div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        <SwiperSlide className=" swiper-slide bg-bg1 bg-center bg-cover bg-no-repeat flex items-center justify-center">
          <div className="grid grid-cols-12 slide-inner ">
            <div className="flex order-2 h-full col-span-12 lg:col-span-5 protitle lg:order-1">
              <div className="flex flex-col items-start titlendis">
                <div className="titledisplay">
                  <text className="target-text text-left text-black  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="YALAXI" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-black h-[85px]">
                    Developed an innovative mobile app with a user-friendly
                    design, functionality & integrated features.
                  </span>
                </div>
                <Link href={'/yalaxi'} className="mt-8 ">
                  <button className={`button arrow2 ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh] w-full object-cover "
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                    >
                      <source
                        src="/mobileapps/yalaxi/yalaxi.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 h-full col-span-12 lg:col-span-7 lg:order-2 ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-yalaxicard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide bg-bg2 bg-center bg-cover bg-no-repeat flex items-center justify-center">
          <div className="grid grid-cols-12 slide-inner ">
            <div className="flex order-2 h-full col-span-12 lg:col-span-5 protitle lg:order-1">
              <div className="flex flex-col items-start titlendis">
                <div className="titledisplay">
                  <text className="target-text text-left text-black  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="AVCONS" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-black h-[85px]">
                    Created a robust mobile application for Avcons with advanced
                    design & functionalities to streamline operations.
                  </span>
                </div>
                <Link href={'/avcons'} className="mt-8 ">
                  <button className={`button arrow2 ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh] w-full object-cover "
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                    >
                      <source
                        src="/mobileapps/avcons/avcons2.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 h-full col-span-12 lg:col-span-7 lg:order-2 ">
              <div className="grid items-center h-full">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-avconscard  cursor-pointer  shadow-glow-gray  rounded-3xl  csimg"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide bg-bg3 bg-center bg-cover bg-no-repeat flex items-center justify-center">
          <div className="grid grid-cols-12 slide-inner ">
            <div className="flex order-2 h-full col-span-12 lg:col-span-5 protitle lg:order-1">
              <div className="flex flex-col items-start titlendis">
                <div className="titledisplay">
                  <text className="target-text text-left text-black  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="DOROOS" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-black h-[85px]">
                    Designed and implemented a feature-rich mobile app for
                    Doroos, focusing on user experience and engagement.
                  </span>
                </div>
                <Link href={'/doroos'} className="mt-8 ">
                  <button className={`button arrow2 ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh] w-full object-cover "
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                    >
                      <source
                        src="/mobileapps/doroos/doros.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 h-full col-span-12 lg:col-span-7 lg:order-2 ">
              <div className="grid items-center h-full">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-dorooscard  cursor-pointer shadow-glow-gray rounded-3xl   csimg"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" swiper-slide bg-bg4 bg-center bg-cover bg-no-repeat flex items-center justify-center">
          <div className="grid grid-cols-12 slide-inner ">
            <div className="flex order-2 h-full col-span-12 lg:col-span-5 protitle lg:order-1">
              <div className="flex flex-col items-start titlendis">
                <div className="titledisplay">
                  <text className="target-text text-left text-black  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="PEPTIDE" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-black h-[85px]">
                    Delivered a modern mobile application for Peptide with
                    user-friendly design & navigation to support customer needs.
                  </span>
                </div>
                <Link href={'/peptide'} className="mt-8 ">
                  <button className={`button arrow2 ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh] w-full object-cover "
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                    >
                      <source
                        src="/mobileapps/peptide/pepcard.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 h-full col-span-12 lg:col-span-7 lg:order-2 ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-peptidecard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" swiper-slide bg-bg5 bg-center bg-cover bg-no-repeat flex items-center justify-center">
          <div className="grid grid-cols-12 slide-inner ">
            <div className="flex order-2 h-full col-span-12 lg:col-span-5 protitle lg:order-1">
              <div className="flex flex-col items-start titlendis">
                <div className="titledisplay">
                  <text className="target-text text-left text-black  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="Simi Riezen" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-black h-[85px]">
                    Developed a dynamic mobile app for Simi Riezen, featuring a
                    visually appealing interface & performance optimization
                  </span>
                </div>
                <Link href={'/simireizen'} className="mt-8 ">
                  <button className={`button arrow2 ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh] w-full object-cover "
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                    >
                      <source
                        src="/mobileapps/sr/srcard.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 h-full col-span-12 lg:col-span-7 lg:order-2 ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-srcard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
