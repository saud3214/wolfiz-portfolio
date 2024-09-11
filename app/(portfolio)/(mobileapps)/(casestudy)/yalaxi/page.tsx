'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import {
  textColor,
  largeImage,
  movingText,
} from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import useSmoothScroll from '@/app/components/ss';
import {
  RevealOnScroll,
  RevealOnScrollX,
  RevealOnScrollLeft,
  RevealOnScrollLeftText,
  RevealOnScrollLeftImage,
  RevealOnScrollXImage,
  SrLeft,
  SrRight,
} from '@/app/components/revealelement';

const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Yalaxi() {
  useSmoothScroll();
  useEffect(() => {
    textColor();
    largeImage();
    movingText();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col bg-[#282727]   ${urbanist.className}`}
      >
        <div className="flex items-start justify-center w-full ">
          <div className="grid items-start justify-center w-full grid-cols-12 ">
            <div className="flex flex-col items-center justify-center col-span-12 cursor-default lg:pt-20 ">
              <div className="flex items-center justify-center flex-col h-[90vh] lg:h-auto">
                <div className="flex items-center  relative   pb-10 lg:w-[12%] w-1/2  ">
                  <RevealOnScrollLeft>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/yalaxi/logoorng.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScrollLeft>
                </div>
                <RevealOnScroll>
                  <div className=" flex flex-col w-full items-center justify-center  lg:text-[6vw] text-[9vw] lg:leading-[120px] leading-10 text-[#4a4848] imgtrig font-bold">
                    <span className="hover-text ">YALAXI IS </span>
                    <span className="hover-text">FAST. SAFE. SIMPLE.</span>
                  </div>
                </RevealOnScroll>
                <div className="relative flex items-center w-12 mt-10 ">
                  <Image
                    className=" relativepos"
                    src="/mobileapps/yalaxi/down.png"
                    alt="Background 1"
                    fill
                  />
                </div>

                <div className="relative flex items-center mt-10 image-container ">
                  <Image
                    className=" relativepos rounded-3xl responsive-image"
                    src="/mobileapps/yalaxi/bg12.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="grid items-center justify-center w-11/12 grid-cols-12 lg:pt-20 ">
                <div className="items-start justify-center col-span-12 lg:col-span-6 ">
                  <RevealOnScrollLeftText>
                    <div className="flex flex-col items-start justify-center ">
                      <div className=" flex flex-col w-full items-start justify-center  lg:text-6xl text-5xl  text-[#4a4848] font-bold">
                        <span className="capitalize hover-text ">Project</span>
                        <span className="capitalize hover-text">Overview</span>
                      </div>

                      <span className="w-full pt-5 text-base text-white lg:w-8/12 ">
                        Efficient urban transportation is crucial for growing
                        cities. This case study explores Yalaxi App, enhancing
                        mobility through reliable and affordable solutions. We
                        examine its strategies, innovations, challenges, and
                        impacts, providing insights into the transport sectors
                        evolution and technologys role.
                      </span>
                    </div>
                  </RevealOnScrollLeftText>
                </div>
                <div className="flex items-end justify-end col-span-12 pt-5 lg:col-span-6 lg:pt-0">
                  <div className="relative flex items-end w-full lg:w-9/12 ">
                    <RevealOnScrollXImage>
                      <Image
                        className=" relativepos rounded-3xl responsive-image -rotate-[9deg]"
                        src="/mobileapps/yalaxi/iOS app dock.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollXImage>
                  </div>
                </div>
              </div>
              <div className="grid items-center justify-center w-11/12 grid-cols-12 pt-10 ">
                <div className="flex items-start justify-start order-2 col-span-12 pt-5 lg:col-span-6 lg:order-1 lg:pt-0 ">
                  <div className="relative flex items-start justify-start w-full lg:w-9/12 ">
                    <RevealOnScrollLeftImage>
                      <Image
                        className=" relativepos rounded-3xl responsive-image rotate-[9deg]"
                        src="/mobileapps/yalaxi/iOS app dock 2.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollLeftImage>
                  </div>
                </div>
                <div className="items-start justify-center order-1 col-span-12 lg:col-span-6 lg:order-2 ">
                  <RevealOnScrollXImage>
                    <div className="flex flex-col items-end justify-end ps-5 text-end">
                      <div className=" flex flex-col w-full items-end justify-end lg:text-6xl text-5xl  text-[#4a4848] font-bold">
                        <span className="capitalize hover-text ">Problem</span>
                        <span className="capitalize hover-text">statement</span>
                      </div>

                      <span className="w-full pt-5 text-white lg:w-8/12">
                        Efficient urban transportation is crucial for growing
                        cities. This case study explores Yalaxi App, enhancing
                        mobility through reliable and affordable solutions. We
                        examine its strategies, innovations, challenges, and
                        impacts, providing insights into the transport sectors
                        evolution and technologys role.
                      </span>
                    </div>
                  </RevealOnScrollXImage>
                </div>
              </div>
              <div className="grid items-center justify-center w-11/12 grid-cols-12 pt-10 lg:pt-20 ">
                <div className="items-start justify-center col-span-12 lg:col-span-6 ">
                  <RevealOnScrollLeftText>
                    <div className="flex flex-col items-start justify-center ">
                      <div className=" flex flex-col w-full items-start justify-center  lg:text-6xl text-5xl  text-[#4a4848] font-bold">
                        <span className="capitalize hover-text ">
                          solution
                        </span>
                        <span className="capitalize hover-text">statement</span>
                      </div>

                      <span className="w-full pt-5 text-white lg:w-8/12">
                        Efficient urban transportation is crucial for growing
                        cities. This case study explores Yalaxi App, enhancing
                        mobility through reliable and affordable solutions. We
                        examine its strategies, innovations, challenges, and
                        impacts, providing insights into the transport sectors
                        evolution and technologys role.
                      </span>
                    </div>
                  </RevealOnScrollLeftText>
                </div>
                <div className="flex items-end justify-end col-span-12 pt-5 lg:col-span-6 lg:pt-0">
                  <div className="relative flex items-end w-full lg:w-9/12 ">
                    <RevealOnScrollXImage>
                      <Image
                        className=" relativepos rounded-3xl responsive-image -rotate-[9deg]"
                        src="/mobileapps/yalaxi/ss2.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollXImage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-10 overflow-hidden">
          <div className="flex flex-col items-center space-y-4 moving-text-container">
            <div className="moving-text-1 lg:text-7xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FE4B10] to-[#FE9900] uppercase whitespace-nowrap">
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
            </div>

            <div className="moving-text-2 lg:text-7xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FE4B10] to-[#FE9900] uppercase whitespace-nowrap">
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:h-[60vh] h-auto py-10   ">
          <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl  text-[#4a4848] font-bold  h-full ">
            <div className="relative flex flex-col items-center justify-center w-11/12 h-full image-row ">
              <span className="relative uppercase ">Design Process</span>

              <div className="lg:flex hidden items-center justify-center lg:absolute relative top-0 bottom-0  h-full left-[5%] image-card rotate-12 imgcard1 w-[25%]    ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp1.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="lg:flex hidden items-center justify-center lg:absolute relative top-0 bottom-0  h-full left-[18%] image-card imgcard2 w-1/4">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="lg:flex hidden items-center justify-center lg:absolute relative top-0 bottom-0  h-full  right-[42%]  image-card imgcard1  w-1/4 ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp3.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="lg:flex hidden items-center justify-center lg:absolute relative top-0 bottom-0  h-full right-[23%]   image-card  imgcard2 w-1/4">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp4.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="lg:flex hidden items-center justify-center absolute  top-0 bottom-0 right-[5%]  h-full  image-card  imgcard1 w-1/4 ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp5.png"
                  alt="Background 1"
                  fill
                />
              </div>
              {/* mobile images */}
              <div className="relative flex items-center justify-center w-4/5 h-full py-5 lg:hidden ">
                <SrRight>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/yalaxi/dp1.png"
                    alt="Background 1"
                    fill
                  />
                </SrRight>
              </div>
              <div className="relative flex items-center justify-center w-4/5 h-full py-5 lg:hidden ">
                <SrLeft>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/yalaxi/dp2.png"
                    alt="Background 1"
                    fill
                  />
                </SrLeft>
              </div>
              <div className="relative flex items-center justify-center w-4/5 h-full py-5 lg:hidden ">
                <SrRight>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/yalaxi/dp3.png"
                    alt="Background 1"
                    fill
                  />
                </SrRight>
              </div>
              <div className="relative flex items-center justify-center w-4/5 h-full py-5 lg:hidden ">
                <SrLeft>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/yalaxi/dp4.png"
                    alt="Background 1"
                    fill
                  />
                </SrLeft>
              </div>
              <div className="relative flex items-center justify-center w-4/5 h-full py-5 lg:hidden ">
                <SrRight>
                  <Image
                    className=" relativepos"
                    src="/mobileapps/yalaxi/dp5.png"
                    alt="Background 1"
                    fill
                  />
                </SrRight>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center w-full ">
          <div className="grid items-center justify-center w-full grid-cols-12 ">
            <div className="flex flex-col items-center justify-center col-span-12 text-left lg:pt-10 ">
              <div className="relative flex-col items-center justify-center hidden w-11/12 text-white lg:flex lg:pt-20 lg:mt-10">
                <span className="font-semibold text-[15vw] absolute  top-[10%] z-10 fontpopins">
                  Poppins
                </span>
                <div className="flex items-start justify-between w-full ">
                  <div className="flex items-center justify-center gap-5 pb-20 ">
                    <div className="px-10 py-3 text-sm border border-white rounded-3xl">
                      TypeFace
                    </div>
                    <div className="px-10 py-3 text-sm border border-white rounded-3xl">
                      Yalaxi Mobile App
                    </div>
                    <div className="px-10 py-3 text-sm border border-white rounded-3xl">
                      Colors
                    </div>
                    <div className="px-10 py-3 text-sm border border-white rounded-3xl">
                      Icons
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 ">
                    <RevealOnScrollX>
                      <div className="bg-[#FE4B10] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                        <span> #FE4B10</span>
                      </div>

                      <div className="bg-[#131313] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                        <span> #131313</span>
                      </div>
                    </RevealOnScrollX>
                  </div>
                </div>
                <div className="flex items-end justify-between w-full ">
                  <div className="flex flex-col w-1/4 ">
                    <RevealOnScrollLeft>
                      <div className="bg-[#FE9900] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                        <span> #FE9900</span>
                      </div>

                      <div className="bg-[#E5E5E5] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                        <span> #E5E5E5</span>
                      </div>
                    </RevealOnScrollLeft>
                  </div>
                  <div className="flex flex-col items-end justify-start w-2/3 ">
                    <div className="flex items-start justify-start w-1/2 pt-10 ps-5">
                      <span>
                        123456789.!@#$% <br></br>
                        ABCDEFGHIJKLMNOPQRS<br></br>
                        TUVWXYZ
                        <br></br>abcdefghijkimnopqr<br></br> stuvw xyz
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-10/12 pt-10 ">
                      <div className="flex flex-col gap-3 ">
                        <span className="text-xl ">Menu</span>
                        <div className="relative flex items-center w-full ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/yalaxi/micon.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <span>Chat</span>
                        <div className="relative flex items-center w-full ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/yalaxi/chat.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <span>Navigation</span>
                        <div className="relative flex items-center w-full ">
                          <Image
                            className=" relativepos"
                            src="/mobileapps/yalaxi/nav.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-11/12 py-10 lg:mt-20 ">
                <div className="relative flex items-center w-full rounded-3xl lg:w-7/12 ">
                  <Image
                    className=" relativepos rounded-3xl"
                    src="/mobileapps/yalaxi/screens.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full lg:pt-20">
                <div className="grid items-center justify-center w-full grid-cols-12">
                  <div className="relative flex items-center w-full h-full col-span-6 ">
                    <RevealOnScrollLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/shrt1.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollLeft>
                  </div>
                  <div className="relative flex items-center w-full h-full col-span-6 ">
                    <Image
                      className=" relativepos"
                      src="/mobileapps/yalaxi/shrt.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="grid items-center justify-center w-full grid-cols-12">
                  <div className="relative flex items-center w-full h-full col-span-6 ">
                    <div className="relative flex items-center w-full h-full ">
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/banner.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="relative flex items-center w-full h-full col-span-6 ">
                    <RevealOnScrollX>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/logo1.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollX>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-11/12 pt-10 text-white lg:pt-20">
                <RevealOnScroll>
                  <div className=" flex  w-full items-center justify-center  lg:text-6xl text-5xl  text-[#4a4848] font-bold">
                    <span className="uppercase hover-text ">
                      information process
                    </span>
                  </div>
                </RevealOnScroll>

                <div className="relative flex items-center w-full pt-10 lg:w-9/12 ">
                  <RevealOnScrollX>
                    <Image
                      className=" relativepos"
                      src="/mobileapps/yalaxi/is.png"
                      alt="Background 1"
                      fill
                    />
                  </RevealOnScrollX>
                </div>
              </div>

              <div className="grid items-start w-11/12 grid-cols-12 pt-10 ">
                <div className="flex items-center justify-center col-span-12 ">
                  <RevealOnScroll>
                    <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl  text-[#4a4848] font-bold py-10">
                      <span className="uppercase hover-text">
                        login screens
                      </span>
                    </div>
                  </RevealOnScroll>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="fle<x items-center  relative w-full     ">
                    <RevealOnScrollLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip1.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollLeft>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip2.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip3.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollX>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip4.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollX>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-12 ">
                  <span className="text-4xl font-semibold"></span>
                  <RevealOnScroll>
                    <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl text-[#4a4848] font-bold py-10">
                      <span className="uppercase hover-text">
                        New Rides & Chats
                      </span>
                    </div>
                  </RevealOnScroll>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip5.png"
                        alt="Backgrounde"
                        fill
                      />
                    </RevealOnScrollLeft>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip6.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip7.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollX>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip8.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollX>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-12 ">
                  <RevealOnScroll>
                    <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl text-[#4a4848] font-bold py-10">
                      <span className="uppercase hover-text">Payment</span>
                    </div>
                  </RevealOnScroll>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/p1.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollLeft>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/p2.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>

                <div className="flex items-center justify-center col-span-6 lg:col-span-3 ">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/p3.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollX>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/ip8.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollX>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-12 ">
                  <RevealOnScroll>
                    <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl  text-[#4a4848] font-bold py-10">
                      <span className="uppercase hover-text">
                        Menu & Profile
                      </span>
                    </div>
                  </RevealOnScroll>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/mp1.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollLeft>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/mp2.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/mp3.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollX>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/mp4.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollX>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-12">
                  <RevealOnScroll>
                    <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl  text-[#4a4848] font-bold py-10">
                      <span className="uppercase hover-text">
                        History & Reviews
                      </span>
                    </div>
                  </RevealOnScroll>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollLeft>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/hr1.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollLeft>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/hr2.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScroll>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/hr3.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScroll>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-6 lg:col-span-3">
                  <div className="relative flex items-center w-full ">
                    <RevealOnScrollX>
                      <Image
                        className=" relativepos"
                        src="/mobileapps/yalaxi/hr4.png"
                        alt="Background 1"
                        fill
                      />
                    </RevealOnScrollX>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="grid items-center justify-center w-full grid-cols-12 gap-5 pt-10 pb-10 lg:w-11/12 lg:pt-0 lg:gap-10 ">
                  <div className="items-center justify-center col-span-12">
                    <RevealOnScroll>
                      <div className=" flex flex-col w-full items-center justify-center  lg:text-6xl text-4xl text-[#4a4848] font-bold lg:py-10">
                        <span className="uppercase hover-text">
                          Social media
                        </span>
                      </div>
                    </RevealOnScroll>
                  </div>

                  <div className="flex items-center justify-center col-span-12 lg:col-span-4">
                    <div className="relative flex items-center w-10/12 lg:w-full ">
                      <RevealOnScrollLeft>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/yalaxi/sm1.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScrollLeft>
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-12 lg:col-span-4">
                    <div className="relative flex items-center w-10/12 lg:w-full ">
                      <RevealOnScroll>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/yalaxi/sm2.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScroll>
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-12 lg:col-span-4">
                    <div className="relative flex items-center w-10/12 lg:w-full ">
                      <RevealOnScrollX>
                        <Image
                          className=" relativepos"
                          src="/mobileapps/yalaxi/sm3.png"
                          alt="Background 1"
                          fill
                        />
                      </RevealOnScrollX>
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
