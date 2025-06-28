"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Users, Code } from "lucide-react"

export default function About() {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "9.2" },
    { icon: Code, label: "Projects", value: "10+" },
    { icon: Award, label: "Hackathons", value: "3+" },
    { icon: Users, label: "Leadership", value: "President" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 overflow-hidden">
                <img
                  src="/images/moulie-photo.png"
                  alt="Moulie Malhotra"
                  className="w-72 h-72 object-cover rounded-full"
                />
              </div>
            
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Passionate AI/ML Developer</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning at Guru Gobind Singh
              Indraprastha University. With a strong academic record (CGPA: 9.2) and hands-on experience in cutting-edge
              technologies, I'm passionate about creating intelligent solutions that make a real-world impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey spans from developing AI-powered applications to leading teams in hackathons and serving as
              President of the GFS Society. I believe in the power of technology to solve complex problems and improve
              lives.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="text-cyan-400 mb-2" size={24} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
