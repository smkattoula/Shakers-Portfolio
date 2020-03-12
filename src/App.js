import React, { Component } from 'react';
import About from './components/About';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Welcome/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
