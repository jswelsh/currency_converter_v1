import React, { useState } from "react";
import CalendarPopOverComponent from './NavMenuCalendarComponent';
import CurrencyExchangeSelectionForm from './CurrencyExchangeSelectionForm';
import ExchangeHistoryButton from './ExchangeHistoryButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
/*   grid: {
    padding: theme.spacing(5),
  }, */
}));

export default function ExchangeHistoryTab(props) {
/*   const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("USD");
 */
  const handleSubmit = (event) => {
    event.preventDefault();
    props.convertHistoryHandler(props.fromCurrency, props.toCurrency)
  }

  return (
  <> 
    <CalendarPopOverComponent />
    <CurrencyExchangeSelectionForm 
 /*      selectHandler={props.selectHandler} */
      fromCurrency={props.fromCurrency}
      toCurrency={props.toCurrency}
      selectHandler={props.selectHandler}
      currenciesList={props.currenciesList}
    />
    <ExchangeHistoryButton 
      convertHistoryHandler={props.convertHistoryHandler}
      handleSubmit={handleSubmit}
    />
    
  </>
  )
}
