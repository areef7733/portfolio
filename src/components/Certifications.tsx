import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { Award, BookOpen, Trophy } from "lucide-react";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Wipro Velocity Training",
      description: "MERN Stack Development",
      icon: Trophy,
      color: "from-cyan-500 to-blue-500",
      details: "Comprehensive full-stack development training covering MongoDB, Express.js, React.js, and Node.js",
    },
    {
      title: "L3 React Developer",
      description: "Advanced React Training - Wipro",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
      details: "Advanced level React certification focusing on complex state management, performance optimization, and best practices",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl text-white mb-4 text-center">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all relative overflow-hidden group"
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${cert.color}`}
                    >
                      <cert.icon className="text-white w-8 h-8" />
                    </motion.div>
                    <BookOpen className="text-slate-600 w-6 h-6" />
                  </div>

                  <h3 className="text-xl text-white mb-2">{cert.title}</h3>
                  <p className="text-cyan-400 mb-4">{cert.description}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{cert.details}</p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${cert.color} rounded-full mt-6`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-slate-700/50">
              <p className="text-slate-300 text-sm">
                Continuously learning and staying updated with the latest technologies and best practices 
                in web development to deliver cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
