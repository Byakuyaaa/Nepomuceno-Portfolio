import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="#about" className="text-2xl font-bold text-white hover:text-green-500 transition duration-300">
          About Me
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#projects" className="text-white hover:text-green-500 transition duration-300">
            Past Work
          </a>
          <a href="#skills" className="text-white hover:text-green-500 transition duration-300">
            Skills
          </a>
        </nav>

        {/* Hire Me Button (Visible on all screens) */}
        <a
          href="#contact"
          className="inline-flex items-center bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
