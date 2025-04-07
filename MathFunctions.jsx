import React, { useState } from 'react';

const MathFunctions = () => {
  const [factorialInput, setFactorialInput] = useState(0);
  const [factorialResult, setFactorialResult] = useState(1);
  const [primeInput, setPrimeInput] = useState(0);
  const [isPrimeResult, setIsPrimeResult] = useState(false);
  const [fibonacciTerms, setFibonacciTerms] = useState(0);
  const [fibonacciSequence, setFibonacciSequence] = useState([]);

  const handleFactorial = () => {
    const num = parseInt(factorialInput);
    if (num === 0 || num === 1) {
      setFactorialResult(1);
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      setFactorialResult(result);
    }
  };

  const handleCheckPrime = () => {
    const num = parseInt(primeInput);
    if (num <= 1) {
      setIsPrimeResult(false);
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        setIsPrimeResult(false);
        return;
      }
    }
    setIsPrimeResult(true);
  };

  const handleFibonacci = () => {
    const terms = parseInt(fibonacciTerms);
    if (terms <= 0) {
      setFibonacciSequence([]);
      return;
    }
    const sequence = [0, 1].slice(0, terms);
    for (let i = 2; i < terms; i++) {
      sequence[i] = sequence[i-1] + sequence[i-2];
    }
    setFibonacciSequence(sequence);
  };

  return (
    <div className="section">
      <h2>Mathematical Functions</h2>
      
      <div className="function">
        <h3>Factorial</h3>
        <input 
          type="number" 
          value={factorialInput} 
          onChange={(e) => setFactorialInput(e.target.value)} 
          min="0"
        />
        <button onClick={handleFactorial}>Calculate</button>
        <p>Factorial: {factorialResult}</p>
      </div>
      
      <div className="function">
        <h3>Prime Number Check</h3>
        <input 
          type="number" 
          value={primeInput} 
          onChange={(e) => setPrimeInput(e.target.value)} 
          min="0"
        />
        <button onClick={handleCheckPrime}>Check</button>
        <p>Is prime? {isPrimeResult ? 'Yes' : 'No'}</p>
      </div>
      
      <div className="function">
        <h3>Fibonacci Sequence</h3>
        <input 
          type="number" 
          value={fibonacciTerms} 
          onChange={(e) => setFibonacciTerms(e.target.value)} 
          min="0"
        />
        <button onClick={handleFibonacci}>Generate</button>
        <p>Sequence: [{fibonacciSequence.join(', ')}]</p>
      </div>
    </div>
  );
};

export default MathFunctions;