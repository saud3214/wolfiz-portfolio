'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { csimages, backgroundimages } from '../webprojects/animation';
import { Poppins } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { SlideFromSide } from '../../../components/pagetransition';
import {
  AnimatedText,
  AnimatedText2,
  GradientFlowText,
  BounceSpinText,
} from '../../../components/animatedtext';
import { motion } from 'framer-motion';

import { Mousewheel, EffectFade, Pagination } from 'swiper/modules';
SwiperCore.use([Mousewheel, EffectFade, Pagination]);

const archivo = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});
const pridi = Playfair_Display({
  subsets: ['latin'], // Adjust the subsets according to your needs
  weight: ['400', '700', '600'], // Add the weights you need
});
const flipAnimation = {
  initial: { rotateX: 180 },
  animate: { rotateX: 360, transition: { duration: 1, ease: 'easeInOut' } },
};
export default function Webprojects() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const interleaveOffset = 0.8; // Adjust this value as needed

  useEffect(() => {
    csimages();

    const handleProgress = () => {
      const swiper = swiperRef.current;
      if (swiper) {
        swiper.slides.forEach((slide: HTMLElement) => {
          const slideProgress = (slide as any).progress;
          const innerOffset = swiper.height * interleaveOffset;

          // Restrict translation only for slides in the visible range
          let innerTranslate = 0; // Default value for fully out-of-view slides

          if (slideProgress >= -1 && slideProgress <= 1) {
            innerTranslate = slideProgress * innerOffset * -1;
          }

          gsap.set(slide.querySelector('.slide-inner'), {
            y: innerTranslate,
          });

          if (slideProgress < -1 || slideProgress > 0) {
            gsap.set(slide, { opacity: 0, visibility: 'hidden' });
          } else {
            gsap.set(slide, { opacity: 1, visibility: 'visible' });
          }
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
      <div className="object-cover videoContainer">
        <video
          id="roundvideo"
          autoPlay
          muted
          loop
          preload="yes"
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        direction="vertical"
        mousewheel={true}
        spaceBetween={500}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1000}
        className={`  w-full h-full items-center  slideclas swiper-container  ${pridi.className} bg-black/50 backdrop-blur-sm `}
      >
        <SwiperSlide className=" swiper-slide  flex items-center justify-center  overflow-hidden">
          <div className="slide-inner grid grid-cols-12  overflow-hidden   ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className=" relative border-1 rounded-sm  md:h-[24vh] h-[20vh] md:w-[60%] w-full md:hidden flex ">
                  <motion.div
                    className="flip-container"
                    variants={flipAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                  >
                    <div
                      id="videoDiv"
                      className="video-container flex flex-col h-[24vh] w-full object-cover   "
                    >
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="md:h-[23.3vh] h-[20vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                      >
                        <source
                          src="/mobileapps/vienna/vcard.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </motion.div>
                </div>
                <div className="titledisplay leading-none">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  lg:text-5xl  text-xl leading-none">
                    <AnimatedText2 text="VIENNA" />
                  </text>
                </div>
                <div className={`text-left ${archivo.className}`}>
                  <span className="  md:text-xl text-base w-2/3 text-left  overflow-hidden text-white  md:h-[85px] h-16">
                    Provided website services, design, SEO, and user experience
                    enhancements to showcase their unique identity.
                  </span>
                </div>
                <Link href={'/vienna'} className="mt-8 md:block hidden ">
                  <button className={`button arrow ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>

                <div className=" relative border-1 rounded-sm  md:h-[24vh] h-[20vh] md:w-[60%] w-full md:flex hidden ">
                  <motion.div
                    className="flip-container"
                    variants={flipAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                  >
                    <div
                      id="videoDiv"
                      className="video-container flex flex-col h-[24vh] w-full object-cover   "
                    >
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="md:h-[23.3vh] h-[20vh]  shadow-glow-gray w-full object-cover rounded-2xl"
                      >
                        <source
                          src="/mobileapps/vienna/vcard.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </motion.div>
                </div>
                <Link href={'/vienna'} className="mt-8 md:hidden block ">
                  <button className={`button arrow ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12  order-1 lg:order-2 h-full  ">
              <div className="h-full grid items-center">
                <div className="bg-center bg-no-repeat bg-cover imgcontainer  md:h-[65vh] h-[50vh] bg-vucard  cursor-pointer md:block hidden  csimg rounded-3xl shadow-glow-gray"></div>
                <div className="bg-center bg-no-repeat bg-cover imgcontainer   h-[60vh] bg-vucard  cursor-pointer md:hidden block    rounded-3xl shadow-glow-gray"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" swiper-slide flex items-center justify-center">
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
                    Created a professional website featuring custom design,
                    optimization, and streamlined navigation.
                  </span>
                </div>
                <Link href={'/grammarnow'} className="mt-8 ">
                  <button className={`button arrow ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%] ">
                  <motion.div
                    className="flip-container"
                    variants={flipAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                  >
                    <div
                      id="videoDiv"
                      className="video-container flex flex-col h-[24vh] w-full object-cover  "
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
                  </motion.div>
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
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
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
                    Developed a robust website for Kingdom, integrating design
                    and user-friendly features for their online presence.
                  </span>
                </div>
                <Link href={'/kingdomconnect'} className="mt-8 ">
                  <button className={`button arrow ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <motion.div
                    className="flip-container"
                    variants={flipAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                  >
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
                  </motion.div>
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
        <SwiperSlide className=" swiper-slide   flex items-center justify-center">
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
                    Executed a modern website design and responsive
                    functionality for smooth user experience.
                  </span>
                </div>
                <Link href={'/1947partitionarchive'} className="mt-8 ">
                  <button className={`button arrow ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <motion.div
                    className="flip-container"
                    variants={flipAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
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
        <SwiperSlide className=" swiper-slide  flex items-center justify-center">
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
                    Delivered a customized website solution; design and content
                    strategy ensuring optimal engagement.
                  </span>
                </div>
                <Link href={'/zarconsultancy'} className="mt-8 ">
                  <button className={`button arrow ${archivo.className}`}>
                    Open Case Study
                  </button>
                </Link>
                <div className="lg:h-[10vh] h-[3vh] "></div>
                <div className=" relative border-1 rounded-sm  h-[24vh] w-[60%]">
                  <motion.div
                    className="flip-container"
                    variants={flipAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                  >
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
                  </motion.div>
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
  );
}
