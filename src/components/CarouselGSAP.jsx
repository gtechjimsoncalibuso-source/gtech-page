import { useEffect, useRef } from 'react';
import { initGallery } from '../javascript/gsap/gallery';

export default function CarouselGSAP({ banners = [], spacing = 0.1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initGallery(containerRef.current, banners, { spacing });
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, [banners]);

  return (
    <div ref={containerRef} className=" relative w-full h-[300px] sm:h-[300px] md:h-[450px] lg:h-[500px] overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center">
        <ul className="cards relative w-48 h-[18rem] md:w-60 md:h-[25rem] lg:w-80 lg:h-[30rem]">
          {banners.concat(banners).map((b, i) => (
            <li key={i} className="absolute top-0 left-0 rounded-lg overflow-hidden shadow-lg w-full h-full">
              <img src={b} alt={`slide-${i}`} className="w-full h-full object-cover block" />
            </li>
          ))}
        </ul>
      </div>
      {/* Buttons removed per request; navigation via drag now */}

      <div className="drag-proxy" />
    </div>
  );
}
