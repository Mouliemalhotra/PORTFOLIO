"use client"

import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, X } from "lucide-react"
import { useState } from "react"

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const certifications = [
    {
      title: "Data Science Certification",
      issuer: "Microsoft (EDUnet)",
      date: "December 2024",
      description: "Comprehensive data science program covering machine learning, statistics, and data analysis",
      skills: ["Machine Learning", "Statistics", "Data Analysis", "Python"],
      gradient: "from-blue-400 to-purple-500",
      certificateImage: "/certificates/data-science-cert.jpg", // Add your certificate image here
      driveLink: "https://drive.google.com/file/d/1lqAwQcXdrwnt7C9fPfsgAK9UfMlxxrYZ/view?usp=sharing",
    },
    {
      title: "SQL Certification",
      issuer: "Google",
      date: "June 2024",
      description: "Database management and advanced SQL query optimization techniques",
      skills: ["Database Management", "Query Optimization", "Data Modeling", "SQL"],
      gradient: "from-green-400 to-emerald-500",
      certificateImage: "/certificates/sql-cert.jpg", // Add your certificate image here
      driveLink: "https://drive.google.com/file/d/1yWvhIsSwPfBiMOKTo7m8asoBb5KllNJ-/view?usp=sharing",
    },
    {
      title: "Advanced Python",
      issuer: "Infotech",
      date: "May 2024",
      description: "Advanced Python programming concepts and application development",
      skills: ["Advanced Python", "OOP", "Data Structures", "Algorithms"],
      gradient: "from-indigo-400 to-purple-500",
      certificateImage: "/certificates/python-cert.jpg", // Add your certificate image here
      driveLink: "#",
    },
    {
      title: "Programming in C++",
      issuer: "Aptech",
      date: "October 2023",
      description: "Object-oriented programming and advanced C++ concepts",
      skills: ["C++", "OOP", "Memory Management", "STL"],
      gradient: "from-cyan-400 to-blue-500",
      certificateImage: "/certificates/cpp-cert.jpg", // Add your certificate image here
      driveLink: "https://drive.google.com/file/d/1Z17GojwaiRDfciGYS2Jda4jUfp7QZZ2R/view?usp=sharing",
    },
    {
      title: "Programming in C",
      issuer: "Aptech",
      date: "October 2023",
      description: "Fundamental programming concepts and system-level programming in C",
      skills: ["C Programming", "System Programming", "Memory Management", "Algorithms"],
      gradient: "from-gray-400 to-slate-500",
      certificateImage: "/certificates/c-cert.jpg", // Add your certificate image here
      driveLink: "https://drive.google.com/file/d/1t-sCW-iUXWVOyMxe8gut-o9CiIufibtu/view?usp=sharing",
    },
  ]

  const achievements = [
    { icon: Award, label: "Certifications", value: "5+", description: "Industry Recognized" },
    { icon: Award, label: "Skills Mastered", value: "25+", description: "Technical Expertise" },
    { icon: Award, label: "Learning Hours", value: "200+", description: "Continuous Learning" },
    { icon: Award, label: "Platforms", value: "4+", description: "Learning Sources" },
  ]

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCert(cert.title)}
            >
              <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 bg-gradient-to-r ${cert.gradient} rounded-lg`}>
                    <Award className="text-white" size={20} />
                  </div>
                  <motion.button
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (cert.driveLink && cert.driveLink !== "#") {
                        window.open(cert.driveLink, "_blank")
                      }
                    }}
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center text-cyan-400 font-semibold mb-2">
                  <span>{cert.issuer}</span>
                </div>

                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="text-cyan-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="bg-slate-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedCert}</h3>
              <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                <img
                  src={
                    certifications.find((c) => c.title === selectedCert)?.certificateImage ||
                    "/placeholder.svg?height=400&width=600" ||
                    "/placeholder.svg"
                  }
                  alt={selectedCert}
                  className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=600"
                  }}
                />
              </div>
              <p className="text-gray-300 mb-4">{certifications.find((c) => c.title === selectedCert)?.description}</p>

              {/* View Original Certificate Button */}
              {certifications.find((c) => c.title === selectedCert)?.driveLink &&
                certifications.find((c) => c.title === selectedCert)?.driveLink !== "#" && (
                  <motion.button
                    onClick={() => {
                      const cert = certifications.find((c) => c.title === selectedCert)
                      if (cert?.driveLink) {
                        window.open(cert.driveLink, "_blank")
                      }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>View Original Certificate</span>
                  </motion.button>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
