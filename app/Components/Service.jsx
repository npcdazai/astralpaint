'use client';
import React from 'react';
import redmark from "../images/lineOrange.svg";
import Image from 'next/image';
import pink from "../images/pink.png";
import wallhanging from "../images/download.webp";
import lamp from "../images/lamp.jpg";

const arr = [
    {
        id: 1,
        title: "Wall Painting",
        subTitle: "Lorem ipsum dolor sit amet consectetur.",
        img: wallhanging
    },
    {
        id: 2,
        title: "Water Solution",
        subTitle: "Lorem ipsum dolor sit amet consectetur.",
        img: pink
    },
    {
        id: 3,
        title: "Painting",
        subTitle: "Lorem ipsum dolor sit amet consectetur.",
        img: lamp
    }
];

const Service = ({ homepage }) => {
    return (
        <div className="bg-gradient-to-b from-[#ffa500] via-yellow-300 to-lime-200 pl-2">
            <div className="bg-white py-8 md:py-16 px-4 md:px-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12 flex flex-col items-start">
                        <h5 className="text-base md:text-lg font-bold text-gray-950 mb-2">Services</h5>
                        <div className="relative inline-flex items-center justify-center gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                                Make Your Life Comfortable
                            </h2>
                            <Image src={redmark} alt="orange-underline" width={120} height={8} className="hidden md:block" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                        {arr.map((val) => (
                            <div key={val.id} className="relative rounded-md overflow-hidden group h-[300px] md:h-[400px] shadow-md">
                                <Image
                                    src={val.img}
                                    alt={val.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 py-4 md:py-6 bg-gradient-to-t from-[#f9e26c] to-[#c7d63c]">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
                                    <p className="text-sm text-gray-800 mb-3 md:mb-4">{val.subTitle}</p>
                                    <button className="bg-white text-gray-900 rounded-full px-4 md:px-5 py-2 text-xs md:text-sm font-semibold shadow hover:bg-gray-100 transition">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
