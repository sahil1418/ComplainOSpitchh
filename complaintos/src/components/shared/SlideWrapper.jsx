import { motion } from "framer-motion";

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
  }),
};

export function SlideWrapper({ children, direction = 1, slideKey }) {
  return (
    <motion.div
      key={slideKey}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="slide"
      style={{ flexDirection: "column" }}
    >
      {children}
    </motion.div>
  );
}
