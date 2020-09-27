import React from "react";
import "./App.css";
import "./css/Brutus.css";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="contactInfo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kevin-brutus/"
          >
            LinkedIn
          </a>
        </div>
        <div className="contactInfo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KevinBrutus530"
          >
            GitHub
          </a>
        </div>
        <div className="projects">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://afro-link.netlify.app/"
          >
            Afro Link
          </a>
        </div>
        <div className="projects">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tastebuds.netlify.app/"
          >
            Tastebuds
          </a>
        </div>
        <div className="projects">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/"
          >
            FingrSmash
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
