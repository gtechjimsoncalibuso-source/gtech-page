import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaHome, FaPhoneSquare, FaHandshake } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
 import logo from '../assets/images/logo.png';

import '../assets/css/headers.css';

export default function Header() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState({
        x: 20,
        y: window.innerHeight - 80
    });
    const [isDragging, setIsDragging] = useState(false);

    const positionRef = useRef(position);
    const percentRef = useRef({ x: 0, y: 0 });
    const offset = useRef({ x: 0, y: 0 });

    const dragStarted = useRef(false);
    const isStopping = useRef(false);
    const blockClicks = useRef(false);

    const dragThreshold = 6;

    // ✅ SCROLL (WORKS ANYWHERE)
    const scrollToSection = (id) => {
        if (window.location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
   

    useEffect(() => {
        positionRef.current = position;

        percentRef.current = {
            x: position.x / window.innerWidth,
            y: position.y / window.innerHeight
        };
    }, [position]);

    const isBottom = position.y > window.innerHeight * 0.6;

    const getClientPos = (e) => {
        if (e.touches) {
            return {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
        return {
            x: e.clientX,
            y: e.clientY
        };
    };

    const handleAction = (e) => {
        if (blockClicks.current) {
            e.preventDefault();
            return;
        }
        setIsMenuOpen(prev => !prev);
    };

    const startDrag = (e) => {
        if (isMenuOpen) return;

        const { x, y } = getClientPos(e);

        setIsDragging(true);
        dragStarted.current = false;
        isStopping.current = false;

        offset.current = {
            x: x - positionRef.current.x,
            y: y - positionRef.current.y
        };
    };

    const snapToNearestCorner = (pos) => {
        const navWidth = 56;
        const buttonHeight = 56;

        const corners = [
            { x: 20, y: 120 },
            { x: window.innerWidth - navWidth - 20, y: 120 },
            { x: 20, y: window.innerHeight - buttonHeight - 20 },
            { x: window.innerWidth - navWidth - 20, y: window.innerHeight - buttonHeight - 20 }
        ];

        const closest = corners.reduce((prev, curr) => {
            const prevDist = Math.hypot(prev.x - pos.x, prev.y - pos.y);
            const currDist = Math.hypot(curr.x - pos.x, curr.y - pos.y);
            return currDist < prevDist ? curr : prev;
        });

        positionRef.current = closest;
        setPosition(closest);
    };

    useEffect(() => {
        const handleMove = (e) => {
            if (!isDragging || isStopping.current) return;

            if (e.cancelable) e.preventDefault();

            const { x, y } = getClientPos(e);

            const dx = Math.abs(x - (positionRef.current.x + offset.current.x));
            const dy = Math.abs(y - (positionRef.current.y + offset.current.y));

            if (dx > dragThreshold || dy > dragThreshold) {
                dragStarted.current = true;
            }

            const navWidth = 56;
            const buttonHeight = 60;

            let newX = x - offset.current.x;
            let newY = y - offset.current.y;

            newX = Math.max(0, Math.min(newX, window.innerWidth - navWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - buttonHeight));

            const newPos = { x: newX, y: newY };

            positionRef.current = newPos;
            setPosition(newPos);
        };

        const stopDragging = () => {
            if (!isDragging) return;

            isStopping.current = true;

            if (dragStarted.current) {
                blockClicks.current = true;

                setTimeout(() => {
                    blockClicks.current = false;
                }, 200);
            }

            const finalPos = positionRef.current;

            if (dragStarted.current) {
                snapToNearestCorner(finalPos);
            }

            dragStarted.current = false;

            setTimeout(() => {
                setIsDragging(false);
                isStopping.current = false;
            }, 60);
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', stopDragging);

        window.addEventListener('touchmove', handleMove, { passive: false });
        window.addEventListener('touchend', stopDragging);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', stopDragging);
        };
    }, [isDragging]);

    useEffect(() => {
        const handleResize = () => {
            const navWidth = 56;
            const buttonHeight = 56;

            let newX = percentRef.current.x * window.innerWidth;
            let newY = percentRef.current.y * window.innerHeight;

            newX = Math.max(0, Math.min(newX, window.innerWidth - navWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - buttonHeight));

            const newPos = { x: newX, y: newY };

            positionRef.current = newPos;
            setPosition(newPos);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <header className="w-full h-[4rem] sm:h-[4rem] md:h-[4rem] lg:h-[5rem] p-4 sticky top-0 flex justify-between items-center text-white bg-black/50 backdrop-blur-lg z-[1000]">
            <img src={logo} alt="Logo" className="w-6 sm:w-6 md:w-8 lg:w-10 h-auto" />
            <h5 className="font-bold font">Technology</h5>


            <nav className="w-full flex justify-end gap-[5rem] items-center">
                <ul className="flex flex-1 justify-center gap-[1.5rem] head-links">

                    <li>
                        <a onClick={() => scrollToSection("home")} className="nav-link cursor-pointer">
                            HOME
                        </a>
                    </li>

                    <li><Link to="/services" className="nav-link">SERVICES</Link></li>
                    <li><Link to="/products" className="nav-link">PRODUCTS</Link></li>
                    <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                    <li><Link to="/clients" className="nav-link">CLIENTS</Link></li>
                    <li><Link to="/team" className="nav-link">TEAM</Link></li>

                    <li>
                        <a onClick={() => scrollToSection("contact")} className="nav-link cursor-pointer">
                            CONTACT
                        </a>
                    </li>

                </ul>

                <a target="_blank" href="https://www.facebook.com/profile.php?id=100045189956593" className="nav-fb-btn nav-fb-btn-pc flex gap-2 items-center">
                    <FaFacebook size={26}/>FACEBOOK PAGE
                </a>

                <a target="_blank" href="https://www.facebook.com/profile.php?id=100045189956593" className="nav-fb-btn nav-fb-btn-cp flex rounded-full items-center">
                    <FaFacebook color="blue" size={34}/>
                </a>
            </nav>

            {/* FLOATING MENU */}
            <nav
                id="nav-cp"
                className={`fixed w-[3.5rem] h-[3.5rem] bg-[#f1f1f1] rounded-full shadow-md flex items-center justify-center z-1000 ${
                    isDragging ? 'scale-110 shadow-2xl' : ''
                }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    touchAction: 'none'
                }}
            >
                <button
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                    onClick={handleAction}
                    className="p-2"
                >
                    <GiHamburgerMenu color="black" size={24} />
                </button>

                {isMenuOpen && (
                    <ul
                        className={`absolute left-0 w-full p-[1rem] flex flex-col gap-4 items-center bg-[#f1f1f1] rounded-full shadow-lg 
                        ${isBottom ? 'bottom-[4rem]' : 'top-[4rem]'}`}
                    >
                        {[
                            { action: () => scrollToSection("home"), icon: <FaHome size={28} />},
                            { to: "/services#services", icon: <FaGears size={28} /> },
                            { to: "/about#about", icon: <IoIosInformationCircle size={28} />},
                            { to: "/clients#clients", icon: <FaHandshake size={28} /> },
                            { to: "/team#team", icon: <RiTeamFill size={28} /> },
                            { action: () => scrollToSection("contact"), icon: <FaPhoneSquare size={28} /> }
                        ].map((item, i) => (
                            <li key={i} className="relative group">
                                {item.action ? (
                                    <button
                                        onClick={(e) => {
                                            if (blockClicks.current) {
                                                e.preventDefault();
                                                return;
                                            }
                                            item.action();
                                            setIsMenuOpen(false);
                                        }}
                                        className="relative"
                                    >
                                        {React.cloneElement(item.icon, { color: item.color || 'black' })}
                                      
                                    </button>
                                ) : (
                                    <Link
                                        to={item.to}
                                        onClick={(e) => {
                                            if (blockClicks.current) {
                                                e.preventDefault();
                                                return;
                                            }
                                            setIsMenuOpen(false);
                                        }}
                                        className="relative"
                                    >
                                        {React.cloneElement(item.icon, { color: item.color || 'black' })}
                                        
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
