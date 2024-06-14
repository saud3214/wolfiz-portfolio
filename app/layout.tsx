import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <header className=" flex items-end justify-start fixed h-28 z-[9]">
          <div className=" font-bold fixed z-[1111] flex items-center justify-center  w-[12%]">
            <Link href={'/'}>
              <Image
                alt="logo"
                height={90}
                width={90}
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
