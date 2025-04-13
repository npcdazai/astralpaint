import React from "react";

const BlogGrid = ({ blogs }) => {
    if (!blogs?.nodes?.length) {
        return <div>No blog posts available</div>;
    }

    const featured = blogs.nodes[0];
    const others = blogs.nodes.slice(1, 5); 
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
                {others.slice(0, 2).map((service, index) => (
                    <div
                        key={index}
                        className="relative h-[200px] rounded-md overflow-hidden group shadow-md"
                    >
                        <img
                            src={service.featuredImage.node.sourceUrl}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 backdrop-blur-md bg-black/40 group-hover:bg-[#ff9119aa] transition-all duration-500">
                            <p className="text-white text-xs mb-1">10 Jan 2024</p>
                            <h3 className="text-white font-semibold text-sm md:text-base">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Center (Featured) */}
            <div className="relative h-[420px] md:h-full rounded-md overflow-hidden group shadow-lg">
                <img
                    src={featured.featuredImage.node.sourceUrl}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ff9119aa] flex flex-col gap-2 transition-all duration-500">
                    <p className="text-white text-sm">20 Jan 2024</p>
                    <h3 className="text-white font-bold text-xl md:text-2xl">
                        {featured.title}
                    </h3>
                    <button className="self-start bg-white text-[#ff9119] rounded-full px-4 py-2 text-xs font-medium shadow-sm hover:bg-gray-100 transition">
                        Read More
                    </button>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
                {others.slice(2, 4).map((service, index) => (
                    <div
                        key={index}
                        className="relative h-[200px] rounded-md overflow-hidden group shadow-md"
                    >
                        <img
                            src={service.featuredImage.node.sourceUrl}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 backdrop-blur-md bg-black/40 group-hover:bg-[#ff9119aa] transition-all duration-500">
                            <p className="text-white text-xs mb-1">10 Jan 2024</p>
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

export default BlogGrid;
