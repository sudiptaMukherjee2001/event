import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.css";
import asset1 from "../../assets/rule_asset1.jpg";
import asset2 from "../../assets/rule_asset2.jpg";

function HomePage() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="main-heading">The Great CSScape</h1>
        <p className="sub-heading">
          Welcome to the ultimate CSS and code challenge! Sharpen your skills,
          follow the rules, and aim for the maximum points.
        </p>
      </header>

      <main className="homepage-content">
        <section className="rules-section">
          <h2 className="section-title">Rules</h2>
          <div className="rule-box">
            <h1 className="rule-description">
              If the code is enclosed like the above example, participants are
              not allowed to edit that part of the code.
            </h1>
            <img
              src={asset1}
              alt="Rule 1 Visual"
              className="rule-image large-image"
            />
          </div>
          <div className="rule-box">
            <h1 className="rule-description">
              If the code is enclosed like the above example, participants can
              add extra code but should not remove the existing code.
            </h1>
            <img
              src={asset2}
              alt="Rule 2 Visual"
              className="rule-image large-image"
            />
          </div>
        </section>

        <section className="instructions-section">
          <h2 className="section-title">Instructions</h2>
          <ol className="instructions-list">
            <li>
              Violation of the above rules leads to disqualification of that
              task.
            </li>
            <li>
              If you are less confident with error fixing, it is recommended to
              do it last.
            </li>
            <li>
              Before starting coding, go through the starter page of each
              task carefully.
            </li>
            <li>Your task is to earn maximum points by solving challenges.</li>
          </ol>
        </section>

        <section className="get-started-section">
          <h2 className="section-title">Get Started</h2>
          <div className="buttons-container">
            <button
              onClick={() => navigateTo("/error-fix-starter")}
              className="starter-button"
            >
              Error Fix
            </button>
            <button
              onClick={() => navigateTo("/style-starter")}
              className="starter-button"
            >
              Style
            </button>
            <button
              onClick={() => navigateTo("/another-starter")}
              className="starter-button"
            >
              Backend
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
