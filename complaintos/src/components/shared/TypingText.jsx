import { motion } from "framer-motion";

export const TypingText = ({ text, delay = 0, charDuration = 0.04, className = "", style = {} }) => {
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: charDuration,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.p
      className={className}
      style={{ ...style, display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline" }}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
