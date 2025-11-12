import React from "react";
import { FaHeart, FaStar, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomeFeatures() {
  const features = [
    {
      title: "Find Your Favorite",
      desc: "Discover your preferred dishes from our chef-curated menu, made with fresh ingredients.",
      icon: <FaHeart className="text-red-600 w-10 h-10 mx-auto mb-2" />,
    },
    {
      title: "Best Seller",
      desc: "Try our most popular dishes loved by our customers, guaranteed to satisfy your cravings.",
      icon: <FaStar className="text-red-600 w-10 h-10 mx-auto mb-2" />,
    },
    {
      title: "Reservation",
      desc: "Book a table easily and enjoy a seamless dining experience with friends and family.",
      icon: <FaCalendarAlt className="text-red-600 w-10 h-10 mx-auto mb-2" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{
                duration: 0.8,
                delay: idx * 0.1, 
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 0, 0, 0.2)",
              }}
              className="bg-gray-100 border border-solid border-gray-200 backdrop-blur-md p-6 text-center
               shadow-md "
            >
              {f.icon}
              <h3 className="text-2xl md:text-2xl font-semibold text-red-600 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-base leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
