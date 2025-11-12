import React from "react";
import banner from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
     
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
          Delicious Food
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Freshly prepared meals with love — flavors that feel like home. Join
          us for a memorable dining experience.
        </p>
      </div>
    </section>
  );
};

export default Banner;

