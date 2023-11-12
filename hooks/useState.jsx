import React, { useState } from "react";

const Counter = () => {
  // Initialize a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
