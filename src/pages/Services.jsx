
import '../assets/css/pages/services.css'
import { useEffect } from 'react';

import { FaCode } from "react-icons/fa"; // temporary

export default function services(){

    useEffect(() => {
        document.body.className = 'services'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    return(
        <main className='w-screen h-contain p-4 gap-[5rem]
        flex flex-col items-center'>

            <section className="w-full py-[4rem]
            flex flex-col items-center
            text-center">
                <h3 className='serv-h font-extrabold
                text-3xl'>Services We Offer</h3>
                <p className='serv-l'>G. Technology aimed to integrate technology to help humane society, which offers you satisfaction guaranteed and here are our services that we can offer.</p>
            </section>

            <section className='w-full min-h-[40rem] h-contain 
            gap-[2rem] max-lg:gap-[1.5rem] max-md:gap-[0.8rem]
            p-[2rem] max-lg:p-[0.5rem] max-md:p-[0.2rem]
            grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1
            items-center justify-center'>

                {/* <FaCode /> */}

                <div className="serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center">

                    <div className="w-full
                    flex-"><FaCode color="white" className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>

                <div className="serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center">

                    <div className="w-full
                    flex-"><FaCode color="white" className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>

                <div className="serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full
                    flex-"><FaCode color="white" className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>

                <div className="serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center">

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>

                </div>

                <div className="serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>

                <div className="serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full
                    flex-"><FaCode color="white" className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>

                <div className="serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">
                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>

                <div className="serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h className="serv-card-h text-start">Website Development</h>
                        <h className="serv-card-l">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</h>
                    </div>
                </div>
            </section>

            <footer className='flex items-center'>
                <p className='text-center'>Copyright GTechnology.All Rights Reserved | Designed by GTechnology</p>
            </footer>

        </main>
    )
}