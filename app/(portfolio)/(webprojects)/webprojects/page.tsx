'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { csimages, backgroundimages } from '../webprojects/animation';
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
export default function Webprojects() {
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
    <SlideFromSide>
      <div className="  h-full w-full flex items-center  ">
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
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ffff] via-[#EA0000] to-black flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="VIENNA" />
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
                  <Link href={'/vienna'} className="mt-8 ">
                    <button className="button arrow">Open Case Study</button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#EA0000] h-[24vh]">
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
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down--day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-no-repeat bg-fit imgcontainer  h-[65vh] bg-nht-card  cursor-pointer   shadow-xl drop-shadow-xl csimg"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="swiper-slide  flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E6F8FA] via-[#7cd9e3] to-[#22CADB]">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem] text-5xl ">
                      <AnimatedText2 text="Rockzfx" />
                    </text>
                  </div>
                  <span className="text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    In Ticino we offer you state-of-the-art skin patches and
                    prostheses to forget about baldness, receding hairline and
                    thinning.
                  </span>
                  <Link href={'/rockzfx'} className="mt-8 ">
                    <motion.button className="button arrow">
                      Open Case Study
                    </motion.button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#7cd9e3] h-[24vh] shadow-lg drop-shadow-lg">
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
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-contains bg-no-repeat bg-cover imgcontainer h-[65vh] bg-rzfx-card  cursor-pointer   shadow-xl drop-shadow-xl csimg"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" swiper-slide bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#C2F1FC] via-[#F9E96E] to-[#C18E3A] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="Scantifix" />
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
                  <Link href={'/scantifix'} className="mt-8 ">
                    <button className="button arrow">Open Case Study</button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#F9E96E] h-[24vh]  drop-shadow-lg shadow-lg">
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
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-contains bg-cover bg-no-repeat imgcontainer h-[65vh] bg-sfcard shadow-2xl drop-shadow-2xl csimg "></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4580AE] via-[#26267F] to-[#000] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="Naeem Apparel" />
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
                  <Link href={'/naeemapparel'} className="mt-8 ">
                    <button className="button arrow">Open Case Study</button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#26267F] h-[24vh]  drop-shadow-lg shadow-lg">
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
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-contains bg-cover bg-no-repeat imgcontainer h-[65vh] bg-sfcard shadow-2xl drop-shadow-2xl  csimg"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" swiper-slide bg-gradient-to-tl from-[#CAE8F3] via-[#f1dcdc] to-[#ffc7c7] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="PFB" />
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
                  <Link href={'/pfb'} className="mt-8 ">
                    <button className="button arrow">Open Case Study</button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#ffc7c7] h-[24vh]  drop-shadow-lg shadow-lg">
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
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-contains bg-cover bg-no-repeat imgcontainer h-[65vh] bg-pfbcard shadow-2xl drop-shadow-2xl csimg "></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#00E0C5] via-[#365C89] to-[#000] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="Preceptors" />
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
                  <Link href={'/preceptorsguide'} className="mt-8 ">
                    <button className="button arrow">Open Case Study</button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#365C89] h-[24vh]  drop-shadow-lg shadow-lg">
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
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-contains bg-cover bg-no-repeat imgcontainer h-[65vh] bg-sfcard shadow-2xl drop-shadow-2xl csimg "></div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide lpgrad flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white   2xl:text-[5.4rem] xl:text-[4.5rem]  text-5xl contents ">
                      <GradientFlowText text="LeadsPeddlers" />
                    </text>
                  </div>
                  <span className="text-xl 2xl:w-2/3 xl:w-3/4   text-left overflow-hidden text-white h-[85px]">
                    In Ticino we offer you state-of-the-art skin patches and
                    prostheses to forget about baldness, receding hairline and
                    thinning.
                  </span>
                  <Link href={'/leadspeddllers'} className="mt-8 ">
                    <motion.button className="button arrow">
                      Open Case Study
                    </motion.button>
                  </Link>
                  <div className="lg:h-[10vh] h-[3vh] "></div>
                  <div className=" relative border-4 rounded-sm border-[#df5745] h-[24vh]">
                    <div
                      id="videoDiv"
                      className="video-container flex flex-col h-[24vh] rounded-sm"
                    >
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="h-[23.3vh] rounded-sm"
                      >
                        <source
                          src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <Link href="/nht" className="h-full grid items-center">
                  <div className="bg-center bg-contains bg-no-repeat bg-cover imgcontainer h-[65vh] bg-lp-card  cursor-pointer shadow-2xl drop-shadow-2xl csimg"></div>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </SlideFromSide>
  );
}
