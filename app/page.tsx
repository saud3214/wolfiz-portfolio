'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';

import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  useEffect(() => {
    gsap.from('.my-element', { duration: 1, opacity: 0, y: -50 });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </main>
  );
}
