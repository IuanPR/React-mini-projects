import { useState } from "react";
import React from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  function CounterMinus() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  }
  return (
    <div>
      <h1>Counter:</h1>
      <div className="counter">
        <h1>{counter}</h1>
        <div className="buttons">
          <div>
            <button className="counter-minus" onClick={() => CounterMinus()}>
              Minus
            </button>
          </div>
          <div>
            <button
              className="counter-plus"
              onClick={() => setCounter(counter + 1)}
            >
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}