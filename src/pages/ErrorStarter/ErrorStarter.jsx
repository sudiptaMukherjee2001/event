import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ErrorStarter.css"; // Add styles if needed

function ErrorFixStarter() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/error-fix");
  };

  return (
    <div className="error-fix-starter">
      <h1>Welcome to the Error Fix Starter</h1>
      <p>Get ready to tackle challenges and fix the errors!</p>
      <button onClick={handleNavigate} className="navigate-button">
        Go to Error Fix
      </button>
    </div>
  );
}

export default ErrorFixStarter;
