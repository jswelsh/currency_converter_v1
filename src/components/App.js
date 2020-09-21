import React from "react";
import "./App.css";
import Converter from "./converter/Converter";
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
      <Converter 
        result={state.result}
        fromCurrency={state.fromCurrency}
        toCurrency={state.toCurrency}
        amount={state.amount}
        currenciesList={state.currenciesList}
        convertHandler={convertHandler}
        selectHandler={selectHandler}
      />
      <CurrencyHistoryGraph
        convertHandler={convertHandler}
        history={state.history}
        selectHandler={selectHandler}
      />
    </main>
  );
}