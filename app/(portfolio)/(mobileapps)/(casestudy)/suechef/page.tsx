'use client';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Open_Sans, Poppins } from 'next/font/google';
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
import ImageCarousel from '@/app/components/text copy';
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

  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
    movingText2();
    animation1();
    animation2();
    animation3();
    animation4();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] overflow-auto ">
            <div className="flex  col-span-12 items-center justify-center flex-col w-full overflow-hidden ">
              <div className="flex flex-col items-start justify-center h-[100vh]  w-11/12 relative  pb-10 ">
                <div className="flex  items-center   justify-center  relative ">
                  <Image
                    className=" relativepos    "
                    src="/mobileapps/sc/logo.png"
                    alt="Background 1"
                    fill
                  />
                </div>

                <span className="font-semibold text-[4vw] text-[#E33A24]">
                  Take a taste come join us.
                </span>
                <span className="text-3xl">
                  Life is so endlessly delicious.
                </span>
                <span className="text-xl w-1/2 pt-5">
                  Download Sue Chef today and elevate your dining experiences.
                  Whether you’re hosting a party, planning a special dinner, or
                  simply want to learn from the best, Cue Chef connects you with
                  top-tier chefs who bring creativity and flavor to your table.
                </span>
                <div className="flex items-center justify-center w-full">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
