import React, { useEffect, useState, useRef } from "react";
import d1 from "../assets/dish1.jpg";
import d2 from "../assets/dish2.jpg";
import d3 from "../assets/dish3.jpg";
import d4 from "../assets/dish4.jpg";
import bg from "../assets/featured4.jpg";

const slides = [
  {
    id: 1,
    img: d1,
    name: "Grilled Salmon",
    desc: "Perfectly seared Atlantic salmon glazed with lemon butter sauce, served alongside sautéed vegetables.",
    price: 18,
  },
  {
    id: 2,
    img: d2,
    name: "Spicy Szechuan Noodles",
    desc: "Authentic Asian-style noodles tossed in a spicy Szechuan sauce with roasted peanuts and spring onions.",
    price: 12,
  },
  {
    id: 3,
    img: d3,
    name: "Classic Beef Steak",
    desc: "Juicy premium-cut steak grilled to perfection, topped with aromatic herb butter and served with sautéed vegetables.",
    price: 22,
  },
  {
    id: 4,
    img: d4,
    name: "Berry Cheesecake",
    desc: "Rich and creamy cheesecake layered with a buttery crust, topped with fresh seasonal berries.",
    price: 7,
  },
];

export default function TodaysSpecial() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer.current);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h2 className="text-5xl font-extrabold mb-3 tracking-wide text-yellow-400 drop-shadow-lg">
          Today’s Special
        </h2>
        <p className="text-gray-200 mb-16 text-lg max-w-2xl mx-auto">
          Experience our chef’s top creations — handpicked dishes crafted fresh
          with love and the finest ingredients.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
           
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white text-xl transition"
            >
              ‹
            </button>

            
            <div className="flex-1 overflow-hidden px-2">
              <div className="relative w-full h-auto">
                {slides.map((s, i) => (
                  <div
                    key={s.id}
                    className={`transition-opacity duration-700 ease-in-out ${
                      i === index
                        ? "opacity-100 relative z-10"
                        : "opacity-0 absolute inset-0 z-0 pointer-events-none"
                    }`}
                  >
                    <div
                      className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 
                      bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl 
                      border border-white/10 w-full max-w-5xl mx-auto"
                    >
                     
                      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                        <img
                          src={s.img}
                          alt={s.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      
                      <div className="text-left lg:px-10 lg:py-10 px-4 py-6 flex flex-col justify-center space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300">
                          {s.name}
                        </h3>
                        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                          {s.desc}
                        </p>
                        <p className="text-xl md:text-2xl font-semibold text-white">
                          ${s.price}{" "}
                          <span className="text-pink-400 text-base md:text-lg font-semibold">
                            only
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white text-xl transition"
            >
              ›
            </button>
          </div>
        </div>

        
        <div className="flex justify-center mt-10 space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-yellow-400 w-6" : "bg-gray-400/50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
