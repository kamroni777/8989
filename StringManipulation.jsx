import React, { useState } from 'react';

const StringManipulation = () => {
  const [inputString, setInputString] = useState('');
  const [reversedString, setReversedString] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [capitalizedSentence, setCapitalizedSentence] = useState('');

  const handleReverseString = () => {
    setReversedString(inputString.split('').reverse().join(''));
  };

  const handleCountCharacters = () => {
    setCharacterCount(inputString.length);
  };

  const handleCapitalizeWords = () => {
    setCapitalizedSentence(
      inputString.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    );
  };

  return (
    <div className="section">
      <h2>String Manipulation</h2>
      
      <div className="function">
        <h3>Reverse a String</h3>
        <input 
          type="text" 
          value={inputString} 
          onChange={(e) => setInputString(e.target.value)} 
          placeholder="Enter a string"
        />
        <button onClick={handleReverseString}>Reverse</button>
        <p>Reversed: {reversedString}</p>
      </div>
      
      <div className="function">
        <h3>Count Characters</h3>
        <button onClick={handleCountCharacters}>Count Characters</button>
        <p>Character count: {characterCount}</p>
      </div>
      
      <div className="function">
        <h3>Capitalize Words</h3>
        <button onClick={handleCapitalizeWords}>Capitalize</button>
        <p>Capitalized: {capitalizedSentence}</p>
      </div>
    </div>
  );
};

export default StringManipulation;