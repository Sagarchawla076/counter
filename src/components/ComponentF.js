import React from "react";
import { useGlobalContext } from "./Context";
function ComponentF() {
  const { count, dispatch } = useGlobalContext();
  return (
    <div className="component">
      <span>Component F {count}</span>
      <button className="increment" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button className="decrement" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button className="reset" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
