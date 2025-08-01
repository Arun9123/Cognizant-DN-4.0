import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert(`Hello! Member ${this.state.count}`);
  };

  OnPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <br/>
        <button onClick={this.decrement}>Decrement</button>
        <br/>
        <button onClick={this.sayHello}>Say Welcome</button>
        <br/>
        <button onClick={this.OnPress}>Click on me</button>
      </div>
    );
  }
}

export default Counter;
