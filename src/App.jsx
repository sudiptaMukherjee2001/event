import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import StylingPartOne from './pages/DesignStarter/DesignStarter'; 
import ErrorFix from './pages/ErrorFix/ErrorFix'; 
import ErrorFixStarter from './pages/ErrorStarter/ErrorStarter';
import DesignPage from './pages/DesignPage/DesignPage'
import DesignStarter from './pages/DesignStarter/DesignStarter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style-starter" element={<StylingPartOne />} /> 
        <Route path="/error-fix-starter" element={<ErrorFixStarter />} /> 
        <Route path="/error-fix" element={<ErrorFix />} /> 
        <Route path="/design" element={< DesignPage/>} /> 


      </Routes>
    </Router>
  );
}

export default App;
