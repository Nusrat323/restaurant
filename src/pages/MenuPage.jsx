import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuListFull from "../components/MenuListFull";

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          
          <MenuListFull />
        </div>
      </main>
      <Footer />
    </div>
  );
}
