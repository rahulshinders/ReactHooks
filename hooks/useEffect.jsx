import React, { useState, useEffect } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    alert("Button Clikced");
  }, [num2]);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        increment {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        increment {num2}
      </button>
    </>
  );
};

export default Counter;
