import React from "react";
import { FaDownload, FaArrowRight, FaGithub, FaJira } from "react-icons/fa";
import { motion } from "framer-motion";
import myImage from "../assets/Shreyas.jpg";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                  Shreyas Mhade
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I create digital experiences that are both visually stunning and
              technically strong. I love turning ideas into interactive, delightful
              user interfaces.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={itemVariants}
            >
              <motion.button 
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 flex-1 sm:flex-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a 
                href="#"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-3 flex-1 sm:flex-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:scale-110 transition-transform" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 mt-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600 mt-1">Months Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600 mt-1">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div 
                className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={myImage} 
                  alt="Shreyas Mhade" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaJira className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-3 -left-3 w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <span className="text-2xl"><FaGithub /></span>
                </motion.div>
              </motion.div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl blur-xl opacity-20 -z-10 transform scale-105"></div>
            </div>
          </motion.div>
          {/* Experience Badge - Fixed Positioning */}
            {/* <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:-bottom-6 lg:right-6 bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg border border-gray-200 flex items-center gap-2 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs lg:text-sm font-semibold text-gray-700">Available for Freelance</span>
            </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}