import { motion } from "framer-motion";
import { CheckCircle2, Layers, Brain, Shield, Zap, TrendingUp } from "lucide-react";

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};
const stagger = { animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const fadeUp = { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

const features = [
  { icon: Layers, title: "Omnichannel Fusion", desc: "All channels in one unified thread", color: "#3b82f6" },
  { icon: Brain, title: "AI Emotion Engine", desc: "4-level sentiment with confidence scores", color: "#8b5cf6" },
  { icon: Zap, title: "Smart Priority", desc: "Risk-weighted triage with HNI fast-track", color: "#f59e0b" },
  { icon: CheckCircle2, title: "Gen-AI Assist", desc: "Auto-generated responses & next actions", color: "#10b981" },
  { icon: Shield, title: "Auto-Compliance", desc: "RBI circulars mapped per case", color: "#06b6d4" },
  { icon: TrendingUp, title: "Self-Learning", desc: "System improves from resolved cases", color: "#ec4899" },
];

export default function SlideSolution({ direction }) {
  return (
    <motion.div
      data-testid="slide-solution"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ flexDirection: "column" }}
    >
      {/* Green glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 500,
        background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <motion.div variants={stagger} initial="initial" animate="animate" style={{
        position: "relative", zIndex: 10, textAlign: "center", maxWidth: 1100, width: "100%",
      }}>
        <motion.div variants={fadeUp} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "4px 14px", background: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.2)", borderRadius: 100, marginBottom: 24,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#34d399", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            The Solution
          </span>
        </motion.div>

        <motion.h2 variants={fadeUp} style={{
          fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 900, lineHeight: 1.05,
          letterSpacing: "-0.02em", marginBottom: 12,
        }}>
          <span style={{ color: "#f8fafc" }}>Meet </span>
          <span className="gradient-text-indigo">ComplaintOS</span>
        </motion.h2>

        <motion.p variants={fadeUp} style={{
          fontSize: 18, color: "#94a3b8", maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.6,
        }}>
          A single, unified system that collects complaints from everywhere, understands customer emotions, and helps agents respond faster and smarter.
        </motion.p>

        {/* Feature grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card"
              style={{
                padding: "24px 20px", textAlign: "left",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${f.color}40`;
                e.currentTarget.style.boxShadow = `0 0 30px ${f.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${f.color}15`, border: `1px solid ${f.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 14,
              }}>
                <f.icon size={20} color={f.color} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#f8fafc", marginBottom: 4 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
