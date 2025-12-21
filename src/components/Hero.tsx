import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal, Laptop } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "Shaik Areef";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentLength = displayedText.length;

      if (!isDeleting && currentLength < fullName.length) {
        // Typing
        setDisplayedText(fullName.substring(0, currentLength + 1));
        timer = setTimeout(handleTyping, typingSpeed);
      } else if (!isDeleting && currentLength === fullName.length) {
        // Pause before deleting
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentLength > 0) {
        // Deleting
        setDisplayedText(fullName.substring(0, currentLength - 1));
        timer = setTimeout(handleTyping, deletingSpeed);
      } else if (isDeleting && currentLength === 0) {
        // Start typing again
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleTyping, 500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titles = ["React Developer", "Frontend Engineer", "Problem Solver"];
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 text-cyan-400/20"
      >
        <Code size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-10 text-emerald-400/20"
      >
        <Terminal size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 right-20 text-cyan-400/20"
      >
        <Laptop size={40} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 mb-4"
            >
              Hi, my name is
            </motion.p>
            
            {/* Typing animation for name */}
            <div className="relative inline-block mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-7xl text-white min-h-[60px] sm:min-h-[70px] md:min-h-[90px]"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  |
                </motion.span>
              </motion.h1>
              
              {/* Decorative elements around name */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-emerald-400/30 rounded-full"
              />
            </div>
            
            {/* Rotating titles */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-5xl text-slate-400 mb-6 min-h-[60px] md:min-h-[80px]"
            >
              <motion.span
                key={titles[0]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
              >
                {titles[0]}
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-300 max-w-2xl mx-auto mb-8 px-4 text-sm sm:text-base"
            >
              Strong in design and integration with intuitive problem-solving skills. 
              Passionate about implementing and launching new projects with the ability 
              to translate business requirements into technical solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <motion.a
                href="mailto:areef7733@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/areef7733"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/areef77/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <ArrowDown className="text-slate-400 hover:text-cyan-400 transition-colors" size={32} />
      </motion.div>
    </section>
  );
}