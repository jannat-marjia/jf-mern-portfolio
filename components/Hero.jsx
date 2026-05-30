"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-6"
    >

      <div className="text-center">

        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-64 h-64 rounded-full mx-auto border-4 border-purple-500 object-top object-cover glow"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          JANNATUL FERDOUSE
        </h1>

        {/* Animated Text */}
        <div className="text-purple-400 text-2xl mt-4 font-semibold">

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 leading-8">
          Passionate MERN Stack Developer focused on building
          modern, responsive, and user-friendly web applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-3xl">

          <a
            href="https://github.com/jannat-marjia"
            target="_blank"
          >
            <FaGithub className="hover:text-purple-400 duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/jannatul-ferdouse-5666463aa"
            target="_blank"
          >
            <FaLinkedin className="hover:text-purple-400 duration-300" />
          </a>

          <a
            href="https://wa.me/8801759127242"
            target="_blank"
          >
            <FaWhatsapp className="hover:text-purple-400 duration-300" />
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 duration-300 text-white font-semibold glow"
        >
          Download Resume
        </a>

      </div>

    </motion.section>
  );
};

export default Hero;