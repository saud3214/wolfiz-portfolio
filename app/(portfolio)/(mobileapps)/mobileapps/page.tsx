'use client';

import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import ShaderBackground from '@/app/components/shadderplain';
import Lenis from 'lenis';
import Link from 'next/link';
import { MoveUpLeft } from 'lucide-react';
const Component = () => {
  const projects2 = useMemo(
    () => [
      {
        name: 'Yalaxi',
        year: '2023',
        number: '01',
        type: 'image',
        color1: '#fff5f2', // Lighter Aqua (Light Version)
        color2: '#f78965', // Slightly lighter Intense Aqua
        speed: 0.6,
        Image: '/img/yalaxin.jpg',
        link: '/yalaxi',
      },
      {
        name: 'Avacons',
        year: '2024',
        number: '02',
        type: 'gradient',
        color1: '#e0edf9     ', // Lighter Orange (Light Version)
        color2: '#5798d1', // Slightly lighter Intense Orange
        speed: 0.6,
        Image: '/img/avaconn.jpg',
        link: '/avcons',
      },
      {
        name: 'Peptide',
        year: '2021',
        number: '03',
        type: 'image',
        color1: '#ebf9e8', // Lighter Green (Light Version)
        color2: '#61B97E', // Slightly lighter Intense Green
        speed: 0.7,
        Image: '/img/medicaln.jpg',
        link: '/peptide',
      },

      {
        name: 'Simi Riezen',
        year: '2023',
        number: '05',
        type: 'image',
        color1: '#f9edf7', // Lighter Blue (Light Version)
        color2: '#ea5bcb', // Slightly lighter Intense Dark Blue
        speed: 0.7,
        Image: '/img/simi.jpg',
        link: '/simireizen',
      },
      {
        name: 'Doroos',
        year: '2022',
        number: '04',
        type: 'gradient',
        color1: '#d6fcf0           ', // Lighter Red (Light Version)
        color2: '#2d9382', // Slightly lighter Intense Red
        speed: 0.7,
        Image: '/img/peptiden.jpg',
        link: '/doroos',
      },
    ],
    [],
  );

  const [shaderSettings, setShaderSettings] = useState({
    color1: projects2[1].color1,
    color2: projects2[1].color2,
    speed: projects2[1].speed,
  });
  const [currentTime, setCurrentTime] = useState('');
  const scrollUpRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);
  const [scrollUpCounter, setScrollUpCounter] = useState(0);
  const [scrollDownCounter, setScrollDownCounter] = useState(0);

  const updateCounters = useCallback(() => {
    if (!scrollUpRef.current || !scrollDownRef.current) return;

    const totalProjects = projects2.length;
    const scrollStep = scrollUpRef.current.clientHeight; // Height of one project

    // Calculate the index of the visible project for scrollUpDiv
    const currentIndexUp =
      Math.round(scrollUpRef.current.scrollTop / scrollStep) % totalProjects;

    // Calculate the reverse index for scrollDownDiv
    const currentIndexDown = (totalProjects - currentIndexUp) % totalProjects;

    // Update both counters (adding +1 for 1-based index display)
    setScrollUpCounter(currentIndexUp + 1);
    setScrollDownCounter(currentIndexDown + 1);
  }, [scrollUpRef, scrollDownRef, projects2]);

  useEffect(() => {
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
    const scrollUpDiv = scrollUpRef.current;
    const scrollDownDiv = scrollDownRef.current;

    if (!scrollUpDiv || !scrollDownDiv) return;

    // Duplicate content for infinite scroll
    scrollUpDiv.innerHTML += scrollUpDiv.innerHTML;
    scrollDownDiv.innerHTML += scrollDownDiv.innerHTML;

    // Sync initial scroll position
    const initialCenterPosition = scrollUpDiv.scrollHeight / 4;
    scrollUpDiv.scrollTop = initialCenterPosition;
    scrollDownDiv.scrollTop = initialCenterPosition;

    // Function to handle scroll for up-div and sync down-div
    const handleScrollUp = () => {
      if (scrollUpDiv && scrollDownDiv) {
        if (scrollUpDiv.scrollTop >= scrollUpDiv.scrollHeight / 2) {
          scrollUpDiv.scrollTop = 0; // Reset position
        }

        // Sync scrollDownDiv
        scrollDownDiv.scrollTop =
          scrollUpDiv.scrollHeight -
          scrollUpDiv.scrollTop -
          scrollDownDiv.clientHeight;

        // Update counters
        updateCounters();
      }
    };

    const handleScrollDown = () => {
      if (scrollUpDiv && scrollDownDiv) {
        if (scrollDownDiv.scrollTop <= 0) {
          scrollDownDiv.scrollTop = scrollDownDiv.scrollHeight / 2; // Reset position
        }

        // Sync scrollUpDiv
        scrollUpDiv.scrollTop =
          scrollDownDiv.scrollHeight -
          scrollDownDiv.scrollTop -
          scrollUpDiv.clientHeight;

        // Update counters
        updateCounters();
      }
    };
    // Event delegation for hover
    const handleHover = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.content1');
      if (!target) return;

      const index = (target as HTMLElement).dataset.index; // Use dataset to find original index
      const isOriginal = (target as HTMLElement).dataset.original === 'true';

      if (!isOriginal) return; // Only handle hover for original items

      setShaderSettings({
        color1: projects2[Number(index)].color1,
        color2: projects2[Number(index)].color2,
        speed: projects2[Number(index)].speed,
      });
    };

    // Add event listeners
    scrollUpDiv.addEventListener('scroll', handleScrollUp);
    scrollDownDiv.addEventListener('scroll', handleScrollDown);
    scrollUpDiv.addEventListener('mouseover', handleHover);
    scrollDownDiv.addEventListener('mouseover', handleHover);
    // const lenis = new Lenis({
    //   duration: 1.8,
    //   easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    //   smoothWheel: true,
    //   gestureOrientation: 'both',
    //   touchMultiplier: 2,
    // });

    // const raf = (time: number) => {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // };
    // requestAnimationFrame(raf);

    // Cleanup
    return () => {
      scrollUpDiv.removeEventListener('scroll', handleScrollUp);
      scrollDownDiv.removeEventListener('scroll', handleScrollDown);
      scrollUpDiv.removeEventListener('mouseover', handleHover);
      scrollDownDiv.removeEventListener('mouseover', handleHover);
      clearInterval(timer);
      // lenis.destroy();
    };
  }, [projects2, updateCounters]);

  const scrollWithAnimation = (direction: number) => {
    if (!scrollUpRef.current || !scrollDownRef.current) return; // Check if refs are not null

    const scrollStep = scrollUpRef.current.clientHeight / 40; // Smaller steps for smoothness
    let steps = 40;

    const interval = setInterval(() => {
      if (steps === 0) {
        clearInterval(interval); // Stop animation
        updateCounters(); // Update counters after animation
      } else {
        if (scrollUpRef.current && scrollDownRef.current) {
          // Check if refs are not null before accessing properties
          scrollUpRef.current.scrollTop += direction * scrollStep; // Increment scroll
          scrollDownRef.current.scrollTop -= direction * scrollStep; // Decrement scroll
        }
        steps--;
      }
    }, 20); // Adjust time interval for smoothness
  };
  const prevprojects = () => scrollWithAnimation(-1); // Scroll up
  const nextprojects = () => scrollWithAnimation(1); // Scroll down
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ fontFamily: 'Safiro, sans-serif' }}
    >
      <Canvas
        className="absolute top-0 left-0 w-full h-full -z-20"
        style={{ position: 'absolute', pointerEvents: 'none' }}
      >
        <ShaderBackground
          color1={shaderSettings.color1}
          color2={shaderSettings.color2}
          speed={shaderSettings.speed}
        />
      </Canvas>

      <header className="p-6 flex justify-between items-center text-neutral-800  fixed top-[2%] w-[95%] z-30">
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
          <Link href="/" className="hover:opacity-70 cu">
            GO BACK
          </Link>
        </div>
      </header>
      <div className="w-[93%] flex items-center justify-between fixed">
        <span className="text-lg  text-black font-light">
          Featured <br></br>Projects
        </span>
        <span className="text-lg  text-black">2023 / 2024</span>
      </div>
      <div className="scroll-row w-full">
        <div
          ref={scrollDownRef}
          className="scroll-box items-end transition-all duration-700 ease-in-out "
        >
          {projects2.map((project, index) => (
            <div
              key={`up-${index}`}
              className="content1 group relative "
              data-index={index}
              data-original="true"
            >
              <div className="relative aspect-square   w-[13vw] overflow-hidden rounded-full cursor-pointer  ">
                <Link href={project.link}>
                  <Image
                    src={project.Image}
                    alt={project.name}
                    priority
                    width={250}
                    height={250}
                    className="h-full w-full object-cover group-hover:scale-125 transition-all duration-700 ease-in-out content1"
                  />
                </Link>
              </div>
              <Link href={project.link}>
                <div className="relative aspect-square  w-[12vw] rounded-full bg-black/10 backdrop-blur-sm p-6 mt-2 cursor-pointer  ">
                  <div className="absolute aspect-square  w-[104%] left-[-2%] top-[-1.9%] ">
                    <Image
                      src="/ring2.png"
                      alt="ring"
                      fill
                      className="h-full w-full object-cover group-hover:rotate-90 transition-all duration-700 ease-in-out"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center justify-between">
                    <div className=" text-[1.3rem] text-[#505050]">
                      N. {project.number}
                    </div>
                    <span className="text-[2rem] font-medium leading-[70%] -tracking-normal text-[#27292b]">
                      {project.name}
                    </span>
                    <p className="text-[1rem] text-[#505050]">
                      Y. {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div
          ref={scrollUpRef}
          className="scroll-box items-start transition-all duration-700 ease-in-out "
        >
          {projects2.map((project, index) => (
            <div
              key={`down-${index}`}
              className="content1 group relative"
              data-index={index}
              data-original="true"
            >
              <div className="relative aspect-square  w-[13vw] overflow-hidden rounded-full">
                <Link href={project.link}>
                  <Image
                    src={project.Image}
                    alt={project.name}
                    width={250}
                    height={250}
                    className="h-full w-full object-cover group-hover:scale-125 transition-all duration-700 ease-in-out"
                  />
                </Link>
              </div>
              <Link href={project.link}>
                <div className="relative aspect-square  w-[12vw] rounded-full bg-black/5 backdrop-blur-sm p-6 mt-2 ">
                  <div className="absolute aspect-square  w-[104%] left-[-2%] top-[-1.9%] ">
                    <Image
                      src="/ring2.png"
                      alt="ring"
                      fill
                      className="h-full w-full object-cover group-hover:rotate-90 transition-all duration-700 ease-in-out"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center justify-between">
                    <div className=" text-[1.3rem] text-[#505050]">
                      N. {project.number}
                    </div>
                    <span className="text-[2rem] font-medium leading-[69%] -tracking-normal text-[#27292b]">
                      {project.name}
                    </span>
                    <p className="text-[1rem] text-[#505050]">
                      Y. {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
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
                      {scrollDownCounter}
                    </span>

                    {/* Rotating line */}
                    <div className="absolute top-1/2 left-1/2 w-10/12 h-[1px] bg-neutral-500 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>

                    {/* Counter for scrollUp div */}
                    <span className="absolute top-4 left-1/2 font-medium">
                      {scrollUpCounter}
                    </span>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-[#575757]">
                  NUMBER
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={prevprojects}
                  className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-70 cursor-pointer"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={nextprojects}
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
      </div>
      <style jsx>{`
        .container {
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .scroll-row {
          display: flex;
          gap: 20px;
          scroll-behavior: smooth;
        }

        .scroll-box {
          display: flex;
          flex-direction: column;
          width: 50%;
          z-index: 20;
          height: 100vh;
          overflow-y: scroll;
          position: relative;
          padding: 10px;
          box-sizing: border-box;
        }
        .scroll-box::-webkit-scrollbar {
          display: none;
        }

        .content1 {
          padding: 10px;
          margin-bottom: 10px;
          text-align: center;
        }
        main {
          justify-content: center;
          display: flex;
        }
        .scroll-smooth {
          scroll-behavior: smooth; /* Smooth scrolling only when this class is applied */
        }
      `}</style>
    </div>
  );
};

export default Component;
