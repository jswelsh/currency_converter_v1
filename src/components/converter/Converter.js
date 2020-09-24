import React from "react";
import "./converter.css";


export default function Converter(props) {
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
          <button name="latest" value="latest"  onClick={() => props.convertHandler()}>Convert</button>
          {props.result && <h3>{props.result}</h3>}
        </div>
      </div>
  );
}