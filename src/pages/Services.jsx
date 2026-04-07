import { VscVscode } from "react-icons/vsc";
import { CiServer } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { PiNetwork } from "react-icons/pi";
import { MdOutlineVpnLock } from "react-icons/md";
import { GiFirewall } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";
import { BiCctv } from "react-icons/bi";
import { LuBoxes } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import '../assets/css/pages/services.css'
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaCode } from "react-icons/fa"; // temporary

import {  
    leftTo,
    rightTo,
    bottomTo,
    chars
} from '../assets/gsap/services.js';
import { btBackOut } from "../assets/gsap/about.js";

export default function services(){

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
        document.body.className = 'services'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    useEffect(() => {

        const screenVW = window.innerWidth;
        
        if(screenVW <= 640) {

            elOnView('.serv-s1-h', (el)=>chars(el, 0));
            elOnView('.serv-s1-l', (el)=>chars(el, 0.5));
            
            elOnView('.serv-card-gr2-1', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-2', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-3', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-4', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-5', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-6', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-7', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-8', (el)=>rightTo(el, 0, 0));

            elOnView('.serv-s3h', (el)=>bottomTo(el, 0));
            elOnView('.serv-s3l', (el)=>btBackOut(el, 0.4));

        } else if(screenVW <= 1023) {

            elOnView('.serv-s1-h', (el)=>chars(el, 0.5));
            elOnView('.serv-s1-l', (el)=>chars(el, 1));

            elOnView('.serv-card-gr2-1', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-2', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-3', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-4', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-5', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-6', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-7', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-8', (el)=>rightTo(el, 0, 0));      

            elOnView('.serv-s3h', (el)=>bottomTo(el, 0));
            elOnView('.serv-s3l', (el)=>btBackOut(el, 0.4));  

        } else {

            elOnView('.serv-s1-h', (el)=>chars(el, 0));
            elOnView('.serv-s1-l', (el)=>chars(el, 0.5));

            elOnView('.serv-card-gr2-1', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-2', (el)=>bottomTo(el, 0, 0));
            elOnView('.serv-card-gr2-3', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-4', (el)=>leftTo(el, 0, 0));
            elOnView('.serv-card-gr2-5', (el)=>bottomTo(el, 0, 0));
            elOnView('.serv-card-gr2-6', (el)=>rightTo(el, 0, 0));
            elOnView('.serv-card-gr2-7', (el)=>leftTo(el, 0, 0)); 
            elOnView('.serv-card-gr2-8', (el)=>bottomTo(el, 0, 0));

            elOnView('.serv-s3h', (el)=>bottomTo(el, 0));
            elOnView('.serv-s3l', (el)=>btBackOut(el, 0.4));

        }

    }, []);

    return(
        <main className='w-screen h-contain py-4 gap-[3rem]
        flex flex-col items-center'>

            <section id="services" className="w-full py-[1rem] scroll-mt-[80px]
            flex flex-col items-center
            text-center">
                <h3 className='serv-s1-h serv-h font-extrabold
                text-3xl'>Services We Offer</h3>
                <p className='serv-s1-l serv-l px-[50px] sm:px-[50px] md:px-[100px] lg:px-[300px]:'>G. Technology aimed to integrate technology to help humane society, which offers you satisfaction guaranteed and here are our services that we can offer.</p>
            </section>

            <section className='w-full min-h-[40rem] h-contain 
            gap-[2rem] max-lg:gap-[1.5rem] max-md:gap-[0.8rem]
            p-[2rem] max-lg:p-[0.5rem] max-md:p-[0.2rem]
            grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1
            items-center justify-center'>

                {/* <FaCode /> */}

                <div className="serv-card-gr2-1 serv-card-gr2 h-full row-span-2 p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem] rounded-[1rem]
                flex flex-col items-center">

                    <div className="w-full
                    flex-"><VscVscode  className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">System Development</h3>
                        <p className="serv-card-l ">Develop system software tailored based from client's business flow</p>
                    </div>
                </div>

                <div className="serv-card-gr2-2 serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center">

                    <div className="w-full
                    flex-"><CgWebsite  className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">Website Development</h3>
                        <p className="serv-card-l">Can develop secured and unbreachable websites both static and dynamic websites, for marketing and Web
                application sites</p>
                    </div>
                </div>

                <div className="serv-card-gr2-3 serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full
                    flex-"><CiServer  className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">Server Set up & Configuration</h3>
                        <p className="serv-card-l">Build and Configure both cloud and physical servers alike with impregnable defenses against cyber
                attacks</p>
                    </div>
                </div>

                <div className="serv-card-gr2-4 serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center">

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">Network Set up and Configuration</h3>
                        <p className="serv-card-l">Professionally configure's network to support impecable network communication</p>
                    </div>

                </div>

                <div className="serv-card-gr2-5 serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">VPN Setup and Configuration</h3>
                        <p className="serv-card-l">Configure Virtual Private Network for maximum data privacy and security of your business from the internet</p>
                    </div>
                </div>

                <div className="serv-card-gr2-6 serv-card-gr2 h-full row-span-2 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full
                    flex-"><FaCode className='serv-card-icon' /></div>

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">Firewall and Security Setup and Configuration</h3>
                        <p className="serv-card-l">Set up a premium security security and defense feature to prevent cyber attacks</p>
                    </div>
                </div>

                <div className="serv-card-gr2-7 serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">
                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">PC Repair and Installation</h3>
                        <p className="serv-card-l">Professionally identify, troubleshoot and resolve problems and issues in a faulty computer</p>
                    </div>
                </div>

                <div className="serv-card-gr2-8 serv-card-gr1 h-full row-span-1 rounded-[1rem] p-[3rem] max-lg:p-[1.5rem] gap-[2rem] max-lg:gap-[1rem]
                flex flex-col items-center ">

                    <div className="w-full gap-[2rem] max-lg:gap-[1rem]
                    flex flex-col justify-center-center">
                        <h3 className="serv-card-h text-start">CCTV Installation</h3>
                        <p className="serv-card-l">Install's CCTV systems for both home and business owners for surveillance and security purposes</p>
                    </div>
                </div>
            </section>

            <section className='w-full gap-[3rem] 
            px-[2.5rem] max-lg:px-[2rem] max-md:px-[1.5rem] max-sm:px-[1rem]
            flex justify-center items-center'>

                <div className="w-full rounded-[2rem]
                py-[3.5rem] max-lg:py-[3rem] max-md:py-[2.5rem] max-sm:py-[2rem]
                px-[3rem] max-lg:px-[2.5rem] max-md:px-[2rem] max-sm:px-[1.5rem]
                gap-[3.5rem]
                flex flex-col justify-center items-center
                bg-[#003224]">
                    <h3 className="serv-s3h text-[#ffffffe5] text-center font-bold">We Also Offers:</h3>

                    <div className="w-full gap-[2rem]
                    grid grid-cols-3 place-items-center">
                        <h5 className="serv-s3l text-center text-[#ffffffe5] font-medium">Book keeping</h5>
                        <h5 className="serv-s3l text-center text-[#ffffffe5] font-medium">Tax consultation</h5>
                        <h5 className="serv-s3l text-center text-[#ffffffe5] font-medium">Audits</h5>
                    </div>
                </div>

            </section>
        </main>
    )
}