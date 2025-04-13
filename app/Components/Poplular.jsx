'use client';
import React from 'react';
import redmark from "../images/lineOrange.svg";
import Image from 'next/image';
import ServicesGrid from './ServiceGrid';

export function ColorCard({ title, colourInfo }) {
    const code = colourInfo?.selectColor || '#000000';
    const brand = "Astral Paints";

    return (
        <div className="group text-center p-2 h-[250px] rounded-md transition duration-300 hover:rounded-2xl hover:drop-shadow-2xl hover:bg-white hover:scale-105">
            
            {brand && (
                <div className="hidden group-hover:block font-semibold text-gray-600 pb-2 ">
                    {brand}
                </div>
            )}

            <div className={`w-[150px] h-[155px] border-2 bg-[${code}] p-1`}>
                <div className="w-[140px] h-[144px] border-2 border-white" />
            </div>

            <div className="font-medium text-gray-600">Colour Name</div>
            <div className="text-sm text-gray-600">{code}</div>
        </div>

    );
}

const Poplular = ({ colours }) => {
    const colorsList = colours?.[0]?.colours?.nodes || [];
    return (
        <div className="bg-gradient-to-b from-lime-200 to-green-600 pl-2">
            <div className="bg-white pb-16 px-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-start "  >
                        <h5 className="text-lg font-bold text-gray-950 mb-2">
                            Colours
                        </h5>
                        <div className="relative inline-flex items-center justify-center gap-4 ">
                            <h2 className="text-3xl font-bold text-black mb-2">
                                Popular Colours
                            </h2>
                            <Image
                                src={redmark}
                                alt="orange-underline"
                                width={120}
                                height={8}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 p-10">
                        {colorsList.map((color, idx) => (
                            <ColorCard key={idx} {...color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poplular;
