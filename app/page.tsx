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

import { AnimatedText, AnimatedText2 } from './components/animatedtext';
SwiperCore.use([Navigation, Pagination]);
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});
export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLLIElement>('ul.link-list li');
    const images = document.querySelectorAll<HTMLImageElement>(
      '.background-images-wrapper .layer',
    );
    let oldImage: HTMLImageElement | null = null;

    function addListeners(el: HTMLLIElement) {
      el.addEventListener('mouseover', () => {
        const index = el.dataset.index;
        if (index) {
          changeImage(images[parseInt(index)]);
        }
      });
      el.addEventListener('mouseout', () => {
        if (oldImage) {
          gsap.to(oldImage, {
            inset: 'revert-layer',
            opacity: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.outIn',
          });
        }
        oldImage = null;
      });
    }

    function changeImage(el: HTMLImageElement) {
      if (el !== oldImage) {
        const tl = gsap.timeline();

        tl.to(oldImage, { opacity: 0, scale: 1 }).to(
          el,
          { opacity: 1, scale: 1.1, duration: 0.6, ease: 'power2.outIn' },
          '<',
        );
        oldImage = el;
      }
    }

    links.forEach((el) => addListeners(el));
  }, []);
  return (
    <div className="flex-col items-center w-full h-full lg:p-12">
      <div className="object-cover videoContainer">
        <video
          id="roundvideo"
          autoPlay
          muted
          loop
          preload="yes"
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="background-images-wrapper">
        {/* <div className="layer layer--default"></div> */}
        <div className="relative w-full h-full">
          <Image
            className="layer "
            src="/website1.jpg"
            fill
            alt="Background 1"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="layer"
            src="/website1.jpg"
            fill
            alt="Background 1"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="layer "
            src="/mobile1.jpg"
            fill
            alt="Background 1"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="w-full h-full layer"
            src="/website2.jpg"
            fill
            alt="Background 1"
          />
        </div>
        <div className="flex items-center justify-between w-11/12 ">
          <ul className="text-4xl link-list lg:text-6xl">
            <li data-index="1" id="showWebproject">
              <Link
                href="/webprojects"
                passHref
                prefetch={true}
                className={poppins.className}
              >
                <AnimatedText text="Websites" />
              </Link>
            </li>
            <li data-index="2">
              <Link
                href="/mobileapps"
                passHref
                prefetch={true}
                className={poppins.className}
              >
                <AnimatedText text="Mobile Apps" />
              </Link>
            </li>
            <li data-index="3">
              <Link
                href="/webapps"
                passHref
                prefetch={true}
                className={poppins.className}
              >
                <AnimatedText text="Web Apps" />
              </Link>
            </li>
          </ul>

          <div className="flex items-center justify-end">
            <div className="flex flex-col gap-5">
              <Image
                width={18}
                height={18}
                alt="Facebook"
                src="/svg/facebook-f.svg"
                className="cursor-pointer "
              />

              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/link.svg"
                className="h-6 cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                alt="image"
                src="/svg/instagram.svg"
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
