import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../../assets/profile.jpg"; // Your profile picture

export const Hero = () => {
  return (
    <section
      className="hero container"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient blob behind */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5, rotate: 0 }}
        animate={{ scale: [0.8, 1.1, 0.8], rotate: 360, opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #6366f1, #8b5cf6)",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: -2,
        }}
      />

      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid rgba(255,255,255,0.2)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          marginBottom: "1.5rem",
        }}
      >
        <img
          src={ProfilePic}
          alt="Emad Altiti"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "0.5rem",
        }}
      >
        EMAD ALTITI
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          color: "#4b5563",
          marginBottom: "2rem",
        }}
      >
        Senior Frontend Developer | React.js Expert | AI & Cloud Enthusiast
      </motion.h2>

      {/* Call to action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
      >
        <a
          href="#contact"
          style={{
            padding: "0.8rem 1.6rem",
            borderRadius: "12px",
            background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
            color: "#fff",
            fontWeight: "600",
            boxShadow: "0 8px 20px rgba(99,102,241,0.4)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
        >
          Contact Me
        </a>
        <a
          href="#experience"
          style={{
            padding: "0.8rem 1.6rem",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            color: "#6366f1",
            fontWeight: "600",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
        >
          My Experience
        </a>
      </motion.div>
    </section>
  );
};
