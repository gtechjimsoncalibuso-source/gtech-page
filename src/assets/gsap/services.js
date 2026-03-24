
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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


export const chars = (target, delay = 0) => {
  if(!target) return;
  gsap.fromTo(target,
    { y: 100, opacity: 0 }, 
    { 
      delay,
      y: 0, 
      opacity: 1, 
      duration: 2.5, 
      stagger: 1, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: target, 
        start: "top 80%"
      }
    }
  );
}







