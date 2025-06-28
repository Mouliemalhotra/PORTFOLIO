"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Data Research Analyst",
      company: "INIZIO",
      duration: "July 2024 - October 2024",
      location: "Remote",
      description:
        "Conducted advanced data analysis using SaaS tools and R, applying statistical techniques to derive actionable research insights.",
      achievements: [
        "Designed robust data collection methodologies ensuring accuracy and reliability",
        'Collaborated on research paper: "Prevalence of Depression and Economic Burden Among Adults with Epilepsy in the United States"',
        "Applied advanced statistical techniques for data interpretation",
        "Demonstrated strong attention to detail in research analysis",
      ],
      gradient: "from-blue-400 to-purple-500",
    },
  ]

  const leadership = [
    {
      title: "President",
      organization: "GFS Society",
      duration: "July 2023 - Present",
      location: "Delhi, India",
      description:
        "Leading a society focused on developing soft and hard skills including communication, leadership qualities, and team management.",
      achievements: [
        "Organizing skill development events for students",
        "Building leadership and communication skills",
        "Managing team coordination and event planning",
        "Fostering community engagement and growth",
      ],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Event Lead",
      organization: "College Events",
      duration: "2024",
      location: "Delhi, India",
      description:
        "Led large-scale events managing crowds of 200+ students while coordinating with a team of 60 members.",
      achievements: [
        "Successfully managed events with 200+ attendees",
        "Coordinated with a team of 60 members",
        "Demonstrated exceptional leadership and organizational skills",
        "Ensured smooth execution of multiple events",
      ],
      gradient: "from-orange-400 to-red-500",
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Work Experience</h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`h-1 bg-gradient-to-r ${exp.gradient} mb-6 rounded`}></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{exp.title}</h4>
                  <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

              <div className="grid md:grid-cols-2 gap-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Experience */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Leadership Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((lead, index) => (
              <motion.div
                key={lead.title}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`h-1 bg-gradient-to-r ${lead.gradient} mb-4 rounded`}></div>

                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-1">{lead.title}</h4>
                  <p className="text-lg text-cyan-400 font-semibold mb-2">{lead.organization}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-1">
                    <Calendar size={14} className="mr-2" />
                    <span>{lead.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin size={14} className="mr-2" />
                    <span>{lead.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{lead.description}</p>

                <div className="space-y-2">
                  {lead.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
