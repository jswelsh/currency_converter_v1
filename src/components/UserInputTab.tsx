import React, { useState } from 'react';
import { ExchangeHistoryPopOver } from './ExchangeHistoryPopOver';
import { CurrencySelectionForm } from './CurrencySelectionForm';
import { Button } from './Button';
import { InputAmountField } from './InputAmountField';

import { Divider } from '@material-ui/core';
import { 
	initializeDateRange, 
	shortenDateString 
} from '../helpers/dataHelpers'

interface currenciesListItem {
  currency: string
}

interface IUserInputTabProps {
	convertHistoryHandler(): void 
	compareListHandler(): void 
  currenciesList: Array<currenciesListItem>
	convertHandler: string
	setFromCurrency: string
	setToCurrency: string
	fromCurrency: string
	toCurrency: string
	drawer: string
	mode: string
}

const UserInputTab: FC<> = ({
	convertHistoryHandler,
	compareListHandler,
	currenciesList,
	convertHandler,
	setFromCurrency,
	setToCurrency,
	fromCurrency,
	toCurrency,
	drawer,
	mode,
}) => {

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
			drawer={drawer}/>)}
		<CurrencySelectionForm 
			fromCurrency={fromCurrency}
			toCurrency={toCurrency}
			setFromCurrency={setFromCurrency}
			setToCurrency={setToCurrency}
			currencySelectHandler={currencySelectHandler}
			currenciesList={currenciesList}
			mode={mode}/>
		<Divider />
		{mode === 'History' && (
			<ExchangeHistoryPopOver
				dateRange={dateRange}
				handleChange={handleChange}
				fromCurrency={fromCurrency}
				toCurrency={toCurrency}/> 
		)}
		{mode === 'Converter' && (
		<Button       
			primary='Connvert Currencies'
			handleSubmit={()=>
				convertHandler({
					fromCurrency: fromCurrency, 
					toCurrency: toCurrency,
					amount: amount})}
		/>)}
		{mode === 'History' && 
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