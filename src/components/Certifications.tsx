import { useState } from "react";
import { SectionHead } from "./About";
import offerLetter from "../imports/offerletter.pdf";

// ════════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW CERTIFICATE — 3 steps:
//
//  STEP 1 — Upload your certificate image in Figma Make, then in terminal:
//           cp src/imports/image-XX.png src/imports/cert-yourname.png
//
//  STEP 2 — Add an import line below (follow the same pattern):
//           import certYourName from "../imports/cert-yourname.png";
//
//  STEP 3 — Add a new entry at the TOP of the `certs` array:
//           {
//             id: 8,                          // next unused number
//             title: "Certificate Title",
//             issuer: "Issuing Organization",
//             date: "Mon YYYY",
//             color: "#1C0A00",               // dark bg color for thumbnail
//             accent: "#FB923C",              // highlight color
//             image: certYourName,            // your imported image
//           },
//
//  For a PDF (like offer letter), use `pdf: yourPdf` instead of `image`.
//  For a cert with no image yet, use `noImage: true` temporarily.
// ════════════════════════════════════════════════════════════════

import certJavaSE from "../imports/cert-javase.png";
import certJavaEE from "../imports/cert-javaee.png";
import certSpringBoot from "../imports/cert-springboot.png";
import certHtmlCssReact from "../imports/cert-htmlcssreact.png";
// STEP 2 goes here ↓
// import certYourName from "../imports/cert-yourname.png";

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  color: string;
  accent: string;
  image?: string;
  pdf?: string;
  special?: boolean;
  noImage?: boolean;
};

const certs: Cert[] = [
  // STEP 3 goes here ↓ (paste your new certificate entry above all others)
  // {
  //   id: 8,
  //   title: "Certificate Title",
  //   issuer: "Issuing Organization",
  //   date: "Mon YYYY",
  //   color: "#1C0A00",
  //   accent: "#FB923C",
  //   image: certYourName,
  // },
  {
    id: 1,
    title: "Java SE – Core Java Programming",
    issuer: "Aashirwad Coaching Classes",
    date: "Jul 2025",
    color: "#1C0A00",
    accent: "#FB923C",
    image: certJavaSE,
  },
  {
    id: 2,
    title: "Java EE – Web & Enterprise Application Development",
    issuer: "Aashirwad Coaching Classes",
    date: "Nov 2025",
    color: "#0F1C2E",
    accent: "#38BDF8",
    image: certJavaEE,
  },
  {
    id: 3,
    title: "Spring Framework & Spring Boot",
    issuer: "Aashirwad Coaching Classes",
    date: "Feb 2026",
    color: "#052E16",
    accent: "#34D399",
    image: certSpringBoot,
  },
  {
    id: 4,
    title: "Front-End Development – HTML, CSS, JS & React",
    issuer: "Aashirwad Coaching Classes",
    date: "Sep 2026",
    color: "#2E1065",
    accent: "#C084FC",
    image: certHtmlCssReact,
  },
  {
    id: 5,
    title: "Internship Offer Letter",
    issuer: "Industry Internship",
    date: "2026",
    color: "#1C1917",
    accent: "#E8924A",
    pdf: offerLetter,
    special: true,
  },
  {
    // TODO: Mock Parliament certificate — upload image to src/imports/ and add:
    // import mockParliament from "../imports/mock-parliament.png";
    // Then add `image: mockParliament` to this object and remove `noImage: true`
    id: 6,
    title: "Certificate of Appreciation",
    issuer: "National Level Mock Parliament — Volunteering",
    date: "Coming soon",
    color: "#1C1917",
    accent: "#F59E0B",
    noImage: true,
    special: true,
  },
];

export default function Certifications() {
  const [modal, setModal] = useState<null | Cert>(null);

  return (
    <section id="certifications" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="05" title="Certifications & Achievements" />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certs.map((cert) => (
            <button
              key={cert.id}
              onClick={() => !cert.noImage && setModal(cert)}
              className="group text-left rounded-2xl overflow-hidden border card-lift transition-all duration-200"
              style={{
                background: "var(--card)",
                borderColor: cert.special ? "var(--accent)" : "var(--border-light)",
                cursor: cert.noImage ? "default" : "pointer",
              }}
            >
              {/* Thumbnail */}
              <div
                className="w-full aspect-[3/4] relative overflow-hidden"
                style={{ background: cert.color }}
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : cert.pdf ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                    <PdfIcon accent={cert.accent} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: cert.accent, opacity: 0.7 }}>
                      Offer Letter
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                    <CertIcon accent={cert.accent} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: cert.accent, opacity: 0.6 }}>
                      Uploading soon
                    </span>
                  </div>
                )}

                {cert.special && (
                  <div
                    className="absolute top-2 left-2 px-1.5 py-0.5 rounded"
                    style={{ background: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.1em", color: "#fff" }}
                  >
                    ★
                  </div>
                )}

                {!cert.noImage && (
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", color: "#fff", textTransform: "uppercase" }}>
                      View
                    </span>
                  </div>
                )}
              </div>

              <div className="p-3">
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--fg)", lineHeight: 1.35 }}>
                  {cert.title}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--fg-muted)", marginTop: "0.2rem", lineHeight: 1.4 }}>
                  {cert.issuer}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: cert.accent, marginTop: "0.35rem", opacity: 0.8 }}>
                  {cert.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid var(--border-light)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontStyle: "italic", color: "var(--fg)", marginBottom: "0.15rem" }}>
                  {modal.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--fg-muted)" }}>
                  {modal.issuer} · {modal.date}
                </p>
              </div>
              <button
                onClick={() => setModal(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                style={{ background: "var(--bg2)", color: "var(--fg-muted)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {modal.image && (
              <img
                src={modal.image}
                alt={modal.title}
                className="w-full"
                style={{ display: "block" }}
              />
            )}

            {modal.pdf && (
              <div
                className="w-full aspect-video flex flex-col items-center justify-center gap-4"
                style={{ background: modal.color }}
              >
                <PdfIcon accent={modal.accent} size={48} />
                <a
                  href={modal.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ background: modal.accent, color: "#fff", fontFamily: "var(--font-sans)" }}
                >
                  Open PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function CertIcon({ accent, size = 28 }: { accent: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.6">
      <circle cx="12" cy="8" r="5"/>
      <path d="M8.56 14.85L7 22l5-3 5 3-1.56-7.16"/>
    </svg>
  );
}

function PdfIcon({ accent, size = 28 }: { accent: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="16" y2="17"/>
      <line x1="8" y1="9" x2="10" y2="9"/>
    </svg>
  );
}
