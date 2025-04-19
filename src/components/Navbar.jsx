import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import {Document} from "react-pdf";
// import {resume} from "../images/resume (2).pdf";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Portfolio
        </h1>

        {/* Links */}
        <ul className="hidden sm:flex space-x-6 md:space-x-8 items-center text-sm sm:text-base font-medium">
          <li>
            <button
              onClick={scrollToTop}
              className="hover:text-yellow-400 transition"
            >
              Home
            </button>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        
        <div className="flex space-x-4 items-center">
        <a
            href="../images/MirgudeSaikrishna.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Resume
          </a>
          <a
            href="https://github.com/MirgudeSaikrishna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://in.linkedin.com/in/sai-krishna-mirgude-11154821b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition"
            style={{ color: "#0077b5" }}
          >
            <FaLinkedin size={22} />
          </a>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
