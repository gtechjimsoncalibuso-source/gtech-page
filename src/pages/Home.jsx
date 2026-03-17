import { useEffect } from "react";
import "../assets/css/text.css";
import flexibleDeals from '../assets/home-images/idol.jpg';


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

      <div className="bg-[#003224] flex flex-wrap justify-center items-center px-4 py-20">
        <div className="flex flex-col items-center p-18">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            2010
          </h1>
          <p className="text-white text-center font-extralight">Since</p>
        </div>

        <div className="flex flex-col items-center p-18">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            10+
          </h1>
          <p className="text-white text-center font-extralight">
            Cities & <span className="block">Municipalities</span>
          </p>
        </div>

        <div className="flex flex-col items-center p-18">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
            20+
          </h1>
          <p className="text-white text-center font-extralight">Clients</p>
        </div>

        <div className="flex flex-col items-center p-18">
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
        <div className="flex flex-col md:flex-row items-center gap-6 mt-10 py-15 px-4">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 px-20">
                <img src={flexibleDeals} alt="Flexible Deals" className="w-150 h-auto rounded-lg" />
            </div>
            <div className="justify-center items-center px-20">
                 <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                   bg-clip-text text-transparent mb-2">
                    Flexible Deals
                    </h3>
                    <p>
                        With installment payments, you can break up the cost 
                        into manageable chunks and pay over a period of time that works best for you.
                    </p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-10 py-15 px-4">
            
            <div className="justify-center items-center px-20">
                 <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                   bg-clip-text text-transparent mb-2">
                    Flexible Deals
                    </h3>
                    <p>
                        With installment payments, you can break up the cost 
                        into manageable chunks and pay over a period of time that works best for you.
                    </p>
            </div>
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 px-20">
                <img src={flexibleDeals} alt="Flexible Deals" className="w-150 h-auto rounded-lg" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-10 py-15 px-4">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 px-20">
                <img src={flexibleDeals} alt="Flexible Deals" className="w-150 h-auto rounded-lg" />
            </div>
            <div className="justify-center items-center px-20">
                 <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                   bg-clip-text text-transparent mb-2">
                    Flexible Deals
                    </h3>
                    <p>
                        With installment payments, you can break up the cost 
                        into manageable chunks and pay over a period of time that works best for you.
                    </p>
            </div>
        </div>

        </div>
    </div>
  );
}
