import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Redux", "Responsive Design"],
    },
    {
      category: "Backend & Database",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: ["Node.js","Express.js","MongoDB", "SQL", "REST APIs", "Java","JWT Authentication", "WebSocket"],
    },
    {
      category: "Tools & Practices",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: ["Git", "Agile/Scrum", "Performance Optimization", "Code Review", "Mentoring", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl text-white mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="text-white w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl text-white">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        duration: 0.3
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-2 bg-slate-900/50 rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-colors"
                    >
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}