'use client';
import React from 'react';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
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
      <header className="flex items-end justify-start fixed h-28 z-[9]">
        <div className="font-bold fixed z-[1111] flex items-center justify-center w-[15%]">
          <Link href="/webprojects">
            <Image
              alt="logo"
              height={100}
              width={100}
              src="/svg/wolfizlogoblack.svg"
            />
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <SpeedInsights />
    </>
  );
}
