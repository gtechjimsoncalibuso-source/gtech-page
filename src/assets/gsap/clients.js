import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const leftTo = (target, delay =0, scrtr = 0) => {
    if(!target) return

    const config = {
        x: 0,
        delay: delay,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    }

    if(scrtr === 1){
        config.scrollTrigger = {
            trigger: target,
            start: 'top bottom'
        };
    }

    gsap.fromTo(target, 
        {
            x: -300,
            opacity: 0,
            delay: delay
        }, 
        config
    );

};

export const rightTo = (target, delay =0, scrtr = 0) => {
    if(!target) return

    const config = {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    }

    if(scrtr === 1){
        config.scrollTrigger = {
            trigger: target,
            start: 'top bottom'
        };
    }

    gsap.fromTo(target, 
        {
            x: 300,
            opacity: 0
        }, 
        config
    );

};

export const bottomTo = (target, delay = 0, scrtr = 0) => {
  if (!target) return;

  const config = {
    y: 0,
    opacity: 1,
    duration: 1,
    delay,
    ease: "power2.out"
  };

  if (scrtr === 1) {
    config.scrollTrigger = {
      trigger: target,
      start: 'top bottom'
    };
  }

  gsap.fromTo(
    target,
    {
      y: 200,
      opacity: 0
    },
    config
  );
};

export const btBackOut = (target, delay = 0, scrtr = 0) => {
  if (!target) return;

  const config = {
    y: 0,
    opacity: 1,
    duration: 1,
    delay,
    ease: "back.out"
  };

  if (scrtr === 1) {
    config.scrollTrigger = {
      trigger: target,
      start: 'top bottom'
    };
  }

  gsap.fromTo(
    target,
    {
      y: 200,
      opacity: 0
    },
    config
  );
};

// export const hover

export const duration = (target) => {
  if (!target) return;

  // set initial state
  gsap.set(target, { grayscale: 1, scale: 1 });

  target.addEventListener("mouseenter", () => {
    gsap.killTweensOf(target);
    gsap.to(target, { 
      scale: 1.05, 
      grayscale: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  target.addEventListener("mouseleave", () => {
    gsap.killTweensOf(target);
    gsap.to(target, { 
      scale: 1,
      grayscale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
};


  