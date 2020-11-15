import React from 'react';
import clsx from 'clsx';

import { handleChange, label } from '../helpers/inputAmountHelper'
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper'
import {
  Grid, 
  Card,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location

const useStyles = makeStyles((theme) => ({
  selectedSymbol: {
    marginRight: 16,
    color:'red'
  },
  notSelectedSymbol: {
    marginRight: 16,
  },
  Card:{
    borderRadius: 12,
  },
  ListItem:{
    backgroundColor: '#212121',
    padding: theme.spacing(1),
    textAlign: 'center',
    minHeight: 136,
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#ff8cb0",}
  },
  selected:{
    backgroundColor:'#009868',
    color: '#212121',
  },

}));


function NumberFormatCustom(props) {
  const { 
    inputRef, 
    onChange,
    id, 
    ...other 
  } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(amount) => {
        onChange({
          target: {
            value: amount.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix={data[id]['symbol_native']}
    />
  );
}

const gridBuilder = (payload) => {
  return <Grid item xs={3}> {payload} </Grid>
}

export function CompareListItem ({
  currencySelectHandler,
  fromCurrency,
  setAmount,
  currency,
  primary,
}) {
  const classes = useStyles();
  const CurrencySymbol = (currency) => {
    return (
      <Typography 
        variant='h5'
        className={classes.symbol} 
        color={fromCurrency!==currency && 'secondary'|| 'primary'}>
          {data[currency]['symbol_native']} 
      </Typography>
    )
  }
  
  return (
  <Card className={classes.Card}>
    <ListItem 
      button
      onClick={()=>currencySelectHandler(currency)}
      className={clsx(classes.ListItem,{
        [classes.selected]: (fromCurrency===currency), })}>
      <Grid container spacing={1} direction="row" justify="space-around" >
        {gridBuilder(
          iconHandler('compare', currency)
        )}
        {gridBuilder(
          <ListItemText>
            <Typography variant='h5'>
              {currency} 
            </Typography>
            <Typography >
              {data[currency]['name']}
            </Typography>
          </ListItemText>
        )}
        {gridBuilder(
          <div>
            {CurrencySymbol(currency)}
            <ListItemText primary={primary} />
          </div>
 /*          <TextField
            label= {currency}
            value={primary}
            onChange={(event) => handleChange({event: event, setAmount: setAmount})}
            name={currency}
            id={currency}
            InputProps={{
              inputComponent: NumberFormatCustom}}/> */
        )}
      </Grid>
    </ListItem>
  </Card>
  )
}

/*

  <div className={classes.TextField}  >
    <TextField
      label= {label({drawer: drawer, fromCurrency: fromCurrency })}
      value={amount}
      onChange={(event) => handleChange({event: event, setAmount: setAmount})}
      name="amountField"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom,}}/>
  </div>
*/
