'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import ShaderBackground from '@/app/components/shadderplain';
import useSmoothScroll from '@/app/components/ss';
const Component = () => {
  const projects2 = useMemo(
    () => [
      {
        name: 'Aqua Wave',
        year: '2023',
        number: '01',
        type: 'image',
        color1: '#B9E1F3', // Lighter Aqua (Light Version)
        color2: '#00799C', // Slightly lighter Intense Aqua
        speed: 0.6,
        Image: '/img/3.jpg',
      },
      {
        name: 'Solar Flare',
        year: '2024',
        number: '02',
        type: 'gradient',
        color1: '#FFD8A1', // Lighter Orange (Light Version)
        color2: '#FF8F3B', // Slightly lighter Intense Orange
        speed: 0.7,
        Image: '/img/4.jpg',
      },
      {
        name: 'Mountain Echo',
        year: '2021',
        number: '03',
        type: 'image',
        color1: '#C9E6B4', // Lighter Green (Light Version)
        color2: '#5C8E5A', // Slightly lighter Intense Green
        speed: 0.7,
        Image: '/img/5.jpg',
      },
      {
        name: 'Nebula Drift',
        year: '2022',
        number: '04',
        type: 'gradient',
        color1: '#F9C4C1', // Lighter Red (Light Version)
        color2: '#B34A3D', // Slightly lighter Intense Red
        speed: 0.7,
        Image: '/img/6.jpg',
      },
      {
        name: 'City Lights',
        year: '2023',
        number: '05',
        type: 'image',
        color1: '#A1B7C4', // Lighter Blue (Light Version)
        color2: '#3B5264', // Slightly lighter Intense Dark Blue
        speed: 0.7,
        Image: '/img/7.jpg',
      },
      {
        name: 'Golden Horizon',
        year: '2021',
        number: '06',
        type: 'gradient',
        color1: '#F9E6A7', // Lighter Gold (Light Version)
        color2: '#C5852F', // Slightly lighter Intense Gold
        speed: 0.7,
        Image: '/img/8.jpg',
      },
      {
        name: 'Lunar Eclipse',
        year: '2024',
        number: '07',
        type: 'image',
        color1: '#D1B9E4', // Lighter Purple (Light Version)
        color2: '#8E6C9E', // Slightly lighter Intense Purple
        speed: 0.7,
        Image: '/img/9.jpg',
      },
      {
        name: 'Ocean Breeze',
        year: '2022',
        number: '08',
        type: 'image',
        color1: '#A9E2F3', // Lighter Ocean Blue (Light Version)
        color2: '#2C7B94', // Slightly lighter Intense Ocean Blue
        speed: 0.7,
        Image: '/img/10.jpg',
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

  useEffect(() => {
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
      scrollDownDiv.scrollTop =
        scrollUpDiv.scrollHeight -
        scrollUpDiv.scrollTop -
        scrollDownDiv.clientHeight;

      if (scrollUpDiv.scrollTop >= scrollUpDiv.scrollHeight / 2) {
        scrollUpDiv.scrollTop = 0; // Reset to start of the content
      }
    };

    const handleScrollDown = () => {
      scrollUpDiv.scrollTop =
        scrollDownDiv.scrollHeight -
        scrollDownDiv.scrollTop -
        scrollUpDiv.clientHeight;

      if (scrollDownDiv.scrollTop <= 0) {
        scrollDownDiv.scrollTop = scrollDownDiv.scrollHeight / 2; // Reset to end of the content
      }
    };

    // Event delegation for hover
    const handleHover = (e) => {
      const target = e.target.closest('.content1');
      if (!target) return;

      const index = target.dataset.index; // Use dataset to find original index
      const isOriginal = target.dataset.original === 'true';

      if (!isOriginal) return; // Only handle hover for original items

      setShaderSettings({
        color1: projects2[index].color1,
        color2: projects2[index].color2,
        speed: projects2[index].speed,
      });
      console.log('Hovering over project:', projects2[index].name);
    };

    // Add event listeners
    scrollUpDiv.addEventListener('scroll', handleScrollUp);
    scrollDownDiv.addEventListener('scroll', handleScrollDown);
    scrollUpDiv.addEventListener('mouseover', handleHover);
    scrollDownDiv.addEventListener('mouseover', handleHover);

    // Cleanup
    return () => {
      scrollUpDiv.removeEventListener('scroll', handleScrollUp);
      scrollDownDiv.removeEventListener('scroll', handleScrollDown);
      scrollUpDiv.removeEventListener('mouseover', handleHover);
      scrollDownDiv.removeEventListener('mouseover', handleHover);
    };
  }, [projects2]);

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

      <header className="p-6 flex justify-between items-center text-neutral-800 no-image-zone fixed top-[1%] w-[95%]">
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
      <div className="w-[95%] flex items-center justify-between fixed">
        <span className="text-lg  text-black font-light">
          Featured <br></br>Projects
        </span>
        <span className="text-lg  text-black">2023 / 2024</span>
      </div>
      <div className="scroll-row w-full">
        <div
          ref={scrollDownRef}
          className="scroll-box items-end justify-end flex w-1/2 flex-col"
        >
          {projects2.map((project, index) => (
            <div
              key={`up-${index}`}
              className="content1 group relative"
              data-index={index}
              data-original="true"
            >
              <div className="absolute aspect-square  w-[92%] left-[0.6%] top-[0.3%] ">
                <Image
                  src="/ring.png"
                  alt="ring"
                  fill
                  className="h-full w-full object-cover group-hover:rotate-90 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="relative aspect-square  w-[13vw] rounded-full bg-black/10 backdrop-blur-sm p-6 mb-2  ">
                <div className="flex h-full flex-col items-center justify-between">
                  <div className=" text-[1.6rem] text-[#505050]">
                    N. {project.number}
                  </div>
                  <span className="text-[2rem] font-medium leading-[70%] -tracking-normal text-[#17191A]">
                    {project.name}
                  </span>
                  <p className="text-[1rem] text-[#505050]">
                    Y. {project.year}
                  </p>
                </div>
              </div>
              <div className="relative aspect-square   w-[14vw] overflow-hidden rounded-full  ">
                <Image
                  src={project.Image}
                  alt={project.name}
                  width={250}
                  height={250}
                  className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
        <div
          ref={scrollUpRef}
          className="scroll-box items-start flex flex-col w-1/2"
        >
          {projects2.map((project, index) => (
            <div
              key={`down-${index}`}
              className="content1 group relative"
              data-index={index}
              data-original="true"
            >
              <div className="absolute aspect-square  w-[92%] left-[0.6%] top-[0.3%] ">
                <Image
                  src="/ring.png"
                  alt="ring"
                  fill
                  className="h-full w-full object-cover group-hover:rotate-90 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="relative aspect-square  w-[13vw] rounded-full bg-black/10 backdrop-blur-sm p-6 mb-2 ">
                <div className="flex h-full flex-col items-center justify-between">
                  <div className=" text-[1.6rem] text-[#505050]">
                    N. {project.number}
                  </div>
                  <span className="text-[2rem] font-medium leading-[69%] -tracking-normal text-[#17191A]">
                    {project.name}
                  </span>
                  <p className="text-[1rem] text-[#505050]">
                    Y. {project.year}
                  </p>
                </div>
              </div>
              <div className="relative aspect-square  w-[14vw] overflow-hidden rounded-full">
                <Image
                  src={project.Image}
                  alt={project.name}
                  width={250}
                  height={250}
                  className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Container settings */
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        /* Row layout for the scroll boxes */
        .scroll-row {
          display: flex;
          gap: 20px;
        }

        .scroll-box {
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
      `}</style>
    </div>
  );
};

export default Component;
