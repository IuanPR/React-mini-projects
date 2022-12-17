import React from "react";
// Counter on the class component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  CounterMinus() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  CounterPlus() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Counter:</h1>
        <div className="counter">
          <h1>{this.state.counter}</h1>
          <div className="buttons">
            <div>
              <button
                className="counter-minus"
                onClick={() => this.CounterMinus()}
              >
                Minus
              </button>
            </div>
            <div>
              <button
                className="counter-plus"
                onClick={() => this.CounterPlus()}
              >
                Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Counter;
