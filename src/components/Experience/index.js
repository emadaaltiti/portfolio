import React from "react";
import { profile } from "../../data";
import { motion } from "framer-motion";
import KPMGLogo from "../../assets/kpmg.png";
import MasterworksLogo from "../../assets/masterworks.jpg";
import CGILogo from "../../assets/cgi.jpg";
import PCLogo from "../../assets/PC.jpg";

const logos = {
  "KPMG": KPMGLogo,
  "Masterworks, Riyadh, Saudi Arabia": MasterworksLogo,
  "CG Imagine + Invent, Amman, Jordan": CGILogo,
  "PcNetSoft, Amman, Jordan": PCLogo

  // Add others as needed
};

export const Experience = () => {
  return (
    <section className="experience container" id="experience" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <motion.h2
        className="fade-up"
        style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem", background: "linear-gradient(90deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        Experience
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {profile.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="exp-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "1.5rem",
              borderLeft: "5px solid #6366f1",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {logos[exp.company] && (
                <motion.img
                  src={logos[exp.company]}
                  alt={exp.company}
                  style={{ width: "60px", borderRadius: "8px" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>{exp.title}</h3>
                <span style={{ color: "#4b5563", fontSize: "0.95rem" }}>{exp.company} | {exp.period}</span>
              </div>
            </div>
            <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {exp.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ listStyleType: "disc", color: "#374151" }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
