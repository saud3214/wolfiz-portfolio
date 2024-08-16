'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { setupScrollAnimation } from '@/app/(portfolio)/(webprojects)/webprojects/animation';
import useSmoothScroll from '@/app/components/ss';
import {
  SrLeft,
  SrRight,
  SrBottom,
  SrTop,
} from '@/app/components/revealelement';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '300', '500', '600'],
});

export default function Doroos() {
  useSmoothScroll();
  useEffect(() => {
    setupScrollAnimation();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex  ${urbanist.className} bg-black`}
      >
        <div className="  w-full  items-center justify-center flex   ">
          <div className=" grid grid-cols-12 items-center justify-center   w-11/12 ">
            <div className="flex  col-span-12 items-center justify-center flex-col  gap-3 p-10">
              <div className="h-[90vh] bg-drbg1 bg-cover bg-center bg-no-repeat flex items-center justify-center w-full  rounded-3xl ">
                <div className=" w-11/12 flex items-center justify-between ">
                  <div className="w-1/2  flex flex-col items-start justify-center gap-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                        Case Study
                      </div>
                      <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                        UI/UX Design
                      </div>
                      <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                        Learning App
                      </div>
                    </div>
                    <span className="text-9xl font-bold uppercase text-white ">
                      doroos
                    </span>
                    <span className="text-[45px] font-bold capitalize text-white ">
                      learning app case study
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center">
                    <div className="flex  items-center  relative  w-7/12   ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/iphone1.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center bg-[#053B3A] mt-10 rounded-3xl">
                <div className="flex  items-center   w-1/4  relative ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/logo.gif"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                    Case Study
                  </div>
                  <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                    UI/UX Design
                  </div>
                  <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                    Learning App
                  </div>
                  <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                    Branding
                  </div>
                  <div className="py-5  px-6 rounded-3xl bg-[#95E4E6]  flex items-center justify-center  text-2xl font-bold">
                    Mobile App Design
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-center py-20">
                  <div className="col-span-5 items-center justify-center flex">
                    <div className="flex  items-center  relative  w-9/12   ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/ss.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                  <div className="col-span-7 items-start justify-center flex flex-col ">
                    <div className="flex  items-center   relative  w-10/12  ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/pst2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-white text-2xl font-medium w-10/12 ">
                      Learners need personalized content, and educators struggle
                      to reach them. An intuitive app with diverse courses can
                      bridge this gap.
                    </span>
                  </div>

                  <div className="col-span-7 items-end justify-end text-end flex flex-col ">
                    <div className="flex  items-center   relative  w-10/12  ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/sst2.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <span className="text-white text-2xl font-medium w-10/12 ">
                      Our app connects learners with diverse courses, offering
                      personalized recommendations and flexible learning, while
                      helping educators reach a wider audience.
                    </span>
                  </div>
                  <div className="col-span-5 items-center justify-center flex">
                    <div className="flex  items-center  relative  w-9/12   ">
                      <Image
                        className=" relativepos  "
                        src="/mobileapps/doroos/ps.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-drbg2 bg-contain bg-no-repeat bg-right-top py-20 ">
                <div className="flex  items-center  relative  w-4/12   ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/dpt.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className=" w-full items-center justify-center flex gap-5 ">
                  <div className="grid grid-cols-12 items-center justify-center w-full ">
                    <div className="col-span-4 items-center justify-center flex">
                      <div className="h-80 w-96 bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                        <div className=" w-full items-end justify-end flex">
                          icon
                        </div>
                        <div className="flex flex-col text-white gap-3 ">
                          <span className="font-bold text-5xl"> Analyse</span>
                          <span className="font-semibold text-2xl">
                            User Research, User Interviews, Problem Statements
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-8 items-center justify-center flex">
                      <span className="font-medium text-xl text-white 2xl:w-7/12">
                        The design process for the learning app starts with
                        audience research and competitor analysis. Initial
                        concepts and wireframes are developed, followed by
                        creating interactive prototypes to test the user
                        journey. The user interface is designed for aesthetics,
                        usability, and consistency. User testing helps refine
                        the design, and detailed specifications are prepared for
                        developers. After launching, user feedback is collected
                        for ongoing improvements and future updates.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-center w-full pt-10 ">
                  <div className="col-span-4 items-center justify-center flex">
                    <div className="h-80 w-96 bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                      <div className=" w-full items-end justify-end flex">
                        icon
                      </div>
                      <div className="flex flex-col text-white gap-3 ">
                        <span className="font-bold text-5xl"> Define</span>
                        <span className="font-semibold text-2xl">
                          User Persona, Empathy Mapping
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 items-center justify-center flex">
                    <div className="h-80 w-96 bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                      <div className=" w-full items-end justify-end flex">
                        icon
                      </div>
                      <div className="flex flex-col text-white gap-3 ">
                        <span className="font-bold text-5xl"> Ideat</span>
                        <span className="font-semibold text-2xl">
                          User Flow, Information Architecture
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 items-center justify-center flex">
                    <div className="h-80 w-96 bg-[#2CB1A9] rounded-3xl items-center justify-between flex flex-col p-6 ">
                      <div className=" w-full items-end justify-end flex">
                        icon
                      </div>
                      <div className="flex flex-col text-white gap-3 ">
                        <span className="font-bold text-5xl"> Design</span>
                        <span className="font-semibold text-2xl">
                          Low/High Fidelity Wireframes, Prototyping
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center flex flex-col bg-drbg2 bg-contain bg-no-repeat bg-left-top py-20 ">
                <div className="flex  items-center  relative  w-4/12   ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/iat.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex  items-center  relative    pt-10 ">
                  <Image
                    className=" relativepos  "
                    src="/mobileapps/doroos/iap.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
