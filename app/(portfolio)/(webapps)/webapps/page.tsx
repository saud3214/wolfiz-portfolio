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
import { Archivo } from 'next/font/google';
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

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});
export default function Webapps() {
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
    <div className="  h-full w-full flex items-center  ">
      <iframe
        src="https://fuchsia-vacation-202088.framer.app/"
        width="100%"
        height="100%"
        className="absolute"
      ></iframe>

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
        className=" w-full h-full items-center  slideclas swiper-container "
      >
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12  relative   ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl leading-none">
                    <AnimatedText2 text="NDU" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    Developed a web application for NDU with a user-friendly
                    design, robust functionality, and interactive features.
                  </span>
                </div>
                <Link href={'/ndusapp'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
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
                        src="/mobileapps/ndusapp/ndu3.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-nducard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="APPlOYEE" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    Created an innovative web app for APPLOYEE to streamline
                    employee management and enhance user engagement.
                  </span>
                </div>
                <Link href={'/apployee'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
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
                        src="/mobileapps/apployee/apployee.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-apployeecard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    <AnimatedText2 text="6 MORTGAGE" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    Delivered a feature-rich web application, incorporating
                    advanced tools, and responsive design to facilitate mortgage
                    processing.
                  </span>
                </div>
                <Link href={'/6ixmortgage'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
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
                      <source src="/6ixmortgage/6mgcard.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-sixmgcard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl uppercase">
                    <AnimatedText2 text="HockeyMatch" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    Designed a dynamic web app for HockeyMatch to track games
                    and enhance engagement.
                  </span>
                </div>
                <Link href={'/hockeymatch'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
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
                      <source src="/hockey/hmcard.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-hmcard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl uppercase">
                    <AnimatedText2 text="PUAN" />
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    Developed a web application for PUAN, featuring a sleek
                    interface and integrated functionalities that optimize user
                    experience
                  </span>
                </div>
                <Link href={'/puan'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
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
                      <source src="/puan/pucard.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <div className="h-full grid items-center rounded-[100px]">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-pucard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
