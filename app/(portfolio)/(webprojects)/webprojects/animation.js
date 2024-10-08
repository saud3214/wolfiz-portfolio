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
export const movingText2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    '.fontpopins2', // Target the element with the class "font-semibold"
    { scale: 0.5 }, // Start from half the size
    {
      scale: 1, // Animate to the original size
      duration: 1,
      delay: 0.5, // Duration of the animation (adjust as needed)
      ease: 'power2.out', // Easing function for a smooth effect
      scrollTrigger: {
        trigger: '.fontpopins2', // Trigger animation when this element enters the viewport
        start: 'top 70%', // When to start the animation
        end: 'bottom 70%', // When to end the animation
        toggleActions: 'play none none reverse', // Play the animation forward and reverse on scroll back
      },
    },
  );
};
export const simiReizen = () => {
  gsap.registerPlugin(ScrollTrigger);
  document
    .querySelector('.content1')
    .addEventListener('mousemove', function (e) {
      var moveinX = (e.pageX * -1) / 200;
      var moveinY = (e.pageY * -1) / 200;
      this.style.backgroundPosition = moveinX + 'px ' + moveinY + 'px';
    });

  // gsap.fromTo(
  //   '.svg2', // Target the element with the class "font-semibold"
  //   { x: -200, opacity: 0 }, // Start from half the size
  //   {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,

  //     ease: 'power2.out', // Easing function for a smooth effect
  //     scrollTrigger: {
  //       trigger: '.svgcontainer', // Trigger animation when this element enters the viewport
  //       start: 'top 50%', // When to start the animation
  //       end: 'bottom 80%', // When to end the animation
  //       toggleActions: 'play none none reverse', // Play the animation forward and reverse on scroll back
  //       markers: true,
  //     },
  //   },
  // );
};

export const setupSvgInteractions = () => {
  const svgs = document.querySelectorAll('.svg');

  svgs.forEach((svg) => {
    const handleMouseOver = () => {
      const box = svg.closest('div.box');
      const paths = box.querySelectorAll('svg path');

      if (paths.length > 2) {
        paths[0].setAttribute('fill', '#0C648D');
        paths[1].setAttribute('fill', '#07AAF6');
        paths[2].setAttribute('fill', '#0C648D');
      }
    };

    const handleMouseOut = () => {
      const box = svg.closest('div.box');
      const paths = box.querySelectorAll('svg path');

      if (paths.length > 2) {
        paths[0].setAttribute('fill', '#A2A2A3');
        paths[1].setAttribute('fill', '#D2D2D2');
        paths[2].setAttribute('fill', '#A2A2A3');
      }
    };

    svg.addEventListener('mouseover', handleMouseOver);
    svg.addEventListener('mouseout', handleMouseOut);

    // Cleanup event listeners
    return () => {
      svg.removeEventListener('mouseover', handleMouseOver);
      svg.removeEventListener('mouseout', handleMouseOut);
    };
  });
};

export const setupScrollAnimation = () => {
  gsap.utils.toArray('.svg').forEach((svg, index) => {
    gsap.fromTo(
      svg,
      { opacity: 0, x: -100 }, // Starting state
      {
        opacity: 1, // Ending state
        x: 0,
        duration: 1,
        delay: index * 0.2, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.svgcontainer',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 60%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      },
    );
  });
};

export const ColorBlocks = () => {
  <div className="flex justify-center items-center min-h-screen bg-white">
    <div className="relative w-96 h-96 group">
      {/* Pink Div */}
      <div className="absolute inset-0 bg-[#EF23A1] transition-all duration-300 group-hover:bg-[#000000] rounded-lg"></div>

      {/* Blue Div */}
      <div className="absolute inset-4 bg-[#07AAF6] transition-all duration-300 group-hover:bg-[#FFFFFF] rounded-lg"></div>

      {/* Yellow Div */}
      <div className="absolute inset-8 bg-[#F7D239] transition-all duration-300 group-hover:bg-[#CCCBC7] rounded-lg"></div>
    </div>
  </div>;
};

export const animation1 = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.rite').forEach((rite, index) => {
    gsap.fromTo(
      rite,
      { opacity: 0, x: -200 }, // Starting state
      {
        opacity: 1, // Ending state
        x: 0,
        duration: 1,
        delay: index * 0.3, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.animationcontainer',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 60%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      },
    );
  });
};

export const animation2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.lift2').forEach((lift2, index) => {
    gsap.fromTo(
      lift2,
      { opacity: 0, x: -200 }, // Starting state
      {
        opacity: 1, // Ending state
        x: 0,
        duration: 1,
        delay: index * 0.4, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.animationcontainer2',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 30%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      },
    );
  });
};

export const animation3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.lift2').forEach((lift2, index) => {
    gsap.fromTo(
      lift2,
      { opacity: 0, x: -200 }, // Starting state
      {
        opacity: 1, // Ending state
        x: 0,
        duration: 1,
        delay: index * 0.4, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.animationcontainer2',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 30%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      },
    );
  });
};

export const animation4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.rite2').forEach((rite2, index) => {
    gsap.fromTo(
      rite2,
      { opacity: 0, x: 200 }, // Starting state
      {
        opacity: 1, // Ending state
        x: 0,
        duration: 1,
        delay: index * 0.3, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.animationcontainer2',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 30%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      },
    );
  });
};

export const ScrollOnTop = () => {
  gsap.utils.toArray('.topimg').forEach((topimg, index) => {
    gsap.fromTo(
      topimg,
      { opacity: 0, y: 200 }, // Starting state
      {
        opacity: 1, // Ending state
        y: 0,
        duration: 0.9,
        delay: index * 0.3, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.topimgcon',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 50%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
          markers: true,
        },
      },
    );
  });

  gsap.utils.toArray('.botmimg').forEach((botmimg, index) => {
    gsap.fromTo(
      botmimg,
      { opacity: 0, y: -200 }, // Starting state
      {
        opacity: 1, // Ending state
        y: 0,
        duration: 0.9,
        delay: index * 0.3, // Adjust the delay for the wave effect
        scrollTrigger: {
          trigger: '.topimgcon',
          start: 'top 80%', // Start animation when the top of the element hits the bottom of the viewport
          end: 'bottom 50%', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      },
    );
  });
};

export const vienna = () => {
  document
    .querySelector('.content1')
    .addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect(); // Get the position of the container
      const mouseX = e.clientX - rect.left; // Mouse position relative to container
      const mouseY = e.clientY - rect.top;

      const images = this.querySelectorAll('img');

      images.forEach((image, index) => {
        const depth = index + 1;
        const moveinX = (-1 * (mouseX - rect.width / 2)) / (10 + depth * 10); // Invert movement by multiplying by -1
        const moveinY = (-1 * (mouseY - rect.height / 2)) / (10 + depth * 10);

        gsap.to(image, {
          x: moveinX,
          y: moveinY,
          // rotation: moveinX / 5, // Consistent rotation effect
          duration: 0.6, // Faster response for a more dynamic feel
          ease: 'power3.out',
        });
      });
    });
};
