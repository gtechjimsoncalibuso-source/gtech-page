import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from "@emailjs/browser";
import GwiseImg from '../../assets/products/emrolment.png'

import { useEffect, useRef, useState } from 'react';

import {  
    leftTo,
    rightTo,
    bottomTo
} from '../../assets/gsap/services.js';


export default function Accounting() {

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

        elOnView('.pro-s1h', el => bottomTo(el, 0));
        elOnView('.pro-s1l', el => bottomTo(el, 0.3));

        elOnView('.pro-s1i', el => bottomTo(el, 0.1));

    }, []);

    return(
        <main className='w-screen h-contain py-4 gap-[3rem]
        flex flex-col items-center'>

            <section id="services" className="w-full py-[1rem] scroll-mt-[80px]
            flex flex-col items-center
            text-center">
                
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2
                items-center justify-center p-[50px]">
                    <div className='p-[10px] sm:p-[10px] md:p-[20px] lg:p-[40px] xl:p-[50px] '>
                        <h5 className='pro-s1h  font-extrabold  mb-[20px] '>
                        Accounting System</h5>
                    <p className='pro-s1l'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, sint porro 
                        necessitatibus quaerat molestias soluta praesentium iste velit doloribus veniam 
                        tempora laudantium nisi eos ad at cum labore aliquid magnam aspernatur distinctio 
                        nesciunt nemo quae. Mollitia voluptatibus veniam cupiditate quo excepturi alias 
                        nihil officia nobis! Asperiores, eius voluptatum! Porro, amet!  
                    </p>
                    </div> 
                    <img className="pro-s1i w-full h-auto rounded-lg " src={GwiseImg} />
                </div>

              
            </section>

            <section id="contact" className="w-full bg-[#DBFFE6] py-12 lg:py-16">
            <div className="w-[90%] mx-auto px-5">

                <div className="grid grid-cols-2 max-lg:grid-cols-1 shadow-xl rounded-2xl overflow-hidden">

                {/* LEFT PANEL */}
                <div className="
                    w-full bg-[#003224] text-white
                    p-6 sm:p-10 lg:p-12
                    flex flex-col gap-8
                ">

                    {/* Price */}
                    <div>
                    <h3 className="pro-s2h text-3xl lg:text-4xl font-bold">Pricing: ₱ 2,345,678</h3>
                    <p className="text-sm opacity-80 mt-1">One-time payment</p>
                    </div>

                    {/* Features */}
                    <div>
                    <h4 className="pro-s2h text-xl font-semibold mb-3">Features</h4>

                    <ul className="space-y-3 text-sm sm:text-base">
                        {[
                        "Lorem, ipsum.",
                        "Lorem, ipsum dolor.",
                        "Lorem, ipsum.",
                        "Lorem, ipsum dolor.",
                        "Lorem, ipsum.",
                        "Lorem, ipsum dolor."
                        ].map((item, i) => (
                        <li
                            key={i}
                            className="pro-s2l flex items-center gap-3 hover:translate-x-1 transition"
                        >
                            <span className="pro-s2l text-green-400">✔</span>
                            {item}
                        </li>
                        ))}
                    </ul>
                    </div>

                    {/* Highlight */}
                    <div className="bg-white/10 p-4 rounded-lg text-sm sm:text-base">
                        <ul className="space-y-2">
                            <li className="pro-s2l flex items-center gap-2">
                            <span className="text-green-400">✔</span> Free setup
                            </li>
                            <li className="pro-s2l flex items-center gap-2">
                            <span className="text-green-400">✔</span> Free Support
                            </li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT PANEL (FORM) */}
                <form
                    className="
                    bg-[#f9f9f9]
                    p-6 sm:p-10
                    flex flex-col gap-5
                "
                >

                    <div className="mb-2">
                    <h3 className="pro-s2h text-2xl font-bold text-gray-800">
                        Get in Touch
                    </h3>
                    <p className="pro-s2l text-gray-500 text-sm">
                        Reach out with inquiries
                    </p>
                    </div>

                    <TextField
                    name="name"
                    label="Full Name"
                    required
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                        backgroundColor: '#fff'
                        },
                    }}
                    />

                    <TextField
                    className='pro-s2l'
                    name="email"
                    label="Email"
                    type="email"
                    required
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                        backgroundColor: '#fff'
                        },
                    }}
                    />

                    <TextField
                    className='pro-s2l'
                    name="subject"
                    label="Subject"
                    required
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                        backgroundColor: '#fff'
                        },
                    }}
                    />

                    <TextField
                    className='pro-s2l'
                    name="message"
                    label="Message"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                        backgroundColor: '#fff'
                        },
                    }}
                    />

                    <Button
                    className='pro-s2s'
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: '25px',
                        padding: '10px',
                        fontWeight: 'bold',
                        textTransform: 'none'
                    }}
                    >
                    Send Message
                    </Button>

                </form>

                </div>

            </div>
            </section>
            
        </main>
    );

}