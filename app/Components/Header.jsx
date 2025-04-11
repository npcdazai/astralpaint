import Image from 'next/image'
import React from 'react'
import astralpaint from "../../public/astralpaint.svg"

const navlink = [
    {
        id: 1,
        navName: "About",
        link: "/"
    },
    {
        id: 2,
        navName: "Category",
        link: "/"
    },
    {
        id: 3,
        navName: "Service",
        link: "/"
    },
    {
        id: 4,
        navName: "Service",
        link: "/"
    },
    {
        id: 5,
        navName: "Colours",
        link: "/"
    },
    {
        id: 6,
        navName: "Downloads",
        link: "/"
    },
    {
        id: 7,
        navName: "Become A Dealer",
        link: "/"
    },
    {
        id: 8,
        navName: "Blogs",
        link: "/"
    },
    {
        id: 9,
        navName: "Contacts",
        link: "/"
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
                    <p key={nav.id} className='text-sm font-[600] cursor-pointer '>{nav.navName}</p>
                ))}
                <button className='bg-white rounded-4xl p-3 px-6 text-xs font-semibold text-[#0060af]'>
                    Enquire Now
                </button>
            </div>
        </div>
    )
}

export default Header