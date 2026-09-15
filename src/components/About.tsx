const profile = [
  { k: "Role", v: "Full Stack Developer" },
  { k: "Focus", v: "MERN / Backend Development" },
  { k: "Institution", v: "PCE, Nagpur" },
  { k: "Graduation", v: "2027" },
  { k: "Location", v: "Nagpur, India" },
  { k: "Status", v: "Intern @ WEBNOVEX" },
];

const learning = ["AI Automations", "AI/ML", "System Design", "Docker"];

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="01" title="About Me" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Text block — 7 cols */}
          <div className="lg:col-span-7">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                color: "var(--fg)",
                marginBottom: "1.5rem",
              }}
            >
              Aspiring Full-Stack (MERN) Developer with hands-on experience building
              scalable, user-centric web applications.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                marginBottom: "1.25rem",
              }}
            >
              I enjoy creating modern web experiences, solving real-world problems and
              continuously improving my development skills across the full stack — from
              designing clean React interfaces to architecting efficient Node.js backends.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--fg-muted)",
              }}
            >
              Currently pursuing B.Tech in Computer Engineering at Priyadarshini College
              of Engineering, Nagpur — expected to graduate in 2027.
            </p>

            {/* Currently learning */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
                Currently learning →
              </span>
              {learning.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.06em",
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid var(--accent)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Horizontal rule with label */}
            <div className="flex items-center gap-4 mt-10">
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                }}
              >
                Ritesh · Dhakulkar · PCE · 2027
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>
          </div>

          {/* Profile card — 5 cols */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border-light)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  marginBottom: "1.25rem",
                }}
              >
                // developer_profile.json
              </p>
              {profile.map((item, i) => (
                <div
                  key={item.k}
                  className="flex items-start justify-between py-3"
                  style={{
                    borderBottom: i < profile.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--accent)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.k}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      textAlign: "right",
                    }}
                  >
                    {item.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-end gap-5">
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(4rem, 8vw, 6rem)",
          fontWeight: 700,
          fontStyle: "italic",
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1px var(--border-light)",
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 400,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 1,
          }}
        >
          {title}
        </h2>
        <div
          className="mt-2 w-8 h-0.5 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </div>
    </div>
  );
}
