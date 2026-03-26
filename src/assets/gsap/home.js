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

export const chars = (target, delay = 0) => {
  if (!target) return;

  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  // If already processed, skip re-wrapping
  if (el.dataset.charsSplit) {
    const chars = el.querySelectorAll('.gt-char');
    gsap.fromTo(
      chars,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.02, delay, ease: 'power2.out' }
    );
    return;
  }

  const text = el.textContent || '';
  const nodes = Array.from(text).map((ch) => {
    if (ch === ' ') return '<span class="gt-char">&nbsp;</span>';
    return `<span class="gt-char">${ch}</span>`;
  });
  el.innerHTML = nodes.join('');
  el.dataset.charsSplit = '1';

  const chars = el.querySelectorAll('.gt-char');
  gsap.set(chars, { display: 'inline-block', y: 20, opacity: 0 });
  gsap.to(chars, { y: 0, opacity: 1, stagger: 0.02, delay, ease: 'power2.out' });
};