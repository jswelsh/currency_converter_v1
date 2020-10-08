import React, { useState } from "react";
import ExchangeHistoryPopOver from './ExchangeHistoryPopOver';
import CurrencyExchangeSelectionForm from './CurrencyExchangeSelectionForm';
import Button from './TESTExchangeHistoryButton';

import { Divider } from "@material-ui/core";
import { fourWeeksFromToday } from '../helpers/dataHelpers'


export default function ExchangeHistoryTab(props) {

  const [dateRange, setDateRange] = useState([fourWeeksFromToday(), new Date()]);
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.convertHistoryHandler(fromCurrency, toCurrency, dateRange)
  }

  const handleChange = (event) => {
    const [startDate, endDate] = event
    const shortenDateString = (date) =>{
      return date.toISOString().split('T')[0]
    }
    setDateRange([shortenDateString(startDate), shortenDateString(endDate)])
  }

  return (
  <>
    <CurrencyExchangeSelectionForm 
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      setFromCurrency={setFromCurrency}
      setToCurrency={setToCurrency}
      currenciesList={props.currenciesList}
    />
    <Divider />
    <ExchangeHistoryPopOver
      dateRange={dateRange}
      handleChange={handleChange}
      mode={props.mode}
    />
    {/* </div> */}

    <Button       
      handleSubmit={handleSubmit}
    />
  </>
  )
}
