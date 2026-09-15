const stats = [
  { value: "6+", label: "Projects Shipped", desc: "Full-stack applications" },
  { value: "1", label: "Internship", desc: "Professional experience" },
  { value: "6+", label: "Certificates", desc: "Verified credentials" },
  { value: "2027", label: "Graduation", desc: "B.Tech Computer Engineering" },
];

export default function Stats() {
  return (
    <div
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-8 px-6 flex flex-col gap-1"
              style={{
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.6rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--accent)",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--fg)",
                  marginTop: "0.25rem",
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  color: "var(--fg-muted)",
                }}
              >
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
