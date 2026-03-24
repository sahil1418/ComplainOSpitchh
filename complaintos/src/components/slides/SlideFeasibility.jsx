import { motion } from "framer-motion";
import { Shield, Zap, Server, CheckCircle2, Globe, Clock } from "lucide-react";

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

const points = [
  { icon: Zap, title: "Ready from Day One", desc: "No heavy setup required", color: "#f59e0b" },
  { icon: Server, title: "Any System", desc: "Works on existing infrastructure", color: "#6366f1" },
  { icon: Shield, title: "Banking Compliant", desc: "Follows RBI rules & compliance", color: "#10b981" },
  { icon: Globe, title: "Zero Dependency", desc: "No framework lock-in", color: "#06b6d4" },
  { icon: Clock, title: "Real-Time SLA", desc: "Live countdown with breach alerts", color: "#ec4899" },
  { icon: CheckCircle2, title: "Quick Adoption", desc: "Banks can adopt safely", color: "#8b5cf6" },
];

export default function SlideFeasibility({ direction }) {
  return (
    <motion.div
      data-testid="slide-feasibility"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ flexDirection: "column" }}
    >
      <div style={{
        position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1000, width: "100%", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 14px", background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.2)", borderRadius: 100, marginBottom: 24,
          }}
        >
          <Shield size={12} color="#10b981" />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#34d399", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Why This Works
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.1,
            letterSpacing: "-0.02em", marginBottom: 12,
          }}
        >
          <span className="gradient-text-emerald">Enterprise-Ready</span>{" "}
          <span style={{ color: "#f8fafc" }}>from Day One</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 16, color: "#64748b", marginBottom: 48, maxWidth: 500, margin: "0 auto 48px" }}
        >
          Banks can adopt it quickly and safely — no disruption, no risk
        </motion.p>

        {/* Bento grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card"
              style={{ padding: "24px 20px", textAlign: "center" }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${p.color}10`, border: `1px solid ${p.color}20`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <p.icon size={22} color={p.color} />
              </motion.div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#f8fafc", marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontSize: 12, color: "#64748b" }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
