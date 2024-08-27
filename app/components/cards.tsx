import React from 'react';
import Image from 'next/image';

interface HoverCardProps {
  iconSrc: string;
  iconSrcw: string;
  title: string;
  description: string;
  arrowImageSrc: string; // Add a prop for the arrow image
}

const HoverCard: React.FC<HoverCardProps> = ({
  iconSrc,
  iconSrcw,
  title,
  description,
  arrowImageSrc,
}) => {
  return (
    <div className="relative w-full border-gray-500 p-4 cursor-pointer group h-[60vh] border-2">
      <div className="transition-all duration-1000 bg-white group-hover:bg-[#20B4E3] p-10 h-full rounded-3xl flex flex-col items-start justify-between">
        <div className="flex items-start gap-5">
          {/* Arrow Image */}
          <div className="opacity-0 group-hover:opacity-100  transition-all duration-1000 transform  -translate-x-10 group-hover:translate-x-1">
            <Image
              src={arrowImageSrc}
              alt="Arrow"
              width={40} // Set the appropriate width for your arrow image
              height={40} // Set the appropriate height for your arrow image
              className="text-black group-hover:text-white"
            />
          </div>
          {/* Icon Images */}
          <Image
            src={iconSrc}
            alt={title}
            width={60}
            height={60}
            className="opacity-100 group-hover:opacity-0  transition-all duration-1000 transform group-hover:translate-x-10 -translate-x-16  "
          />
          <Image
            src={iconSrcw}
            alt={title}
            width={60}
            height={60}
            className="opacity-0 group-hover:opacity-100  transition-all duration-1000 transform  group-hover:-translate-x-20  translate-x-10"
          />
        </div>

        <div className="w-full flex pt-20 flex-col">
          {/* Title */}
          <h3 className="font-bold text-3xl text-black group-hover:text-white transition-all duration-1000 transform group-hover:-translate-y-1 translate-y-20 ">
            {title}
          </h3>
          {/* Description */}
          <p className="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-all  transform group-hover:-translate-y-1 translate-y-10  duration-1000 text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
