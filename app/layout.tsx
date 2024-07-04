'use client';
import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Pridi } from 'next/font/google';
import Head from 'next/head';

const pridi = Pridi({
  subsets: ['latin'], // Adjust the subsets according to your needs
  weight: ['400', '700', '600'], // Add the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Wolfiz Portfolio</title>
        <meta name="description" content="Portfolio Projects" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={pridi.className}>
        <style jsx>{`
          .zindex {
            z-index: 9;
          }
        `}</style>
        <header className="flex items-end justify-start fixed h-28 zindex">
          <div className="font-bold fixed  flex items-center justify-center w-[15%]">
            <Link href="/">
              <Image
                alt="logo"
                height={100}
                width={100}
                src="/svg/wolfizlogo.svg"
              />
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <SpeedInsights />

        <footer className="bg-black h-16 p-10 flex text-white text-center justify-between">
          <span>© 2013 – 2024 All Rights Reserved by Wolfiz Solutions</span>
          <div className="flex gap-10 text-center">
            <span>Life at Wolfiz </span> <span> Privacy Policy </span>
            <span> Terms & Conditions</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
