import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/Get Started/index';
import Resume from './pages/Resume/index';
import Forum from './pages/Forum';
import Menu from './pages/Menu';



function App() {
  
  return (
    <div className="App">
      <Router>
            <Routes>
            <Route path="/forum/*" element={<Forum />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/" element={<Resume />} />
                <Route path="/upload-success" element={<GetStarted />} />
            </Routes>
      </Router> 
    </div>
  );
}

export default App;
