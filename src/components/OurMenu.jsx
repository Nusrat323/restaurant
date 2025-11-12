import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import m1 from "../assets/menu1.jpg";
import m2 from "../assets/menu2.jpg";
import m3 from "../assets/menu3.jpg";
import m4 from "../assets/menu4.jpg";
import m5 from "../assets/menu5.jpg";
import m6 from "../assets/menu6.jpg";

const allItems = [
  { id: 1, category: "starters", name: "Bruschetta", desc: "Crispy Italian bread topped with marinated tomato, garlic & basil.", price: 6, img: m1 },
  { id: 2, category: "breakfast", name: "Eggs Benedict", desc: "Perfectly poached eggs on English muffins with hollandaise sauce.", price: 10, img: m2 },
  { id: 3, category: "lunch", name: "Club Sandwich", desc: "Layered grilled sandwich with chicken, lettuce & creamy mayo.", price: 9, img: m3 },
  { id: 4, category: "dinner", name: "Ribeye Steak", desc: "Tender ribeye steak with rosemary butter and mashed potatoes.", price: 25, img: m4 },
  { id: 5, category: "desserts", name: "Chocolate Mousse", desc: "Rich, velvety mousse made with dark Belgian chocolate.", price: 7, img: m5 },
  { id: 6, category: "desserts", name: "Cheesecake", desc: "New York-style cheesecake topped with fresh berries.", price: 8, img: m6 },
];

export default function OurMenu() {
  const navigate = useNavigate(); 

  
  useEffect(() => {
    allItems.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Menu</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Taste the perfection — crafted by chefs who blend passion, flavor, and art.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map(item => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="eager" 
                  style={{ display: "block" }} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                  ${item.price}
                </span>
              </div>

              <div className="p-4 text-center">
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-pink-600">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-xs md:text-base leading-relaxed break-words">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/menu")}
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-500 transition-colors duration-300"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
