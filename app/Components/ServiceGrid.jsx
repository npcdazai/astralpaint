import React from "react";

const ServicesGrid = ({ homepage }) => {
    const featured = homepage.categories[0];
    const others = homepage.categories.slice(1);

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4">

            <div className="w-full md:w-1/2">
                <div className="relative rounded-md overflow-hidden group h-[400px] md:h-full shadow-md">
                    <img
                        src={featured.image.node.sourceUrl}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between
            bg-[#ff9119aa]
            group-hover:from-amber-600 group-hover:to-amber-500
            transition-all duration-500 ease-in-out">

                        <h3 className="text-white font-semibold text-lg md:text-xl">{featured.title}</h3>

                        <button className="bg-white text-[#ff9119] rounded-full px-4 py-2 text-xs font-medium shadow-sm hover:bg-gray-100 transition">
                            Read More
                        </button>
                    </div>
                </div>
            </div>



            <div className="w-full md:w-1/2 flex flex-wrap gap-4 content-between">
                {others.map((service, index) => (
                    <div
                        key={index}
                        className="relative w-[calc(50%-0.5rem)] h-[280px] rounded-md overflow-hidden group"
                    >
                        <img
                            src={service.image.node.sourceUrl}
                            alt={service.title}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex backdrop-blur-md transition-all duration-500 bg-transparent hover:bg-[#ff9119aa]">
                            <h3 className="text-white font-semibold text-sm md:text-base">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
