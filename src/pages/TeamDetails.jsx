import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
const teamDetails = {
  1: {
    name: "John Carter",
    title: "Chief Executive",
    gender: "Male",
    phone: "+(123)4567890",
    office: "+(123)4567890",
    email: "test@example.com",
    about:
      "Dedicated executive with a strong background in strategy and operations. Committed to achieving organizational goals.",
    image:
      "https://i.ibb.co/1t8rCTFy/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg",
  },
  2: {
    name: "Charlos Rivery",
    title: "Executive",
    gender: "Male",
    phone: "+(123)4567890",
    office: "+(123)4567890",
    email: "test@example.com",
    about:
      "Passionate leader with experience in restaurant management and customer satisfaction.",
    image:
      "https://i.ibb.co.com/cSy9XGC0/rc-cf-FMh5o5m5-N9-E-unsplash.jpg",
  },
  3: {
    name: "Michael Harris",
    title: "Food Inspector",
    gender: "Male",
    phone: "+(123)4567890",
    office: "+(123)4567890",
    email: "test@example.com",
    about:
      "Expert food inspector ensuring hygiene, safety, and top-quality standards across all departments.",
    image:
      "https://i.ibb.co/jZxXnf6Q/nathalie-coat-n-GFoq-YVa-WM-unsplash.jpg",
  },
};

export default function TeamDetails() {
  const { id } = useParams();
  const person = teamDetails[id];

  if (!person)
    return (
      <>
        <Navbar />
        <p className="text-center py-40 text-gray-600">Team member not found.</p>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20"> 
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
           
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[480px] overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-contain object-center"
              />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-70 text-center py-3">
                <h2 className="text-2xl font-bold text-gray-800">{person.name}</h2>
                <p className="text-red-500">{person.title}</p>
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-red-500 inline-block pb-1">
                Personal Info
              </h3>
              <ul className="space-y-1 text-gray-600 mt-3">
                <li>📞 Phone: {person.phone}</li>
                <li>🏢 Office: {person.office}</li>
                <li>✉️ E-mail: {person.email}</li>
                <li>👤 Gender: {person.gender}</li>
              </ul>
            </motion.div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block pb-1">
                About Me
              </h3>
              <p className="text-gray-600 mt-3">{person.about}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block pb-1">
                Working Time
              </h3>
              <table className="w-full text-sm mt-3 border-t border-gray-200">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">SUN</td>
                    <td>11:30AM - 12:30PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">THU</td>
                    <td>12:00AM - 05:00PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">MON</td>
                    <td>02:00AM - 07:30PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block pb-1">
                Work Experience
              </h3>
              <table className="w-full text-sm mt-3 border-t border-gray-200">
                <thead className="text-gray-500">
                  <tr>
                    <th className="text-left py-2">YEAR</th>
                    <th className="text-left">DEPARTMENT</th>
                    <th className="text-left">POSITION</th>
                    <th className="text-left">COMPANY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">2007 - 2022</td>
                    <td>Civil Engineer</td>
                    <td>Senior Designer</td>
                    <td>Midtown Group</td>
                  </tr>
                  <tr>
                    <td className="py-2">2010 - 2020</td>
                    <td>Civil Engineer</td>
                    <td>Senior Designer</td>
                    <td>Midtown Group</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}
