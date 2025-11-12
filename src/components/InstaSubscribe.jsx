import React, { useEffect } from "react";
import i1 from "../assets/insta1.jpg";
import i2 from "../assets/insta2.jpg";
import i3 from "../assets/insta3.jpg";
import i4 from "../assets/insta4.jpg";
import i5 from "../assets/insta5.jpg";
import i6 from "../assets/insta6.jpg";

const images = [i1, i2, i3, i4, i5, i6];

export default function InstaSubscribe() {
  
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Follow Us on <span className="text-pink-600">Instagram</span>
          </h2>
          <p className="text-gray-600">
            We love posting photos of our customers having a great time! 🍽️
          </p>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={img}
                alt={`Insta ${index + 1}`}
                loading="eager" 
                style={{ display: "block" }}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold tracking-wide text-sm uppercase bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-full shadow-md"
                >
                  Follow Us
                </a>
              </div>
            </div>
          ))}
        </div>

      
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-10 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Subscribe</h3>
          <p className="text-gray-600 mb-6">
            Get updates about new dishes and upcoming events directly to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-2/3 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

