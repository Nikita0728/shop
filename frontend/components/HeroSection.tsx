import React from 'react';
import Image from 'next/image';
import hero from '../assets/Hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={hero}
          alt="Modern fashion collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
      </div>

      {/* Text content overlay - centered by default */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-24 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 text-[#3E1A49]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Fashion
          </h1>
          
          <div className="space-y-3 md:space-y-4 text-lg sm:text-xl md:text-2xl font-medium">
            <p>Style Comfort Trend</p>
           
          </div>
          
       

          {/* CTA Button with hover effect */}
          <button className="mt-8 px-8 py-3 bg-white text-[#C9363A] rounded-full text-base md:text-lg font-medium hover:bg-[#E5AE90] transition-all duration-300 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;