import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increment
        </button>
        <button onClick={(c) => setCount((currentCount) => currentCount - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
