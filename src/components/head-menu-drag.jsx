import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaHome, FaPhoneSquare, FaHandshake } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: 120 });
    const [isDragging, setIsDragging] = useState(false);
    
    const offset = useRef({ x: 0, y: 0 });
    const dragStarted = useRef(false);

    // Toggle menu logic
    const handleAction = () => {
        if (!dragStarted.current) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    // Shared logic for both Mouse and Touch start
    const startDrag = (clientX, clientY) => {
        setIsDragging(true);
        dragStarted.current = false;
        offset.current = {
            x: clientX - position.x,
            y: clientY - position.y
        };
    };

    useEffect(() => {
        const handleMove = (clientX, clientY) => {
            if (!isDragging) return;
            dragStarted.current = true;

            const navWidth = 56; 
            const navHeight = isMenuOpen ? 350 : 60; 

            let newX = clientX - offset.current.x;
            let newY = clientY - offset.current.y;

            // Boundaries
            newX = Math.max(0, Math.min(newX, window.innerWidth - navWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - navHeight));

            setPosition({ x: newX, y: newY });
        };

        // Desktop Handlers
        const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
        // Mobile Handlers
        const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

        const stopDragging = () => {
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
    }, [isDragging, isMenuOpen]);

    return (
        <header className="w-full h-[6rem] p-4 sticky top-0 flex items-center justify-between text-white bg-black z-[1000]">
            <h4 className="font-bold">GTechnology</h4>

            <nav 
                id="nav-cp" 
                onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
                onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
                className={`fixed w-[3.5rem] bg-[#f1f1f1] rounded-full py-[0.5rem] shadow-md flex flex-col items-center z-[2000] transition-shadow ${isDragging ? 'shadow-2xl scale-105' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    touchAction: 'none' // Critical for mobile dragging
                }}
            >
                <button 
                    onMouseUp={handleAction} 
                    onTouchEnd={(e) => {
                        e.preventDefault(); // Prevents "ghost clicks"
                        handleAction();
                    }}
                    className="p-2"
                >
                    <GiHamburgerMenu color="black" size={24} />
                </button>

                {isMenuOpen && (
                    <ul className="w-full p-2 gap-4 flex flex-col items-center border-t border-gray-300 mt-2">
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}><FaHome size={24} color="black"/></Link></li>
                        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}><FaGears color="black" size={24}/></Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}><IoIosInformationCircle color="black" size={24}/></Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}><FaPhoneSquare color="black" size={24}/></Link></li>
                    </ul>
                )}
            </nav>
        </header>
    );
}