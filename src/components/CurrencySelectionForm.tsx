import React, {FC} from 'react';
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

interface currenciesListItem {
  currency: string
}

interface ICurrencySelectionFormProps {
  currencySelectHandler(mode: string, currency: string): void
  currenciesList: Array<currenciesListItem>
  fromCurrency: string
  toCurrency: string
  mode: string
}

const CurrencySelectionForm: FC<ICurrencySelectionFormProps> = ({
  currencySelectHandler,
  currenciesList,
  fromCurrency,
  toCurrency,
  mode
}) => {
  return (
  <List>
    <FormControl>
      {mode === 'Compare' && (
        <SelectionComponent 
          icon={<CompareArrowsIcon color='secondary'/>}
          name={'fromCurrency'}
          value={fromCurrency}
          setter={currencySelectHandler}
          currenciesList={currenciesList}/>)}
      {mode !== 'Compare' && (
      <>   
        <SelectionComponent 
          icon={<FromIcon color='secondary'/>}
          name={'fromCurrency'}
          value={fromCurrency}
          setter={currencySelectHandler}
          currenciesList={currenciesList}/>
        <SelectionComponent 
          icon={<ToIcon color='secondary'/>}
          name={'toCurrency'}
          value={toCurrency}
          setter={currencySelectHandler}
          currenciesList={currenciesList}/>
        <ListItem
          button
          onClick={() => handleClick({
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
export {CurrencySelectionForm}