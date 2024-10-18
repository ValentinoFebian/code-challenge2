
"use client"
import Link from "next/link"
import React, { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    {/*Toggle Menu for Phone*/}
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 w-auto z-10 bg-[#1E201E] text-white">
            <div className="px-10 py-[1em]">
                <div>
                    <nav className="flex justify-between items-center">

                        {/*Logo*/}
                        <div className="flex flex-row">
                            <img
                                src="icon/Veritas.webp"
                                alt="logo"
                                width={100}
                                height={40}
                            />
                        </div>

                        {/*Menu for Desktop & Tablet*/}
                        <ul className="hidden md:flex flex-row-reverse items-center gap-[4em] pr-[0em]">
                            <li className="p-[0.5em]">
                                <Link href="/teams">TUTORS</Link>
                            </li>
                            <li className="p-[0.5em]">
                                <Link href="/services">SERVICES</Link>
                            </li>
                            <li className="p-[0.5em]">
                                <Link href="/about-us">ABOUT US</Link>
                            </li>
                            <li className="p-[0.5em]">
                                <Link href="/">HOME</Link>
                            </li>
                        </ul>

                        {/*Hamburger Icon for Mobile*/}
                        <div className="md:hidden">
                            <button 
                                onClick={toggleMenu} 
                                className="focus:outline-none"
                                aria-label={isOpen ? "Close menu" : "Open menu"} //Aria-label to increase accessibility
                            >
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>

                {/*Menu for Mobile*/}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center bg-[#1E201E] mt-4 py-4 space-y-4">
                        <Link href="/" onClick={toggleMenu}>HOME</Link>
                        <Link href="/about-us" onClick={toggleMenu}>ABOUT US</Link>
                        <Link href="/services" onClick={toggleMenu}>SERVICES</Link>
                        <Link href="/teams" onClick={toggleMenu}>OUR TEAMS</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;