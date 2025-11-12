import React from "react";
import bg from "../assets/footerbg.jpg"; 
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative text-white mt-12"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/80"></div>

      
      <div className="relative max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8 text-gray-300">
        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Delicious Bites</h3>
          <p>
            Serving delightful dishes made with fresh ingredients. Join us for a memorable dining experience filled with taste and joy.
          </p>
          <p className="mt-4 text-gray-400">
            Open Daily: 10:00 AM - 10:00 PM
          </p>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-red-500 text-white hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white hover:scale-110 transition-transform">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 text-white hover:scale-110 transition-transform">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-600 to-red-400 text-white hover:scale-110 transition-transform">
              <FaYoutube />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-orange-300 text-white hover:scale-110 transition-transform">
              <FaGoogle />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Reach Us</h3>
          <p>742 Evergreen Terrace, New York, NY 10012</p>
          <p className="mt-2">Phone: <a href="tel:+12125551234"
           className="hover:text-pink-500">(+1) 224 6787 004</a></p>
          <p className="mt-2">Email: <a href="mailto:hello@deliciousbites.com" className="hover:text-pink-500">hello@deliciousbites.com</a></p>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Quick Info</h3>
          <p>Reserve a table or order online to enjoy our delicious dishes at home.</p>
          <p className="mt-4">Secure Payments, Fresh Ingredients, 24/7 Customer Support.</p>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Delicious Bites. All rights reserved.
      </div>
    </footer>
  );
}
