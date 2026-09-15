import { useState } from "react";
import { SectionHead } from "./About";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("riteshdhakulkar1905@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm border transition-all duration-150 mt-2"
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.78rem",
        background: copied ? "var(--accent-dim)" : "var(--card)",
        color: copied ? "var(--accent)" : "var(--fg-muted)",
        borderColor: copied ? "var(--accent)" : "var(--border-light)",
        cursor: "pointer",
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

const contactInfo = [
  { label: "Email", value: "riteshdhakulkar1905@gmail.com", href: "mailto:riteshdhakulkar1905@gmail.com", iconType: "mail" as const },
  { label: "Phone", value: "+91 8552035048", href: "tel:+918552035048", iconType: "phone" as const },
  { label: "LinkedIn", value: "linkedin.com/in/riteshdhakulkar", href: "https://linkedin.com/in/riteshdhakul", iconType: "li" as const },
  { label: "GitHub", value: "github.com/riteshdhakulkar", href: "https://github.com/riteshdhakulkar", iconType: "gh" as const },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_nqpjxmi",
          template_id: "template_n8cugsi",
          user_id: "o3nPOhz1ZhykbARgc",
          template_params: { from_name: form.name, from_email: form.email, message: form.message },
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="09" title="Get In Touch" />
        <p
          className="mt-4 max-w-lg"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--fg-muted)" }}
        >
          Interested in collaborating, projects, or opportunities? Feel free to connect.
        </p>
        <CopyEmailButton />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info — 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border group card-lift"
                style={{ background: "var(--card)", borderColor: "var(--border-light)", textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                >
                  {item.iconType === "mail" && <MailIcon />}
                  {item.iconType === "phone" && <PhoneIcon />}
                  {item.iconType === "li" && <LIIcon />}
                  {item.iconType === "gh" && <GHIcon />}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "0.15rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 500, color: "var(--fg)" }}>
                    {item.value}
                  </p>
                </div>
                <div className="ml-auto" style={{ color: "var(--fg-dim)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Form — 7 cols */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 flex flex-col gap-4 p-7 rounded-2xl border"
            style={{ background: "var(--card)", borderColor: "var(--border-light)" }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "0.5rem" }}>
              // quick_message.send()
            </p>

            <div className="grid grid-cols-2 gap-4">
              <InputField label="Name" type="text" required placeholder="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <InputField label="Email" type="email" required placeholder="your@email.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <TextareaField label="Message" placeholder="Your message..." value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                fontFamily: "var(--font-sans)",
                background: status === "sent" ? "#059669" : "var(--accent)",
                color: "#fff",
                opacity: status === "sending" ? 0.75 : 1,
                letterSpacing: "0.02em",
              }}
            >
              {status === "idle" && <><SendIcon /> Send Message</>}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent ✓"}
              {status === "error" && <><SendIcon /> Retry</>}
            </button>

            {status === "error" && (
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#F87171", textAlign: "center" }}>
                Failed to send. Please email directly at riteshdhakulkar1905@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, type, required, placeholder, value, onChange }: { label: string; type: string; required?: boolean; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3.5 py-2.5 rounded-xl text-sm outline-none border transition-colors"
        style={{
          fontFamily: "var(--font-sans)",
          background: "var(--bg)",
          color: "var(--fg)",
          borderColor: "var(--border)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
}

function TextareaField({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{label}</label>
      <textarea
        required
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3.5 py-2.5 rounded-xl text-sm outline-none border transition-colors resize-none"
        style={{
          fontFamily: "var(--font-sans)",
          background: "var(--bg)",
          color: "var(--fg)",
          borderColor: "var(--border)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
}

const CopyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.25-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const LIIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const GHIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
