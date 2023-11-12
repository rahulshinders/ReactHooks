import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      // setCount(count + 1);
    }, 5000);
  });
  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}
