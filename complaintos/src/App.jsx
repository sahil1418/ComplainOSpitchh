import { useState, useEffect, useCallback, useRef } from "react";
import "@/App.css";
import { AnimatePresence } from "framer-motion";
import SlideOpening from "@/components/slides/SlideOpening";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideSolution from "@/components/slides/SlideSolution";
import SlideLiveFlow from "@/components/slides/SlideLiveFlow";
import SlideTechnology from "@/components/slides/SlideTechnology";
import SlideFeasibility from "@/components/slides/SlideFeasibility";
import SlideImpact from "@/components/slides/SlideImpact";
import SlideBusinessModel from "@/components/slides/SlideBusinessModel";
import SlideResearch from "@/components/slides/SlideResearch";
import SlideClosing from "@/components/slides/SlideClosing";

const SLIDES = [
  SlideOpening,
  SlideProblem,
  SlideSolution,
  SlideLiveFlow,
  SlideTechnology,
  SlideFeasibility,
  SlideImpact,
  SlideBusinessModel,
  SlideResearch,
  SlideClosing,
];

const SLIDE_DURATIONS = [12, 20, 15, 30, 8, 15, 20, 15, 10, 15]; // seconds per slide

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState(0);
  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);

  const totalSlides = SLIDES.length;

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setAutoPlayProgress(0);
    }
  }, [currentSlide, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      setAutoPlayProgress(0);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowRight" || e.code === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.code === "Backspace" || e.code === "ArrowLeft" || e.code === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.code === "KeyA") {
        setAutoPlay((prev) => !prev);
        setAutoPlayProgress(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Auto-play logic
  useEffect(() => {
    if (autoPlay) {
      const duration = SLIDE_DURATIONS[currentSlide] * 1000;
      const interval = 50;
      let elapsed = 0;

      progressRef.current = setInterval(() => {
        elapsed += interval;
        setAutoPlayProgress(elapsed / duration);
      }, interval);

      autoPlayRef.current = setTimeout(() => {
        if (currentSlide < totalSlides - 1) {
          goNext();
        } else {
          setAutoPlay(false);
        }
      }, duration);

      return () => {
        clearTimeout(autoPlayRef.current);
        clearInterval(progressRef.current);
      };
    } else {
      setAutoPlayProgress(0);
    }
  }, [autoPlay, currentSlide, goNext, totalSlides]);

  const CurrentSlideComponent = SLIDES[currentSlide];
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div
      data-testid="pitch-deck-container"
      style={{ width: "100vw", height: "100vh", background: "#020617", position: "relative", overflow: "hidden" }}
    >
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Ambient background glow */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          left: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-20%",
          right: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <CurrentSlideComponent key={currentSlide} direction={direction} />
      </AnimatePresence>

      {/* Progress bar */}
      <div className="progress-container" data-testid="progress-bar">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Navigation Controls */}
      <div
        data-testid="navigation-controls"
        style={{
          position: "fixed",
          bottom: 16,
          right: 24,
          display: "flex",
          alignItems: "center",
          gap: 12,
          zIndex: 200,
        }}
      >
        <span
          data-testid="slide-counter"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#64748b",
            letterSpacing: "0.05em",
          }}
        >
          {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>

        <button
          data-testid="prev-slide-btn"
          onClick={goPrev}
          disabled={currentSlide === 0}
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.1)",
            background: currentSlide === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)",
            color: currentSlide === 0 ? "#334155" : "#94a3b8",
            cursor: currentSlide === 0 ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            transition: "all 0.2s",
          }}
        >
          &#8592;
        </button>
        <button
          data-testid="next-slide-btn"
          onClick={goNext}
          disabled={currentSlide === totalSlides - 1}
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.1)",
            background: currentSlide === totalSlides - 1 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)",
            color: currentSlide === totalSlides - 1 ? "#334155" : "#94a3b8",
            cursor: currentSlide === totalSlides - 1 ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            transition: "all 0.2s",
          }}
        >
          &#8594;
        </button>

        <button
          data-testid="autoplay-toggle-btn"
          onClick={() => { setAutoPlay((prev) => !prev); setAutoPlayProgress(0); }}
          style={{
            position: "relative",
            width: 32,
            height: 32,
            borderRadius: 8,
            border: `1px solid ${autoPlay ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.1)"}`,
            background: autoPlay ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.06)",
            color: autoPlay ? "#818cf8" : "#94a3b8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            transition: "all 0.2s",
          }}
          title="Toggle auto-play (A)"
        >
          {autoPlay ? "⏸" : "▶"}
        </button>
      </div>

      <div
        data-testid="keyboard-hints"
        style={{
          position: "fixed",
          bottom: 16,
          left: 24,
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 200,
          opacity: 0.5,
        }}
      >
        <span className="key-hint">Space</span>
        <span style={{ fontSize: 10, color: "#475569" }}>next</span>
        <span className="key-hint" style={{ marginLeft: 8 }}>&#9003;</span>
        <span style={{ fontSize: 10, color: "#475569" }}>prev</span>
        <span className="key-hint" style={{ marginLeft: 8 }}>A</span>
        <span style={{ fontSize: 10, color: "#475569" }}>auto</span>
      </div>

      {autoPlay && (
        <div
          data-testid="autoplay-timer"
          style={{
            position: "fixed",
            top: 16,
            right: 24,
            zIndex: 200,
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle
              cx="18" cy="18" r="15"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />
            <circle
              cx="18" cy="18" r="15"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 15}
              strokeDashoffset={2 * Math.PI * 15 * (1 - autoPlayProgress)}
              transform="rotate(-90 18 18)"
              className="autoplay-ring"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default App;
