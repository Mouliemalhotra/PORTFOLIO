"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, Wrench, Award, TrendingUp } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Go", level: 80 },
        { name: "C", level: 88 },
        { name: "HTML/CSS", level: 92 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 92 },
        { name: "Deep Learning", level: 88 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 87 },
        { name: "Computer Vision", level: 83 },
        { name: "NLP", level: 80 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Django", level: 82 },
        { name: "TailwindCSS", level: 95 },
        { name: "Flask", level: 80 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Google Cloud", level: 78 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  const achievements = [
    { icon: Award, label: "CGPA", value: "9.2/10", description: "Academic Excellence" },
    { icon: Code, label: "Projects", value: "10+", description: "Completed Successfully" },
    { icon: TrendingUp, label: "Hackathons", value: "3+", description: "Won & Participated" },
    { icon: Brain, label: "AI Models", value: "5+", description: "Deployed in Production" },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning AI/ML, full-stack development, and data science
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg">
                  <achievement.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-cyan-400 font-semibold text-sm mb-1">{achievement.label}</div>
              <div className="text-gray-400 text-xs">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Technical Proficiencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Structures & Algorithms",
                description: "Strong foundation in DSA with competitive programming experience",
                icon: "🧮",
              },
              {
                title: "Artificial Intelligence",
                description: "Deep learning, computer vision, NLP, and ML model deployment",
                icon: "🤖",
              },
              {
                title: "Software Engineering",
                description: "Full-stack development, system design, and scalable architecture",
                icon: "⚙️",
              },
            ].map((competency, index) => (
              <motion.div
                key={competency.title}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{competency.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{competency.title}</h4>
                <p className="text-gray-400 text-sm">{competency.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
