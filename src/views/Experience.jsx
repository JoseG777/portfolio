import React from "react";
import '../styles/Projects.css';

function Experience() {
  return (
    <div className="projects-container">
      <h1>Experience</h1>
      
      <div className="project">
        <h2>Full-Stack Web Developer Intern</h2>
        <p className="company-duration"><strong>Company:</strong> MNC Development, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Feb 2024 - May 2024</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Designed and optimized a React-based front-end for an urban culture media site, integrating Firebase to streamline media uploads and management.</li>
              <li>Developed advanced search functionality using MongoDB, addressing Firestore’s query limitations by utilizing indexing features.</li>
              <li>Enhanced web application performance and accessibility by over 50%, using Google Lighthouse for diagnostics and improvements.</li>
              <li>Participated in Agile/Scrum development cycles, managed tasks using GitHub, and engaged in weekly sprints and deployments.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <h2>Lifeguard</h2>
        <p className="company-duration"><strong>Company:</strong> Lenox Hill Neighborhood House, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Dec 2022 - Present</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Vigilantly monitor pool activities to ensure the safety of patrons, addressing potential hazards and enforcing pool rules.</li>
              <li>Maintain cleanliness and order on the pool deck, ensuring a safe and welcoming environment.</li>
              <li>Routinely check and adjust chemical levels to adhere to health and safety standards.</li>
              <li>Actively engage with patrons to answer questions and resolve concerns, promoting a positive community atmosphere.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <h2>Lifeguard / Swim Instructor</h2>
        <p className="company-duration"><strong>Company:</strong> YMCA, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Dec 2021 - Sep 2023</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Conducted swim lessons for classes ranging from 8-12 individuals, spanning ages 3 to 80, emphasizing skill development, safety, and personal progress.</li>
              <li>Managed diverse swimming activities, maintaining high safety standards in a high-traffic pool environment.</li>
              <li>Performed hourly chemical balance checks to ensure pool health and safety compliance.</li>
              <li>Tracked progress and awarded certificates at mid-season and end-of-season to recognize milestones and achievements.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
