'use client';

import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import ShaderBackground from '@/app/components/shadderplain';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';
import { Mousewheel, EffectFade } from 'swiper/modules';
import ImageGallery from '@/app/components/hoverImage';
import gsap from 'gsap';
import SwiperCore from 'swiper';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GradualSpacing from '@/components/magicui/gradual-spacing';
// Slide content with color and speed settings
const slides = [
  {
    title: 'website development',
    agency: 'OVERPX',
    year: '2023',
    description:
      'A dynamic website experience crafted to elevate your brand’s online presence and deliver impactful user interactions.',
    decorativeImage: '/img/wd.webp',
    color1: '#FAE8DF', // Background color 1
    color2: '#EF858B', // Background color 2
    speed: 0.7, // Speed of the shader animation
    link: '/webprojects',
  },
  {
    title: 'mobile applications',
    agency: 'DESIGNCO',
    year: '2024',
    description:
      'mobile application solution designed to enhance user engagement and drive seamless connectivity across devices.',
    decorativeImage: '/img/mad2.webp',
    color1: '#dffafd73', // Background color 1
    color2: '#37e6fa80', // Background color 2
    speed: 0.7, // Speed of the shader animation
    link: '/mobileapps',
  },
  {
    title: 'web applications',
    agency: 'TECHPRO',
    year: '2023',
    description:
      'web application services empowering businesses with digital solutions for optimized performance and growth.',
    decorativeImage: '/img/wad2.webp',
    color1: '#FAEDE4', // Background color 1
    color2: '#ffbe5c80', // Background color 2
    speed: 0.7, // Speed of the shader animation
    link: '/webapps',
  },
];
const images = [
  [
    '/img/w1.png',
    '/img/w2.jpg',
    '/img/w3.png',
    '/img/w4.png',
    '/img/w5.png',
    '/img/w6.jpg',
    '/img/w6.png',
    '/img/w7.jpg',
    '/img/w9.jpg',
    '/img/w9.png',
  ],
  [
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
    '/img/4.jpg',
    '/img/5.png',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/7.png',
    '/img/8.jpg',
    '/img/9.png',
    '/img/10.jpg',
  ],
  [
    '/img/a1.jpg',
    '/img/a2.jpg',
    '/img/a3.jpg',
    '/img/a4.png',
    '/img/a5.jpg',
    '/img/a6.png',
    '/img/a10.png',
    '/img/a11.png',
  ],
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [trailImages, setTrailImages] = useState(images[0]);

  const [shaderSettings, setShaderSettings] = useState({
    color1: slides[0].color1,
    color2: slides[0].color2,
    speed: slides[0].speed,
  });
  const [currentTime, setCurrentTime] = useState('');
  const swiperRef = useRef<SwiperCore | null>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Karachi',
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  // Function to handle slide change and update shader settings
  const handleSlideChange = (swiper: any) => {
    const newSlideIndex = swiper.realIndex;
    setCurrentSlide(newSlideIndex);
    setTrailImages(images[newSlideIndex]);

    setShaderSettings({
      color1: slides[newSlideIndex].color1,
      color2: slides[newSlideIndex].color2,
      speed: slides[newSlideIndex].speed,
    });

    // Trigger a transition animation on the counter
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { y: 20 },
        { y: 0, duration: 1, ease: 'power2.out' },
      );
    }
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      style={{ fontFamily: 'Safiro, sans-serif' }}
    >
      <div className="absolute w-full h-full -z-10 hidden md:block">
        <ImageGallery images={trailImages} />
      </div>
      {/* Fullscreen Shader Background */}
      <Canvas
        className="absolute top-0 left-0 w-full h-full -z-20"
        style={{ position: 'absolute' }}
      >
        <ShaderBackground
          color1={shaderSettings.color1}
          color2={shaderSettings.color2}
          speed={shaderSettings.speed}
        />
      </Canvas>

      {/* Slide Content with Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        direction="vertical"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true} // Enable continuous looping of slides
        modules={[Mousewheel, EffectFade]}
        mousewheel={{
          sensitivity: 0.3,
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        speed={1000}
        onSlideChange={handleSlideChange}
        className="relative z-10 w-full h-full items-center justify-center flex"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-full h-full flex-col"
            style={{
              display: 'flex',
            }}
          >
            <div className="relative z-20 w-[95%] h-screen flex flex-col justify-between py-[1%]">
              {/* Header */}
              <header className="lg:p-[1%] p-[2%] flex justify-between items-center text-neutral-800 no-image-zone">
                <div className="flex gap-2 text-base font-semibold w-1/2 items-center">
                  <Link href="/">WOLFIZ</Link>

                  <div className="text-sm ml-[8%] text-[#575757] font-light lg:block hidden">
                    UDINE, {currentTime} PST
                  </div>
                </div>
                <div className="flex gap-3 lg:text-sm text-xs items-center">
                  <a href="#about" className="hover:opacity-70">
                    ABOUT
                  </a>
                </div>
              </header>

              {/* Main Slide Content */}
              <div className="flex-1 px-6 flex flex-col justify-center xl:mb-40 mb-20 ">
                <div className="max-w-6xl mx-auto 2xl:gap-12 xl:gap-10 gap-5 flex flex-col  no-image-zone">
                  <motion.h1
                    key={currentSlide} // This ensures each change re-renders the motion.div to animate it
                    // initial={{ y: 20, opacity: 0 }} // Start from below with zero opacity
                    // animate={{ y: 0, opacity: 1 }} // Move up to its original position with full opacity
                    // exit={{ y: -20, opacity: 0 }} // Exit animation (for smoother effect when switching slides)
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="lg:text-[5vw] text-5xl leading-none font-light italic text-neutral-800 cursor-pointer text-center min-h-28 "
                  >
                    {/* <GradualSpacing
                      text={slide.title}
                      className="hidden lg:block "
                    /> */}
                    <span className=" block">{slide.title} </span>
                  </motion.h1>

                  <div className="flex flex-col items-start lg:gap-6 gap-4 text-[#575757] w-full  ">
                    <div className="lg:flex hidden gap-4 text-sm w-full items-center justify-center">
                      <span>AGENCY. {slides[currentSlide].agency}</span>
                      <span>YEAR. {slides[currentSlide].year}</span>
                    </div>
                    <div className="flex lg:hidden gap-2 text-sm w-full items-center justify-center">
                      <span>{slides[currentSlide].agency}</span>
                      <span>/</span>
                      <span>{slides[currentSlide].year}</span>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center justify-center gap-3 lg:gap-0">
                      <p className="max-w-md xl:text-lg text-base text-[#575757]">
                        {slides[currentSlide].description}
                      </p>
                      <Link
                        href={slides[currentSlide].link}
                        className="group flex text-sm items-center gap-2 px-4 py-2 rounded-xl border border-neutral-800 transition-colors h-fit"
                      >
                        VISIT
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="fixed lg:bottom-[4%] bottom-[8%] right-[3%]  lg:w-[14vw] w-[36vw] aspect-square rounded-full overflow-hidden no-image-zone">
                <Link href={slides[currentSlide].link}>
                  <Image
                    src={slide.decorativeImage}
                    alt={`Decorative image for ${slide.title}`}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  />
                </Link>
              </div>
              <div className="fixed left-[4%] lg:top-[37%] top-[10%] no-image-zone">
                <span className="  text-xs  text-[#575757] ">
                  portfolio 2024
                </span>
              </div>
              <div className="fixed right-[4%] lg:top-[37%]  top-[10%] no-image-zone">
                <span className="  text-xs  text-[#575757] ">scroll</span>
              </div>

              {/* Project Counter with Navigation Arrows */}
              <div className="fixed left-[4%] lg:bottom-[4%] bottom-[8%]  no-image-zone">
                <div className="relative lg:w-[14vw] w-[36vw] aspect-square">
                  <div className="absolute inset-0 rounded-full border border-neutral-600">
                    {/* Top Text */}
                    <div className="absolute top-[4%] left-1/2 -translate-x-1/2 2xl:text-sm text-xs  text-[#575757]">
                      PROJECT
                    </div>

                    {/* Numbers Container */}
                    <div className="absolute inset-0 flex items-center justify-center ">
                      <div className="relative 2xl:text-[4vw]  lg:text-5xl text-3xl font-light w-full">
                        {/* Diagonal Line */}
                        {/* Numbers */}
                        <span className="absolute bottom-3 left-[40%] ">3</span>
                        <div className="absolute top-1/2 left-1/2 w-10/12 h-[1px] bg-neutral-500 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>

                        <span
                          ref={counterRef}
                          className="absolute top-4 left-[40%]"
                        >
                          {currentSlide + 1}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 2xl:text-sm text-xs  text-[#575757]">
                      NUMBER
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-70"
                      aria-label="Previous slide"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
                      aria-label="Next slide"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
