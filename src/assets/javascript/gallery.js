// import gsap from 'gsap';


// gsap.registerPlugin(Draggable);

// export function initGallery(container, images = [], opts = {}) {
//   const cards = Array.from(container.querySelectorAll('.cards li'));
//   const nextBtn = container.querySelector('.next');
//   const prevBtn = container.querySelector('.prev');
//   const dragProxy = container.querySelector('.drag-proxy');

//   if (!cards.length) return () => {};

//   // spacing controls gap/offset between cards (smaller = tighter)
//   const spacing = typeof opts.spacing === 'number' ? opts.spacing : 0.06;
//   const snapTime = gsap.utils.snap(spacing);

//   const animateFunc = element => {
//     const tl = gsap.timeline();
//     tl.fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: 'power1.in', immediateRender: false })
//       .fromTo(element, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: 'none', immediateRender: false }, 0);
//     return tl;
//   };

//   const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
//   const playhead = { offset: 0 };
//   const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

//   const scrub = gsap.to(playhead, {
//     offset: 0,
//     onUpdate() {
//       seamlessLoop.time(wrapTime(playhead.offset));
//     },
//     duration: 0.5,
//     ease: 'power3',
//     paused: true
//   });

//   // Next / Prev simply advance the playhead offset
//   if (nextBtn) nextBtn.addEventListener('click', () => {
//     scrub.vars.offset = scrub.vars.offset + spacing;
//     scrub.invalidate().restart();
//   });
//   if (prevBtn) prevBtn.addEventListener('click', () => {
//     scrub.vars.offset = scrub.vars.offset - spacing;
//     scrub.invalidate().restart();
//   });

//   const draggable = Draggable.create(dragProxy || cards[0], {
//     type: 'x',
//     trigger: container.querySelector('.cards'),
//     onPress() {
//       this.startOffset = scrub.vars.offset;
//     },
//     onDrag() {
//       scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
//       scrub.invalidate().restart();
//     },
//     onDragEnd() {
//       // snap to nearest spacing when drag ends
//       scrub.vars.offset = snapTime(scrub.vars.offset);
//       scrub.invalidate().restart();
//     }
//   });

//   function buildSeamlessLoop(items, spacing, animateFunc) {
//     let overlap = Math.ceil(1 / spacing),
//       startTime = items.length * spacing + 0.5,
//       loopTime = (items.length + overlap) * spacing + 1,
//       rawSequence = gsap.timeline({ paused: true }),
//       seamlessLoop = gsap.timeline({
//         paused: true,
//         repeat: -1,
//         onRepeat() {
//           this._time === this._dur && (this._tTime += this._dur - 0.01);
//         }
//       }),
//       l = items.length + overlap * 2,
//       time, i, index;

//     for (i = 0; i < l; i++) {
//       index = i % items.length;
//       time = i * spacing;
//       rawSequence.add(animateFunc(items[index]), time);
//       i <= items.length && seamlessLoop.add('label' + i, time);
//     }

//     rawSequence.time(startTime);
//     seamlessLoop.to(rawSequence, {
//       time: loopTime,
//       duration: loopTime - startTime,
//       ease: 'none'
//     }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
//       time: startTime,
//       duration: startTime - (overlap * spacing + 1),
//       immediateRender: false,
//       ease: 'none'
//     });
//     return seamlessLoop;
//   }

//   // cleanup function
//   return () => {
//     try {
//       gsap.killTweensOf(playhead);
//       if (draggable && draggable.length) draggable.forEach(d => d.kill());
//     } catch (e) {
//       // ignore
//     }
//   };

// }
