"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Hackathons from "@/components/hackathons"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Hackathons />
            <Certifications />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
