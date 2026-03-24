import { motion } from "framer-motion";
import { User, AlertTriangle, Clock, Shield, MessageSquare, Bot, TrendingUp, CircleAlert, CheckCircle2 } from "lucide-react";

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SlideAgentCommandCenter({ direction }) {
  return (
    <motion.div
      data-testid="slide-agent-dashboard"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", padding: "40px" }}
    >
      <div style={{ textAlign: "center", marginBottom: 32, width: "100%", maxWidth: 1100 }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1 }}
           style={{
             fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#a78bfa",
             letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600
           }}
        >
          AGENT COMMAND CENTER
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}
        >
          Everything an Agent Needs. <span className="gradient-text-purple">One Screen.</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%", maxWidth: 1200, flex: 1, maxHeight: 650,
          background: "rgba(15,23,42,0.6)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",
          overflow: "hidden", display: "flex", flexDirection: "column",
          backdropFilter: "blur(20px)"
        }}
      >
        {/* Window Header */}
        <div style={{
          height: 48, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", px: 20,
          padding: "0 20px", background: "rgba(255,255,255,0.02)", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: 16 }}>
              <span style={{ color: "#818cf8", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>ComplaintOS</span>
              <span style={{ color: "#64748b", fontSize: 13 }}>Agent Dashboard</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ padding: "4px 10px", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 100, fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.05em" }}>3 CRITICAL</div>
            <div style={{ padding: "4px 10px", background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: 100, fontSize: 11, color: "#fde047", fontWeight: 700, letterSpacing: "0.05em" }}>5 HIGH</div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <motion.div variants={stagger} initial="initial" animate="animate" style={{ display: "flex", gap: 20, padding: 20, flex: 1, backgroundColor: "#0b0f19" }}>
          
          {/* Column 1: Context & Risk */}
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 16 }}>
            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "linear-gradient(180deg, rgba(239,68,68,0.04) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em" }}>CMP-001</span>
                <span style={{ padding: "2px 8px", background: "#ef4444", borderRadius: 4, fontSize: 10, color: "#fff", fontWeight: 800 }}>CRITICAL</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <User size={18} color="#94a3b8" />
                <span style={{ fontSize: 18, fontWeight: 700, color: "#f8fafc" }}>Rajesh Sharma</span>
                <span style={{ padding: "2px 6px", background: "rgba(234,179,8,0.2)", borderRadius: 4, fontSize: 10, color: "#fde047", fontWeight: 700 }}>HNI</span>
              </div>
              <div style={{ color: "#cbd5e1", fontSize: 14, marginBottom: 16, lineHeight: 1.4 }}>
                UPI Double Charge — Rs. 45,000
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fca5a5", fontSize: 12, background: "rgba(239,68,68,0.1)", padding: "8px 12px", borderRadius: 8 }}>
                <AlertTriangle size={14} />
                <span>Emotion: <strong>Furious</strong> (92% confidence)</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f8fafc", fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
                <Clock size={16} color="#eab308" />
                SLA Countdown
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#eab308", letterSpacing: "0.05em", fontFamily: "'JetBrains Mono', monospace", marginBottom: 12 }}>
                02:14:37
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 100, overflow: "hidden", marginBottom: 8 }}>
                <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ delay: 1, duration: 1.5, ease: "easeOut" }} style={{ height: "100%", background: "linear-gradient(90deg, #eab308, #ef4444)", borderRadius: 100 }} />
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>Warning: 65% time elapsed</div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f8fafc", fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
                <Shield size={16} color="#22c55e" />
                Auto-Compliance
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[{l: "RBI-Circular", c: "#f97316"}, {l: "UPI-Dispute", c: "#8b5cf6"}, {l: "Zero-Liability", c: "#22c55e"}, {l: "Priority-Refund", c: "#ef4444"}].map((tag, i) => (
                  <div key={i} style={{ padding: "4px 10px", fontSize: 11, color: tag.c, border: `1px solid ${tag.c}40`, background: `${tag.c}10`, borderRadius: 6, fontWeight: 600 }}>
                    {tag.l}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Intelligence & Triage */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: 16 }}>
            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#f8fafc", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 16 }}>CONVERSATION THREAD</div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 800 }}>R</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Rajesh via WhatsApp</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: 16, borderRadius: "2px 16px 16px 16px", color: "#e2e8f0", fontSize: 14, lineHeight: 1.6 }}>
                  I was charged TWICE for one UPI payment of Rs. 45,000! This is THEFT! I need my money back NOW or I will go to the ombudsman!
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "linear-gradient(90deg, rgba(239,68,68,0.08) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <div style={{ color: "#fca5a5", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 12 }}>EMOTION DETECTED</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ fontSize: 18, color: "#ef4444", fontWeight: 900, letterSpacing: "0.05em" }}>FURIOUS</div>
                <div style={{ fontSize: 12, color: "#ef4444", fontWeight: 700, fontFamily: "monospace" }}>92%</div>
              </div>
              <div style={{ height: 4, background: "rgba(2ef,68,68,0.2)", borderRadius: 100, overflow: "hidden" }}>
                <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 1.5, duration: 1 }} style={{ height: "100%", background: "#ef4444", borderRadius: 100 }} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "linear-gradient(90deg, rgba(234,179,8,0.08) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(234,179,8,0.2)" }}>
              <div style={{ color: "#fde047", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 12 }}>PRIORITY SCORE</div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#eab308", lineHeight: 1 }}>9.2</div>
                <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.5 }}>
                  <span style={{ color: "#fde047" }}>HNI Customer</span> + Furious Emotion + Financial Fraud + SLA Risk
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Response & Actions */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: 16 }}>
            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.2)", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#818cf8", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 16 }}>
                <Bot size={16} /> AI-GENERATED RESPONSE
              </div>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: 16, borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", marginBottom: 16 }}>
                <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.7, fontStyle: "italic" }}>
                  "Dear Mr. Sharma, I sincerely apologize for this experience. I can see the duplicate UPI charge of Rs. 45,000. I am initiating an immediate reversal which will reflect in 24-48 hours. Your case has been marked Priority and I am personally monitoring it."
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 11, color: "#64748b" }}>Confidence:</span>
                <div style={{ flex: 1, height: 4, background: "rgba(99,102,241,0.2)", borderRadius: 100 }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 1.8, duration: 1 }} style={{ height: "100%", background: "#6366f1", borderRadius: 100 }} />
                </div>
                <span style={{ fontSize: 11, color: "#818cf8", fontFamily: "monospace" }}>92%</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ padding: 20, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f8fafc", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 16 }}>
                <TrendingUp size={16} color="#06b6d4" /> NEXT BEST ACTIONS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Initiate Immediate Refund", score: "94%" },
                  { label: "Escalate to Senior Manager", score: "87%" },
                  { label: "Send Regulatory Confirmation", score: "76%" }
                ].map((act, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.02)", padding: "10px 14px", borderRadius: 8 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(6,182,212,0.1)", color: "#06b6d4", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1, color: "#e2e8f0", fontSize: 13 }}>{act.label}</div>
                    <div style={{ color: "#06b6d4", fontSize: 11, fontFamily: "monospace", fontWeight: 700 }}>{act.score}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom mini-metrics */}
            <div style={{ display: "flex", gap: 16 }}>
               <motion.div variants={fadeUp} style={{ flex: 1, padding: 16, borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                 <div style={{ fontSize: 20, fontWeight: 800, color: "#22c55e", marginBottom: 4 }}>4.2h</div>
                 <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.05em" }}>AVG RESOLUTION</div>
               </motion.div>
               <motion.div variants={fadeUp} style={{ flex: 1, padding: 16, borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                 <div style={{ fontSize: 20, fontWeight: 800, color: "#3b82f6", marginBottom: 4 }}>92%</div>
                 <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.05em" }}>SLA ON-TIME</div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
