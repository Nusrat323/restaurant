import React, { useState, useEffect } from "react";
import m1 from "../assets/pizza2.jpg";
import m01 from "../assets/pizza1.jpg";
import m02 from "../assets/pizza0.jpg";
import m03 from "../assets/pizza3.jpg";

import m2 from "../assets/burger6.jpg";
import m002 from "../assets/burger9.jpg";
import m003 from "../assets/burger3.jpg";
import m004 from "../assets/burger4.jpg";

import m3 from "../assets/fried chicken.jpg";
import m0002 from "../assets/chicken.jpg";
import m0003 from "../assets/chicken1.jpg";
import m0004 from "../assets/chicken2.jpg";

import m4 from "../assets/chinese1.jpg";
import m00002 from "../assets/momo2.jpg";
import m00003 from "../assets/momo3.jpg";
import m00004 from "../assets/momo1.jpg";

import m5 from "../assets/menu3.jpg";
import m6 from "../assets/menu2.jpg";
import m7 from "../assets/salad1.jpg";
import m8 from "../assets/menu1.jpg";

import m9 from "../assets/dish3.jpg";
import m10 from "../assets/asian4.jpg";
import m11 from "../assets/seafood2.jpg";
import m12 from "../assets/salad2.jpg";

import m13 from "../assets/menu4.jpg";
import m14 from "../assets/seafood3.jpg";
import m15 from "../assets/chickenparseman.jpg";
import m16 from "../assets/stirfry.jpg";

import m17 from "../assets/bakery2.jpg";
import m18 from "../assets/bakery8.jpg";
import m19 from "../assets/bakery4.jpg";
import m20 from "../assets/bakery5.jpg";

import m21 from "../assets/hero1.jpg";
import m22 from "../assets/chinese5.jpg";
import m23 from "../assets/seafood6.jpg";
import m24 from "../assets/seafood5.jpg";

import m25 from "../assets/asian3.jpg";
import m26 from "../assets/asian5.jpg";
import m27 from "../assets/asian4.jpg";
import m28 from "../assets/asian2.jpg";

import m29 from "../assets/chinese4.jpg";
import m30 from "../assets/chinese2.jpg";
import m31 from "../assets/chinese3.jpg";
import m32 from "../assets/chinese1.jpg";

import m33 from "../assets/drink2.jpg";
import m34 from "../assets/drink1.jpg";
import m35 from "../assets/drink3.jpg";
import m36 from "../assets/insta5.jpg";

import m37 from "../assets/coffee1.jpg";
import m38 from "../assets/coffee2.jpg";
import m39 from "../assets/coffee3.jpg";
import m40 from "../assets/coffee4.jpg";


const startersSub = [
  {
    name: "Pizza",
    items: [
      { id: 101, name: "Margherita Pizza", desc: "Classic pizza with mozzarella, tomato sauce, and basil.", price: 15, img: m1 },
      { id: 102, name: "Pepperoni Pizza", desc: "Topped with spicy pepperoni and melted cheese.", price: 18, img: m01 },
      { id: 103, name: "BBQ Chicken Pizza", desc: "Smoky BBQ sauce with grilled chicken and onions.", price: 20, img: m02 },
      { id: 104, name: "Veggie Delight Pizza", desc: "Loaded with bell peppers, olives, and mushrooms.", price: 17, img: m03 },
    ],
  },
  {
    name: "Burger",
    items: [
      { id: 105, name: "Classic Beef Burger", desc: "Juicy beef patty with cheese, tomato, and lettuce.", price: 14, img: m2 },
      { id: 106, name: "Crispy Chicken Burger", desc: "Crispy fried chicken with tomato, mayo and lettuce.", price: 13, img: m002 },
      { id: 107, name: "Double Cheese Burger", desc: "Two beef patties stacked with melted cheese.", price: 16, img: m003 },
      { id: 108, name: "BBQ chicken Burger", desc: "BBQ Chicken with tomato, onion, lettuce and sauce.", price: 12, img: m004 },
    ],
  },
  {
    name: "Fried Chicken",
    items: [
      { id: 109, name: "Classic Fried Chicken", desc: "Crispy golden chicken with house seasoning.", price: 14, img: m3 },
      { id: 110, name: "Spicy Fried Chicken", desc: "Hot and crunchy fried chicken for spice lovers.", price: 15, img: m0002 },
      { id: 111, name: "Garlic Butter Fried Chicken", desc: "Crispy chicken tossed in garlic butter.", price: 16, img: m0003 },
      { id: 112, name: "Honey Glazed Chicken", desc: "Sweet and savory honey-coated fried chicken.", price: 17, img: m0004 },
    ],
  },
  {
    name: "Momo",
    items: [
      { id: 113, name: "Steamed Chicken Momo", desc: "Soft steamed dumplings filled with chicken.", price: 12, img: m4 },
      { id: 114, name: "Fried Veg Momo", desc: "Golden fried momos stuffed with fresh vegetables.", price: 10, img: m00002 },
      { id: 115, name: "Spicy Schezwan Momo", desc: "Tossed in spicy schezwan sauce for extra flavor.", price: 13, img: m00003 },
      { id: 116, name: "Cheese Momo", desc: "Soft dumplings stuffed with melted cheese filling.", price: 14, img: m00004 },
    ],
  },
];

const menuItems = [
  
  { id: 1, name: "Starters", desc: "", price: "", img: "", category: "Starters" },

  // Breakfast
  { id: 5, name: "3 Layer Sandwich", desc: "Triple-layered sandwich with chicken, bacon, lettuce, and tomato.", price: 15, img: m5, category: "Breakfast" },
  { id: 6, name: "Eggs Benedict Bruschetta", desc: "Combination of perfectly poached eggs on toasted bruschetta with hollandaise sauce.", price: 12, img: m6, category: "Breakfast" },
  { id: 7, name: "Mixed Salad", desc: "Fresh mix of greens, cherry tomatoes, cucumbers, and choice of dressing.", price: 10, img: m7, category: "Breakfast" },
  { id: 8, name: "French Toast", desc: "Golden french toast topped with powdered sugar and fruits.", price: 13, img: m8, category: "Breakfast" },

  // Lunch
  { id: 9, name: "Grilled Steak", desc: "Juicy grilled steak served with garlic butter and roasted vegetables.", price: 25, img: m9, category: "Lunch" },
  { id: 10, name: "Chicken Biryani", desc: "Fragrant basmati rice with tender chicken, spices, and fried onions.", price: 18, img: m10, category: "Lunch" },
  { id: 11, name: "Sushi Platter", desc: "Assorted sushi rolls with fresh fish, avocado, and cucumber.", price: 22, img: m11, category: "Lunch" },
  { id: 12, name: "Mixed Salad", desc: "Fresh greens with cherry tomatoes, cucumbers, and a light vinaigrette.", price: 14, img: m12, category: "Lunch" },

  // Dinner
  { id: 13, name: "Ribeye Steak", desc: "Grilled ribeye with garlic butter and seasonal vegetables.", price: 35, img: m13, category: "Dinner" },
  { id: 14, name: "Baked Salmon", desc: "Oven-baked salmon with lemon and herbs, served with roasted veggies.", price: 30, img: m14, category: "Dinner" },
  { id: 15, name: "Chicken Parmesan", desc: "Breaded chicken baked with tomato sauce and melted cheese.", price: 28, img: m15, category: "Dinner" },
  { id: 16, name: "Vegetable Stir Fry", desc: "Fresh vegetables sautéed in a tangy soy-garlic sauce.", price: 22, img: m16, category: "Dinner" },

  // Desserts
  { id: 17, name: "Cheesecake", desc: "Creamy cheesecake topped with fresh berries and a drizzle of chocolate.", price: 12, img: m17, category: "Desserts" },
  { id: 18, name: "Fruit Tart", desc: "Crispy tart shell filled with custard and topped with seasonal fruits.", price: 11, img: m18, category: "Desserts" },
  { id: 19, name: "Berry Pie", desc: "Flaky pie crust filled with mixed berries and a hint of cinnamon.", price: 10, img: m19, category: "Desserts" },
  { id: 20, name: "Croissant", desc: "Buttery, flaky croissant perfect for a sweet or savory treat.", price: 9, img: m20, category: "Desserts" },

  // Seafood
  { id: 21, name: "Seafood Platter", desc: "A grand platter with prawns, mussels, and crab, served with dipping sauces.", price: 50, img: m21, category: "Seafood" },
  { id: 22, name: "Crab Noodles", desc: "Stir-fried noodles with fresh crab meat and vegetables in a savory sauce.", price: 35, img: m22, category: "Seafood" },
  { id: 23, name: "Shell Soup", desc: "Creamy soup made from assorted shells and seafood herbs.", price: 28, img: m23, category: "Seafood" },
  { id: 24, name: "Whole Lobster", desc: "Succulent whole lobster cooked with garlic butter and lemon.", price: 65, img: m24, category: "Seafood" },

  // Asian
  { id: 25, name: "Kabab Platter", desc: "Assorted grilled kababs served with mint chutney and naan.", price: 28, img: m25, category: "Asian" },
  { id: 26, name: "Butter Chicken", desc: "Creamy and spiced chicken curry served with basmati rice.", price: 25, img: m26, category: "Asian" },
  { id: 27, name: "Basmati Vegetable Rice", desc: "Fragrant basmati rice cooked with fresh seasonal vegetables and spices.", price: 20, img: m27, category: "Asian" },
  { id: 28, name: "Chicken Handi Karai", desc: "Traditional chicken cooked in a handi with rich spices and tomato gravy.", price: 27, img: m28, category: "Asian" },

  // Chinese
  { id: 29, name: "Fried Rice", desc: "Stir-fried rice with vegetables, eggs, and soy sauce.", price: 18, img: m29, category: "Chinese" },
  { id: 30, name: "Ramen", desc: "Hot noodle soup with vegetables, egg, and flavorful broth.", price: 20, img: m30, category: "Chinese" },
  { id: 31, name: "Fried Chicken", desc: "Crispy golden chicken with a savory Chinese-style seasoning.", price: 22, img: m31, category: "Chinese" },
  { id: 32, name: "Dumpling", desc: "Steamed dumplings filled with meat or vegetables, served with dipping sauce.", price: 15, img: m32, category: "Chinese" },

  // Drinks
  { id: 33, name: "Lemonade", desc: "Freshly squeezed lemons with a touch of sugar and ice.", price: 5, img: m33, category: "Drinks" },
  { id: 34, name: "Orange Juice", desc: "Fresh orange juice, served chilled.", price: 6, img: m34, category: "Drinks" },
  { id: 35, name: "Mint Drink", desc: "Refreshing mint drink with crushed mint leaves and lemon.", price: 5, img: m35, category: "Drinks" },
  { id: 36, name: "Mixed Fruit Mohito", desc: "A blend of tropical fruits with mint, lime, and soda.", price: 7, img: m36, category: "Drinks" },

  // Coffee
{ id: 33, name: "Espresso", desc: "Strong and rich coffee shot brewed to perfection.", price: 5, img: m37, category: "Coffee" },
{ id: 34, name: "Cappuccino", desc: "Smooth blend of espresso, steamed milk, and frothy foam.", price: 6, img: m38, category: "Coffee" },
{ id: 35, name: "Iced Coffee", desc: "Chilled coffee served over ice with a hint of sweetness.", price: 5, img: m39, category: "Coffee" },
{ id: 36, name: "Latte", desc: "Creamy coffee made with espresso and steamed milk.", price: 6, img: m40, category: "Coffee" },

];

const categories = ["All", "Starters", "Breakfast", "Lunch", "Dinner", "Desserts", "Seafood", "Asian", "Chinese", "Drinks", "Coffee"];

export default function MenuListFull() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = active === "All" ? menuItems : menuItems.filter(item => item.category === active);
  const categoriesToShow =
    active === "All"
      ? categories.slice(1).map(cat => ({ name: cat, items: menuItems.filter(item => item.category === cat) }))
      : [{ name: active, items: filteredItems }];

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 space-y-12">
      <div className="justify-center mb-8">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="border border-pink-500 rounded px-6 py-2 text-gray-700"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {categoriesToShow.map(cat => {
        if (cat.name === "Starters") {
          return (
            <section key="Starters" className="space-y-10">
              <div className="text-center">
                <h2 className="text-4xl font-extralight text-yellow-600 tracking-wider">Starters</h2>
              </div>

              {startersSub.map(sub => (
                <div key={sub.name} className="space-y-10">
                  <h3 className="text-2xl text-center font-semibold text-yellow-600">{sub.name}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {sub.items.map(item => (
                      <div key={item.id} className="flex gap-6 items-start">
                        <div className="w-36 h-28 flex-shrink-0 overflow-hidden border border-gray-300">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-red-600">{item.name}</h3>
                          <p className="text-gray-600 text-sm mt-1 leading-relaxed break-words">{item.desc}</p>
                        </div>
                        <div className="flex-shrink-0 text-sm bg-red-600 px-3 py-1 font-semibold text-white text-right">
                          ${item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-6">
                <div
                  className="w-5/6 h-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255,255,0,0) 0%, #facc15 20%, #f87171 50%, #facc15 80%, rgba(255,255,0,0) 100%)",
                  }}
                ></div>
              </div>
            </section>
          );
        }

        if (!cat.items.length) return null;
        return (
          <section key={cat.name} className="space-y-10">
            <div className="text-center">
              <h2 className="text-4xl font-extralight text-yellow-600 tracking-wider">{cat.name}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cat.items.map(item => (
                <div key={item.id} className="flex gap-6 items-start">
                  <div className="w-36 h-28 flex-shrink-0 overflow-hidden border border-gray-300">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-red-600">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed break-words">{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-sm bg-red-600 px-3 py-1 font-semibold text-white text-right">
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <div
                className="w-5/6 h-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,0,0) 0%, #facc15 20%, #f87171 50%, #facc15 80%, rgba(255,255,0,0) 100%)",
                }}
              ></div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
