'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Aclonica, Poppins } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';
import { csimages, backgroundimages } from '../../webprojects/animation';

import { AnimatedText2 } from '../../../../components/animatedtext';
const urbanist = Aclonica({
  subsets: ['latin'],
  weight: ['400'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});
export default function PFB() {
  useEffect(() => {
    csimages();
  });

  return (
    <SlideFromRight>
      <div
        className={` w-full items-center justify-center flex flex-col ${urbanist.className}`}
      >
        <div className="bg-pfb1 bg-cover bg-center bg-no-repeat   w-full items-center justify-center flex h-[100vh]">
          <div className="grid grid-cols-12 w-full  items-center justify-center  ">
            <div className="col-span-12 w-full flex flex-col  items-center justify-center bg-pfb2 bg-contain bg-center bg-no-repeat h-[560px] lg:text-6xl text-5xl ps-5 ">
              <div className="flex 2xl:w-[73%] w-full lg:gap-16 gap-2 items-center flex-wrap  ">
                <div className="hidden lg:block">
                  <AnimatedText2 text="Passion"></AnimatedText2>
                </div>
                <div className="ht text-transparent block lg:hidden">
                  <AnimatedText2 text="Passion"></AnimatedText2>
                </div>
                <div className="ht text-transparent">
                  <AnimatedText2 text="for Backing"></AnimatedText2>
                </div>
              </div>
            </div>
            <div className="flex col-span-12 items-center justify-center">
              <div className="flex items-center   lg:w-20 w-12  ">
                <Image
                  className=" relativepos "
                  src="/pfb/arrow.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10 ">
          <div className="grid grid-cols-12 w-full  items-center justify-center relative  ">
            <div className="col-span-12 w-full flex flex-col  items-center justify-center ">
              <div className="flex items-center  ">
                <Image
                  className=" relativepos5 "
                  src="/pfb/f1.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center  ">
                <Image
                  className=" relativepos6 "
                  src="/pfb/f2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center  ">
                <Image
                  className=" relativepos7 "
                  src="/pfb/f3.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center  ">
                <Image
                  className=" relativepos8 "
                  src="/pfb/f1.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex items-center lg:w-96 lg:py-20 w-56   ">
                <Image
                  className=" relativepos "
                  src="/pfb/logo.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className="flex flex-col items-start w-11/12 ">
                <div className="flex   items-center justify-center gap-5 pb-5 lg:pt-16">
                  <div className="flex items-center  w-10 ">
                    <Image
                      className=" relativepos "
                      src="/pfb/textblue.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <span className="lg:text-5xl text-3xl">Introduction</span>
                </div>
                <div className=" text-xl font-light w-full flex items-start justify-start lg:ps-16 ">
                  <span
                    className={` lg:w-3/4 items-center justify-center flex  ${poppins.className} `}
                  >
                    If you have been missing updates on this blog for a few
                    years, it’s because I started a baking app back in 2020.I
                    later embarked upon a career as a cookbook author and baking
                    personality. Engage in secure and moderated discussions,
                    ensuring a positive community atmosphere. Elevate your
                    experience and join a community committed to fostering
                    meaningful connections and valuable insights.
                  </span>
                </div>

                <div className="flex   items-center justify-center gap-5 pb-5 pt-20">
                  <div className="flex items-center  w-10 ">
                    <Image
                      className=" relativepos "
                      src="/pfb/textpink.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <span className="lg:text-5xl text-3xl">
                    About The project
                  </span>
                </div>
                <div className=" text-xl font-light w-full flex flex-col items-start justify-start lg:ps-16">
                  <span
                    className={` lg:w-3/4 items-center justify-center flex  ${poppins.className} `}
                  >
                    I am a Norwegian full-time blogger, author, lecturer,
                    photographer and home baker. I started blogging in 2010,
                    knowing little about the journey on which her blog would
                    take her. I later embarked upon a career as a cookbook
                    author and baking personality.
                  </span>
                  <div className=" flex  w-full pt-5 items-center justify-start gap-3">
                    <span className={` font-bold ${poppins.className} `}>
                      Visit Our Website
                    </span>
                    <div className="flex items-center w-6  ">
                      <Image
                        className=" relativepos "
                        src="/pfb/link.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>

                <div className="flex   items-center justify-center gap-5 pb-5 pt-20">
                  <div className="flex items-center  w-10 ">
                    <Image
                      className=" relativepos "
                      src="/pfb/textblue.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <span className="lg:text-5xl text-3xl">Design Process</span>
                </div>

                <div className="flex w-full items-center justify-start lg:ps-14 lg:pt-10 lg:pb-20">
                  <div className="flex items-center  lg:w-2/3    w-full">
                    <Image
                      className=" relativepos "
                      src="/pfb/dp.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-start justify-center flex pt-10">
          <div className="grid grid-cols-12 w-full  items-center justify-center  relative ">
            <div className="col-span-12 w-full flex flex-col  items-center justify-center ">
              <div className="flex items-center w-full   z-30  ">
                <Image
                  className=" relativepos "
                  src="/pfb/iphone1.jpg"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="items-start justify-around w-full flex flex-col lg:flex-row lg:pt-20 pt-5 lg:space-x-20">
                <div className="flex flex-col  items-center justify-center">
                  <span className="lg:text-5xl text-3xl ps-10 lg:ps-0">
                    Problem Statement
                  </span>
                  <span
                    className={` text-xl my-3 ps-10 ${poppins.className} flex  items-center justify-center`}
                  >
                    <ul className="list-disc p-5">
                      <li>Slow Loading Times.</li>
                      <li>Lack of User Interaction.</li>
                      <li>Poor Content Strategy.</li>
                      <li>Security Concerns.</li>
                      <li> Scalability and Performance. </li>
                    </ul>
                  </span>

                  <div className="flex items-center  lg:w-[80%] w-1/2  ">
                    <Image
                      className=" relativepos "
                      src="/pfb/ps2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
                <div className="h-36 bg-pink-200 w-1 lg:mt-20 hidden lg:block"></div>

                <div className="flex flex-col items-center justify-center">
                  <span className="lg:text-5xl text-3xl">Problem Solution</span>
                  <span
                    className={` text-xl my-3 ps-10 ${poppins.className} flex  items-center justify-center`}
                  >
                    <ul className="list-disc p-5">
                      <li>Modern Design and Responsive Layout.</li>
                      <li>Speed Optimization.</li>
                      <li>Only necessary content to be added.</li>
                      <li>Performance Monitoring and Reporting.</li>
                      <li>Compliance and Data Protection.</li>
                    </ul>
                  </span>
                  <div className="flex items-center  lg:w-3/4  w-1/2 ">
                    <Image
                      className=" relativepos "
                      src="/pfb/ps.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-start justify-center flex pt-10 bg-[#FFE4E4] ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="col-span-12  flex flex-col  items-start justify-start ">
              <div className="flex   items-center justify-start gap-5 pb-5 lg:pt-10">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">Project Overview </span>
              </div>
              <div className="flex w-full items-center justify-center py-5">
                <div className="flex w-11/12 items-center lg:justify-between justify-center ">
                  <div className="flex items-center lg:w-3/5 w-full   ">
                    <Image
                      className=" relativepos "
                      src="/pfb/po1.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="lg:flex items-center  w-1/4  hidden  ">
                    <Image
                      className=" relativepos "
                      src="/pfb/po.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="col-span-12  flex flex-col  items-start justify-start ">
              <div className="flex   items-center justify-start gap-5 pb-5 pt-10">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">
                  Typography & Colors
                </span>
              </div>
              <div className="flex w-full items-center justify-center py-5">
                <div className="flex lg:w-11/12 w-full items-center justify-center ">
                  <div className="flex items-center  lg:w-9/12 w-full  ">
                    <Image
                      className=" relativepos "
                      src="/pfb/abc.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="flex  w-full items-center justify-center py-10 ">
                <div className="flex  flex-col lg:flex-row w-11/12 items-center justify-center gap-5">
                  <div className=" flex w-72 h-72 rounded-full p-3 border border-[#6BC3C3]">
                    <div className="w-full h-full flex bg-[#CAE8F3] rounded-full "></div>
                  </div>

                  <div className=" flex w-72 h-72 rounded-full p-3 border border-[#6BC3C3]">
                    <div className="w-full h-full flex bg-[#3B3B3B] rounded-full "></div>
                  </div>

                  <div className=" flex w-72 h-72 rounded-full p-3 border border-[#6BC3C3]">
                    <div className="w-full h-full flex bg-[#000] rounded-full "></div>
                  </div>
                  <div className=" flex w-72 h-72 rounded-full p-3 border border-[#6BC3C3]">
                    <div className="w-full h-full flex bg-[#FFC9C9] rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="col-span-12  flex flex-col  items-start justify-start ">
              <div className="flex   items-center justify-start gap-5 pb-5 lg:pt-10">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">Project images </span>
              </div>
              <div className="flex w-full items-center justify-center py-5 bg-pfb3 bg-cover ">
                <div className="flex w-11/12 items-center justify-center ">
                  <div className="flex items-center   lg:w-11/12  w-full ">
                    <Image
                      className=" relativepos "
                      src="/pfb/ig.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10   ">
          <div className="grid grid-cols-12 w-full  items-center justify-center relative  ">
            <div className="col-span-12  flex flex-col  items-start justify-start ">
              <div className="flex   items-center justify-start gap-5 pb-5 lg:pt-10 lg:ps-20 ps-5">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">Wire frame </span>
              </div>
              <div className="flex w-full items-center justify-center  ">
                <div className="flex items-center   w-full   ">
                  <Image
                    className=" relativepos "
                    src="/pfb/wf.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10 bg-pfb4 bg-cover  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="col-span-12  flex flex-col  items-start justify-start ">
              <div className="flex   items-center justify-start gap-5 pb-5 lg:pt-10 ">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">Visual Design </span>
              </div>
              <div className="flex w-full items-center justify-center  ">
                <div className="flex items-center   lg:w-7/12 w-full  ">
                  <Image
                    className=" relativepos "
                    src="/pfb/laptop2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10 bg-pfb5 bg-cover bg-center  ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-center justify-center col-span-12  ">
              <div className="flex items-center  lg:w-10/12     w-full  ">
                <Image
                  className=" relativepos "
                  src="/pfb/wd.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex   items-center justify-start gap-5 pb-5 pt-10 w-full ">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">Mock up </span>
              </div>
              <div className="flex w-full items-center justify-around py-10">
                <div className="flex items-center  lg:w-[30%] w-1/2 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center  lg:w-1/3  w-1/2">
                  <Image
                    className=" relativepos "
                    src="/pfb/iphone3.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-center flex pt-10   ">
          <div className="grid grid-cols-12 w-11/12  items-center justify-center relative  ">
            <div className="flex flex-col w-full items-center justify-center col-span-12  ">
              <div className="flex   items-center justify-start gap-5 pb-5 lg:pt-10 w-full ">
                <div className="flex items-center  w-10 ">
                  <Image
                    className=" relativepos "
                    src="/pfb/textblue.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <span className="lg:text-5xl text-3xl">Usability Testing </span>
              </div>
              <div className="flex w-11/12 flex-col items-start text-2xl  ">
                <span
                  className={`${poppins.className} flex  items-center justify-center`}
                >
                  In the user test insight section, you should pay attention to
                  sections such as:
                </span>
                <span
                  className={` text-xl my-3 ps-10 ${poppins.className} flex  items-center justify-center`}
                >
                  <ul className="list-disc p-5">
                    <li>
                      Do users find it difficult to use the product or service ?
                    </li>
                    <li>Problems occurring during testing</li>
                    <li>Why do these problems happen ?</li>
                    <li>Performance Monitoring and Reporting.</li>
                    <li>
                      Based on feedback and insight to create edits that match
                      the wishes and desires of users
                    </li>
                  </ul>
                </span>
              </div>

              <div className="flex items-center justify-around w-full">
                <div className="flex items-center   ">
                  <Image
                    className=" relativepos "
                    src="/pfb/ut1.png"
                    alt="Background 1"
                    fill
                  />
                </div>
                <div className="flex items-center   ">
                  <Image
                    className=" relativepos "
                    src="/pfb/ut2.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>

              <div className="flex w-11/12 flex-col items-start text-2xl pt-10 ">
                <span
                  className={`${poppins.className} flex  items-center justify-center`}
                >
                  Summary of the solution after the second re-design:
                </span>
                <span
                  className={` text-xl my-3 ps-10 ${poppins.className} flex  items-center justify-center`}
                >
                  <ul className="list-disc p-5">
                    <li>How to fix the problem in the second time ?</li>
                    <li>What is the effect of second solution redesign ?</li>
                    <li>Why do these problems happen ?</li>
                    <li>Are the results consistent with the set goals ?</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
