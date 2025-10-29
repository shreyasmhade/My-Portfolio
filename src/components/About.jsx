import React from "react";
import { FaUser, FaMapMarkerAlt, FaBriefcase, FaBullseye, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { label: "Frontend", tech: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"] },
    { label: "Design", tech: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] },
    { label: "Backend", tech: ["Node.js", "Python", "Express", "REST APIs"] },
    { label: "Tools", tech: ["Git", "Firebase", "MongoDB", "Docker"] },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate developer with a keen eye for design and a love for creating
            digital solutions that make a difference.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
              Personal Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 transition-colors">
                <FaUser className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900 w-24">Name:</span>
                <span>Shreyas Mhade</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 transition-colors">
                <FaMapMarkerAlt className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900 w-24">Location:</span>
                <span>Ratnagiri, India</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 transition-colors">
                <FaBriefcase className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900 w-24">Experience:</span>
                <span>3 Months</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 transition-colors">
                <FaBullseye className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900 w-24">Passion:</span>
                <span>Designing Interesting UI</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 transition-colors">
                <FaRocket className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900 w-24">Current Focus:</span>
                <span>Full-stack Development</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.label} className="skill-group">
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">{skill.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.blockquote 
          className="text-center text-xl text-gray-700 italic max-w-3xl mx-auto p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border-l-4 border-emerald-400"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          "I believe in creating digital experiences that are not just functional,
          but also emotionally resonant and memorable."
        </motion.blockquote>
      </div>
    </section>
  );
}