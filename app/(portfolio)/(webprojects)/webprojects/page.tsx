'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Pagination, Mousewheel, EffectFade } from 'swiper/modules';
SwiperCore.use([Mousewheel, Pagination, EffectFade]);

export default function Webprojects() {
  return (
    <div className="  h-full w-full flex items-center ">
      <Swiper
        loop={true}
        direction="vertical"
        mousewheel={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
        speed={500}
        className=" w-full h-full items-center  slideclas swiper-container "
      >
        <SwiperSlide className="swiper-slide bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#006360] via-[#00A081] to-[#2FEDCB] flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12 w-[90%]   ">
            <div className="col-span-5 protitle h-full flex items-center">
              <div className="titlendis flex flex-col items-start mt-10 pt-5">
                <div className="titledisplay">
                  <a href="#" id="target">
                    <span className="target-text text-left text-white">
                      NHT
                    </span>
                  </a>
                </div>
                <span className="text-xl text-left text-white">
                  In Ticino we offer you state-of-the-art skin patches and
                  prostheses to forget about baldness, receding hairline and
                  thinning – without ever having to take them off, not even for
                  washing and playing sports!
                </span>
                <div className="mt-5 bg-gradient-to-r from-slate-500 to-red-500">
                  <button className="button arrow">Open Case Study</button>
                </div>
                <div className="w-3/4 relative mt-5">
                  <div id="videoDiv" className="video-container flex flex-col">
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
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
            <div className="col-span-7 relative">
              <Link href="/nht">
                <div className="bg-center bg-cover imgcontainer h-[600px] bg-nht-card  cursor-pointer"></div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" border border-red-400 slideclas  bg-green-200 text-2xl font-bold">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className=" border border-red-400 slideclas bg-pink-200 text-2xl font-bold">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
