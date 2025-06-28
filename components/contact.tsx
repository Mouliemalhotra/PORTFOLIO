"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mouliemalhotra2004@gmail.com",
      href: "mailto:mouliemalhotra2004@gmail.com",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9899721325",
      href: "tel:+919899721325",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mouliemalhotra",
      href: "https://github.com/Mouliemalhotra",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "moulie-malhotra",
      href: "https://www.linkedin.com/in/moulie-malhotra",
      gradient: "from-blue-400 to-purple-500",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI/ML? Let's build something amazing
            together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div
                    className={`p-3 bg-gradient-to-r ${info.gradient} rounded-lg group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg border border-cyan-400/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-2">Open to Opportunities</h4>
              <p className="text-gray-300 text-sm">
                I'm actively seeking internships, full-time positions, and collaboration opportunities in AI/ML,
                software development, and data science. Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="Let's collaborate!"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-slate-700/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 Moulie Malhotra. Built with passion using Next.js, TypeScript, and Framer Motion.
          </p>
          <motion.div
            className="mt-4 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.slice(2).map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
