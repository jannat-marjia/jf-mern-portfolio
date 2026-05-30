"use client";

import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0a0f1f]"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <h2 className="text-5xl font-bold mb-8">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            I am a passionate MERN Stack Developer focused on
            creating modern, responsive, and user-friendly web applications.
            I love building clean UI designs and powerful backend systems.
          </p>

          <p className="text-gray-300 leading-8 text-lg mt-6">
            I continuously learn new technologies and improve my skills
            to become a professional full stack developer.
          </p>

          <button className="mt-10 px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 duration-300 glow">
            Hire Me
          </button>

        </div>

        {/* Right Side */}
        <div className="bg-black border border-purple-500/20 rounded-3xl p-10 glow">

          <div className="space-y-6 text-lg">

            <div className="flex justify-between border-b border-gray-700 pb-4">
              <span className="text-gray-400">Name</span>
              <span>JANNATUL FERDOUSE</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-4">
              <span className="text-gray-400">Location</span>
              <span>Feni, Bangladesh</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-4">
              <span className="text-gray-400">Experience</span>
              <span>MERN Stack Projects</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-4">
              <span className="text-gray-400">Email</span>
              <span>jannatulferdouse7124@gmail.com</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Availability</span>
              <a
  href="#projects"
  className="text-green-400 hover:text-purple-400 duration-300"
>
  Available for Work
</a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;