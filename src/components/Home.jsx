import { Terminal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div name="home" id="home" className="w-full h-screen bg-[#0a192f] flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p 
          className="text-[#64ffda] text-xl" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}>
          Hi, my name is
        </motion.p>

        <motion.h1 
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-4" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.5 }}>
          Maheshwar R
        </motion.h1>

        <motion.h2 
          className="text-3xl sm:text-6xl font-bold text-[#8892b0]" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.5 }}>
          I&apos;m a Backend Developer.
        </motion.h2>

        <motion.p 
          className="text-[#8892b0] py-4 max-w-[700px]" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.7, duration: 0.5 }}>
          I specialize in building robust, scalable backend systems and APIs. With expertise in Java, Spring Boot, and database technologies, I focus on creating efficient server-side applications.
        </motion.p>

        <div className="flex items-center gap-2 text-[#8892b0]">
          <Terminal className="text-[#64ffda]" />
          <span>Tech Stack: </span>
          <span className="text-[#64ffda]">HTML, Tailwind CSS, Java, Spring Boot, MySQL, MongoDB, Docker</span>
        </div>

        <motion.div 
          className="mt-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] duration-300">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <ArrowRight className="ml-3" />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
