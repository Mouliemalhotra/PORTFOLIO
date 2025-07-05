import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moulie Malhotra - AI/ML Engineer & Data Science Enthusiast",
  description:
    "Portfolio of Moulie Malhotra - AI/ML Engineer, Data Scientist, and Full Stack Developer specializing in innovative solutions and cutting-edge technology.",
  keywords: "AI, Machine Learning, Data Science, Full Stack Development, Python, React, Next.js",
  authors: [{ name: "Moulie Malhotra" }],
  openGraph: {
    title: "Moulie Malhotra - AI/ML Engineer Portfolio",
    description: "Explore my journey in AI/ML engineering, data science, and innovative project development.",
    type: "website",
  },
    generator: 'mouliemalhotra'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
