import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const HorizontalPinningSection: React.FC = () => {
  const sectionPinRef = useRef<HTMLDivElement>(null);
  const imageWrapperRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const initialiseGSAPScrollTriggerPinningHorizontal = () => {
      gsap.registerPlugin(ScrollTrigger);

      const sectionPin = sectionPinRef.current;

      if (sectionPin) {
        const containerAnimation = gsap.to(sectionPin, {
          scrollTrigger: {
            trigger: '#section_to-pin',
            start: 'top top',
            end: () => `+=${sectionPin.offsetWidth}`,
            pin: true,
            scrub: true,
          },
          x: () =>
            `-${
              sectionPin.scrollWidth - document.documentElement.clientWidth
            }px`,
          ease: 'none',
        });

        imageWrapperRefs.current.forEach((imageWrapper) => {
          if (imageWrapper) {
            gsap.to(imageWrapper, {
              scrollTrigger: {
                trigger: imageWrapper,
                start: 'left center',
                end: 'right center',
                containerAnimation: containerAnimation,
                toggleClass: {
                  targets: `.${imageWrapper.id}`,
                  className: 'active',
                },
              },
            });
          }
        });
      }
    };

    const initialiseLenisScroll = () => {
      const lenis = new Lenis({
        smoothWheel: true,
        duration: 1.2,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    };

    initialiseGSAPScrollTriggerPinningHorizontal();
    initialiseLenisScroll();
  }, []);

  const handleImageWrapperRef = (el: HTMLDivElement | null) => {
    if (el) {
      imageWrapperRefs.current.push(el);
    }
  };

  return (
    <section
      id="section_to-pin"
      className="grid-container full section section_to-pin four"
    >
      <div id="section_pin" ref={sectionPinRef} className="section_pin">
        <div className="content_wrapper">
          <h1>Lorem Horizontal.</h1>
        </div>
        <div
          id="image_wrapper_1"
          ref={handleImageWrapperRef}
          className="image_wrapper image_wrapper_1"
        >
          <img
            className="image"
            src="https://images.unsplash.com/photo-1516647768-31ff0cef8821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Lil' Image"
          />
        </div>
        <div
          id="image_wrapper_2"
          ref={handleImageWrapperRef}
          className="image_wrapper image_wrapper_2"
        >
          <img
            className="image"
            src="https://images.unsplash.com/photo-1516648064-ee10acfa64db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=863&q=80"
            alt="Lil' Image"
          />
        </div>
        <div
          id="image_wrapper_3"
          ref={handleImageWrapperRef}
          className="image_wrapper image_wrapper_3"
        >
          <img
            className="image"
            src="https://images.unsplash.com/photo-1516647072-a39e59e34b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Lil' Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalPinningSection;
