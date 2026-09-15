import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [light, setLight] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const toggleTheme = () => {
    setLight((v) => {
      document.documentElement.classList.toggle("light", !v);
      return !v;
    });
  };

  // Scroll progress + back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
      setShowTop(el.scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Visitor counter
  useEffect(() => {
    const count = parseInt(localStorage.getItem("rd_visits") || "0", 10) + 1;
    localStorage.setItem("rd_visits", String(count));
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    if (!loaded) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollPct}%`,
          height: "2px",
          background: "var(--accent)",
          zIndex: 9999,
          transition: "width 0.1s linear",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          background: "var(--bg)",
          minHeight: "100vh",
        }}
      >
        <Navbar light={light} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "50%",
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(232,146,74,0.4)",
          zIndex: 998,
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
