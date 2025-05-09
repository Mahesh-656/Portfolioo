"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Ensure no field is empty
    if (!formData.name || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace this with an API call)
      setTimeout(() => {
        console.log("Form submitted:", formData);
        toast.success("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        name="contact"
        id="contact"
        className="w-full md:h-screen bg-[#0a192f] text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">Contact</p>
            <p className="py-4">Get in touch with me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:mahigowda416@gmail.com"
                  className="flex items-center gap-4 text-xl hover:text-[#64ffda] duration-300"
                >
                  <Mail size={24} className="text-[#64ffda]" />
                  mahigowda416@gmail.com
                </a>

                <a
                  href="https://github.com/Mahesh-656"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-xl hover:text-[#64ffda] duration-300"
                >
                  <Github size={24} className="text-[#64ffda]" />
                  github.com
                </a>

                <a
                  href="https://www.linkedin.com/in/maheshwar-r-97754622b/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-xl hover:text-[#64ffda] duration-300"
                >
                  <Linkedin size={24} className="text-[#64ffda]" />
                  linkedin.com
                </a>
              </div>

              <p className="mt-8 text-[#8892b0]">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have any
                questions or would like to work together.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 bg-[#112240] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 bg-[#112240] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="p-3 bg-[#112240] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white bg-[#0a192f] border-2 border-[#64ffda] px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#64ffda] hover:text-[#0a192f] duration-300 rounded-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Toast Notifications */}
      <Toaster />
    </>
  );
};

export default Contact;
