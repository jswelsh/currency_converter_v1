import React, { FC, useState } from 'react';
import { IUserInputTabProps, IcurrencySelectHandlerFunc } from './../types'
import { ExchangeHistoryPopOver } from './ExchangeHistoryPopOver';
import { CurrencySelectionForm } from './CurrencySelectionForm';
import { Button } from './Button';
import { InputAmountField } from './InputAmountField';

import { Divider } from '@material-ui/core';
import { 
  initializeDateRange, 
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
  toCurrency,
  opendrawer,
  mode,
}) => {

const [amount, setAmount] = useState<number>(1);

/* need to fix the any props later */
const [dateRange, setDateRange] = useState<any/* string */>(initializeDateRange(365));

let currencySelectHandler: IcurrencySelectHandlerFunc
currencySelectHandler = function({currency, mode}) { 
  if(mode === 'fromCurrency' && currency !== toCurrency){
    setFromCurrency(currency)
    convertHandler({
      fromCurrency: currency, 
      toCurrency: toCurrency,
      amount: amount})
  }else if(mode === 'toCurrency' && currency !== fromCurrency){
    setToCurrency(currency)
    convertHandler({
      fromCurrency: fromCurrency, 
      toCurrency: currency,
      amount: amount})
  }
  
}

const handleChange = (event: Array<Date>) => {
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
    {mode !== 'History' && mode !== 'SignIn' && (
    <InputAmountField
      fromCurrency={fromCurrency}
      setAmount={setAmount}
      opendrawer={opendrawer}
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
    <Divider />
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