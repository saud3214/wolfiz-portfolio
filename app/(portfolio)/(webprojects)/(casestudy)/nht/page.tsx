'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Nht() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLLIElement>('ul.link-list li');
    const images = document.querySelectorAll<HTMLImageElement>(
      '.background-images-wrapper .layer',
    );
    let oldImage: HTMLImageElement | null = null;

    function addListeners(el: HTMLLIElement) {
      el.addEventListener('mouseover', () => {
        const index = el.dataset.index;
        if (index) {
          changeImage(images[parseInt(index)]);
        }
      });
      el.addEventListener('mouseout', () => {
        if (oldImage) {
          gsap.to(oldImage, {
            inset: 'revert-layer',
            opacity: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.outIn',
          });
        }
        oldImage = null;
      });
    }

    function changeImage(el: HTMLImageElement) {
      if (el !== oldImage) {
        const tl = gsap.timeline();

        tl.to(oldImage, { opacity: 0, scale: 1 }).to(
          el,
          { opacity: 1, scale: 1.1, duration: 0.6, ease: 'power2.outIn' },
          '<',
        );
        oldImage = el;
      }
    }

    links.forEach((el) => addListeners(el));
  }, []);

  return (
    <div>
      <Head>
        <title>Project list</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="background-images-wrapper">
        <div className="layer layer--default"></div>
        <Image
          className="layer"
          src="https://images.unsplash.com/photo-1626427223333-183395267453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background 1"
        />
        <Image
          className="layer"
          src="https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background 2"
        />
        <Image
          className="layer"
          src="https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background 3"
        />
        <Image
          className="layer"
          src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background 4"
        />

        <ul className="link-list">
          <li data-index="1">
            <Link href="/webprojects">
              <span>Web Apps</span>
            </Link>
          </li>
          <li data-index="2">
            <Link href="/webprojects">
              <span>Mobile Apps</span>
            </Link>
          </li>
          <li data-index="3">
            <Link href="/webprojects">
              <span>Websites</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
