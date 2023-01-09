import React from "react";
import { useReducer } from "react";
import reducer from "./reducer";

export const PLUS = "plus";
export const MINUS = "minus";

const plus = (payload) => ({
  type: PLUS,
  payload: payload,
});
const minus = (payload) => ({
  type: MINUS,
  payload: payload,
});

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });
  const CounterPlusOne = () => {
    dispatch(plus(1));
  };
  const CounterMinusOne = () => {
    if (state.counter > 0) {
      dispatch(minus(1));
    } else {
      dispatch({
        type: "null",
      });
    }
  };
  const CounterPlusTwo = () => {
    dispatch({
      type: PLUS,
      payload: 2,
    });
  };
  const CounterMinusTwo = () => {
    if (state.counter === 1) {
      dispatch(minus(1));
    } else if (state.counter > 0) {
      dispatch(minus(2));
    } else {
      dispatch({
        type: "null",
      });
    }
  };
  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={CounterPlusOne}>+1</button>
      <button onClick={CounterMinusOne}>-1</button>
      <button onClick={CounterPlusTwo}>+2</button>
      <button onClick={CounterMinusTwo}>-2</button>
    </div>
  );
}
