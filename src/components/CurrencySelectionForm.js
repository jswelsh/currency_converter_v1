import React from 'react';
import { 
  FormControl,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FromIcon from '@material-ui/icons/ArrowDownward';
import ToIcon from '@material-ui/icons/SubdirectoryArrowRight';
import SwapVertIcon from '@material-ui/icons/Cached';
import { handleClick } from '../helpers/selectionHelper';
import { SelectionComponent } from './SelectionComponent';

export function CurrencySelectionForm({
  fromCurrency,
  toCurrency,
  currencySelectHandler,
  currenciesList,
  mode}) {
  return (
  <List>
    <FormControl>
      {mode === 'Compare' && (
        <SelectionComponent 
          props={mode}
          icon={<CompareArrowsIcon color='secondary'/>}
          name={'fromCurrency'}
          value={fromCurrency}
          setter={currencySelectHandler}
          currenciesList={currenciesList}/>)}
      {mode !== 'Compare' && (
      <>   
        <SelectionComponent 
          props={mode}
          icon={<FromIcon color='secondary'/>}
          name={'fromCurrency'}
          value={fromCurrency}
          setter={currencySelectHandler}
          currenciesList={currenciesList}/>
        <SelectionComponent 
          props={mode}
          icon={<ToIcon color='secondary'/>}
          name={'toCurrency'}
          value={toCurrency}
          setter={currencySelectHandler}
          currenciesList={currenciesList}/>
        <ListItem
          button
          onClick={(event) => handleClick({
            toCurrency:toCurrency, 
            fromCurrency:fromCurrency, 
            setter:currencySelectHandler})}>
          <ListItemIcon><SwapVertIcon/></ListItemIcon>
          <ListItemText primary="Swap Currencies" />
        </ListItem>
      </>
      )}
    </FormControl>
  </List>
  )
}