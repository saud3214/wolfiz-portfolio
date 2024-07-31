'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { SlideFromRight } from '../../../../components/pagetransition';

const urbanist = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function SueChef() {
  useEffect(() => {});

  return (
    <SlideFromRight>
      <div
        className={` w-full  flex flex-col items-center justify-center flex-co ${urbanist.className}`}
      >
        <div className="  flex flex-col   overflow-hidden w-full  items-center justify-center  ">
          <div className="grid grid-cols-12 w-full   bg-scbg1 bg-cover bg-center bg-no-repeat lg:h-[120vh] h-[100vh] lg:pb-20 pb-10 ">
            <div className="flex col-span-12   ">
              <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center w-full">
                <div className="flex items-center  lg:w-[30%] lg:ps-20 w-1/2  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/logo.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
                <div className="lg:flex items-center  relative  lg:w-[60%] hidden">
                  <Image
                    className=" relativepos9 "
                    src="/mobileapps/sc/mobile.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
                <div className="lg:hidden items-center  relative  flex pt-10">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/mobile.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12  flex flex-col py-10 w-11/12 gap-4 lg:pt-20">
            <span className="lg:text-5xl text-2xl font-extrabold">
              Overview
            </span>
            <span className="lg:text-2xl text-lg   lg:w-1/2 ">
              Welcome to Suechef, your ultimate kitchen companion! Whether youre
              a culinary novice or a seasoned chef, our app is designed to make
              your cooking experience seamless and enjoyable. Discover delicious
              recipes tailored to the ingredients you have on hand, track your
              daily calorie intake effortlessly, and get real-time assistance
              with our voice assistant and chat help. Say goodbye to meal
              planning stress and hello to a healthier, tastier lifestyle with
              Suechef!
            </span>
          </div>
        </div>

        <div className="  flex flex-col   overflow-hidden w-full  items-center justify-center  ">
          <div className="grid grid-cols-12 w-full   bg-scbg2 bg-contain bg-center bg-no-repeat items-center justify-center  ">
            <div className="flex lg:flex-row flex-col col-span-12 items-center justify-around   ">
              <div className="flex items-center  relative lg:w-3/12 w-10/12 ">
                <Image
                  className=" relativepos "
                  src="/mobileapps/sc/mobile2.png"
                  alt="Background 1"
                  fill
                />
              </div>

              <div className=" flex flex-col  items-start lg:w-1/2 w-11/12 ">
                <div className="flex flex-col  items-start  ">
                  <span className="lg:text-5xl text-2xl font-extrabold pb-10">
                    Problem Statement
                  </span>
                  <span className="lg:text-2xl text-lg pb-10 lg:pe-20  ">
                    Welcome to Suechef, your ultimate kitchen companion! Whether
                    youre a culinary novice or a seasoned chef, our app is
                    designed to make your cooking experience seamless and
                    enjoyable. Discover delicious recipes tailored to the
                    ingredients you have on hand, track your daily calorie
                    intake effortlessly, and get real-time assistance with our
                    voice assistant and chat help. Say goodbye to meal planning
                    stress and hello to a healthier, tastier lifestyle with
                    Suechef!
                  </span>
                </div>
                <div className="flex items-center  relative  lg:w-10/12 w-full py-10 lg:py-0 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/ps.png"
                    alt="Background 1"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col   w-full  items-center justify-center  ">
          <div className="grid grid-cols-12 w-full   items-end  justify-center  lg:bg-scbg3 bg-scbg5 bg-cover bg-top  bg-no-repeat  lg:h-[100vh] h-[60vh]  pb-10  ">
            <div className="flex col-span-12 lg:items-end justify-center w-full  ">
              <div className="flex flex-col  items-start  w-11/12  ">
                <span className="lg:text-5xl text-2xl font-extrabold pb-10">
                  Solution Statement
                </span>
                <span className="lg:text-2xl text-lg lg:pb-10 lg:pe-20  lg:w-1/2 ">
                  Our app helps users discover recipes based on available
                  ingredients, easily track calories, and receive real-time
                  assistance via voice and chat. This simplifies meal planning,
                  promotes healthier eating, and reduces food waste.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col   w-full  items-center justify-center  ">
          <div className="grid grid-cols-12 w-full   items-center  justify-center   py-10  ">
            <div className="flex col-span-12 items-center justify-center w-full  ">
              <div className="flex flex-col  items-center  w-11/12  ">
                <span className="lg:text-5xl text-2xl font-extrabold pb-10">
                  Design Process
                </span>
                <div className="flex items-center  relative  lg:w-10/12 w-full ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/dp.png"
                    alt="Background 1"
                    fill
                  />
                </div>

                <div className="flex flex-col relative w-full items-center justify-center ">
                  <div className="flex items-center  relative  lg:w-11/12 w-full  pt-10 lg:pt-0 ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/dp2.png"
                      alt="Background 1"
                      fill
                    />
                  </div>
                  <div className="flex flex-col  items-start   lg:absolute lg:text-white text-black lg:bottom-[5%]  lg:left-[30%] xl:w-1/2   ">
                    <span className="lg:text-5xl text-2xl font-extrabold pb-10 pt-10 lg:pt-0">
                      Lifetime Pro Membership!
                    </span>
                    <span className="lg:text-2xl text-lg pb-10  lg:text-[#D9D9D9]   text-black ">
                      Experience the ultimate culinary journey with our Lifetime
                      Pro Membership! Unlock exclusive features, including
                      unlimited recipe discoveries, advanced calorie tracking,
                      personalized meal plans, and priority support. Invest once
                      and enjoy a lifetime of seamless, healthy cooking and meal
                      planning. Make every meal extraordinary with Pro
                      Membership!
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center  justify-center  w-full   lg:py-10 ">
                  <div className="flex items-start justify-start w-full lg:w-11/12">
                    <span className="lg:text-5xl text-2xl font-extrabold lg:py-10 ">
                      Style Guide
                    </span>
                  </div>
                  <div className="flex lg:flex-row flex-col items-center justify-between w-11/12 ">
                    <div className="flex items-center   relative  lg:w-1/3 w-2/3 ">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sc/abc.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                    <div className="flex items-center  relative lg:w-[60%] w-10/12 pt-10 lg:pt-0">
                      <Image
                        className=" relativepos "
                        src="/mobileapps/sc/colors.png"
                        alt="Background 1"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col   w-full  items-center justify-center  ">
          <div className="grid grid-cols-12 w-full   items-end  justify-center    pb-10 pt-10 lg:pt-0  ">
            <div className="flex col-span-12 items-end justify-end w-11/12  lg:pb-20 ">
              <span className="lg:text-5xl text-2xl font-extrabold lg:pb-20 mb-10 ">
                Mockups
              </span>
            </div>
            <div className="bg-scbg4 bg-cover bg-top  bg-no-repeat  flex lg:flex-row flex-col col-span-12 lg:h-[90vh]  ">
              <div className="flex items-center  relative  lg:w-2/3 w-full">
                <Image
                  className=" relativepos11  "
                  src="/mobileapps/sc/iphnes2.png"
                  alt="Background 1"
                  fill
                />
              </div>
              <div className="flex items-center  relative  lg:w-2/3 w-full">
                <Image
                  className=" relativepos10 "
                  src="/mobileapps/sc/iphones.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="  flex flex-col   w-full  items-center justify-center xl:pt-20 ">
          <div className="grid grid-cols-12 w-full   items-center  justify-center    pb-10 lg:pt-10  ">
            <div className="flex  flex-col col-span-12 items-center justify-center w-full  ">
              <span className="lg:text-5xl text-2xl font-extrabold xl:pt-20  pb-10">
                Testing
              </span>
              <div className="flex items-center  relative lg:w-10/12 w-11/12">
                <Image
                  className=" relativepos10"
                  src="/mobileapps/sc/testing.png"
                  alt="Background 1"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
