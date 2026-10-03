import { useState, useEffect } from "react";

import "./App.css";

import PageBackdrop from "./components/PageBackdrop";
import Sidebar from "./components/Sidebar";
import AboutPage from "./components/About";
import HeroContent from "./components/HeroContent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import HireMe from "./components/HireMe";
import { ChatGroq } from "./components/ChatGroq";
import Services from "./components/Services";
import Certificate from "./components/Certificate";
import Feedback from "./components/Feedback";

const THEME_STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
  } catch (error) {
    // Ignore storage access errors and fall back to the default theme.
  }

  return "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [chatOpen, setChatOpen] = useState(false);

  // central theme tokens (minimal set used across components/CSS)
  const THEMES = {
    dark: {
      bg: "#0b1220",
      bgCard: "#121c2e",
      bgNav: "#0e1729",
      accent: "#14B8A6",
      accentMid: "#2DD4BF",
      accentDim: "rgba(20,184,166,0.12)",
      text: "#E8F1F6",
      textMuted: "#7c8fa8",
      textSub: "#9DB2C7",
      border: "rgba(255,255,255,0.08)",
      borderAccent: "rgba(20,184,166,0.35)",
    },
    light: {
      bg: "#EEF4F7",
      bgCard: "#FFFFFF",
      bgNav: "#FFFFFF",
      accent: "#0D9488",
      accentMid: "#14B8A6",
      accentDim: "rgba(13,148,136,0.10)",
      text: "#0F2233",
      textMuted: "#64778a",
      textSub: "#4a5d70",
      border: "rgba(0,0,0,0.08)",
      borderAccent: "rgba(13,148,136,0.3)",
    },
  };

  // apply CSS variables globally so CSS files and var-based styles update
  useEffect(() => {
    const vars = THEMES[theme] || THEMES.dark;
    const root = document.documentElement;

    root.style.colorScheme = theme;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(`--${k}`, v));
    root.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // Ignore storage write failures.
    }
  }, [theme]);

  return (
    <>
     <div>
       {/* One continuous background for every section — see PageBackdrop */}
       <PageBackdrop theme={theme} accent={THEMES[theme].accent} />

       <Sidebar theme={theme} setTheme={setTheme} />

        <div className="main-content">
          <HeroContent theme={theme} />
          <AboutPage theme={theme} />
          <Projects theme={theme} />
          <Skills theme={theme} />
          <Services theme={theme} />
          <Certificate theme={theme} />
          <Feedback theme={theme} />
          <HireMe theme={theme} />
        </div>
      </div>

      {/* Floating AI Chat Button - Fixed at right-bottom for whole portfolio */}
      {!chatOpen && (
        <button
          className="chat-fab"
          onClick={() => setChatOpen(true)}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2dd4bf, #0d9488)",
            border: "2px solid rgba(45, 212, 191, 0.6)",
            color: "#fff",
            fontSize: 28,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(13, 148, 136, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            zIndex: 999,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.15)";
            e.target.style.boxShadow = "0 12px 32px rgba(13, 148, 136, 0.6), inset 0 1px 0 rgba(255,255,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 24px rgba(13, 148, 136, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)";
          }}
          aria-label="Open AI Chat"
        >
          ✨
        </button>
      )}

      {/* AI Chat Modal - Fixed positioning for whole portfolio */}
      {chatOpen && (
        <div className="chat-fab-shell">
          <ChatGroq theme={theme} onClose={() => setChatOpen(false)} />
        </div>
      )}
    </>
  );
}

export default App;