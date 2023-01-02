import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0); //array destructure
  // function
  const handleIncrement = () => {
    //const newCount = count + 1;
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Test;