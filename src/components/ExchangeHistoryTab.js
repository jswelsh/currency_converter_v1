import React, { useState } from "react";
import ExchangeHistoryPopOver from './ExchangeHistoryPopOver';
import CurrencyExchangeSelectionForm from './CurrencyExchangeSelectionForm';
import ExchangeHistoryButton from './ExchangeHistoryButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
/*   grid: {
    padding: theme.spacing(5),
  }, */
}));

export default function ExchangeHistoryTab(props) {
  const lastFourWeeks = function () {
    const day = new Date();
    const FourWeeksAgo = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 28).toISOString().split('T')[0];
    return FourWeeksAgo;
  };
  const [dateRange, setDateRange] = useState([ lastFourWeeks(), new Date()]);
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
    <ExchangeHistoryPopOver 
      dateRange={dateRange}
      handleChange={handleChange}
    />
    <CurrencyExchangeSelectionForm 
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      setFromCurrency={setFromCurrency}
      setToCurrency={setToCurrency}
      currenciesList={props.currenciesList}
    />
    <ExchangeHistoryButton       
      handleSubmit={handleSubmit}
    />
  </>
  )
}
