import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export function initCarouselAnimation(
  galleryRef,
  cardsRef,
  dragProxyRef,
  nextRef,
  prevRef
) {
  const cards = gsap.utils.toArray(cardsRef.current.children);

  let current = 0;
  let draggableInstance = null;

  function updateCarousel() {
    const screenWidth = window.innerWidth;
    let spacing;

    if (screenWidth < 640) {
      spacing = 120;
    } else if (screenWidth < 1024) {
      spacing = 180;
    } else {
      const cardWidth = cards[0].offsetWidth;
      spacing = cardWidth * 0.8;
    }

    cards.forEach((card, i) => {
      const offset = i - current;

      if (offset === 0) {
        gsap.to(card, {
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10, 
          pointerEvents: "auto",
          duration: 0.5,
        });
      } else if (offset === -1 || offset === cards.length - 1) {
        gsap.to(card, {
          x: -spacing,
          scale: screenWidth < 640 ? 0.85 : 0.7,
          opacity: 1,
          zIndex: 5, 
          pointerEvents: "none",
          duration: 0.5,
        });
      } else if (offset === 1 || offset === -(cards.length - 1)) {
        gsap.to(card, {
          x: spacing,
          scale: screenWidth < 640 ? 0.85 : 0.7,
          opacity: 1,
          zIndex: 5,
          pointerEvents: "none",
          duration: 0.5,
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.5,
          pointerEvents: "none",
          duration: 0.3,
        });
      }
    });
  }

  updateCarousel();

  const nextHandler = () => {
    current = (current + 1) % cards.length;
    updateCarousel();
  };

  const prevHandler = () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
  };

  nextRef.current?.addEventListener("click", nextHandler);
  prevRef.current?.addEventListener("click", prevHandler);

  const mm = gsap.matchMedia();

  mm.add("(max-width: 1024px)", () => {
    draggableInstance = Draggable.create(cardsRef.current, {
      type: "x",
      allowNativeTouchScrolling: false,
      dragResistance: 0.5,

      onDrag() {
        gsap.set(cardsRef.current, { x: 0 });
      },

      onRelease() {
        const threshold = 5;

        if (
          this.getDirection("start") === "left" &&
          Math.abs(this.x) > threshold
        ) {
          current = (current + 1) % cards.length;
        } else if (
          this.getDirection("start") === "right" &&
          Math.abs(this.x) > threshold
        ) {
          current = (current - 1 + cards.length) % cards.length;
        }

        gsap.set(cardsRef.current, { x: 0 });
        updateCarousel();
      },
    })[0];
  });

  return () => {
    nextRef.current?.removeEventListener("click", nextHandler);
    prevRef.current?.removeEventListener("click", prevHandler);

    if (draggableInstance) {
      draggableInstance.kill();
    }

    mm.revert();
  };
}