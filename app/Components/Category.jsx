'use client';
import React from 'react';
import redmark from "../images/lineOrange.svg";
import Image from 'next/image';
import ServicesGrid from './ServiceGrid';

const Category = ({ homepage }) => {
    return (
        <div className="bg-gradient-to-b from-[#e70000] via-[#ff6600] to-[#ffa500] pl-2">
            <div className="bg-white py-16 px-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-start "  >
                        <h5 className="text-lg font-bold text-gray-950 mb-2">
                            {homepage.homeCategorySubtitle || "Our Categories"}
                        </h5>
                        <div className="relative inline-flex items-center justify-center gap-4 ">
                            <h2 className="text-3xl font-bold text-black mb-2">
                                {homepage.homeCategoryTitle || "Paint Categories"}
                            </h2>
                            <Image
                                src={redmark}
                                alt="orange-underline"
                                width={120}
                                height={8}
                                // className="absolute -right-24 bottom-0"
                            />
                        </div>
                    </div>
                    <div  >
                    <ServicesGrid homepage={homepage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
