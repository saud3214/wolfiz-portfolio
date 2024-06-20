import type { Metadata } from 'next';
import './globals.css';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wolfiz Portfolio',
  description: 'Portfolio Projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header className=" flex items-end justify-start fixed h-28 z-[9]">
          <div className=" font-bold fixed z-[1111] flex items-center justify-center  w-[14%]">
            <Link href={'/'}>
              <Image
                alt="logo"
                height={100}
                width={100}
                src="/svg/wolfizlogo.svg"
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
