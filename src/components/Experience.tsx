import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, TrendingUp, Users, Zap, Award } from "lucide-react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  const experiences = [
    {
      title: "React Developer",
      company: "Wipro Technologies",
      period: "Sep 2022 - Aug 2024",
      description: "Leading front-end development for payment processing systems, focusing on performance optimization and user experience.",
      keyAchievements: [
        {
          icon: TrendingUp,
          metric: "30%",
          description: "Reduction in page load times",
        },
        {
          icon: Users,
          metric: "15%",
          description: "Increase in user engagement",
        },
        {
          icon: Zap,
          metric: "25%",
          description: "Improved transaction success rate",
        },
      ],
      technologies: ["React", "Redux", "JavaScript", "REST APIs", "Payment Gateways"],
      responsibilities: [
        "Built enterprise frontend applications using Angular (Lazy Loading, Feature Modules, Route Guards) and React.js, improving scalability and initial load performance by 35%.",
        "Implemented Lazy Loading and Module Federation to optimize bundle size and improve first contentful paint by 30%.",
        "Applied RBAC, secure routing, session handling, and input validation, reducing security vulnerabilities by 40%.",
        "Optimized UI performance using OnPush change detection, trackBy, and memoization, cutting unnecessary DOM updates by 25%.",
        "Mentored junior developers on React best practices",
      ],
    },
    {
      title: "Frontend Developer",
      company: "BRN Infotech",
      period: "Mar 2022 - Aug 2022",
      description: "Developed modular React.js front-end applications with real-time updates, analytics dashboards, and user behavior tracking.",
      keyAchievements: [
        {
          icon: Award,
          metric: "Real-time",
          description: "WebSocket integration",
        },
        {
          icon: Zap,
          metric: "Secure",
          description: "JWT authentication",
        },
        {
          icon: TrendingUp,
          metric: "Analytics",
          description: "User behavior tracking",
        },
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "WebSocket", "JWT"],
      responsibilities: [
        "Developed modular UIs using React.js (Hooks, Context API), improving responsiveness by 25%.",
        "Integrated analytics plugins and interactive dashboards to visualize user behavior and insights, increasing analytical visibility by 30%.",
        "Implemented WebSocket-based real-time updates, reducing manual refresh actions by 40%.",
        "Applied code splitting and memoization, improving runtime performance by 25%.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl text-white mb-4 text-center">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

          <div className="max-w-6xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6 border-b border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-900/50 p-3 rounded-lg"
                      >
                        <Building2 className="text-cyan-400 w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400">{exp.company}</p>
                        <p className="text-slate-400 text-sm mt-1">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mt-4">{exp.description}</p>
                </div>

                {/* Key Achievements */}
                <div className="p-6 bg-slate-900/30">
                  <h4 className="text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="text-emerald-400 w-5 h-5" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.keyAchievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.3 + achIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center"
                      >
                        <achievement.icon className="text-cyan-400 w-8 h-8 mx-auto mb-2" />
                        <p className="text-2xl text-white mb-1">{achievement.metric}</p>
                        <p className="text-slate-400 text-sm">{achievement.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities & Technologies */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Responsibilities */}
                  <div className="flex-2">
                    <h4 className="text-white mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.3 + respIndex * 0.05 }}
                          className="flex items-start gap-2 text-slate-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex-1">
                    <h4 className="text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: index * 0.3 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
