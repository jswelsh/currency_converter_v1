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
  }
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
}