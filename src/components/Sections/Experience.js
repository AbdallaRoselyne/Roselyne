import { motion } from 'framer-motion';
import { experiences } from '../assets/constants';
import GradientText from '../UI/GradientText';
import SectionWrapper from '../UI/SectionWrapper';

const Experience = ({ setActiveSection }) => {
  return (
    <SectionWrapper id="experience" setActiveSection={setActiveSection}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <GradientText>Work Experience</GradientText>
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-dark/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <span className="text-sm text-secondary">{exp.period}</span>
            </div>
            <p className="text-primary mb-4">{exp.position}</p>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-primary mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;