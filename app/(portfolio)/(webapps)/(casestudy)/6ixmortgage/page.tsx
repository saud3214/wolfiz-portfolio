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
import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  RevealOnScroll,
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

export default function SixMortgage() {
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
            <div className="flex flex-col items-center justify-center w-full col-span-12 ">
              <div className="w-full md:h-[100vh] flex  items-start justify-center bg-[#887833]">
                <div className="grid grid-cols-12  w-full ">
                  <div className="md:col-span-1 col-span-12 flex items-center justify-center order-2 md:order-1">
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

                  <div className="md:col-span-3 col-span-12 flex flex-col items-start justify-between md:py-[10%] order-3 md:order-2 ">
                    <div className="relative  w-1/2  ">
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/logo2.png"
                        alt="logo"
                        fill
                      />
                    </div>
                    <div className="  flex flex-col h-[25vh]  md:h-auto ">
                      {!isExpanded && (
                        <span className="font-bold md:text-4xl text-xl text-white py-5">
                          Architect
                        </span>
                      )}
                      {!isExpanded && (
                        <div className="md:h-[16vh]  flex items-center ">
                          <div className="flex items-center justify-center  md:h-40 absolute">
                            <GradualSpacing
                              className={`md:text-[8vw] text-6xl font-bold text-white  ${ptserif.className} leading-none `}
                              text="Mortgage"
                            />
                          </div>
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
                            className={`bg-white shadow-md overflow-hidden md:p-5 p-2 absolute bottom-[10%] left-[8.5%] md:gap-10 md:w-1/3 w-11/12 transform transition-all duration-500 ease-in-out ${
                              isExpanded
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                            }`}
                          >
                            <div className="uppercase  text-[#887a31] font-semibold flex w-full items-center justify-between">
                              Case Study
                              <div className="relative  md:size-12 size-8  ">
                                <Image
                                  className=" relativepos"
                                  src="/6ixmortgage/csl.png"
                                  alt="logo"
                                  fill
                                />
                              </div>
                            </div>
                            <h2
                              className={` ${ptserif.className} block md:my-4 my-2 md:text-4xl text-xl font-bold text-black `}
                            >
                              Tailored Mortgage Solutions with Expert Guidance
                              and Personalized Service
                            </h2>
                            <span className="md:text-2xl  text-lg md:mb-4 mb-2 font-bold ">
                              Mortgage Architect
                            </span>
                            <div className="h-1 md:w-2/3 w-11/12 bg-[#CFC1A7] md:my-4 my-2"></div>
                            <p className="md:mt-4  mt-2 text-gray-600 md:text-base text-sm">
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
                  <div className="md:col-span-8 col-span-12 flex items-center justify-center h-full order-1 md:order-3 ">
                    <div className=" w-full  md:h-[100vh] h-[50vh]">
                      <video
                        className="roundvideo md:h-[100vh]"
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
                    <SrRight>
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/si.png"
                        alt="logo"
                        fill
                      />
                    </SrRight>
                  </div>
                  <div className="w-[30%] absolute bottom-[8%] right-[10%] bg-white h-1 rounded-3xl"></div>
                  <span className="text-xl absolute top-[8%] left-[28%] text-white">
                    Mortgage Architect is a leading mortgage brokerage firm
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col h-[100vh] items-center justify-center md:gap-10 gap-5">
                <div className="grid grid-cols-12 py-10 h-full ">
                  <div className="md:col-span-5 col-span-12 flex flex-col items-start justify-center md:px-20 px-5">
                    <span className="md:text-4xl text-3xl font-bold text-[#887a31]">
                      Problem Statement
                    </span>
                    <RevealOnScroll>
                      <span className="md:text-6xl text-4xl font-bold pt-5">
                        Expert Tailored <br />
                        Mortgage <br /> Solutions
                      </span>
                    </RevealOnScroll>
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
                  <div className="md:col-span-7 col-span-12 flex items-end h-full px-5">
                    <MarqueeDemo />
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex md:h-[100vh] h-[50vh] ">
                <div className="flex h-full w-full flex-col relative">
                  <div className="w-full h-full bg-black"></div>
                  <div className="w-full h-full bg-white"></div>

                  <div className="md:w-3/4 w-11/12 absolute md:top-[10%] top-[20%] md:left-[20%] left-[5%] object-contain">
                    <div className="  relative md:w-9/12 w-full  ">
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/laptop.gif"
                        alt="logo"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12 items-start justify-start grid grid-cols-12  md:py-10  ">
                <div className="col-span-6 flex  pb-10">
                  <RevealOnScroll>
                    <span className="md:font-bold font-semibold text-3xl">
                      Roboto
                    </span>
                  </RevealOnScroll>
                </div>
                <div className="col-span-6 pb-10 ">
                  <RevealOnScroll>
                    <span className=" md:text-2xl text-xl">
                      Using the Roboto font in a web app is a great choice due
                      to its readability and modern look.
                    </span>
                  </RevealOnScroll>
                </div>
                <div className=" col-span-12 h-1 rounded-3xl bg-[#887A31] md:mb-10"></div>

                <div className="md:col-span-4 col-span-12 items-center justify-start flex flex-col md:py-10">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className={`${
                        ptserif.className
                      } md:text-[25rem] text-[15rem] font-bold leading-none ${
                        index === currentIndex ? 'block' : 'hidden'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="md:font-bold md:text-4xl text-xl 2xl:px-20">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt
                    Uu Vv Ww Xx Yy Zz
                  </span>
                </div>
                <div className="md:col-span-8 col-span-12 flex flex-col items-center justify-center h-full py-5 md:py-0">
                  <div className="flex w-full items-start justify-center">
                    <span className=" md:text-xl text-lg">
                      <span className="font-bold">1E1E1E:</span>
                      <br />A very dark shade of gray, almost black. Its often
                      used for backgrounds or as a base color to create a sleek,
                      modern, and minimalist aesthetic. <br />
                      <br />
                      <span className="font-bold">#887833:</span> <br />A muted,
                      earthy shade of golden yellow or olive. This color can be
                      used for accents, giving a warm, sophisticated contrast to
                      darker shades like #1E1E1E. <br />
                      <br />
                      <span className="font-bold">#FFFFFF:</span>
                      <br />
                      Pure white. This is the lightest color, representing
                      cleanliness, simplicity, and space. Its often used as a
                      background color to provide contrast, making other colors
                      stand out, or to create a clean, modern look in design.
                    </span>
                  </div>
                  <div className="w-full md:flex hidden items-center justify-around bg-[#887833] mt-10 hover:bg-black p-10 ">
                    <div className="relative  rotate-90 ">
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/arrow.png"
                        alt="move down arrow"
                        fill
                      />
                    </div>
                    <span className="text-white font-bold text-5xl  tracking-widest ">
                      . . .
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-start justify-start grid grid-cols-12  md:p-10 p-5  bg-[#887A31] md:gap-10 gap-5">
                <div className="col-span-5 flex flex-col items-center  justify-center gap-10">
                  <div className="relative  w-10/12 ">
                    <SrLeft>
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/img1.png"
                        alt="move down arrow"
                        fill
                      />
                    </SrLeft>
                  </div>
                  <div className="overflow-hidden flex items-center justify-center w-10/12">
                    <div className="relative   hover:scale-150 transition-all duration-700 ease-out overflow-hidden w-full ">
                      <SrBottom>
                        <Image
                          className=" relativepos"
                          src="/6ixmortgage/img2.png"
                          alt="move down arrow"
                          fill
                        />
                      </SrBottom>
                    </div>
                  </div>
                </div>
                <div className="col-span-7 flex items-center justify-center h-full">
                  <div className="relative  w-full h-full  object-cover">
                    <Image
                      className=" relativepos object-cover"
                      src="/6ixmortgage/img3.png"
                      alt="move down arrow"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-full w-11/12 items-center justify-cneter grid grid-cols-12 py-10 md:gap-10 gap-5 ">
                <div className=" md:col-span-6 col-span-12 flex flex-col items-start justify-start md:pe-10 md:gap-10 gap-5">
                  <div className="relative  w-11/12  ">
                    <Image
                      className=" relativepos"
                      src="/6ixmortgage/pixe.png"
                      alt="move down arrow"
                      fill
                    />
                  </div>
                  <div className="w-full md:h-[90vh]">
                    <video
                      className="roundvideo object-cover md:h-[90vh] "
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      playsInline
                    >
                      <source src="/6ixmortgage/video2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12 flex flex-col items-start justify-start md:gap-10 gap-5 h-full md:pe-20 pe-5">
                  <span className="text-[#887a31] font-bold md:text-4xl text-2xl mt-4">
                    Solution Statement
                  </span>
                  <RevealOnScroll>
                    <span className="font-bold md:text-7xl text-4xl">
                      Blueprints for <br />
                      Sustainable <br />
                      Financial Success
                    </span>
                  </RevealOnScroll>

                  <span className="text-base">
                    Architects face unique financial challenges due to their
                    often irregular income streams, project-based revenue, and
                    the need to finance both professional and personal spaces.
                    <br />
                    <br />
                    Traditional mortgage solutions often fail to accommodate
                    these specific needs, leading to a mismatch between
                    available financial products and the realities of an
                    architect’s financial situation.
                    <br />
                    <br />
                    The implementation of our tailored mortgage solutions
                    resulted in a more accessible and manageable financing
                    process for architects. Architects experienced reduced
                    stress associated with mortgage applications, more flexible
                    repayment options, and a more efficient integration of their
                    professional and personal financial needs.
                    <br />
                    <br />
                    Overall, our solution not only facilitated their financial
                    stability but also supported their creative and business
                    endeavors.
                  </span>
                </div>
              </div>
              <div className="w-11/12 items-center justify-center grid grid-cols-12 md:py-10">
                <div className="col-span-12 md:h-[90vh]">
                  <video
                    className="roundvideo object-cover md:h-[90vh] "
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                  >
                    <source src="/6ixmortgage/video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="md:col-span-6 col-span-12 items-start justify-center flex flex-col my-10">
                  <SrLeft>
                    <span className="text-[#887a31] font-bold md:text-4xl text-2xl ">
                      Finance Mastery
                    </span>
                  </SrLeft>
                  <SrLeft>
                    <span className="font-bold md:text-7xl text-4xl mt-5">
                      Designing Financial <br />
                      Masterpieces
                      <br />
                      Together
                    </span>
                  </SrLeft>
                </div>
                <div className="md:col-span-6 col-span-12 items-start justify-start flex h-full md:py-10 pb-10 md:pb-10">
                  <div className="relative  h-[50vh] object-cover ">
                    <Image
                      className=" relativepos object-cover"
                      src="/6ixmortgage/cfs.png"
                      alt="move down arrow"
                      fill
                    />
                  </div>
                  <div className=" h-[50vh] w-full">
                    <video
                      className="roundvideo object-cover h-[50vh] w-full "
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      playsInline
                    >
                      <source src="/6ixmortgage/cacacca.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-start justify-start md:h-[80vh] h-[60vh] relative p-10 md:px-20">
                <video
                  className="h-full object-cover w-full absolute top-0 left-0"
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                >
                  <source src="/6ixmortgage/last.mp4" type="video/mp4" />
                </video>
                <div className="z-10 flex items-start md:justify-between justify-center gap-5 md:gap-0 flex-col h-full text-white">
                  <SrLeft>
                    <span className="font-bold md:text-6xl text-3xl  text-white">
                      Build Your financial <br />
                      future with precision
                      <br />
                      and vision
                    </span>
                  </SrLeft>
                  <div className="w-full items-center md:justify-between justify-center flex flex-col md:flex-row">
                    <span className="md:w-2/4 w-11/12">
                      Just as every detail matters in your designs, so does
                      every financial decision. Precision in your architectural
                      work is mirrored by careful financial planning, ensuring
                      that each choice builds towards a solid and successful
                      future. Treat your finances with the same dedication and
                      foresight that you bring to your projects.
                    </span>
                    <div className="relative  md:w-1/4 w-1/2  ">
                      <Image
                        className=" relativepos"
                        src="/6ixmortgage/logo2.png"
                        alt="logo"
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
