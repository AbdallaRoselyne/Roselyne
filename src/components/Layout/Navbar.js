import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import GradientText from "../UI/GradientText";

const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md py-3 shadow-xl">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <GradientText className="text-2xl font-bold">
          Roselyne Abdalla
        </GradientText>

        <div className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                document
                  .getElementById(section.id)
                  .scrollIntoView({ behavior: "smooth" });
                setActiveSection(section.id);
              }}
              className={`px-3 py-2 rounded-md transition-all ${
                activeSection === section.id
                  ? "text-white font-medium bg-gradient-to-r from-primary to-secondary"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/roselyne-abdalla-014a57206/"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FiLinkedin className="text-lg" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href=" 
            https://www.github.com/AbdallaRoselyne"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FiGithub className="text-lg" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
