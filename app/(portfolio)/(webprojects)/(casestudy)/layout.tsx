'use client';
import React from 'react';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import Image from 'next/image';
import {
  AnimatedText,
  AnimatedText2,
  GradientFlowTextRzfx,
  BounceSpinText,
} from '../../../components/animatedtext';
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
      <header className="flex items-center justify-center fixed lg:h-24 h-16 z-[2] w-full">
        <div className="font-bold fixed  flex items-center justify-end w-[80%] text-right">
          <Link href="/webprojects" className="w-full text-2xl ">
            <GradientFlowTextRzfx text="Back" />
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <SpeedInsights />
    </>
  );
}
