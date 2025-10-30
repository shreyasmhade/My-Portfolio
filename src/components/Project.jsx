import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Project({ project, index }) {
  const Icon = project.icon;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="project-slide w-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
    >
      <div className="project-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Icon */}
        <motion.div 
          className="project-icon w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg"
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={32} color="#fff" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="project-tech flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span 
              key={t}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links flex gap-3 mt-auto">
          <motion.a 
            href={project.link}
            className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 flex-1 justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="group-hover:scale-110 transition-transform disabled" />
            Live Demo
          </motion.a>
          <motion.a 
            href={project.github}
            className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 flex-1 justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="group-hover:scale-110 transition-transform" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}