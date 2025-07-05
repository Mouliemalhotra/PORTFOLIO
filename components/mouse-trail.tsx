"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const createTrail = () => {
      setTrail((prevTrail) => {
        const newPoint = {
          x: mouseX,
          y: mouseY,
          id: trailId++,
        }

        const updatedTrail = [newPoint, ...prevTrail.slice(0, 20)]
        return updatedTrail
      })
    }

    const intervalId = setInterval(createTrail, 50)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(intervalId)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-4 h-4 rounded-full"
          style={{
            left: point.x - 8,
            top: point.y - 8,
            background: `radial-gradient(circle, 
              hsl(${(index * 20 + 200) % 360}, 70%, 60%) 0%, 
              hsl(${(index * 20 + 280) % 360}, 80%, 70%) 100%)`,
            opacity: Math.max(0, 1 - index * 0.1),
            transform: `scale(${Math.max(0.1, 1 - index * 0.05)})`,
            transition: "all 0.3s ease-out",
          }}
        />
      ))}
    </div>
  )
}
