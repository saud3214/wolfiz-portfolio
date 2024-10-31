'use client';
import React from 'react';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import Image from 'next/image';

import { Poppins } from 'next/font/google';
import { ArrowLeft } from 'lucide-react';

const popins = Poppins({
  subsets: ['latin'], // Adjust the subsets according to your needs
  weight: ['400', '700', '600'], // Add the weights you need
});
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
          <Link href="/" className="w-full flex items-end justify-end ">
            <button
              className={`flex  items-center justify-center gap-1 px-3 py-1 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-200 ${popins.className}`}
            >
              <ArrowLeft className="size-4" />
              <span className="font-medium ">Back</span>
            </button>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <SpeedInsights />
    </>
  );
}
