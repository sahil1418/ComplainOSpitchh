import { motion } from "framer-motion";
import { Cpu, MessageSquare, BarChart3, Shield } from "lucide-react";

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

const techItems = [
  { icon: MessageSquare, label: "NLP Sentiment", desc: "Understand messages & emotions", color: "#8b5cf6" },
  { icon: Cpu, label: "Gen-AI Core", desc: "LLM-powered intelligence", color: "#6366f1" },
  { icon: BarChart3, label: "Priority Engine", desc: "Real-time risk scoring", color: "#06b6d4" },
  { icon: Shield, label: "Compliance AI", desc: "Auto-tag RBI circulars", color: "#10b981" },
];

export default function SlideTechnology({ direction }) {
  return (
    <motion.div
      data-testid="slide-technology"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ flexDirection: "column" }}
    >
      {/* Purple glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, width: "100%", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 14px", background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.2)", borderRadius: 100, marginBottom: 24,
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Behind the Scenes
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.1,
            letterSpacing: "-0.02em", marginBottom: 12, color: "#f8fafc",
          }}
        >
          Simple <span className="gradient-text-indigo">AI</span> That Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ fontSize: 17, color: "#94a3b8", marginBottom: 48, maxWidth: 500, margin: "0 auto 48px" }}
        >
          Understanding messages, emotions, and priorities — in real-time
        </motion.p>

        {/* Tech grid - 2x2 with central node */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Central AI node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: 80, height: 80, borderRadius: "50%",
              background: "rgba(99,102,241,0.1)", border: "2px solid rgba(99,102,241,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 20,
            }}
          >
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(99,102,241,0.3)", "0 0 50px rgba(99,102,241,0.5)", "0 0 20px rgba(99,102,241,0.3)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Cpu size={24} color="white" />
            </motion.div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 700, width: "100%" }}>
            {techItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                className="glass-card"
                style={{
                  padding: "28px 24px", display: "flex", alignItems: "flex-start", gap: 16,
                  textAlign: "left",
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${item.color}12`, border: `1px solid ${item.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <item.icon size={22} color={item.color} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#f8fafc", marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
