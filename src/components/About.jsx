import React from "react";
import AboutMe from "./AboutMe";
import "./AboutPage.css";

/* small theme tokens (kept local for About page) */
const THEMES = {
  dark: {
    bg: "#0b1220",
    bgNav: "#070d19",
    bgCard: "#121c2e",
    accent: "#2dd4bf",
    text: "#e6eef8",
    textSub: "#cbd5e1",
    border: "rgba(255,255,255,0.04)",
    timeline: "rgba(45,212,191,0.25)",
  },
  light: {
    bg: "#F3F7FA",
    bgNav: "#EAF1F5",
    bgCard: "#FFFFFF",
    accent: "#0d9488",
    text: "#0f2233",
    textSub: "#4b5563",
    border: "rgba(0,0,0,0.06)",
    timeline: "rgba(13,148,136,0.12)",
  },
};

const experience = [
  {
    title: "INSA Cyber Talent Internship",
    time: "2025 – 2026",
    location: "Ethiopia",
    desc: "Selected for an intensive cybersecurity and software development program, building skills in algorithms, full-stack development, and real-world software engineering. Led development of a ride-sharing application as a capstone project.",
  },
  {
    title: "ISHUB Education Team",
    time: "2026",
    location: "Addis Ababa, Ethiopia",
    desc: "Contributed to technology education initiatives, supporting learning activities and helping students develop programming and AI skills.",
  }
];

const education = [
  {
    title: "Addis Ababa University",
    time: "2024 – Present",
    desc: "Bachelor of Information Science; studying computing, information systems, and technology.",
  },
  {
    title: "Kallamino Special High School",
    time: "09/2018 – 07/2024",
    desc: "Completed a specialized STEM-focused secondary education, developing a strong foundation in mathematics, science, analytical thinking, and problem-solving.",
  },
  {
    title: "freeCodeCamp",
    time: "Ongoing",
    desc: "Self-directed learning in web development, programming, and software engineering through hands-on coding exercises and projects.",
  },
  {
    title: "ISHUB AI Workshop",
    time: "2026",
    desc: "Explored large language models, retrieval-augmented generation (RAG), AI assistant development, and the limitations of AI systems through practical projects.",
  }
];
export default function AboutPage({ theme = "dark" }) {
  const t = THEMES[theme] || THEMES.dark;
  return (
    <div
        id="about"
      className="about-container"
      style={{
        background: "transparent",
        color: t.text,
        overflowX: "clip",
        width: "100%",
        // expose CSS vars for AboutPage.css to consume
        ["--accent"]: t.accent,
        ["--text"]: t.text,
        ["--text-sub"]: t.textSub,
        ["--border"]: t.border,
        ["--timeline"]: t.timeline,
      }}
    >

      {/* TOP: About Me (full width) */}
      <div className="about-top">
        <AboutMe theme={theme} />
      </div>

      {/* BOTTOM: two columns side-by-side */}
      <div
        className="about-grid"
        style={{
          background: t.bgCard,
          border: `1px solid ${t.border}`,
          borderRadius: "24px",
          padding: "28px",
          boxShadow:
            theme === "light"
              ? "0 20px 50px rgba(0,0,0,0.08)"
              : "0 20px 50px rgba(0,0,0,0.24)",
        }}
      >
        <section className="about-section">
          <h2>Experience</h2>
          <Timeline data={experience} />
        </section>

        <section className="about-section">
          <h2>Education</h2>
          <Timeline data={education} />
        </section>
      </div>
    </div>
  );
}

/* Timeline Component */
function Timeline({ data }) {
  return (
    <div className="timeline">
      {data.map((item, i) => (
        <div className="timeline-item" key={i}>
          <h4>{item.title}</h4>
          <small>
            {item.time} {item.location ? `| ${item.location}` : ""}
          </small>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

