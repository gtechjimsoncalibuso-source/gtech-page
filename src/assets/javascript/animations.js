import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import Observer from "gsap/Observer";

gsap.registerPlugin(SplitText, Observer);

export function onView(el, anim, de = 0, ob = 0, th = 0.5) {
  const element = typeof el === "string" ? document.querySelector(el) : el;
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anim(element, de); 
          if (ob === 0) observer.unobserve(element); 
        }
      });
    },
    { threshold: th }
  );

  observer.observe(element);
}

export function lines(el, de = 0) {
  const element = typeof el === "string" ? document.querySelector(el) : el;
  if (!element) return;

  const split = SplitText.create(element, { type: "lines" });
  gsap.from(split.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8,
    delay: de,
    ease: "power3.out",
    stagger: 0.25,
  });
}

export function characters(el, de = 0) {
  const element = typeof el === "string" ? document.querySelector(el) : el;
  if (!element) return;

  const split = SplitText.create(element, { type: "chars" });
  gsap.from(split.chars, {
    x: 150,
    opacity: 0,
    duration: 0.5,
    delay: de,
    ease: "power4.out",
    stagger: 0.04,
  });
}

// gsap.from('#leadC', {
//     duration: 1.5,
//     scale: 0,
//     ease: "elastic.out(1, 0.6)",
//     delay: 0.7
// });



export const initClientScroll = (rows) => {
  rows.forEach((row, index) => {
    const isLeft = index % 2 === 0;

    if (isLeft) {
      // LEFT 
      gsap.fromTo(
        row,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 20,
          ease: "linear",
          repeat: -1,
        }
      );
    } else {
      // RIGHT 
      gsap.fromTo(
        row,
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 20,
          ease: "linear",
          repeat: -1,
        }
      );
    }
  });
};