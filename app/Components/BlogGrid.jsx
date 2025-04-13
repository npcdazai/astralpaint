

import React from "react";
import Image from "next/image";
import blogDumy from "../images/blog1.webp";

const BlogGrid = ({ blogs }) => {
    if (!blogs?.nodes?.length) {
        return (
            <div className="flex h-full items-center justify-between gap-8 px-4">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                    {[...Array(2)].map((_, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[180px] rounded-md overflow-hidden group"
                        >
                            <Image
                                src={blogDumy}
                                alt="Dummy"
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex backdrop-blur-md transition-all duration-500 bg-transparent">
                                <h3 className="text-black font-semibold text-sm md:text-base">
                                    Blog
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Featured */}
                <div className="relative w-[500px] h-[400px] rounded-md overflow-hidden group">
                    <Image
                        src={blogDumy}
                        alt="Dummy"
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex backdrop-blur-md transition-all duration-500 bg-transparent">
                        <h3 className="text-black font-semibold text-sm md:text-base">
                            Blog
                        </h3>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                    {[...Array(2)].map((_, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[180px] rounded-md overflow-hidden group"
                        >
                            <Image
                                src={blogDumy}
                                alt="Dummy"
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex backdrop-blur-md transition-all duration-500 bg-transparent">
                                <h3 className="text-black font-semibold text-sm md:text-base">
                                    Blog
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // The rest of your blog rendering logic goes here for when blogs exist
    return (
        <div className="text-center text-gray-600 py-10">
            {/* You can replace this with your real blog layout */}
            Blogs coming soon!
        </div>
    );
};

export default BlogGrid;
