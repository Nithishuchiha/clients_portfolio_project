import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileMenuDrawer from "./MobileMenuDrawer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blogs", path: "/blogs" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-screen max-w-full rounded-lg bg-gray-50 border-b border-gray-200 relative">
      <div className="w-full max-w-full px-6 py-4">
        <div className="w-full flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex w-full items-center justify-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 text-center align-middle ${
                    isActive ? "text-button-bg" : "text-gray-700 "
                  }`
                }
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "15.68px",
                  lineHeight: "22.35px",
                  letterSpacing: "-0.08px",
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <Link to="/contact" className="hidden md:block">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 h-11 shadow-sm text-center align-middle"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                fontSize: "15.78px",
                lineHeight: "22.47px",
                letterSpacing: "-0.08px",
              }}
            >
              Contact
            </Button>
          </Link>

          {/* Mobile Menu Drawer Component */}
          <MobileMenuDrawer
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
            navLinks={navLinks}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
