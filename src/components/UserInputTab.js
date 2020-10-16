import React, { useState } from 'react';
import ExchangeHistoryPopOver from './ExchangeHistoryPopOver';
import SelectionForm from './SelectionForm';
import Button from './Button';
import InputAmountField from './InputAmountField';

import { Divider } from '@material-ui/core';
import { 
  initializeDateRange, 
  shortenDateString 
} from '../helpers/dataHelpers'


export default function ExchangeHistoryTab(props) {
const [fromCurrency, setFromCurrency] = useState('CAD');
const [toCurrency, setToCurrency] = useState('USD');
const [amount, setAmount] = useState(1);
const [dateRange, setDateRange] = useState(initializeDateRange());


const currencySelectHandler = (mode, currency) => { 
  return (
    mode === 'fromCurrency' ? setFromCurrency(currency):
    mode === 'toCurrency' ? setToCurrency(currency) :
    null
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
  {props.mode !== 'History' && (
    <InputAmountField
      amount={amount}
      setAmount={setAmount}
      fromCurrency={fromCurrency}
      drawer={props.drawer}
    />
  )}
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
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      /> 
    )}
    {/* </div> */}
    {props.mode === 'Converter' && (
      <>
        <Button       
          handleSubmit={()=>
            props.convertHandler({
              fromCurrency: fromCurrency, 
              toCurrency: toCurrency,
              amount: amount
            })
          }
          primary='Connvert Currencies'
        />
      </>
    )}
    {props.mode === 'History' && (
    <Button       
      handleSubmit={()=>
        props.convertHistoryHandler({
          fromCurrency, 
          toCurrency, 
          dateRange
        })
      }
      primary='Generate Graph'
    />
    )}
    {props.mode === 'Compare' && (
      <>
        
        <Button       
          handleSubmit={()=>
            props.compareListHandler(fromCurrency, amount)
          }
          primary='Compare Currencies'
        />
      </>
    )}
  </>
  )
}
