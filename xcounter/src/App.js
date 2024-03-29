import logo from './logo.svg';
import './App.css';
import  { useState, useEffect } from 'react';

function App() {
  const [count,setCount] = useState(0);

  const handleDecrement  = () => {
    setCount(prevCount => prevCount - 1);
  };
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
