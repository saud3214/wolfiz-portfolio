import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black bg-clip-text">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/mobileapps/sr/Sequence 02.mp4"
        autoPlay
        loop
        muted
      />
      <div className=""></div>
      <div className="relative z-10 txtclass flex items-center justify-center bg-black">
        <h1 className=" text-[25vw] font-bold uppercase      text-white ">
          WORLD
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
