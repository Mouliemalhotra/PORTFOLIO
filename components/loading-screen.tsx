"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-2xl font-bold text-white">MM</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Moulie Malhotra
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          AI/ML Developer & Innovator
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading Portfolio</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
