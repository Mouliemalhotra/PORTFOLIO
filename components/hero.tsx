"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: Math.random() > 0.5 ? "#06b6d4" : "#8b5cf6",
              opacity: Math.random() * 0.6 + 0.2,
            }}
            animate={{
              y: [0, -100 - Math.random() * 100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large Gradient Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 ? "rgba(6, 182, 212, 0.1)" : "rgba(139, 92, 246, 0.1)"
              }, transparent)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`line-v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                left: `${i * 5}%`,
                height: "100%",
              }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`line-h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                top: `${i * 7}%`,
                width: "100%",
              }}
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Pulsing Rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-cyan-400/10"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
              width: 100 + i * 50,
              height: 100 + i * 50,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Floating Code Symbols */}
        {["<", ">", "{", "}", "(", ")", "[", "]"].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-cyan-400/20 font-mono text-2xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Moulie</span>
            <br />
            <span className="text-white">Malhotra</span>
          </motion.h1>

          <motion.div
            className="flex justify-center space-x-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/Mouliemalhotra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/moulie-malhotra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:mouliemalhotra2004@gmail.com"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
