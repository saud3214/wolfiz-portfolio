'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
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
} from '@/app/components/revealelement';
import AnimatedCards from '@/app/components/cards';

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
        <div className=" w-full items-start justify-center flex    ">
          <div className="grid grid-cols-12 w-full   items-start justify-center   ">
            <div className="col-span-12 items-center justify-center  flex flex-col  pt-20 cursor-default ">
              <div className="flex items-center  relative   pb-10  ">
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
                <div className=" flex flex-col w-full items-center justify-center  text-[7vw] leading-[120px] text-[#4a4848] imgtrig font-bold">
                  <span className="hover-text ">YALAXI IS </span>
                  <span className="hover-text">FAST. SAFE. SIMPLE.</span>
                </div>
              </RevealOnScroll>
              <div className="flex items-center  relative  mt-10  ">
                <Image
                  className=" relativepos  "
                  src="/mobileapps/yalaxi/down.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center  relative   mt-10 image-container  ">
                <Image
                  className=" relativepos rounded-3xl responsive-image"
                  src="/mobileapps/yalaxi/bg1.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="grid grid-cols-12 items-center justify-center w-11/12 pt-20 ">
                <div className="col-span-6 items-start justify-center ">
                  <RevealOnScrollLeftText>
                    <div className="flex flex-col items-start justify-center ">
                      <div className=" flex flex-col w-full items-start justify-center  text-6xl  text-[#4a4848] font-bold">
                        <span className="hover-text capitalize  ">
                          Project{' '}
                        </span>
                        <span className="hover-text capitalize"> Overview</span>
                      </div>

                      <span className="text-white pt-5 w-8/12">
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
                <div className="col-span-6 items-end justify-end flex ">
                  <div className="flex items-end  relative     ">
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
              <div className="grid grid-cols-12 items-center justify-center w-11/12  ">
                <div className="col-span-6 items-start justify-start flex ">
                  <div className="flex items-start justify-start  relative     ">
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
                <div className="col-span-6 items-start justify-center ">
                  <RevealOnScrollXImage>
                    <div className="flex flex-col items-end justify-end ps-5 text-end">
                      <div className=" flex flex-col w-full items-end justify-end  text-6xl  text-[#4a4848] font-bold">
                        <span className="hover-text capitalize  ">
                          Solution{' '}
                        </span>
                        <span className="hover-text capitalize">
                          {' '}
                          statement
                        </span>
                      </div>

                      <span className="text-white pt-5 w-8/12">
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
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-10 overflow-hidden">
          <div className="moving-text-container flex flex-col items-center space-y-4">
            <div className="moving-text-1 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FE4B10] to-[#FE9900] uppercase whitespace-nowrap">
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
            </div>

            <div className="moving-text-2 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FE4B10] to-[#FE9900] uppercase whitespace-nowrap">
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
              UNMATCHED SERVICE—UNMATCHED SERVICE—FOR EVERY RIDE—FOR EVERY RIDE
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-[60vh] py-10 ">
          <div className=" flex flex-col w-full items-center justify-center  text-6xl  text-[#4a4848] font-bold  h-full ">
            <div className="flex items-center justify-center w-11/12 h-full image-row relative  ">
              <span className=" uppercase relative ">Design Process</span>

              <div className="flex items-center justify-center absolute top-0 bottom-0  h-full left-[5%] image-card    ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp1.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center justify-center absolute top-0 bottom-0  h-full left-[18%] image-card">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center justify-center absolute top-0 bottom-0  h-full  right-[42%]  image-card  ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp3.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center justify-center absolute top-0 bottom-0  h-full right-[23%]   image-card  ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp4.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center justify-center absolute top-0 bottom-0 right-[5%]  h-full  image-card   ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/dp5.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-black w-full items-start justify-center flex    ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center justify-center pt-10 text-left ">
              <div className=" flex flex-col items-center justify-center w-full pt-20 relative mt-10 text-white">
                <span className="font-semibold text-[15vw] absolute  top-[10%]">
                  Poppins
                </span>
                <div className="flex items-start justify-between w-full ">
                  <div className=" flex gap-5 items-center justify-center pb-20">
                    <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                      TypeFace
                    </div>
                    <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                      Yalaxi Mobile App
                    </div>
                    <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                      Colors
                    </div>
                    <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                      Icons
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 ">
                    <RevealOnScrollXImage>
                      <div className="bg-[#FE4B10] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                        <span> #FE4B10</span>
                      </div>
                    </RevealOnScrollXImage>
                  </div>
                </div>
                <div className="flex items-end justify-between w-full  ">
                  <div className="flex flex-col w-1/4 pt-10  ">
                    <div className="bg-[#FE9900] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                      <span> #FE9900</span>
                    </div>
                    <div className="bg-[#E5E5E5] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                      <span> #E5E5E5</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-2/3 items-end justify-start ">
                    <div className="bg-[#131313] w-[37.5%] h-40 flex text-end items-end justify-end text-3xl p-5">
                      <span> #131313</span>
                    </div>
                    <div className=" flex w-1/2 items-start justify-start ps-5 pt-10">
                      <span>
                        123456789.!@#$% <br></br>
                        ABCDEFGHIJKLMNOPQRS<br></br>
                        TUVWXYZ
                        <br></br>abcdefghijkimnopqr<br></br> stuvw xyz
                      </span>
                    </div>
                    <div className=" flex w-10/12 items-center justify-between  pt-10">
                      <div className="flex flex-col gap-3 ">
                        <span className="text-xl font-bold">Menu</span>
                        <div className="flex items-center  relative w-full    ">
                          <Image
                            className=" relativepos "
                            src="/mobileapps/yalaxi/micon.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <span>Chat</span>
                        <div className="flex items-center  relative  w-full   ">
                          <Image
                            className=" relativepos "
                            src="/mobileapps/yalaxi/chat.png"
                            alt="Background 1"
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <span>Navigation</span>
                        <div className="flex items-center  relative  w-full  ">
                          <Image
                            className=" relativepos "
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
              <div className="flex items-start justify-start w-full pt-20">
                <div className=" flex gap-5 items-start justify-start ">
                  <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                    TypeFace
                  </div>
                  <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                    Yalaxi Mobile App
                  </div>
                </div>
                <div className="flex items-center  relative  w-2/3   ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/yalaxi/is.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex items-center  relative  w-full py-10     ">
                <Image
                  className=" relativepos "
                  src="/mobileapps/yalaxi/banner2.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="grid grid-cols-12 items-start pt-10 w-11/12 ">
                <div className="col-span-12 flex items-center justify-center ">
                  <span className="text-4xl font-semibold">Login Screens</span>
                </div>
                <div className="col-span-3 flex items-center justify-center ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center  ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip4.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-12 flex items-center justify-center  py-5">
                  <span className="text-4xl font-semibold">
                    New Rides & Chats
                  </span>
                </div>
                <div className="col-span-3 flex items-center justify-center  ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip5.png"
                      alt="Backgrounde"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center  ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip6.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center  ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip7.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip8.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-12 flex items-center justify-center  py-5">
                  <span className="text-4xl font-semibold">Payment</span>
                </div>
                <div className="col-span-3 flex items-center justify-center ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/p1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/p2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>

                <div className="col-span-3 flex items-center justify-center ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/p3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip8.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-12 flex items-center justify-center  py-5">
                  <span className="text-4xl font-semibold">Menu & Profile</span>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/mp1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/mp2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/mp3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/mp4.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-12 flex items-center justify-center  py-5">
                  <span className="text-4xl font-semibold">
                    History & Reviews
                  </span>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/hr1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/hr2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/hr3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/hr4.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center justify-center gap-5 w-full">
                <div className="col-span-4">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/hr4.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative "></div>
      </div>
    </SlideFromRight>
  );
}
