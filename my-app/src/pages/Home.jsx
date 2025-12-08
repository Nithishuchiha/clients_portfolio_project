import React, { useState } from "react";

import HeroSection from "./Home/HeroSection";
import AboutUs from "./Home/AboutUs";
import Portfolio from "./Home/Portfolio";
import Footer from "@/globalComponent/Footer";
import Blog from "./Home/Blog";
import ContactUs from "./ContactUs";
import ServiceCategories from "./Service/ServiceCategories";

const Home = () => {
  const [featuredServiceId, setFeaturedServiceId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection />
      <ServiceCategories
        showFilters={false}
        featuredServiceId={featuredServiceId}
        setFeaturedServiceId={setFeaturedServiceId}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {/* About Us Section */}
      <AboutUs />

      {/* Portfolio Section */}
      <Portfolio />
      <Blog />
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
