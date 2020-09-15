import React from "react";

import "./App.css";
import Converter from "./converter/converter";
import useAppData from "../hooks/useAppData";


export default function App() {
  const {
    state,
    convertHandler,
    selectHandler
  } = useAppData();

  return (
    <Converter 
      result={state.result}
      fromCurrency={state.fromCurrency}
      toCurrency={state.toCurrency}
      amount={state.amount}
      currenciesList={state.currenciesList}
      convertHandler={convertHandler}
      selectHandler={selectHandler}
    />
  );
}