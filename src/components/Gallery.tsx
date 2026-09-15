import { useState } from "react";
import { SectionHead } from "./About";

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const ChevronUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
);
const ExpandIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
  </svg>
);

// ════════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW PHOTO — do these 3 steps every time:
//
//  STEP 1 — Upload your image in Figma Make, then in the terminal run:
//           cp src/imports/image-XX.png src/imports/gallery-9.png
//           (replace XX with the actual uploaded file number,
//            and 9 with the next gallery number)
//
//  STEP 2 — Add a new import line below (follow the same pattern):
//           import gallery9 from "../imports/gallery-9.png";
//
//  STEP 3 — Add a new entry at the very TOP of the `photos` array:
//           {
//             src: gallery9,
//             caption: "Your photo title here",        // shown on hover & lightbox
//             event: "Your Role · Organization · PCE", // shown below caption
//             year: "2025",                            // year of the event
//             wide: true,                              // OPTIONAL: add for landscape/group photos
//           },
//
//  That's it! Newest photo goes first, older ones shift down automatically.
// ════════════════════════════════════════════════════════════════

import gallery1 from "../imports/gallery-1.png";
import gallery2 from "../imports/gallery-2.png";
import gallery3 from "../imports/gallery-3.png";
import gallery4 from "../imports/gallery-4.png";
import gallery5 from "../imports/gallery-5.png";
import gallery6 from "../imports/gallery-6.png";
import gallery7 from "../imports/gallery-7.png";
import gallery8 from "../imports/gallery-8.png";
// STEP 2 goes here ↓ (add your next import below this line)
// import gallery9 from "../imports/gallery-9.png";

type Photo = {
  src: string;
  caption: string;
  event: string;
  year: string;
  wide?: boolean; // set true for landscape shots to span wider in grid
};

const photos: Photo[] = [
  // STEP 3 goes here ↓ (paste your new photo entry above all others)
  // {
  //   src: gallery9,
  //   caption: "Your photo title here",
  //   event: "Your Role · Organization · PCE",
  //   year: "2025",
  //   wide: true,   // optional — use for wide/group photos
  // },
  {
    src: gallery8,
    caption: "Appointed Secretary — PCE ACM Student Chapter",
    event: "Secretary · ACM Student Chapter · PCE",
    year: "2025",
  },
  {
    src: gallery7,
    caption: "Addressing the Gathering — Literary Club 2025–26",
    event: "Joint Secretary · Literary Club of PCE · Upcoming Event Address",
    year: "2025",
  },
  {
    src: gallery6,
    caption: "Joint Secretary — Literary Club of PCE 2025–26",
    event: "Joint Secretary · Literary Club · PCE",
    year: "2025",
  },
  {
    src: gallery5,
    caption: "Featured on ACM India Website — Highest Activities",
    event: "PCE ACM Student Chapter · National Recognition · ACM India",
    year: "2025",
    wide: true,
  },
  {
    src: gallery4,
    caption: "Membership Chair — PCE ACM Student Chapter 2025–26",
    event: "Membership Chair · ACM Student Chapter · PCE",
    year: "2025",
  },
  {
    src: gallery3,
    caption: "Installation Ceremony — Sakal Newspaper Coverage",
    event: "Logistics Committee Coordinator · Sakal YIN MahaClub · PCE",
    year: "2025",
    wide: true,
  },
  {
    src: gallery2,
    caption: "Receiving Recognition — YIN MahaClub 2024–25",
    event: "Logistics Committee Coordinator · Sakal YIN · PCE",
    year: "2025",
  },
  // TODO: Add newer photos above this one as you upload them
  {
    src: gallery1,
    caption: "SCOOP Inauguration — Sthapnam 2024–25",
    event: "Event Manager · SCOOP PCE · Departmental Forum",
    year: "2024",
    wide: true,
  },
];

const INITIAL_COUNT = 4;

export default function Gallery() {
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? photos : photos.slice(0, INITIAL_COUNT);

  return (
    <section
      id="gallery"
      className="py-28"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="08" title="Beyond the Code" />
        <p
          className="mt-4 max-w-lg"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "var(--fg-muted)",
          }}
        >
          Moments from events, leadership roles, and milestones — the human side of the
          developer.
        </p>

        {/* Masonry grid */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visible.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer card-lift"
              style={{ border: "1px solid var(--border-light)" }}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full object-cover block"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {photo.year}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.35,
                    marginBottom: "0.2rem",
                  }}
                >
                  {photo.caption}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.4,
                  }}
                >
                  {photo.event}
                </p>

                {/* Expand icon */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                >
                  <ExpandIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* See More / Show Less */}
        {photos.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "var(--font-sans)",
                background: "var(--card)",
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
              {showAll ? (
                <><ChevronUp /> Show Less</>
              ) : (
                <><ChevronDown /> See More ({photos.length - INITIAL_COUNT} more)</>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border-light)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full block"
            />
            <div
              className="px-5 py-4 flex items-start justify-between gap-4"
              style={{ background: "var(--card)" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "var(--fg)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {lightbox.caption}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--fg-muted)",
                  }}
                >
                  {lightbox.event} · {lightbox.year}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--bg2)", color: "var(--fg-muted)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
