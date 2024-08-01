'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';

const urbanist = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Yalaxi() {
  useEffect(() => {});

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col text-white ${urbanist.className}`}
      >
        <div className=" bg-ylbg1 bg-cover bg-center bg-no-repeat w-full items-start justify-center flex h-[100vh] p-10  ">
          <div className="grid grid-cols-12 w-11/12  items-start justify-start  ">
            <div className="flex flex-col col-span-6 items-center justify-center pt-10 text-center gap-5"></div>
            <div className="flex flex-col col-span-6 items-center justify-start  text-center gap-5">
              <div className="w-full flex gap-5 items-center justify-center pb-20">
                <div className="px-10 py-3 border border-white rounded-3xl">
                  UI Casestudy
                </div>
                <div className="px-10 py-3 border border-white rounded-3xl">
                  Yalaxi Mobile App
                </div>
              </div>

              <div className="flex items-center  relative mt-20 pt-20 ">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/logo.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <span className="text-3xl font-medium">
                BETTER COMMUNICATION | BETTER RIDE
              </span>
            </div>
          </div>
        </div>

        <div className=" bg-black w-full items-start justify-center flex    ">
          <div className="grid grid-cols-12 w-11/12  items-start justify-start  ">
            <div className="flex flex-col col-span-12 items-center justify-center pt-10 text-left gap-5">
              <span className="text-[40px] leading-[60px] lg:pe-20">
                Efficient urban transportation is crucial for growing cities.
                This case study explores Yalaxi App, enhancing mobility through
                reliable and affordable solutions. We examine its strategies,
                innovations, challenges, and impacts, providing insights into
                the transport sectors evolution and technologys role.
              </span>
              <div className="w-full flex items-center justify-between gap-4 pt-10">
                <div className="flex flex-col items-start justify-center">
                  <span className="font-semibold text-4xl pb-10">
                    Problem Statement
                  </span>
                  <span className="text-xl w-9/12">
                    Urban areas face congestion, unreliable transit, and high
                    costs, limiting accessibility and efficiency. There is a
                    need for reliable, affordable, and efficient transportation
                    solutions to enhance urban mobility.
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className="font-semibold text-4xl pb-10">
                    Solution Statement
                  </span>
                  <span className="text-xl w-9/12 text-[#FFFFFF]">
                    Yalaxi App provides a reliable, affordable, and efficient
                    transportation platform, addressing congestion, unreliable
                    transit, and high costs. It enhances urban mobility and
                    accessibility through innovative features and strategic
                    implementation.
                  </span>
                </div>
              </div>
              <div className="flex items-center  relative pt-10 w-10/12">
                <Image
                  className=" relativepos"
                  src="/mobileapps/yalaxi/mlogo.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <span className="lg:text-5xl text-2xl font-extrabold py-10">
                Design Process
              </span>
              <div className="flex items-center  relative  lg:w-10/12 w-full ">
                <Image
                  className=" relativepos "
                  src="/mobileapps/sc/dp.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex w-full items-center justify-center">
                <div className="flex items-center  relative  w-1/2  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/yalaxi/img1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  relative  w-1/2  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/yalaxi/img2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex items-center  relative  w-full  ">
                <Image
                  className=" relativepos "
                  src="/mobileapps/yalaxi/iphone1.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className=" flex flex-col items-center justify-center w-full pt-10 relative">
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
                    <div className="bg-[#FE4B10] w-full h-40 flex text-end items-end justify-end text-3xl p-5">
                      <span> #FE4B10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between w-full ">
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
              <div className="bg-[#2E2C2D] rounded-2xl flex items-center justify- w-full p-10">
                <div className="flex  items-start justify-center ">
                  <div className=" flex flex-col gap-5 items-start justify-start w-1/2">
                    <div className="px-10 py-3 border border-white rounded-3xl text-sm">
                      Jump To Design
                    </div>
                    <div className="flex items-center  relative  pt-20 w-11/12   ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/yalaxi/fb.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-5xl font-bold pt-20 ">
                      Main Screen
                    </span>
                    <span className="pe-20">
                      Yalaxi App provides a reliable, affordable, and efficient
                      transportation platform, addressing congestion, unreliable
                      transit, and high costs. It enhances urban mobility and
                      accessibility through innovative features and strategic
                      implementation.
                    </span>
                  </div>
                  <div className="flex items-center  relative w-1/2    ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/iphone2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 items-start pt-10 w-full ">
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
                <div className="col-span-3 flex items-center justify-center pt-20 ">
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
                <div className="col-span-3 flex items-center justify-center pt-20 ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip4.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
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
                <div className="col-span-3 flex items-center justify-center pt-20 ">
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
                <div className="col-span-3 flex items-center justify-center pt-20 ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip8.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip8.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center pt-20 ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip9.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>

                <div className="col-span-3 flex items-center justify-center ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip10.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center pt-20 ">
                  <div className="flex items-center  relative w-full     ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/yalaxi/ip11.png"
                      alt="Background 1"
                      fill
                    />
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
