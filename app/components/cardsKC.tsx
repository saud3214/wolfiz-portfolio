/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const ExpandingCards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full h-[70vh] relative">
      {/* Card 1 - Hidden on hover of any other card */}
      <div
        className={`transition-all duration-500 ease-in-out relative ${
          hoveredIndex === null || hoveredIndex === 1
            ? 'flex-[3] z-10'
            : 'flex-[0] opacity-0' // Hide other cards when hovering over Card 1
        } bg-[#A9A9A9] bg-kcbg2 bg-contain bg-center bg-no-repeat`}
      >
        <div
          className={`flex items-start justify-start h-full text-black p-10 ${
            hoveredIndex !== null && hoveredIndex > 1 ? 'hidden' : 'flex'
          }`}
        >
          <div className="text-start flex flex-col gap-5 textdiv">
            <h1 className="text-6xl mb-2">01</h1>
            <svg
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-10"
            >
              <path
                d="M24.5166 0.774414C18.1514 0.774414 12.0469 3.30298 7.54604 7.80385C3.04517 12.3047 0.516602 18.4092 0.516602 24.7744C0.516602 31.1396 3.04517 37.2441 7.54604 41.745C12.0469 46.2458 18.1514 48.7744 24.5166 48.7744C30.8818 48.7744 36.9863 46.2458 41.4872 41.745C45.988 37.2441 48.5166 31.1396 48.5166 24.7744C48.5166 18.4092 45.988 12.3047 41.4872 7.80385C36.9863 3.30298 30.8818 0.774414 24.5166 0.774414Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M59.6359 59.8957C59.0733 60.4581 58.3104 60.774 57.5149 60.774C56.7194 60.774 55.9565 60.4581 55.3939 59.8957L44.8939 49.3957C44.3474 48.8299 44.045 48.072 44.0519 47.2855C44.0587 46.4989 44.3742 45.7464 44.9304 45.1902C45.4867 44.634 46.2391 44.3185 47.0257 44.3116C47.8123 44.3048 48.5701 44.6072 49.1359 45.1537L59.6359 55.6537C60.1983 56.2162 60.5143 56.9792 60.5143 57.7747C60.5143 58.5702 60.1983 59.3331 59.6359 59.8957Z"
                fill="black"
              />
            </svg>

            <p className=" text-5xl font-bold">Research</p>
            <p className="mt-1 text-3xl ">
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
        } bg-[#FF7f40]  bg-kcbg2 bg-contain bg-center bg-no-repeat`}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`flex items-start justify-start h-full text-black p-10 ${
            hoveredIndex === 2 ? 'flex' : 'hidden'
          }`}
        >
          <div className="text-start flex flex-col gap-5 textdiv text-white overflow-hidden text-clip">
            <h1 className="text-6xl mb-2">02</h1>
            <svg
              width="66"
              height="40"
              viewBox="0 0 66 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-10"
            >
              <path
                d="M19.1086 0.0507812L0.25293 39.3412H65.7648L49.3264 18.2928L38.9315 26.2444L19.1086 0.0507812Z"
                fill="white"
              />
              <ellipse
                cx="52.4678"
                cy="7.3013"
                rx="6.28519"
                ry="6.0806"
                fill="white"
              />
            </svg>

            <p className="text-5xl font-bold">Wireframing</p>
            <p className="mt-1 text-3xl ">
              Wireframing is a process where designers draw overviews of
              <br /> interactive products to establish the structure <br />
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
        } bg-[#6E3385] bg-kcbg2 bg-contain bg-center bg-no-repeat`}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`flex items-start justify-start h-full text-black p-10 ${
            hoveredIndex === 3 ? 'flex' : 'hidden'
          }`}
        >
          <div className="text-start flex flex-col gap-5 textdiv text-white overflow-hidden text-wrap'">
            <h1 className="text-6xl mb-2">03</h1>
            <svg
              width="58"
              height="50"
              viewBox="0 0 58 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-10"
            >
              <rect
                x="0.25293"
                y="0.761719"
                width="57.543"
                height="9.97674"
                rx="4.98837"
                fill="white"
              />
              <rect
                x="1.95996"
                y="14.668"
                width="44.0187"
                height="6.52217"
                rx="3.26109"
                fill="white"
              />
              <rect
                x="1.95996"
                y="25.207"
                width="44.0187"
                height="2.07533"
                rx="1.03767"
                fill="white"
              />
              <rect
                x="1.95996"
                y="28.166"
                width="44.0187"
                height="2.07533"
                rx="1.03767"
                fill="white"
              />
              <rect
                x="1.95996"
                y="31.2129"
                width="44.0187"
                height="2.07533"
                rx="1.03767"
                fill="white"
              />
              <rect
                x="1.95996"
                y="37.2188"
                width="26.9188"
                height="11.9483"
                rx="5.97415"
                fill="white"
              />
            </svg>

            <p className=" text-5xl font-bold">Design System</p>
            <p className="mt-1 text-3xl ">
              A design system is a set of standards to manage design at scale by
              reducing redundancy
              <br /> while creating a shared language and visual consistency
              across different pages and channels.
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
        } bg-black bg-kcbg2 bg-contain bg-center bg-no-repeat`}
        onMouseEnter={() => setHoveredIndex(4)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`flex items-start justify-start h-full text-black p-10 ${
            hoveredIndex === 4 ? 'flex' : 'hidden'
          }`}
        >
          <div className="text-start flex flex-col gap-5 textdiv text-white overflow-hidden text-wrap'">
            <h1 className="text-6xl mb-2">04</h1>
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-10"
            >
              <path
                d="M46.6084 19.5342H20.5667C18.5563 19.5342 16.9209 21.1696 16.9209 23.18V47.1383C16.9209 49.1488 18.5563 50.7842 20.5667 50.7842H46.6084C48.6188 50.7842 50.2542 49.1488 50.2542 47.1383V23.18C50.2542 21.1696 48.6188 19.5342 46.6084 19.5342Z"
                fill="white"
              />
              <path
                d="M46.6071 0.78418H3.89876C1.88835 0.78418 0.25293 2.4196 0.25293 4.43001V9.63835C0.25293 11.6488 1.88835 13.2842 3.89876 13.2842H46.6071C48.6175 13.2842 50.2529 11.6488 50.2529 9.63835V4.43001C50.2529 2.4196 48.6175 0.78418 46.6071 0.78418Z"
                fill="white"
              />
              <path
                d="M6.50293 32.0342C9.95471 32.0342 12.7529 29.236 12.7529 25.7842C12.7529 22.3324 9.95471 19.5342 6.50293 19.5342C3.05115 19.5342 0.25293 22.3324 0.25293 25.7842C0.25293 29.236 3.05115 32.0342 6.50293 32.0342Z"
                fill="white"
              />
              <path
                d="M6.50293 50.7842C9.95471 50.7842 12.7529 47.986 12.7529 44.5342C12.7529 41.0824 9.95471 38.2842 6.50293 38.2842C3.05115 38.2842 0.25293 41.0824 0.25293 44.5342C0.25293 47.986 3.05115 50.7842 6.50293 50.7842Z"
                fill="white"
              />
            </svg>

            <p className="text-5xl font-bold">Design System</p>
            <p className="mt-1 text-3xl ">
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

export default ExpandingCards;
