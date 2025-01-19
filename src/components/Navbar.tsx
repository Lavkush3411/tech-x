"use client"; // Make it client-side

import Link from "next/link";
import { useState } from "react";
import { Button } from "antd";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link/button is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-min bg-opacity-30">
      <div className="container mx-auto lg:ml-20 px-6 py-4 flex justify-between lg:justify-center  items-center relative">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wider flex-shrink-0">
          <Link href="#home">
            <span className="text-gray-400 lg:mr-44 px-5 py-1 rounded-lg">
              TechX
            </span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden z-top flex items-center">
          <button onClick={toggleMenu} className="  text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Side Navigation - Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 py-10 h-full justify-center">
            <li>
              <Link
                href="#home"
                className="text-white hover:text-blue-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white hover:text-blue-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-white hover:text-blue-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <Button
                  variant="outlined"
                  ghost
                  className="text-white hover:text-blue-700 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="lg:flex lg:gap-10 text-base font-medium text-gray-500 ml-12 space-y-4 lg:space-y-0 hidden lg:block">
          <li>
            <Link
              href="#home"
              passHref
              className="hover:text-blue-700 transition-colors duration-300 text-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              passHref
              className="hover:text-blue-700 transition-colors duration-300 text-gray-600"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              passHref
              className="hover:text-blue-700 transition-colors duration-300 text-gray-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" passHref>
              <Button
                variant="outlined"
                ghost
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                <span className="hover:text-blue-700 transition-colors duration-300 text-gray-600">
                  Contact
                </span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
