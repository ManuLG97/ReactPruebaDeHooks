import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(20);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click here to add 1
      </button> <br/>
      <button onClick={() => setCount(count - 1)}>
        Click here to subtract 1
      </button>
    </div>
  );
}

export default App;
