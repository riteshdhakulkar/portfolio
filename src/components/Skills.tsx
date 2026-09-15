import { SectionHead } from "./About";

const categories = [
  { name: "Frontend", skills: ["React.js", "JavaScript", "HTML5", "CSS3"], color: "#60A5FA" },
  { name: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Node Backend"], color: "#34D399" },
  { name: "Database", skills: ["MongoDB", "SQL", "MySQL"], color: "#FBBF24" },
  { name: "Programming", skills: ["Java", "Python", "C", "C++"], color: "#F87171" },
  { name: "Tools & Deploy", skills: ["Git", "GitHub", "Vercel", "Render"], color: "#A78BFA" },
];

const allSkills = categories.flatMap((c) => c.skills);
const marqueeSkills = [...allSkills, ...allSkills];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="02" title="Technical Skills" />
      </div>

      {/* Marquee strip */}
      <div
        className="overflow-hidden mt-14 py-4"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="marquee-inner flex gap-6 w-max">
          {marqueeSkills.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full whitespace-nowrap"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--fg-muted)",
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: "0.5rem" }}>◆</span>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl p-6 card-lift"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border-light)",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: cat.color }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: cat.color,
                  }}
                >
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 rounded-lg text-xs font-medium border cursor-default"
                    style={{
                      fontFamily: "var(--font-sans)",
                      background: "var(--bg2)",
                      color: "var(--fg)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
