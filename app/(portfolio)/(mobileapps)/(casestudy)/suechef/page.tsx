'use client';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';

import {
  setupScrollAnimation,
  movingText2,
  animation1,
  animation2,
  animation3,
  animation4,
  ScrollOnTop,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import { AnimatedBeamMultipleOutputDemo } from '@/app/components/animatedbeam';
import WordPullUp from '@/components/magicui/word-pull-up';
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
} from '@/app/components/revealelement';
import ImageCarousel from '@/app/components/imagecarousel';
import { BorderBeam } from '@/components/magicui/border-beam';
import Ripple from '@/components/magicui/ripple';
const urbanist = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function SueChef() {
  const [activeImage, setActiveImage] = useState(1);
  const containerRef = useRef(null);

  // Get the scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Map the scrollYProgress to a horizontal scroll
  const x = useTransform(scrollYProgress, [0.5, 0.67], ['0%', '-200%']);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/mobileapps/sc/c1.png',
    '/mobileapps/sc/c2.png',
    '/mobileapps/sc/c3.png',
    '/mobileapps/sc/c4.png',
  ];
  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
    movingText2();
    animation1();
    animation2();
    animation3();
    animation4();
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] overflow-auto ">
            <div className="flex  col-span-12 items-center justify-center flex-col w-full overflow-hidden ">
              <div className="flex flex-col items-start justify-center h-[100vh]  w-11/12 relative  pb-10  ">
                <div className="flex  items-center   justify-center  relative w-2/12 mt-10 ">
                  <Image
                    className=" relativepos    "
                    src="/mobileapps/sc/logo.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <RevealOnScroll>
                  <span className="font-semibold text-[3vw] t text-[#E33A24]">
                    Take a taste come join us.
                  </span>{' '}
                </RevealOnScroll>
                <RevealOnScroll>
                  <span className="text-2xl">
                    Life is so endlessly delicious.
                  </span>
                </RevealOnScroll>
                <span className="text-xl w-1/2 pt-5">
                  Download Sue Chef today and elevate your dining experiences.
                  Whether you’re hosting a party, planning a special dinner, or
                  simply want to learn from the best, Cue Chef connects you with
                  top-tier chefs who bring creativity and flavor to your table.
                </span>
                <div className="flex items-cneter justify-start w-full">
                  <ImageCarousel />
                </div>
              </div>
            </div>
            <div className="flex  col-span-12 items-center justify-center flex-col w-full bg-black">
              <div className=" w-11/12 flex flex-col items-start justify-start py-10">
                <div className="  flex items-center justify-center h-20 ">
                  <GradualSpacing
                    className="text-[3vw] font-bold text-[#FEAB16] "
                    text="About This Project"
                  />
                </div>
                <span className="text-white text-xl pe-10 mt-5">
                  <span className="font-bold"> Welcome to Suechef, </span>your
                  ultimate kitchen companion! Whether youre a culinary novice or
                  a seasoned chef, our app is designed to make your cooking
                  experience seamless and enjoyable. Discover delicious recipes
                  tailored to the ingredients you have on hand, track your daily
                  calorie intake effortlessly, and get real-time assistance with
                  our voice assistant and chat help. Say goodbye to meal
                  planning stress and hello to a healthier, tastier lifestyle
                  with <span className="font-bold">Suechef!</span>
                </span>
                <div className="  flex items-center justify-center h-20 mt-10">
                  <GradualSpacing
                    className="text-[3vw] font-bold text-[#FEAB16] "
                    text="Design Process"
                  />
                </div>
                <span className="text-white text-xl pe-10 mt-5">
                  <span className="font-bold"> Welcome to Suechef, </span>your
                  ultimate kitchen companion! Whether youre a culinary novice or
                  a seasoned chef, our app is designed to make your cooking
                  experience seamless and enjoyable. Discover delicious recipes
                  tailored to the ingredients you have on hand, track your daily
                  calorie intake effortlessly, and get real-time assistance with
                  our voice assistant and chat help. Say goodbye to meal
                  planning stress and hello to a healthier, tastier lifestyle
                  with <span className="font-bold">Suechef!</span>
                </span>
              </div>
              <div className="w-11/12 grid grid-cols-12   items-center justify-center py-10 overflow-hidden gap-10 ">
                <div className="relative  rounded-3xl col-span-3 flex items-start justify-start   group">
                  <BorderBeam />
                  <div className="flex  items-center   justify-center  relative w-full group-hover:hidden">
                    <Image
                      className=" relativepos  rounded-3xl  "
                      src="/mobileapps/sc/discoverbn.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="hidden  items-center   justify-center  relative w-full group-hover:flex">
                    <Image
                      className=" relativepos  rounded-3xl"
                      src="/mobileapps/sc/discoverrn2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="relative  rounded-3xl col-span-3 flex items-start justify-start   group">
                  <BorderBeam />
                  <div className="flex  items-center   justify-center  relative w-full group-hover:hidden">
                    <Image
                      className=" relativepos  rounded-3xl  "
                      src="/mobileapps/sc/definebn.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="hidden  items-center   justify-center  relative w-full group-hover:flex">
                    <Image
                      className=" relativepos  rounded-3xl"
                      src="/mobileapps/sc/dfr.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>

                <div className="relative  rounded-3xl col-span-3 flex items-start justify-start   group">
                  <BorderBeam />
                  <div className="flex  items-center   justify-center  relative w-full group-hover:hidden">
                    <Image
                      className=" relativepos  rounded-3xl  "
                      src="/mobileapps/sc/ib.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="hidden  items-center   justify-center  relative w-full group-hover:flex">
                    <Image
                      className=" relativepos  rounded-3xl"
                      src="/mobileapps/sc/ir2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="relative  rounded-3xl col-span-3 flex items-start justify-start   group">
                  <BorderBeam />
                  <div className="flex  items-center   justify-center  relative w-full group-hover:hidden">
                    <Image
                      className=" relativepos  rounded-3xl  "
                      src="/mobileapps/sc/db.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="hidden  items-center   justify-center  relative w-full group-hover:flex">
                    <Image
                      className=" relativepos  rounded-3xl"
                      src="/mobileapps/sc/dr3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="w-11/12 flex items-center justify-center h-[95vh] rounded-3xl my-10">
                <div className=" w-full flex items-center justify-center ">
                  <video
                    id="roundvideo"
                    autoPlay
                    muted
                    loop
                    preload="yes"
                    playsInline
                    className=" object-cover rounded-3xl p-1 w-11/12 h-[92vh] "
                  >
                    <source src="/mobileapps/sc/video1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="w-full flex ">
                <SrBottom>
                  <div className="  relative w-full h-[90vh]   ">
                    <Image
                      className=" relativepos  object-cover object-center"
                      src="/mobileapps/sc/img5.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </SrBottom>
              </div>
              <div className="w-11/12 flex flex-col items-center justify-center my-10 2xl:pt-10">
                <div className=" flex  items-center justify-between w-full gap-10">
                  <div className="w-1/2 flex items-center justify-center group">
                    <div className="  flex relative w-full  group-hover:hidden  h-full ">
                      <Image
                        className=" relativepos  object-cover"
                        src="/mobileapps/sc/p1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="  hidden relative w-full  group-hover:flex h-full ">
                      <Image
                        className=" relativepos  object-cover"
                        src="/mobileapps/sc/p2n2.png"
                        alt="Background 1"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center justify-center group">
                    <div className="  flex relative w-11/12  group-hover:hidden  h-full ">
                      <Image
                        className=" relativepos  object-cover"
                        src="/mobileapps/sc/s2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="  hidden relative w-11/12  group-hover:flex h-full ">
                      <Image
                        className=" relativepos  object-cover"
                        src="/mobileapps/sc/s1n.png"
                        alt="Background 1"
                        fill
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-center w-full pt-10 flex-col">
                  <div className="  flex items-center justify-center h-20 mt-10">
                    <GradualSpacing
                      className="text-[3vw] font-bold text-[#FEAB16] "
                      text="Style Guide"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col w-1/2">
                      <span className="text-[2vw] font-bold text-[#FEAB16] ">
                        Open Sans
                      </span>
                      <span className="text-3xl text-white pt-10">
                        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo <br></br>Pp
                        Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
                      </span>
                    </div>
                    <div className="w-1/2 flex items-center justify-end">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className={`relative w-9/12 ${
                            index === currentImage ? '' : 'hidden'
                          }`}
                        >
                          <Image
                            className="relativepos"
                            src={image}
                            alt={`Background ${index + 1}`}
                            fill
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full  flex  items-center justify-center  bg-white p-20 my-10  relative animationcontainer2  rounded-3xl ">
                  <div className="flex  items-center  relative    w-[23%]   ">
                    <SrBottom>
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sc/mobilen.png"
                        alt="Background 1"
                        fill
                      />
                    </SrBottom>
                  </div>
                  <div className="flex  items-center  absolute  w-[20%]  left-[23%]  top-[14%]  lift2 ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/l1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  absolute  w-[20%]  left-[22%]  top-[37%]   lift2">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/l2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>

                  <div className="flex  items-center  absolute  w-[20%]  left-[22%]  bottom-[11%]  lift2 ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/l3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>

                  <div className="flex  items-center  absolute  w-[20%]  right-[24%]  top-[27%]  rite2 ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/r1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  absolute  w-[20%]  right-[24%]  bottom-[35%]   rite2">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/r2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex  items-center  absolute  w-[20%]  right-[24%]  bottom-[18%] rite2  ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/r3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-center h-[80vh] rounded-3xl my-10">
                  <div className=" w-full ">
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="w-full h-[80vh] object-cover rounded-3xl p-1 object-center"
                    >
                      <source
                        src="/mobileapps/sc/video2.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>

                <div className="bg-[#FEAB16]  w-full items-center justify-center p-10 rounded-3xl grid grid-cols-12">
                  <div className="col-span-6 bg-white p-5  rounded-3xl flex flex-col gap-5">
                    <div className="flex  items-center  relative  w-full h-[45vh]">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sc/img6.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className=" w-full ">
                      <video
                        id="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="yes"
                        playsInline
                        className="w-full h-[45vh] object-cover rounded-3xl p-1 object-center"
                      >
                        <source
                          src="/mobileapps/sc/video3.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  <div className="flex  items-center  justify-center  col-span-6  ">
                    <div className="flex w-1/2 relative">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/sc/watch.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                  <div className="  flex items-center justify-center h-20 mt-10">
                    <GradualSpacing
                      className="text-[3vw] font-bold text-[#FEAB16] "
                      text="Project Timeline"
                    />
                  </div>
                  <div className=" w-full flex items-center justify-center">
                    <div className="flex  relative">
                      <SrBottom>
                        <Image
                          className=" relativepos "
                          src="/mobileapps/sc/ptl.gif"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between  mt-10 gap-10">
                  <div className="w-1/2 bg-[#FEAB16]  flex rounded-3xl ">
                    <div className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
                      <div className="bg-white p-2 rounded-full h-48 w-48 flex items-center justify-center">
                        <div className="flex  items-center   justify-center  relative w-full ">
                          <Image
                            className=" relativepos    "
                            src="/mobileapps/sc/logo.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                      <Ripple />
                    </div>
                  </div>
                  <div className="flex  items-center   justify-center  relative w-5/12  ">
                    <SrRight>
                      <Image
                        className=" relativepos    "
                        src="/mobileapps/sc/logo2.png"
                        alt="Background 1"
                        fill
                      />
                    </SrRight>
                  </div>
                </div>
              </div>

              <div className="w-11/12 flex items-center justify-center h-[90vh] rounded-3xl my-10">
                <div className=" w-full ">
                  <video
                    id="roundvideo"
                    autoPlay
                    muted
                    loop
                    preload="yes"
                    playsInline
                    className="w-full h-[90vh] object-cover rounded-3xl p-1 object-center"
                  >
                    <source src="/mobileapps/sc/video4.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="w-full items-center justify-between gap-10 flex  ">
                <div className="flex  items-center   justify-center  relative w-1/2  ">
                  <SrLeft>
                    <div className="flex  items-center   justify-center  relative w-full h-[80vh] ">
                      <Image
                        className=" relativepos   object-cover object-top "
                        src="/mobileapps/sc/img7.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SrLeft>
                </div>
                <div className="flex  items-center   justify-center  relative w-1/2  ">
                  <SrRight>
                    <div className="flex  items-center   justify-center  relative w-full h-[80vh] ">
                      <Image
                        className=" relativepos  object-cover  object-center "
                        src="/mobileapps/sc/img8.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </SrRight>
                </div>
              </div>
              <div className="w-11/12 flex items-center justify-center h-[90vh] rounded-3xl mt-10 relative">
                <span className="text-[3vw] font-bold text-[#FEAB16] absolute right-10 ">
                  &quot;Dig in and delight !&quot;
                </span>
                <div className=" w-full ">
                  <video
                    id="roundvideo"
                    autoPlay
                    muted
                    loop
                    preload="yes"
                    playsInline
                    className="w-full h-[90vh] object-cover rounded-3xl p-1 object-center"
                  >
                    <source src="/mobileapps/sc/video5.mp4" type="video/mp4" />
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
