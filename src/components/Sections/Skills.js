import { skills } from '../assets/constants';
import GradientText from '../UI/GradientText';
import SectionWrapper from '../UI/SectionWrapper';

const Skills = ({ setActiveSection }) => {
  return (
    <SectionWrapper id="skills" setActiveSection={setActiveSection}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <GradientText>Skills & Expertise</GradientText>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div 
            key={category} 
            className="bg-dark/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize">
              <GradientText>{category}</GradientText>
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-900/50 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;