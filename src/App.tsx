import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/About';
import Rules from './components/Rules';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Rules />
    </div>
  );
}

export default App;
