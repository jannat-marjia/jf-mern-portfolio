"use client";

import { motion } from "framer-motion";

const projects = [

 {
  title: "Future IT",
  image: "/project1.png",
  description:
  "Modern IT service website with responsive UI and premium design.",
  github: "https://github.com/jannat-marjia/future-it-",
  live: "https://future-it-teal.vercel.app",
},

  {
  title: "Weather App",
  image: "/project2.png",
  description:
    "Responsive weather application showing real-time weather updates.",
  github: "https://github.com/jannat-marjia/Weather-App",
  live: "https://weather-app-nu-two-50.vercel.app",
},

  {
    title: "Digital Clock",
    image: "/project3.png",
    description:
      "Modern digital clock with clean UI and real-time functionality.",
    github: "https://github.com/jannat-marjia/digital-clock",
    live: "https://digital-clock-teal-tau-92.vercel.app",
  },


];

const Projects = () => {
  return (

    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-black"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {
            projects.map((project, index) => (

              <div
                key={index}
                className="bg-[#111827] rounded-3xl overflow-hidden border border-purple-500/20 hover:scale-105 duration-500 glow"
              >

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 duration-300"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="px-5 py-2 rounded-full border border-purple-500 hover:bg-purple-500 duration-300"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </motion.section>

  );
};

export default Projects;