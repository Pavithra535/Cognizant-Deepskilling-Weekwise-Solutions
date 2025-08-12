import React, { Component } from "react";
import CurrencyConverter from "./CurrencyConverter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // Binding methods
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  // Increment counter
  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  // Say hello message
  sayHello() {
    console.log("Hello! This is a static message.");
  }

  // Decrement counter
  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  // Button click with argument
  sayMessage(message) {
    alert(message);
  }

  // Synthetic event handler
  handleSyntheticEvent = (event) => {
    console.log(event); // SyntheticEvent object
    alert("I was clicked!");
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Examples</h1>

        {/* Counter */}
        <h2>Counter: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment();
            this.sayHello();
          }}
        >
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        {/* Button with argument */}
        <button onClick={() => this.sayMessage("Welcome")}>Say Welcome</button>

        <hr />

        {/* Synthetic Event */}
        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <hr />

        {/* Currency Converter */}
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
