import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export const animateImageContainer = () => {
  const tl2 = gsap.timeline({ repeat: -1 });

  // Add tweens to the timeline
  tl2.fromTo(
    '.imgcontainer',
    {
      y: 10, // Initial position
    },
    {
      duration: 2,
      y: 30, // Move the div 20 pixels down
      ease: 'power1.inOut', // Easing function for smooth animation
    },
  );
  tl2.to('.imgcontainer', {
    duration: 2,
    y: 10, // Move the div back to its initial position
    ease: 'power1.inOut', // Easing function for smooth animation
  });
};

export const csimages = () => {
  const tl2 = gsap.timeline({ repeat: -1 });
  tl2.fromTo(
    '.csimg',
    {
      y: 10, // Initial position
    },
    {
      duration: 3,
      y: 30,
      ease: 'power1.inOut',
    },
  );
  tl2.to('.csimg', {
    duration: 3,
    y: 10,
    ease: 'power1.inOut',
  });
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

export const textColor = () => {
  const hoverTexts = document.querySelectorAll('.hover-text');

  hoverTexts.forEach((hoverText) => {
    const text = hoverText.textContent;

    // Split the text into individual characters, including spaces
    hoverText.innerHTML = text
      .split('')
      .map((letter) =>
        letter === ' ' ? `<span>&nbsp;</span>` : `<span>${letter}</span>`,
      )
      .join('');

    const letters = hoverText.querySelectorAll('span');

    hoverText.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX; // Get the X coordinate of the mouse pointer
      const mouseY = e.clientY; // Get the Y coordinate of the mouse pointer

      const maxDistance = 100;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect(); // Get the position of the letter on the screen

        const distance = Math.sqrt(
          Math.pow(mouseX - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY - (rect.top + rect.height / 2), 2),
        );

        const proximity = Math.max(0, (maxDistance - distance) / maxDistance); // Calculate proximity factor

        const startColor = { r: 254, g: 75, b: 16 }; // #FE4B10
        const endColor = { r: 254, g: 153, b: 0 }; // #FE9900
        const color =
          proximity > 0
            ? `rgb(${Math.round(
                startColor.r + (endColor.r - startColor.r) * proximity,
              )}, 
                          ${Math.round(
                            startColor.g +
                              (endColor.g - startColor.g) * proximity,
                          )}, 
                          ${Math.round(
                            startColor.b +
                              (endColor.b - startColor.b) * proximity,
                          )})`
            : '#555';
        gsap.to(letter, { duration: 0.3, color: color, ease: 'power2.Out' });
      });
    });

    hoverText.addEventListener('mouseleave', () => {
      letters.forEach((letter) => {
        gsap.to(letter, { duration: 0.3, color: '#555', ease: 'power1.Out' });
      });
    });
  });
};

export const largeImage = () => {
  // Ensure GSAP and ScrollTrigger are registered
  gsap.registerPlugin(ScrollTrigger);

  // Set up the scroll-triggered animation
  gsap.to('.image-container', {
    width: '90%', // Scale the image to 1.5 times its original size
    ease: 'none', // No easing
    scrollTrigger: {
      trigger: '.imgtrig ', // Trigger animation when scrolling within this container
      start: 'top 40%', // Start when the top of the container reaches the top of the viewport
      end: 'bottom 10%', // End when the bottom of the container reaches the top of the viewport
      scrub: true, // Link the animation progress to the scroll position
    },
  });
};

export const movingText = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.moving-text-1', {
    xPercent: -100,
    repeat: -1,
    delay: 1,
    duration: 40,
    ease: 'power1.in',
    modifiers: {
      xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100),
    },
  });

  gsap.to('.moving-text-2', {
    xPercent: 100,
    repeat: -1,
    delay: 1,
    duration: 40,
    ease: 'power1.in',
    modifiers: {
      xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100),
    },
  });

  gsap.utils.toArray('.image-card').forEach((card, i) => {
    // Create a timeline for each card
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 1%',
        delay: 1,
        end: 'bottom -50%', // Adjust the end point for better visibility
        toggleActions: 'play none none reverse',
        // Use markers to debug
      },
    });

    // Forward animation (when the card enters the viewport)
    tl.fromTo(
      card,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        delay: i * 0.7, // Staggering with timeline delay
      },
    );
  });

  gsap.fromTo(
    '.fontpopins', // Target the element with the class "font-semibold"
    { scale: 0.5 }, // Start from half the size
    {
      scale: 1, // Animate to the original size
      duration: 1,
      delay: 0.5, // Duration of the animation (adjust as needed)
      ease: 'power2.out', // Easing function for a smooth effect
      scrollTrigger: {
        trigger: '.fontpopins', // Trigger animation when this element enters the viewport
        start: 'top 10%', // When to start the animation
        end: 'bottom 80%', // When to end the animation
        toggleActions: 'play none none reverse', // Play the animation forward and reverse on scroll back
      },
    },
  );
};
