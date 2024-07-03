/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
// Utility function to preload images
const preloadImages = (selector: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const images = document.querySelectorAll(selector);
    const totalImages = images.length;
    let loadedImages = 0;

    if (totalImages === 0) {
      resolve(true);
    }

    images.forEach((img: Element) => {
      if (img instanceof HTMLImageElement) {
        if (img.complete) {
          loadedImages++;
          if (loadedImages === totalImages) {
            resolve(true);
          }
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              resolve(true);
            }
          };
        }
      }
    });
  });
};

const GridRevealPage: React.FC = () => {
  const workNavRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentContent, setCurrentContent] = useState<string | null>(null);

  // Function to calculate clip-path values based on the direction attribute
  const getClipPath = (direction: string) => {
    const clipPathDirections: { [key: string]: string } = {
      right: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      left: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      top: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      bottom: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    };

    return {
      from:
        clipPathDirections[direction] ||
        'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      to: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    };
  };

  // Function to toggle work content visibility
  const toggleWork = (href: string, isShowing: boolean) => {
    const contentElement = document.querySelector(href) as HTMLElement;
    if (!contentElement) return;

    const bgId = contentElement.dataset.bg;
    const bgElement = document.querySelector(`#${bgId}`) as HTMLElement;
    const contentTitle = contentElement.querySelector(
      '.content__title',
    ) as HTMLElement;
    const contentImages = Array.from(
      contentElement.querySelectorAll('.content__img'),
    ) as HTMLElement[];
    const contentInnerImages = Array.from(
      contentElement.querySelectorAll('.content__img-inner'),
    ) as HTMLElement[];

    if (isShowing) {
      gsap.set(contentElement, { zIndex: 1 });
      contentElement.classList.add('content--current');

      const tl = gsap.timeline({
        defaults: {
          duration: 0.95,
          ease: 'power4',
        },
      });

      tl.set(bgElement, { opacity: 1 })
        .fromTo(
          contentTitle,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1 },
          0,
        )
        .fromTo(
          contentImages,
          {
            xPercent: () => gsap.utils.random(-10, 10),
            yPercent: () => gsap.utils.random(-10, 10),
            filter: 'brightness(300%)',
            clipPath: (_index, target) =>
              getClipPath(target.dataset.dir || 'right').from,
          },
          {
            xPercent: 0,
            yPercent: 0,
            filter: 'brightness(100%)',
            clipPath: (_index, target) =>
              getClipPath(target.dataset.dir || 'right').to,
          },
          0,
        )
        .fromTo(contentInnerImages, { scale: 1.5 }, { scale: 1 }, 0);
    } else {
      gsap.set(contentElement, { zIndex: 0 });

      const tl = gsap.timeline({
        defaults: {
          duration: 0.95,
          ease: 'power4',
        },
        onComplete: () => {
          contentElement.classList.remove('content--current');
        },
      });

      tl.set(bgElement, { opacity: 0 }, 0.05)
        .to(contentTitle, { opacity: 0 }, 0)
        .to(
          contentImages,
          {
            clipPath: (_index, target) =>
              getClipPath(target.dataset.dir || 'right').from,
          },
          0,
        )
        .to(contentInnerImages, { scale: 1.5 }, 0);
    }
  };

  useEffect(() => {
    const workLinks = workNavRef.current?.querySelectorAll('a');
    const video = videoRef.current;
    const title = titleRef.current;

    if (!workLinks || !video || !title) return;

    workLinks.forEach((workLink) => {
      let hoverTimer: NodeJS.Timeout;

      workLink.addEventListener('mouseenter', (event) => {
        hoverTimer = setTimeout(() => {
          const href = (event.target as HTMLAnchorElement).getAttribute('href');
          if (href) {
            setCurrentContent(href);
            toggleWork(href, true);
          }
        }, 30);
      });

      workLink.addEventListener('mouseleave', (event) => {
        clearTimeout(hoverTimer);
        const href = (event.target as HTMLAnchorElement).getAttribute('href');
        if (href) {
          toggleWork(href, false);
          setCurrentContent(null);
        }
      });
    });

    const workNav = workNavRef.current;
    if (workNav) {
      workNav.addEventListener('mouseenter', () => {
        gsap.to([video, title], {
          duration: 0.6,
          ease: 'power4',
          opacity: 0,
        });
      });

      workNav.addEventListener('mouseleave', () => {
        gsap.to([video, title], {
          duration: 0.6,
          ease: 'sine.in',
          opacity: 1,
        });
      });
    }

    // Cleanup function
    return () => {
      workLinks.forEach((workLink) => {
        workLink.removeEventListener('mouseenter', () => {});
        workLink.removeEventListener('mouseleave', () => {});
      });
      workNav?.removeEventListener('mouseenter', () => {});
      workNav?.removeEventListener('mouseleave', () => {});
    };
  }, [toggleWork]);

  useEffect(() => {
    preloadImages('.content__img-inner').then(() => {
      document.body.classList.remove('loading');
    });
  }, []);
  const backgroundImages = ['beige1', 'red1', 'pink', 'beige2', 'red2'];

  return (
    <>
      <main>
        <div className="frame">
          <div className="frame__title"></div>
          <nav className="frame__works text-white" ref={workNavRef}>
            <a href="#content-1" className="text-white">
              Websites
            </a>
            <a href="#content-2">Web Apps</a>
            <a href="#content-3">Mobile Apps</a>
            {/* <a href="#content-4"></a>
            <a href="#content-5"></a> */}
          </nav>
          <div className="frame__menu"></div>
          <h3 className="frame__title-main text-white" ref={titleRef}>
            <span>Wolfiz</span> <span>Solution</span>
          </h3>
          <div className="frame__content">
            {[1, 2, 3, 4, 5].map((contentId) => (
              <div
                key={contentId}
                className="content"
                id={`content-${contentId}`}
                data-bg={`bg-${contentId}`}
              >
                <h2 className="content__title">
                  {contentId === 1 && 'Website'}
                  {contentId === 2 && 'Web Apps'}
                  {contentId === 3 && 'Mobile Apps'}
                  {contentId === 4 && 'Metamorph'}
                  {contentId === 5 && 'Prismatica'}
                </h2>
                {[1, 2, 3].map((imgId) => (
                  <div
                    key={imgId}
                    className={`content__img pos-${
                      (contentId - 1) * 3 + imgId
                    }`}
                    data-dir={['right', 'left', 'top'][imgId - 1]}
                  >
                    <div className="content__img-inner">
                      <Image
                        src={`https://tympanus.net/Development/HoverGrid/media/${
                          (contentId - 1) * 3 + imgId
                        }.jpg`}
                        alt={`Image ${(contentId - 1) * 3 + imgId}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="background">
        {[1, 2, 3, 4, 5].map((bgId) => (
          <div key={bgId} id={`bg-${bgId}`} className="background__image">
            <Image
              src={`https://tympanus.net/Development/HoverGrid/media/${
                backgroundImages[bgId - 1]
              }.jpg`}
              alt={`Background ${backgroundImages[bgId - 1]}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
        <video autoPlay muted loop className="background__video" ref={videoRef}>
          <source src="../../../bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <style jsx>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        :root {
          font-size: 12.5px;
          --color-text: #777674;
          --color-bg: #000;
          --color-link: #777674;
          --color-link-hover: #f4d88c;
          --page-padding: 1.5rem;
          --color-link-works: #fff;
          --color-link-works-hover: #f4d88c;
          --color-link-works-current: #eeae30;
          --color-title: #fff;
        }

        body {
          margin: 0 !important;
          color: var(--color-text) !important;
          background-color: black !important;
          font-family: 'Onest', sans-serif !important;
          font-optical-sizing: auto !important;
          text-transform: uppercase;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Page Loader */
        .js .loading::before,
        .js .loading::after {
          content: '';
          position: fixed;
          z-index: 10000;
        }

        .js .loading::before {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black !important;
        }

        .js .loading::after {
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          margin: -30px 0 0 -30px;
          border-radius: 50%;
          opacity: 0.4;
          background: var(--color-link);
          animation: loaderAnim 0.7s linear infinite alternate forwards;
        }

        @keyframes loaderAnim {
          to {
            opacity: 1;
            transform: scale3d(0.5, 0.5, 1);
          }
        }

        a {
          text-decoration: underline;
          color: var(--color-link);
          outline: none;
          cursor: pointer;
        }

        a:hover {
          text-decoration: none;
          color: var(--color-link-hover);
          outline: none;
        }

        /* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
        a:focus {
          /* Provide a fallback style for browsers
	 that don't support :focus-visible */
          outline: none;
          background: lightgrey;
        }

        a:focus:not(:focus-visible) {
          /* Remove the focus indicator on mouse-focus for browsers
	 that do support :focus-visible */
          background: transparent;
        }

        a:focus-visible {
          /* Draw a very noticeable focus style for
	 keyboard-focus on browsers that do support
	 :focus-visible */
          outline: 2px solid red;
          background: transparent;
        }

        .unbutton {
          background: none;
          border: 0;
          padding: 0;
          margin: 0;
          font: inherit;
          cursor: pointer;
        }

        .unbutton:focus {
          outline: none;
        }

        .frame {
          padding: var(--page-padding) !important;
          position: relative;
          min-height: 100vh;
          display: grid;
          z-index: 1000;
          width: 100%;
          grid-row-gap: 1rem;
          grid-column-gap: 2rem;
          justify-items: start;
          grid-template-columns: auto auto auto;
          grid-template-areas:
            'site year menu'
            'tagline tagline tagline'
            'contact contact contact'
            'works works works'
            'content content content'
            'title title title'
            'links links links';
        }

        .frame a {
          pointer-events: auto;
        }

        .frame__title {
          grid-area: title;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: end;
        }

        .frame__title h1 {
          font-size: inherit;
          margin: 0;
          font-weight: inherit;
        }

        .frame__tagline {
          grid-area: tagline;
          max-width: 220px;
          line-height: 1.4;
        }

        .frame__site {
          grid-area: site;
        }

        .frame__year {
          grid-area: year;
        }

        .frame__contact {
          grid-area: contact;
        }

        .frame__works {
          grid-area: works;
          display: flex;
          flex-direction: column;
          pointer-events: none;
          color: white !important;
          margin-left: 66px;
        }

        .frame__works span {
          margin-bottom: 1.5rem;
        }

        .frame__works a {
          pointer-events: auto;
          padding: 0.25rem 0;
          position: relative;
          font-size: 1.5rem;
          text-decoration: none;
          color: var(--color-link-works);
        }

        .frame__works a:hover {
          color: var(--color-link-works-hover);
        }

        .frame__works a.current {
          color: var(--color-link-works-current);
        }

        .frame__sponsors {
          grid-area: sponsors;
        }

        .frame__menu {
          grid-area: menu;
          justify-self: end;
          width: 30px;
          aspect-ratio: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: self-end;
          gap: 0.5rem;
        }

        .frame__menu::before {
          content: '';
          width: 100%;
          height: 1px;
          background: currentColor;
        }

        .frame__menu::after {
          content: '';
          width: 60%;
          height: 1px;
          background: currentColor;
        }

        .frame__links {
          grid-area: links;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-self: end;
        }

        .frame__content {
          grid-area: content;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-areas: 'content-item';
          color: white;
        }

        .frame__title-main {
          text-transform: none;
          line-height: 0.9;
          font-weight: 400;
          margin: 0;
          color: white !important;
          grid-area: content;
          color: var(--color-title);
          font-size: clamp(2rem, 8vw, 7rem) !important;
          display: grid;
          align-content: center;
          width: 100%;
          pointer-events: none;
        }

        .frame__title-main span:last-child {
          margin-left: 1em;
        }

        .content {
          pointer-events: none;
          position: relative;
          opacity: 0;
          grid-area: content-item;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(10, 1fr);
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .content--current {
          opacity: 1;
        }

        .content__title {
          position: relative;
          z-index: 10;
          text-transform: none;
          font-weight: normal;
          opacity: 0;
          grid-area: 1 / 2 / -1 / -2;
          width: 100%;
          height: 100%;
          display: grid;
          align-content: center;
          margin: 0;
          line-height: 1;
          color: var(--color-title);
          font-size: clamp(2rem, 10vw, 8rem) !important;
        }

        .no-js .content__title {
          opacity: 1;
        }

        .content__img {
          position: relative;
          will-change: clip-path, filter;
        }

        .content__img-inner {
          background-size: cover;
          background-position: 50% 0%;
          width: 100%;
          height: 100%;
        }

        .pos-1 {
          grid-area: 1 / 1 / 5 / 5;
        }
        .pos-2 {
          grid-area: 5 / 8 / 10 / 11;
        }
        .pos-3 {
          grid-area: 8 / 3 / 11 / 5;
        }

        .pos-4 {
          grid-area: 3 / 5 / 8 / 10;
        }
        .pos-5 {
          grid-area: 7 / 4 / 10 / 7;
        }
        .pos-6 {
          grid-area: 2 / 2 / 4 / 4;
        }

        .pos-7 {
          grid-area: 8 / 2 / 11 / 5;
        }
        .pos-8 {
          grid-area: 2 / 8 / 8 / 11;
        }
        .pos-9 {
          grid-area: 3 / 3 / 6 / 6;
        }

        .pos-10 {
          grid-area: 7 / 7 / 10 / 9;
        }
        .pos-11 {
          grid-area: 4 / 1 / 10 / 4;
        }
        .pos-12 {
          grid-area: 2 / 5 / 6 / 9;
        }

        .pos-13 {
          grid-area: 3 / 8 / 8 / 11;
        }
        .pos-14 {
          grid-area: 1 / 5 / 5 / 7;
        }
        .pos-15 {
          grid-area: 6 / 2 / 11 / 5;
        }

        .background {
          position: fixed;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          display: grid;
          z-index: -1;
          grid-template-areas: 'background';
          grid-template-columns: 100%;
          grid-template-rows: 100%;
          pointer-events: none;
          place-items: center;
          background-color: black;
        }

        .background__image {
          position: relative;
          z-index: 0;
          grid-area: background;
          background-size: cover;
          filter: brightness(0.2);
          width: 120%;
          height: 120%;
          opacity: 0;
        }

        .background__video {
          position: relative;
          z-index: 1;
          grid-area: background;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        @media screen and (min-width: 53em) {
          body {
            --page-padding: 2.5rem;
          }
          .frame {
            position: fixed;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 100%;
            grid-template-columns: 20% 15% 30% 1fr 1fr;
            grid-template-rows: auto auto 1fr 1fr auto;
            align-content: space-between;
            grid-template-areas:
              'tagline ... site year menu'
              'tagline content content content content'
              'contact content content content content'
              'works content content content content'
              'title title links links links';
          }
          .frame__contact {
            padding-top: 3rem;
          }
          .frame__links {
            gap: 2rem;
          }
          .frame__works {
            margin-bottom: 10vh;
          }
          .frame__title-main {
            grid-area: 5 / 3 / 2 / 6;
          }
        }
      `}</style>
    </>
  );
};

export default GridRevealPage;
