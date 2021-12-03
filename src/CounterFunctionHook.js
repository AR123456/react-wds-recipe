//import useContext
import React, { useState, useContext } from "react";
// import ThemeContext
import { ThemeContext } from "./App";

const CounterFunctionHook = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      {/* give button style  */}
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
    </div>
  );
};

export default CounterFunctionHook;
