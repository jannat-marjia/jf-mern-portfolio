"use client";

import { motion } from "framer-motion";
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="skills"
      className="py-24 px-6 bg-[#0a0f1f]"
     >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black border border-purple-500/20 rounded-2xl p-8 text-center hover:scale-105 hover:border-purple-500 duration-300 glow"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </motion.section>
  );
};

export default Skills;