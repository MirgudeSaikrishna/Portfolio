import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Resume Builder",
      description: "An interactive webpage created using react helps in building your first resume.",
      imageUrl: "/images/rebuild.png",
      link: "https://resume-builder-n44nn1vmx-saimirgude-gmailcoms-projects.vercel.app/", 
      tech: "React"
    },
  
    {
      title: "TASK Manager",
      description: "A webpage that helps in managing your tasks",
      imageUrl: "/images/Capture.PNG", 
      link: "https://to-do-sigma-steel.vercel.app/", 
      tech: "React, Weather API"
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 px-6 lg:px-12" id="projects">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col sm:flex-row items-center sm:items-start bg-gradient-to-r ${index < 3 ? "from-gray-800 via-gray-700 to-black" : "from-gray-900 via-gray-800 to-black"} rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <div className="w-full sm:w-1/2 h-36 sm:h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-4 sm:p-6 flex flex-col justify-between sm:w-1/2"> {/* Reduced padding */}
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
              <div className="w-full sm:w-1/2">
                <a
                  href={project.link}
                  className="bg-yellow-300 text-gray-800 px-4 py-1 rounded-full hover:bg-yellow-500 transition-all w-full sm:w-auto"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
