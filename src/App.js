import React, { useState } from "react";
import Counter from "./Counter";
import CounterFunctionHook from "./CounterFunctionHook";
// context has a provider- passes out a value and consumer - consumes the value
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    // wrap return in the proivider here the value is state in application
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter Class Based
      <Counter initialCount={0}></Counter>
      Counter Hooks Functional
      <CounterFunctionHook initialCount={0}></CounterFunctionHook>
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Set theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
