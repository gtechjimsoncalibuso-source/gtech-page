import React, { useEffect, useRef } from "react";
import { initCarouselAnimation } from "../assets/javascript/carousel-animations";
import joel from "../assets/images/joel_gumiran.jpg";
import mart from "../assets/images/martc.jpg";
import philip from "../assets/images/philip.jpg";
import don from "../assets/images/donc.jpg";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import '../assets/css/pages/team.css';

export default function Carousel() {
  const galleryRef = useRef(null);
  const cardsRef = useRef(null);
  const dragProxyRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

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

  const images = [joel, mart, philip, don];
  
  const interns_img = [joel, joel, joel, joel, joel, joel];
  const interns = [
    {name: 'Harvey T. Agsalog', role: 'Panget'},
    {name: 'Harvey T. Agsalog', role: 'Panget'},
    {name: 'Harvey T. Agsalog', role: 'Panget'},
    {name: 'Harvey T. Agsalog', role: 'Panget'},
    {name: 'Harvey T. Agsalog', role: 'Panget'},
    {name: 'Harvey T. Agsalog', role: 'Panget'}
  ]

  const people = [
    { name: "Joel Gumiran", role: "Fullstack Developer" },
    { name: "Mart Silvestre", role: "Software Developer" },
    { name: "Rodolfo Tacang", role: "Web Developer" },
    { name: "Philip John Enrico L. Gonzales, CPA", role: "Accounting and Tax Consultant" },
  ];

  useEffect(() => {
      document.body.className = 'team'; 
      return () => {
      document.body.className = ''; 
      };
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
                           w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]
                            bg-center bg-cover bg-no-repeat shadow-xl overflow-hidden"
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
      py-[5rem]
      px-[5rem]
      flex flex-col">
        <h4 className="t-s2-h font-medium">GTechnology 2026 Interns</h4>
        <div className="w-full
        gap-[2rem]
        grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2">
          {interns_img.map((src, i) => (

            <div
              className="h-[30rem] rounded-[1rem] overflow-hidden
              flex flex-col justify-end shadow-xl
              bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="p-4 text-black">
                <h4 className="">{interns[i]?.name}</h4>
                <h5 className="">{interns[i]?.role}</h5>
              </div>
            </div>

          ))}
        </div>
      </section>

    </div>
  );
}