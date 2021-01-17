import React, { FC } from 'react';
import { IUserInputTabProps, ICurrencySelectHandlerFunc } from './../types'
import { ExchangeHistoryPopOver } from './ExchangeHistoryPopOver';
import { CalculatorPopOver } from './CalculatorPopOver'
import { CurrencySelectionForm } from './CurrencySelectionForm';
import { Button } from './Button';
import { InputAmountField } from './InputAmountField';

// import { Divider } from '@material-ui/core';
import {  
  shortenDateString 
} from '../../helpers/dataHelpers'

const UserInputTab: FC<IUserInputTabProps> = ({
  convertHistoryHandler,
  compareListHandler,
  currenciesList,
  convertHandler,
  setFromCurrency,
  setToCurrency,
  fromCurrency,
  setDateRange,
  toCurrency,
  openDrawer,
  setAmount,
  dateRange,
  amount,
  mode,
}) => {



/* need to fix the any props later */

let currencySelectHandler: ICurrencySelectHandlerFunc
currencySelectHandler = function({currency, mode}) { 
  if(mode === 'fromCurrency' && currency !== toCurrency){
    setFromCurrency(currency)
    convertHandler({
      fromCurrency: currency, 
      toCurrency,
      amount})
    convertHistoryHandler({
      fromCurrency: currency, 
      toCurrency, 
      dateRange})
    compareListHandler(currency, amount)
  }else if(mode === 'toCurrency' && currency !== fromCurrency){
    setToCurrency(currency)
    convertHandler({
      toCurrency: currency,
      fromCurrency, 
      amount})
      convertHistoryHandler({
        toCurrency: currency, 
        fromCurrency, 
        dateRange})
  }
}

const handleChange = (event: Array<Date>) => {
  //error check that both start and end date have been selected
  if(event[1] !== null){
    const [startDate, endDate] = event
    setDateRange(
      [shortenDateString(startDate.toISOString(), null), 
      shortenDateString(endDate.toISOString(), null)
    ])
  }
}
return (
  <> 
    {mode !== 'History' && mode !== 'SignIn' && (
    <InputAmountField
      fromCurrency={fromCurrency}
      setAmount={setAmount}
      openDrawer={openDrawer}
      amount={amount}
      //amountHandler={amountHandler}
      />)}
    {mode !== 'SignIn' &&
    (<CurrencySelectionForm 
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      currencySelectHandler={currencySelectHandler}
      currenciesList={currenciesList}
      mode={mode}/>)
    }

    {mode !== 'SignIn' && mode !== 'SignUp' &&
      <CalculatorPopOver />}
    {mode === 'History' && (
      <ExchangeHistoryPopOver
        dateRange={dateRange}
        handleChange={handleChange}/> 
    )}
    {mode === 'Converter' && fromCurrency !== toCurrency &&
    <Button
      primary='Connvert Currencies'
      handleSubmit={()=>
        convertHandler({
          fromCurrency: fromCurrency, 
          toCurrency: toCurrency,
          amount: amount})}
    />}
    {mode === 'History' && fromCurrency !== toCurrency &&
    <Button
      primary='Generate Graph'
      handleSubmit={()=>
        convertHistoryHandler({
          fromCurrency, 
          toCurrency, 
          dateRange})}/>}
    {mode === 'Compare' && 
    <Button
      primary='Compare Currencies'
      handleSubmit={()=>
        compareListHandler(fromCurrency, amount)}/>}
      
  </>
  )
}

export {UserInputTab}