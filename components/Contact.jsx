"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (

    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-black"
    >

      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact <span className="text-purple-400">Me</span>
        </h2>

        <form
          action="https://formsubmit.co/jannatulferdouse7124@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-[#111827] border border-purple-500/20 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-[#111827] border border-purple-500/20 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="p-4 rounded-xl bg-[#111827] border border-purple-500/20 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 duration-300 py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>

    </motion.section>

  );
};

export default Contact;