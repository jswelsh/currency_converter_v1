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

  return mode === 'fromCurrency' ? setFromCurrency(currency):
  mode === 'toCurrency' ? setToCurrency(currency) :
  null
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
      handleSubmit={()=>props
        .convertHistoryHandler({
          fromCurrency, 
          toCurrency, 
          dateRange
        })
        /*  handleHistorySubmit({fromCurrency, toCurrency, dateRange}) */
      }
      primary='Generate Graph'
    />
    )}
    {props.mode === 'Compare' && (
    <Button       
      handleSubmit={()=>
        props.compareListHandler(fromCurrency)
      }
      primary='Compare Currencies'
    />
    )}
  </>
  )
}
