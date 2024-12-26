'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import Lenis from 'lenis';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import ShaderBackground from '@/app/components/shadderplain';
import { motion } from 'framer-motion';
import { ArrowUpRight, MoveUpLeft } from 'lucide-react';

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
        speed: 0.6,
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
        speed: 0.6,
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
        speed: 0.6,
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
        speed: 0.6,
        Image: '/img/vucard.png',
        Link: '/vienna',
      },
    ],
    [],
  );
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalProjects = projects.length; // Total number of projects
  const [currentProject, setCurrentProject] = useState(1);

  const [shaderSettings, setShaderSettings] = useState({
    color1: projects[0].color1,
    color2: projects[0].color2,
    speed: projects[0].speed,
  });
  const [currentTime, setCurrentTime] = useState('');
  const [projectDetails, setProjectDetails] = useState({
    name: projects[0].name,
    description: projects[0].discription,
    link: projects[0].Link,
  });

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      gestureOrientation: 'both',
      touchMultiplier: 2,
      wrapper: scrollContainerRef.current ?? undefined,
      content: scrollContainerRef.current?.firstElementChild as HTMLElement,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // IntersectionObserver to track projects in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            setCurrentProject(index + 1);
            if (index !== -1) {
              const project = projects[index];
              setShaderSettings({
                color1: project.color1,
                color2: project.color2,
                speed: project.speed,
              });
              setProjectDetails({
                name: project.name,
                description: project.discription,
                link: project.Link || '#',
              });
            }
          }
        });
      },
      { threshold: 1 }, // Trigger when 50% of a project is visible
    );

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
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]);

  return (
    <div
      className="w-full h-screen relative flex items-center justify-center"
      style={{ fontFamily: 'Safiro, sans-serif' }}
    >
      {/* Shader Background */}
      <Canvas
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{ position: 'absolute' }}
      >
        <ShaderBackground
          color1={shaderSettings.color1}
          color2={shaderSettings.color2}
          speed={shaderSettings.speed}
        />
      </Canvas>
      <header className="lg:p-[1%]  p-[2%] flex justify-between items-center text-neutral-800  fixed top-[2%] w-[95%] z-20">
        <div className="flex gap-2 text-sm font-semibold w-1/2 items-center">
          <Link href="/" className="cursor-pointer">
            WOLFIZ
          </Link>
          <div className="text-sm ml-[8%] text-[#575757] font-light lg:block hidden">
            UDINE, {currentTime} PST
          </div>
        </div>
        <div className="flex gap-1 2xl:text-sm text-xs items-center cursor-pointer">
          <MoveUpLeft className="size-4" />
          <a href="/" className="hover:opacity-70 cupo">
            GO BACK
          </a>
        </div>
      </header>
      {/* Scrollable Content */}
      <main
        ref={scrollContainerRef}
        className="page-wrapper flex flex-row flex-nowrap overflow-x-auto h-full w-[95%] no-scrollbar items-center gap-5 ps-2   "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              projectRefs.current[index] = el;
              return void 0;
            }}
            className="flex-shrink-0 w-[90%] flex flex-col items-center justify-center relative rounded-xl mt-5 "
          >
            <Link
              href={project.Link || '#'}
              className="cursor-pointer w-full relative"
            >
              <Image
                src={project.Image}
                alt={project.name}
                fill
                className="object-cover rounded-lg relativepos"
              />
            </Link>
          </div>
        ))}
      </main>

      {/* Dynamic Project Details */}
      <div className="absolute  items-center justify-center  z-50 ">
        <motion.div
          key={projectDetails.name}
          initial={{ y: 20, opacity: 0 }} // Start from below with zero opacity
          animate={{ y: 0, opacity: 1 }} // Move up to its original position with full opacity
          exit={{ y: -20, opacity: 0 }} // Exit animation (for smoother effect when switching slides)
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed left-[4%] top-[14%] w-11/12 flex flex-col gap-3 items-center text-center "
        >
          <span className="2xl:text-[3vw] text-4xl leading-none">
            {projectDetails.name}
          </span>
          <span className="w-10/12 2xl:text-base text-sm text-start">
            {projectDetails.description}
          </span>
          <Link
            href={projectDetails.link}
            className="group flex text-sm items-center gap-2 px-4 py-2 rounded-xl border border-neutral-600 transition-colors h-fit w-fit"
          >
            VISIT
            <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
      <div className="w-[95%] flex items-center justify-between fixed z-50 ">
        <div className="fixed left-[3%] bottom-[4%]">
          <div className="relative lg:w-[14vw] w-[36vw] aspect-square">
            <div className="absolute inset-0 rounded-full border border-neutral-600">
              {/* Top Label */}
              <div className="absolute top-[4%] left-1/2 -translate-x-1/2 2xl:text-sm text-xs text-[#575757]">
                PROJECT
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative 2xl:text-[4vw] lg:text-5xl text-3xl font-light w-full">
                  <span className="absolute bottom-3 left-[40%]">
                    {totalProjects}
                  </span>
                  <div className="absolute top-1/2 left-1/2 w-10/12 h-[1px] bg-neutral-500 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  <span className="absolute top-4 left-[40%]">
                    {currentProject}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 2xl:text-sm text-xs text-[#575757]">
                NUMBER
              </div>
            </div>
          </div>
        </div>

        <span className="fixed right-[3%] bottom-[4%] text-[#575757]  2xl:text-base text-sm uppercase font-medium 2xl:leading-none leading-none not-italic ">
          A Featured selection. <br />
          the latest work
          <br />
          of the last 4 years
        </span>
      </div>
      <style jsx>{`
        .scroll-box:-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Home;
