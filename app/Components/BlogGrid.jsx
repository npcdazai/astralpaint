'use client';
import React from 'react';
import Image from 'next/image';
import blogDumy from '../images/blog1.webp';

const BlogGrid = ({ blogs }) => {
    if (!blogs?.nodes?.length) {
        return (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4">
                {/* Left Column - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full md:w-1/4">
                    {[...Array(2)].map((_, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[200px] md:h-[180px] rounded-lg overflow-hidden group shadow-md"
                        >
                            <Image
                                src={blogDumy}
                                alt="Blog Preview"
                                fill
                                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 backdrop-blur-sm bg-black/30">
                                <h3 className="text-white font-semibold text-sm md:text-base">
                                    Blog Preview
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Featured - Full width on mobile */}
                <div className="relative w-full md:w-2/4 h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-lg my-4 md:my-0">
                    <Image
                        src={blogDumy}
                        alt="Featured Blog"
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 backdrop-blur-sm bg-black/30">
                        <h3 className="text-white font-semibold text-lg md:text-xl">
                            Featured Blog
                        </h3>
                        <p className="text-white/80 text-sm mt-2 hidden md:block">Featured blog description here</p>
                    </div>
                </div>

                {/* Right Column - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full md:w-1/4">
                    {[...Array(2)].map((_, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[200px] md:h-[180px] rounded-lg overflow-hidden group shadow-md"
                        >
                            <Image
                                src={blogDumy}
                                alt="Blog Preview"
                                fill
                                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 backdrop-blur-sm bg-black/30">
                                <h3 className="text-white font-semibold text-sm md:text-base">
                                    Blog Preview
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            {blogs.nodes.map((blog, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="relative h-48 sm:h-56">
                        <Image
                            src={blog.featuredImage?.node?.sourceUrl || blogDumy}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">{blog.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                            {blog.excerpt?.replace(/<[^>]*>/g, '') || ''}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                            <span className="text-xs sm:text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
                            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm w-full sm:w-auto text-center sm:text-left transition-colors">
                                Read More →
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogGrid;