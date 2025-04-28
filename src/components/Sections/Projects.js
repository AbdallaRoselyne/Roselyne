import { motion } from "framer-motion";
import { projects } from "../assets/constants";
import GradientText from "../UI/GradientText";
import SectionWrapper from "../UI/SectionWrapper";

const Projects = ({ setActiveSection }) => {
  return (
    <SectionWrapper id="projects" setActiveSection={setActiveSection}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <GradientText>Featured Projects</GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-dark/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-4xl font-bold">
                <GradientText>Project {index + 1}</GradientText>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-900/50 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-primary hover:text-secondary transition-colors"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
