import React, {FC} from 'react';
import { ICurrencySelectionFormProps } from '../types'
import { 
  FormControl,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import CompareArrowsIcon from '@material-ui/icons/Transform';

// import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FromIcon from '@material-ui/icons/ArrowDownward';
import ToIcon from '@material-ui/icons/SubdirectoryArrowRight';
import SwapVertIcon from '@material-ui/icons/Cached';
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';
import { handleClick } from '../../helpers/selectionHelper';
import { SelectionComponent } from './SelectionComponent';

import { makeStyles } from '@material-ui/core/styles';

/*  style={{ backgroundColor: theme.palette.primary.light }} */
const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  },
  twoToned: {
    // filter: 'invert(56%) sepia(82%) saturate(376%) hue-rotate(125deg) brightness(83%) contrast(90%)'
  }
}));

const CurrencySelectionForm: FC<ICurrencySelectionFormProps> = ({
  currencySelectHandler,
  currenciesList,
  fromCurrency,
  toCurrency,
  mode
}) => {
  const classes = useStyles();


return (
  <List>
    <FormControl>
      {mode === 'Compare' && (
        <SelectionComponent 
          icon={<CompareArrowsIcon className={classes.icon}/>}
          name={'fromCurrency'}
          value={fromCurrency}
          currencySelectHandler={currencySelectHandler}
          currenciesList={currenciesList}/>)}
      {mode !== 'Compare' && (
      <>   
        <SelectionComponent 
          icon={<FromIcon className={classes.icon}/>}
          name={'fromCurrency'}
          value={fromCurrency}
          currencySelectHandler={currencySelectHandler}
          currenciesList={currenciesList}/>
        <SelectionComponent 
          icon={<ToIcon className={classes.icon}/>}
          name={'toCurrency'}
          value={toCurrency}
          currencySelectHandler={currencySelectHandler}
          currenciesList={currenciesList}/>
        {fromCurrency === toCurrency && 
        <ListItem >
          <ListItemIcon><WarningTwoToneIcon color='secondary' className={classes.twoToned}/></ListItemIcon>
          <ListItemText primary="Change currency" />
        </ListItem>}
        {fromCurrency !== toCurrency && 
        <ListItem
          button
          onClick={() => handleClick({
            toCurrency:fromCurrency, 
            fromCurrency:toCurrency,
            setter:currencySelectHandler})}>
          <ListItemIcon><SwapVertIcon className={classes.icon}/></ListItemIcon>
          <ListItemText primary="Swap Currencies" />
        </ListItem>}
      </>
      )}
    </FormControl>
  </List>
)}
export {CurrencySelectionForm}