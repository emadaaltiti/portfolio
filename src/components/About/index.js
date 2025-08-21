import React from "react";
import { profile } from "../../data";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="about container" id="about">
      <motion.h2 className="fade-up">About Me</motion.h2>
      <motion.p className="fade-up" style={{animationDelay:"0.2s"}}>
        {profile.summary}
      </motion.p>
    </section>
  );
};
