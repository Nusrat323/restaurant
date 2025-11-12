import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StarIcon, UsersIcon, FireIcon, SparklesIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";


const stats = [
  { label: "Satisfied Guests", value: 4820, icon: <UsersIcon className="h-10 w-10 text-pink-500"/> },
  { label: "Creative Chefs", value: 34, icon: <FireIcon className="h-10 w-10 text-pink-500"/> },
  { label: "Signature Dishes", value: 310, icon: <SparklesIcon className="h-10 w-10 text-pink-500"/> },
  { label: "Average Rating", value: 855, icon: <StarIcon className="h-10 w-10 text-pink-500"/> },
];


const teamMembers = [
  { id: 1, name: "John Carter", title: "Chef Executive", image: "https://i.ibb.co/1t8rCTFy/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg" },
  { id: 2, name: "Charlos Rivery", title: "Executive", image: "https://i.ibb.co.com/cSy9XGC0/rc-cf-FMh5o5m5-N9-E-unsplash.jpg" },
  { id: 3, name: "Michael Harris", title: "Food Inspector", image: "https://i.ibb.co.com/jZxXnf6Q/nathalie-coat-n-GFoq-YVa-WM-unsplash.jpg" },
];


const chefs = [
  { image: "https://i.ibb.co/x81WHVzj/man-890885-1280.jpg", name: "Zohran Turner", title: "Master Chef" },
  { image: "https://i.ibb.co.com/zVrnRhFC/arsham-baseri-RQd-XS861-Tyc-unsplash.jpg", name: "Sophia Lee", title: "Pastry Chef" },
  { image: "https://i.ibb.co.com/Q3zQ0yHy/febrian-zakaria-Si-Qgni-cq-Fg-unsplash.jpg", name: "Daniel Kim", title: "Sous Chef" },
];


const reviews = [
  {
    name: "Hannah Adams",
   
    text: "A delightful experience! Every dish was bursting with flavor and beautifully presented. The staff made us feel welcomed and valued.",
  },
  {
    name: "Ethan Turner",
   
    text: "The creativity of the chefs is unmatched. I especially loved the seasonal menu—it was innovative and delicious.",
  },
  {
    name: "Mia Johnson",
   
    text: "Excellent service and an inviting ambiance. The food quality is consistent and highly satisfying. I can't wait to visit again!",
  },
];


const points = [
  "Premium Quality Ingredients",
  "Clean & Hygienic Kitchen",
  "Professional Culinary Team",
  "Private Event Booking",
  "Commitment to Customer Happiness",
];

export default function About() {
  const navigate = useNavigate();
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [currentReview, setCurrentReview] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev =>
        prev.map((count, i) => (count < stats[i].value ? count + Math.ceil(stats[i].value / 100) : count))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(reviewInterval);
  }, []);

  return (
    <>
      <Navbar />

     
      <section className="relative h-[500px] md:h-[600px] w-full">
        <img
          src="https://i.ibb.co.com/jZfxc4hs/hero2.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Delicious Bites
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-md md:text-xl max-w-3xl"
          >
            Experience the finest cuisine crafted with passion. Every dish tells a story of freshness, flavor, and culinary expertise designed to delight your senses.
          </motion.p>
        </div>
      </section>


      
<section className="py-20 px-4 md:px-10 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
  <div className="relative md:w-1/2 flex justify-center">
   
    <img
      src="https://i.ibb.co.com/JF0nmWv9/tommaso-ubezio-okc-Jc8-NXt-Ms-unsplash.jpg"
      alt="Big"
      className=" shadow-xl w-full h-full object-cover"
    />
   
    <img
      src="https://i.ibb.co.com/Kcb1qQFg/insta2.jpg"
      alt="Small"
      className=" shadow-2xl hidden md:block  absolute -bottom-14 -right-1 w-36 h-44 lg:-bottom-14 lg:-right-32 lg:w-60 lg:h-52 object-cover "
    />
  </div>

  <div className="md:w-1/2">
    <h2 className="text-4xl font-bold mb-4 border-b-2 border-pink-500 inline-block pb-1">
      Who We Are
    </h2>
    <p className="text-gray-600 mb-6 text-sm">
      Delicious Bites specializes in crafting unforgettable culinary experiences. Our team is committed to excellence, sourcing only the freshest ingredients and preparing each dish with care and creativity.
    </p>

    <h3 className="text-2xl font-semibold mb-2">Our Commitment to Quality</h3>
    <p className="text-gray-600 mb-4 text-sm">
      Every order is carefully curated and executed. From preparation to presentation, we ensure consistency, hygiene, and exceptional taste.
    </p>

    
    <ul className="mt-6 space-y-2">
      {points.map((point, i) => (
        <li
          key={i}
          className="flex items-center font-semibold text-sm gap-2 text-gray-700"
        >
          <CheckIcon className="h-5 w-5 text-pink-500 border border-solid  flex-shrink-0 " /> {point}
        </li>
      ))}
    </ul>
  </div>
</section>

      
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {teamMembers.map(member => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white  shadow-lg  flex flex-col items-center pb-3"
            >
             
              <img src={member.image} alt={member.name} className="w-full h-full object-cover mb-4"/>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-pink-500 mb-4">{member.title}</p>
              <button
                onClick={() => navigate(`/team/${member.id}`)}
                className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-1 rounded-full text-sm font-semibold
                 transition"
              >
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      
<section
  className="relative py-24 text-white text-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.ibb.co.com/21PK36NZ/lights-2616730-1280.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((stat, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.08 }}
        className="bg-white/10 backdrop-blur-md p-4 rounded-3xl shadow-lg flex flex-col items-center gap-3 border border-white/20"
      >
       
        <div className="bg-pink-500/30 p-4 rounded-full flex items-center justify-center">
          {stat.icon}
        </div>

        
        <p className="text-4xl font-extrabold text-yellow-300">{counters[i]}</p>

        
        <p className="text-sm uppercase tracking-wide">{stat.label}</p>
      </motion.div>
    ))}
  </div>

  
  <span className="absolute top-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></span>
  <span className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></span>
</section>

      
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Our Culinary Experts</h2>
        <p className="text-gray-600 text-center mb-12">
          Each chef on our team brings skill, passion, and creativity. From classic favorites to modern delights, they craft dishes to satisfy every palate.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white  shadow-lg overflow-hidden"
            >
              <img src={chef.image} alt={chef.name} className="w-full h-72 object-cover"/>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{chef.name}</h3>
                <p className="text-pink-500">{chef.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

        
<section 
  className="relative py-20 text-center text-white  mx-6 md:mx-20 overflow-hidden shadow-lg"
  style={{
    backgroundImage: "url('https://i.ibb.co/v6L72p9Q/hero1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 px-6">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
      Enjoy <span className="text-yellow-300">20% OFF</span> on Your First Reservation
    </h2>
    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
      Use code <span className="font-bold text-yellow-300">FIRST20</span> at checkout and enjoy your first meal in our beautiful restaurant ambiance.
    </p>
    <a
      href="/reservation"
      className="px-10 py-4 bg-yellow-300 text-pink-500 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-md inline-block"
    >
      Reserve Now
    </a>
  </div>

  
  <span className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></span>
  <span className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full translate-x-1/3 translate-y-1/3"></span>
</section>

      
      <div className="text-center py-20">
  <h1 className="text-2xl lg:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
    What Our <span className="text-pink-500">Customers Say</span>
  </h1>
  <p className="text-gray-600 max-w-3xl  mb-10 mx-auto text-xs md:text-base">
    Discover what our guests love most about dining with us from our warm hospitality 
    to the unforgettable flavors crafted by our passionate chefs.
  </p>


      <section className=" max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
        <img 
          src="https://i.ibb.co.com/XN9sfqJ/coffee-shop-5080266-1280.jpg" 
          alt="Customer" 
          className="md:w-1/2 h-96 object-cover  shadow-lg"
        />
        <div className="md:w-1/2 relative bg-white p-8  shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400"/>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{reviews[currentReview].text}"</p>
              <p className="text-right font-semibold text-pink-500">
                - {reviews[currentReview].name} 
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

