import { useState } from "react";
import { SectionHead } from "./About";
import nexcartify1 from "../imports/image-2.png";
import nexcartify2 from "../imports/image-3.png";
import nexcartify3 from "../imports/image-4.png";
import nexcartify4 from "../imports/image-5.png";
import construction1 from "../imports/construction-1.png";
import skh1 from "../imports/skh-1.png";
import skh2 from "../imports/skh-2.png";
import skh3 from "../imports/skh-3.png";
import skh4 from "../imports/skh-4.png";

// ─── Desktop Screenshots (all current images are desktop only) ───────────────
const nexcartifyDesktop = [nexcartify1, nexcartify2, nexcartify3, nexcartify4];
const skhDesktop = [skh1, skh2, skh3, skh4];
const constructionDesktop = [construction1];

// TODO: RetailGenie AI — desktop screenshots
// Upload images to src/imports/, then import and fill this array:
// import retailgenieD1 from "../imports/retailgenie-desktop-1.png";
const retailgenieDesktop: string[] = [];

// TODO: Unnati Pharma — desktop screenshots
// Upload images to src/imports/, then import and fill this array:
// import unnatiD1 from "../imports/unnati-desktop-1.png";
const unnatiDesktop: string[] = [];

// ─── Mobile Screenshots (add separately — portrait 9:16 shots) ───────────────
// To add mobile screenshots for any project:
//   1. Upload portrait screenshots to src/imports/
//   2. Import them: import nexcartifyM1 from "../imports/nexcartify-mobile-1.png";
//   3. Fill the array below for that project

// TODO: NexCartify mobile screenshots
// import nexcartifyM1 from "../imports/nexcartify-mobile-1.png";
const nexcartifyMobile: string[] = [];

// TODO: RetailGenie AI mobile screenshots (this is a mobile app — priority!)
// import retailgenieM1 from "../imports/retailgenie-mobile-1.png";
const retailgenieMobile: string[] = [];

// TODO: Unnati Pharma mobile screenshots
// import unnatiM1 from "../imports/unnati-mobile-1.png";
const unnatiMobile: string[] = [];

// TODO: SKH Hospital mobile screenshots
// import skhM1 from "../imports/skh-mobile-1.png";
const skhMobile: string[] = [];

// TODO: Construction Admin mobile screenshots
// import constructionM1 from "../imports/construction-mobile-1.png";
const constructionMobile: string[] = [];

type Project = {
  id: number;
  name: string;
  shortName: string;
  desc: string;
  tech: string[];
  live?: string;
  github?: string;
  admin?: string;
  color: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "NexCartify",
    shortName: "NXC",
    desc: "Full-stack MERN E-Commerce platform — authentication, cart management, NexCartify admin dashboard, product management, order handling and responsive design.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://nex-cartify-e-commerce.vercel.app/",
    github: "https://github.com/riteshdhakulkar/NexCartify-ECommerce",
    admin: "https://nex-cartify-adminpanel.vercel.app/",
    color: "#312E81",
    accent: "#818CF8",
  },
  {
    id: 2,
    name: "RetailGenie AI",
    shortName: "RGA",
    desc: "Mobile-first AI-powered inventory management app for local retailers. Speak in English, Hindi or Hinglish — 'Sharma se 50 kilo chini aayi hai' — and Gemini AI converts it to structured inventory data. Features voice assistant, OCR bill scanning, and smart stock queries.",
    tech: ["React Native", "Expo", "Spring Boot", "MySQL", "Gemini AI", "REST API"],
    github: "https://github.com/riteshdhakulkar/RetailGenieAI",
    color: "#052e16",
    accent: "#4ade80",
  },
  {
    id: 3,
    name: "Unnati Pharma",
    shortName: "UPH",
    desc: "Pharmacy web application with customer-facing storefront, product catalogue, bulk inquiry system and global medicine export features.",
    tech: ["React.js", "Spring Boot", "JavaScript", "REST APIs"],
    live: "https://unnatipharmax.com/",
    github: "https://github.com/riteshdhakulkar/unnati_pharmacyUI",
    color: "#0C4A6E",
    accent: "#38BDF8",
  },
  {
    id: 4,
    name: "Shri Krishna Hrudayalaya",
    shortName: "SKH",
    desc: "Full-stack hospital website for Shri Krishna Hrudayalaya & Critical Care Centre, Nagpur — specialties listing, doctor profiles, health checkup packages, appointment booking, contact with map integration, and an admin dashboard.",
    tech: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
    live: "https://shrikrishnahrudayalaya.com/",
    github: "https://github.com/WebnovexItSolution/shreeKrishnaHospital",
    color: "#0F172A",
    accent: "#60A5FA",
  },
  {
    id: 7,
    name: "Construction Accounting",
    shortName: "CST",
    desc: "Full-stack construction site & accounts manager with role-based login (Admin / Supervisor / Staff), site management, expense tracking, and accounting workflows.",
    tech: ["React.js", "Spring Boot", "MySQL", "REST API"],
    live: "https://construction-acc.vercel.app/login",
    github: "https://github.com/riteshdhakulkar/Accounting-AdminPanel",
    color: "#1C1917",
    accent: "#F97316",
  },
];

const desktopMap: Record<number, string[]> = {
  1: nexcartifyDesktop,
  2: retailgenieDesktop,
  3: unnatiDesktop,
  4: skhDesktop,
  7: constructionDesktop,
};

const mobileMap: Record<number, string[]> = {
  1: nexcartifyMobile,
  2: retailgenieMobile,
  3: unnatiMobile,
  4: skhMobile,
  7: constructionMobile,
};

export default function Projects() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [slide, setSlide] = useState(0);
  const p = projects[active];
  const projectScreenshots = view === "desktop"
    ? (desktopMap[p.id] || [])
    : (mobileMap[p.id] || []);

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="04" title="Projects" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Selector — 4 cols */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {projects.map((proj, i) => (
              <button
                key={proj.id}
                onClick={() => { setActive(i); setSlide(0); setView("desktop"); }}
                className="flex-shrink-0 lg:flex-shrink text-left px-4 py-3.5 rounded-xl border transition-all duration-200"
                style={{
                  background: active === i ? "var(--card)" : "transparent",
                  borderColor: active === i ? "var(--accent)" : "var(--border)",
                  minWidth: "8rem",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      background: active === i ? proj.color : "var(--bg)",
                      color: active === i ? proj.accent : "var(--fg-muted)",
                      border: `1px solid ${active === i ? proj.accent + "44" : "var(--border)"}`,
                    }}
                  >
                    {proj.shortName}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.82rem",
                        fontWeight: active === i ? 600 : 400,
                        color: active === i ? "var(--fg)" : "var(--fg-muted)",
                        lineHeight: 1.2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {proj.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--fg-dim)", letterSpacing: "0.06em", marginTop: "0.1rem" }}>
                      {proj.tech[0]} · {proj.tech[1] || proj.tech[0]}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Showcase — 8 cols */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* View toggle */}
            <div className="flex items-center gap-2">
              {(["desktop", "mobile"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: view === v ? "var(--accent)" : "var(--card)",
                    color: view === v ? "#fff" : "var(--fg-muted)",
                    border: `1px solid ${view === v ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {v === "desktop" ? <DeskIcon /> : <PhoneIcon />} {v}
                </button>
              ))}
            </div>

            {/* Frame */}
            {view === "desktop" ? (
              <BrowserFrame project={p} screenshots={projectScreenshots} slide={slide} setSlide={setSlide} />
            ) : (
              <div className="flex justify-center">
                <PhoneFrame project={p} screenshots={projectScreenshots} slide={slide} setSlide={setSlide} />
              </div>
            )}

            {/* Info */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border-light)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.name}
                </h3>
                <span
                  className="px-2 py-0.5 rounded text-xs flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    background: p.color,
                    color: p.accent,
                    border: `1px solid ${p.accent}44`,
                  }}
                >
                  {p.shortName}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  color: "var(--fg-muted)",
                  marginBottom: "1rem",
                }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg border text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.04em",
                      background: "var(--bg)",
                      color: "var(--fg-muted)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.live && (
                  <ProjBtn href={p.live} primary accent={p.accent} bg={p.color}>
                    <ExtIcon /> Live Demo
                  </ProjBtn>
                )}
                {p.github && (
                  <ProjBtn href={p.github}>
                    <GHIcon /> GitHub
                  </ProjBtn>
                )}
                {p.admin && (
                  <ProjBtn href={p.admin}>
                    <AdminIcon /> Admin Panel
                  </ProjBtn>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({ project: p, screenshots, slide, setSlide }: { project: Project; screenshots: string[]; slide: number; setSlide: (n: number) => void }) {
  const hasScreenshots = screenshots.length > 0;
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--border-light)", background: "var(--card)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div
          className="flex-1 mx-3 px-3 py-0.5 rounded text-xs truncate"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            background: "var(--card)",
            color: "var(--fg-muted)",
            border: "1px solid var(--border)",
          }}
        >
          {p.live || "https://project.vercel.app"}
        </div>
      </div>

      {/* Viewport */}
      <div className="relative w-full aspect-video overflow-hidden" style={{ background: p.color }}>
        {hasScreenshots ? (
          <>
            <div className="relative w-full h-full">
              <img
                src={screenshots[slide]}
                alt={`${p.name} screenshot ${slide + 1}`}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
            </div>
            {/* Slide nav */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={() => setSlide((slide - 1 + screenshots.length) % screenshots.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button
                  onClick={() => setSlide((slide + 1) % screenshots.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className="w-1.5 h-1.5 rounded-full transition-all"
                      style={{ background: i === slide ? "#fff" : "rgba(255,255,255,0.4)" }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 700, fontStyle: "italic", color: p.accent, opacity: 0.3, lineHeight: 1, letterSpacing: "-0.04em" }}>{p.shortName}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", color: p.accent, opacity: 0.8 }}>{p.name}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: p.accent, opacity: 0.5 }}>SCREENSHOT COMING SOON</span>
          </div>
        )}
      </div>
    </div>
  );
}

function PhoneFrame({ project: p, screenshots, slide, setSlide }: { project: Project; screenshots: string[]; slide: number; setSlide: (n: number) => void }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-52 rounded-3xl overflow-hidden relative"
        style={{ border: `6px solid var(--border-light)`, background: p.color }}
      >
        <div
          className="px-4 py-1.5 flex justify-between"
          style={{ background: "rgba(0,0,0,0.3)", color: p.accent, fontFamily: "var(--font-mono)", fontSize: "0.55rem" }}
        >
          <span>9:41</span><span>●●●</span>
        </div>
        <div className="aspect-[9/16] overflow-hidden">
          {screenshots.length > 0 ? (
            <img src={screenshots[slide] || screenshots[0]} alt={p.name} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, fontStyle: "italic", color: p.accent, opacity: 0.35, lineHeight: 1 }}>{p.shortName}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.12em", textTransform: "uppercase", color: p.accent, opacity: 0.5, textAlign: "center" }}>
                Mobile screenshots{"\n"}coming soon
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Slide dots for mobile */}
      {screenshots.length > 1 && (
        <div className="flex gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ background: i === slide ? "var(--accent)" : "var(--border-light)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjBtn({ href, primary, accent, bg, children }: { href: string; primary?: boolean; accent?: string; bg?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm border font-medium transition-all duration-150"
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.8rem",
        background: primary ? bg || "var(--accent)" : "var(--bg)",
        color: primary ? accent || "#fff" : "var(--fg-muted)",
        borderColor: primary ? (accent || "var(--accent)") + "44" : "var(--border)",
      }}
    >
      {children}
    </a>
  );
}

const DeskIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const ExtIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const GHIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const AdminIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
