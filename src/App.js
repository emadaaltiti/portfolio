import React, { useEffect } from "react";
import { initTheme, toggleTheme } from "./utils/theme";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";

import "./style.css";

export default function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <>
      <Navbar onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container" style={{ textAlign: "center", fontSize: "0.9rem", color: "#6b7280" }}>
          © {new Date().getFullYear()} • Crafted with ❤️ using React, CSS & Framer Motion
        </div>
      </footer>
    </>
  );
}
