import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/20 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">

          <h2 className="text-2xl font-bold text-purple-400">
            JANNATUL FERDOUSE
          </h2>

          <p className="text-gray-400 mt-2">
            MERN Stack Developer
          </p>

        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-3xl">

          <a
            href="https://github.com/jannat-marjia"
            target="_blank"
            className="hover:text-purple-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jannatul-ferdouse-5666463aa"
            target="_blank"
            className="hover:text-purple-400 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/8801759127242"
            target="_blank"
            className="hover:text-purple-400 duration-300"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-800 pt-6">

        © 2026 JANNATUL FERDOUSE. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;