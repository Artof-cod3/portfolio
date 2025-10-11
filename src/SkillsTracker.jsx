import React from "react";
import "./Portfolio.css";

export default function SkillsTracker() {
  const skills = [
    { name: "Networking", level: 21 },
    { name: "Linux Systems", level: 0 },
    { name: "Ethical Hacking", level: 0 },
    { name: "Cloud Security", level: 0 },
    { name: "SIEM & Threat Analysis", level: 0 },
    { name: "Incident Response", level: 0 },
    { name: "Scripting & Automation", level: 0 },
  ];

  return (
    <div className="skills-section">
      <h3>🧠 Cybersecurity Learning Tracker — Phase 1</h3>
      <p className="phase-desc">
        Starting from the foundation. Tracking skills as I progress through
        training, labs, and certifications.
      </p>

      <div className="skill-bars">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="percent">{skill.level}%</span>
          </div>
        ))}
      </div>

      <div className="goal-message">
        <p>🎯 Goal: Reach 100% on all core skills by end of 2025.</p>
      </div>
    </div>
  );
}
