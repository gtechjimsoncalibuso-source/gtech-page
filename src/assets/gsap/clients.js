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

export const hover = (target, delay = 0) => {
  if (!target) return;

  target.addEventListener("mouseenter", () => {
    gsap.to(target, { 
      scale: 1.1, 
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto"
    });
  });

  target.addEventListener("mouseleave", () => {
    gsap.to(target, { 
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
};




  