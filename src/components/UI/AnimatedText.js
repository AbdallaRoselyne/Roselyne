import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;