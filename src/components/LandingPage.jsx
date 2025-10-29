import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import About from './About';
// import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://example.com",
    github: "https://github.com",
    icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
    github: "https://github.com",
    icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["React", "API Integration", "Chart.js", "Geolocation"],
    link: "https://example.com",
    github: "https://github.com",
    icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    link: "https://example.com",
    github: "https://github.com",
    icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    )
  }
];

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <ProjectsSection projects={projectsData} />
      <Contact />
      <Footer />
    </div>
  );
}

// Projects Section Component
function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Component (Updated)
function Project({ project, index }) {
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
      className="w-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
        {/* Icon */}
        <motion.div 
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg"
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span 
              key={t}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 flex-1 justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
          <motion.a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 flex-1 justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}