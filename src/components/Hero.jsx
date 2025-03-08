import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 mt-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-8">
        {/* Left Side: Text Content */}
        <motion.div
          className="text-white text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hi, I'm Sai Krishna
          </h1>
          <p className="mt-4 text-lg sm:text-xl opacity-80">
            I am a passionate Full-Stack Web Developer skilled in Web dev, Java(DSA). I specialize in creating responsive
            websites with clean code and modern design principles, delivering
            user-friendly interfaces and efficient functionality.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/gana.jpeg" // Replace with your image URL
            alt="me"
            className="w-2/3 sm:w-1/2 lg:w-3/5 rounded-lg shadow-lg hover:scale-105 transition"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
 
