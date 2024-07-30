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
          <div className="grid grid-cols-12 w-full   bg-scbg1 bg-cover bg-center bg-no-repeat 2xl:h-[120vh] h-[100vh] pb-20  ">
            <div className="flex col-span-12   ">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center  w-[30%] ps-20  ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/logo.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
                <div className="flex items-center  relative  w-[60%]">
                  <Image
                    className=" relativepos9 "
                    src="/mobileapps/sc/mobile.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12  flex flex-col py-10 w-11/12 gap-4">
            <span className="text-5xl font-extrabold"> Overview</span>
            <span className="text-2xl  w-1/2 ">
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
            <div className="flex col-span-12 items-center justify-around   ">
              <div className="flex items-center  relative w-3/12 ">
                <Image
                  className=" relativepos "
                  src="/mobileapps/sc/mobile2.png"
                  alt="Background 1"
                  fill
                  priority
                />
              </div>

              <div className=" flex flex-col  items-start w-1/2 ">
                <div className="flex flex-col  items-start  ">
                  <span className="text-5xl font-extrabold pb-10">
                    Problem Statement
                  </span>
                  <span className="text-2xl pb-10 pe-20  ">
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
                <div className="flex items-center  relative  w-10/12 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/ps.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col   w-full  items-center justify-center  ">
          <div className="grid grid-cols-12 w-full   items-end  justify-center  bg-scbg3 bg-cover bg-top  bg-no-repeat  h-[100vh]  pb-10  ">
            <div className="flex col-span-12 items-end justify-center w-full  ">
              <div className="flex flex-col  items-start  w-11/12  ">
                <span className="text-5xl font-extrabold pb-10">
                  Solution Statement
                </span>
                <span className="text-2xl pb-10 pe-20  w-1/2 ">
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
                <span className="text-5xl font-extrabold pb-10">
                  Design Process
                </span>
                <div className="flex items-center  relative  w-10/12 ">
                  <Image
                    className=" relativepos "
                    src="/mobileapps/sc/dp.png"
                    alt="Background 1"
                    fill
                    priority
                  />
                </div>

                <div className="flex relative ">
                  <div className="flex items-center  relative   ">
                    <Image
                      className=" relativepos "
                      src="/mobileapps/sc/dp2.png"
                      alt="Background 1"
                      fill
                      priority
                    />
                  </div>
                  <div className="flex flex-col  items-start   absolute text-white bottom-[5%] left-[40%]  ">
                    <span className="text-5xl font-extrabold pb-10">
                      Lifetime Pro Membership!
                    </span>
                    <span className="text-2xl pb-10 pe-20   ">
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

                <div className="flex items-start  justify-start  w-full  ">
                  <span className="text-5xl font-extrabold pb-10">
                    Style Guide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFromRight>
  );
}
