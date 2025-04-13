import Image from "next/image";
import HeroCarousel from "./Components/HeroCarousel";
import About from "./Components/About";
import { fetchHomepageData } from "../lib/graphql";
import Category from "./Components/Category";

async function getData() {
  const data = await fetchHomepageData();
  return {
    homepage: data.pages.nodes[0].homepage,
    colours: data.allColourCategory.nodes,
    blogs: data.blogs.nodes,
  };
}

export default async function Home() {
  const { homepage, colours, blogs } = await getData();

  return (
    <main className="min-h-screen">
      <HeroCarousel homepage={homepage} />
      <About homepage={homepage} />
      <Category homepage={homepage} />
    </main>
  );
}
