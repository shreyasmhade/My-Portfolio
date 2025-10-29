import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBullseye,
  FaRocket,
  FaBuilding,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  // Skill groups as per resume
  const skills = [
    { label: "Frontend", tech: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap"] },
    { label: "Backend & Database", tech: ["Node.js", "Express.js", "MongoDB", "Firebase"] },
    { label: "Tools", tech: ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "VS Code"] },
    { label: "Core Competencies", tech: ["UI Development", "API Integration", "Performance Optimization", "Code Debugging"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate Frontend Developer specializing in building responsive, high-performance, and user-focused web applications.
          </p>
        </motion.div>

        {/* Info & Skills Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Personal Information + Education */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full" />
              Personal Information
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-700">
                <FaUser className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold w-24 text-gray-900">Name:</span>
                <span>Shreyas Mhade</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold w-24 text-gray-900">Location:</span>
                <span>Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <FaBriefcase className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold w-24 text-gray-900">Experience:</span>
                <span>Frontend Developer Intern</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <FaBullseye className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold w-24 text-gray-900">Passion:</span>
                <span>Building Interactive UIs</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <FaRocket className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold w-24 text-gray-900">Current Focus:</span>
                <span>MERN & Next.js Development</span>
              </li>
            </ul>

            {/* Highlighted Education Section */}
            <div className="mt-10 bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-400 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-emerald-500" />
                Education
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">B.Tech in Information Technology</span> – Dr. Babasaheb Ambedkar Technological University, Lonere (2021–2025) | CGPA: 7.4
                </li>
                <li>
                  <span className="font-semibold text-gray-900">12th (HSC):</span> Rotary English Medium School, Ratnagiri | 68%
                </li>
                <li>
                  <span className="font-semibold text-gray-900">10th (SSC):</span> Dnyandeep English Medium School, Ratnagiri | 71%
                </li>
              </ul>
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-4 -right-4 w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaReact className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <FaNodeJs className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-6 w-12 h-12 bg-emerald-400 text-white rounded-xl flex items-center justify-center shadow-md"
              animate={{ y: [0, 6, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FaDatabase className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full" />
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">{skill.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 hover:scale-105 transition-all"
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

        {/* Experience Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-emerald-500 rounded-full" />
            Experience
          </h3>
          <div className="flex items-start gap-4">
            <FaBuilding className="text-emerald-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">
                Frontend Developer Intern – Purity Technology Solutions
              </h4>
              <p className="text-sm text-gray-600 mb-2">Jul 2025 – Present | Mumbai, Maharashtra</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Developed and deployed responsive Super Admin Dashboard in React.js improving load time by 35%.</li>
                <li>Integrated REST APIs using Axios to manage CRUD across 5+ core modules.</li>
                <li>Created 20+ modular UI components using Tailwind CSS and Bootstrap.</li>
                <li>Implemented Google Maps API for restaurant location tracking.</li>
                <li>Streamlined sprint cycles via Jira & Bitbucket, reducing turnaround by 25%.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Personal Quote */}
        <motion.blockquote
          className="text-center text-xl text-gray-700 italic max-w-3xl mx-auto p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border-l-4 border-emerald-400"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          "I believe in creating digital experiences that are not just functional, but also meaningful and impactful."
        </motion.blockquote>
      </div>
    </section>
  );
}
