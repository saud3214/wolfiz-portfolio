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
import { Pridi } from 'next/font/google';
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
const pridi = Pridi({
  subsets: ['latin'], // Adjust the subsets according to your needs
  weight: ['400', '700', '600'], // Add the weights you need
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
          className={`  w-full h-full items-center  slideclas swiper-container  ${pridi.className} `}
        >
          <SwiperSlide className=" swiper-slide bg-gradient-to-tl from-[#ffff] via-[#EA0000] to-black flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="VIENNA" />
                    </text>
                  </div>
                  <div className={`text-left ${archivo.className}`}>
                    <span className="  text-xl w-2/3 text-left  overflow-hidden text-white h-[85px]">
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
                          src="/mobileapps/vienna/vcard.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-vucard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#ffff] via-[#c29947] to-[#282c31] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="1947 PA" />
                    </text>
                  </div>
                  <div className={`text-left ${archivo.className}`}>
                    <span className="  text-xl w-2/3 text-left  overflow-hidden text-white h-[85px]">
                      In Ticino we offer you state-of-the-art skin patches and
                      prostheses to forget about baldness, receding hairline and
                      thinning – without ever having to take them off, not even
                      for washing and playing sports!
                    </span>
                  </div>
                  <Link href={'/1947partitionarchive'} className="mt-8 ">
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
                          src="/website/1947pa/1947card.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-card1947  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a2da8a] via-[#2188BB] to-[#7CB862] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="GRAMMAR" />
                    </text>
                  </div>
                  <div className={`text-left ${archivo.className}`}>
                    <span className="  text-xl w-2/3 text-left  overflow-hidden text-white h-[85px]">
                      In Ticino we offer you state-of-the-art skin patches and
                      prostheses to forget about baldness, receding hairline and
                      thinning – without ever having to take them off, not even
                      for washing and playing sports!
                    </span>
                  </div>
                  <Link href={'/grammarnow'} className="mt-8 ">
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
                          src="/website/grammarnow/pscard.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-gncard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-[#FF7F40] to-[#6E3385] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="KINGDOM" />
                    </text>
                  </div>
                  <div className={`text-left ${archivo.className}`}>
                    <span className="  text-xl w-2/3 text-left  overflow-hidden text-white h-[85px]">
                      In Ticino we offer you state-of-the-art skin patches and
                      prostheses to forget about baldness, receding hairline and
                      thinning – without ever having to take them off, not even
                      for washing and playing sports!
                    </span>
                  </div>
                  <Link href={'/kingdomconnect'} className="mt-8 ">
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
                          src="/website/kingdom/kccard.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-kccard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swiper-slide bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#00a89f] to-[#066964] flex items-center justify-center">
            <div className="slide-inner grid grid-cols-12    ">
              <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
                <div className="titlendis flex flex-col items-start">
                  <div className="titledisplay">
                    <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                      <AnimatedText2 text="ZAR" />
                    </text>
                  </div>
                  <div className={`text-left ${archivo.className}`}>
                    <span className="  text-xl w-2/3 text-left  overflow-hidden text-white h-[85px]">
                      In Ticino we offer you state-of-the-art skin patches and
                      prostheses to forget about baldness, receding hairline and
                      thinning – without ever having to take them off, not even
                      for washing and playing sports!
                    </span>
                  </div>
                  <Link href={'/zarconsultancy'} className="mt-8 ">
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
                          src="/website/zar/zarcard.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
                <div className="h-full grid items-center">
                  <div className="bg-center bg-no-repeat bg-cover imgcontainer  h-[65vh] bg-zccard  cursor-pointer   csimg rounded-3xl shadow-glow-gray"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </SlideFromSide>
  );
}
