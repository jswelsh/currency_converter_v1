import React from "react";
import "./converter.css";

export function buttonHide(con) {
  if (con === null) return 'Convert';
}

export default function Converter(props) {

  

  return (
    <div className="Converter">
        <h2 >
          <span>Currency</span>Converter
        </h2>

        <div className="Form">
          <input
            name="amount"
            type="text"
            onChange={e => props.selectHandler(e)}
            value={props.amount}
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
          <div>
            {(props.result !== null) && <h3> {props.result}</h3>}
          </div>
          <div>
            {props.result === null && <button name="latest" value="latest"  onClick={() => props.convertHandler()}>{buttonHide(props.result)}</button>}
          </div>
        </div>
{/*         <div>
          {props.result && <h3>{props.result}</h3>}
        </div> */}
      </div>
  );
}