import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import {  } from './types'
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { handleChange, label } from '../helpers/inputAmountHelper'

const useStyles = makeStyles((theme) => ({
  TextField: {
    textAlign: 'center',
    padding: theme.spacing(2)
  }
}));
interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  console.log('delta',props)
  const { 
    inputRef, 
    onChange, 
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
      prefix="$"
    />
  );
}

export function InputAmountField({
  amount,
  setAmount,
  fromCurrency,
  drawer}) {
  const classes = useStyles();
  console.log('echo', amount, setAmount, fromCurrency, drawer)
  
return (
  <div className={classes.TextField}  >
    <TextField
      label= {label({drawer: drawer, fromCurrency: fromCurrency })}
      value={amount}
      onChange={(event) => handleChange({event: event, setAmount: setAmount})}
      name="amountField"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom}}/>
  </div>
);
}