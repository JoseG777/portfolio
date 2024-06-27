import React from "react";
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>

      <div className="skills-grid">
        <div className="skills-section">
          <h2>Languages</h2>
          <ul>
            <li>C++</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Frameworks</h2>
          <ul>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Flask</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Tools</h2>
          <ul>
            <li>Git/GitHub</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>VS Code</li>
            <li>Google Cloud</li>
            <li>Google Lighthouse</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
