import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  const education = [
    {
      degree: "Master's Program",
      institution: "St Francis College",
      period: "Jan 2025 - May 2026",
      grade: "CGPA: 4.00",
      status: "In Progress",
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Dhanekula Institute of Engineering and Technology",
      period: "2018 - 2022",
      grade: "",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl text-white mb-4 text-center">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 relative overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <GraduationCap className="text-blue-400 w-6 h-6" />
                    </div>
                    {edu.status === "In Progress" && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-white mb-2">{edu.degree}</h3>
                  <p className="text-cyan-400 mb-2 text-sm">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-2">{edu.period}</p>
                  
                  {edu.grade && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700">
                      <Award className="text-yellow-400 w-4 h-4" />
                      <span className="text-slate-300 text-sm">{edu.grade}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}