import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const team = [
  {
    id: 1,
    name: "John Carter",
    title: "Chief Executive",
    image:
      "https://i.ibb.co/1t8rCTFy/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg",
  },
  {
    id: 2,
    name: "Charlos Rivery",
    title: "Executive",
    image:
      "https://i.ibb.co.com/cSy9XGC0/rc-cf-FMh5o5m5-N9-E-unsplash.jpg",
  },
  {
    id: 3,
    name: "Michael Harris",
    title: "Food Inspector",
    image:
      "https://i.ibb.co.com/jZxXnf6Q/nathalie-coat-n-GFoq-YVa-WM-unsplash.jpg",
  },
];

export default function TeamSection() {
  const navigate = useNavigate();

  
  useEffect(() => {
    team.forEach((member) => {
      const img = new Image();
      img.src = member.image;
    });
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600 mb-12"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: idx * 0.1 }} 
              className="bg-white shadow-md hover:shadow-xl overflow-hidden cursor-pointer border border-gray-200"
              onClick={() => navigate(`/team/${member.id}`)}
            >
              <div className="w-full h-[420px] bg-gray-100 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="eager" 
                  style={{ display: "block" }}
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-red-500 text-sm font-medium mt-1">
                  {member.title}
                </p>
                <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


