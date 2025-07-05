"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  color: string
  shape: "circle" | "triangle" | "square" | "diamond"
  duration: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const shapes: FloatingElement["shape"][] = ["circle", "triangle", "square", "diamond"]
    const colors = [
      "from-pink-400 to-purple-600",
      "from-blue-400 to-cyan-600",
      "from-green-400 to-teal-600",
      "from-yellow-400 to-orange-600",
      "from-purple-400 to-pink-600",
      "from-cyan-400 to-blue-600",
    ]

    const newElements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      duration: Math.random() * 10 + 10,
    }))

    setElements(newElements)
  }, [])

  const getShapeClasses = (shape: FloatingElement["shape"]) => {
    switch (shape) {
      case "circle":
        return "rounded-full"
      case "triangle":
        return "rounded-sm transform rotate-45"
      case "square":
        return "rounded-lg"
      case "diamond":
        return "rounded-lg transform rotate-45"
      default:
        return "rounded-full"
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute bg-gradient-to-br ${element.color} opacity-20 blur-sm ${getShapeClasses(element.shape)}`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
