"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Zap, Target } from "lucide-react"

export default function Hackathons() {
  const hackathons = [
    {
      title: "Smart India Hackathon 2024",
      project: "Direct Market Access for Farmers",
      description:
        "Developed a comprehensive mobile app eliminating middlemen and boosting farmer profits by 30% through a Django & MongoDB-powered marketplace.",
      achievements: [
        "Eliminated middlemen, boosting farmer profits by 30%",
        "Reduced vendor sourcing time by 40% using Google Maps API",
        "Achieved 90%+ chatbot accuracy in multilingual AI support",
        "Enhanced transaction security with blockchain & JWT authentication",
      ],
      tech: ["Django", "MongoDB", "Google Maps API", "TensorFlow", "PyTorch", "Blockchain", "JWT"],
      icon: Trophy,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Nexathon",
      project: "ONLY Paws - Pet Adoption Platform",
      description:
        "Created an innovative pet adoption platform that increased pet adoption visibility by 50% through real-time shelter listings and AI-driven recommendations.",
      achievements: [
        "Increased pet adoption visibility by 50%",
        "Integrated real-time shelter listings",
        "AI-driven pet recommendations system",
        "Secure 24/7 access with Firebase authentication",
        "Donation support via Stripe integration",
      ],
      tech: ["React", "Firebase", "Stripe", "AI/ML", "JWT", "Real-time Database"],
      icon: Users,
      gradient: "from-pink-400 to-purple-500",
    },
    {
      title: "Hackblocks",
      project: "हमcare - Ambulance Booking System",
      description:
        "Built an emergency response system that reduced ambulance response time by 35% using real-time tracking and automated dispatch.",
      achievements: [
        "Reduced ambulance response time by 35%",
        "Real-time tracking & automated dispatch",
        "24/7 emergency access with OTP security",
        "Instant volunteer alert system",
        "95%+ accuracy in ETA predictions with AI",
      ],
      tech: ["Google Maps API", "Real-time Tracking", "OTP Authentication", "AI Geolocation", "Route Optimization"],
      icon: Zap,
      gradient: "from-red-400 to-pink-500",
    },
  ]

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathon <span className="text-cyan-400">Victories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transforming ideas into impactful solutions through competitive innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.title}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className={`h-2 bg-gradient-to-r ${hackathon.gradient}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${hackathon.gradient} rounded-lg`}>
                      <hackathon.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{hackathon.title}</h3>
                      <p className="text-xl text-cyan-400 font-semibold">{hackathon.project}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">{hackathon.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Target className="mr-2 text-cyan-400" size={20} />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {hackathon.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className={`px-3 py-1 bg-gradient-to-r ${hackathon.gradient} text-white text-sm rounded-full`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Hackathons", value: "3+" },
            { label: "Team Members", value: "15+" },
            { label: "Technologies", value: "20+" },
            { label: "Impact Users", value: "1000+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
