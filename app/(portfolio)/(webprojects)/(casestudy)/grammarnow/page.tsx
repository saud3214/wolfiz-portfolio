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
                <div className="grid grid-cols-12 w-full  items-start  lg:gap-10 gap-5 ">
                  <div className="col-span-12 flex  items-start  ">
                    <div className="relative  md:w-2/12 w-1/2   ">
                      <Image
                        className=" relativepos object-cover"
                        src="/website/grammarnow/logo.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className=" lg:col-span-6 col-span-12 flex  items-start  ">
                    <div className="flex flex-col">
                      <span className="2xl:text-8xl lg:text-7xl text-4xl text-[#7CB862] font-black">
                        Great Writing
                      </span>
                      <span className="lg:text-7xl md:text-5xl text-4xl font-medium">
                        Write With <br />
                        Their Writing Clarity
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12 flex  items-start  ">
                    <div className="flex flex-col">
                      <span className="text-xl font-medium">
                        ProofSafely is a free online platform specializing in
                        secure and confidential proofreading services. Unlike
                        conventional proofreading platforms, our tech team
                        employs proprietary AI algorithms to mask sensitive
                        information, such as names and numbers, prior to the
                        proofreading process.
                      </span>
                      <div className="bg-[#E7B639] hover:bg-black  px-5  py-3 rounded-3xl text-sm w-[20%] text-white font-medium mt-5 lg:flex hidden items-center justify-center">
                        Strategy
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-end  h-full">
                    <div className="relative   w-full lg:pt-5 ">
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
                  <div className="col-span-3 flex  items-end  h-full ">
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

              <div className="w-11/12 lg:pt-[5%] flex flex-col  ">
                <div className="grid grid-cols-12 gap-5 my-10">
                  <div className="lg:col-span-6 col-span-12 my-10 lg:h-[80vh] items-start justify-start flex flex-col ">
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
                          src="/website/grammarnow/video1.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12 lg:my-10 lg:h-[80vh]  flex items-start relative  ">
                    <div className="relative flex   w-full lg:-mt-[12%]   h-[91vh]  ">
                      <Image
                        className=" relativepos  object-cover object-top rounded-3xl  h-[100vh] "
                        src="/website/grammarnow/g5n.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" flex   absolute top-[10%]  ">
                      <SrTop>
                        <Image
                          className=" relativepos   "
                          src="/website/grammarnow/access.png"
                          alt="image"
                          fill
                        />
                      </SrTop>
                    </div>
                    <div className=" flex   absolute top-[19%] right-[6%]  ">
                      <SrTop>
                        <Image
                          className=" relativepos   "
                          src="/website/grammarnow/sp.png"
                          alt="image"
                          fill
                        />
                      </SrTop>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12 mb-10   flex  items-center justify-start relative group mt-10 ">
                    <div className="relative flex   w-11/12   pt-5">
                      <Image
                        className=" relativepos  object-cover  "
                        src="/website/grammarnow/aa2.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className="absolute flex  w-[20%] top-[-10%]  left-[5%] animate-slow-spin   ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/aal.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className="  flex group-hover:hidden   w-1/4  absolute left-[35%] top-[8%]  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/typo.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" group-hover:flex  hidden  w-1/4  absolute left-[35%] top-[8%]  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/typo2.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className="  flex group-hover:hidden   w-1/4  absolute left-[23%] bottom-[13%]  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/s2.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className="  group-hover:flex  hidden   w-1/4  absolute left-[23%] bottom-[13%]  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/s1.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12 lg:my-10   flex  items-center justify-center  lg:gap-10 gap-2 ">
                    <div className=" w-[25%] hover:w-[25%] transition-all duration-300 ease-in-out h-full bg-black text-white  rounded-3xl   flex items-center justify-center font-medium lg:text-2xl text-xl p-2 ">
                      E7B639
                    </div>
                    <div className=" w-[25%] hover:w-[25%] transition-all duration-300 ease-in-out h-full bg-[#7CB862] text-white  rounded-3xl   flex items-center justify-center font-medium  lg:text-2xl p-2 text-xl">
                      7CB862
                    </div>
                    <div className=" w-[25%] hover:w-[25%] transition-all duration-300 ease-in-out h-full bg-[#E7B639] text-white  rounded-3xl   flex items-center justify-center font-medium  lg:text-2xl p-2 text-xl">
                      E7B639
                    </div>
                    <div className=" w-[25%] hover:w-[25%] transition-all duration-300 ease-in-out h-full bg-[#2188BB] text-white  rounded-3xl   flex items-center justify-center font-medium  lg:text-2xl p-2 text-xl ">
                      2188BB
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex group my-10">
                    <div className=" flex lg:w-11/12 w-full group-hover:hidden  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/re1.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" group-hover:flex hidden w-11/12  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/re2.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex group my-10">
                    <div className=" flex w-11/12 group-hover:hidden  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/di1.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" group-hover:flex hidden w-11/12  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/di2.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex group lg:my-10">
                    <div className=" flex w-11/12 group-hover:hidden  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/ui1.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" group-hover:flex hidden w-11/12  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/u12.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex group lg:my-10">
                    <div className=" flex w-11/12 group-hover:hidden  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/t1.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" group-hover:flex hidden w-11/12  ">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/t2.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 items-center justify-center flex  ">
                    <div className="w-full h-5/6 rounded-3xl">
                      <video
                        className="roundvideo object-cover h-full w-full rounded-3xl  "
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/website/grammarnow/video2n.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-span-12 items-start justify-center text-start flex  flex-col">
                    <span className="uppercase lg:text-8xl text-5xl text-[#7CB862] font-black ">
                      about this <br />
                      project
                    </span>
                    <div className="w-full flex lg:flex-row flex-col  mt-5 items-center  lg:p-10 lg:gap-10 p-5">
                      <div className="  lg:w-[6%] w-[15%] mx-10 ">
                        <Image
                          className=" relativepos  "
                          src="/website/grammarnow/sf.png"
                          alt="image"
                          fill
                        />
                      </div>
                      <span className="text-3xl">
                        GrammarNow.ca is your go-to destination for instant and
                        free content proofreading with a strong emphasis on
                        CONFIDENTIALITY.<br></br>​Our platform uses advanced AI
                        to mask vital information such as NAME and FIGURE,
                        ensuring your privacy. ​
                      </span>
                    </div>
                  </div>
                  <div className="col-span-5 items-start justify-center h-fit">
                    <div className=" w-full h-5/6 object-cover">
                      <SrLeft>
                        <Image
                          className=" relativepos  object-cover h-full "
                          src="/website/grammarnow/psl.png"
                          alt="image"
                          fill
                        />
                      </SrLeft>
                    </div>
                  </div>
                  <div className="col-span-5 items-start justify-between flex flex-col ">
                    <div className=" w-full">
                      <SrTop>
                        <Image
                          className=" relativepos  "
                          src="/website/grammarnow/pyg.png"
                          alt="image"
                          fill
                        />
                      </SrTop>
                    </div>
                    <div className=" w-full">
                      <SrBottom>
                        <Image
                          className=" relativepos  "
                          src="/website/grammarnow/pss.png"
                          alt="image"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="col-span-2 items-center justify-center flex h-full ">
                    <div className=" w-full h-full">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/cl.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center my-10">
                <div className="grid grid-cols-12  w-full  ">
                  <div className="col-span-6 items-center justify-center flex  group ">
                    <div className=" w-full    h-[100vh]   group-hover:hidden flex">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/green.png"
                        alt="image"
                        fill
                      />
                    </div>
                    <div className=" w-full  h-[100vh]  group-hover:flex hidden">
                      <Image
                        className=" relativepos   "
                        src="/website/grammarnow/blue2n.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-6 items-center justify-center flex  group ">
                    <div className=" w-full  h-[100vh]    flex">
                      <Image
                        className=" relativepos  "
                        src="/website/grammarnow/mobile.png"
                        alt="image"
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className="w-11/12 items-center justify-center flex my-10 ">
                  <div className="w-full h-[80vh] rounded-3xl">
                    <video
                      className="roundvideo object-cover  w-full rounded-3xl  "
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      playsInline
                    >
                      <source
                        src="/website/grammarnow/videolasy.mp4"
                        type="video/mp4"
                      />
                    </video>
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
