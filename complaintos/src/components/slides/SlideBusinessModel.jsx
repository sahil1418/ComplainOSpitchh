import { motion } from "framer-motion";
import { SlideWrapper } from "../shared/SlideWrapper";
import { CreditCard, Building2, Code2, Target, Rocket, Globe } from "lucide-react";

const revenueStreams = [
  {
    icon: CreditCard,
    title: "SaaS Licensing",
    desc: "Per-user monthly subscription for banks and NBFCs",
    price: "Per Agent / Month",
    color: "#6366f1",
  },
  {
    icon: Building2,
    title: "Enterprise License",
    desc: "Annual contract for large-scale bank deployments",
    price: "Annual Contract",
    color: "#f59e0b",
  },
  {
    icon: Code2,
    title: "API Access",
    desc: "AI-as-a-Service — emotion detection, NBA, compliance APIs",
    price: "Pay-per-Call",
    color: "#10b981",
  },
];

const phases = [
  { phase: "Phase 1", title: "Mid-Size Banks", desc: "5-10 pilot banks in India", timeline: "0-6 months", color: "#3b82f6" },
  { phase: "Phase 2", title: "Enterprise Scale", desc: "Top 20 banks, full deployment", timeline: "6-18 months", color: "#8b5cf6" },
  { phase: "Phase 3", title: "Pan-Industry", desc: "Insurance, NBFC, global markets", timeline: "18-36 months", color: "#ec4899" },
];

const SlideBusinessModel = ({ direction }) => {
  return (
    <SlideWrapper slideKey="business" direction={direction}>
      <div className="relative w-full h-full flex items-center overflow-hidden px-16 lg:px-24">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[100px]" />

        {/* Left Content */}
        <div className="flex-1 max-w-xl pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-amber-400/80 font-ibm">
              Business Model
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 text-4xl lg:text-5xl font-outfit font-black tracking-tight leading-tight mb-8"
          >
            <span className="text-white">How We </span>
            <span className="text-amber-400">Grow</span>
          </motion.h2>

          {/* Revenue streams */}
          <div className="space-y-4 mb-8">
            {revenueStreams.map(({ icon: Icon, title, desc, price, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-outfit font-bold text-white">{title}</p>
                    <span
                      className="text-[9px] font-ibm font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {price}
                    </span>
                  </div>
                  <p className="text-xs font-ibm text-slate-400 mt-1">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Target market & advantage */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3">
              <Target size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-ibm font-bold text-slate-300 uppercase tracking-wider">Target Market</p>
                <p className="text-xs font-ibm text-slate-400 mt-1">
                  Public & private sector banks, NBFCs, and insurance — starting with mid-sized banks in India.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-ibm font-bold text-slate-300 uppercase tracking-wider">Competitive Edge</p>
                <p className="text-xs font-ibm text-slate-400 mt-1">
                  India-first compliance engine + Gen-AI emotion detection. No competitor offers both.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: GTM Timeline */}
        <div className="flex-1 max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {/* Business Model Canvas */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { title: "Key Partners", items: "Cloud Providers, Banking APIs, RBI Compliance Boards", color: "#3b82f6" },
                { title: "Key Activities", items: "AI Model Training, Platform Ops, Compliance Updates", color: "#8b5cf6" },
                { title: "Value Prop", items: "Unified + Intelligent + Compliant Complaint Resolution", color: "#f59e0b" },
                { title: "Customers", items: "Mid-size Banks, Large PSBs, NBFCs, Insurance", color: "#10b981" },
              ].map(({ title, items, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.15, duration: 0.4 }}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4"
                >
                  <p className="text-[10px] font-ibm font-bold uppercase tracking-wider mb-2" style={{ color }}>
                    {title}
                  </p>
                  <p className="text-[11px] font-ibm text-slate-400 leading-relaxed">{items}</p>
                </motion.div>
              ))}
            </div>

            {/* Go-to-Market Phases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={14} className="text-indigo-400" />
                <p className="text-xs font-ibm font-bold text-white uppercase tracking-wider">Go-to-Market Roadmap</p>
              </div>

              <div className="relative">
                {/* Vertical connector */}
                <div className="absolute left-5 top-2 bottom-2 w-[2px] bg-white/[0.06]" />

                <div className="space-y-5">
                  {phases.map(({ phase, title, desc, timeline, color }, i) => (
                    <motion.div
                      key={phase}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + i * 0.25, duration: 0.5 }}
                      className="flex items-start gap-4 relative"
                    >
                      {/* Node dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.9 + i * 0.25, duration: 0.3, type: "spring" }}
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border z-10"
                        style={{ backgroundColor: `${color}20`, borderColor: `${color}40` }}
                      >
                        <span className="text-[10px] font-outfit font-black" style={{ color }}>{i + 1}</span>
                      </motion.div>

                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-outfit font-bold text-white">{title}</p>
                          <span className="text-[9px] font-ibm text-slate-500">{timeline}</span>
                        </div>
                        <p className="text-[11px] font-ibm text-slate-400 mt-0.5">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideBusinessModel;
