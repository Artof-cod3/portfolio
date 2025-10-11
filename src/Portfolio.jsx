import React from "react";
import "./Portfolio.css";
import SkillsTracker from "./SkillsTracker"; // ✅ moved here (top of file)

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <img
          src="https://img.freepik.com/free-vector/gaming-profile-picture-design_742173-15262.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Cyber Avatar"
          className="avatar"
        />
        <h1>Benedict Kirui</h1>
        <h2>Cybersecurity Enthusiast & Analyst</h2>
      </header>

      <section className="links">
        <a href="mailto:bndctkirui@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
        <a href="https://github.com/Artof-cod3" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/benedict-kirui-413540357/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </section>

      <section className="about">
        <h3>About Me</h3>
        <p>
          I’m passionate about cybersecurity — currently focusing on threat
          detection, ethical hacking, and cloud security. I build homelabs and
          work on projects that simulate real-world security environments.
        </p>
      </section>

      {/* ✅ Skills & Progress Chart Section */}
      <section id="skills" className="my-12">
        <SkillsTracker />
      </section>

      <footer>
        <p>© 2025 Benedict Kirui | Cybersecurity Portfolio</p>
      </footer>
    </div>
  );
}
