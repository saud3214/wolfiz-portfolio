'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const urbanist = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Nht() {
  return (
    <div
      className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
    >
      <div className="bg-nht-bg1 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-3">
            <div className="flex items-center  w-10/12 p-10   ">
              <Image
                className=" relativepos "
                src="/nht/nhtlaptop1.png"
                alt="Background 1"
                fill
                objectFit="contains"
                // Ensure the image covers the container without stretching
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-nht-bg2 bg-contain bg-right bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5  ">
          <div className="flex flex-col  col-span-12 items-center justify-center  gap-3">
            <div className="flex flex-col items-center justify-center pt-10">
              <span className=" font-semibold text-5xl text-nht mb-4">
                Project Overview
              </span>
              <span className="lg:w-2/5 text-center flex">
                In Ticino we offer you state-of-the-art skin patches and
                prostheses to forget about baldness, receding hairline and
                thinning – without ever having to take them off, not even for
                washing and playing sports!
              </span>
            </div>

            <div className="flex  items-start justify-between pt-10 pr-10 w-full">
              <div className="bg-nht-bg7 bg-contain bg-bottom bg-no-repeat flex flex-col h-[480px]">
                <span className=" font-semibold text-5xl text-nht mb-4">
                  Problem Statement
                </span>
                <ul className="list-disc text-xl ps-5">
                  <li>Slow Loading Times.</li>
                  <li>Lack of User Interaction.</li>
                  <li>Poor Content Strategy. </li>
                  <li>Security Concerns.</li>
                  <li>Scalability and Performance.</li>
                </ul>
              </div>
              <div className="flex items-center  w-1/4 p-10   ">
                <Image
                  className=" relativepos "
                  src="/nht/ps1.png"
                  alt="Background 1"
                  fill
                  objectFit="contains"
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>

            <div className="flex items-end flex-col w-full">
              <span className=" font-semibold text-5xl text-nht mb-4">
                Solution Statement
              </span>
              <ul className="list-disc text-xl ps-5">
                <li>Modern Design and Responsive Layout.</li>
                <li>Speed Optimization.</li>
                <li>Only necessary content to be added. </li>
                <li>Performance Monitoring and Reporting</li>
                <li>Compliance and Data Protection.</li>
              </ul>
            </div>

            <div className="flex flex-col items-start   gap-5 w-full">
              <div className="flex items-center  w-full gap-4 my-5">
                <span className=" font-semibold text-5xl text-nht  mb-1">
                  Design Process
                </span>
                <div className="w-[6%] h-fit ">
                  <Image
                    className=" relativepos "
                    src="/nht/dp1.png"
                    alt="Background 1"
                    fill
                    // Ensure the image covers the container without stretching
                  />
                </div>
              </div>
              <div className="w-full h-fit ">
                <Image
                  className=" relativepos "
                  src="/nht/dp2.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-nht-bg3 bg-contain bg-right bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 w-[80%] ">
          <div className="flex   col-span-12 items-center justify-center flex-col gap-3">
            <div className="flex items-center  w-full gap-4 my-5 ">
              <span className=" font-semibold text-5xl text-nht  mb-1">
                Color Theory
              </span>
            </div>

            <div className=" bg-nht-bg8 bg-contain bg-right bg-no-repeat flex items-start  w-full h-[500px] p-10 ">
              <span className=" font-semibold text-5xl text-nht  mb-1 ps-20 ms-20">
                Inter
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 w-[80%] ">
          <div className="flex   col-span-12 items-center justify-center flex-col gap-3">
            <div className="flex items-center  w-full gap-4 my-5">
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
        <div className=" grid grid-cols-12 items-start justify-center mb-5 w-[80%] ">
          <div className="flex   col-span-12 items-center justify-center flex-col gap-3">
            <div className="flex items-center  w-full gap-4 my-5 ">
              <span className=" font-semibold text-5xl text-nht  mb-4">
                Project Timeline
              </span>
            </div>
            <div className=" bg-nht-bg4 bg-contain bg-left bg-no-repeat w-full flex items-center justify-center">
              <div className="w-full h-[90vh] flex items-center ">
                <Image
                  className=" relativepos "
                  src="/nht/nhttl.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="   w-full  items-center justify-center flex flex-col   ">
        <div className="flex items-center  w-[80%] gap-4 my-5 ">
          <span className=" font-semibold text-5xl text-nht  mb-4">
            Wire Frames
          </span>
        </div>
        <div className="  w-full flex items-center justify-center">
          <div className="w-full h-[95vh] flex items-center ">
            <Image
              className=" relativepos "
              src="/nht/nhtwf1.png"
              alt="Background 1"
              fill
              // Ensure the image covers the container without stretching
            />
          </div>
        </div>

        <div className="bg-nht-bg5 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
          <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 p-20">
              <div className="w-full  flex items-center  ">
                <Image
                  className=" relativepos "
                  src="/nht/nhtwf3.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
              <div className="w-full  flex items-center pt-40">
                <Image
                  className=" relativepos "
                  src="/nht/nhtwf2.png"
                  alt="Background 1"
                  fill
                  // Ensure the image covers the container without stretching
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="   w-full  items-center justify-center flex flex-col   ">
        <div className="flex items-center  w-[80%] gap-4 my-5 ">
          <span className=" font-semibold text-5xl text-nht  mb-4">
            Virtual Design
          </span>
        </div>
      </div>
      <div className="bg-nht-bg6 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 ">
            <div className="w-full h-[100vh] flex items-center  ">
              <Image
                className=" relativepos "
                src="/nht/nhtlaptop2.png"
                alt="Background 1"
                fill
                // Ensure the image covers the container without stretching
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-nht-bg4 bg-conain bg-left-bottom bg-no-repeat   w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 p-20">
            <div className="w-full  flex items-center  ">
              <Image
                className=" relativepos "
                src="/nht/nhtvd1.png"
                alt="Background 1"
                fill
                // Ensure the image covers the container without stretching
              />
            </div>
            <div className="w-full  flex items-center pt-40">
              <Image
                className=" relativepos "
                src="/nht/nhtvd2.png"
                alt="Background 1"
                fill
                // Ensure the image covers the container without stretching
              />
            </div>
          </div>
        </div>
      </div>

      <div className="   w-full  items-center justify-center flex flex-col   ">
        <div className="flex items-center  w-[80%] gap-4 my-5 ">
          <span className=" font-semibold text-5xl text-nht  mb-4">
            Mock Up
          </span>
        </div>
      </div>
      <div className=" w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 ">
            <div className="w-full h-[80vh] flex items-center  ">
              <Image
                className=" relativepos "
                src="/nht/nhtiphone.png"
                alt="Background 1"
                fill
                // Ensure the image covers the container without stretching
              />
            </div>
          </div>
        </div>
      </div>

      <div className="   w-full  items-center justify-center flex flex-col   ">
        <div className="flex items-center  w-[80%] gap-4 my-5 ">
          <span className=" font-semibold text-5xl text-nht  mb-4">
            Testing
          </span>
        </div>
      </div>
      <div className=" w-full  items-center justify-center flex flex-col ">
        <div className=" grid grid-cols-12 items-start justify-center mb-5 ">
          <div className="flex  col-span-12 items-center justify-center flex-col  md:flex-row gap-5 ">
            <div className="w-full  flex items-center  ">
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
  );
}
