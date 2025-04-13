import Image from "next/image";
import HeroCarousel from "./Components/HeroCarousel";
import About from "./Components/About";
import { fetchHomepageData } from "../lib/graphql";
import Category from "./Components/Category";
import Service from "./Components/Service";
import Poplular from "./Components/Poplular";
import SuccessBanner from "./Components/SuccessBanner";
import Blog from "./Components/Blog";

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
      <div id="hero">
      <HeroCarousel homepage={homepage} />
      </div>
      <div id="about">
        <About homepage={homepage} />
      </div>
      <div id="category">
        <Category homepage={homepage} />
      </div>
      <div id="service">
        <Service homepage={homepage} />
      </div>
      <div id="colours">
        <Poplular colours={colours} />
      </div>
      <div id="dealer">
        <SuccessBanner homepage={homepage} />
      </div>
      <div id="blogs">
        <Blog blogs={blogs} />
      </div>
    </main>
  );
}
