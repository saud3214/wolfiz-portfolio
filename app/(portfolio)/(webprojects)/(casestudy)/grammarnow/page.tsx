'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Roboto, PT_Serif } from 'next/font/google';
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

const urbanist = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});
const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function GrammerNow() {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null); // Ref for the card element

  const handleReadMoreClick = () => {
    setIsExpanded(true); // Expand the card and hide the button
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsExpanded(false); // Collapse the card when clicking outside
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ['M', 'O', 'R', 'T', 'G'];
  const delay = 2000;
  // Get the scroll position

  // Map the scrollYProgress to a horizontal scroll

  useSmoothScroll();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1,
      );
    }, delay);
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearInterval(interval);
    };
  }, [isExpanded, words.length]);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 ">
              <div className="w-11/12  flex fle items-start justify-end bg-gnbg1 bg-cover  bg-top bg-no-repeat  pt-10">
                <div className="grid grid-cols-12 w-full  items-start  gap-10 ">
                  <div className="col-span-12 flex  items-start  ">
                    <div className="relative  w-2/12   ">
                      <Image
                        className=" relativepos object-cover"
                        src="/website/grammarnow/logo.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 flex  items-start  ">
                    <div className="flex flex-col">
                      <span className="2xl:text-8xl text-[#7CB862] font-black">
                        Great Writing
                      </span>
                      <span className="text-7xl font-medium">
                        Write With <br />
                        Their Writing Clarity
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 flex  items-start  ">
                    <div className="flex flex-col">
                      <span className="text-xl font-medium">
                        ProofSafely is a free online platform specializing in
                        secure and confidential proofreading services. Unlike
                        conventional proofreading platforms, our tech team
                        employs proprietary AI algorithms to mask sensitive
                        information, such as names and numbers, prior to the
                        proofreading process.
                      </span>
                      <div className="bg-[#E7B639] hover:bg-black  px-5  py-3 rounded-3xl text-sm w-[20%] text-white font-medium mt-5 flex items-center justify-center">
                        Strategy
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-end  h-full">
                    <div className="relative   w-full pt-5 ">
                      <Image
                        className=" relativepos object-cover"
                        src="/website/grammarnow/g1.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex items-end  h-full">
                    <div className="relative   w-full  ">
                      <Image
                        className=" relativepos object-cover"
                        src="/website/grammarnow/g2.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex items-end  h-full">
                    <div className="relative   w-full  ">
                      <Image
                        className=" relativepos object-cover"
                        src="/website/grammarnow/g3.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col items-end  h-full ">
                    <div className="relative   w-full  ">
                      <Image
                        className=" relativepos "
                        src="/website/grammarnow/g4.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-11/12 pt-[5%] flex  ">
                <div className="grid grid-cols-12 gap-10 my-10">
                  <div className="col-span-6 my-10 h-[80vh] items-start justify-start flex flex-col ">
                    <div className="relative   w-full  ">
                      <Image
                        className=" relativepos "
                        src="/website/grammarnow/img1.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className="w-full h-[50vh]">
                      <video
                        className="roundvideo object-cover h-[50vh] w-full rounded-3xl mt-10  "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/6ixmortgage/cacacca.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-span-6 my-10 h-[80vh]  flex items-start  ">
                    <div className="relative flex   w-full -mt-[12%]   h-[91vh]  ">
                      <Image
                        className=" relativepos  object-cover object-top rounded-3xl  h-[100vh] "
                        src="/website/grammarnow/g5n.png"
                        alt="image"
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
