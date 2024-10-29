/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const ExpandingCardsVer: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex   relative rotate-90 h-[50vh] ">
      {/* Card 1 - Hidden on hover of any other card */}
      <div
        className={`transition-all duration-500 ease-in-out relative  ${
          hoveredIndex === null || hoveredIndex === 1
            ? 'flex-[3] z-10'
            : 'flex-[0] opacity-0' // Hide other cards when hovering over Card 1
        } bg-[#A9A9A9] bg-kcbg2 bg-contain bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden`}
      >
        <div
          className={`flex -rotate-90 items-center justify-center text-center  text-black w-[100vw] h-[100vh]  ${
            hoveredIndex !== null && hoveredIndex > 1 ? 'hidden' : 'flex'
          }`}
        >
          <div className="text-center flex flex-col items-center justify-center  textdiv w-[100vw] h-[100vh]">
            <h1 className=" text-lg">01</h1>

            <p className=" text-2xl font-bold">Research</p>
            <p className="mt-1 text-lg w-full ">
              To empathize is to understand or <br></br>relate to someone else's
              emotional <br></br>experience.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - Expands to hide Card 1 */}
      <div
        className={`transition-all duration-500 ease-in-out relative ${
          hoveredIndex === 2
            ? 'flex-[3] z-20' // Expand when hovered over
            : hoveredIndex === 1 || hoveredIndex === null
            ? 'flex-1 z-10' // Default small size when Card 1 is hovered or no hover
            : 'flex-[0] opacity-0' // Hidden when Card 3 or 4 is hovered
        } bg-[#FF7f40]  bg-kcbg2 bg-contain bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden`}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`flex -rotate-90 items-center justify-center text-center  text-white w-[100vw] h-[100vh]  ${
            hoveredIndex === 2 ? 'flex' : 'hidden'
          }`}
        >
          <div className="text-center flex flex-col items-center justify-center textdiv w-[100vw] h-[100vh]">
            <h1 className="text-lg">02</h1>

            <p className="text-2xl font-bold">Wireframing</p>
            <p className="mt-1 text-base w-11/12 ">
              Wireframing is a process where designers draw overviews of
              <br />
              interactive products to establish the structure
              <br />
              and flow of possible design solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 - Expands and hides Card 1 & Card 2 */}
      <div
        className={`transition-all duration-500 ease-in-out relative ${
          hoveredIndex === 3
            ? 'flex-[4] z-20' // Expand when hovered
            : hoveredIndex === 4
            ? 'flex-[0] opacity-0' // Hide when Card 4 is hovered
            : 'flex-1' // Default size when not hovered
        } bg-[#6E3385] bg-kcbg2 bg-contain bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden`}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`flex -rotate-90 items-center justify-center text-center  text-white w-[100vw] h-[100vh]  ${
            hoveredIndex === 3 ? 'flex' : 'hidden'
          }`}
        >
          <div className="text-center flex flex-col items-center justify-center textdiv w-[100vw] h-[100vh]">
            <h1 className="text-lg">03</h1>

            <p className=" text-2xl font-bold">Design System</p>
            <p className="mt-1 text-lg  w-11/12">
              A design system is a set of standards to manage design at scale by
              reducing redundancy
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 - Expands and hides Card 1, 2 & 3 */}
      <div
        className={`transition-all duration-500 ease-in-out relative ${
          hoveredIndex === 4
            ? 'flex-[4] z-20' // Expand when hovered
            : 'flex-1' // Default size
        } bg-black bg-kcbg2 bg-contain bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden`}
        onMouseEnter={() => setHoveredIndex(4)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`flex -rotate-90 items-center justify-center text-center  text-white w-[100vw] h-[100vh]  ${
            hoveredIndex === 4 ? 'flex' : 'hidden'
          }`}
        >
          <div className="text-center flex flex-col items-center justify-center   textdiv w-[100vw] h-[100vh]">
            <h1 className="text-lg">04</h1>

            <p className="text-2xl font-bold">Design System</p>
            <p className="mt-1 text-base  w-11/12 ">
              User interface (UI) design is the process designers use to build
              interfaces in software or computerized devices,
              <br />
              focusing on looks or style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandingCardsVer;
