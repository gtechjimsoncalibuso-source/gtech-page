import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import banner6 from '../assets/banners/6.png';
import banner7 from '../assets/banners/7.png';
import banner8 from '../assets/banners/8.png';
import banner9 from '../assets/banners/9.png';
import banner10 from '../assets/banners/10.png';

import {  
    leftTo,
    rightTo,
    bottomTo
} from '../assets/gsap/services.js';


export default function Products(){

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

        elOnView('.pro-s1-h', el => bottomTo(el, 0));

        elOnView('.pro-s2c1', el => bottomTo(el, 0.2));
        elOnView('.pro-s2c2', el => bottomTo(el, 0.4));
        elOnView('.pro-s2c3', el => bottomTo(el, 0.6));
        elOnView('.pro-s2c4', el => bottomTo(el, 0.8));
        elOnView('.pro-s2c5', el => bottomTo(el, 1));

    }, []);

    return(
        <main className='w-screen h-contain py-4 gap-[3rem]
        flex flex-col items-center'>

            <section id="services" className="w-full py-[1rem] scroll-mt-[80px]
            flex flex-col items-center
            text-center">
                <h3 className='pro-s1-h serv-h font-extrabold
                text-3xl'>Software Products</h3>
            </section>

            <section className=" 
            p-[10px] sm:p-[10px] md:p-[20px] lg:p-[30px] 
            gap-[.5rem]
            grid grid-cols-3
            sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
                <div className='pro-s2c1'>
                    <Link to="/Gwise">
                    <img src={banner6} alt="Gwise"
                    className="w-full h-full object-cover rounded-xl "/>
                    </Link>                                 
                </div>
                <div className="pro-s2c2">
                    <Link to="/Accounting">
                    <img src={banner7} alt="Accounting"
                    className="w-full h-full object-cover rounded-xl "/>  
                    </Link>            
                </div>
                <div className="pro-s2c3">
                    <Link to="/Payroll">
                    <img src={banner8} alt="Payroll"
                    className="w-full h-full object-cover rounded-xl"/>
                    </Link>     
                </div>
                <div className="pro-s2c4">
                    <Link to="/Sales">
                    <img src={banner9} alt="Sales & Inventory"
                    className="w-full h-full object-cover rounded-xl "/>
                    </Link> 
                </div>
                <div className="pro-s2c5">
                     <Link to="/Enrollment">
                    <img src={banner10} alt="Enrollment"
                    className="w-full h-full object-cover rounded-xl "/> 
                    </Link> 
                </div>

            </section>

        </main>
    );
    
}