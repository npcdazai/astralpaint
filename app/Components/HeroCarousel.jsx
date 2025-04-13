'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroCarousel({ homepage }) {
  const [current, setCurrent] = useState(0);
  const slides = homepage?.banners || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[87vh] overflow-hidden after:absolute after:inset-0 after:bg-[#0003]">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                animation: index === current ? 'bgPanHorizontal 10s linear infinite alternate' : 'none',
              }}
            >
              <Image
                src={slide.bannerImage.node.sourceUrl}
                alt={slide.bannersTitle}
                fill
                className="object-cover scale-[1.1]"
                priority={index === 0}
                quality={90}
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full pl-12 text-white max-w-[50%]">
        <h1
          key={slides[current]?.bannersTitle}
          className="text-white md:text-[3rem] pl-16 sm:text-[2rem]  font-extrabold leading-tight drop-shadow-md opacity-0 translate-x-[-50px]"
          style={{ animation: 'fadeInUp 0.7s ease-out forwards, slideIn 0.7s ease-out forwards' }}
        >
          {slides[current]?.bannersTitle}
        </h1>

        <p
          key={slides[current]?.bannerDescription}
          className="mt-2 font-light capitalize opacity-0 pl-16 translate-x-[-50px]"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.2s forwards, slideIn 0.7s ease-out 0.2s forwards' }}
        >
          {slides[current]?.bannerDescription}
        </p>

        <button className="mt-6 px-6 py-2 w-[150px] ml-3.5 bg-white text-black text-sm rounded-full shadow hover:bg-gray-100">
          {slides[current]?.bannerButton?.title || 'Read More'}
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-8 rounded-3xl transition-all border ${current === index
              ? 'bg-white border-white'
              : 'bg-[#a49cb3] border-transparent'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
