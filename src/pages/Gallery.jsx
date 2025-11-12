import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import pizza0 from "../assets/pizza0.jpg";
import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pizza4 from "../assets/pizza4.jpg";
import pizza5 from "../assets/pizza5.jpg";
import pizza6 from "../assets/pizza6.jpg";

import asian1 from "../assets/asian1.jpg";
import asian2 from "../assets/asian2.jpg";
import asian3 from "../assets/asian3.jpg";
import asian4 from "../assets/asian4.jpg";
import asian5 from "../assets/asian5.jpg";

import burger1 from "../assets/burger1.jpg";
import burger2 from "../assets/burger2.jpg";
import burger3 from "../assets/burger3.jpg";
import burger4 from "../assets/burger4.jpg";
import burger5 from "../assets/burger5.jpg";
import burger6 from "../assets/burger6.jpg";
import burger7 from "../assets/burger7.jpg";
import burger8 from "../assets/burger8.jpg";

import salad1 from "../assets/salad1.jpg";
import salad2 from "../assets/salad2.jpg";
import salad3 from "../assets/salad3.jpg";
import salad4 from "../assets/salad4.jpg";

import seafood1 from "../assets/seafood1.jpg";
import seafood2 from "../assets/seafood2.jpg";
import seafood3 from "../assets/seafood3.jpg";
import seafood4 from "../assets/seafood4.jpg";
import seafood5 from "../assets/seafood5.jpg";
import seafood6 from "../assets/seafood6.jpg";

import chinese1 from "../assets/chinese1.jpg";
import chinese2 from "../assets/chinese2.jpg";
import chinese3 from "../assets/chinese3.jpg";
import chinese4 from "../assets/chinese4.jpg";
import chinese5 from "../assets/chinese5.jpg";
import chinese6 from "../assets/chinese6.jpg";

import bakery1 from "../assets/bakery1.jpg";
import bakery2 from "../assets/bakery2.jpg";
import bakery3 from "../assets/bakery3.jpg";
import bakery4 from "../assets/bakery4.jpg";
import bakery5 from "../assets/bakery5.jpg";
import bakery6 from "../assets/bakery6.jpg";
import bakery7 from "../assets/bakery7.jpg";
import bakery8 from "../assets/bakery8.jpg";

import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";
import drink4 from "../assets/drink4.jpg";
import drink5 from "../assets/drink5.jpg";

export default function Gallery() {
  const categories = ["All", "Pizza", "Burger", "Asian", "Seafood", "Chinese", "Salad", "Bakery", "Drink"];
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);
  const imagesPerPage = 6;

  const galleryRef = useRef(null); 

  const images = [
    { src: pizza0, category: "Pizza" },
    { src: pizza1, category: "Pizza" },
    { src: pizza2, category: "Pizza" },
    { src: pizza3, category: "Pizza" },
    { src: pizza4, category: "Pizza" },
    { src: pizza5, category: "Pizza" },
    { src: pizza6, category: "Pizza" },

    { src: asian1, category: "Asian" },
    { src: asian2, category: "Asian" },
    { src: asian3, category: "Asian" },
    { src: asian4, category: "Asian" },
    { src: asian5, category: "Asian" },

    { src: burger1, category: "Burger" },
    { src: burger2, category: "Burger" },
    { src: burger3, category: "Burger" },
    { src: burger4, category: "Burger" },
    { src: burger5, category: "Burger" },
    { src: burger6, category: "Burger" },
    { src: burger7, category: "Burger" },
    { src: burger8, category: "Burger" },

    { src: salad1, category: "Salad" },
    { src: salad2, category: "Salad" },
    { src: salad3, category: "Salad" },
    { src: salad4, category: "Salad" },

    { src: seafood1, category: "Seafood" },
    { src: seafood2, category: "Seafood" },
    { src: seafood3, category: "Seafood" },
    { src: seafood4, category: "Seafood" },
    { src: seafood5, category: "Seafood" },
    { src: seafood6, category: "Seafood" },

    { src: chinese1, category: "Chinese" },
    { src: chinese2, category: "Chinese" },
    { src: chinese3, category: "Chinese" },
    { src: chinese4, category: "Chinese" },
    { src: chinese5, category: "Chinese" },
    { src: chinese6, category: "Chinese" },

    { src: bakery1, category: "Bakery" },
    { src: bakery2, category: "Bakery" },
    { src: bakery3, category: "Bakery" },
    { src: bakery4, category: "Bakery" },
    { src: bakery5, category: "Bakery" },
    { src: bakery6, category: "Bakery" },
    { src: bakery7, category: "Bakery" },
    { src: bakery8, category: "Bakery" },

    { src: drink1, category: "Drink" },
    { src: drink2, category: "Drink" },
    { src: drink3, category: "Drink" },
    { src: drink4, category: "Drink" },
    { src: drink5, category: "Drink" },
  ];

  const filteredImages =
    active === "All" ? images : images.filter((img) => img.category === active);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const paginatedImages = filteredImages.slice(
    (page - 1) * imagesPerPage,
    page * imagesPerPage
  );

  const handleOpen = (index) => {
    setSelectedImage(paginatedImages[index]);
    setCurrentIndex(index);
  };

  const handleClose = () => setSelectedImage(null);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % paginatedImages.length;
    setSelectedImage(paginatedImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + paginatedImages.length) % paginatedImages.length;
    setSelectedImage(paginatedImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EFE6" }}>
      <Navbar />

      <section className="py-20" ref={galleryRef}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 mb-10">
            Organize Food Gallery — Explore our delicious dishes captured perfectly.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActive(cat);
                  setPage(1);
                  galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-5 py-2 rounded-full border transition-all ${
                  active === cat
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {paginatedImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
                  onClick={() => handleOpen(index)}
                >
                  <img
                    src={img.src}
                    alt={img.category}
                    className="w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                      {img.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mt-8 overflow-x-auto py-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-full border transition ${
                  page === i + 1
                    ? "bg-pink-500 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
                >
                  <X size={24} />
                </button>

                <button
                  onClick={handlePrev}
                  className="absolute left-6 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
                >
                  <ChevronLeft size={28} />
                </button>

                <motion.img
                  key={selectedImage.src}
                  src={selectedImage.src}
                  alt={selectedImage.category}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-6 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
                >
                  <ChevronRight size={28} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
