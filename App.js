import React from 'react';
import './App.css';
import StringManipulation from './components/StringManipulation';
import ArrayFunctions from './components/ArrayFunctions';
import MathFunctions from './components/MathFunctions';

function App() {
  return (
    <div className="App">
      <h1>JavaScript Functions Demo</h1>
      <StringManipulation />
      <ArrayFunctions />
      <MathFunctions />
    </div>
  );
}

export default App;