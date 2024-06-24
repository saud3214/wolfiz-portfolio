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
      y: 30, // Move the div 20 pixels down
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

export const backgroundimages = () => {
  var links = document.querySelectorAll('ul.link-list li');
  var images = document.querySelectorAll('.background-images-wrapper .layer');
  var oldImage;

  function addListeners(el) {
    el.addEventListener('mouseover', function () {
      var index = el.dataset.index;
      changeImage(images[index]);
    });
    el.addEventListener('mouseout', function () {
      gsap.to(oldImage, {
        opacity: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.outIn',
      });
      oldImage = null;
    });
  }

  function changeImage(el) {
    if (el != oldImage) {
      var tl = gsap.timeline();
      tl.to(oldImage, { opacity: 0, scale: 1 }).to(
        el,
        { opacity: 1, scale: 1.1, duration: 0.6, ease: 'power2.outIn' },
        '<',
      );
      oldImage = el;
    }
  }

  window.onload = function () {
    links.forEach((el) => addListeners(el));
  };
};
