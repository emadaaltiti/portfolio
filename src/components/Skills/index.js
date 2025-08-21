import React from "react";
import { profile } from "../../data";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const skillIcons = {
  "React.js": <FaReact />,
  "JavaScript": <FaJsSquare />,
  "CSS3": <FaCss3Alt />,
  "HTML5": <FaHtml5 />
  // Add more mapping if needed
};

export const Skills = () => {
  return (
    <section className="skills container" id="skills">
      <motion.h2 className="fade-up">Skills & Tech Stack</motion.h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem'}}>
       {profile.skills.map((skill, idx) => (
  <motion.div
    key={idx}
    className="skill-badge"
    initial={{ width: 0 }}
    whileInView={{ width: '150px' }} // adjust length
    transition={{ duration: 1, delay: idx*0.2 }}
    style={{
      display:'flex', alignItems:'center', gap:'0.5rem', overflow:'hidden'
    }}
  >
    <span style={{marginRight:'0.3rem'}}>{skillIcons[skill] || null}</span>
    {skill}
  </motion.div>
))}
      </div>
    </section>
  );
};
