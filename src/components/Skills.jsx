import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava, FaPython, FaFigma } from "react-icons/fa";

function Skills() {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16" id="skills">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technologies
      </motion.h2>

      {/* Skills Icons */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4 sm:px-8">
        {/* Skill Items */}
        {[
          { icon: <FaHtml5 size={40} />, label: "HTML", gradient: "from-orange-500 to-yellow-400" },
          { icon: <FaCss3Alt size={40} />, label: "CSS", gradient: "from-blue-500 to-blue-700" },
          { icon: <FaJs size={40} />, label: "JavaScript", gradient: "from-yellow-500 to-orange-600" },
          { icon: <FaReact size={40} />, label: "React", gradient: "from-blue-400 to-blue-600" },
          { icon: <FaJava size={40} />, label: "Java", gradient: "from-purple-500 to-indigo-500" },
          { icon: <FaPython size={40} />, label: "Python", gradient: "from-blue-400 to-blue-700" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="text-center text-white hover:text-yellow-400 transition relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 + index * 0.2 }}
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-gradient-to-r ${skill.gradient} rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition`}
            >
              {skill.icon}
            </div>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-base sm:text-lg">
              {skill.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
