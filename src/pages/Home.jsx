import { useEffect } from "react";
import "../assets/css/text.css";
import flexibleDeals from '../assets/home-images/idol.jpg';
import { IoLogoWindows } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function Home() {
  useEffect(() => {
    document.body.className = "home";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-[#245C35] h-screen w-screen">
        <h1 className="home-tagline font-black text-center 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                       bg-clip-text text-transparent ">
          Provides digital solutions 
          <span className="block py-2">for your</span>
          <span className="block py-2">Digital Challenges</span>
        </h1>
      </div>

      <div className="bg-[#003224] flex flex-wrap justify-center items-center  
                      gap-[2rem] max-lg:gap-[4rem] max-md:gap-[5rem]
                      p-[12rem] max-lg:p-[5rem] max-md:p-[2rem]
                      grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="flex flex-col items-center ">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            2010
          </h1>
          <p className="text-white text-center font-extralight">Since</p>
        </div>

        <div className="flex flex-col items-center ">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            10+
          </h1>
          <p className="text-white text-center font-extralight">
            Cities & <span className="block">Municipalities</span>
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            20+
          </h1>
          <p className="text-white text-center font-extralight">Clients</p>
        </div>

        <div className="flex flex-col items-center ">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            30+
          </h1>
          <p className="text-white text-center font-extralight">Projects</p>
        </div>
      </div>
      <div className="py-10 bg-[#DBFFE6]">
        <h2 className="text-center font-semibold">Why Choose Us?</h2>
        <div className=" gap-[2rem] max-lg:gap-[4rem] max-md:gap-[5rem]
                      p-[5rem] max-lg:p-[5rem] max-md:p-[2rem]
                      grid grid-cols-2 max-lg:grid-cols-1 max-sm:grid-cols-1">
            <div className="items-center justify-center">
                <img src={flexibleDeals} alt="Flexible Deals" className="w-150 h-auto rounded-lg" />
            </div>
            <div className="flex flex-col justify-center">
                 <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                   bg-clip-text text-transparent mb-2">
                    Flexible Deals
                    </h3> 
                    <p className="text-sm sm:text-lg md:text-xl">
                        With installment payments, you can break up the cost 
                        into manageable chunks and pay over a period of time that works best for you.
                    </p>
            </div>
        </div>
        <div className=" gap-[2rem] max-lg:gap-[4rem] max-md:gap-[5rem]
                      p-[5rem] max-lg:p-[5rem] max-md:p-[2rem]
                      grid grid-cols-2 max-lg:grid-cols-1 max-sm:grid-cols-1">
            
            <div className="flex flex-col justify-center">
                 <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                   bg-clip-text text-transparent mb-2">
                    Flexible Deals
                    </h3>
                    <p className="text-sm sm:text-lg md:text-xl">
                        With installment payments, you can break up the cost 
                        into manageable chunks and pay over a period of time that works best for you.
                    </p>
            </div>
            <div className="">
                <img src={flexibleDeals} alt="Flexible Deals" className="w-150 h-auto rounded-lg" />
            </div>
        </div>
        <div className=" gap-[2rem] max-lg:gap-[4rem] max-md:gap-[5rem]
                      p-[5rem] max-lg:p-[5rem] max-md:p-[2rem]
                      grid grid-cols-2 max-lg:grid-cols-1 max-sm:grid-cols-1">
            <div className="">
                <img src={flexibleDeals} alt="Flexible Deals" className="w-150 h-auto rounded-lg" />
            </div>
            <div className="flex flex-col justify-center">
                 <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                   bg-clip-text text-transparent mb-2">
                    Flexible Deals
                    </h3>
                    <p className="text-sm sm:text-lg md:text-xl">
                        With installment payments, you can break up the cost 
                        into manageable chunks and pay over a period of time that works best for you.
                    </p>
            </div>
        </div>
        </div>
      <div className="bg-[#318049] 
                p-[5rem] max-lg:p-[4rem] max-md:p-[2rem]">

  <h1 className="text-center
                 text-sm sm:text-lg md:text-xl lg:text-2xl
                 mb-10 text-white"> Software Compatibility
                 </h1>

  <div className="grid 
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-4
                  gap-[2rem] max-md:gap-[3rem] 
                  p-[5rem] max-lg:p-[5rem] max-md:p-[2rem]">

    <div className="font-light flex flex-col items-center text-white text-xl ">
      <IoLogoWindows className="text-6xl sm:text-8xl md:text-10xl" />
      <p className="text-sm sm:text-lg md:text-xl">Windows</p>
    </div>

    <div className="font-light flex flex-col items-center text-white text-xl">
      <IoLogoAndroid className="text-6xl sm:text-8xl md:text-10xl" />
      <p className="text-sm sm:text-lg md:text-xl">Android</p>
    </div>

    <div className="font-light flex flex-col items-center text-white text-xl">
      <FaLinux className="text-6xl sm:text-8xl md:text-10xl" />
      <p className="text-sm sm:text-lg md:text-xl">Linux</p>
    </div>

    <div className="font-light flex flex-col items-center text-white text-xl">
      <FaApple className="text-6xl sm:text-8xl md:text-10xl" />
      <p className="text-sm sm:text-lg md:text-xl">MacOS</p>
    </div>

  </div>
</div>

          

      
    </div>
  );
}
