import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./DesignStarter.css"; // Add styles if needed

const DesignStarter = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/design");
  };

  return (
    <div className="design-starter">
      <h1>Output Page</h1>
      <p>Explore the design concepts and create something amazing!</p>
      <button onClick={handleNavigate} className="navigate-button">
        Go to Design
      </button>
    </div>
  );
};

export default DesignStarter;
