import React from "react";

import "./converter.css";


export default function Converter(props) {
/*   const [result, setResult] = useState(null)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("GBP")
  const [amount, setAmount] = useState(1)
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=CAD")
      .then(res => {
        const currencyArr = [];
        //setting up avb currencies to choose from
        for (const key in res.data.rates) {
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
        .then(res => {
          const result = 
            amount * res.data.rates[toCurrency];
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
 */
  return (
    <div className="Converter">
        <h2>
          <span>Currency</span>Converter
        </h2>
        <div className="From">
          <input
            name="amount"
            type="text"
            value={props.amount}
            onChange={e => props.setAmount(e.target.value )}
          />
          <select
            name="from"
            onChange={e => props.selectHandler(e)}
            value={props.fromCurrency}
          >
            {props.currenciesList.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <select
            name="to"
            onChange={e => props.selectHandler(e)}
            value={props.toCurrency}
          >
            {props.currenciesList.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <button onClick={props.convertHandler}>Convert</button>
          {props.result && <h3>{props.result}</h3>}
        </div>
      </div>
  );
}