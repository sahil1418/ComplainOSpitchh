import { motion } from "framer-motion";
import { AlertTriangle, Mail, MessageCircle, Phone, Twitter } from "lucide-react";

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};
const stagger = { animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const fadeUp = { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

const painPoints = [
  { icon: Mail, label: "Email", pending: "47 pending" },
  { icon: Twitter, label: "Twitter", pending: "23 missed" },
  { icon: Phone, label: "Voice", pending: "No logs" },
  { icon: MessageCircle, label: "WhatsApp", pending: "31 lost" },
];

const problems = [
  "Siloed channels with no unified thread",
  "Furious HNI customers treated like normal queries",
  "Agents manually triage without AI scoring",
  "SLA breaches trigger regulatory penalties",
];

export default function SlideProblem({ direction }) {
  return (
    <motion.div
      data-testid="slide-problem"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Red ambient glow */}
      <div style={{
        position: "absolute", top: "10%", right: "5%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Left side - Story */}
      <div style={{ flex: 1, maxWidth: 520, paddingRight: 48, position: "relative", zIndex: 10 }}>
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeUp} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 14px", background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.2)", borderRadius: 100, marginBottom: 24,
          }}>
            <AlertTriangle size={14} color="#ef4444" />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f87171", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              The Problem
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.05,
            letterSpacing: "-0.02em", marginBottom: 20,
          }}>
            <span className="gradient-text-red">Broken</span>{" "}
            <span style={{ color: "#f8fafc" }}>Complaint</span><br />
            <span style={{ color: "#f8fafc" }}>Systems</span>
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            fontSize: 17, color: "#94a3b8", lineHeight: 1.7, marginBottom: 32,
          }}>
            Banks handle <span style={{ color: "#f8fafc", fontWeight: 700 }}>10M+ complaints</span> annually
            across disconnected channels. Complaints get lost, angry customers are treated like normal ones,
            and delays lead to <span style={{ color: "#ef4444", fontWeight: 700 }}>penalties and lost trust</span>.
          </motion.p>

          {/* Problem bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {problems.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 16px",
                  background: "rgba(239,68,68,0.04)",
                  border: "1px solid rgba(239,68,68,0.1)",
                  borderRadius: 10,
                }}
              >
                <div style={{
                  width: 20, height: 20, borderRadius: 6,
                  background: "rgba(239,68,68,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ color: "#ef4444", fontSize: 12, fontWeight: 900 }}>✕</span>
                </div>
                <span style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>{p}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right side - Visual */}
      <div style={{ flex: 1, maxWidth: 520, position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Legacy dashboard mock */}
          <div className="glass-card neon-glow-red" style={{ padding: 0, overflow: "hidden" }}>
            {/* Top bar */}
            <div style={{
              background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.15)",
              padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#475569" }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Legacy System
              </span>
              <div style={{
                background: "rgba(239,68,68,0.15)", padding: "2px 8px",
                borderRadius: 6, fontSize: 9, fontWeight: 800, color: "#ef4444",
              }}>
                12 ALERTS
              </div>
            </div>

            {/* Alert banner */}
            <div style={{
              background: "rgba(239,68,68,0.08)", borderBottom: "1px solid rgba(239,68,68,0.1)",
              padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
            }}>
              <AlertTriangle size={12} color="#ef4444" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#f87171" }}>
                SLA Breach: 18 cases overdue | 3 HNI complaints unresolved &gt;48hrs
              </span>
            </div>

            {/* Bad metrics */}
            <div style={{ padding: "14px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { val: "42%", label: "SLA Breach", color: "#ef4444" },
                { val: "8.5h", label: "Avg Resolution", color: "#f97316" },
                { val: "34%", label: "CSAT Score", color: "#eab308" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  style={{
                    textAlign: "center", padding: 10,
                    background: `${m.color}10`, borderRadius: 10,
                    border: `1px solid ${m.color}20`,
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 900, color: m.color }}>{m.val}</div>
                  <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>{m.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Channel silos */}
            <div style={{ padding: "0 16px 14px" }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 700,
                color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8,
              }}>
                Disconnected Channels
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6 }}>
                {painPoints.map((ch, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px dashed rgba(255,255,255,0.08)",
                      borderRadius: 8, padding: 8, textAlign: "center",
                    }}
                  >
                    <ch.icon size={14} color="#475569" style={{ margin: "0 auto 4px" }} />
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8" }}>{ch.label}</div>
                    <div style={{ fontSize: 9, color: "#ef4444", fontWeight: 600 }}>{ch.pending}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 11, color: "#475569", marginTop: 12, fontFamily: "'JetBrains Mono', monospace" }}>
            No AI. No Automation. No Intelligence.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
