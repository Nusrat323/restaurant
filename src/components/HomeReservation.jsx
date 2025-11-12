import React from "react";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";

export default function HomeReservation() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-9 bg-white shadow-sm p-8 border border-solid border-gray-100">
       
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">
          Reservations
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Book a table online. Leads will reach in your email.
        </p>

        
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          <div className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-400">
            <UserIcon className="h-6 w-6 text-pink-500" />
            <input
              type="text"
              className="w-full outline-none text-gray-700"
              placeholder="Full Name"
            />
          </div>

          
          <div className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-400">
            <EnvelopeIcon className="h-6 w-6 text-pink-500" />
            <input
              type="email"
              className="w-full outline-none text-gray-700"
              placeholder="Your Email ID"
            />
          </div>

          

         
          <div className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-400">
            <CalendarIcon className="h-6 w-6 text-pink-500" />
            <input
              type="date"
              className="w-full outline-none text-gray-700"
              placeholder="Pick a date"
            />
          </div>

          
          
          <div className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-400">
            <ClockIcon className="h-6 w-6 text-pink-500" />
            <input
              type="time"
              className="w-full outline-none text-gray-700"
              placeholder="Pick a time"
            />
          </div>

         
          <div className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-400">
            <PhoneIcon className="h-6 w-6 text-pink-500" />
            <input
              type="tel"
              className="w-full outline-none text-gray-700"
              placeholder="Enter your Phone Number"
            />
          </div>

          
          <div className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-400">
            <UsersIcon className="h-6 w-6 text-pink-500" />
            <input
              type="number"
              min="1"
              className="w-full outline-none text-gray-700"
              placeholder="How many of you?"
            />
          </div>

          
          <div className="md:col-span-2 text-center mt-2">
            <button
              type="submit"
              className="px-8 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white 
              font-semibold hover:scale-105 transition-transform shadow-md"
            >
              Reserve Now
            </button>
          </div>
        </form>

        
    <p className="text-center text-gray-600 mt-8">
      You can also call:{" "}
      <span className="font-semibold text-pink-600">+1 224 6787 004</span>{" "}
      to make a reservation.
    </p>
      </div>
    </section>
  );
}
