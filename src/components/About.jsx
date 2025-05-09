import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 overflow-y-scroll scroll-smooth"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p
              className="text-4xl ml-4 font-bold inline float-left border-b-4 border-[#64ffda]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              About
            </motion.p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            className="sm:text-right text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p>Nice to meet you, Please take a look around.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="mb-4">
              I am a passionate backend developer building high-performance server-side solutions. As a Computer Science and Engineering student, my expertise includes developing secure REST APIs with Spring Boot, managing databases with MongoDB, and implementing JWT authentication.
            </p>
            <p className="mb-4">
              I have developed robust backend systems for projects like Jobify and a Movie Management System, showcasing skills in role-based access control, Cloudinary integration, and efficient data management.
            </p>
            <p>
              I am always eager to optimize backend performance, enhance security, and explore new technologies in backend architecture.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
