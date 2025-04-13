'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import astralpaint from "../../public/astralpaint.svg"

const navlink = [
    {
        id: 1,
        navName: "About",
        link: "#about"
    },
    {
        id: 2,
        navName: "Category",
        link: "#category"
    },
    {
        id: 3,
        navName: "Service",
        link: "#service"
    },
    {
        id: 4,
        navName: "Colours",
        link: "#colours"
    },
    {
        id: 5,
        navName: "Become A Dealer",
        link: "#dealer"
    },
    {
        id: 6,
        navName: "Blogs",
        link: "#blogs"
    }
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-[#0060af] py-4 px-4 md:px-12 flex justify-between z-50 sticky top-0'>
            <Image src={astralpaint} height="45" alt='astral-paint' className='w-auto' />
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
                </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-5 items-center text-[0.9rem] lg:text-[1rem]">
                {navlink.map((nav) => (
                    <a 
                        key={nav.id} 
                        href={nav.link} 
                        className='text-white font-[600] cursor-pointer hover:text-gray-200 transition-colors'
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(nav.link);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                            setIsMenuOpen(false);
                        }}
                    >
                        {nav.navName}
                    </a>
                ))}
                <button className='bg-white rounded-full p-3 px-6 text-xs font-semibold text-[#0060af]'>
                    Enquire Now
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden fixed inset-0 bg-[#0060af] z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
                    {navlink.map((nav) => (
                        <a 
                            key={nav.id} 
                            href={nav.link} 
                            className='text-white font-[600] cursor-pointer hover:text-gray-200 transition-colors'
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(nav.link);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                                setIsMenuOpen(false);
                            }}
                        >
                            {nav.navName}
                        </a>
                    ))}
                    <button className='bg-white rounded-full p-3 px-6 text-sm font-semibold text-[#0060af]'>
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header