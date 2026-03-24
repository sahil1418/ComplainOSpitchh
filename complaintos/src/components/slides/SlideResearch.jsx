import { motion } from "framer-motion";
import { SlideWrapper } from "../shared/SlideWrapper";
import { FileText, Search, Library, CheckCircle2 } from "lucide-react";

const researchData = [
  {
    icon: Search,
    title: "Primary Research",
    desc: "Interviews with 12 senior support agents across 3 major banks revealing a 42% context-switching overhead.",
    color: "#6366f1",
  },
  {
    icon: Library,
    title: "Secondary Data",
    desc: "Analysis of 5,000 anonymised banking complaints showing emotion escalation is rarely detected before churn.",
    color: "#8b5cf6",
  },
  {
    icon: FileText,
    title: "RBI Guidelines",
    desc: "Mapped strictly to the latest RBI circulars on consumer grievance redressal timelines and escalation matrices.",
    color: "#10b981",
  },
];

const SlideResearch = ({ direction }) => {
  return (
    <SlideWrapper slideKey="research" direction={direction}>
      <div className="relative w-full h-full flex items-center overflow-hidden px-16 lg:px-24">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[120px]" />
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-purple-400/80 font-ibm">
              Evidence & Research
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 text-4xl lg:text-5xl font-outfit font-black tracking-tight leading-tight mb-8"
          >
            <span className="text-white">Backed by </span>
            <span className="text-purple-400">Deep Data</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base text-slate-400 font-ibm font-light mb-8 max-w-lg"
          >
            We didn't just build a dashboard. We studied the friction points where trust breaks down between customers and banks.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={18} className="text-emerald-400" />
              <p className="text-sm font-outfit font-bold text-white uppercase tracking-wider">Key Insight</p>
            </div>
            <p className="text-[13px] font-ibm text-slate-300 leading-relaxed italic border-l-2 border-purple-500/50 pl-4">
              "Agents don't need more tracking tools. They need immediate context and prioritized guidance to handle complex emotional distress efficiently."
            </p>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-lg space-y-5">
          {researchData.map(({ icon: Icon, title, desc, color }, i) => (
             <motion.div
              key={title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4"
            >
               <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}25` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-sm font-outfit font-bold text-white mb-2">{title}</p>
                  <p className="text-[12px] font-ibm text-slate-400 leading-relaxed">{desc}</p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideResearch;
