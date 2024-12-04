import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ErrorStarter.css"; // Styles for the component

// Import the error page image correctly
import afterImage from '../../assets/error_page.jpg';
import asset3 from "../../assets/logo_dark_QmPdj9K.svg";
function ErrorFixStarter() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/error-fix");
  };

  return (
    <div className="error-fix-starter">
     <div className="image-containers">
  <img src={asset3} alt="Description" />
</div>
      <h1>Welcome to the Error Fix Challenge</h1>
      <p>Test your debugging skills and fix the errors to unlock the final page!</p>
      

      <div className="challenge-details">
        <h3>Challenge Instructions</h3>
        <ol>
          <li>Uncomment lines 5 and 17 in the home page to load the project with errors</li>
          <li>Fix approximately 10 errors throughout the project</li>
          <li>Each error fixed is worth 3 points</li>
          <li>Successfully loading the final page awards an additional 10 points</li>
          <li>Total possible points: 40</li>
        </ol>
      </div>

      <button 
        onClick={handleNavigate} 
        className="navigate-button"
      >
        Start Error Fixing Challenge
      </button>
            {/* Preview of the final page image */}
            <div className="final-page-preview">
        <h2>Final Page Preview</h2>
        <img 
          src={afterImage} 
          alt="Final Page After Fixing Errors" 
          className="preview-image"
        />
      </div>
    </div>
  );
}

export default ErrorFixStarter;