"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Award,
  Code,
  Briefcase,
  MessageCircle,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MouseTrail } from "@/components/mouse-trail"
import { FloatingElements } from "@/components/floating-elements"
import { MultilingualGreeting } from "@/components/multilingual-greeting"
import { AnimatedBackground } from "@/components/animated-background"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const projects = [
    {
      title: "DREAM-11 Team Predictor",
      description:
        "Fantasy cricket team suggestion tool leveraging historical data and player statistics to optimize team selection.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit", "Docker"],
      github: "https://github.com/Mouliemalhotra/DREAM-11",
      highlights: ["Visual insights", "Accurate predictions", "Team optimization"],
    },
    {
      title: "FireLoop",
      description:
        "AI-led entertainment interface with real-time emotional personalization and accessibility features.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "AI Scene Engine"],
      github: "https://github.com/Ad1tyaKr/FireLoop",
      highlights: ["Mood detection", "Voice-triggered playback", "Inclusive UX"],
    },
    {
      title: "Sign Language Detector",
      description: "AI-powered Sign Language Detector for real-time ASL-to-speech conversion with 92%+ accuracy.",
      tech: ["Python", "Flask", "PyTorch", "OpenCV", "TensorFlow"],
      github: "https://github.com/Mouliemalhotra/SIGN-LANGUAGE-DETECTOR",
      highlights: ["92%+ accuracy", "Real-time conversion", "3D hand gesture recognition"],
    },
  ]

  const hackathons = [
    {
      title: "Smart India Hackathon 2024",
      project: "Direct Market Access for Farmers",
      achievements: [
        "Boosted farmer profits by 30%",
        "Reduced vendor sourcing time by 40%",
        "Achieved 90%+ chatbot accuracy",
      ],
      tech: ["Django", "MongoDB", "TensorFlow", "PyTorch", "Blockchain"],
      award: "Winner",
    },
    {
      title: "Nexathon",
      project: "Pet Adoption Platform – ONLY Paws",
      achievements: [
        "Increased pet adoption visibility by 50%",
        "Developed secure 24/7 user access",
        "Boosted user engagement through responsive UI",
      ],
      tech: ["Firebase", "Stripe", "AI Chatbot", "JWT"],
      award: "Finalist",
    },
    {
      title: "Hackblocks",
      project: "Ambulance Booking System - हमcare",
      achievements: [
        "Reduced ambulance response time by 35%",
        "Enabled 24/7 emergency access",
        "Achieved 95%+ accuracy in ETA predictions",
      ],
      tech: ["Google Maps API", "AI Geolocation", "Route Optimization"],
      award: "Winner",
    },
  ]

  const certificates = [
    {
      title: "EDUnet - Data Science",
      issuer: "Microsoft",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1lqAwQcXdrwnt7C9fPfsgAK9UfMlxxrYZ/view?usp=sharing",
    },
    {
      title: "SQL Certification",
      issuer: "Google",
      date: "Jun 2024",
      link: "https://drive.google.com/file/d/1yWvhIsSwPfBiMOKTo7m8asoBb5KllNJ-/view?usp=drive_link",
    },
    {
      title: "Programming in C",
      issuer: "Aptech",
      date: "Oct 2023",
      link: "https://drive.google.com/file/d/1t-sCW-iUXWVOyMxe8gut-o9CiIufibtu/view?usp=drive_link",
    },
    {
      title: "Programming in C++",
      issuer: "Aptech",
      date: "Oct 2023",
      link: "https://drive.google.com/file/d/1Z17GojwaiRDfciGYS2Jda4jUfp7QZZ2R/view?usp=drive_link",
    },
  ]

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "JavaScript", "Go", "HTML", "CSS"],
      icon: <Code className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Frontend & Backend",
      skills: ["ReactJS", "Next.js", "Node.js", "TailwindCSS", "Django"],
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Science & Analytics",
      skills: ["SAS", "R", "Excel", "SAP", "Power BI", "MongoDB"],
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "AI/ML Libraries",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Frameworks",
      skills: ["Docker", "Git", "Jupyter", "VS Code", "Google Cloud", "Hugging Face"],
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <MouseTrail />
      <FloatingElements />
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Moulie Malhotra
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["about", "skills", "projects", "hackathons", "certificates", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:bg-clip-text transition-all capitalize relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Multilingual Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center"
            >
              <MultilingualGreeting />
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-white font-light tracking-wider">I'M</span>
                  <motion.span
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-black tracking-tight"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    MOULIE
                  </motion.span>
                </div>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-2xl md:text-4xl font-light text-gray-300 space-y-2"
              >
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI/ML ENGINEER
                </div>
                <div className="text-lg md:text-xl text-gray-400">& Data Science Enthusiast</div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Transforming complex data into actionable insights and building intelligent systems that solve real-world
              problems. Currently pursuing B.Tech in AI/ML with a 9.2 CGPA.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iS6n93hrdfwu6B0qEjRBF6MHnktqLTgw/view?usp=sharing",
                    "",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-600/10 hover:border-purple-400 px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex justify-center space-x-6 pt-8"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://github.com/Mouliemalhotra", "_blank")}
                  className="w-14 h-14 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-600/20 text-gray-400 hover:text-white border border-gray-700 hover:border-purple-400 transition-all"
                >
                  <Github className="w-6 h-6" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://www.linkedin.com/in/moulie-malhotra", "_blank")}
                  className="w-14 h-14 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-600/20 text-gray-400 hover:text-white border border-gray-700 hover:border-purple-400 transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate AI/ML engineer and data science enthusiast currently pursuing B.Tech in Artificial
                Intelligence and Machine Learning at GGSIPU with a stellar 9.2 CGPA. With hands-on experience as a Data
                Research Analyst at INIZIO, I've mastered the art of transforming complex data into actionable insights.
                My journey spans from developing award-winning hackathon solutions to creating innovative AI-powered
                applications that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full Stack Development",
                desc: "Next.js, React, Django, MongoDB",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "AI/ML Engineering",
                desc: "TensorFlow, PyTorch, Scikit-learn",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Data Science",
                desc: "Python, R, Power BI, SAS",
                color: "from-purple-500 to-violet-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:text-white hover:border-purple-400 transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">Innovative solutions built with cutting-edge technology</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {project.title}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(project.github, "_blank")}
                        className="hover:bg-gray-700 text-gray-400 hover:text-purple-400 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-400 text-sm">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-gray-300 text-sm">
                              <ArrowRight className="w-3 h-3 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-400 text-sm">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-all text-xs px-2 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hackathon Victories
            </h2>
            <p className="text-xl text-gray-400">Competitive programming and innovation challenges</p>
          </motion.div>

          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -3 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-purple-400 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                          {hackathon.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-white">
                          {hackathon.project}
                        </CardDescription>
                      </div>
                      <Badge
                        className={`${
                          hackathon.award === "Winner"
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/50"
                            : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/50"
                        } px-4 py-2 text-sm font-semibold`}
                      >
                        {hackathon.award}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-purple-400">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {hackathon.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-purple-400">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.tech.map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:text-white transition-all"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-400">Professional credentials and achievements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Award className="w-8 h-8 text-purple-400 flex-shrink-0" />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(cert.link, "_blank")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-700 text-gray-400 hover:text-purple-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-purple-400">{cert.issuer}</p>
                      <p className="text-sm text-gray-400">{cert.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Ready to collaborate on exciting AI/ML projects or discuss opportunities? I'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Mail className="w-10 h-10" />,
                  title: "Email",
                  content: "mouliemalhotra2004@gmail.com",
                  href: "mailto:mouliemalhotra2004@gmail.com",
                },
                {
                  icon: <Phone className="w-10 h-10" />,
                  title: "Phone",
                  content: "+91 9899721325",
                  href: "tel:+919899721325",
                },
                {
                  icon: <Linkedin className="w-10 h-10" />,
                  title: "LinkedIn",
                  content: "Connect with me",
                  href: "https://www.linkedin.com/in/moulie-malhotra",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group"
                >
                  <div className="text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition-colors">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-purple-400 hover:text-pink-400 transition-colors text-sm break-all leading-relaxed"
                  >
                    {contact.content}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-6">
              <Button
                onClick={() => window.open("https://github.com/Mouliemalhotra", "_blank")}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/moulie-malhotra", "_blank")}
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-600/10 hover:border-purple-400 px-8 py-3 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Moulie Malhotra.</p>
        </div>
      </footer>
    </div>
  )
}
