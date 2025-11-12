import React from "react";
import aboutImg from "../assets/about1.jpg";

const HeroAbout = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <img src={aboutImg} alt="about" className="w-full rounded-2xl shadow-lg object-cover h-80" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">About This Restaurant</h2>
        <p className="text-gray-600 mb-4">
          Delicious Bites started as a family kitchen and grew into a local favorite. We focus on fresh ingredients, seasonal menus, and warm hospitality.
        </p>
        <p className="text-gray-600">
          Our chefs blend traditional recipes with modern touches — every dish is crafted to delight.
        </p>
      </div>
    </div>
  </section>
);

export default HeroAbout;
