

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa"; //home icon
import { RiTeamFill } from "react-icons/ri";//team
import { IoIosInformationCircle } from "react-icons/io"; // about icon
import { FaPhoneSquare } from "react-icons/fa"; //contact icon
import { FaGears } from "react-icons/fa6"; //services icon
import { FaHandshake } from "react-icons/fa"; // clients

import '../assets/css/headers.css';

export default function Header(){

    function navCp(){
        const navcp = document.querySelector('#nav-cp-ul');
        if (!navcp) return;

        const style = window.getComputedStyle(navcp);
        const display = style.display;

        if (display === 'flex') {
            navcp.style.display = 'none';
        } else if (display === 'none') {
            navcp.style.display = 'flex';
        }

    }

    return(
        <header className="w-full h-[6rem] p-4 gap-[5rem]
        sticky top-0
        flex flex-row items-center justify-between
        text-[#ffffffe5] bg-black">

            <h4 className="font-bold">GTechnology</h4>

            <nav className="w-full gap-[5rem]
            flex flex-row items-center justify-end">

                <ul  className="w-full gap-[1.5rem] head-links
                flex flex-row flex-1 justify-center">
                    <li><Link to="/" className="nav-link">HOME</Link></li>
                    <li><Link to="/services" className="nav-link">SEVICES</Link></li>
                    <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                    <li><Link to="/clients" className="nav-link">CLIENTS</Link></li>
                    <li><Link to="/team" className="nav-link">TEAM</Link></li>
                    <li><Link to="/contact" className="nav-link">CONTACT</Link></li>

                </ul>

                <a href="https://www.facebook.com/profile.php?id=100045189956593" className="nav-fb-btn nav-fb-btn-pc
                flex flex-row justify-center items-center gap-2"
                ><FaFacebook size={26}/>FACEBOOK PAGE</a>

                <a href="https://www.facebook.com/profile.php?id=100045189956593" className="nav-fb-btn nav-fb-btn-cp
                flex flex-row justify-center items-center rounded-full"
                ><FaFacebook color="blue" size={34}/></a>

            </nav>

            <nav id="nav-cp" className="w-[3rem] gap-[0.8rem]
            bg-[#f1f1f1] rounded-full py-[0.7rem] shadow-md
            flex flex-col items-center justify-center">

                <button className="" onClick={navCp}><GiHamburgerMenu color="black" size={24} /></button>

                <ul id="nav-cp-ul" className="w-full p-[0.5rem] gap-[1rem] head-links
                flex flex-col flex-1 items-center justify-center">

                    <li className="relative group flex justify-center">
                        <Link to="/" className="nav-link">
                            <FaHome size={24} color="black" />
                        </Link>

                        <span className="floating-label">
                            HOME
                        </span>
                    </li>

                    <li className="relative group flex justify-center">
                        <Link to="/services" className="nav-link">
                            <FaGears color="black" size={24} />
                        </Link>

                        <span className="floating-label">
                            SERVICES
                        </span>
                    </li>

                    <li className="relative group flex justify-center">
                        <Link to="/about" className="nav-link">
                            <IoIosInformationCircle color="black" size={24} />
                        </Link>

                        <span className="floating-label">
                            ABOUT
                        </span>
                    </li>

                    <li className="relative group flex justify-center">
                        <Link to="/clients" className="nav-link">
                            <FaHandshake color="black" size={24} />
                        </Link>

                        <span className="floating-label">
                            CLIENTS
                        </span>
                    </li>

                    <li className="relative group flex justify-center">
                        <Link to="/team" className="nav-link">
                            <RiTeamFill  color="black" size={24} />
                        </Link>

                        <span className="floating-label">
                            TEAM
                        </span>
                    </li>

                    <li className="relative group flex justify-center">
                        <Link to="/contact" className="nav-link">
                            <FaPhoneSquare color="black" size={24} />
                        </Link>

                        <span className="floating-label">
                            CONTACT
                        </span>
                    </li>

                    {/* <li><Link to="/" className="nav-link"><FaHome color="black" size={24} /></Link></li>
                    <li><Link to="/services" className="nav-link"><FaGears color="black" size={24} /></Link></li>
                    <li><Link to="/about" className="nav-link"><IoIosInformationCircle color="black" size={24} /></Link></li>
                    <li><Link to="/clients" className="nav-link"><FaHandshake color="black" size={24} /></Link></li>
                    <li><Link to="/team" className="nav-link"><RiTeamFill  color="black" size={24} /></Link></li>
                    <li><Link to="/contact" className="nav-link"><FaPhoneSquare color="black" size={24} /></Link></li> */}

                </ul>
            </nav>

        </header>

    );
}
