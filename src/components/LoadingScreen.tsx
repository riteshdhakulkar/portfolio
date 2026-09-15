import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setFading(true);
      setTimeout(onDone, 600);
    }, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "var(--bg)",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Monogram */}
        <div className="relative">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3.5rem",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              lineHeight: 1,
            }}
          >
            R<span style={{ color: "var(--accent)" }}>D</span>
          </span>
          <div
            className="absolute -bottom-1 left-0 right-0 h-px"
            style={{ background: "var(--border-light)" }}
          />
        </div>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
          }}
        >
          Loading portfolio...
        </p>

        {/* Progress */}
        <div
          className="w-48 h-px overflow-hidden"
          style={{ background: "var(--border-light)" }}
        >
          <div
            className="h-full progress-bar"
            style={{ background: "var(--accent)" }}
          />
        </div>
      </div>
    </div>
  );
}
