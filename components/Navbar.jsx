"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400">
          JANNAT
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">

          <li>
            <a href="#home" className="hover:text-purple-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-400 duration-300">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen ? <FaTimes /> : <FaBars />
          }
        </div>

      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-8 py-10 bg-black text-xl">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>
        )
      }

    </nav>
  );
};

export default Navbar;