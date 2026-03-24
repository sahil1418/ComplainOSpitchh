import { motion } from "framer-motion";
import { SlideWrapper } from "../shared/SlideWrapper";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { TrendingDown, Users, Clock, ShieldCheck, ArrowDown, ArrowUp } from "lucide-react";

const kpis = [
  {
    icon: Clock,
    label: "Resolution Time",
    before: "8.5 hrs",
    after: 4.2,
    suffix: " hrs",
    decimals: 1,
    color: "#10b981",
    bgColor: "#10b98110",
    borderColor: "#10b98120",
    change: "-51%",
    description: "Drops from 8.5 hours to just 4.2 hours",
  },
  {
    icon: ShieldCheck,
    label: "SLA Compliance",
    before: "58%",
    after: 92,
    suffix: "%",
    decimals: 0,
    color: "#6366f1",
    bgColor: "#6366f110",
    borderColor: "#6366f120",
    change: "+59%",
    description: "SLA breaches reduce drastically",
  },
  {
    icon: Users,
    label: "Agent Productivity",
    before: "1x",
    after: 3,
    suffix: "x",
    decimals: 0,
    color: "#f59e0b",
    bgColor: "#f59e0b10",
    borderColor: "#f59e0b20",
    change: "+200%",
    description: "Agents become 3 times more productive",
  },
  {
    icon: TrendingDown,
    label: "Customer Churn",
    before: "High",
    after: 67,
    suffix: "%",
    prefix: "-",
    decimals: 0,
    color: "#ec4899",
    bgColor: "#ec489910",
    borderColor: "#ec489920",
    change: "-67%",
    description: "Customers feel heard, valued, and satisfied",
  },
];

const SlideImpact = ({ direction }) => {
  return (
    <SlideWrapper slideKey="impact" direction={direction}>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-16 lg:px-24">
        {/* Background glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full filter blur-[100px]" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-4 text-emerald-400 font-ibm tracking-[0.2em] text-xs uppercase font-medium"
        >
          Impact & Benefits
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl lg:text-5xl font-outfit font-black tracking-tight text-center mb-3 leading-tight"
        >
          <span className="text-white">Real </span>
          <span className="text-emerald-400">Results</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-base text-slate-400 font-ibm font-light text-center mb-14 max-w-xl"
        >
          And the impact is huge... customers feel heard, valued, and satisfied.
        </motion.p>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
          {kpis.map(({ icon: Icon, label, before, after, suffix, prefix, decimals, color, bgColor, borderColor, change, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group"
            >
              {/* Glow on hover */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: `${color}15` }}
              />

              <div
                className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-center h-full flex flex-col justify-between"
                style={{ borderColor: `${color}20` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.0 + i * 0.2, duration: 0.4, type: "spring" }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{ backgroundColor: bgColor, borderColor }}
                  >
                    <Icon size={22} style={{ color }} />
                  </motion.div>
                </div>

                {/* Label */}
                <p className="text-xs font-ibm font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {label}
                </p>

                {/* Before value (small, crossed out) */}
                <div className="mb-2">
                  <span className="text-sm font-ibm text-slate-600 line-through">{before}</span>
                </div>

                {/* Big animated counter */}
                <div className="mb-3">
                  <AnimatedCounter
                    target={after}
                    duration={2}
                    delay={1.2 + i * 0.2}
                    suffix={suffix}
                    prefix={prefix || ""}
                    decimals={decimals}
                    className="text-4xl font-outfit font-black"
                    style={{ color }}
                  />
                </div>

                {/* Change badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + i * 0.2, duration: 0.4 }}
                  className="flex justify-center mb-3"
                >
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-ibm font-bold"
                    style={{ backgroundColor: bgColor, color }}
                  >
                    {change.startsWith("-") ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
                    {change}
                  </span>
                </motion.div>

                {/* Description */}
                <p className="text-[11px] font-ibm text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            <span className="text-sm font-ibm text-slate-400">Projected Year-1 ROI:</span>
            <span className="text-xl font-outfit font-black text-emerald-400">340%</span>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default SlideImpact;
