import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ ADDED
import "../assets/css/text.css";
import CardImage from '../assets/images/Card.png';
import LaptopImage from '../assets/images/laptop-mockup.png';
import PhoneImage from '../assets/images/phone-mockup.png';
import ShieldImage from '../assets/images/shield.png';
import HomeBackground from '../assets/images/homepage.jpg';
import banner6 from '../assets/banners/6.png';
import banner7 from '../assets/banners/7.png';
import banner8 from '../assets/banners/8.png';
import banner9 from '../assets/banners/9.png';
import banner10 from '../assets/banners/10.png';

import { IoLogoWindows } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from "@emailjs/browser";
import CarouselGSAP from '../components/CarouselGSAP';

import {
  bottomTo,
  rightTo,
  leftTo
} from "../assets/gsap/home.js";
import { btBackOut } from "../assets/gsap/clients.js";


export default function Home() {
  const location = useLocation();
    const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
        const id = location.state.scrollTo;

        const scrollToEl = () => {
            const el = document.getElementById(id);

            if (el) {
                const yOffset = -90; // match header height
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: "smooth"
                });
            } else {
                // retry until element exists (better than fixed timeout)
                setTimeout(scrollToEl, 200);
            }
        };

        // slight delay for mobile rendering
        setTimeout(scrollToEl, 300);

        navigate(location.pathname, { replace: true, state: {} });
    }
}, [location, navigate]);
    

  function elOnView(selector, callback) {
      const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.05) { // 5% visible
              callback(entry.target);   // call your function
              obs.unobserve(entry.target); // only once
          }
          });
      }, { threshold: 0.3 });

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

    const screenVW = window.innerWidth;
    
    if(screenVW <= 640) {

      elOnView('.h-s1-h', (el)=>bottomTo(el, 0)); //update
      elOnView('.h-s1-c', (el)=>btBackOut(el, 0.3)); // update

      elOnView('.home-s2-c1', (el)=>btBackOut(el, 0.2));
      elOnView('.home-s2-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.home-s2-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.home-s2-c4', (el)=>btBackOut(el, 0.8));

      elOnView('.home-s3-c1', (el)=>leftTo(el, 0)); //img
      elOnView('.home-s3-c2', (el)=>bottomTo(el, 0));
      elOnView('.home-s3-c3', (el)=>bottomTo(el, 0));
      elOnView('.home-s3-c4', (el)=>rightTo(el, 0)); //img
      elOnView('.home-s3-c5', (el)=>leftTo(el, 0)); //img
      elOnView('.home-s3-c6', (el)=>bottomTo(el, 0));

      elOnView('.home-s4-c1', (el)=>btBackOut(el, 0.2));
      elOnView('.home-s4-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.home-s4-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.home-s4-c4', (el)=>btBackOut(el, 0.8));

      elOnView('.home-s5-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s5-c2', (el)=>bottomTo(el, 0));
      elOnView('.home-s5-c3', (el)=>rightTo(el, 0));

      elOnView('.home-s6-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s6-c2', (el)=>rightTo(el, 0));


    } else if(screenVW <= 1023) {

      elOnView('.h-s1-h', (el)=>bottomTo(el, 0)); //update 
      elOnView('.h-s1-c', (el)=>btBackOut(el, 0.3)); // update

      elOnView('.home-s2-c1', (el)=>btBackOut(el, 0));
      elOnView('.home-s2-c2', (el)=>btBackOut(el, 0));
      elOnView('.home-s2-c3', (el)=>btBackOut(el, 0));
      elOnView('.home-s2-c4', (el)=>btBackOut(el, 0));

      elOnView('.home-s3-c1', (el)=>leftTo(el, 0)); //img
      elOnView('.home-s3-c2', (el)=>bottomTo(el, 0));
      elOnView('.home-s3-c3', (el)=>bottomTo(el, 0));
      elOnView('.home-s3-c4', (el)=>rightTo(el, 0)); //img
      elOnView('.home-s3-c5', (el)=>leftTo(el, 0)); //img
      elOnView('.home-s3-c6', (el)=>bottomTo(el, 0));

      elOnView('.home-s4-c1', (el)=>btBackOut(el, 0.2));
      elOnView('.home-s4-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.home-s4-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.home-s4-c4', (el)=>btBackOut(el, 0.8));

      elOnView('.home-s5-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s5-c2', (el)=>bottomTo(el, 0));
      elOnView('.home-s5-c3', (el)=>rightTo(el, 0));

      elOnView('.home-s6-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s6-c2', (el)=>rightTo(el, 0));

    } else {

      elOnView('.h-s1-h', (el)=>bottomTo(el, 0)); // update
      elOnView('.h-s1-c', (el)=>btBackOut(el, 0.3)); // update
      
      elOnView('.home-s2-c1', (el)=>btBackOut(el, 0));
      elOnView('.home-s2-c2', (el)=>btBackOut(el, 0));
      elOnView('.home-s2-c3', (el)=>btBackOut(el, 0));
      elOnView('.home-s2-c4', (el)=>btBackOut(el, 0));

      elOnView('.home-s3-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s3-c2', (el)=>rightTo(el, 0));
      elOnView('.home-s3-c3', (el)=>leftTo(el, 0));
      elOnView('.home-s3-c4', (el)=>rightTo(el, 0));
      elOnView('.home-s3-c5', (el)=>leftTo(el, 0));
      elOnView('.home-s3-c6', (el)=>rightTo(el, 0));

      elOnView('.home-s4-c1', (el)=>btBackOut(el, 0.2));
      elOnView('.home-s4-c2', (el)=>btBackOut(el, 0.4));
      elOnView('.home-s4-c3', (el)=>btBackOut(el, 0.6));
      elOnView('.home-s4-c4', (el)=>btBackOut(el, 0.8));

      elOnView('.home-s5-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s5-c2', (el)=>bottomTo(el, 0));
      elOnView('.home-s5-c3', (el)=>rightTo(el, 0));

      elOnView('.home-s6-c1', (el)=>leftTo(el, 0));
      elOnView('.home-s6-c2', (el)=>rightTo(el, 0));

    }

  }, []);

  useEffect(() => {
    document.body.className = "home";
    return () => {
      document.body.className = "";
    };
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

  return (
    <div className="flex flex-col">
     
     <div id="home" className=" flex flex-col justify-center items-center scroll-mt-[80px]
     p-[5rem] max-xl:p-[5rem] max-lg:p-[4rem] max-md:p-[2.5rem] max-sm:p-[2rem]
     gap-[6rem] max-xl:gap-[3.5rem] max-lg:gap-[3rem] max-md:gap-[2.5rem] max-sm:gap-[2rem]
     ">
      <img className="absolute top-0 left-0 w-full h-full -z-10 object-cover brightness-30" src={HomeBackground} alt="home-background"/>
        <h3 className="h-s1-h font-black text-center 
          bg-clip-text text-[rgba(255,255,255,0.8)] leading-snug">
          Provides digital solutions for your Digital Challenges
        </h3> 
       
        <div className="h-s1-c w-full">
            <CarouselGSAP  banners={[banner6, banner7, banner8, banner9, banner10]} />
        </div>
      </div>
      

      {/* Small Stats */}
      <div className="bg-[#003224] 
                      gap-[2rem] max-lg:gap-[4rem] max-md:gap-[5rem]
                      px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
                      py-15 sm:py-20 md:py-25 lg:py-30 xl:py-40
                      grid grid-cols-4 max-lg:grid-cols-4 max-sm:grid-cols-4">
                  <div className="home-s2-c1 flex flex-col items-center ">
                    <h4 className="home-stats font-bold  text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
                          2010
                    </h4>
                    <p className="text-white text-center font-extralight">Since</p>
                  </div>
                  <div className="home-s2-c2 flex flex-col items-center ">
                    <h4 className="home-stats font-bold  text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
                          10+
                    </h4>
                    <p className="text-white text-center font-extralight">
                      Cities & <span className="block">Municipalities</span>
                    </p>
                  </div>
                  <div className="home-s2-c3 flex flex-col items-center ">
                    <h4 className="home-stats font-bold text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
                          20+
                    </h4>
                    <p className="text-white text-center font-extralight">Clients</p>
                  </div>
                  <div className="home-s2-c4 flex flex-col items-center ">
                    <h4 className="home-stats font-bold text-center 
                         bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                         bg-clip-text text-transparent">
                          30+
                    </h4>
                    <p className="text-white text-center font-extralight">Projects</p>
                  </div>
                </div>

                {/* GSAP Carousel for Products (replaces Splide)
                <div className=" p-[50px] bg-[#DBFFE6] flex flex-col justify-center">
                    <CarouselGSAP   banners={[banner1, banner2, banner3, banner4, banner5]} />
                </div> */}
                
      <div className=" bg-[#DBFFE6]
      px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
        py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30">
        <h2 className="home-s3-h text-center font-semibold">Why Choose Us?</h2>

        {/* Flexible Deals */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1
                        gap-10 
                        py-5 sm:py-5 md:py-10 lg:py-15 xl:py-15
                        ">
         <div className="home-s3-c1 flex justify-center items-center">
          <img src={CardImage} alt="Flexible Deals" 
          className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[200px] h-auto object-contain"/>
        </div>

            <div className="home-s3-c2 flex flex-col justify-center text-center max-lg:text-center lg:text-left">
              <h3 className="font-extrabold 
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#585858] 
                   bg-clip-text text-transparent mb-3">
                    Flexible Deals
              </h3>
              <p className="text-sm sm:text-lg md:text-xl">
                With installment payments, you can break up the cost 
                into manageable chunks and pay over a period of time that works best for you.
              </p>
            </div>
        </div>

        {/* Business Exclusive */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1
                        gap-10
                        py-5 sm:py-5 md:py-10 lg:py-15 xl:py-15
                        ">
            <div className="home-s3-c3 flex flex-col justify-center text-center max-lg:text-center lg:text-left 
                           max-lg:order-2 ">
              <h3 className="font-extrabold 
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#585858] 
                   bg-clip-text text-transparent mb-3">
                    Business Exclusive
              </h3>
              <p className="text-sm sm:text-lg md:text-xl">
                With installment payments, you can break up the cost 
                into manageable chunks and pay over a period of time that works best for you.
              </p>
            </div>
            <div className="home-s3-c4 flex justify-center items-center">
            <img src={LaptopImage} alt="Flexible Deals" 
             className="w-[150px] sm:w-[150px] md:w-[200px] lg:w-[350px] h-auto object-contain"/>
          </div>
        </div>

        {/* Legitimacy */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1
                        gap-10
                        py-5 sm:py-5 md:py-10 lg:py-15 xl:py-15
                        ">
          <div className="home-s3-c5 flex justify-center items-center">
           <img src={ShieldImage} alt="Flexible Deals" 
            className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[230px] h-auto object-contain"/>
          </div>
            <div className="home-s3-c6 flex flex-col justify-center text-center max-lg:text-center lg:text-left">
              <h3 className="font-extrabold py-[10px]
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#585858] 
                   bg-clip-text text-transparent mb-3">
                    Legitimacy
              </h3>
              <p className="text-sm sm:text-lg md:text-xl">
                With installment payments, you can break up the cost 
                into manageable chunks and pay over a period of time that works best for you.
              </p>
            </div>
        </div>
      </div>
        
        
        <div className=" bg-[#318049]
         px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
                      py-15 sm:py-20 md:py-25 lg:py-30 xl:py-40
        max-lg:p-[4rem] max-md:p-[2rem] ">
                <h1 className="text-center
                 text-sm sm:text-lg md:text-xl lg:text-2xl
                 mb-10 text-white"> Software Compatibility
                 </h1>
                 
            <div className="grid 
                  grid-cols-4
                  gap-[2rem] max-md:gap-[3rem] ">

              <div className="home-s4-c1 font-light flex flex-col items-center text-white text-xl ">
                <IoLogoWindows className="text-6xl sm:text-8xl md:text-10xl" />
                <p className="text-sm sm:text-lg md:text-xl">Windows</p>
              </div>      

              <div className="home-s4-c2 font-light flex flex-col items-center text-white text-xl">
                <IoLogoAndroid className="text-6xl sm:text-8xl md:text-10xl" />
                <p className="text-sm sm:text-lg md:text-xl">Android</p>
                </div>

              <div className="home-s4-c3 font-light flex flex-col items-center text-white text-xl">
                <FaLinux className="text-6xl sm:text-8xl md:text-10xl" />
                <p className="text-sm sm:text-lg md:text-xl">Linux</p>
              </div>

              <div className="home-s4-c4 font-light flex flex-col items-center text-white text-xl">
                <FaApple className="text-6xl sm:text-8xl md:text-10xl" />
                <p className="text-sm sm:text-lg md:text-xl">MacOS</p>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1
                        gap-10
                        px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30 
                        py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30
                        place-items-center bg-[#DBFFE6]
                        ">
            <div className="home-s5-c1">
              <img src={PhoneImage} className="w-[150px] sm:w-[150px] md:w-[200px] lg:w-[350px] h-auto object-contain" />
            </div>
            <div className="home-s5-c2 flex justify-center  py-[2rem]">
               <h2 className="flex items-center font-black text-center 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       bg-gradient-to-r from-[#22A570] to-[#585858] 
                       bg-clip-text text-transparent  ">
                        Your System, On Any Device
              </h2>
            </div>

            <div className="home-s5-c3">
              <img src={LaptopImage} className="w-[150px] sm:w-[150px] md:w-[200px] lg:w-[350px] h-auto object-contain" />
            </div>
        </div>
        {/* FAQ */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 
        px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
        py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30
        bg-[#DBFFE6]">
          <h2 className="home-s6-c1 flex justify-center items-center text-center py-[2rem]">Frequently Asked Questions</h2>
         <div className="home-s6-c2 ">
          <Accordion defaultExpanded> 
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                sx={{
                  fontSize: 'calc(clamp(1.6rem, 2.5vw, 2.5rem) * 0.5)',
                  fontWeight: 500
                }}
              >
                Are we legitimate?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 'calc(clamp(1.6rem, 2.5vw, 2.5rem) * 0.4)'
                }}
              >
                Yes! We are legitimate and we are registered to BIR and our software solutions are also built to
                comply with Republic Act 10173 - Data Privacy Act of 2012.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                component="span"
                sx={{
                  fontSize: 'calc(clamp(1.6rem, 2.5vw, 2.5rem) * 0.5)',
                  fontWeight: 500
                }}
              >
                Are your prices negotiable?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 'calc(clamp(1.6rem, 2.5vw, 2.5rem) * 0.4)'
                }}
              >
                We value your business and want to make it as easy as possible for you to make payments on your
                account. To help with this, we are pleased to offer several payment plans that may be more
                convenient for you.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography
                component="span"
                sx={{
                  fontSize: 'calc(clamp(1.6rem, 2.5vw, 2.5rem) * 0.5)',
                  fontWeight: 500
                }}
              >
                What is your standard timeframe for developing a software solution?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 'calc(clamp(1.6rem, 2.5vw, 2.5rem) * 0.4)'
                }}
              >
                We understand that time is of the essence in today's fast-paced business environment. That's why
                we have streamlined our development process to ensure maximum efficiency and minimize delays.
                Our team members have years of experience working together, which allows us to communicate
                effectively and work collaboratively to achieve your goals. Our team can develop a software
                solution for you just within <b> 3-6 months</b> depends on the complexity of your business.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        </div>
        <section id="contact" className="px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30 scroll-mt-[80px]
        py-10 sm:py-10 md:py-10 lg:py-15 xl:py-15 bg-[#DBFFE6] "
        >
          <h3 className="h-s7-h font-extrabold 
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#585858] 
                   bg-clip-text text-transparent mb-3 text-center " >
                  Let's Connect</h3>
          <div className="grid grid-cols-2 max-lg:grid-cols-1  ">
            <div className="
                          bg-[#003224] 
                          p-5 sm:p-15 md:p-15 lg:p-15 xl:p-15 
                          text-white text-sm

                          rounded-t-2xl rounded-b-none        /* mobile (1 col) */
                          max-lg:rounded-t-2xl max-lg:rounded-b-none
                          lg:rounded-l-2xl lg:rounded-r-none  /* desktop (2 col) */
                         
                        ">
              <h3>We’re here to connect and assist you</h3>

              <div className="grid grid-cols-2 max-lg:grid-cols-1 ">
              <ul className="py-2 sm:py-2 md:py-2 lg:py-5 xl-py5">
                <p className="font-medium text-base">Phone</p>
                <li className="font-light">0995 880 4502</li>
                <li className="font-light">0997 225 7554</li>
                <li className="font-light">0966 534 2216</li>
              </ul>
              <ul className="py-2 sm:py-2 md:py-2 lg:py-5 xl-py5">
                <p className="font-medium text-base">Email</p>
                <li className="font-light">gtechnologyorg2023@gmail.com</li>
                <li className="font-light">rodolfotacang@g-technology.org</li>
                <li className="font-light">mart.silvestre@g-technology.org</li>
                <li className="font-light">joel.gumiran@g-technology.org</li>
              </ul>
              </div>
             
              <ul className="py-2 sm:py-2 md:py-2 lg:py-5 xl-py5">
                <p className="font-medium text-base">Location</p>
                <li className="font-light">76 Quezon St, Cauayan City, Isabela</li>
              </ul>
              <div className="map-container" >
                <iframe className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.106146795899!2d121.7671125!3d16.9346553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338551006981c9c9%3A0xb9b92b1d33a65975!2sG%20TECHNOLOGY%20BUSINESS%20SOLUTIONS%2C%20INC.!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="150"
                
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G TECHNOLOGY BUSINESS SOLUTIONS Map"
                ></iframe>
              </div>
            </div>
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
        </section>
</div>
  );
}