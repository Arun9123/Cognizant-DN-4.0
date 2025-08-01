import React from "react";

class CurrencyConvertor extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      currencyType: ""
    };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyTypeChange = (e) => {
    this.setState({ currencyType: e.target.value });
  };

  handleKeyPress = (e) => {
    const amount = parseFloat(this.state.amount);
    const type = this.state.currencyType.toLowerCase();

    if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
    }

    if (type === "euro") {
        const inr = amount * 99;
        alert(`Converting Euro to Rupee ${inr}`);
    } else if (type === "rupee") {
        const euro = amount * 0.0099;
        alert(`Converting Rupee to Euro ${euro}`);
    }
  };

  render() {
    return (
        <div>
        <h2 style={{ color: "#558b4aff", fontSize: "30px" }}>Currency Convertor!!!</h2>
        
        <label>Amount:</label>
        <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
        />
        <br/>
        <label>Currency:</label>
        <input
            type="text"
            value={this.state.currencyType}
            onChange={this.handleCurrencyTypeChange}
        />
        
        <br />
        <button onClick={this.handleKeyPress}>Submit</button>
        </div>
        );
    }

}

export default CurrencyConvertor;
