'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import ShaderBackground from '@/app/components/shadderplain';
import Image from 'next/image';

const Home = () => {
  const projects = [
    {
      name: 'aqua wave',
      year: '2023',
      number: '01',
      type: 'image',
      color1: '#def1f9', // Lighter Aqua (Light Version)
      color2: '#5fdafc', // Slightly lighter Intense Aqua
      speed: 0.6,
      Image: '/img/60.jpg',
    },
    {
      name: 'solar flare',
      year: '2024',
      number: '02',
      type: 'gradient',
      color1: '#fcedd9', // Lighter Orange (Light Version)
      color2: '#fcb480', // Slightly lighter Intense Orange
      speed: 0.7,
      Image: '/img/58.jpg',
    },
    {
      name: 'mountain echo',
      year: '2021',
      number: '03',
      type: 'image',
      color1: '#f3fced', // Lighter Green (Light Version)
      color2: '#97f791', // Slightly lighter Intense Green
      speed: 0.7,
      Image: '/img/57.jpg',
    },
    {
      name: 'nebula drift',
      year: '2022',
      number: '04',
      type: 'gradient',
      color1: '#ffebea', // Lighter Red (Light Version)
      color2: '#fc9185', // Slightly lighter Intense Red
      speed: 0.7,
      Image: '/img/55.jpg',
    },
    {
      name: 'city lights',
      year: '2023',
      number: '05',
      type: 'image',
      color1: '#e0f3ff', // Lighter Blue (Light Version)
      color2: '#91cbf7', // Slightly lighter Intense Dark Blue
      speed: 0.7,
      Image: '/img/54.jpg',
    },
    {
      name: 'golden horizon',
      year: '2021',
      number: '06',
      type: 'gradient',
      color1: '#f7f2e1', // Lighter Gold (Light Version)
      color2: '#f9c37c', // Slightly lighter Intense Gold
      speed: 0.7,
      Image: '/img/28.jpg',
    },
  ];

  const [shaderSettings, setShaderSettings] = useState({
    color1: projects[0].color1,
    color2: projects[0].color2,
    speed: projects[0].speed,
  });
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: 'both',
      touchMultiplier: 2,
    });

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
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      clearInterval(timer);
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="w-full relative">
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
      <Head>
        <link href="/css/new.css" rel="stylesheet" type="text/css" />
      </Head>
      {/* Header */}
      <header className="p-6 flex justify-between items-center text-neutral-800 no-image-zone fixed w-full">
        <div className="flex gap-2 text-base font-semibold w-1/2 items-center">
          <span>F</span>
          <span className="text-gray-600 ">/</span>
          <span>P</span>

          <div className="text-sm ml-[8%] text-[#575757] font-light">
            UDINE, {currentTime} PST
          </div>
        </div>
        <div className="flex gap-3 text-sm items-center">
          <a href="#projects" className="hover:opacity-70">
            PROJECTS
          </a>
          <span className="text-gray-600 ">/</span>

          <a href="#about" className="hover:opacity-70">
            ABOUT
          </a>
        </div>
      </header>

      <main className="page-wrapper w-full items-center justify-center flex flex-col ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-1/2 h-[50vh] flex flex-col items-center justify-center border border-black rounded-lg p-5 shadow-lg transition-transform mb-10 ${
              index === 0 ? 'mt-52' : ''
            }`}
            style={{
              scrollSnapAlign: 'center',
              backgroundColor: project.color1,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
            onMouseEnter={() =>
              setShaderSettings({
                color1: project.color1,
                color2: project.color2,
                speed: project.speed,
              })
            }
          >
            <Image
              src={project.Image}
              alt={project.name}
              width={200}
              height={200}
              className="object-cover rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
            <p className="text-lg">Year: {project.year}</p>
            <p className="text-lg">Number: {project.number}</p>
            <p className="text-lg">Type: {project.type}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
