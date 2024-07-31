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
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
