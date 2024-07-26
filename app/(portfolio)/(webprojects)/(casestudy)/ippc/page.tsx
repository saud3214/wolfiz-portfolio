'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Ippc() {
  useEffect(() => {});

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
      >
        <div className="bg-ippc1 bg-cover bg-center bg-no-repeat   w-full items-center justify-center flex h-[100vh]">
          <div className="grid grid-cols-12 w-full  items-center justify-center  ">
            <div className="col-span-12 w-full flex lg:flex-row flex-col  items-center justify-center">
              <div className="bg-ippc2 bg-contain bg-no-repeat bg-center xl:w-[44%] 2xl:w-[35%] lg:w-1/2 w-11/12 lg:p-20 flex flex-col items-center justify-center text-center text-white">
                <span className="lg:text-7xl text-5xl font-bold">
                  Impact Pain and Posture Clinic
                </span>
                <span className="font-medium text-2xl py-5 lg:py-0">
                  Designed To Address Chronic Pain And Enhance Your Overall
                  Well-being.
                </span>
              </div>

              <div className="flex items-center lg:w-1/ w-11/12 relative ">
                <Image
                  className=" relativepos "
                  src="/ippc/laptop1.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ippc3 bg-auto bg-right bg-no-repeat   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10  flex items-end justify-start">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc ">
                  ABOUT
                </span>
              </div>

              <span className="lg:text-5xl text-lg font-medium text-ippc_pc py-5 pe-5 capitalize ">
                We offer you our resources, know-how and motivation with A
                positive professional support to our patients. <br></br>
                <br></br> We bring effective relief to our patients by offering
                them the best treatment with the latest computerized equipment
                to treat all disorders of gait or postural imbalances and
                children assessment
              </span>
            </div>
            <div className="flex col-span-12 items-center justify-center lg:py-10">
              <div className="flex items-center lg:w-10/12  w-full relative ">
                <Image
                  className=" relativepos "
                  src="/ippc/ps.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ippc5 bg-contain bg-left-bottom bg-no-repeat   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10 flex items-end justify-start">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc ">
                  DESIGN PROCESS
                </span>
              </div>
            </div>
            <div className="flex col-span-12 items-center justify-center lg:py-10 pt-5 lg:pt-0">
              <div className="flex items-center lg:w-10/12  w-full relative ">
                <Image
                  className=" relativepos "
                  src="/ippc/dp.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ippc6 bg-auto bg-right  bg-no-repeat   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10 flex items-end justify-start">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc py-5 uppercase">
                  colors and typography
                </span>
              </div>
            </div>
            <div className="flex flex-col col-span-12 items-center justify-center py-10 gap-10 lg:mb-10">
              <div className="bg-ippc_pc2 h-36 w-[95%] rounded-3xl text-white text-5xl items-center flex font-bold ps-5">
                <span>#283E62</span>
              </div>
              <div className="bg-[#2AA7FF] h-36 w-[95%] rounded-3xl text-white text-5xl items-center flex font-bold ps-5">
                <span>#2AA7FF</span>
              </div>
              <div className="bg-[#8CB7E8] h-36 w-[95%] rounded-3xl text-white text-5xl items-center flex font-bold ps-5">
                <span>#8CB7E8s</span>
              </div>

              <div className="flex lg:flex-row flex-col w-full lg:items-end items-center justify-between">
                <div className="flex items-center  lg:w-5/12 w-full relative ">
                  <Image
                    className=" relativepos "
                    src="/ippc/aabbh.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  lg:w-5/12 w-full pt-10 lg:pt-0  relative">
                  <Image
                    className=" relativepos "
                    src="/ippc/abcbb.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="flex  lg:flex-row flex-col w-full lg:items-end items-center justify-between">
                <div className="flex items-center  lg:w-5/12 w-full relative ">
                  <Image
                    className=" relativepos "
                    src="/ippc/absm.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  lg:w-5/12 w-full  relative">
                  <Image
                    className=" relativepos "
                    src="/ippc/aam.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center lg:pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10 flex items-end justify-start">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc ">
                  WIREFRAMES
                </span>
              </div>
            </div>
            <div className="flex col-span-12 items-center justify-center py-10">
              <div className="flex items-center w-full relative ">
                <Image
                  className=" relativepos "
                  src="/ippc/wf.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="    w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center lg:pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10 flex items-end justify-start ">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc uppercase ">
                  visual design
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-ippc7 bg-cover bg-center    w-full items-center justify-center flex mt-10 lg:mt-0 ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center lg:pt-10 ">
            <div className="flex flex-col col-span-12 items-start justify-start py-10">
              <div className="flex items-center  lg:w-8/12  w-full relative">
                <Image
                  className=" relativepos "
                  src="/ippc/laptop2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex lg:flex-row flex-col w-full items-center justify-center gap-10 ">
                <div className="flex items-center  lg:w-2/5  w-11/12 relative ">
                  <Image
                    className=" relativepos "
                    src="/ippc/vd1.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
                <div className="flex items-center  lg:w-2/5  w-11/12 relative ">
                  <Image
                    className=" relativepos "
                    src="/ippc/vd2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ippc8 bg-auto bg-left-bottom bg-no-repeat   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10 flex lg:items-end items-center justify-start">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc ">
                  MOCKUPS
                </span>
              </div>
            </div>
            <div className="flex col-span-12 items-center justify-center lg:py-10">
              <div className="flex items-center  lg:w-2/3  w-11/12 relative ">
                <Image
                  className=" relativepos "
                  src="/ippc/mu.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ippc9 bg-contain bg-right-bottom bg-no-repeat   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <div className="bg-ippc4 bg-contain bg-no-repeat bg-right-top lg:p-10 flex items-end justify-start">
                <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc ">
                  TESTING
                </span>
              </div>
            </div>
            <div className="flex col-span-12 items-center justify-center lg:py-10">
              <div className="flex items-center w-11/12 relative  ">
                <Image
                  className=" relativepos "
                  src="/ippc/testing.png"
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
