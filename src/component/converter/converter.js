import React from "react";
import axios from "axios";
import "./converter.css";

export default Converter;

class Converter extends React.Component {
  constructor(props) {
    super(props); //need to update this as its depreciated
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "GBP",
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.openrates.io/latest")
      .then(response => {
        const currencyArr = ["EUR"];
        for (const key in response.data.rates) {
          currencyArr.push(key);
        }
        this.setState({currencies: currencyArr});
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  };
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
        /* 
          I believe the api changed and needs it to be http://api.openrates.io/latest?symbols=USD,GBP
        */
      axios
        .get(
          `https://api.openrates.io/latest?base=${
            this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if(event.target.name === "to") {
        this.setState({ toCurrency: event.target.value});
      }
    }
  };

  render() {
    return (
      <div className="Converter">
        <h2>
          <span>Currency</span>Converter
          <span role="img" aria-label="money">
            &#x1f4b5;
          </span>
        </h2>
        <div className="From">
          <input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={event => this.setState({ amount: event.target.value })}
          />
          <select
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <select
            name="to"
            onChange={event => this.selectHandler(event)}
            value={this.state.toCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <button onClick={this.convertHandler}>Convert</button>
          {this.state.result && <h3>{this.state.result}</h3>}
        </div>
      </div>
    );
  }
}
export default Converter;