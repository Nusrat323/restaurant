import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroAbout from "../components/HeroAbout";
import TodaysSpecial from "../components/TodaysSpecial";
import Featured from "../components/Featured";
import OurMenu from "../components/OurMenu";
import Footer from "../components/Footer";
import InstaSubscribe from "../components/InstaSubscribe";
import HomeFeatures from "../components/HomeFeatures";
import TeamSection from "../components/TeamSection";
import HomeReservation from "../components/HomeReservation";

export default function LandingPage() {
  
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart((s) => [...s, item]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Banner />
        <HeroAbout />
        <TodaysSpecial addToCart={addToCart} />
        <Featured />
        <OurMenu addToCart={addToCart} />
        <InstaSubscribe />
        <TeamSection></TeamSection>
        <HomeFeatures />
        <HomeReservation />
      </main>
      <Footer />
    </div>
  );
}
