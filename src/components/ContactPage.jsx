import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogle, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    
    e.target.reset();
  };

  return (
    <>
      <Navbar />

      
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="https://i.ibb.co/N612VD4Z/featured2.jpg"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            We'd love to hear from you. Reach out or visit us anytime!
          </p>
        </motion.div>
      </section>

     
      <section className="py-20 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative">
        
<AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white  px-6 py-2
       rounded-lg shadow-lg z-50"
    >
      ✅ Message sent successfully!
    </motion.div>
  )}
</AnimatePresence>


       
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-pink-500 inline-block pb-1">
            Get In Touch
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPinIcon className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <p>742 Evergreen Terrace, New York, NY 10012</p>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <p>(+1) 224 6787 004</p>
            </div>

            <div className="flex items-start gap-3">
              <EnvelopeIcon className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <p> hello@deliciousbites.com</p>
            </div>

            <div className="flex items-start gap-3">
              <ClockIcon className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <p>
                <span className="font-semibold">Working Hours:</span><br />
                Weekdays: 10:00 am - 11:00 pm <br />
                Weekends: 11:00 am - 11:30 pm
              </p>
            </div>
          </div>

          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaYoutube, FaGoogle, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-black text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#A9746E] to-[#CBA07D] rounded-3xl shadow-2xl p-10 flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="p-4 rounded-xl border border-transparent focus:border-white focus:ring-2 focus:ring-white outline-none bg-white/20 text-white placeholder-white/80 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="p-4 rounded-xl border border-transparent focus:border-white focus:ring-2 focus:ring-white outline-none bg-white/20 text-white placeholder-white/80 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="p-4 rounded-xl border border-transparent focus:border-white focus:ring-2 focus:ring-white outline-none bg-white/20 text-white placeholder-white/80 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="p-4 rounded-xl border border-transparent focus:border-white focus:ring-2 focus:ring-white outline-none bg-white/20 text-white placeholder-white/80 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      
      <section className="w-full h-[400px] mt-10 mx-auto">
        <iframe
          title="Google Map"
          className="w-full h-full  shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.890941858423!2d-74.00601568459418!3d40.737102979328175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b45d4d16b7%3A0x68ec63a78b4b0da4!2s28%20Seventh%20Ave%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2sus!4v1709586512701!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
