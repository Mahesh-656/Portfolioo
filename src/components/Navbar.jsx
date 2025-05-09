"use client"

import { useState, useEffect } from "react"
import { Code, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  // Handle navbar visibility based on scroll
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  // Track scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => setNav(!nav)

  return (
    <motion.div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 z-10 ${
        scrolling ? "bg-[#0a192f] shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Code className="text-4xl text-white" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white">
        <li className="px-4 cursor-pointer hover:text-[#64ffda] duration-300">
          <a href="#home" className="flex items-center">
            Home
          </a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[#64ffda] duration-300">
          <a href="#about" className="flex items-center">
            About
          </a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[#64ffda] duration-300">
          <a href="#projects" className="flex items-center">
            Projects
          </a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[#64ffda] duration-300">
          <a href="#skills" className="flex items-center">
            Skills
          </a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[#64ffda] duration-300">
          <a href="#resume" className="flex items-center">
            Resume
          </a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[#64ffda] duration-300">
          <a href="#contact" className="flex items-center">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <Menu /> : <X />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300">
          <a onClick={handleClick} href="#home">
            Home
          </a>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300">
          <a onClick={handleClick} href="#about">
            About
          </a>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300">
          <a onClick={handleClick} href="#projects">
            Projects
          </a>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300">
          <a onClick={handleClick} href="#skills">
            Skills
          </a>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300">
          <a onClick={handleClick} href="#resume">
            Resume
          </a>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300">
          <a onClick={handleClick} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </motion.div>
  )
}

export default Navbar
