import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to The Great CSScape</h2>
      <p className="home-description">
        Embark on a journey to explore the beauty of CSS and design!
      </p>
      <section className="home-rules">
        <h3 className="home-rules-title">Round 2 Rules</h3>
        <div className="home-rule-box">
          <div className="home-rule-boxed">
            <p className="home-rule">
              <span className="home-rule-highlight">/*****/</span>&lt;code&gt;
              <span className="home-rule-highlight"> /*****/</span>
              <code> Code within this block should not be changed.</code>
            </p>
          </div>
          <div className="home-rule-boxed">
            <p className="home-rule">
              <span className="home-rule-highlight">/*****/</span>&lt;code&gt;
              <span className="home-rule-highlight"> /*****/</span>
              <code> Code within this block should not be changed.</code>
            </p>
          </div>
          <div className="home-rule-boxed">
            <p className="home-rule">
              Any violation of the above rules will result in disqualification from the task.
            </p>
          </div>
        </div>
      </section>
      <h3 className="home-action-title">Click on any button below to get started</h3>
      <div className="home-buttons">
        <button onClick={() => navigate('/style-starter')} className="home-button">
          Styling 
        </button>
        <button onClick={() => navigate('/error-fix-starter')} className="home-button">
          Fix Error
        </button>
        <button onClick={() => navigate('/backend-starter')} className="home-button">
          Backend Implementation
        </button>
      </div>
    </div>
  );
};

export default Home;
