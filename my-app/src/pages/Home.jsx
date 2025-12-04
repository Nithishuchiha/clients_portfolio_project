import React from "react";

import HeroSection from "./Home/HeroSection";
import AboutUs from "./Home/AboutUs";
import Portfolio from "./Home/Portfolio";
import Footer from "@/globalComponent/Footer";
import Blog from "./Home/Blog";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Portfolio Section */}
      <Portfolio />
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
