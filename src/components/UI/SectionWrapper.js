import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id, setActiveSection]);

  return (
    <section id={id} className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;