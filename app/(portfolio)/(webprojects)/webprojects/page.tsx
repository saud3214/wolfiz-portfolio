'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { animateImageContainer, backgroundimages } from './animation';
import { Archivo } from 'next/font/google';

import { Mousewheel, EffectFade } from 'swiper/modules';
SwiperCore.use([Mousewheel, EffectFade]);

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});
export default function Webprojects() {
  useEffect(() => {
    animateImageContainer();
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
    <div className="  h-full w-full flex items-center  ">
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
        <SwiperSlide className="swiper-slide  flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E6F8FA] via-[#7cd9e3] to-[#22CADB]">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem] text-5xl ">
                    Rockzfx
                  </text>
                </div>
                <span className="text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                  In Ticino we offer you state-of-the-art skin patches and
                  prostheses to forget about baldness, receding hairline and
                  thinning.
                </span>
                <Link href={'/rockzfx'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
                </Link>
                <div className="h-[10vh]"></div>
                <div className=" relative border-4 rounded-sm border-[#7cd9e3] h-[24vh]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh]"
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]"
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
              <div className="h-full grid items-center">
                <div className="bg-center bg-contains bg-no-repeat bg-cover imgcontainer h-[65vh] bg-rzfx-card  cursor-pointer   shadow-xl"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#2FEDCB] via-[#00A081] to-[#006360] flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white  2xl:text-[6.4rem] xl:text-[4.5rem]  text-5xl">
                    NHT
                  </text>
                </div>
                <div className={archivo.className}>
                  <span className="  text-xl w-2/3 text-left overflow-hidden text-white h-[85px]">
                    In Ticino we offer you state-of-the-art skin patches and
                    prostheses to forget about baldness, receding hairline and
                    thinning – without ever having to take them off, not even
                    for washing and playing sports!
                  </span>
                </div>
                <Link href={'/nht'} className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
                </Link>
                <div className="h-[10vh]"></div>
                <div className=" relative border-4 rounded-sm border-[#00A081] h-[24vh]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh]"
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh]"
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
              <div className="h-full grid items-center">
                <div className="bg-center bg-contains bg-cover bg-no-repeat imgcontainer h-[65vh] bg-nht-card shadow-2xl drop-shadow-2xl ">
                  {/* <div className="border-[40px] border-[#2FEDCB] w-full h-full imgcontainer2 "></div> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide lpgrad flex items-center justify-center">
          <div className="slide-inner grid grid-cols-12    ">
            <div className="lg:col-span-5 col-span-12 protitle h-full order-2 lg:order-1 flex">
              <div className="titlendis flex flex-col items-start">
                <div className="titledisplay">
                  <text className="target-text text-left text-white   2xl:text-[5.4rem] xl:text-[4.5rem]  text-5xl contents ">
                    LeadsPeddlers
                  </text>
                </div>
                <span className="text-xl 2xl:w-2/3 xl:w-3/4   text-left overflow-hidden text-white h-[85px]">
                  In Ticino we offer you state-of-the-art skin patches and
                  prostheses to forget about baldness, receding hairline and
                  thinning.
                </span>
                <div className="mt-8 ">
                  <button className="button arrow">Open Case Study</button>
                </div>
                <div className="h-[10vh]"></div>
                <div className=" relative border-4 rounded-sm border-[#df5745] h-[24vh]">
                  <div
                    id="videoDiv"
                    className="video-container flex flex-col h-[24vh] rounded-sm"
                  >
                    <video
                      id="roundvideo"
                      autoPlay
                      muted
                      loop
                      preload="yes"
                      playsInline
                      className="h-[23.3vh] rounded-sm"
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
                <div className="bg-center bg-contains bg-no-repeat bg-cover imgcontainer h-[65vh] bg-lp-card  cursor-pointer"></div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
