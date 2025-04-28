import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedText from "../UI/AnimatedText";

const Hero = ({ setActiveSection }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-6 min-h-screen flex items-center"
      onViewportEnter={() => setActiveSection("home")}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl"
        >
          <AnimatedText
            text="Innovative Software Developer"
            className="text-4xl md:text-6xl font-bold mb-6"
          />

          <p className="text-xl text-gray-300 mb-8">
            Creating cutting-edge solutions with MERN stack, Python, SQL, Power
            BI, Tableau and Cloud Technologies
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium flex items-center gap-2"
            >
              View My Work <FiArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                (window.location.href = "mailto:abdallaroselyne8@gmail.com")
              }
              className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
