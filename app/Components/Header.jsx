'use client';
import Image from 'next/image'
import React from 'react'
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
    return (
        <div className='bg-[#0060af] py-4 px-12 flex justify-between z-50  sticky top-0 
        opacity-0 -translate-y-[100%] size-0 lg:opacity-100 lg:translate-y-0 lg:size-auto  lg:flex items-center :text-[1rem] *:md:text-[0.9rem] *:lg:text-[.8rem] *:xl:text-[0.95vw] *:text-white *:lg:mx-2 *:xl:mx-[1vw]
        '>
            <Image src={astralpaint} height="45px" alt='astral-paint' />
            <div className="flex gap-5 items-center">
                {navlink.map((nav) => (
                    <a 
                        key={nav.id} 
                        href={nav.link} 
                        className='text-sm font-[600] cursor-pointer hover:text-gray-200 transition-colors'
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(nav.link);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {nav.navName}
                    </a>
                ))}
                <button className='bg-white rounded-4xl p-3 px-6 text-xs font-semibold text-[#0060af]'>
                    Enquire Now
                </button>
            </div>
        </div>
    )
}

export default Header