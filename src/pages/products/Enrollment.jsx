import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from "@emailjs/browser";

import GwiseImg from '../../assets/banners/sub/6.png';
import Accounting from '../../assets/banners/sub/7.png';
import Payroll from '../../assets/banners/sub/8.png';
import Sales from '../../assets/banners/sub/9.png';
import Enroll from '../../assets/banners/sub/10.png';

import banner6 from '../../assets/banners/6.png';
import banner7 from '../../assets/banners/7.png';
import banner8 from '../../assets/banners/8.png';
import banner9 from '../../assets/banners/9.png';
import banner10 from '../../assets/banners/10.png';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

import {  
    leftTo,
    rightTo,
    bottomTo
} from '../../assets/gsap/services.js';


export default function Gwise() {

    const splideRef = useRef(null);

    useEffect(() => {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 5,
        gap: '2rem',

        breakpoints: {
            1024: {
            perPage: 5,
            gap: '1.5rem',
            },
            768: {
            perPage: 4,
            gap: '1rem',
            },
            640: {
            perPage: 3,
            gap: '0.5rem',
            },
        },

        arrows: true,
        pagination: false,

        });

        splide.mount();


        

        return () => {
            splide.destroy();
        };
    }, []);


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

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "Gwise Subscription Inquiry",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [mailError, setMailError] = useState("");
    const [mailSuccess, setMailSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setMailError("");
        setMailSuccess("");

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
        setMailError("Mail is not configured. Set VITE_EMAILJS_* in .env and restart the dev server.");
        setIsSending(false);
        return;
        }

        emailjs
        .send(
            serviceId,
            templateId,
            {
            name: form.name,
            subject: form.subject,
            message: form.message,
            email: form.email,
            },
            publicKey
        )
        .then((res) => {
            console.log("SUCCESS!", res.status, res.text);
            setMailSuccess("Message sent successfully.");
            setForm({ name: "", email: "", subject: "", message: "" });
        })
        .catch((err) => {
            console.log("FAILED...", err);
            setMailError("Failed to send message. Please try again.");
        })
        .finally(() => {
            setIsSending(false);
        });

    };

    return(
        <main className='w-screen h-contain gap-[3rem]
        flex flex-col items-center'>

            <section id="services" className="relative w-full 
            p-[1rem] scroll-mt-[80px] 
            flex flex-col items-center text-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${GwiseImg})` }}>
                <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                <div className="relative z-10 
                grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 
                items-stretch justify-center 
                p-[2.5rem] max-xl:p-[2rem] max-lg:p-[1.5rem] max-md:p-[1rem] max-sm:p-[0.5rem]">
                    <div className='bg-[#f5f5f5] rounded-t-[1.5rem] lg:rounded-t-none lg:rounded-l-[1.5rem] h-full
                    p-[1.5rem] sm:p-[2rem] md:p-[2.5rem] lg:p-[3rem] xl:p-[3.5rem]'>
                        <h5 className='pro-s1h  font-extrabold  mb-[20px] '>    
                        Enrollment System</h5>
                        <p className='pro-s1l'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, sint porro 
                            necessitatibus quaerat molestias soluta praesentium iste velit doloribus veniam 
                        </p>
                    </div> 
                    <div className="bg-[#f5f5f5]
                    rounded-b-[1.5rem]
                    lg:rounded-bl-none lg:rounded-r-[1.5rem]
                    h-full w-auto
                    p-[1.5rem] sm:p-[2rem] md:p-[2.5rem] lg:p-[3rem] xl:p-[3.5rem]
                    flex items-center">
                        <img className="pro-s1i w-full h-full object-cover rounded-[1rem]" src={Enroll} />
                    </div>
                    
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
                    onSubmit={handleSubmit}
                    className="bg-[#f5f5f5] p-5 sm:p-10 flex flex-col gap-4 
                    rounded-b-2xl rounded-t-none      /* mobile (1 col) */
                        max-lg:rounded-b-2xl max-lg:rounded-t-none
                        lg:rounded-r-2xl lg:rounded-l-none  /* desktop (2 col) */ "
                        
                >
                    <h3 className="text-xl font-bold">GET IN TOUCH</h3>
                    <p>Reach out with inquiries</p>
                    {mailError && <p className="text-sm text-red-600">{mailError}</p>}
                    {mailSuccess && <p className="text-sm text-green-700">{mailSuccess}</p>}

                    <TextField
                    name="name"
                    label="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                            '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            },
                        }}
                    />

                    <TextField             
                    name="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                            '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            },
                        }}
                    />

                    <TextField
                    name="subject"
                    label="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{
                            '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            },
                        }}
                    />

                    <TextField
                    name="message"
                    label="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                            '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        disabled={isSending}
                        variant="contained"
                        sx={{
                            borderRadius: '25px',
                        }}
                        >
                        {isSending ? "Sending..." : "Submit"}
                    </Button>

                </form>

                </div>

            </div>
            </section>


            <section className="w-full px-[2rem]">
                <div className="splide" ref={splideRef}>
                    <div className="splide__track">
                        <ul className="splide__list">

                            <li className="splide__slide">
                                <Link to="/gwise" className="block w-full h-full" aria-label="Gwise">
                                    <img src={banner6} alt="Gwise"
                                    className="w-full h-full object-cover rounded-xl "/>  
                                </Link>
                            </li>

                            <li className="splide__slide">
                                <Link to="/accounting" className="block w-full h-full" aria-label="Accounting">
                                    <img src={banner7} alt="Accounting"
                                    className="w-full h-full object-cover rounded-xl "/>  
                                </Link>
                            </li>

                            <li className="splide__slide">
                                <Link to="/payroll" className="block w-full h-full" aria-label="Payroll">
                                    <img src={banner8} alt="Payroll"
                                    className="w-full h-full object-cover rounded-xl "/>  
                                </Link>
                            </li>

                            <li className="splide__slide">
                                <Link to="/sales" className="block w-full h-full" aria-label="Sales">
                                    <img src={banner9} alt="Sales"
                                    className="w-full h-full object-cover rounded-xl "/>  
                                </Link>
                            </li>

                            <li className="splide__slide">
                                <Link to="/enrollment" className="block w-full h-full" aria-label="Enrollment">
                                    <img src={banner10} alt="Enrollment"
                                    className="w-full h-full object-cover rounded-xl "/>  
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>

            
        </main>
    );

}