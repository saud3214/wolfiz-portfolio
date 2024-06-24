import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Pridi } from 'next/font/google';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Wolfiz Portfolio',
  description: 'Portfolio Projects',
};

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
        <header className="flex items-end justify-start fixed h-28 z-[9]">
          <div className="font-bold fixed z-[1111] flex items-center justify-center w-[15%]">
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
      </body>
    </html>
  );
}
