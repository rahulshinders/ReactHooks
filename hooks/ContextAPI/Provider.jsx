import React, { createContext } from "react";
import Consumer from "../hooks/ContextAPI/Consumer";

const firstName = createContext();
const lastName = createContext();

export default function App() {
  return (
    <>
      <firstName.Provider value={"Rahul"}>
        <lastName.Provider value={"Shinde"}>
          <Consumer />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
}

export { firstName, lastName };
