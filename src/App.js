import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'; // Import the Skills component

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills /> {/* Include the Skills component here */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
