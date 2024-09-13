'use client';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Roboto, PT_Serif } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';
import { MoveDown } from 'lucide-react';
import { MarqueeDemo } from '@/app/components/cards6';
import {
  setupScrollAnimation,
  animation1,
  animation2,
  animation3,
  animation4,
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
import AnimatedImage from '@/app/components/animatedimage';

const urbanist = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});
const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);
const items = [
  {
    name: 'Sophia Martinez',
    title: 'Lead designer, Avalon',
    image:
      'https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg',
    body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
  },
  {
    name: 'Caroline Lee',
    title: 'Senior Graphic Designer, Echo',
    image:
      'https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg',
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
  {
    name: 'Tyler Otwell',
    title: 'CTO, Apple',
    image:
      'https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg',
    body: 'This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!',
  },
  {
    name: 'Jake Harris',
    title: 'Thompson Creative',
    image:
      'https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg',
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
];
export default function SixMortgage() {
  interface CardProps {
    title: string;
    description: string;
  }
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
    animation1();
    animation2();
    animation3();
    animation4();
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center w-full col-span-12 ">
              <div className="w-full h-[100vh] flex  items-start justify-center bg-[#887833]">
                <div className="grid grid-cols-12  w-full ">
                  <div className="col-span-1 flex items-center justify-center">
                    {isExpanded && (
                      <div className="w-full flex items-center justify-center bg-black/20 backdrop-blur-lg h-full  relative ">
                        <span className="text-white font-bold text-5xl   ">
                          . <br></br> . <br></br>.
                        </span>
                        <div className="absolute bottom-[7%]  ">
                          <Image
                            className=" relativepos"
                            src="/6ixmortgage/arrow.png"
                            alt="move down arrow"
                            fill
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="col-span-3 flex flex-col items-start justify-between py-[10%] ">
                    <div className="relative  w-1/2  ">
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/logo2.png"
                        alt="logo"
                        fill
                      />
                    </div>
                    <div className="  flex flex-col  ">
                      {!isExpanded && (
                        <span className="font-bold text-4xl text-white py-5">
                          Architect
                        </span>
                      )}
                      {!isExpanded && (
                        <div className="h-[16vh] flex items-center ">
                          <span
                            className={`text-[8vw] font-bold text-white  ${ptserif.className} leading-[10vh] absolute`}
                          >
                            Mortgage
                          </span>
                        </div>
                      )}

                      <div className=" flex items-center justify-center">
                        <div className="py-4 mt-10 ">
                          {!isExpanded && (
                            <button
                              onClick={handleReadMoreClick}
                              className=" text-white text-3xl font-bold flex gap-4 items-center"
                            >
                              <div className="size-8 bg-white rounded-full flex items-center justify-center text-black">
                                +
                              </div>
                              Read More
                            </button>
                          )}

                          <div
                            ref={cardRef} // Assign ref to card element
                            className={`bg-white shadow-md overflow-hidden p-10 absolute bottom-[10%] left-[8.5%] gap-10 w-1/3 transform transition-all duration-500 ease-in-out ${
                              isExpanded
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                            }`}
                          >
                            <div className="uppercase  text-[#887a31] font-semibold flex w-full items-center justify-between">
                              Case Study
                              <div className="relative  size-12  ">
                                <Image
                                  className=" relativepos"
                                  src="/6ixmortgage/csl.png"
                                  alt="logo"
                                  fill
                                />
                              </div>
                            </div>
                            <h2
                              className={` ${ptserif.className} block my-4 text-5xl font-bold text-black `}
                            >
                              Tailored Mortgage Solutions with Expert Guidance
                              and Personalized Service
                            </h2>
                            <span className="text-2xl mb-4 font-bold ">
                              Mortgage Architect
                            </span>
                            <div className="h-1 w-2/3 bg-[#CFC1A7] my-4"></div>
                            <p className="mt-4 text-gray-600">
                              Mortgage Architect is a leading mortgage brokerage
                              firm that offers customized mortgage solutions to
                              clients across various financial backgrounds.
                              <br /> <br />
                              The company focuses on providing personalized
                              services, leveraging its extensive network of
                              lenders and deep industry expertise to secure the
                              best possible mortgage products for its clients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 flex items-center justify-center h-full ">
                    <div className=" w-full  h-[100vh]">
                      <video
                        className="roundvideo h-[100vh]"
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

                  <div className="  w-[3%] absolute top-[25%] right-[3%] ">
                    <Image
                      className=" relativepos"
                      src="/6ixmortgage/si.png"
                      alt="logo"
                      fill
                    />
                  </div>
                  <div className="w-[30%] absolute bottom-[8%] right-[10%] bg-white h-1 rounded-3xl"></div>
                  <span className="text-xl absolute top-[8%] left-[28%] text-white">
                    Mortgage Architect is a leading mortgage brokerage firm
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col h-[100vh] items-center justify-center gap-10">
                <div className="grid grid-cols-12 py-10 ">
                  <div className="col-span-5 flex flex-col items-start justify-center px-20">
                    <span className="text-4xl font-bold text-[#887a31]">
                      Problem Statement
                    </span>
                    <span className="text-6xl font-bold pt-5">
                      Expert Tailored <br />
                      Mortgage <br /> Solutions
                    </span>
                    <p className="mt-4 text-gray-600">
                      Mortgage Architect is a leading mortgage brokerage firm
                      that offers customized mortgage solutions to clients
                      across various financial backgrounds.
                      <br /> <br />
                      The company focuses on providing personalized services,
                      leveraging its extensive network of lenders and deep
                      industry expertise to secure the best possible mortgage
                      products for its clients.
                      <br />
                      <br />
                      Mortgage Architect faced challenges in effectively
                      communicating complex mortgage information to clients,
                      resulting in a high bounce rate and low conversion on
                      their website.
                    </p>
                  </div>
                  <div className="col-span-7 flex items-end">
                    <MarqueeDemo />
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex h-[100vh] ">
                <div className="flex h-full w-full flex-col relative">
                  <div className="w-full h-full bg-black"></div>
                  <div className="w-full h-full bg-white"></div>

                  <div className="w-3/4 h-[70vh] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain">
                    <video
                      className="roundvideo object-cover "
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      playsInline
                    >
                      <source
                        src="/mobileapps/vienna/Laptop2.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <div className="w-11/12 items-start justify-center grid grid-cols-12 h-[100vh]   ">
                <div className="col-span-6 ">
                  <span className="font-bold text-3xl">Roboto</span>
                </div>
                <div className="col-span-6 ">
                  <span className=" text-2xl">
                    Using the Roboto font in a web app is a great choice due to
                    its readability and modern look.
                  </span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
