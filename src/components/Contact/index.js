import React from "react";
import { profile } from "../../data";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <motion.h2 className="fade-up">Contact Me</motion.h2>
      <motion.p className="fade-up"><FaMapMarkerAlt /> {profile.location}</motion.p>
      <motion.p className="fade-up"><FaEnvelope /> {profile.email}</motion.p>
      <motion.p className="fade-up"><FaPhone /> {profile.phone}</motion.p>
      <motion.div className="fade-up" style={{display:'flex', justifyContent:'center', gap:'1rem', marginTop:'1rem'}}>
        {profile.socials.map((s, idx) => {
          let Icon;
          if(s.label.toLowerCase() === "linkedin") Icon = FaLinkedin;
          else if(s.label.toLowerCase() === "github") Icon = FaGithub;
          else Icon = FaTwitter;
          return (
            <a key={idx} href={s.url} target="_blank" rel="noreferrer">
              <Icon size={28} style={{color:'#6366f1'}}/>
            </a>
          )
        })}
      </motion.div>
    </section>
  );
};
