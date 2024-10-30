'use client';
import React from 'react';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Image from 'next/image';
export default function CasestudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use useEffect to apply styles to the body element
  React.useEffect(() => {
    // Save the current styles to restore them later
    const originalStyles = {
      height: document.body.style.height,
      overflowY: document.body.style.overflowY,
    };

    // Apply new styles
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';

    // Clean up: restore the original styles when the component unmounts
    return () => {
      document.body.style.height = originalStyles.height;
      document.body.style.overflowY = originalStyles.overflowY;
    };
  }, []);

  return (
    <>
      <header className="flex items-center justify-center fixed h-24 z-[2] w-full ">
        <div className="font-bold fixed  flex items-end justify-end w-[80%] text-right ">
          <a href="/mobileapps" className="w-full flex items-end justify-end ">
            <div className=" relative w-[8%] ">
              <Image
                className=" relativepos"
                src="/backn.png"
                alt="move down arrow"
                fill
              />
            </div>
          </a>
        </div>
      </header>
      <main>{children}</main>
      <SpeedInsights />
    </>
  );
}
