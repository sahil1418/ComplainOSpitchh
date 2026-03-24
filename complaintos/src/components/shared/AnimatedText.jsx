import { motion } from "framer-motion";

export const AnimatedText = ({ text, delay = 0, wordDuration = 0.1, className = "", style = {} }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: wordDuration, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className={className}
      style={{ ...style, display: "flex", flexWrap: "wrap", justifyContent: style.textAlign === "center" ? "center" : "flex-start", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ position: "relative" }}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};
