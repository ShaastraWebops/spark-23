import React from 'react';
import './App.css';
import About from './components/About';
import Rulesandreg from './components/Rulesandreg';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Rulesandreg />
    </div>
  );
}

export default App;
