import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Employee Management System[CRUD]",
      description:
        "Developed an Employee Management System to streamline employee data management. Implemented features for employee registration, performance evaluation, and reporting details.",
      tech: "Java, JDBC, MySql",
      github: "https://github.com/Mahesh-656/Employee",
      demo: " ",
    },
    {
      id: 2,
      title: "Hospital Management System[CRUD]",
      description:
        "Developed a Hospital Management System to streamline administrative and patient management processes. The system allows users to manage patient registrations, appointment scheduling, and staff details.",
      tech: "Java, JDBC, MySql",
      github: "https://github.com/Mahesh-656/Hospital",
      demo: " ",
    },
    {
      id: 3,
      title: "Jobify",
      description:
        "Jobify is an AI-powered job application automation platform that analyzes user resumes, extracts skills, and suggests relevant job opportunities. It streamlines the job search process with personalized recommendations and efficient application tracking. Built with React, MongoDB, and Spring Boot, it offers secure JWT authentication.",
      tech: "Java, Springboot, MongoDB, JWT",
      github: "https://github.com/Mahesh-656/Jobify",
      demo: "https://jobifyclient-production-8aff.up.railway.app/",
    },
    {
      id: 4,
      title: "Movie Management System",
      description:
        "A movie management platform built with Spring Boot and MongoDB, allowing users to rate, review, and manage movies, with secure JWT authentication and an admin dashboard for content control.",
      tech: "Java, Springboot, MongoDB, JWT",
      github: "https://github.com/Mahesh-656/Movie_Backend",
      demo: " ",
    },
  ];

  return (
    <div name="projects" id="projects" className="w-full min-h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">Projects</p>
          <p className="py-6">Check out some of my recent backend projects</p>
        </div>

        {/* Use a responsive grid layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#112240] p-6 rounded-lg shadow-md flex flex-col justify-between"
              whileHover={{ scale: 1.05 }} // Hover effect
              initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
              animate={{ opacity: 1, x: 0 }} // Slide in from the left
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3 * project.id, // Stagger animation slightly for each project
              }} // Smooth transition for fade-in and slide-in effect
            >
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wider mb-4">{project.title}</h3>
                <p className="text-[#8892b0] text-sm mb-4">{project.description}</p>
                <div className="text-[#64ffda] text-sm mb-6">{project.tech}</div>
              </div>
              <div className="flex justify-between items-center">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="text-white text-lg flex items-center gap-2 hover:text-[#64ffda] duration-300">
                      <Github size={20} /> Code
                    </button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="text-white text-lg flex items-center gap-2 hover:text-[#64ffda] duration-300">
                      <ExternalLink size={20} /> Demo
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
