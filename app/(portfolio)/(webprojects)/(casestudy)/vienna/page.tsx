'use client';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PT_Serif, Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';

import {
  setupScrollAnimation,
  vienna,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import WordPullUp from '@/components/magicui/word-pull-up';
import useSmoothScroll from '@/app/components/ss';
import { SrLeft, SrRight, SrBottom } from '@/app/components/revealelement';
import AnimatedImage from '@/app/components/animatedimage';
const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '600'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function Vienna() {
  const [activeImage, setActiveImage] = useState(1);

  // Get the scroll position

  // Map the scrollYProgress to a horizontal scroll

  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();

    vienna();
  });

  return (
    <SlideFromRight>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.7.5/css/foundation.min.css"
        />
      </Head>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] overflow-auto ">
            <div className="flex flex-col items-center justify-center w-full col-span-12 ">
              <div className="flex flex-col items-center justify-between h-[100vh]  w-full relative ">
                {/* <div className="absolute w-full h-full bg-gradient-to-r from-transparent to-black "></div> */}
                <div className="w-full videoContainer ">
                  <video
                    className="roundvideo"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source
                      src="../../../../../mobileapps/vienna/video2.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="flex items-center lg:justify-end justify-center w-10/12  pt-20 2xl:pe-20 h-full lg:h-auto">
                  <div className="relative flex items-center justify-center lg:w-1/2 w-11/12 ">
                    <SrRight>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/ht1.png"
                        alt="Background 1"
                        fill
                      />
                    </SrRight>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full text-white bg-black/50 backdrop-blur-sm lg:h-52 h-44">
                  <div className="grid items-center justify-center w-11/12 grid-cols-12 ">
                    <div className="flex flex-col items-start justify-start col-span-6 gap-2 ">
                      <span className="lg:text-2xl text-lg font-medium">
                        Discover Vienna’s Iconic Landmarks
                      </span>
                      <span className="text-xl lg:block hidden">
                        From the grandeur of Schönbrunn Palace to the vibrant
                        streets of the Naschmarkt, Vienna invites you to uncover
                        its rich history, stunning architecture, and
                        unforgettable cultural experiences.
                      </span>
                    </div>
                    <div className=" flex  flex-col text-center items-center justify-center col-span-3 gap-2 animate-slow-bounce">
                      <span className="lg:text-2xl text-lg font-medium ">
                        Scroll Down
                      </span>
                      <div className="relative flex items-center w-[15%] lg:w-[5%] ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/vienna/Arrow.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center col-span-3 ">
                      <div className="relative flex items-center lg:w-5/12  w-full animate-slow-spin ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/vienna/logo1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                      <div className="absolute flex items-center lg:w-1/5 w-1/2 ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/vienna/V.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full flex flex-col items-center justify-start  lg:py-20 py-10 bg-[#F5F7FB] ">
                <div className="flex items-center justify-center w-11/12 lg:h-40 h-24">
                  <GradualSpacing
                    className={`text-[8vw] font-bold text-[#E5E5E5] uppercase ${ptserif.className}`}
                    text="adventure awaits"
                  />
                </div>
                <div className="grid items-center justify-center w-11/12 grid-cols-12 ">
                  <div className="items-center justify-center lg:col-span-3 col-span-12 flex lg:block text-center lg:text-start ">
                    <span className="text-3xl font-semibold text-[#EA0000] capitalize pb-3 lg:pb-0">
                      vienna is not just a destination
                    </span>
                  </div>
                  <div className="items-center justify-center lg:col-span-6 col-span-12">
                    {/* Images */}
                    <div className="flex items-center lg:h-[60vh] h-[28vh] w-full">
                      {activeImage === 1 && (
                        <div className="w-full h-full ">
                          <video
                            className="h-full roundvideo"
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
                      )}
                      {activeImage === 2 && (
                        <div className="w-full h-full ">
                          <Image
                            className="relativepos"
                            src="/mobileapps/vienna/1f.jpg"
                            alt="Background 2"
                            fill
                            priority
                          />
                        </div>
                      )}
                      {activeImage === 3 && (
                        <div className="w-full h-full ">
                          <Image
                            className="relativepos"
                            src="/mobileapps/vienna/2f.jpg"
                            alt="Background 3"
                            fill
                          />
                        </div>
                      )}
                      {activeImage === 4 && (
                        <div className="w-full h-full ">
                          <Image
                            className="relativepos"
                            src="/mobileapps/vienna/3f.jpg"
                            alt="Background 4"
                            fill
                          />
                        </div>
                      )}
                    </div>

                    {/* Spans */}
                    <div className="flex items-center justify-center w-full gap-10 pt-10 text-4xl font-bold">
                      <span
                        onClick={() => setActiveImage(1)}
                        className={`cursor-pointer ${
                          activeImage === 1 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        01
                      </span>
                      <span
                        onClick={() => setActiveImage(2)}
                        className={`cursor-pointer ${
                          activeImage === 2 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        02
                      </span>
                      <span
                        onClick={() => setActiveImage(3)}
                        className={`cursor-pointer ${
                          activeImage === 3 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        03
                      </span>
                      <span
                        onClick={() => setActiveImage(4)}
                        className={`cursor-pointer ${
                          activeImage === 4 ? 'text-[#EA0000]' : ''
                        }`}
                      >
                        04
                      </span>
                    </div>
                  </div>

                  <div className="items-center justify-center lg:col-span-3 col-span-12 flex text-start lg:text-start p-5 lg:p-0">
                    <span className="text-xl ">
                      Vienna Unwrapped is a digital guide that invites travelers
                      to experience Vienna beyond the surface. The goal of this
                      website design project was to create an engaging,
                      user-friendly platform that highlights Viennas rich
                      history, vibrant culture, and hidden treasures.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center w-full py-10 bg-center bg-no-repeat bg-cover bg-viennabg1">
                <div className="grid items-center justify-center w-11/12 grid-cols-12 lg:gap-10 gap-5">
                  <div className="lg:col-span-9 col-span-12 bg-[#EA0000] flex flex-col text-white lg:p-5 p-10 items-start justify-start relative overflow-hidden">
                    <span className="mb-10 text-xs">
                      www.vienna-unwrapped.com
                    </span>
                    <WordPullUp
                      className="font-bold lg:text-7xl text-3xl text-start "
                      words="Experience Vienna's"
                    />
                    <div className="flex items-center justify-center">
                      <WordPullUp
                        className="font-bold lg:text-7xl text-3xl text-start "
                        words="Authentic Spirit"
                      />
                      <span className="font-black lg:text-8xl text-3xl animate-bounce">
                        .
                      </span>
                      <div className="absolute flex items-center w-1/5 animate-slow-spin -right-28 top-10 ">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/vienna/logo1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:justify-end justify-center lg:col-span-3 col-span-12 ">
                    <div className="flex  items-center  w-[55%] ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/log2.gif"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center justify-center col-span-12 ">
                    <div className=" w-full h-[50vh] ">
                      <video
                        className="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="../../../../../mobileapps/vienna/vienna.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="w-full bg-[#EA0000] flex flex-col text-white p-3 items-center justify-center relative overflow-hidden">
                      <span className=" lg:text-3xl text-lg font-bold">
                        Your Gateway to Imperial Splendor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full py-10 lg:pt-20 pt-10 ">
                <div className="flex flex-col lg:flex-row items-center justify-between w-11/12">
                  <span className="text-[#EA0000] text-3xl font-semibold ">
                    Highlighting Vienna’s <br></br> charm in travel guides
                  </span>
                  <span className="lg:w-1/3 w-11/12 text-base pt-5 lg:pt-0 ">
                    Travelers struggle to find Viennas authentic essence amidst
                    a flood of generic information. Many sites lack a cohesive,
                    inspiring design for discovering the city.
                  </span>
                </div>
                <div className="grid items-end justify-center w-11/12 grid-cols-12 gap-5 md:pt-20 pt-10">
                  <div className="flex items-center justify-center md:col-span-3 col-span-6">
                    <div className="relative flex items-center w-full">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/frame1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:col-span-3 col-span-6">
                    <div className="relative flex items-center w-full">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/frame2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center md:col-span-3 col-span-6 overflow-hidden">
                    <div className="relative flex items-center w-full">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/frame4.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="flex  items-center  absolute w-2/3 -bottom-[35%]">
                      <SrBottom>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/vienna/watch.png"
                          alt="Background 1"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:col-span-3 col-span-6">
                    <div className="relative flex items-center w-full">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/frame3.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex lg:h-[100vh]">
                <div className="grid w-full grid-cols-12 m-auto ">
                  <div className="md:col-span-6 col-span-12 items-center justify-center flex flex-col bg-[#EA0000] text-white group overflow-hidden">
                    <div className="w-full h-[50vh] bg-[#EA0000] flex flex-col justify-center items-center relative cursor-pointer p-10">
                      <span className="text-white text-8xl transform transition-all duration-300 group-hover:translate-y-36 group-hover:scale-50 group-hover:translate-x-[20vw]">
                        Aa
                      </span>
                      <span className="text-white text-2xl absolute bottom-10 right-10 transform transition-all duration-300 group-hover:-translate-y-36 group-hover:scale-[2.5] group-hover:-translate-x-[20vw]">
                        Roboto
                      </span>
                    </div>
                    <div className="relative flex items-center overflow-hidden ">
                      <div className="transition-all duration-300 hover:scale-150">
                        <Image
                          className=" relativepos"
                          src="/mobileapps/vienna/newspaper.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center lg:col-span-6 col-span-12 gap-10 p-10 transition-all duration-300 bg-center bg-no-repeat bg-cover bg-viennabg2 hover:bg-viennabg3">
                    <div className="flex items-center justify-center w-1/2 h-40 text-3xl font-medium bg-white ">
                      FFFFF
                    </div>
                    <div className=" h-40 w-1/2 bg-[#EA0000] font-medium text-3xl flex items-center justify-center text-white">
                      EA0000
                    </div>
                    <div className="flex items-center justify-center w-1/2 h-40 text-3xl font-medium text-white bg-black ">
                      00000
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#EA0000] w-full items-center justify-center relative   overflow-hidden m-auto  ">
                <div className="grid w-full grid-cols-12 text-white">
                  <div className="flex flex-col lg:col-span-6 col-span-12 p-10 ">
                    <span className="lg:text-4xl text-3xl font-semibold">
                      From Imperial Glory to<br></br> Modern Marvel:<br></br>
                      Vienna’s Historical <br></br>Odyssey
                    </span>
                    <div className="lg:flex hidden  w-1/6 absolute lg:-bottom-[10%] bottom-[59%] lg:left-1 right-0">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/vw.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="lg:flex hidden  w-1/4 absolute lg:-bottom-[15%] bottom-[57%] lg:-left-[6%] right-[1%] animate-slow-spin">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/vienna/logo1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex items-end justify-end h-full lg:col-span-6 col-span-12 pt-5">
                    <div className=" w-full h-[90%] object-cover object-top ">
                      <video
                        className="roundvideo"
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                      >
                        <source
                          src="/mobileapps/vienna/mobile.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-viennabg4 lg:bg-cover bg-cover bg-bottom bg-no-repeat lg:h-[200vh] h-[100vh] items-center justify-start flex flex-col  py-10 relative">
                <div className="flex flex-col md:flex-row items-start justify-between w-11/12 ">
                  <div className="flex flex-col  h-[25vh]">
                    <GradualSpacing
                      className={`lg:text-[6vw] text-[12vw] font-bold text-[#EA0000] uppercase ${ptserif.className} leading-none `}
                      text="Refining"
                    />
                    <GradualSpacing
                      className={`lg:text-[6vw] text-[12vw] font-bold text-[#EA0000] uppercase ${ptserif.className} leading-none `}
                      text="Vienna’s"
                    />
                    <GradualSpacing
                      className={`lg:text-[6vw] text-[12vw] font-bold text-[#EA0000] uppercase ${ptserif.className} leading-none `}
                      text="Digital  "
                    />
                    <GradualSpacing
                      className={`lg:text-[6vw] text-[12vw] font-bold text-[#EA0000] uppercase ${ptserif.className} leading-none `}
                      text="Journey."
                    />
                  </div>

                  <div className="flex flex-col md:items-end  md:justify-end lg:w-1/2 w-full md:text-end pt-5 lg:pt-0 ">
                    <span className="lg:text-2xl text-lg font-semibold text-[#EA0000]">
                      Discover Vienna’s Iconic Landmarks
                    </span>
                    <span className="lg:text-xl text-base ">
                      From the grandeur of Schönbrunn Palace to the vibrant
                      streets of the Naschmarkt, Vienna invites you to uncover
                      its rich history, stunning architecture, and unforgettable
                      cultural experiences.
                    </span>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center justify-center  text-white text-3xl font-semibold capitalize absolute top-[25%] right-[10%]">
                  <SrRight>
                    <span>
                      user testing: walking in<br></br>the travelers shoes
                    </span>
                  </SrRight>
                </div>
                <div className="flex   absolute w-[12%]    top-[30%] right-[22%] ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/vienna/t1.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>

                <div className="flex flex-col items-center justify-center  text-white text-3xl font-semibold capitalize absolute top-[40%] left-[10%]">
                  <SrLeft>
                    <span>
                      Cross-device consistency:<br></br>vienna on every screen
                    </span>
                  </SrLeft>
                </div>
                <div className="flex   absolute w-[12%]    top-[45%] left-[22%] ">
                  <SrLeft>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/vienna/t2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrLeft>
                </div>

                <div className="flex flex-col items-center justify-center  text-white text-3xl font-semibold capitalize absolute top-[50%] right-[10%]">
                  <SrRight>
                    <span>
                      accessibility assurance:<br></br>vienna for everyone
                    </span>
                  </SrRight>
                </div>
                <div className="flex   absolute w-[12%]    top-[55%] right-[22%] ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/vienna/t1.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div>

                <div className="flex flex-col items-center justify-center  text-white text-3xl font-semibold capitalize absolute top-[65%] left-[10%]">
                  <SrLeft>
                    <span>
                      speeding up viennas<br></br>digital avenue
                    </span>
                  </SrLeft>
                </div>
                <div className="flex   absolute w-[12%]    top-[70%] left-[22%] ">
                  <SrLeft>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/vienna/t2.png"
                      alt="Background 1"
                      fill
                    />
                  </SrLeft>
                </div>

                <div className="flex flex-col items-center justify-center  text-white text-3xl font-semibold capitalize absolute top-[80%] right-[10%]">
                  <SrRight>
                    <span>
                      accessibility assurance:<br></br>vienna for everyone
                    </span>
                  </SrRight>
                </div>
                <div className="flex   absolute w-[12%]    top-[85%] right-[22%] ">
                  <SrRight>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/vienna/t1.png"
                      alt="Background 1"
                      fill
                    />
                  </SrRight>
                </div> */}
              </div>
              <div className="w-full h-[100vh] items-center justify-center flex relative overflow-hidden content1 ">
                <div className="flex flex-col items-start justify-start h-64">
                  <div className="flex flex-col items-start justify-start ">
                    <GradualSpacing
                      className={`text-[6vw] font-bold text-[#E5E5E5] capitalize ${ptserif.className} leading-[100px]`}
                      text="Secrets of vienna"
                    />
                    <GradualSpacing
                      className={`text-[6vw] font-bold text-[#E5E5E5] capitalize ${ptserif.className} leading-[100px]`}
                      text="unwrapped"
                    />
                  </div>

                  <span className="text-[#EA0000] text-xl font-semibold mt-5">
                    Vienna Unwrapped: Explore, Experience, Enjoy
                  </span>
                </div>
                <span className="text-xl font-semibold absolute left-[10%] top-[13%]">
                  Your Personal Guide to Austrian Charm
                </span>
                <span className="text-xl font-semibold absolute left-[10%] bottom-[13%]">
                  The Art of Exploring Austria
                </span>
                <span className="text-xl font-semibold absolute right-[20%] bottom-[27%]">
                  The Art of Exploring Austria
                </span>
                <div className="flex  items-center  absolute w-2/12 -left-[10%]  bottom-[10%] ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%] bottom-[10%]   ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f2.png"
                    alt="Background 1"
                    fill
                  />
                </div>

                <div className="flex  items-center  absolute w-[15%] top-[7%]   ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f4.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%]  -right-[2%] bottom-[30%] ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f4.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%]  -right-[2%] top-[12%] ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f5.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%]  left-0 -top-[7%] ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f7.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%]  left-[10%] top-[17%] ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f8.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%]  right-[20%] -top-[10%] ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f9.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  absolute w-[15%]  right-[20%] bottom-1 ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/vienna/f10.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="w-full lg:h-[100vh] flex  bg-[#EA0000] items-center justify-center ">
                <div className="w-11/12 flex items-center justify-center lg:h-[85vh] py-5 lg:py-0">
                  <Swiper
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    effect="fade"
                    speed={1000}
                    className="items-center w-full h-full"
                  >
                    <SwiperSlide className="flex items-center justify-center w-full">
                      <div className="flex items-center w-full ">
                        <Image
                          className="relativepos"
                          src="/mobileapps/vienna/s1.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center w-full">
                      <div className="flex items-center w-full lg:h-[100vh]">
                        <Image
                          className="relativepos"
                          src="/mobileapps/vienna/s2.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center w-full">
                      <div className="flex items-center w-full ">
                        <Image
                          className="relativepos"
                          src="/mobileapps/vienna/s3.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center w-full">
                      <div className="flex items-center w-full ">
                        <Image
                          className="relativepos"
                          src="/mobileapps/vienna/s4.png"
                          alt="Background 1"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="w-full lg:h-[100vh] h-[50vh] items-center justify-center flex relative">
                <div className="flex items-center justify-center w-full h-full group">
                  <div className="relative z-10 flex items-center w-2/3 transition-all duration-700 group-hover:hidden ">
                    <Image
                      className="relativepos"
                      src="/mobileapps/vienna/logolastw.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="relative z-10 items-center hidden w-2/3 transition-all duration-700 group-hover:flex ">
                    <Image
                      className="relativepos"
                      src="/mobileapps/vienna/logolastw.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="absolute flex items-center justify-center w-full h-full ">
                  <AnimatedImage
                    src="/mobileapps/vienna/last.png"
                    alt="Background 1"
                    initialScale={0.5}
                    finalScale={1}
                    duration={1}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
