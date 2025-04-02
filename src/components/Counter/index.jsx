import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const btnStyle = {
    border: "1px solid #000",
    padding: "5px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "2.5rem",
  };

  return (
    <div>
      <h1>Counter </h1>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
      <span style={{ fontSize: "3rem" }}>{count}</span>
      <button style={btnStyle} onClick={() => count > 0 && setCount(count - 1)}>
        -
      </button>
    </div>
  );
};
