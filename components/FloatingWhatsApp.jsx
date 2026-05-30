import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/8801759127242"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-3xl shadow-lg hover:scale-110 duration-300 z-50"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;