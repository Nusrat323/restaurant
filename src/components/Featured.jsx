import React from "react";
import f1 from "../assets/featured1.jpg";
import f2 from "../assets/featured2.jpg";
import f3 from "../assets/featured3.jpg";
import f4 from "../assets/featured4.jpg";

export default function Featured() {
  const cards = [
    {
      img: f1,
      title: "Catering Services",
      text: "Make your events truly special with our professional catering service. We handle everything from elegant buffets to personalized menus, ensuring your guests enjoy unforgettable flavors and presentation.",
    },
    {
      img: f2,
      title: "Private Dining",
      text: "Enjoy an intimate and personalized dining experience in our exclusive private rooms. Ideal for family gatherings, romantic dinners, or corporate celebrations with customized service and ambiance.",
    },
    {
      img: f3,
      title: "Seasonal Menu",
      text: "We take pride in offering a menu that evolves with the seasons — featuring the freshest local ingredients, new culinary inspirations, and dishes crafted for a perfect dining experience every time.",
    },
  ];

  return (
    <section className="relative">
      <div
        className="bg-cover bg-center min-h-[750px] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${f4})`,
          backgroundAttachment: "scroll", 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-white z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {cards.map((c, i) => (
              <div
                key={i}
                className="bg-white/90 text-gray-900 shadow-2xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={c.img} alt={c.title} className="w-full object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 relative inline-block">
                    {c.title}
                    <span className="absolute left-0 -bottom-1 w-16 h-[3px] bg-pink-500 rounded"></span>
                  </h3>
                  <p className="text-lg leading-relaxed mt-4">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
