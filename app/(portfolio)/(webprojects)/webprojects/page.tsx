'use client';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import ShaderBackground from '@/app/components/shadderplain';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MoveUpLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const projects = useMemo(
    () => [
      {
        name: '1947 partition archive',
        discription:
          'Studio focusing on designing and developing advanced and intuitive mobile ecosystems.',
        number: '01',
        type: 'image',
        color1: '#fcf9ea', // Lighter Aqua (Light Version)
        color2: '#796c30', // Slightly lighter Intense Aqua
        speed: 0.6,
        Image: '/img/1947card.png',
        Link: '/1947partitionarchive',
      },
      {
        name: 'zar consultancy',
        discription:
          'Studio focusing on designing and developing advanced and intuitive mobile ecosystems.',
        number: '02',
        type: 'gradient',
        color1: '#c9fcf9', // Lighter Orange (Light Version)
        color2: '#00a89d', // Slightly lighter Intense Orange
        speed: 0.7,
        Image: '/img/zccard.png',
        Link: '/zarconsultancy',
      },
      {
        name: 'proofsafely',
        discription:
          'Studio focusing on designing and developing advanced and intuitive mobile ecosystems.',
        number: '03',
        type: 'image',
        color1: '#fcf5e3', // Lighter Green (Light Version)
        color2: '#E7B639', // Slightly lighter Intense Green
        speed: 0.7,
        Image: '/img/gncard.png',
        Link: '/grammarnow',
      },
      {
        name: 'kingdom connect',
        discription:
          'Studio focusing on designing and developing advanced and intuitive mobile ecosystems.',
        number: '04',
        type: 'gradient',
        color1: '#f7e2ff', // Lighter Red (Light Version)
        color2: '#6E3385', // Slightly lighter Intense Red
        speed: 0.7,
        Image: '/img/kccard.png',
        Link: '/kingdomconnect',
      },
      {
        name: 'vienna unwrapped',
        discription:
          'Studio focusing on designing and developing advanced and intuitive mobile ecosystems.',
        number: '05',
        type: 'image',
        color1: '#f9cfcf', // Lighter Blue (Light Version)
        color2: '#EA0000', // Slightly lighter Intense Dark Blue
        speed: 0.7,
        Image: '/img/vucard.png',
        Link: '/vienna',
      },
    ],
    [],
  );

  const [shaderSettings, setShaderSettings] = useState({
    color1: projects[0].color1,
    color2: projects[0].color2,
    speed: projects[0].speed,
  });
  const [currentTime, setCurrentTime] = useState('');
  const [currentProject, setCurrentProject] = useState(1);
  const totalProjects = projects.length; // Total number of projects

  const [projectDetails, setProjectDetails] = useState({
    name: projects[0].name,
    discription: projects[0].discription,
    link: projects[0].Link,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: 'both',
      touchMultiplier: 1,
    });
    setShaderSettings({
      color1: projects[0].color1,
      color2: projects[0].color2,
      speed: projects[0].speed,
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
  }, [projects]);

  return (
    <div
      className="w-full relative items-center justify-center flex scroll-boxx"
      style={{ fontFamily: 'Safiro, sans-serif' }}
    >
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

      {/* Header */}
      <header className="p-6 flex justify-between items-center text-neutral-800  fixed top-[2%] w-[95%] z-20">
        <div className="flex gap-2 text-base font-semibold w-1/2 items-center">
          <Link href="/" className="cursor-pointer">
            WOLFIZ
          </Link>
          <div className="text-sm ml-[8%] text-[#575757] font-light">
            UDINE, {currentTime} PST
          </div>
        </div>
        <div className="flex gap-1 text-sm items-center cursor-pointer">
          <MoveUpLeft className="size-4" />
          <a href="/" className="hover:opacity-70 cupo">
            GO BACK
          </a>
        </div>
      </header>

      <main className="page-wrapper w-full items-center justify-center flex flex-col ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-1/2 h-[50vh] flex flex-col items-center relative justify-center rounded-xl p-5   mb-10 ${
              index === 0 ? 'mt-52' : ''
            }`}
            onMouseEnter={() => {
              setCurrentProject(index + 1); // Update current project counter
              setProjectDetails({
                name: project.name,
                discription: project.discription,
                link: project.Link || '#', // Fallback link
              });
              setShaderSettings({
                color1: project.color1,
                color2: project.color2,
                speed: project.speed,
              });
            }}
          >
            <Link
              href={project.Link || '#'} // Use a fallback URL when `project.Link` is undefined
              className="cursor-pointer"
            >
              <Image
                src={project.Image}
                alt={project.name}
                fill
                className="object-contain rounded-lg cursor-pointer "
              />
            </Link>
          </div>
        ))}

        <div className=" flex items-center justify-between fixed z-50  ">
          <motion.div
            key={projectDetails.name}
            initial={{ y: 20, opacity: 0 }} // Start from below with zero opacity
            animate={{ y: 0, opacity: 1 }} // Move up to its original position with full opacity
            exit={{ y: -20, opacity: 0 }} // Exit animation (for smoother effect when switching slides)
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed left-[3%] top-[23%] max-w-[25%] flex flex-col gap-5  "
          >
            <span className="text-6xl    ">{projectDetails.name}</span>
            <span className="w-3/4">{projectDetails.discription}</span>
            <button className="group flex text-sm items-center gap-2 px-4 py-2 rounded-xl border border-neutral-600 transition-colors h-fit w-1/5">
              VISIT
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
        <div className="w-[95%] flex items-center justify-between fixed z-50 ">
          <div className="fixed left-[3%] bottom-[4%] ">
            <div className="relative w-[13vw] aspect-square">
              <div className="absolute inset-0 rounded-full border border-neutral-600">
                {/* Top label */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-[#575757]">
                  PROJECT
                </div>

                {/* Central content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative text-7xl font-light w-full">
                    {/* Counter for scrollDown div */}
                    <span className="absolute bottom-3 left-[40%] font-medium">
                      {totalProjects}
                    </span>

                    {/* Rotating line */}
                    <div className="absolute top-1/2 left-1/2 w-10/12 h-[1px] bg-neutral-500 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>

                    <span className="absolute top-4 left-1/2 font-medium">
                      {currentProject}
                    </span>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-[#575757]">
                  NUMBER
                </div>

                {/* Navigation buttons */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-70 cursor-pointer"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 cursor-pointer"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <span className="fixed right-[3%] bottom-[4%] text-[#575757] text-lg uppercase font-medium leading-none not-italic ">
            A Featured selection. <br />
            the latest work
            <br />
            of the last 4 years
          </span>
        </div>
        <style jsx>{`
          .scroll-boxx:-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </main>
    </div>
  );
};

export default Home;
