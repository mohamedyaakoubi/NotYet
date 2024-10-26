import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/Get Started/index';
import Resume from './pages/resume/index';
//import Forum from './pages/Forum';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/upload-success" element={<GetStarted />} />
            </Routes>
      </Router> 
      {/* <Forum /> */}
    </div>
  );
}

export default App;
