'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  useEffect(() => {
    gsap.from('.my-element', { duration: 1, opacity: 1, y: -50 });
  }, []);
  return (
    <div className="  h-full w-full flex-col items-center p-12 ">
      <div className="background-images-wrapper">
        <div className="layer layer--default"></div>
        <Image
          alt="image"
          className="layer"
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1626427223333-183395267453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
        />
        <Image
          width={100}
          height={100}
          alt="image"
          className="layer"
          src="https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
        <Image
          width={100}
          height={100}
          alt="image"
          className="layer"
          src="https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        <Image
          width={100}
          height={100}
          alt="image"
          className="layer"
          src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
        />

        <div className="flex w-11/12 items-center justify-between">
          <ul className="link-list">
            <li data-index="1" id="showWebproject">
              <Link href="/webprojects" passHref prefetch={true}>
                <span>Web Apps</span>
              </Link>
            </li>
            <li data-index="2">
              <a href="#" rel="preload">
                Mobile Apps
              </a>
            </li>
            <li data-index="3">
              <a href="#" rel="preload">
                Websites
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-end">
            <div className="flex flex-col gap-5">
              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/facebook-f.svg"
                className=" cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/google.svg"
                className="h-6 cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/tiktok.svg"
                className="h-6 cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/twitter.svg"
                className="h-6 cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/twitter.svg"
                className="h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <SpeedInsights />
    </div>
  );
}
