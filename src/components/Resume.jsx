import { FileText, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  // Direct download URL of the resume hosted on Google Drive
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1rT7dHf6d_nYC-L_D3Pqsh0t1aNOqkqV3";

  return (
    <motion.div
      name="resume"
      id="resume"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">Resume</p>
          <p className="py-4">View or download my professional resume</p>
        </div>

        <motion.div
          className="bg-[#112240] p-8 rounded-lg shadow-lg max-w-[800px] mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <FileText size={80} className="text-[#64ffda]" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Maheshwar - Backend Developer</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={resumeUrl}
              download="Maheshwar-Resume.pdf"
              className="flex items-center justify-center gap-2 bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded-md font-medium hover:bg-opacity-80 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-md font-medium hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300"
            >
              <Eye size={20} />
              View Resume
            </a>
          </div>

          <div className="text-center text-[#8892b0]">
            <p>
              For a complete overview of my professional experience, education, certifications, and technical skills,
              please download or view my resume.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
