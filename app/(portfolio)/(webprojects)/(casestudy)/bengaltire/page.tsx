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
        <div className=" bg-bengal1 bg-cover bg-center bg-no-repeat w-full items-end justify-end flex  h-[140vh] p-20">
          <div className="grid grid-cols-12 w-full  items-end justify-end  ">
            <div className="flex flex-col col-span-12 items-end   justify-end  ">
              <div className="flex items-center w-[60%] ">
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
                <span className="text-[150px] font-bold gradient-text4 leading-[120px]">
                  01
                </span>
                <span className="text-7xl font-bold -mt-7">
                  Project Overview
                </span>
              </div>
              <span className="text-2xl  text-center  pt-10  px-10">
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
              <div className="flex items-center justify-center w-4/5 gap-5">
                <div className="flex  items-start justify-center gap-5 pt-10 mt-10">
                  <div className="flex items-center w-28  ">
                    <Image
                      className=" relativepos "
                      src="/bengal/ps.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold">
                      Problem Statement
                    </span>
                    <span className="text-2xl pt-5">
                      This project is about providing comprehensive roadside
                      assistance solutions, specializing in wheel replacement
                      services and tire repairs for all types of vehicles.
                    </span>
                  </div>
                </div>

                <div className="flex  items-start justify-center gap-5 pt-10 mt-10">
                  <div className="flex items-center w-28  ">
                    <Image
                      className=" relativepos "
                      src="/bengal/ss.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold">
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
              <div className="flex items-center  ">
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
      </div>
    </SlideFromRight>
  );
}
