  import { motion } from "framer-motion";
  import {
    IconCalendar,
    IconTrophy,
    IconSchool,
    IconBook,
    IconBolt,
    IconBrandReact,
  } from "@tabler/icons-react";

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "J.C. Bose University of Science and Technology",
      location: "Faridabad, Haryana",
      period: "2023 - Present",
      grade: "CGPA: 8.1",
      icon: IconBrandReact,
      glow: "from-cyan-500 to-blue-500",
      hoverText: "group-hover:text-cyan-300",
      dotColor: "bg-cyan-400",
      achievements: [
        "Focused on Full Stack Web Development",
        "Built Multiple Real-World Projects",
        "Worked with NGO & Internship Projects",
        "Learning Modern React & Next.js Ecosystem",
      ],
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "Raja Jait Singh Government Polytechnic",
      location: "Faridabad, Haryana",
      period: "2021 - 2023",
      grade: "CGPA: 7.6",
      icon: IconBolt,
      glow: "from-purple-500 to-pink-500",
      hoverText: "group-hover:text-purple-300",
      dotColor: "bg-purple-400",
      achievements: [
        "Built Strong Technical & Problem Solving Skills",
        "Worked on Practical Engineering Concepts",
        "Developed Interest in Programming & Technology",
        "Transitioned Towards Software Development",
      ],
    },
    {
      degree: "Higher Secondary Schooling",
      institution: "Saraswati Vidya Mandir Inter College",
      location: "Mathura, Uttar Pradesh",
      period: "2020 - 2021",
      grade: "84%",
      icon: IconBook,
      glow: "from-blue-500 to-cyan-500",
      hoverText: "group-hover:text-blue-300",
      dotColor: "bg-blue-400",
      achievements: [
        "Completed Senior Secondary Education",
        "Developed Interest in Computers & Technology",
        "Built Strong Academic Foundation",
        "Learned Core of Computers"
      ],
    },
    {
      degree: "High Secooling",
      institution: "Saraswati Vidya Mandir Inter College",
      location: "Mathura, Uttar Pradesh",
      period: "2019 - 2021",
      grade: "82%",
      icon: IconSchool,
      glow: "from-cyan-500 to-indigo-500",
      hoverText: "group-hover:text-indigo-300",
      dotColor: "bg-indigo-400",
      achievements: [
        "Completed Secondary Education from UP Board",
        "Maintained Strong Academic Performance",
        "Actively Participated in School Activities",
        "Started Learning Computer"
      ],
    },
  ];

  export default function Education() {
    return (
      <section
        id="education"
        className="relative py-32 px-4 overflow-hidden bg-black"
      >
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-28"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              My{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
                Education Journey
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              My academic journey from foundational school education to engineering disciplines and modern full-stack development.
            </p>

            <div className="w-24 h-0.5g-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8 opacity-60" />
          </motion.div>

          {/* Timeline Pipeline */}
          <div className="relative">
            {/* Vertical Vector Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-linear-to-brom-cyan-500/50 via-blue-500/50 to-purple-500/10" />

            <div className="space-y-12 lg:space-y-20">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Active Card Body Container */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 250, damping: 22 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-xl p-6 md:p-8 transition-colors duration-500 hover:border-white/20"
                    >
                      {/* Radial Ambient Glow behind content triggered on active focus */}
                      <div
                        className={`absolute -inset-48 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br ${edu.glow} blur-[100px] pointer-events-none z-0`}
                      />

                      <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                        {/* Icon Shield Block */}
                        <div className={`p-3.5 rounded-xl bg-linear-to-br ${edu.glow} bg-opacity-10 border border-white/10 shadow-lg shrink-0`}>
                          <edu.icon size={26} className="text-white" />
                        </div>

                        {/* Summary Breakdown Fields */}
                        <div className="flex-1 w-full">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                            <h3 className={`text-xl md:text-2xl font-bold text-white transition-colors duration-300 ${edu.hoverText}`}>
                              {edu.degree}
                            </h3>

                            <div className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase bg-linear-to-r ${edu.glow} bg-clip-text text-transparent mt-1 lg:mt-0.5`}>
                              <IconCalendar size={14} className="text-gray-400 inline-block align-middle" />
                              <span className="text-gray-300 ml-1">{edu.period}</span>
                            </div>
                          </div>

                          {/* Subtext Location Context */}
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400 mb-6 font-light">
                            <span className="text-gray-200 font-medium">{edu.institution}</span>
                            <span className="text-gray-600 hidden sm:inline">•</span>
                            <span className="text-gray-400 text-xs">{edu.location}</span>
                          </div>

                          {/* Performance Metrics Grade Badge */}
                          <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/3er border-white/10">
                              <IconTrophy size={14} className="text-yellow-400" />
                              <span className="text-xs font-semibold tracking-wide text-white">
                                {edu.grade}
                              </span>
                            </div>
                          </div>

                          {/* List Points Render Group */}
                          <div className="border-t border-white/5 pt-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-4">
                              Key Focus & Achievements
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                              {edu.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-gray-400 font-light leading-snug"
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${edu.dotColor} mt-2 shrink-0 shadow-sm`} />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Keyframe Node Matrix Anchor */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <div className={`w-5 h-5 rounded-full bg-black border-[3px] border-white/20 relative flex items-center justify-center group-hover:border-white transition-colors duration-300 shadow-xl`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${edu.glow}`} />
                    </div>
                  </div>

                  {/* Grid Symmetry Placeholder Offset block */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }