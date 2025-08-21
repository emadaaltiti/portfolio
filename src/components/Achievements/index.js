import React from "react";
import { profile } from "../../data";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export const Achievements = () => {
  return (
    <section className="achievements container" id="achievements" style={{ padding: "4rem 0" }}>
      <motion.h2
        className="fade-up"
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "2rem",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Achievements & Certifications
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
        {profile.achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            className="ach-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "1.2rem 1.5rem",
              borderLeft: "5px solid #6366f1",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            {/* Image or download icon if exists */}
            {ach.logo ? (
              <motion.div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  backgroundColor: "#f0f0f0"
                }}
              >
                {/* Image */}
                <motion.img
                  src={ach.logo}
                  alt={ach.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                />

                {/* Download Icon */}
                <motion.a
                  href={ach.logo}
                  download={ach.title}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    color: "#6366f1",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    fontSize: "1.2rem",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <FaDownload />
                </motion.a>
              </motion.div>
            ) : (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  backgroundColor: "#e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9ca3af",
                  fontSize: "0.8rem"
                }}
              >
                N/A
              </div>
            )}

            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{ach.title}</h3>
              {ach.date && <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>{ach.date}</span>}
              <p style={{ marginTop: "0.5rem", color: "#374151" }}>{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
