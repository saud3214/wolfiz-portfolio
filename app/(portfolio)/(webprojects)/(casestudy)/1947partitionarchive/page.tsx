'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Roboto, Libre_Caslon_Text } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Mousewheel, EffectFade, Autoplay } from 'swiper/modules';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import AnimatedCardsKC from '@/app/components/animatedbeam';
import ExpandingCards from '@/app/components/cardsKC';
import useSmoothScroll from '@/app/components/ss';
import AvatarCircles from '@/components/ui/avatar-circles';
import { SrLeft, SrRight, SrBottom } from '@/app/components/revealelement';
import { AnimatedText2 } from '@/app/components/animatedtext';
import ImageStack from '@/app/components/imagecards';
import PopupScrollExample from '@/app/components/paImages';
const urbanist = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
const lcs = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
});
SwiperCore.use([Mousewheel, EffectFade, Autoplay]);

export default function PartitionArchive() {
  useSmoothScroll();
  useEffect(() => {}, []);

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} `}
      >
        <div className="flex items-center justify-center w-full ">
          <div className=" grid grid-cols-12 items-center justify-center   w-full  max-w-[1920px] ">
            <div className="flex flex-col items-center justify-center  col-span-12 ">
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative h-screen w-full overflow-hidden">
                  {/* Background Video */}
                  <video
                    className="absolute top-0 left-0 h-full w-full object-cover"
                    src="/website/1947pa/video.mp4"
                    autoPlay
                    muted
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="absolute top-[5%] w-[10%] ">
                      <Image
                        className="relativepos object-cover"
                        src="/website/1947pa/logo.png"
                        alt="img"
                        fill
                      />
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <h1
                        className={`text-[6vw] font-bold leading-none  ${lcs.className} `}
                      >
                        Parti
                      </h1>
                      <h1
                        className={`text-[6vw] font-bold leading-none  ${lcs.className} `}
                      >
                        tioned
                      </h1>
                    </div>

                    <span className="text-3xl font-bold">
                      A Journey Through the 1947 Partition Archive
                    </span>
                  </div>
                  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                </div>
              </div>
              <div className="w-full items-start justify-center flex bg-pabg1 bg-center bg-cover bg-no-repeat h-[100vh] py-10 ">
                <div className=" grid grid-cols-12 w-11/12 items-start justify-start gap-10">
                  <div className="col-span-12 text-start flex flex-col ">
                    <span className="text-[5vw] leading-none font-bold mt-5">
                      Showcase Hub
                    </span>
                    <span className="text-2xl font-bold mt-3">
                      Unearthing personal stories of loss, hope, and survival,
                      this archive weaves together the lived experiences of
                      millions displaced by the Partition. A collection of
                      first-hand accounts from those who lived through the
                      tumultuous Partition, capturing memories.
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    <div className="relative w-3/4">
                      <Image
                        className="relativepos"
                        src="/website/1947pa/c1.png"
                        alt="img"
                        fill
                      />
                    </div>
                    {/* <div className="absolute  z-10  w-full h-full  top-0 left-0">
                      <Image
                        className="relativepos"
                        src="/website/1947pa/c1.png"
                        alt="img"
                        fill
                      />
                    </div> */}
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    <div className="relative w-3/4">
                      <Image
                        className="relativepos"
                        src="/website/1947pa/c1.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    <div className="relative w-3/4">
                      <Image
                        className="relativepos"
                        src="/website/1947pa/c1.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex items-center justify-center">
                    <div className="relative w-full">
                      <Image
                        className="relativepos "
                        src="/website/1947pa/sm.png"
                        alt="img"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex items-center justify-center">
                    <div className="flex items-center justify-center h-screen">
                      <PopupScrollExample />
                    </div>
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
