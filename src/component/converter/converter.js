import React, { useState } from "react";
import axios from "axios";
import "./converter.css";


function Converter() {
  const [result, setResult] = useState(null)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("GBP")
  const [amount, setAmount] = useState(1)
  const [currencies, setCurrencies] = useState([])

  React.useEffect(() => {
    axios
      .get("https://api.openrates.io/latest")
      .then(response => {
        const currencyArr = ["EUR"];
        //setting up avb currencies to choose from
        for (const key in response.data.rates) {
          currencyArr.push(key);
        }
        setCurrencies(currencyArr);
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  }, []); // Empty array to only run once on mount.

  const convertHandler = () => {
    if (fromCurrency !== toCurrency) {  
      axios
        .get(
          `https://api.openrates.io/latest?base=${
            fromCurrency}&symbols=${toCurrency}`
        )
        .then(response => {
          const result = 
            amount * response.data.rates[toCurrency];
          setResult(result.toFixed(5));
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      setResult("You cant convert the same currency!");
    }
  };
 
  const selectHandler = e => {
    if (e.target.name === "from") {  
      setFromCurrency(e.target.value) 
    } else if (e.target.name === "to") {
        setToCurrency(e.target.value)
      }
  }

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
            value={amount}
            onChange={event => setAmount(event.target.value )}
          />
          <select
            name="from"
            onChange={event => selectHandler(event)}
            value={fromCurrency}
          >
            {currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <select
            name="to"
            onChange={event => selectHandler(event)}
            value={toCurrency}
          >
            {currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <button onClick={convertHandler}>Convert</button>
          {result && <h3>{result}</h3>}
        </div>
      </div>
  );
}

export default Converter;