import React from "react";
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      
      <div className="project">
        <a href="https://devpost.com/software/pillpal-airu2d" target="_blank" rel="noopener noreferrer"><h2>PillPal</h2></a>
        <ul>
          <li><strong>About:</strong> [Add more details here]</li>
          <li>
            <h3> Tech Stack: MongoDB, Express.js, React Native, Node.js </h3>
            <ul>
              <li>Developed a track-winning app at SBUHacks for better medication management through AI-driven prescription analysis, leveraging Google Cloud technologies, catering especially to non-English speakers and the elderly.</li>
              <li>Implemented a Google Cloud Vision API-based image upload to decipher prescription labels, providing users with personalized medication guidance, dosage instructions, and safety warnings.</li>
              <li>Ensured efficient API communication using Node.js and Express.js for real-time access to medication information and user-specific recommendations.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <a href="https://yugioh-saver.web.app/" target="_blank" rel="noopener noreferrer"><h2>Virtual Card Saver</h2></a>
        <ul>
          <li><strong>About:</strong> [Add more details here]</li>
          <li>
            <h3> Tech Stack: MongoDB, Express.js, Vue.js, Node.js </h3>
            <ul>
              <li>Developed a virtual card saver application for Yu-Gi-Oh! enthusiasts, enabling secure management and sharing of card decks, with user authentication powered by Firebase.</li>
              <li>Implemented MongoDB for robust data management, designed schemas to efficiently handle extensive card and user data, and integrated a secure API for real-time retrieval and display of card images.</li>
              <li>Created and maintained RESTful API endpoints using Express.js to support complex user interactions like deck building and profile management.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <a href="https://codefest-97b85.web.app/" target="_blank" rel="noopener noreferrer"><h2>Travel Itinerary Generator</h2></a>
        <ul>
          <li><strong>About:</strong> [Add more details here]</li>
          <li>
            <h3> Tech Stack: Firebase, Express.js, React.js, Node.js </h3>
            <ul>
              <li>Developed a travel itinerary web app integrating Google Gemini AI and Amadeus API for personalized trip planning and flight estimates.</li>
              <li>Enhanced user experience by allowing vacation discovery, custom itinerary generation, and direct PDF saving to Firebase accounts.</li>
              <li>Secured API interactions through a dedicated backend service, implementing robust security measures to protect sensitive data and API keys, utilizing Express.js and Firebase for data management.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
