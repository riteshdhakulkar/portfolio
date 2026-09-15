import { SectionHead } from "./About";

const items = [
  {
    year: "2023 – 2027",
    tag: "Pursuing",
    degree: "B.Tech – Computer Engineering",
    institution: "Priyadarshini College of Engineering, Nagpur",
    current: true,
  },
  {
    year: "2022",
    tag: "Completed",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    current: false,
  },
  {
    year: "2020",
    tag: "Completed",
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="06" title="Education" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 card-lift"
              style={{
                background: "var(--card)",
                border: `1px solid ${item.current ? "var(--accent)" : "var(--border-light)"}`,
              }}
            >
              {/* Year badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
                style={{
                  background: item.current ? "var(--accent-dim)" : "var(--bg)",
                  border: `1px solid ${item.current ? "var(--accent)" : "var(--border)"}`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: item.current ? "var(--accent)" : "var(--fg-muted)",
                  }}
                >
                  {item.year}
                </span>
                {item.current && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                )}
              </div>

              {/* Ghost number */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "5rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--border)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  marginBottom: "-1rem",
                }}
              >
                0{i + 1}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  marginBottom: "0.4rem",
                }}
              >
                {item.degree}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.5,
                }}
              >
                {item.institution}
              </p>

              <div
                className="mt-4 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: item.current ? "var(--accent-dim)" : "var(--bg)",
                    color: item.current ? "var(--accent)" : "var(--fg-dim)",
                    border: `1px solid ${item.current ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
