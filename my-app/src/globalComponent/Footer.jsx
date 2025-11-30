import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import navisLogo from "../assets/navisLogo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
    setEmail("");
  };

  const mobileLinks = [
    { name: "Home V.1", path: "/" },
    { name: "About V.1", path: "/about" },
    { name: "Home V.2", path: "/" },
    { name: "About V.2", path: "/about" },
    { name: "Home V.3", path: "/" },
    { name: "About V.3", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Case studies", path: "/portfolio" },
    { name: "Contact V.1", path: "/contact" },
    { name: "Contact V.2", path: "/contact" },
    { name: "Contact V.3", path: "/contact" },
    { name: "Services", path: "/service" },
  ];

  const footerLinks = {
    column1: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Service", path: "/service" },
      { name: "Blog", path: "/blogs" },
    ],
    column2: [
      { name: "About V.1", path: "/about" },
      { name: "About V.2", path: "/about" },
      { name: "About V.3", path: "/about" },
      { name: "Case studies", path: "/portfolio" },
    ],
    column3: [
      { name: "Contact V.1", path: "/contact" },
      { name: "Contact V.2", path: "/contact" },
      { name: "Contact V.3", path: "/contact" },
      { name: "Services", path: "/service" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="w-full px-6 py-4">
      <div className="bg-blackCard-bg text-white rounded-2xl px-6 py-12 md:py-16 max-w-[calc(100%-1rem)] mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src={navisLogo}
              alt="Navis Logo"
              style={{
                width: "162.16px",
                height: "38.14px",
                opacity: 1,
              }}
            />
          </div>

          {/* Newsletter */}
          <h3
            className="mb-4"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "22.9px",
              lineHeight: "30.5px",
              letterSpacing: "-0.92px",
              verticalAlign: "middle",
            }}
          >
            Subscribe to our news later
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-[#3A3A3A] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
              }}
            />
            <Button
              type="submit"
              className="w-full bg-button-bg hover:bg-blue-700 text-white rounded-full py-3 font-medium"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",
              }}
            >
              Subscribe
            </Button>
          </form>

          {/* Mobile Links - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {mobileLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Divider Line */}
          <div className="border-t border-dashed border-gray-600 mb-8"></div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#3A3A3A] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            className="text-center text-gray-400"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "17.96px",
              letterSpacing: "-0.36px",
            }}
          >
            © 2025 Temlis. All rights reserved.
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_auto_auto_auto] gap-x-12 lg:gap-x-16">
          {/* Newsletter Section */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              Subscribe to our news later
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg bg-[#3A3A3A] text-white placeholder-gray-500 border border-transparent focus:border-blue-500 focus:outline-none"
                style={{
                  fontFamily: "Inter",
                  fontSize: "13px",
                  width: "180px",
                }}
              />
              <Button
                type="submit"
                className="bg-button-bg hover:bg-blue-700 text-white rounded-lg px-6 py-2.5 font-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "13px",
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            {footerLinks.column1.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            {footerLinks.column2.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-3">
            {footerLinks.column3.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Bottom Section */}
        <div className="hidden md:flex flex-row justify-between items-center pt-12 mt-12">
          {/* Designer Credit */}
          <div
            className="text-gray-400"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "-0.36px",
            }}
          >
            Designed by Arunijone
          </div>

          {/* Copyright */}
          <div
            className="text-gray-400"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "-0.36px",
            }}
          >
            © 2025 Arunijone. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
