// src/components/errorFix/ErrorFix.jsx

import React, { useState, useEffect } from 'react';

const ErrorFix = () => {
  
  const [count, setCount] = useState("0");

   
  useEffect(() => {
    console.log("Component mounted");
  }, [count]);  

let message = "hI";
  return (
    <div>
      <h2>Error Fix Page</h2>
      <p>This page contains several intentional errors!</p>

      <div>
        <p>Current count is {count}</p>
      </div>

      <p>{message}</p>

      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
};

export default ErrorFix;

 
console.log("Total errors in the code: 5");
