import React from 'react';
import './App.css';
import Fact from './componets/Fact';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Random Facts Generator</h1>
      </div>
      <Fact />
    </div>
  );
}

export default App;