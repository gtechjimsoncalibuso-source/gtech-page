import { useEffect, useRef } from "react";
import { useState } from "react";

import c1 from '../assets/client-logo/client-1.jpg'
import c2 from '../assets/client-logo/client-2.png'
import c3 from '../assets/client-logo/client-3.png'
import c4 from '../assets/client-logo/client-4.png'
import c5 from '../assets/client-logo/client-5.png'
import c6 from '../assets/client-logo/client-6.png'
import c7 from '../assets/client-logo/client-7.png'
import c8 from '../assets/client-logo/client-8.png'
import c9 from '../assets/client-logo/client-9.png' 
import c10 from '../assets/client-logo/client-10.png'
import c11 from '../assets/client-logo/client-11.png'
import c12 from '../assets/client-logo/client-12.png'
import c13 from '../assets/client-logo/client-13.jpg'
import c14 from '../assets/client-logo/client-14.png'
import c15 from '../assets/client-logo/client-15.png'
import c16 from '../assets/client-logo/client-16.png'
import c17 from '../assets/client-logo/client-17.png'
import c18 from '../assets/client-logo/client-18.png'
import c19 from '../assets/client-logo/client-19.png'
import c20 from '../assets/client-logo/client-20.png'
import c21 from '../assets/client-logo/client-21.png'
import c22 from '../assets/client-logo/client-22.png'
import c23 from '../assets/client-logo/client-23.png'
import c24 from '../assets/client-logo/client-24.png'

import cDoc1 from '../assets/images/client-meeting1.jpg'
import cDoc2 from '../assets/images/client-meeting2.jpg'
import cDoc3 from '../assets/images/client-meeting3.jpg'
import cDoc4 from '../assets/images/client-meeting4.jpg'
import "../assets/css/text.css";

import {
  bottomTo,
  rightTo,
  leftTo,
  btBackOut,
  hover
} from "../assets/gsap/clients.js";

export default function Clients() {
  const clientDocs = [cDoc1, cDoc2, cDoc3, cDoc4];
  const [selectedImage, setSelectedImage] = useState(null);

  function elOnView(selector, callback) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.05) { // 5% visible
            callback(entry.target);   // call your function
            obs.unobserve(entry.target); // only once
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

    const screenVW = window.innerWidth;
    
    if(screenVW <= 640) {

      elOnView('.cl-s1-h', (el)=>bottomTo(el, 0));

      const container = document.querySelector('.cl-s1-c');
      if (container) {
        const children = container.children;
        Array.from(children).forEach((el, i) => {
          btBackOut(el, (i + 1) * 0.2); 
        });
      }


      elOnView('.cl-s2-h', (el)=>bottomTo(el, 0));
      elOnView('.cl-s2-c1', (el)=>btBackOut(el, 0.2));  
      elOnView('.cl-s2-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.cl-s2-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.cl-s2-c4', (el)=>btBackOut(el, 0.8));
      elOnView('.cl-s2-c5', (el)=>btBackOut(el, 1.0));

      // Apply hover directly to industry cards
      document.querySelectorAll('.client-industries').forEach((el) => hover(el));

      // Apply hover to client images
      document.querySelectorAll('.client-image').forEach((el) => hover(el));

      document.querySelectorAll('.client-logos').forEach((el) => hover(el));

    } else if(screenVW <= 1023) {

      elOnView('.cl-s1-h', (el)=>bottomTo(el, 0));

      const container = document.querySelector('.cl-s1-c');
      if (container) {
        const children = container.children;
        Array.from(children).forEach((el, i) => {
          btBackOut(el, (i + 1) * 0.2); 
        });
      }


      elOnView('.cl-s2-h', (el)=>bottomTo(el, 0));
      elOnView('.cl-s2-c1', (el)=>btBackOut(el, 0.2));  
      elOnView('.cl-s2-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.cl-s2-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.cl-s2-c4', (el)=>btBackOut(el, 0.8));
      elOnView('.cl-s2-c5', (el)=>btBackOut(el, 1.0));

      // Apply hover directly to industry cards
      document.querySelectorAll('.client-industries').forEach((el) => hover(el));

      // Apply hover to client images
      document.querySelectorAll('.client-image').forEach((el) => hover(el));

      document.querySelectorAll('.client-logos').forEach((el) => hover(el));
      
    } else {

      elOnView('.cl-s1-h', (el)=>bottomTo(el, 0));

      const container = document.querySelector('.cl-s1-c');
      if (container) {
        const children = container.children;
        Array.from(children).forEach((el, i) => {
          btBackOut(el, (i + 1) * 0.2); 
        });
      }


      elOnView('.cl-s2-h', (el)=>bottomTo(el, 0));
      elOnView('.cl-s2-c1', (el)=>btBackOut(el, 0.2));  
      elOnView('.cl-s2-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.cl-s2-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.cl-s2-c4', (el)=>btBackOut(el, 0.8));
      elOnView('.cl-s2-c5', (el)=>btBackOut(el, 1.0));

      // Apply hover directly to industry cards
      document.querySelectorAll('.client-industries').forEach((el) => hover(el));

      // Apply hover to client images
      document.querySelectorAll('.client-image').forEach((el) => hover(el));

      document.querySelectorAll('.client-logos').forEach((el) => hover(el));

      

      
    }

  }, []);

  return (
    <section>
      {/* TOP GRID */}
      <div id="clients" className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 scroll-mt-[80px]
                      py-4 sm:py-10 md:py-20 lg:py-30 xl:py-40
                      grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
        
        <div className="border-r p-5 flex items-center justify-center text-center">
          <h2 className="cl-s1-h bg-gradient-to-r from-[#22A570] to-[#585858] 
                         bg-clip-text text-transparent leading-snug">
            Trusted by our Clients across Region 2
          </h2>
        </div>

        <div className="cl-s1-c grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {clientDocs.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              onClick={() => setSelectedImage(img)}
              className="client-image w-full h-[clamp(200px,40vw,320px)] object-cover rounded-2xl 
              cursor-pointer 
             "
            />
          ))}

          {/*Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
              onClick={() => setSelectedImage(null)}
            >
              
            <button onClick={() => setSelectedImage(null)}
                    className="absolute top-30 right-10 sm:right-10 md:right-20 lg right:30-lg  z-[999] 
                              text-white text-2xl font-bold">
                              ✕
            </button>
            
              <div 
                className="w-[90vw] max-w-[500px] aspect-square flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  className="w-full h-full object-cover "
                />
              </div>

            </div>
          )}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
        <h3 className="cl-s2-h text-center mb-6 text-lg sm:text-xl md:text-2xl font-semibold">
          Industries We Served
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-1 md:gap-5 lg:gap-6">

          <div className="client-industries cl-s2-c1 rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] flex flex-col items-center justify-center h-[70px] sm:h-[80px] md:h-[100px] px-2 sm:px-3 md:px-4 text-center  ">
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">10</h3>
            <p className="text-white text-xs sm:text-sm md:text-base">Education</p>
          </div>

          <div className="client-industries cl-s2-c2 rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] flex flex-col items-center justify-center h-[70px] sm:h-[80px] md:h-[100px] px-2 sm:px-3 md:px-4 text-center  ">
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">10</h3>
            <p className="text-white text-xs sm:text-sm md:text-base">Cooperation</p>
          </div>

          <div className="client-industries cl-s2-c3 rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] flex flex-col items-center justify-center h-[70px] sm:h-[80px] md:h-[100px] px-2 sm:px-3 md:px-4 text-center  ">
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">10</h3>
            <p className="text-white text-xs sm:text-sm md:text-base">Healthcare</p>
          </div>

          <div className="client-industries cl-s2-c4 rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] flex flex-col items-center justify-center h-[70px] sm:h-[80px] md:h-[100px] px-2 sm:px-3 md:px-4 text-center  ">
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">10</h3>
            <p className="text-white text-xs sm:text-sm md:text-base">Others</p>
          </div>                

          

        </div>
      </div>


      <div>
        <div>
            <h5 className="text-center mb-[5rem]"></h5>
          </div>
        <div className="grid grid-cols-8 max-sm:grid-cols-4 max-lg:grid-cols-5 max-lg:grid-cols-6 max-xl:grid-cols-7
                      gap-2 sm:gap-5 md:gap-4 lg:gap-6 justify-items-center">       
          {[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24].map((img, i) => (
            <div key={i} className=" 
              w-[clamp(60px,10vw,120px)]
              h-[clamp(60px,10vw,120px)]
              sm:w-[clamp(70px,8vw,130px)]
              sm:h-[clamp(70px,8vw,130px)]
              md:w-[clamp(80px,6vw,140px)]
              md:h-[clamp(80px,6vw,140px)]
              flex items-center justify-center">
              <img 
                src={img} 
                alt={`client${i+1}`}
                className="client-logos w-full h-full object-contain "
              />
            </div>
          ))}
        </div>
      </div>
     
          

    </section>
  );
}