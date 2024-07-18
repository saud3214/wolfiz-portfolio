'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Ippc() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
      >
        <div className="bg-ippc1 bg-cover bg-center bg-no-repeat   w-full items-center justify-center flex h-[100vh]">
          <div className="grid grid-cols-12 w-full  items-center justify-center  ">
            <div className="col-span-12 w-full flex  items-center justify-center">
              <div className="bg-ippc2 bg-contain bg-no-repeat bg-center xl:w-[44%] 2xl:w-[35%] w-1/2 lg:p-20 flex flex-col items-center justify-center text-center text-white">
                <span className="text-7xl font-bold">
                  Impact Pain and Posture Clinic
                </span>
                <span className="font-medium text-2xl">
                  Designed To Address Chronic Pain And Enhance Your Overall
                  Well-being.
                </span>
              </div>

              <div className="flex items-center w-1/2 ">
                <Image
                  className=" relativepos "
                  src="/ippc/laptop1.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ippc3 bg-contain bg-right bg-no-repeat   w-full items-center justify-center flex ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center pt-10 ">
            <div className="col-span-12 w-full flex flex-col  items-start ">
              <span className="lg:text-7xl text-3xl font-semibold text-ippc_pc py-5">
                ABOUT
              </span>

              <span className="lg:text-5xl text-lg font-medium text-ippc_pc py-5 pe-5 capitalize ">
                We offer you our resources, know-how and motivation with A
                positive professional support to our patients. <br></br>
                <br></br> We bring effective relief to our patients by offering
                them the best treatment with the latest computerized equipment
                to treat all disorders of gait or postural imbalances and
                children assessment
              </span>
            </div>
            <div className="flex items-center justify-center col-span-12 py-10">
              <div className="flex  bg-blue-950 rounded-tr-[50px] p-56 rounded-bl-[50px] ">
                <div className="flex border-white border-4  rounded-tr-[50px]   rounded-bl-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
