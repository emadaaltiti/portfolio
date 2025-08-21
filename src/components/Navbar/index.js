import React from "react";
import { profile } from "../../data";

export const Navbar = ({ onToggleTheme }) => {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <nav className="navbar container">
      <div className="logo">{profile.name}</div>
      <ul>
        <li onClick={() => handleClick("about")}>About</li>
        <li onClick={() => handleClick("experience")}>Experience</li>
        <li onClick={() => handleClick("skills")}>Skills</li>
        <li onClick={() => handleClick("achievements")}>Achievements</li>
        <li onClick={() => handleClick("contact")}>Contact</li>

      </ul>
      <button onClick={onToggleTheme}>Theme</button>
    </nav>
  );
};
