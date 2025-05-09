import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML", "Java", "My-SQL"],
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Spring-Data-JPA"],
    },
    {
      title: "Databases",
      skills: ["MongoDB-Atlas", "MySQL"],
    },
    {
      title: "Tools & Infrastructure",
      skills: ["Docker", "Git", "Microservices"],
    },
  ];

  return (
    <div name="skills" id="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-[#64ffda]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.p>
          <motion.p
            className="py-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            These are the technologies I've worked with
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }} // Delay for each category
            >
              <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-[#0a192f] p-2 rounded flex justify-center items-center text-center hover:scale-105 duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + skillIndex * 0.1, duration: 0.5 }} // Transition for individual skills
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
