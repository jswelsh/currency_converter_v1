import React, { useState } from 'react';
import ExchangeHistoryPopOver from './ExchangeHistoryPopOver';
import SelectionForm from './SelectionForm';
import Button from './Button';

import { Divider } from '@material-ui/core';
import { 
  initializeDateRange, 
  shortenDateString 
} from '../helpers/dataHelpers'


export default function ExchangeHistoryTab(props) {
/*   const [dateRange, setDateRange] = useState(initializeDateRange());
  const [baseCurrency, setBaseCurrency] = useState('CAD')

 */
const [fromCurrency, setFromCurrency] = useState('CAD');
const [toCurrency, setToCurrency] = useState('USD');
const [dateRange, setDateRange] = useState(initializeDateRange());


const currencySelectHandler = (mode, currency) => {
  console.log('currency select', currency)
  return mode === 'fromCurrency' ? setFromCurrency(currency):
  mode === 'toCurrency' ? setToCurrency(currency) :
  null
}

 //(fromCurrency, toCurrency, dateRange
  const handleHistorySubmit = () => {
    props.convertHistoryHandler(fromCurrency, toCurrency, dateRange)
  }
  const handleCompareSubmit = () => {
    props.compareListHandler()
  }

  
  const handleChange = (event) => {
    const [startDate, endDate] = event
    console.log(startDate, endDate, setDateRange)
    setDateRange(
      [shortenDateString(startDate), 
      shortenDateString(endDate)
    ])
  }
  return (
  <>
    <SelectionForm 
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      setFromCurrency={setFromCurrency}
      setToCurrency={setToCurrency}
      currencySelectHandler={currencySelectHandler}
      currenciesList={props.currenciesList}
      mode={props.mode}
    />
    <Divider />
    {props.mode === 'History' && (
      <ExchangeHistoryPopOver
        dateRange={dateRange}
        handleChange={handleChange}
      /> 
    )}
    {/* </div> */}
    {props.mode === 'History' && (
    <Button       
      handleSubmit={handleHistorySubmit}
      primary='Generate Graph'
    />
    )}
    {props.mode === 'Compare' && (
    <Button       
      handleSubmit={handleCompareSubmit}
      primary='Compare Currency'
    />
    )}
  </>
  )
}
