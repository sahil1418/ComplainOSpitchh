import { motion } from "framer-motion";

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
  }),
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function SlideOpening({ direction }) {
  return (
    <motion.div
      data-testid="slide-opening"
      className="slide"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
    >
      {/* Central glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 600,
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <motion.div variants={stagger} initial="initial" animate="animate" style={{ position: "relative", zIndex: 10 }}>
        {/* Hackathon badge */}
        <motion.div variants={fadeUp} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 16px",
          background: "rgba(99,102,241,0.1)",
          border: "1px solid rgba(99,102,241,0.25)",
          borderRadius: 100,
          marginBottom: 32,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            PS-5 Hackathon 2025
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={fadeUp} style={{
          fontSize: "clamp(48px, 7vw, 96px)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          marginBottom: 16,
        }}>
          <span className="gradient-text-indigo">Complaint</span>
          <span style={{ color: "#f8fafc" }}>OS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp} style={{
          fontSize: "clamp(18px, 2.2vw, 28px)",
          fontWeight: 300,
          color: "#94a3b8",
          lineHeight: 1.4,
          maxWidth: 700,
          margin: "0 auto 40px",
        }}>
          Gen-AI Powered Unified Complaint Intelligence Platform
        </motion.p>

        {/* Tagline */}
        <motion.p variants={fadeUp} style={{
          fontSize: 16,
          color: "#64748b",
          maxWidth: 500,
          margin: "0 auto 48px",
          lineHeight: 1.6,
        }}>
          Transforming how banks handle, resolve, and learn from customer complaints
        </motion.p>

        {/* Team */}
        <motion.div variants={fadeUp} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#cbd5e1" }}>
              Rigzin Wangmo &middot; Ishita Gupta &middot; Suhavani Pandey
            </span>
          </div>
          <span style={{ fontSize: 12, color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>
            IIIT Allahabad
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
