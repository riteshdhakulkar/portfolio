import { useEffect, useState } from "react";
import profileImg from "../imports/profile.png";

const titles = ["Full Stack Developer", "MERN Stack Developer", "Backend Developer", "Problem Solver"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = titles[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Large decorative number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(12rem, 22vw, 22rem)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px var(--border-light)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          userSelect: "none",
          opacity: 0.5,
        }}
      >
        RD
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — 7 cols */}
          <div className="lg:col-span-7">
            {/* Status chip */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 fade-up"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border-light)",
                animationDelay: "0.05s",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ADE80" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                }}
              >
                Open to internships & opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="fade-up"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                animationDelay: "0.12s",
                marginBottom: "0.15em",
              }}
            >
              Hello, I'm
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Ritesh</em>
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--accent)",
                }}
              >
                Dhakulkar
              </span>
            </h1>

            {/* Typing */}
            <div
              className="fade-up flex items-center gap-2 mt-5 mb-7"
              style={{ animationDelay: "0.2s" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--fg-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                &gt;_{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--fg)",
                  letterSpacing: "0.02em",
                }}
              >
                {displayed}
              </span>
              <span
                className="cursor-blink"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1rem",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                ▌
              </span>
            </div>

            {/* Description */}
            <p
              className="fade-up mb-10 max-w-lg"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--fg-muted)",
                animationDelay: "0.28s",
              }}
            >
              Aspiring Full-Stack Developer passionate about creating scalable web
              applications, intuitive user experiences, and efficient backend systems
              using the MERN stack.
            </p>

            {/* CTAs */}
            <div className="fade-up flex flex-wrap gap-3 mb-10" style={{ animationDelay: "0.36s" }}>
              <a
                href="/resume.pdf"
                download="Ritesh_Dhakulkar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >
                <DownIcon /> Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-200"
                style={{
                  color: "var(--fg)",
                  borderColor: "var(--border-light)",
                  background: "var(--card)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                View Projects <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-200"
                style={{
                  color: "var(--fg-muted)",
                  borderColor: "var(--border-light)",
                  background: "transparent",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--fg-muted)";
                  e.currentTarget.style.borderColor = "var(--border-light)";
                }}
              >
                Contact Me
              </a>
            </div>

            {/* Social row */}
            <div className="fade-up flex items-center gap-6" style={{ animationDelay: "0.44s" }}>
              <SocialLink href="https://github.com/riteshdhakulkar" label="GitHub">
                <GHIcon /> GitHub
              </SocialLink>
              <div style={{ width: 1, height: 14, background: "var(--border-light)" }} />
              <SocialLink href="https://linkedin.com/in/riteshdhakulkar" label="LinkedIn">
                <LIIcon /> LinkedIn
              </SocialLink>
              <div style={{ width: 1, height: 14, background: "var(--border-light)" }} />
              <SocialLink href="mailto:riteshdhakulkar1905@gmail.com" label="Email">
                <MailIcon /> Email
              </SocialLink>
            </div>
          </div>

          {/* Right — profile — 5 cols */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Corner marks */}
              <CornerMark pos="top-0 left-0" />
              <CornerMark pos="top-0 right-0" rotate />
              <CornerMark pos="bottom-0 left-0" rotateY />
              <CornerMark pos="bottom-0 right-0" both />

              <div
                className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 m-4 rounded-2xl overflow-hidden"
                style={{
                  background: "var(--card2)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Ritesh Dhakulkar"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating tech badge */}
              <div
                className="absolute -bottom-2 -left-4 px-3 py-2 rounded-xl"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--fg-muted)", letterSpacing: "0.08em" }}>
                  STACK
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600, color: "var(--fg)" }}>
                  MERN · Java · Spring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.4 }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--fg-muted)" }}>
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--fg-muted), transparent)" }}
        />
      </div>
    </section>
  );
}

function CornerMark({ pos, rotate, rotateY, both }: { pos: string; rotate?: boolean; rotateY?: boolean; both?: boolean }) {
  const t = rotate ? "rotate(90deg)" : rotateY ? "scaleY(-1)" : both ? "rotate(180deg)" : "none";
  return (
    <div
      className={`absolute ${pos} w-5 h-5`}
      style={{ transform: t }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M0 10 L0 0 L10 0" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-1.5 transition-colors duration-150"
      style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--fg-muted)", textDecoration: "none" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
    >
      {children}
    </a>
  );
}

const DownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const GHIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LIIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
