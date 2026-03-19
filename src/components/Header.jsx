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

    const positionRef = useRef(position);
    const percentRef = useRef({ x: 0, y: 0 });
    const offset = useRef({ x: 0, y: 0 });

    const dragStarted = useRef(false);
    const isStopping = useRef(false);
    const blockClicks = useRef(false); // ✅ NEW FIX

    const dragThreshold = 6;

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
                blockClicks.current = true; // ✅ BLOCK AFTER DRAG

                setTimeout(() => {
                    blockClicks.current = false;
                }, 200); // 🔥 tweak if needed
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

    // ✅ RESPONSIVE RESIZE
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
        <header className="w-full h-[6rem] p-4 sticky top-0 flex justify-between items-center text-[#ffffffe5] bg-black z-[1000]">
            <h4 className="font-bold">GTechnology</h4>

            <nav className="w-full flex justify-end gap-[5rem] items-center">
                <ul className="flex flex-1 justify-center gap-[1.5rem] head-links">
                    <li><Link to="/" className="nav-link">HOME</Link></li>
                    <li><Link to="/services" className="nav-link">SERVICES</Link></li>
                    <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                    <li><Link to="/clients" className="nav-link">CLIENTS</Link></li>
                    <li><Link to="/team" className="nav-link">TEAM</Link></li>
                    <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
                </ul>

                <a href="#" className="nav-fb-btn nav-fb-btn-pc flex gap-2 items-center">
                    <FaFacebook size={26}/>FACEBOOK PAGE
                </a>

                <a href="#" className="nav-fb-btn nav-fb-btn-cp flex rounded-full items-center">
                    <FaFacebook color="blue" size={34}/>
                </a>
            </nav>

            {/* DRAG BUTTON */}
            <nav
                id="nav-cp"
                className={`fixed w-[3.5rem] h-[3.5rem] bg-[#f1f1f1] rounded-full shadow-md flex items-center justify-center z-[2000] ${
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
                        className={`absolute left-0 w-full p-[1rem] flex flex-col gap-4 items-center bg-[#f1f1f1] rounded-full shadow-lg border
                        ${isBottom ? 'bottom-[4rem]' : 'top-[4rem]'}`}
                    >
                        {[
                            { to: "/", icon: <FaHome size={28} /> },
                            { to: "/services", icon: <FaGears size={28} /> },
                            { to: "/about", icon: <IoIosInformationCircle size={28} /> },
                            { to: "/clients", icon: <FaHandshake size={28} /> },
                            { to: "/team", icon: <RiTeamFill size={28} /> },
                            { to: "/contact", icon: <FaPhoneSquare size={28} /> }
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.to}
                                    onClick={(e) => {
                                        if (blockClicks.current) {
                                            e.preventDefault();
                                            return;
                                        }
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {React.cloneElement(item.icon, { color: "black" })}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}