import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import banner1 from "../assets/hero2.jpg";
import banner2 from "../assets/hero1.jpg";
import banner3 from "../assets/hero3.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const banners = [
  {
    image: banner1,
    title: "Experience Fine Dining",
    description: "Savor exquisite dishes in a cozy and elegant atmosphere.",
  },
  {
    image: banner2,
    title: "Fresh Ingredients",
    description: "We only use the freshest ingredients for your meals.",
  },
  {
    image: banner3,
    title: "Memorable Moments",
    description: "Create unforgettable memories with your loved ones.",
  },
];

export default function Reservation() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      
      <section className="relative h-[600px] w-full overflow-hidden">
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="min-w-full h-full relative"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {banner.title}
                </h2>
                <p className="text-white text-lg md:text-xl">
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        
        <div className="absolute bottom-5 w-full flex justify-center gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>

     
<section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 bg-white shadow-lg  p-10 border border-solid border-gray-100">
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
      Book Your Table
    </h2>
    <p className="text-gray-600 text-center mb-10">
      Reserve your spot now and enjoy a delightful dining experience.
    </p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="date"
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="time"
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="number"
        placeholder="Number of People"
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <textarea
        placeholder="Special Requests (optional)"
        className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      ></textarea>

      <button
        type="submit"
        className="md:col-span-2 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-transform"
      >
        Reserve Now
      </button>
    </form>

    
    <p className="text-center text-gray-600 mt-8">
      You can also call:{" "}
      <span className="font-semibold text-pink-600">+1 224 6787 004</span>{" "}
      to make a reservation.
    </p>
  </div>
</section>

      <Footer />
    </>
  );
}
