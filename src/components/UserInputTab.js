import React, { useState } from 'react';
import ExchangeHistoryPopOver from './ExchangeHistoryPopOver';
import SelectionForm from './SelectionForm';
import Button from './Button';

import { Divider } from "@material-ui/core";
import { 
  fourWeeksFromToday, 
  shortenDateString 
} from '../helpers/dataHelpers'


export default function ExchangeHistoryTab(props) {

  const [dateRange, setDateRange] = useState([
    fourWeeksFromToday(), 
    new Date()
  ]);
  const [baseCurrency, setBaseCurrency] = useState('CAD')
  const [fromCurrency, setFromCurrency] = useState('CAD');
  const [toCurrency, setToCurrency] = useState('USD');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.convertHistoryHandler(
      fromCurrency, 
      toCurrency, 
      dateRange
      )
  }

  const handleChange = (event) => {
    const [startDate, endDate] = event
    setDateRange(
      [shortenDateString(startDate), 
      shortenDateString(endDate)
    ])
  }

  return (
  <>
{/*     <CompareSelectionForm 
      baseCurrency={baseCurrency}
      setBaseCurrency={setBaseCurrency}
      currenciesList={props.currenciesList}
      mode={props.mode}
    /> */}
    <SelectionForm 
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      baseCurrency={baseCurrency}
      setFromCurrency={setFromCurrency}
      setToCurrency={setToCurrency}
      setBaseCurrency={setBaseCurrency}
      currenciesList={props.currenciesList}
      mode={props.mode}
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
