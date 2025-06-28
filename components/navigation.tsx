"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Get all sections
      const sections = navItems
        .map((item) => ({
          id: item.href.substring(1),
          element: document.getElementById(item.href.substring(1)),
        }))
        .filter((section) => section.element)

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(item.href.substring(1))
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className={`text-lg font-medium transition-colors duration-200 relative cursor-pointer ${
                  activeSection === item.href.substring(1) ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                    layoutId="activeSection"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
