import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden font-sans">
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Next.js Image Component for optimized loading */}
        <Image
          src="/hero.jpg" // REPLACE with your actual image path inside /public
          alt="Kapor Collection - Modern Essentials"
          fill
          priority // Loads this image first as it's above the fold
          className="object-cover object-center scale-105 animate-slow-zoom" // Optional slow zoom effect
          sizes="100vw"
        />

        {/* Gradient Overlay - A blend for a more premium look than solid black */}
        {/* Adjust colors: bg-gradient-to-t from-black/70 via-black/40 to-black/20 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Brand label / Eyebrow text */}
          <span className="inline-block mb-4 text-sm md:text-base uppercase tracking-[0.3em] text-gray-300 font-semibold">
            EST. 2024 — Authentic Wear
          </span>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
            KAPOR
          </h1>

          {/* Subheadline reflecting the brand name meaning */}
          <h2 className="text-2xl md:text-4xl font-medium mb-6 text-gray-100 font-serif">
            Weaving Tradition into{" "}
            <span className="italic text-amber-100">Modern Everyday.</span>
          </h2>

          {/* Descriptive Text */}
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-xl mx-auto leading-relaxed font-light">
            Discover essentials crafted for comfort, designed with intent, and durable enough for real life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto px-4">
            <Link
              href="/shop/new-arrivals"
              className="group relative overflow-hidden bg-white text-black px-8 py-4 font-bold text-base tracking-wide transition-all duration-300 hover:bg-gray-200 hover:shadow-xl text-center w-full sm:w-auto"
            >
              <span className="relative z-10">SHOP THE COLLECTION</span>
            </Link>

            <Link
              href="/our-story"
              className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-bold text-base tracking-wide transition-all duration-300 hover:bg-white hover:text-black text-center w-full sm:w-auto"
            >
              <span>OUR STORY</span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- Optional Bottom Scroll Indicator --- */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <span className="text-white text-xs uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
