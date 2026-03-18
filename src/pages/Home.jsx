import { useEffect } from "react";
import "../assets/css/text.css";
import flexibleDeals from '../assets/images/cb024f0eda92e93f72f8664c8848b80a03760cb2.png';
import LaptopImage from '../assets/images/laptop-mockup.png';
import PhoneImage from '../assets/images/phone-mockup.png';
import CardImage from '../assets/images/cb024f0eda92e93f72f8664c8848b80a03760cb2.png'
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

export default function Home() {


  useEffect(() => {
    document.body.className = "home";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="flex flex-col">
     
     <div className="flex justify-center items-center bg-[#245C35] min-h-screen w-screen px-4">
      <h1 className="font-black text-center 
                 text-2xl sm:text-3xl md:text-5xl lg:text-9xl xl:text-11xl
                 bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
                 bg-clip-text text-transparent leading-snug">
                  Provides digital solutions
                  <span className="block py-1 sm:py-2">for your</span>
                  <span className="block py-1 sm:py-2">Digital Challenges</span>
      </h1>
      </div>

      {/* Small Stats */}
      <div className="bg-[#003224]
                      gap-[2rem] max-lg:gap-[4rem] max-md:gap-[5rem]
                      px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
                      py-15 sm:py-20 md:py-25 lg:py-30 xl:py-40
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
      <div className=" bg-[#DBFFE6]
      px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
        py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30">
        <h2 className="text-center font-semibold">Why Choose Us?</h2>
        {/* Flexible Deals */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1
                        gap-10 
                        py-5 sm:py-5 md:py-10 lg:py-15 xl:py-15
                        ">
          <div className="flex justify-center items-center">
            <img src={LaptopImage} alt="Flexible Deals" className="h-full sm:h-64 md:h-72 lg:h-80 xl:h-[300px] w-auto"/>
          </div>
            <div className="flex flex-col justify-center text-center max-lg:text-center lg:text-left">
              <h3 className="font-extrabold 
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#FFFFFF] 
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
            <div className="flex flex-col justify-center text-center max-lg:text-center lg:text-left 
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
            <div className="flex justify-center items-center">
            <img src={LaptopImage} alt="Flexible Deals" className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-[400px] h-auto"/>
          </div>
        </div>
        {/* Legitimacy */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1
                        gap-10
                        py-5 sm:py-5 md:py-10 lg:py-15 xl:py-15
                        ">
          <div className="flex justify-center items-center">
           <img src={LaptopImage} alt="Flexible Deals" className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-[400px] h-auto"/>
          </div>
            <div className="flex flex-col justify-center text-center max-lg:text-center lg:text-left">
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
        
        
        <div className="bg-[#318049]
         px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
                      py-15 sm:py-20 md:py-25 lg:py-30 xl:py-40
        max-lg:p-[4rem] max-md:p-[2rem] ">
                <h1 className="text-center
                 text-sm sm:text-lg md:text-xl lg:text-2xl
                 mb-10 text-white"> Software Compatibility
                 </h1>
                 
            <div className="grid 
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-4
                  gap-[2rem] max-md:gap-[3rem] ">
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
        <div className="grid grid-cols-3 max-lg:grid-cols-1
                        gap-10
                        px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30 
                        py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30
                        place-items-center
                        ">
            <div>
              <img src={PhoneImage} className="w-full sm:w-20 md:w-28 lg:w-32 xl:w-[300px] h-auto" />
            </div>
            <div className="flex justify-center  py-[2rem]">
               <h2 className="flex items-center font-black text-center 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       bg-gradient-to-r from-[#22A570] to-[#585858] 
                       bg-clip-text text-transparent  ">
                        Your System, On Any Device
              </h2>
            </div>

            <div>
              <img src={LaptopImage} className="w-full sm:w-20 md:w-28 lg:w-32 xl:w-[300px] h-auto" />
            </div>
        </div>
        {/* FAQ */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 
        px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
        py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30">
          <h2 className="flex justify-center items-center text-center py-[2rem]">Frequently Asked Questions</h2>
         <div>
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
        <section className="px-10 sm:px-15 md:px-20 lg:px-25 xl:px-30
        py-10 sm:py-10 md:py-10 lg:py-15 xl:py-15 "
        >
          <h3 className="font-extrabold 
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                   bg-gradient-to-r from-[#22A570] to-[#585858] 
                   bg-clip-text text-transparent mb-3 text-center" >
                  Let's Connect</h3>
          <div className="grid grid-cols-2 max-lg:grid-cols-1  ">
            <div className="bg-[#003224] p-5 sm:p-15 md:p-15 lg:p-15 xl:p-15 text-white text-sm">
              <h3>We’re here to connect and assist you</h3>

              <div className="grid grid-cols-2 max-lg:grid-cols-1 ">
              <ul className="py-2 sm:py-2 md:py-2 lg:py-5 xl-py5">
                <p className="font-medium text-base">Phone</p>
                <li className="font-light">+63 997 225 7554</li>
                <li className="font-light">+63 997 225 7554</li>
                <li className="font-light">+63 997 225 7554</li>
              </ul>
              <ul className="py-2 sm:py-2 md:py-2 lg:py-5 xl-py5">
                <p className="font-medium text-base">Email</p>
                <li className="font-light">rodolfotacang@g-technology.org</li>
                <li className="font-light">rodolfotacang@g-technology.org</li>
                <li className="font-light">rodolfotacang@g-technology.org</li>
                <li className="font-light">rodolfotacang@g-technology.org</li>
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
              <form className="bg-[#DEDEE0] max-lg:order-2 p-5 sm:p-15 md:p-15 lg:p-15 xl:p-15 flex flex-col gap-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">GET IN TOUCH</h3>
                <p className="text-sm md:text-base lg:text-lg">Reach out with inquiries</p>

                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col w-full">
                      <label className="mb-1 text-[calc(clamp(1.6rem,2.5vw,2.5rem)*0.4)] font-medium">
                        Full Name*
                      </label>
                      <TextField fullWidth required id="outlined-required"  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "25px", height: "40px" } }} />
                    </div>

                    <div className="flex flex-col w-full max-lg:order-2">
                      <label className="mb-1 text-[calc(clamp(1.6rem,2.5vw,2.5rem)*0.4)] font-medium">
                      Email*
                      </label>
                      <TextField 
        fullWidth 
        required 
        id="outlined-required" 
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "25px", height: "40px" } }} 
      />
    </div>
  </div>

  <div className="flex flex-col w-full">
    <label className="mb-1 text-[calc(clamp(1.6rem,2.5vw,2.5rem)*0.4)] font-medium">
      Subject*
    </label>
    <TextField 
      fullWidth 
      required 
      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "25px", height: "40px" } }} 
    />
  </div>

  <div className="flex flex-col w-full">
    <label className="mb-1 text-[calc(clamp(1.6rem,2.5vw,2.5rem)*0.4)] font-medium">
      Message*
    </label>
    <TextField 
      fullWidth 
      required 
      multiline 
      rows={4} 
      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "25px" } }} 
    />
  </div>

  <Button 
    variant="contained" 
    sx={{ borderRadius: "25px", height: "40px", margin: "15px 0px" }}
  >
    Submit
  </Button>
</form>

            </div>
        </section>
</div>
  );
}
