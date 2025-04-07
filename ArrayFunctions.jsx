import React, { useState } from 'react';

const ArrayFunctions = () => {
  const [arrayInput, setArrayInput] = useState('');
  const [array, setArray] = useState([]);
  const [maxValue, setMaxValue] = useState(null);
  const [minValue, setMinValue] = useState(null);
  const [arraySum, setArraySum] = useState(0);
  const [filteredArray, setFilteredArray] = useState([]);
  const [filterCondition, setFilterCondition] = useState('x > 2');

  const handleArrayInput = () => {
    const arr = arrayInput.split(',').map(item => Number(item.trim()));
    setArray(arr);
  };

  const handleFindMax = () => {
    setMaxValue(Math.max(...array));
  };

  const handleFindMin = () => {
    setMinValue(Math.min(...array));
  };

  const handleSumArray = () => {
    setArraySum(array.reduce((total, num) => total + num, 0));
  };

  const handleFilterArray = () => {
    let condition;
    try {
      condition = new Function('x', `return ${filterCondition}`);
    } catch (e) {
      alert('Invalid filter condition');
      return;
    }
    setFilteredArray(array.filter(condition));
  };

  return (
    <div className="section">
      <h2>Array Functions</h2>
      
      <div className="function">
        <h3>Array Input (comma separated)</h3>
        <input 
          type="text" 
          value={arrayInput} 
          onChange={(e) => setArrayInput(e.target.value)} 
          placeholder="e.g. 1,2,3,4,5"
        />
        <button onClick={handleArrayInput}>Set Array</button>
        <p>Current array: [{array.join(', ')}]</p>
      </div>
      
      <div className="function">
        <h3>Find Maximum</h3>
        <button onClick={handleFindMax}>Find Max</button>
        <p>Max value: {maxValue}</p>
      </div>
      
      <div className="function">
        <h3>Find Minimum</h3>
        <button onClick={handleFindMin}>Find Min</button>
        <p>Min value: {minValue}</p>
      </div>
      
      <div className="function">
        <h3>Sum of Array</h3>
        <button onClick={handleSumArray}>Calculate Sum</button>
        <p>Sum: {arraySum}</p>
      </div>
      
      <div className="function">
        <h3>Filter Array</h3>
        <input 
          type="text" 
          value={filterCondition} 
          onChange={(e) => setFilterCondition(e.target.value)} 
          placeholder="Filter condition (e.g. x > 2)"
        />
        <button onClick={handleFilterArray}>Filter</button>
        <p>Filtered array: [{filteredArray.join(', ')}]</p>
      </div>
    </div>
  );
};

export default ArrayFunctions;