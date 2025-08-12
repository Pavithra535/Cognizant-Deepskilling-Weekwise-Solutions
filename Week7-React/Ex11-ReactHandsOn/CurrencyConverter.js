import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const euroValue = (parseFloat(this.state.rupees) / 90).toFixed(2); // Example: 1 Euro = ₹90
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Rupees:{" "}
            <input
              type="number"
              value={this.state.rupees}
              onChange={(e) => this.setState({ rupees: e.target.value })}
              required
            />
          </label>
          <button type="submit">Convert</button>
        </form>

        {this.state.euro && (
          <p>
            {this.state.rupees} INR = {this.state.euro} EUR
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
