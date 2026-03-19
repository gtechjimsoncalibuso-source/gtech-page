import { useEffect, useRef } from "react";
import img from "../assets/images/joel_gumiranc.jpg";

import "../assets/css/pages/clients.css";
import "../assets/css/text.css";

import { initClientScroll } from "../assets/javascript/animations.js";

export default function Clients() {
  const images = [img, img, img, img, img, img, img];
  const rowRefs = useRef([]);

  useEffect(() => {
    initClientScroll(rowRefs.current);
  }, []);

  return (
    <section>
      {/* TOP GRID */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
                      py-4 sm:py-10 md:py-20 lg:py-30 xl:py-40
                      grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
        
        <div className="border-r p-5 flex items-center justify-center text-center">
          <h2 className="bg-gradient-to-r from-[#22A570] to-[#585858] 
                         bg-clip-text text-transparent leading-snug">
            Trusted by our Clients across Region 2
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-[clamp(200px,40vw,320px)] object-cover rounded-2xl"
            />
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
        <h3 className="text-center">Industries We Served</h3>

        <div className="grid md:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373]
                         flex flex-col justify-center 
                         h-[80px]"
            >
              <h3 className="text-center font-bold text-white">99</h3>
              <p className="text-center text-white">Field</p>
            </div>
          ))}
        </div>
      </div>

      
      {/* SCROLLING LOGOS */}
      <div className="w-full overflow-hidden py-5 space-y-6">
        {[0, 1, 2].map((rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            className="flex w-max"
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center
                  w-[140px] sm:w-[180px] md:w-[220px] lg:w-[250px]
                  h-[70px] sm:h-[90px] md:h-[100px] lg:h-[110px]
                  mx-10 md:mx-20 my-3"
              >
                <img
                  src={img}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}

        
      </div>
    </section>
  );
}