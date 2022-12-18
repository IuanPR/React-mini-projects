import React from "react";
function Counter() {
  const [counter, setCounter] = React.useState(0);
  function CounterMinus() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 0);
    }
  }
  function CounterPlus() {
    setCounter(counter + 1);
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
            <button className="counter-plus" onClick={() => CounterPlus()}>
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
