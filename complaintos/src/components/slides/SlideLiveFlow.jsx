import { motion } from "framer-motion";
import { MessageCircle, Brain, BarChart3, Headphones, TrendingUp } from "lucide-react";

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Collect",
    desc: "Customer reports fraud on WhatsApp",
    detail: "All channels feed into one unified queue",
    color: "#3b82f6",
    bg: "#3b82f610",
  },
  {
    icon: Brain,
    num: "02",
    title: "Understand",
    desc: "AI detects emotion & issue type",
    detail: "Calm, frustrated, or furious — with confidence scores",
    color: "#8b5cf6",
    bg: "#8b5cf610",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Prioritize",
    desc: "Auto-assign priority score",
    detail: "Urgent & high-value cases move faster",
    color: "#f59e0b",
    bg: "#f59e0b10",
  },
  {
    icon: Headphones,
    num: "04",
    title: "Assist",
    desc: "AI suggests best response & action",
    detail: "Ready response + Next-Best-Action for agents",
    color: "#10b981",
    bg: "#10b98110",
  },
  {
    icon: TrendingUp,
    num: "05",
    title: "Learn",
    desc: "System learns from resolution",
    detail: "Improves future cases automatically",
    color: "#06b6d4",
    bg: "#06b6d410",
  },
];

export default function SlideLiveFlow({ direction }) {
  return (
    <motion.div
      data-testid="slide-live-flow"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ flexDirection: "column" }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 900, height: 400,
        background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, width: "100%", textAlign: "center" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 14px", background: "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.2)", borderRadius: 100, marginBottom: 20,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#06b6d4" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#22d3ee", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Real-Life Flow
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, lineHeight: 1.1,
            letterSpacing: "-0.02em", marginBottom: 8, color: "#f8fafc",
          }}
        >
          From <span className="gradient-text-cyan">Chaos</span> to{" "}
          <span className="gradient-text-emerald">Resolution</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ fontSize: 15, color: "#64748b", marginBottom: 40, fontStyle: "italic" }}
        >
          "A customer reports a fraud on WhatsApp..."
        </motion.p>

        {/* Pipeline */}
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 0,
          position: "relative",
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", alignItems: "flex-start", flex: 1 }}
            >
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", padding: "0 8px", flex: 1,
              }}>
                {/* Node */}
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 15px ${step.color}30`,
                      `0 0 30px ${step.color}50`,
                      `0 0 15px ${step.color}30`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: step.bg, border: `1px solid ${step.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 14, position: "relative",
                  }}
                >
                  <step.icon size={24} color={step.color} />
                  <div style={{
                    position: "absolute", top: -6, right: -6,
                    width: 20, height: 20, borderRadius: 6,
                    background: step.color, color: "#fff",
                    fontSize: 9, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {step.num}
                  </div>
                </motion.div>

                {/* Title */}
                <div style={{ fontSize: 16, fontWeight: 800, color: "#f8fafc", marginBottom: 4 }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5, marginBottom: 6, maxWidth: 160 }}>
                  {step.desc}
                </div>
                <div style={{
                  fontSize: 10, color: "#475569", lineHeight: 1.5, maxWidth: 150,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {step.detail}
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                  style={{
                    width: 40, height: 2, marginTop: 27, flexShrink: 0,
                    background: `linear-gradient(90deg, ${step.color}60, ${steps[i + 1].color}60)`,
                    transformOrigin: "left",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            marginTop: 40, display: "inline-flex", alignItems: "center", gap: 12,
            padding: "12px 28px",
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 14,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
          <span style={{ fontSize: 15, color: "#34d399", fontWeight: 600 }}>
            Messy process turned smooth, fast, and intelligent
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
