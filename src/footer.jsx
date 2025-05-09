import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-6">
      <motion.a
        href="https://github.com/Adnan-Ahmed07/Fun-for-GTA-6"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center space-x-2
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white font-semibold
          px-6 py-3 rounded-full
          shadow-lg shadow-purple-600/30
          overflow-hidden relative
        "
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Github size={20} />
        <span>View on GitHub</span>
        {/* Simple “ripple” effect */}
        <span
          className="absolute inset-0 bg-white opacity-0 rounded-full"
          style={{
            transition: "opacity 0.4s, transform 0.4s",
          }}
          onAnimationEnd={(e) => {
            e.currentTarget.style.opacity = "0";
            e.currentTarget.style.transform = `scale(1)`;
          }}
          onMouseDown={(e) => {
            const ripple = e.currentTarget;
            ripple.style.opacity = "0.2";
            ripple.style.transform = `scale(2)`;
          }}
        />
      </motion.a>
    </footer>
  );
};

export default Footer;
