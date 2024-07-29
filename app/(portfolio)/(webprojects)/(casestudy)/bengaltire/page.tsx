'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Heebo } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';

const urbanist = Heebo({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function BengalTire() {
  useEffect(() => {});

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col text-white ${urbanist.className}`}
      >
        <div className=" bg-bengal1 bg-cover bg-center bg-no-repeat w-full items-end  justify-end flex  lg:h-[140vh] h-[100vh] lg:p-20 p-10">
          <div className="grid grid-cols-12 w-full  items-end justify-end  ">
            <div className="flex flex-col col-span-12 items-end   justify-end  ">
              <div className="flex items-center lg:w-[60%] ">
                <Image
                  className=" relativepos "
                  src="/bengal/text.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal2 bg-black bg-cover bg-center bg-no-repeat w-full items-center justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-center justify-center">
                <span className=" lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px]">
                  01
                </span>
                <span className=" lg:text-7xl text-4xl  font-bold -mt-7">
                  Project Overview
                </span>
              </div>
              <span className="text-2xl  text-center  pt-10  lg:px-10">
                We specialize in all roadside service solutions, wheel
                replacement services and tire repair for all types of vehicles
                on the road. We will arrive quickly anywhere and at any time
                24/6. We have mobile tire shops equipped with the latest and
                most efficient tools in the industry. We have service vehicles
                for all types of stuck/broken down vehicles in the fastest way.
                We offer car rescue services in all parts of the country, from
                the north to Eilat. We will reach you in any situation. 24-hour
                wheel change service, in any weather, to any point immediately.
                We specialize in all roadside service solutions, wheel change
                services and tire repair for all types of vehicles on the road.
                We will 
              </span>
              <div className="flex lg:flex-row flex-col  items-center justify-center w-4/5 gap-5">
                <div className="flex  items-start justify-center gap-5 pt-10 mt-10">
                  <div className="flex items-center lg:w-28  w-36 ">
                    <Image
                      className=" relativepos "
                      src="/bengal/ps.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="lg:text-4xl text-3xl font-bold">
                      Problem Statement
                    </span>
                    <span className="text-2xl pt-5">
                      This project is about providing comprehensive roadside
                      assistance solutions, specializing in wheel replacement
                      services and tire repairs for all types of vehicles.
                    </span>
                  </div>
                </div>

                <div className="flex  items-start justify-center gap-5 pt-10 lg:mt-10">
                  <div className="flex items-center lg:w-28  w-36 ">
                    <Image
                      className=" relativepos "
                      src="/bengal/ss.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="lg:text-4xl text-3xl font-bold">
                      Solution Statement
                    </span>
                    <span className="text-2xl pt-5">
                      This project is about providing comprehensive roadside
                      assistance solutions, specializing in wheel replacement
                      services and tire repairs for all types of vehicles.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:w-4/6  w-full py-10 ">
                <Image
                  className=" relativepos "
                  src="/bengal/laptop.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal3 bg-black bg-cover bg-center bg-no-repeat w-full items-center justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-start justify-center">
                <span className="lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px]">
                  02
                </span>
                <span className="lg:text-7xl text-4xl font-bold -mt-7">
                  Design Process
                </span>
              </div>
              <div className="flex items-center py-10 lg:w-11/12 w-full ">
                <Image
                  className=" relativepos "
                  src="/bengal/dp.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal2 bg-black bg-cover bg-center bg-no-repeat w-full items-center justify-center flex py-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-end justify-center">
                <span className="lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px]">
                  03
                </span>
                <span className="lg:text-7xl text-4xl font-bold -mt-7">
                  Colors & Typography
                </span>
              </div>
              <div className="flex lg:flex-row flex-col  items-center justify-between py-10 w-full ">
                <div className="flex items-center lg:w-2/5 w-11/12">
                  <Image
                    className=" relativepos "
                    src="/bengal/colors.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  lg:w-1/2 w-11/12">
                  <Image
                    className=" relativepos "
                    src="/bengal/abc.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal3 bg-black bg-cover bg-center bg-no-repeat w-full items-center justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-start justify-center">
                <span className="lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px]">
                  04
                </span>
                <span className=" lg:text-7xl text-4xl font-bold -mt-7">
                  Wireframes
                </span>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-around pt-10 w-full ">
                <div className="flex items-center lg:w-5/12 w-11/12">
                  <Image
                    className=" relativepos "
                    src="/bengal/wf1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center lg:w-2/5 w-11/12">
                  <Image
                    className=" relativepos "
                    src="/bengal/wf2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal2 bg-black bg-cover bg-left bg-no-repeat w-full items-center justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-end justify-center">
                <span className="lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px]">
                  05
                </span>
                <span className="lg:text-7xl text-4xl font-bold -mt-7">
                  Visual Design
                </span>
              </div>
              <div className="flex items-center pt-10 lg:w-10/12 w-11/12 ">
                <Image
                  className=" relativepos "
                  src="/bengal/vd1.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex  items-start justify-around pt-10 w-full ">
                <div className="flex items-center w-5/12">
                  <Image
                    className=" relativepos "
                    src="/bengal/vd2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center w-2/5">
                  <Image
                    className=" relativepos "
                    src="/bengal/vd3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal3 bg-black bg-cover bg-left bg-no-repeat w-full items-center justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-start justify-center">
                <span className=" lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px] lg:pt-10">
                  06
                </span>
                <span className="lg:text-7xl text-4xl font-bold -mt-7">
                  Mobile Responsive
                </span>
              </div>

              <div className="flex  items-start justify-around pt-10 w-full ">
                <div className="flex items-center w-1/6">
                  <Image
                    className=" relativepos "
                    src="/bengal/mr1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center mt-20  w-1/6 ">
                  <Image
                    className=" relativepos "
                    src="/bengal/mr2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  w-1/6 ">
                  <Image
                    className=" relativepos "
                    src="/bengal/mr3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  mt-20  w-1/6">
                  <Image
                    className=" relativepos "
                    src="/bengal/mr4.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center   w-1/6 ">
                  <Image
                    className=" relativepos "
                    src="/bengal/mr5.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
              <div className="flex items-center lg:mt-20 mt-10 w-1/2">
                <Image
                  className=" relativepos "
                  src="/bengal/iphone.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-bengal3 bg-black bg-cover bg-center bg-no-repeat w-full items-center justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center  ">
            <div className="flex flex-col col-span-12 items-center   justify-center   ">
              <div className="flex flex-col w-full items-end justify-center">
                <span className="lg:text-[150px] text-[120px] font-bold gradient-text4 leading-[120px]">
                  07
                </span>
                <span className="lg:text-7xl text-4xl font-bold -mt-7">
                  Testing
                </span>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-around py-10 w-full ">
                <div className="flex items-center lg:w-10/12 w-full ">
                  <Image
                    className=" relativepos "
                    src="/bengal/testing.png"
                    alt="Background 1"
                    fill
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
