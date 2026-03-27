import React, { useEffect, useRef } from "react";
import { initCarouselAnimation } from "../assets/javascript/carousel-animations";
import joel from "../assets/images/joel_gumiran.jpg";
import mart from "../assets/images/martc.jpg";
import apollo from "../assets/images/sir apollo.png";
import philip from "../assets/images/philip.jpg";
import don from "../assets/images/donc.jpg";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import eros from '../assets/interns/eros.png';
import jim from '../assets/interns/jimson.jpg';
import rov from '../assets/interns/rov.jpg';
import jc from '../assets/interns/jc.jpg';
import jm from '../assets/interns/jaemark.png';
import hv from '../assets/interns/harvy.png';

import {
  bottomTo,
  rightTo,
  leftTo,
  btBackOut
} from "../assets/gsap/about.js";

import '../assets/css/pages/team.css';

export default function Carousel() {
  const galleryRef = useRef(null);
  const cardsRef = useRef(null);
  const dragProxyRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  function elOnView(selector, callback) {
      const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.05) { 
              callback(entry.target);   
              obs.unobserve(entry.target); 
          }
          });
      }, { threshold: 0.05 });

      document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }

  function elOnHover(selector, callback) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(el => {
          el.addEventListener('mouseenter', () => callback(el));
          el.addEventListener('touchstart', () => callback(el));
      });
  }

  useEffect(() => {
    const cleanup = initCarouselAnimation(
      galleryRef,
      cardsRef,
      dragProxyRef,
      nextRef,
      prevRef
    );

    return () => cleanup && cleanup();
  }, []);

  const images = [joel, mart, philip, don, apollo];
  const people = [
    { name: "Gumiran, Joel ", role: "CEO" },
    { name: "Silvestre, Mart", role: "Vice President" },
    { name: "Gonzales, Philip John Enrico L., CPA", role: "VP for Finance" },
    { name: "Tacang, Rodolfo ", role: "Corporate Secretary" },
    { name: "Vino, Apollo G. ", role: "Technical and IT Support" },
  ];
  ``
  const interns_img = [eros, jim, rov, jc, jm, hv];
  const interns = [
    {name: 'Ramirez, Eros Millard C.', role: 'Web Developer', school: "Saint Mary's University"},
    {name: 'Calibuso, Jimson Aaron A.', role: 'Web Developer', school: 'Isabela State University Cauayan City Campus'},
    {name: 'Domingo, Roever', role: 'Full Stack Developer', school: 'Isabela State University Cauayan City Campus'},
    {name: 'Chilagan, Jaycee G.', role: 'Full Stack Developer', school: 'Isabela State University Cauayan City Campus'},
    {name: 'Primero, Jaemark A.', role: 'Technical Writer', school: 'Isabela State University Cauayan City Campus'},
    {name: 'Agsalog, Harvy T.', role: 'App Developer', school: 'Isabela State University Cauayan City Campus'}
  ]

  useEffect(() => {
      document.body.className = 'team'; 
      return () => {
      document.body.className = ''; 
      };
  }, []);

  useEffect(() => {
    const screenVW = window.innerWidth;

    elOnView('.t-s2-h', (el)=>bottomTo(el, 0));

    const container = document.querySelector('.t-s2-c');
    if (container) {
      const children = container.children;
      Array.from(children).forEach((el, i) => {
        btBackOut(el, (i + 1) * 0.3); 
      });
    }
    
  }, []);

  return (
    <div className="bg-[#003224] not-[]:py-[2rem]">
      <div className="py-[2rem]">
        <h1 className="text-center bg-gradient-to-r from-[#22A570] to-[#ffffff] 
                         bg-clip-text text-transparent font-extrabold ">
          We Are G.Technology
        </h1>
        <h4 className="text-center bg-gradient-to-r from-[#22A570] to-[#ffffff] 
                         bg-clip-text text-transparent">
          Scaling Businesses, Exceeding Standards
        </h4>
      </div> 
      {/* #003224 */}

      {/* ✅ FIXED: removed h-screen + negative margins */}
      <div className="  py-0 sm:py-0 md:py-10 lg:py-20 flex items-center justify-center">
        <div
          ref={galleryRef}
          className="relative z-10 w-full max-w-6xl h-[500px] overflow-hidden mx-auto"
        >
          <ul
            ref={cardsRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {images.map((src, i) => (
              <li
                key={i}
                className="absolute top-1/2 left-1/2 
                           -translate-x-1/2 -translate-y-1/2
                           w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[30rem]
                            bg-center bg-cover bg-no-repeat shadow-xl overflow-hidden rounded-2xl"
                style={{ backgroundImage: `url(${src})` }}
              >
                <div className="absolute inset-0 bg-black/20 rounded"></div>

                <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                  <h5 className="text-lg sm:text-xl font-semibold">
                    {people[i]?.name}
                  </h5>
                  <p className="text-sm ">
                    {people[i]?.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {/* PREV */}
            <button ref={nextRef} className="
    hidden lg:flex
    absolute left-5 sm:left-10 md:left-20 top-1/2 -translate-y-1/2
    z-20
    w-12 h-12
    rounded-full
    bg-black/40 backdrop-blur-md
    border border-white/30
    text-white
    items-center justify-center
    hover:bg-black/60 transition
  "
>
  <WestIcon fontSize="small" />
</button>

{/* NEXT */}
<button
  ref={prevRef}
  className="
    hidden lg:flex
    absolute right-5 sm:right-10 md:right-20 top-1/2 -translate-y-1/2
    z-20
    w-12 h-12
    rounded-full
    bg-black/40 backdrop-blur-md
    border border-white/30
    text-white
    items-center justify-center
    hover:bg-black/60 transition
  "
>
  <EastIcon fontSize="small" />
</button>
        </div>
      </div>

      <section className="w-full bg-[#DBFFE6]
      gap-[3rem] 
      py-[5rem] max-xl:py-[4.5rem] max-lg:py-[4rem] max-md:py-[3.5rem] max-sm:py-[3rem]
      px-[5rem] max-xl:px-[4rem] max-lg:px-[3rem] max-md:px-[2rem] max-sm:px-[1rem]
      flex flex-col">
        <h4 className="t-s2-h font-medium">GTechnology 2026 Interns</h4>
        <div className="t-s2-c w-full
        gap-[2.5rem]  max-sm:gap-[0.5rem] max-md:gap-[1rem] max-lg:gap-[1.5rem] max-xl:gap-[2rem]
        grid grid-cols-3">
          {interns_img.map((src, i) => (

            <div key={i} className="relative rounded-[1rem] overflow-hidden
              h-[26rem] max-xl:h-[24rem] max-lg:h-[22rem] max-md:h-[20rem] max-sm:h-[18rem]
              shadow-xl bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
            >
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* bottom text */}
              <div className="absolute bottom-0 w-full p-4 text-white">
                <h4 className="t-s2-c-h font-normal drop-shadow-md">
                  {interns[i]?.name}
                </h4>
                <h5 className="t-s2-c-l2 font-light drop-shadow-sm">
                  {interns[i]?.school}
                </h5>
                <h5 className="t-s2-c-l font-light drop-shadow-sm">
                  {interns[i]?.role}
                </h5>
              </div>
            </div>

          ))}
        </div>
      </section>

    </div>
  );
}