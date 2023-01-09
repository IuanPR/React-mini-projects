import { PLUS, MINUS } from "./useReducer";
export default function (state, action) {
  switch (action.type) {
    case PLUS: {
      return { counter: state.counter + action.payload };
    }
    case MINUS: {
      return { counter: state.counter - action.payload };
    }
    case "null": {
      return { counter: state.counter };
    }
  }
}
