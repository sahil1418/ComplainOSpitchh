import { motion } from "framer-motion";
import { SlideWrapper } from "../shared/SlideWrapper";
import { Heart } from "lucide-react";

const SlideClosing = ({ direction }) => {
  return (
    <SlideWrapper slideKey="closing" direction={direction}>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-500/[0.06] rounded-full filter blur-[150px]" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-purple-500/[0.04] rounded-full filter blur-[80px]" />

        {/* Opening narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base md:text-lg text-slate-500 font-ibm font-light text-center max-w-2xl leading-relaxed mb-6"
        >
          Today, complaints are treated like tickets...
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 font-ibm font-light text-center max-w-2xl leading-relaxed mb-10"
        >
          But in reality... every complaint is a{" "}
          <span className="text-indigo-300 font-medium">person asking to be heard.</span>
        </motion.p>

        {/* Heart icon pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.6, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 rounded-full bg-indigo-500/[0.1] border border-indigo-500/[0.2] flex items-center justify-center"
          >
            <Heart size={28} className="text-indigo-400" fill="rgba(99,102,241,0.3)" />
          </motion.div>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl md:text-4xl lg:text-5xl font-outfit font-black tracking-tight text-center mb-4 leading-tight"
        >
          <span className="text-white">With ComplaintOS, we don't just solve complaints.</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-center mb-12 leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            We restore trust.
          </span>
        </motion.h2>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 0.8 }}
          className="text-base text-slate-500 font-ibm font-light text-center"
        >
          And that's the future we are building.
        </motion.p>

        {/* Team + Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1 }}
          className="absolute bottom-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.8, duration: 0.6 }}
            className="text-2xl font-outfit font-bold text-white mb-4"
          >
            Thank You
          </motion.p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-indigo-500/30" />
            <span className="text-xs text-indigo-400 font-ibm tracking-wider uppercase">Team Ordinary</span>
            <div className="w-8 h-[1px] bg-indigo-500/30" />
          </div>
          <p className="text-sm text-slate-400 font-ibm font-light">
            Rigzin Wangmo &middot; Ishita Gupta &middot; Suhavani Pandey
          </p>
          <p className="text-xs text-slate-500 font-ibm mt-1">IIIT Allahabad</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default SlideClosing;
