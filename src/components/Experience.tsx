import { SectionHead } from "./About";
import offerLetter from "../imports/offerletter.pdf";

const internship = {
  title: "Full Stack Intern",
  org: "WEBNOVEX SOLUTION Pvt. Ltd.",
  period: "June 2026 – Present",
  duration: "3 months",
  tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Full Stack"],
  desc: "Working as a Full Stack Intern, contributing to real-world client projects using the MERN stack. Involved in building and maintaining web applications, API development, and collaborative team workflows.",
};

const affiliations = [
  {
    title: "Secretary",
    org: "ACM Student Chapter, PCE",
    period: "Current",
    current: true,
    tags: ["Leadership", "Technical Events", "Coordination"],
    desc: "Lead chapter operations — planning and executing technical workshops, hackathons, and member engagement activities.",
  },
  {
    title: "Event Manager",
    org: "SCOOP PCE",
    period: "Past",
    current: false,
    tags: ["Event Management", "Team Coordination"],
    desc: "Managed planning and execution of technical and cultural events while coordinating multi-department teams.",
  },
  {
    title: "Secretary",
    org: "Literary Club, PCE",
    period: "Past",
    current: false,
    tags: ["Organization", "Communication"],
    desc: "Handled organizational responsibilities, student communications, and engagement activities for the college literary society.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="03" title="Experience" />

        {/* Internship card — full width prominent */}
        <div
          className="mt-16 rounded-2xl p-7 relative overflow-hidden card-lift"
          style={{
            background: "var(--card)",
            border: "1px solid var(--accent)",
          }}
        >
          {/* Ghost bg text */}
          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "7rem",
              fontWeight: 700,
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1px var(--border-light)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              opacity: 0.4,
            }}
          >
            01
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6 relative">
            <div className="flex-1">
              {/* Live badge */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: "var(--accent-dim)", border: "1px solid var(--accent)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ADE80" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--accent)", textTransform: "uppercase" }}>
                    Currently Working
                  </span>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--fg-muted)", letterSpacing: "0.06em" }}>
                  {internship.duration}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.3rem",
                  lineHeight: 1.2,
                }}
              >
                {internship.title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                {internship.org}
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: "1rem" }}>
                {internship.period}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.75, color: "var(--fg-muted)", maxWidth: "56ch" }}>
                {internship.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {internship.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.06em",
                      background: "var(--accent-dim)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Offer letter link */}
            <a
              href={offerLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 self-start flex-shrink-0"
              style={{
                fontFamily: "var(--font-sans)",
                background: "var(--bg)",
                color: "var(--fg-muted)",
                borderColor: "var(--border-light)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.color = "var(--fg-muted)";
              }}
            >
              <PdfIcon /> View Offer Letter
            </a>
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="mt-16">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              marginBottom: "1.5rem",
            }}
          >
            // Professional Affiliations
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {affiliations.map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 flex flex-col gap-4 card-lift"
                style={{
                  background: "var(--card)",
                  border: `1px solid ${item.current ? "var(--accent)" : "var(--border-light)"}`,
                }}
              >
                {item.current && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{ background: "var(--accent-dim)", border: "1px solid var(--accent)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--accent)" }}>
                      ACTIVE
                    </span>
                  </div>
                )}

                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "transparent",
                    WebkitTextStroke: "1px var(--border-light)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    userSelect: "none",
                  }}
                >
                  0{i + 1}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "var(--fg)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)" }}>
                    {item.org}
                  </p>
                </div>

                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", lineHeight: 1.7, color: "var(--fg-muted)", flex: 1 }}>
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.06em",
                        background: "var(--bg2)",
                        color: "var(--fg-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PdfIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="16" y2="17"/>
  </svg>
);
