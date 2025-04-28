import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import GradientText from "../UI/GradientText";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-dark/50 backdrop-blur-md border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">
          <GradientText>Let's Build Something Amazing</GradientText>
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:abdallaroselyne8@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Roselyne,"
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium mb-8"
        >
          Contact Me
        </motion.a>

        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/roselyne-abdalla-014a57206/"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FiLinkedin className="text-lg" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/AbdallaRoselyne"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FiGithub className="text-lg" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:abdallaroselyne8@gmail.com"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FiMail className="text-lg" />
          </motion.a>
        </div>

        <div className="pt-6 border-t border-gray-800 text-gray-500">
          <p>
            © {new Date().getFullYear()} Roselyne Abdalla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
