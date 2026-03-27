
import { useEffect } from 'react';
import { useState } from "react";
import '../assets/css/pages/about.css';
import ab_c1 from '../assets/images/ab-c2.png';
import ab_c11 from '../assets/images/ab-c11.png';
import ab_c12 from '../assets/images/ab-c12.png';
import { FaTimeline } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import '../css/About.css';
import { useLocation } from "react-router-dom";

import {
  bottomTo,
  rightTo,
  leftTo,
  btBackOut
} from "../assets/gsap/about.js";

export default function about(){

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const projects = [
       {
      description: "Checking System at Rural Bank Cauayan",
      location: "Cauayan City, Isabela",
      year: "2010",
      side: "left",
    },
    {
      description: "Scholarship Matrix of CHED (Commission on Higher Education) Region II",
      location: "Isabela",
      year: "2010",
      side: "right",
    },
    {
      description: "Record Management System for Dayos Hospital",
      location: "Roxas, Isabela",
      year: "2011",
      side: "left",
    },
    {
      description: "Attendance Monitoring System of Isabela State University-Roxas and Cabagan Campus",
      location: "Roxas & Cabagan, Isabela",
      year: "2011 - Present",
      side: "right",
    },
    {
      description: "SARIAS (Student Automated Registration Information and Accounting System) for Isabela State University Roxas and Cabagan Campus",
      location: "Roxas & Cabagan, Isabela",
      year: "2012 - Present",
      side: "left",
    },
     {
      description: "Online Grading, inquiry and evaluation system for ISU Cabagan and Roxas Campus",
      location: "Roxas & Cabagan, Isabela",
      year: "2013",
      side: "right",
    },
    {
      description: "Automated Voting System for SSC/SBO of Isabela State University Roxas Campus",
      location: "Roxas, Isabela",
      year: "2014",
      side: "left",
    },
    {
      description: "Technical Activity Board System",
      location: "Isabela",
      year: "2014",
      side: "right",
    },
    {
      description: "Attendance Monitoring System for Isabela State University Cauayan City Campus",
      location: "Cauayan City, Isabela",
      year: "2014",
      side: "left",
    },
    {
      description: "Hardware Sales and Inventory System of RJU Hardware",
      location: "Jones, Isabela",
      year: "2016",
      side: "right",
    },
    {
      description: "Human Resource Management System with Payroll at Rural Bank Cauayan",
      location: "Cauayan City, Isabela",
      year: "2019 - Present",
      side: "left",
    },
    {
      description: "Computer Parts Sales and Inventroy System of Tech Buddy Cauayan",
      location: "Cauayan City, Isabela",
      year: "2020",
      side: "right",
    },
        
    ];

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

    const [s4c, setS4c] = useState(0);

    useEffect(() => {
        document.body.className = 'about'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    const spec = (
        <div className="w-full 
        px-[5rem] max-xl:px-[4rem] max-lg:px-[3rem] max-md:px-[2rem] max-sm:px-[1rem] 
        gap-x-[2rem] max-xl:gap-x-[1.5rem] max-lg:gap-x-[1rem] max-md:gap-x-[0.5rem] max-sm:gap-x-[0rem] 
        gap-y-[1.2rem] max-xl:gap-y-[1rem] max-lg:gap-y-[0.8rem] max-md:gap-y-[0.6rem] max-sm:gap-y-[0.4rem] 
        grid grid-cols-2 max-lg:grid-cols-1
        place-content-center ">

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                Set up and Configured Server since 2012 using Microsoft and Linux Server.
            </h3>            

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                Set up and Configured Database Server since 2012 using MariaDB, MySQL Server, and Microsoft.
            </h3>            

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                Set up and Configured Web Server since 2012 using IIS, Apache.
            </h3>                  

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                Set up and install SSL Certificate for Security.
            </h3>         

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                PC Repair and Troubleshooting.
            </h3>         

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                Network set up and configuration. Designs local and wide area network. Managed and configured the network for five years using Mikrotik Switch and PFSense.
            </h3>            

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                CCTV Installation.
            </h3>            

            <h3 className="ab-s4-c2-l 
            p-[2rem] max-xl:p-[1.8rem] max-lg:p-[1..6rem] max-md:p-[1.4rem] max-sm:p-[1.2rem] 
            rounded-3xl">
                Other Related Technological Services
            </h3>            

        </div>
    );


    const protim = (
        <div className="projects-timeline 
        gap-[2.5rem] max-xl:gap-[2] max-lg:gap-[1.5] max-md:gap-[1] max-sm:gap-[0.5]">
            <h3 className="ab-s4-c3-c-h">GTechnology projects through the time</h3>
            <div className="timeline">
                {projects.map((item, index) => (    
                    <div key={index} className={`timeline-item ${item.side}`}>
                        <div className='ab-s5-c timeline-content'>
                            <div className="timeline-dot"></div>
                            <h4 className="ab-s4-c3-c-h-ch">{item.description}</h4>
                            <p className="ab-s4-c3-c-h-cl location">{item.location}</p>
                            <p className="ab-s4-c3-c-h-cp year">{item.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


    useEffect(() => {

        const screenVW = window.innerWidth;
        
        if(screenVW <= 640) {

            elOnView('.ab-s1-h', (el)=>bottomTo(el, 0));
            elOnView('.ab-s1-c1', (el)=>bottomTo(el, 0.2));
            elOnView('.ab-s1-c2', (el)=>bottomTo(el, 0.4));
            elOnView('.ab-s1-c3', (el)=>bottomTo(el, 0.6));

            elOnView('.ab-s3-h', (el)=>bottomTo(el, 0.0));
            elOnView('.ab-s3-c1', (el)=>bottomTo(el, 0.2));
            elOnView('.ab-s3-c2', (el)=>bottomTo(el, 0.4));
            elOnView('.ab-s3-c3', (el)=>bottomTo(el, 0.6));
            elOnView('.ab-s3-c4', (el)=>bottomTo(el, 0.8));
            
             if(s4c === 0) {
                elOnView('.ab-s4-c2-l', (el)=>btBackOut(el, 0));
            }

            if(s4c === 1) {
                elOnView('.timeline-item', (el)=>btBackOut(el, 0));
            }

        } else if(screenVW <= 1023) {

            elOnView('.ab-s1-h', (el)=>bottomTo(el, 0));
            elOnView('.ab-s1-c1', (el)=>btBackOut(el, 0.2));
            elOnView('.ab-s1-c2', (el)=>btBackOut(el, 0.4));
            elOnView('.ab-s1-c3', (el)=>btBackOut(el, 0.6));

            elOnView('.ab-s3-h', (el)=>bottomTo(el, 0.0));
            elOnView('.ab-s3-c1', (el)=>btBackOut(el, 0.2));
            elOnView('.ab-s3-c2', (el)=>btBackOut(el, 0.4));
            elOnView('.ab-s3-c3', (el)=>btBackOut(el, 0.6));
            elOnView('.ab-s3-c4', (el)=>btBackOut(el, 0.8));

             if(s4c === 0) {
                elOnView('.ab-s4-c2-l', (el)=>btBackOut(el, 0));
            }

            if(s4c === 1) {
                elOnView('.timeline-item', (el)=>btBackOut(el, 0));
            }
            

        
        } else {

            elOnView('.ab-s1-h', (el)=>bottomTo(el, 0));
            elOnView('.ab-s1-c1', (el)=>btBackOut(el, 0.2));
            elOnView('.ab-s1-c2', (el)=>btBackOut(el, 0.4));
            elOnView('.ab-s1-c3', (el)=>btBackOut(el, 0.6));

            elOnView('.ab-s3-h', (el)=>bottomTo(el, 0.0));
            elOnView('.ab-s3-c1', (el)=>btBackOut(el, 0.2));
            elOnView('.ab-s3-c2', (el)=>btBackOut(el, 0.4));
            elOnView('.ab-s3-c3', (el)=>btBackOut(el, 0.6));
            elOnView('.ab-s3-c4', (el)=>btBackOut(el, 0.8));
      

            if(s4c === 0) {
                elOnView('.ab-s4-c2-l', (el)=>btBackOut(el, 0));
            }

            if(s4c === 1) {
                elOnView('.timeline-item', (el)=>btBackOut(el, 0));
            }

        }

    }, [s4c]);
    


    return(
        <main className='w-screen h-contain gap-[5rem]
        flex flex-col items-center'>

            <section className="w-full
            p-[3rem]
            gap-[1rem]
            font-bold
            grid grid-cols-2 max-xl:grid-cols-1">

                <h3 className="ab-s1-h ab-h h-full w-full
                col-span-1 max-xl:col-span-1
                text-end max-xl:text-start
                flex items-center justify-center max-xl:justify-start">About Us</h3>

                <div className="gap-[1rem] min-h-[40rem] max-2xl:min-h-[45rem] max-xl:min-h-[40rem] max-lg:min-h-[35rem] max-md:min-h-[25rem] max-sm:min-h-[20rem]
                col-span-1 max-xl:col-span-1
                grid grid-cols-2">

                    <div className="ab-s1-c1 h-[full] col-span-2 row-span-3 rounded-xl
                    bg-cover bg-center "
                    style={{ backgroundImage: `url(${ab_c1})` }}></div>

                    <div className="ab-s1-c2 h-[full] row-span-2 rounded-xl
                    bg-cover bg-center "
                    style={{ backgroundImage: `url(${ab_c11})` }}></div>

                    <div className="ab-s1-c3 h-[h-full] row-span-2 rounded-xl
                    bg-cover bg-center "
                    style={{ backgroundImage: `url(${ab_c12})` }}></div>
                </div>

            </section>

            <section className="w-full p-[6rem] max-xl:p-[5rem] max-lg:p-[4rem] max-md:p-[3rem] max-sm:p-[2rem]
            bg-[#003224]">
                <h5 className='text-[white] font-extralight text-center'>
                    G. Technology is a freelance software developer named after its creator, Joel Maribbay 
                    Gumiran. In addition GTechnology is a group of professionals who work collaboratively to 
                    design, develop, and maintain software applications. The team typically consists of three 
                    members Joel Gumiran the founder a full stack developer, Mart Silvestre a back-end 
                    developer and database administrator and Rodolfo Tacang a front-end developer. 
                    GTechnology use programming languages, frameworks, and tools to create software 
                    solutions that meet the needs of their clients or organizations. The team members 
                    communicate effectively to ensure that the software is developed according to the 
                    specifications and requirements of the project. They are skilled at troubleshooting and 
                    debugging software issues, and are committed to producing high-quality software 
                    products that are scalable, efficient, and secure. 
                </h5>
            </section>

            <section className='w-full px-[1rem]
            flex justify-center items-start'>
                
                <div className="ab-s3-c w-full 
                p-x[10rem] py-[1rem] gap-[2rem] 
                rounded-3xl
                flex flex-col items-center justify-center mx-[0px] sm:mx-[0px] md:mx-[30px] lg:mx-[40px]">

                    <h4 className='ab-s3-h ab-s3-c-h text-center font-bold'>Career Highlights</h4>

                    <div className="w-full gap-[2rem] px-[5rem]
                    grid grid-cols-4 max-lg:grid-cols-2">
                        
                        <div className="ab-s3-c1 p-4
                        flex flex-col justify-center items-center">
                            <h3 className='ab-s3-c-h-c-h text-center font-bold'>10+</h3>
                            <h5 className='ab-s3-c-h-c-l text-center font-light'>Cities & Municipalities</h5>
                        </div>
                        <div className="ab-s3-c2 p-4
                        flex flex-col justify-center items-center">
                            <h3 className='ab-s3-c-h-c-h text-center font-bold'>20+</h3>
                            <h5 className='ab-s3-c-h-c-l text-center font-light'>Cities</h5>
                        </div>
                        <div className="ab-s3-c3 p-4
                        flex flex-col justify-center items-center">
                            <h3 className='ab-s3-c-h-c-h text-center font-bold'>30+</h3>
                            <h5 className='ab-s3-c-h-c-l text-center font-light'>Projects</h5>
                        </div>
                        <div className="ab-s3-c4 p-4
                        flex flex-col justify-center items-center">
                            <h3 className='ab-s3-c-h-c-h text-center font-bold'>16+</h3>
                            <h5 className='ab-s3-c-h-c-l text-center font-light'>Years of Experience</h5>
                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full gap-[2rem]
            flex flex-col items-center justify-center">

                <div className="p-[0.2rem] 
                rounded-full gap-[1rem] max-lg:gap-[0.1rem]
                flex flex-row items-center justify-center
                bg-[#ffffffdc] shadow-lg">
                    <button className={`ab-s4-c-btn rounded-[2rem] px-[1rem] py-[0.5rem] font-semibold flex items-center gap-[.5rem]
                    ${s4c === 0 ? 'bg-gradient-to-r from-[#22A570] to-[#4DAB6A]  text-white' : ''}`}
                    onClick={() => setS4c(0)}><GrUserExpert />Specialization</button>
                    <button className={`ab-s4-c-btn rounded-[2rem] px-[1rem] py-[0.5rem] font-semibold flex items-center gap-[.5rem]
                    ${s4c === 1 ? 'bg-gradient-to-r from-[#22A570] to-[#4DAB6A]  text-white' : ''}`}
                    onClick={() => setS4c(1)}> <FaTimeline />Project Timeline</button>
                </div>

                {s4c === 0 && spec}
                {s4c === 1 && protim}
                
            </section>  

        </main>

    );
}