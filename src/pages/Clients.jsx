
import { useEffect, useState } from 'react';
import '../assets/css/pages/clients.css';
import img from '../assets/images/joel_gumiranc.jpg';
import '../css/Client.css'
export default function Clients() {
  const [value, setValue] = useState("Default Value"); 
 const images = [img, img, img, img, img, img, img];


  return (
    <section>
     <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
                py-4 sm:py-10 md:py-20 lg:py-30 xl:py-40
                grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
                  <div className="border-r p-5 flex items-center justify-center text-center">
                    <h2>Trusted by our Clients across Region 2</h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <img src={img} className="w-full h-[clamp(200px,40vw,320px)]  object-cover rounded-2xl" />
                    <img src={img} className="w-full h-[clamp(200px,40vw,320px)]  object-cover rounded-2xl" />
                    <img src={img} className="w-full h-[clamp(200px,40vw,320px)]  object-cover rounded-2xl" />
                    <img src={img} className="w-full h-[clamp(200px,40vw,320px)]  object-cover rounded-2xl" />
                  </div>
      </div>
      
      <div className='p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20'>
        <h3 className='text-center'>Industries We Served</h3>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-[1rem]'>
         <div className="rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] p-5">
            <h3 className='text-center font-bold text-white'>99</h3>
            <p className='text-center text-white'>Field</p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] p-5">
            <h3 className='text-center font-bold text-white'>99</h3>
            <p className='text-center text-white'>Field</p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] p-5">
            <h3 className='text-center font-bold text-white'>99</h3>
            <p className='text-center text-white'>Field</p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] p-5">
            <h3 className='text-center font-bold text-white'>99</h3>
            <p className='text-center text-white'>Field</p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#22A570] to-[#737373] p-5">
            <h3 className='text-center font-bold text-white'>99</h3>
            <p className='text-center text-white'>Field</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full overflow-hidden  relative py-5 ">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          {/* Fade Right */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

              <div className="flex w-max animate-scroll">
                {[...images, ...images].map((src, i) => (
                <div key={i} className="w-[250px] h-[100px] flex items-center justify-center">
                  <img src={img} className="h-full object-contain" />
                </div>
                 ))}
              </div>
        </div>
      </div>
    </section>
  );
}