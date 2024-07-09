'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { PageTransition } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Scantifix() {
  useEffect(() => {
    csimages();
  });

  return (
    <PageTransition>
      <div
        className={` w-full items-center justify-center flex flex-col    ${urbanist.className} `}
      >
        <div className=" bg-sf1 bg-cover bg-center bg-no-repeat  w-full  items-center justify-center flex flex-col  h-[100vh] ">
          <div className=" grid grid-cols-12 items-start justify-center  py-10   ">
            <div className="flex  col-span-5 items-center justify-end flex-col   gap-3 w-full h-full ">
              <div className="flex flex-col w-1/2 items-start justify-start gap-4">
                <div className="flex items-center justify-center gap-2  ">
                  <Image
                    className=" relativepos  "
                    src="/scantifix/logo.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                  <span className="gradient-text font-semibold text-5xl">
                    Scantifix
                  </span>
                </div>
                <span className=" text-gray-400">Visit Store</span>
                <span className="gradient-text2 font-bold text-4xl">
                  Case Study
                </span>
              </div>
            </div>
            <div className="flex  col-span-7 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center      ">
                <Image
                  className=" relativepos  "
                  src="/scantifix/laptop1.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="   w-full  items-center justify-center flex flex-col bg-sf2 bg-contain bg-left-top bg-no-repeat   ">
          <div className=" grid grid-cols-12 items-start justify-center w-[90%]  py-10  ">
            <div className="flex  col-span-6 items-start  flex-col   gap-10  h-full ">
              <div className="flex flex-col items-start justify-start gap-4 py-10 h-1/2">
                <div className="flex items-start justify-start  flex-col   t ">
                  <span className=" font-bold text-9xl gradient-text3">01</span>
                  <span className="font-bold text-6xl text-[#2D2D2D]">
                    About Project
                  </span>
                </div>
                <span className=" text-gray-400 lg:pr-20">
                  Youll discover the BARE minimum of preservatives, if any at
                  all. Our products are suitable even for the most chemically
                  sensitive individuals. Were dedicated to revolutionizing
                  cosmetics through cutting-edge technology and forward-thinking
                  R&D, coupled with third-party testing.
                </span>
              </div>

              <div className="flex flex-col items-start justify-start gap-4 py-10">
                <div className="flex items-center justify-center gap-2  ">
                  <div className="flex items-start justify-start  flex-col   t ">
                    <span className=" font-bold text-9xl gradient-text3">
                      02
                    </span>
                    <span className="font-bold text-6xl text-[#2D2D2D] flex items-center justify-center gap-1">
                      <div className="h-10 w-1 bg-pink-300"></div>
                      Objective & Goals
                    </span>
                  </div>
                </div>
                <span className=" text-gray-400 flex gap-5 ">
                  <ul className="list-disc text-xl ps-5">
                    <li>Access to Market Data</li>
                    <li>Trading Tools and Features</li>
                    <li>Security and Reliability</li>
                    <li>Compliance and Transparency</li>
                    <li>User-Friendly Interface.</li>
                  </ul>
                  <ul className="list-disc text-xl ps-5">
                    <li>Access to Market Data</li>
                    <li>Trading Tools and Features</li>
                    <li>Security and Reliability</li>
                    <li>Compliance and Transparency</li>
                    <li>User-Friendly Interface.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="flex  col-span-6 items-center justify-center flex-col  md:flex-row gap-3">
              <div className="flex  items-center    w-10/12   ">
                <Image
                  className=" relativepos  "
                  src="/scantifix/iphone.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
