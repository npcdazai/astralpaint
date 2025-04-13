'use client';
import React from 'react';
import redmark from "../images/lineOrange.svg";
import Image from 'next/image';
import BlogGrid from './BlogGrid';

const Blog = ({ blogs }) => {
    return (
        <div className="bg-gradient-to-b from-[#e70000] via-[#ff6600] to-[#ffa500] pl-2">
            <div className="bg-white py-16 px-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-start">
                        <h5 className="text-lg font-bold text-gray-950 mb-2">
                            Our Blogs
                        </h5>
                        <div className="relative inline-flex items-center justify-center gap-4">
                            <h2 className="text-3xl font-bold text-black mb-2">
                                Latest
                            </h2>
                            <Image
                                src={redmark}
                                alt="orange-underline"
                                width={120}
                                height={8}
                            />
                        </div>
                    </div>
                    <div>
                        <BlogGrid blogs={blogs} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
