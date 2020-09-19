import React from "react";
import "./App.css";
import Converter from "./converter/Converter";
import CurrencyConversionGraph from "./CurrencyConversionGraph";
import CurrencyHistoryGraph from "./CurrencyHistoryGraph";
import useAppData from "../hooks/useAppData";


export default function App() {
  const {
    state,
    convertHandler,
    convertHistoryHandler,
    selectHandler
  } = useAppData();

  return (
    <main className="layout">
      <React.Fragment>
        <Converter 
          result={state.result}
          fromCurrency={state.fromCurrency}
          toCurrency={state.toCurrency}
          amount={state.amount}
          currenciesList={state.currenciesList}
          convertHandler={convertHandler}
          selectHandler={selectHandler}
        />
      </React.Fragment>
 
        <CurrencyConversionGraph
        />

        <CurrencyHistoryGraph
        convertHistoryHandler={convertHistoryHandler}
        history={state.history}
        />
    
    </main>
  );
}