import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaHome, FaPhoneSquare, FaHandshake } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

import '../assets/css/headers.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState({ 
        x: 20,
        y: window.innerHeight - 80 
    });
    const [isDragging, setIsDragging] = useState(false);
    
    const offset = useRef({ x: 0, y: 0 });
    const dragStarted = useRef(false);

    const isBottom = position.y > window.innerHeight * 0.6;

    const handleAction = () => {
        if (!dragStarted.current) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const startDrag = (clientX, clientY) => {
        setIsDragging(true);
        dragStarted.current = false;
        offset.current = {
            x: clientX - position.x,
            y: clientY - position.y
        };
    };

    const snapToNearestCorner = () => {
        const navWidth = 56;
        const buttonHeight = 56;
        const corners = [
            { x: 20, y: 120 }, // top-left
            { x: window.innerWidth - navWidth - 20, y: 120 }, // top-right
            { x: 20, y: window.innerHeight - buttonHeight - 20 }, // bottom-left
            { x: window.innerWidth - navWidth - 20, y: window.innerHeight - buttonHeight - 20 } // bottom-right
        ];
        const closest = corners.reduce((prev, curr) => {
            const prevDist = Math.hypot(prev.x - position.x, prev.y - position.y);
            const currDist = Math.hypot(curr.x - position.x, curr.y - position.y);
            return currDist < prevDist ? curr : prev;
        });
        setPosition(closest);
    };

    // Drag logic
    useEffect(() => {
        const handleMove = (clientX, clientY) => {
            if (!isDragging) return;
            dragStarted.current = true;

            const navWidth = 56;
            const menuHeight = 350;
            const buttonHeight = 60;

            let newX = clientX - offset.current.x;
            let newY = clientY - offset.current.y;

            // Limit within screen
            newX = Math.max(0, Math.min(newX, window.innerWidth - navWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - buttonHeight));

            setPosition({ x: newX, y: newY });
        };

        const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
        const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

        const stopDragging = () => {
            if (dragStarted.current) snapToNearestCorner();
            setTimeout(() => setIsDragging(false), 50);
        };

        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', stopDragging);
            window.addEventListener('touchmove', onTouchMove, { passive: false });
            window.addEventListener('touchend', stopDragging);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDragging);
        };
    }, [isDragging, position]);

    // Window resize logic
    useEffect(() => {
        const handleResize = () => {
            const navWidth = 56;
            const buttonHeight = 56;

            let x = Math.min(position.x, window.innerWidth - navWidth - 20);
            let y = Math.min(position.y, window.innerHeight - buttonHeight - 20);

            setPosition({ x, y });
            snapToNearestCorner();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [position]);

    return (
        <header className="w-full h-[6rem] p-4 sticky top-0 flex flex-row items-center justify-between text-[#ffffffe5] bg-black z-[1000]">
            <h4 className="font-bold">GTechnology</h4>

            {/* Desktop Nav */}
            <nav className="w-full gap-[5rem] flex flex-row items-center justify-end">
                <ul className="w-full gap-[1.5rem] head-links flex flex-row flex-1 justify-center">
                    <li><Link to="/" className="nav-link">HOME</Link></li>
                    <li><Link to="/services" className="nav-link">SERVICES</Link></li>
                    <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                    <li><Link to="/clients" className="nav-link">CLIENTS</Link></li>
                    <li><Link to="/team" className="nav-link">TEAM</Link></li>
                    <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
                </ul>

                <a href="https://www.facebook.com/profile.php?id=100045189956593" className="nav-fb-btn nav-fb-btn-pc flex flex-row justify-center items-center gap-2">
                    <FaFacebook size={26}/>FACEBOOK PAGE
                </a>

                <a href="https://www.facebook.com/profile.php?id=100045189956593" className="nav-fb-btn nav-fb-btn-cp flex flex-row justify-center items-center rounded-full">
                    <FaFacebook color="blue" size={34}/>
                </a>
            </nav>

            {/* Draggable Mobile Control Panel */}
            <nav
                id="nav-cp"
                onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
                onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
                className={`fixed w-[3.5rem] h-[3.5rem] bg-[#f1f1f1] rounded-full shadow-md flex items-center justify-center z-[2000] transition-all ${isDragging ? 'shadow-2xl scale-105' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    touchAction: 'none'
                }}
            >
                <button
                    onMouseUp={handleAction}
                    onTouchEnd={(e) => { e.preventDefault(); handleAction(); }}
                    className="p-2"
                >
                    <GiHamburgerMenu color="black" size={24} />
                </button>

                {isMenuOpen && (
                    <ul className={`absolute left-0 w-full p-[1rem] gap-4 flex flex-col items-center bg-[#f1f1f1] rounded-full shadow-lg border border-gray-300
                        ${isBottom ? 'bottom-[4rem]' : 'top-[4rem]'}
                    `}>
                        <li className="relative group flex justify-center">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}><FaHome size={24} color="black" /></Link>
                            <span className="floating-label">HOME</span>
                        </li>
                        <li className="relative group flex justify-center">
                            <Link to="/services" onClick={() => setIsMenuOpen(false)}><FaGears size={24} color="black" /></Link>
                            <span className="floating-label">SERVICES</span>
                        </li>
                        <li className="relative group flex justify-center">
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}><IoIosInformationCircle size={24} color="black" /></Link>
                            <span className="floating-label">ABOUT</span>
                        </li>
                        <li className="relative group flex justify-center">
                            <Link to="/clients" onClick={() => setIsMenuOpen(false)}><FaHandshake size={24} color="black" /></Link>
                            <span className="floating-label">CLIENTS</span>
                        </li>
                        <li className="relative group flex justify-center">
                            <Link to="/team" onClick={() => setIsMenuOpen(false)}><RiTeamFill size={24} color="black" /></Link>
                            <span className="floating-label">TEAM</span>
                        </li>
                        <li className="relative group flex justify-center">
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}><FaPhoneSquare size={24} color="black" /></Link>
                            <span className="floating-label">CONTACT</span>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}