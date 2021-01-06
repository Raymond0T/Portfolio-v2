import React from 'react';
import './App.css';
import Nav from './Components/nav.js';
import Home from './Components/home.js';
import About from './Components/about.js';
import Experience from './Components/experience.js';
import Skill from './Components/skill.js';

import Footer from './Components/footer.js';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Home />
      <div className="app-body">
        <About />
        <Skill />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
