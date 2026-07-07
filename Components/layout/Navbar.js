"use client";


import React from 'react'


import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 return (
    <nav className="bg-white shadow-md text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Nitin
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;