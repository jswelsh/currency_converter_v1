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
      .then(res => {
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
  
}