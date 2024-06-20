'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { animateImageContainer } from './animation';

import { Pagination, Mousewheel, EffectFade } from 'swiper/modules';
SwiperCore.use([Mousewheel, Pagination, EffectFade]);

export default function Webprojects() {
  useEffect(() => {
    animateImageContainer();
  }, []);

  return (
    <div className="  h-full w-full flex items-center ">
      <Swiper
        loop={true}
        direction="vertical"
        mousewheel={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={true}
        effect="fade"
        speed={1000}
        className=" w-full h-full items-center  slideclas swiper-container "
      >
        <SwiperSlide className="swiper-slide bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#2FEDCB] via-[#00A081] to-[#006360] flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white text-[14vh]">
                    NHT
                  </text>
                </div>
                <span className="text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                  In Ticino we offer you state-of-the-art skin patches and
                  prostheses to forget about baldness, receding hairline and
                  thinning – without ever having to take them off, not even for
                  washing and playing sports!
                </span>
                <div className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
                </div>
                <div className="h-[15vh]"></div>
                <div className="w-[46%] relative border-4 rounded-sm border-[#00A081] h-[21vh]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[21vh]"
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[20vh]"
                    >
                      <source
                        src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <Link href="/nht" className="h-full grid items-center">
                <div className="bg-center bg-contains bg-no-repeat imgcontainer h-[65vh] bg-nht-card  cursor-pointer">
                  {/* <div className="border-[40px] border-[#2FEDCB] w-full h-full imgcontainer2 "></div> */}
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide lpgrad flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white text-[11vh]">
                    Leads Peddlers
                  </text>
                </div>
                <span className="text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                  In Ticino we offer you state-of-the-art skin patches and
                  prostheses to forget about baldness, receding hairline and
                  thinning.
                </span>
                <div className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
                </div>
                <div className="h-[15vh]"></div>
                <div className="w-[46%] relative border-4 rounded-sm border-[#00A081] h-[21vh]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[21vh]"
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[20vh]"
                    >
                      <source
                        src="https://www.shutterstock.com/shutterstock/videos/1106877901/preview/stock-footage-super-slow-motion-of-piste-skier-running-down-sunny-day-austria-alps-europe-filmed-on-high.webm"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7  col-span-12 relative order-1 lg:order-2 h-full  ">
              <Link href="/nht" className="h-full grid items-center">
                <div className="bg-center bg-contains bg-no-repeat imgcontainer h-[65vh] bg-lp-card  cursor-pointer">
                  {/* <div className="border-[40px] border-[#2FEDCB] w-full h-full imgcontainer2 "></div> */}
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
