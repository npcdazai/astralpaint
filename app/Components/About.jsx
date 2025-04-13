'use client';
import React, { useState } from 'react';
import redmark from "../images/lineRed.svg";
import Image from 'next/image';
import { fetchHomepageData } from "../../lib/graphql";

const About = ({ homepage }) => {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <div className="bg-red-600 pl-2">
            <div className="bg-white py-8 md:py-16 px-4 md:px-[4rem]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                        <div>
                            <h5 className="text-base md:text-lg font-bold text-gray-950 mb-2">
                                {homepage.homeAboutSubtitle || "About Astral Paints"}
                            </h5>
                            <div className="relative flex items-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                                    {homepage.homeAboutTitle || "Bringing Your Dreams To Life"}
                                </h2>
                                <Image
                                    src={redmark}
                                    alt="red-underline"
                                    width={120}
                                    height={8}
                                    className="absolute right-[-24px] hidden md:block"
                                />
                            </div>
                        </div>
                        <div className="transition-all duration-300">
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {homepage.homeAboutDescription}
                            </p>
                            <button
                                className="mt-4 bg-white border-2 border-red-600 text-red-600 text-xs md:text-sm px-6 md:px-8 py-2 md:py-3 rounded-full transition-colors"
                            >
                                {showFullText ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                            <Image
                                src={homepage.homeAboutVideoImage.node.sourceUrl}
                                alt="About Astral Paints"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white rounded-full p-3 md:p-4 shadow-lg hover:bg-gray-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default About;
