'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Nht() {
  return (
    <div
      className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
    >
      <div className="bg-rzfx-bg1 bg-cover bg-center bg-no-repeat   w-full items-center justify-center flex">
        <div className="grid grid-cols-12 w-full  items-center justify-center ">
          <div className="col-span-3  items-center flex justify-center h-full w-full ps-10">
            <div className=" items-start flex justify-center  w-[80%]  flex-col ps-5  gap-11">
              <span className="text-6xl font-semibold">Rockzfx</span>
              <span className="text-5xl font-medium">
                Forex Trading <br /> Website
              </span>
              <span className="text-4xl font-medium">UI Case Study</span>
              <div className="items-start flex   w-full  gap-5 justify-center">
                <span className="text-3xl font-medium mr-10">Tool’s Used</span>
                <div className="flex gap-4">
                  <Image
                    width={50}
                    height={50}
                    alt="image"
                    src="/csimages/adobe.png"
                    className=""
                  />
                  <Image
                    width={50}
                    height={50}
                    alt="image"
                    src="/csimages/figma.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 w-full h-[90%] items-center justify-center flex  mt-5">
            <Image
              className="relativepos "
              src="/csimages/rzfxbg2.png"
              alt="Background 1"
              layout="fill"
              objectFit="contains" // Ensure the image covers the container without stretching
            />
          </div>
        </div>
      </div>
      <div className="bg-rzfx-bg3 bg-cover bg-center bg-no-repeat   w-full  items-center justify-center flex ">
        <div className="grid grid-cols-12 w-full ">
          <div className="col-span-6 flex items-start justify-center w-full  ">
            <div className="flex items-start  ps-3 w-[80%] flex-col">
              <div className="flex flex-col">
                <span className="text-[150px] text-[#D9D8D3]">01</span>
                <span className="text-6xl text-[#22CADB] font-semibold">
                  About Project
                </span>
                <div className="h-1 w-44 border-2 my-3 border-[#22CADB]"></div>
                <span className="text-2xl my-5">
                  A young family man, stuck in the rat race, earned a good
                  salary but still found myself in debt. I decided to change
                  things around. I dabbled in online blogging, multi level
                  marketing, online gambling and buying a selling cars. I done
                  well but it was not something I enjoyed doing all of the time.
                  My time was owned and I wanted to own my time.I found trading
                  at 24 when a friend introduced hyper scalping to me. We used
                  indicators to trade the 1 minute timeframe and would on
                  average catch 3- 10 pips at a time. The adrenaline rush was
                  unex plainable. But it eventually led to blown accounts due to
                  greed.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[150px] text-[#D9D8D3]">02</span>
                <span className="text-6xl text-[#22CADB] font-semibold">
                  Objectives & Goals
                </span>
                <div className="h-1 w-44 border-2 my-3 border-[#22CADB]"></div>
                <div className="flex gap-5">
                  <span className="text-2xl my-5 ps-10">
                    <ul className="list-disc">
                      <li> Access to Market Data</li>
                      <li> Trading Tools and Features</li>
                      <li>Security and Reliability</li>
                      <li> Compliance and Transparency</li>
                      <li> User-Friendly Interface</li>
                    </ul>
                  </span>
                  <span className="text-2xl my-5 ps-10">
                    <ul className="list-disc">
                      <li> Access to Market Data</li>
                      <li> Trading Tools and Features</li>
                      <li>Security and Reliability</li>
                      <li> Compliance and Transparency</li>
                      <li> User-Friendly Interface</li>
                    </ul>
                  </span>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 w-full  items-center justify-end flex  mt-5">
            <Image
              className="relativepos w-[70%] "
              src="/csimages/rzfxmobiles.png"
              alt="Background 1"
              width={5000}
              height={5000}
              // Ensure the image covers the container without stretching
            />
          </div>
        </div>
      </div>
    </div>
  );
}
