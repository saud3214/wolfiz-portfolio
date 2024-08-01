'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import {
  AnimatedText2,
  AnimatedText3,
  TypewriterText,
} from '../../../../components/animatedtext';
import RevealOnScroll from '@/app/components/revealelement';

const urbanist = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Nht() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
      >
        <div className="bg-nht-bg1 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col h-[100vh] ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5  lg:w-[80%] ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center  lg:w-10/12 lg:p-10 w-full   ">
                <RevealOnScroll>
                  <Image
                    className=" relativepos csimg "
                    src="/nht/nhtlaptop1.png"
                    alt="Background 1"
                    fill
                    objectFit="contains"
                    // Ensure the image covers the container without stretching
                  />
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-nht-bg2 bg-contain bg-right bg-no-repeat   w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5  lg:w-[80%] w-11/12  ">
            <div className="flex flex-col  col-span-12 items-center justify-center  gap-3">
              <div className="flex flex-col items-center justify-center pt-10">
                <span className=" font-semibold lg:text-5xl text-3xl text-nht mb-4">
                  <AnimatedText3 text=" Project Overview" />
                </span>
                <span className="lg:w-2/5 text-center flex">
                  In Ticino we offer you state-of-the-art skin patches and
                  prostheses to forget about baldness, receding hairline and
                  thinning – without ever having to take them off, not even for
                  washing and playing sports!
                </span>
              </div>

              <div className="flex lg:flex-row flex-col items-start justify-between lg:pt-10 lg:pr-10 w-full">
                <div className="bg-nht-bg7 bg-contain bg-bottom bg-no-repeat flex flex-col h-[480px] w-full order-2 lg:order-1">
                  <span className=" font-semibold lg:text-5xl text-3xl text-nht mb-4">
                    <AnimatedText3 text="Problem Statement" />
                  </span>
                  <ul className="list-disc text-xl ps-5">
                    <li>Slow Loading Times.</li>
                    <li>Lack of User Interaction.</li>
                    <li>Poor Content Strategy. </li>
                    <li>Security Concerns.</li>
                    <li>Scalability and Performance.</li>
                  </ul>
                </div>
                <div className="flex items-center  lg:w-1/4 p-10  w-full  order-1 lg:order-2 ">
                  <RevealOnScroll>
                    <Image
                      className=" relativepos "
                      src="/nht/ps1.png"
                      alt="Background 1"
                      fill
                      objectFit="contains"
                      // Ensure the image covers the container without stretching
                    />
                  </RevealOnScroll>
                </div>
              </div>

              <div className="flex lg:items-end items-start flex-col w-full pt-5 lg:pt-0">
                <span className=" font-semibold lg:text-5xl text-3xl text-nht mb-4">
                  <AnimatedText3 text="Solution Statement" />
                </span>
                <ul className="list-disc text-xl ps-5">
                  <li>Modern Design and Responsive Layout.</li>
                  <li>Speed Optimization.</li>
                  <li>Only necessary content to be added. </li>
                  <li>Performance Monitoring and Reporting</li>
                  <li>Compliance and Data Protection.</li>
                </ul>
              </div>

              <div className="flex flex-col items-start   gap-5 w-full pt-10 lg:pt-0">
                <div className="flex items-center  w-full gap-4 lg:my-5">
                  <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-1">
                    Design Process
                  </span>
                  <div className="w-[6%] ">
                    <Image
                      className=" relativepos "
                      src="/nht/dp1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <RevealOnScroll>
                  <div className="w-full h-fit ">
                    <Image
                      className=" relativepos "
                      src="/nht/dp2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-nht-bg3 bg-contain bg-right bg-no-repeat   w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 lg:w-[80%] w-11/12 ">
            <div className="flex   col-span-12 items-center justify-center flex-col gap-3">
              <div className="flex items-center  w-full gap-4 my-5 ">
                <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-1">
                  <AnimatedText3 text="Color Theory" />
                </span>
              </div>

              <div className=" bg-nht-bg8 bg-contain bg-right bg-no-repeat flex items-start  w-full lg:h-[500px] h-[250px] lg:p-10 ">
                <span className=" font-semibold text-5xl text-nht  mb-1 ps-20 lg:ms-20">
                  Inter
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 lg:w-[80%]  w-11/12">
            <div className="flex   col-span-12 items-center justify-center flex-col gap-3">
              <div className="flex items-center  w-full gap-4 lg:my-5">
                <div className="w-full h-fit ">
                  <Image
                    className=" relativepos "
                    src="/nht/nhtcolor.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col  ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 lg:w-[80%] w-11/12 ">
            <div className="flex   col-span-12 items-center justify-center flex-col gap-3">
              <div className="flex items-center  w-full gap-4 my-5 ">
                <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-4">
                  <AnimatedText3 text="Project Timeline" />
                </span>
              </div>
              <div className=" bg-nht-bg4 bg-contain bg-left bg-no-repeat w-full flex items-center justify-center">
                <RevealOnScroll>
                  <div className="w-full lg:h-[90vh] flex items-center ">
                    <Image
                      className=" relativepos "
                      src="/nht/nhttl.png"
                      alt="Background 1"
                      fill
                      // Ensure the image covers the container without stretching
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col   ">
          <div className="flex items-center  lg:w-[80%] w-11/12 gap-4 my-5 ">
            <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-4">
              <AnimatedText3 text="Wire Frames" />
            </span>
          </div>
          <div className="  w-full flex items-center justify-center">
            <RevealOnScroll>
              <div className="w-full lg:h-[95vh] flex items-center ">
                <Image
                  className=" relativepos "
                  src="/nht/nhtwf1.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </RevealOnScroll>
          </div>

          <div className="bg-nht-bg5 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
            <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
              <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 lg:p-20">
                <RevealOnScroll>
                  <div className="w-full  flex items-center  ">
                    <Image
                      className=" relativepos "
                      src="/nht/nhtwf3.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </RevealOnScroll>
                <RevealOnScroll>
                  <div className="w-full  flex items-center lg:pt-40">
                    <Image
                      className=" relativepos "
                      src="/nht/nhtwf2.png"
                      alt="Background 1"
                      fill
                      // Ensure the image covers the container without stretching
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
        <div className="   w-full  items-center justify-center flex flex-col   ">
          <div className="flex items-center  lg:w-[80%] gap-4 my-5  w-11/12">
            <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-4">
              <AnimatedText3 text=" Virtual Design" />
            </span>
          </div>
        </div>
        <div className="bg-nht-bg6 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 ">
              <RevealOnScroll>
                <div className="w-full lg:h-[100vh] flex items-center  ">
                  <Image
                    className=" relativepos "
                    src="/nht/nhtlaptop2.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        <div className="bg-nht-bg4 bg-conain bg-left-bottom bg-no-repeat   w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 lg:p-20">
              <RevealOnScroll>
                <div className="w-full  flex items-center  ">
                  <Image
                    className=" relativepos "
                    src="/nht/nhtvd1.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="w-full  flex items-center lg:pt-40">
                  <Image
                    className=" relativepos "
                    src="/nht/nhtvd2.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col   ">
          <div className="flex items-center  lg:w-[80%] w-11/12 gap-4 my-5 ">
            <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-4">
              <AnimatedText3 text="Mock Up" />
            </span>
          </div>
        </div>
        <div className=" w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 ">
              <RevealOnScroll>
                <div className="w-11/12 lg:w-full  lg:h-[80vh] flex items-center  ">
                  <Image
                    className=" relativepos "
                    src="/nht/nhtiphone.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col   ">
          <div className="flex items-center  w-[80%] gap-4 my-5 ">
            <span className=" font-semibold lg:text-5xl text-3xl text-nht  mb-4">
              <AnimatedText3 text="Testing" />
            </span>
          </div>
        </div>
        <div className=" w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 ">
              <div className="lg:w-full  flex items-center  w-11/12 ">
                <Image
                  className=" relativepos "
                  src="/nht/testing.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
