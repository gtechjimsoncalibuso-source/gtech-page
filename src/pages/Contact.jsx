import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import '../assets/css/pages/contact.css';

export default function Contact(){

  const leadRef = useRef(null);

  useEffect(() => {
    gsap.from(leadRef.current, {
      duration: 0.5,
      scale: 0,
      ease: "elastic.out(1, 0.6)",
      delay: 0.5
    });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h3 ref={leadRef} className="text-center text-xl">
        Gsap test
      </h3>
    </div>
  );
}