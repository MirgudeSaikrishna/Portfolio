import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-20 px-6 lg:px-12" id="contact">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto  from-gray-700 via-gray-600 to-gray-500 rounded-lg  p-8">
        <motion.div
          className="flex flex-col items-center sm:flex-row justify-center gap-10 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <span className="text-3xl text-yellow-400"></span>
            <span className="text-lg text-gray-300">Phone:</span>
            <a
              href="tel:+919182362534"
              className="text-yellow-400 hover:text-yellow-500 transition-all"
            >
              +91 9182362534
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-3xl text-yellow-400"></span>
            <span className="text-lg text-gray-300">Email:</span>
            <a
              href="mailto:saimrigude@gmail.com"
              className="text-yellow-400 hover:text-yellow-500 transition-all"
            >
              saimrigude@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
