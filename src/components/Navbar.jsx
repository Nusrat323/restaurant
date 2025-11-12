import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUtensils, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          
          <div className="flex items-center space-x-2">
            <FaUtensils className="text-pink-500 text-2xl" />
            <a href="/"><span className="text-2xl font-bold text-white">Delicious Bites</span></a>
          </div>
          <ul className="hidden md:flex items-center space-x-6 font-medium text-white">
            <li>
              <a href="/" className="hover:text-pink-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/menu" className="hover:text-pink-400 transition-colors">Menu</a>
            </li>
            <li>
              <a href="/reservation" className="hover:text-pink-400 transition-colors">Reservation</a>
            </li>

            
            <li className="relative group">
              <button
                className="flex items-center space-x-1 hover:text-pink-400 transition-colors focus:outline-none"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                <span>Pages</span>
                <FaChevronDown className="text-sm mt-[2px]" />
              </button>

              
              <ul
                className={`absolute left-0 mt-2 w-40 bg-black/80 backdrop-blur-md rounded-lg shadow-lg transition-all duration-200 ${
                  pagesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2 text-white hover:bg-pink-500/70 rounded-t-lg"
                    onClick={() => setPagesOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-white hover:bg-pink-500/70 rounded-b-lg"
                    onClick={() => setPagesOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contact" className="hover:text-pink-400 transition-colors">Contact</a>
            </li>
          </ul>

            
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    open
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      

      
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg text-white p-4 space-y-2 text-center">
          <a href="/" className="block py-2 hover:text-pink-400" onClick={() => setOpen(false)}>Home</a>
          <a href="/menu" className="block py-2 hover:text-pink-400" onClick={() => setOpen(false)}>Menu</a>
          <a href="/reservation" className="block py-2 hover:text-pink-400" onClick={() => setOpen(false)}>Reservation</a>

         
          <div>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="w-full flex justify-center items-center py-2 hover:text-pink-400"
            >
              Pages <FaChevronDown className="ml-1 text-sm" />
            </button>
            {pagesOpen && (
              <div className="space-y-2 bg-black/60 py-2 rounded-lg">
                <Link to="/gallery" className="block py-1 hover:text-pink-400" onClick={() => setOpen(false)}>Gallery</Link>
                <Link to="/about" className="block py-1 hover:text-pink-400" onClick={() => setOpen(false)}>About</Link>
              </div>
            )}
          </div>

          <a href="/contact" className="block py-1 hover:text-pink-400" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



