'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';

import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Pagination, Mousewheel, EffectFade } from 'swiper/modules';
SwiperCore.use([Mousewheel, Pagination, EffectFade]);

export default function Webprojects() {
  useEffect(() => {
    gsap.from('.my-element', { duration: 1, opacity: 1, y: -50 });
  }, []);
  return (
    <div className="  h-full w-full flex-col items-center p-6 ">
      <div className="h-full w-full  ">
        <Swiper
          direction="vertical"
          mousewheel={true}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          effect="fade"
          speed={1000}
          className=" w-full h-full items-center p-2 slideclas "
        >
          <SwiperSlide className=" border border-red-400 slideclas bg-lime-200  text-2xl font-bold">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className=" border border-red-400 slideclas  bg-green-200 text-2xl font-bold">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className=" border border-red-400 slideclas bg-pink-200 text-2xl font-bold">
            Slide 3
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
