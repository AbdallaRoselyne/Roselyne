import GradientText from "../UI/GradientText";
import SectionWrapper from "../UI/SectionWrapper";

const About = ({ setActiveSection }) => {
  return (
    <SectionWrapper id="about" setActiveSection={setActiveSection}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        <GradientText>About Me</GradientText>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-lg text-gray-300 mb-6">
            I’m a software developer with a passion for building tech that
            matters. With a foundation in full-stack development and a heart
            rooted in climate action and community impact, I bring a
            human-centered approach to every line of code.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            My toolkit includes the MERN stack, Python, SQL, and data
            visualization tools like Power BI and Tableau. Beyond code, I care
            deeply about SDGs, open knowledge, and using technology as a bridge
            between people and solutions especially in underserved communities.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <h3 className="text-primary font-medium mb-2">Location</h3>
              <p>Grand Bay, Rivière du Rempart, MU</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <h3 className="text-primary font-medium mb-2">Email</h3>
              <a
                href="mailto:abdallaroselyne8@gmail.com"
                className="hover:text-primary transition-colors break-words"
              >
                abdallaroselyne8@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                <img
                  src="/portfolio.jpg"
                  alt="Roselyne Osundwa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-dark px-4 py-1 rounded-full font-medium">
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
