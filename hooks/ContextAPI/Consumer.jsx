import React, { useContext } from "react";
import { firstName, lastName } from "../../src/App";

const Consumer = () => {
  const fname = useContext(firstName);
  const lname = useContext(lastName);

  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};

export default Consumer;
