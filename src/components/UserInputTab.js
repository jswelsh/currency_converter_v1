import React, { useState } from 'react';
import { ExchangeHistoryPopOver } from './ExchangeHistoryPopOver';
import { HistorySelectionForm } from './HistorySelectionForm';
import { Button } from './Button';
import { InputAmountField } from './InputAmountField';

import { Divider } from '@material-ui/core';
import { 
  initializeDateRange, 
  shortenDateString 
} from '../helpers/dataHelpers'


export function UserInputTab({
  convertHistoryHandler,
  compareListHandler,
  currenciesList,
  convertHandler,
  drawer,
  mode,
}) {
const [fromCurrency, setFromCurrency] = useState('CAD');
const [toCurrency, setToCurrency] = useState('USD');
const [amount, setAmount] = useState(1);
const [dateRange, setDateRange] = useState(initializeDateRange(365));


const currencySelectHandler = (mode, currency) => { 
  return (
    mode === 'fromCurrency' ? setFromCurrency(currency):
    mode === 'toCurrency' ? setToCurrency(currency) :
    null
  )
}

  const handleChange = (event) => {
    //error check that both start and end date have been selected
    if(event[1] !== null){
      const [startDate, endDate] = event
      setDateRange(
        [shortenDateString(startDate), 
        shortenDateString(endDate)
      ])
    }
  }
  return (
  <> 
  {mode !== 'History' && (
    <InputAmountField
      amount={amount}
      setAmount={setAmount}
      fromCurrency={fromCurrency}
      drawer={drawer}
    />
  )}
    <HistorySelectionForm 
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      setFromCurrency={setFromCurrency}
      setToCurrency={setToCurrency}
      currencySelectHandler={currencySelectHandler}
      currenciesList={currenciesList}
      mode={mode}
    />
    <Divider />
    {mode === 'History' && (
      <ExchangeHistoryPopOver
        dateRange={dateRange}
        handleChange={handleChange}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      /> 
    )}
    {/* </div> */}
    {mode === 'Converter' && (
      <>
        <Button       
          handleSubmit={()=>
            convertHandler({
              fromCurrency: fromCurrency, 
              toCurrency: toCurrency,
              amount: amount
            })
          }
          primary='Connvert Currencies'
        />
      </>
    )}
    {mode === 'History' && (
    <Button       
      handleSubmit={()=>
        convertHistoryHandler({
          fromCurrency, 
          toCurrency, 
          dateRange
        })
      }
      primary='Generate Graph'
    />
    )}
    {mode === 'Compare' && (
      <>
        
        <Button       
          handleSubmit={()=>
            compareListHandler(fromCurrency, amount)
          }
          primary='Compare Currencies'
        />
      </>
    )}
  </>
  )
}
