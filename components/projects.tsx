"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "FIRELOOP",
      description:
        "AI-powered entertainment interface with real-time emotional personalization, webcam-based mood detection, and voice-triggered playback for immersive viewing experiences.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "AI", "Voice Recognition"],
      features: ["Mood Detection", "Voice Control", "Accessibility Features", "Real-time Personalization"],
      gradient: "from-orange-400 to-red-500",
      github: "https://ad1tyakr.github.io/FireLoop/",
      isLiveDemo: true,
    },
    {
      title: "Sign Language Detector",
      description:
        "AI-powered real-time ASL-to-speech conversion system achieving 92%+ accuracy, enabling cost-effective 3D hand gesture recognition using single low-resolution camera.",
      tech: ["Python", "PyTorch", "OpenCV", "TensorFlow", "Flask"],
      features: ["92%+ Accuracy", "Real-time Processing", "3D Gesture Recognition", "1000+ Users"],
      gradient: "from-blue-400 to-purple-500",
      github: "https://github.com/Mouliemalhotra/SIGN-LANGUAGE-DETECTOR",
      isLiveDemo: false,
    },
    {
      title: "Dream-11 Team Predictor",
      description:
        "Fantasy cricket team suggestion tool leveraging historical data and player statistics to optimize team selection with visual insights and accurate predictions.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
      features: ["Data Analytics", "Visual Insights", "Team Optimization", "Historical Analysis"],
      gradient: "from-green-400 to-emerald-500",
      github: "https://github.com/Mouliemalhotra/DREAM-11",
      isLiveDemo: false,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-xs text-gray-400">
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.isLiveDemo ? <ExternalLink size={16} /> : <Github size={16} />}
                    <span>{project.isLiveDemo ? "Live Demo" : "View Code"}</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
