import { gsap } from 'gsap';

export const animateImageContainer = () => {
  const tl2 = gsap.timeline({ repeat: -1 });

  // Add tweens to the timeline
  tl2.fromTo(
    '.imgcontainer',
    {
      y: 10, // Initial position
    },
    {
      duration: 3,
      y: 20, // Move the div 20 pixels down
      ease: 'power1.inOut', // Easing function for smooth animation
    },
  );
  tl2.to('.imgcontainer', {
    duration: 3,
    y: 10, // Move the div back to its initial position
    ease: 'power1.inOut', // Easing function for smooth animation
  });

  // gsap.to('.imgcontainer2', {
  //   duration: 3,
  //   scaleY: 1.08, // Scale Y to 105%
  //   yoyo: true, // Reverse the animation
  //   repeat: -1, // Repeat indefinitely
  //   ease: 'power1.inOut', // Easing function for smooth animation
  // });
};

//
