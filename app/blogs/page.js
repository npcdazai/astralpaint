import { fetchHomepageData } from "../../lib/graphql";
import BlogGrid from "../Components/BlogGrid";
import Image from "next/image";
import redmark from "../images/lineOrange.svg";

async function getData() {
  const data = await fetchHomepageData();
  return {
    blogs: data.blogs.nodes,
  };
}

export default async function BlogsPage() {
  const { blogs } = await getData();

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-[#e70000] via-[#ff6600] to-[#ffa500] pl-2">
        <div className="bg-white py-16 px-[4rem]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-start">
              <h5 className="text-lg font-bold text-gray-950 mb-2">
                Our Blogs
              </h5>
              <div className="relative inline-flex items-center justify-center gap-4">
                <h2 className="text-3xl font-bold text-black mb-2">
                  Latest Articles
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
              <BlogGrid blogs={{ nodes: blogs }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}