import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IInputAmountFieldProps } from './types'
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { handleChange, label } from '../helpers/inputAmountHelper'

const useStyles = makeStyles((theme) => ({
  TextField: {
    textAlign: 'center',
    padding: theme.spacing(2)
  }
}));

interface INumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: number } }) => void;
  name: string;
}

function NumberFormatCustom(props: INumberFormatCustomProps) {

  const { 
    inputRef, 
    onChange,
    name,
    ...other 
  } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(amount) => {
        onChange({
          target: {
            value: parseInt(amount.value, 10),
            name: name}
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

const InputAmountField: FC<IInputAmountFieldProps> = ({
  fromCurrency,
  setAmount,
  opendrawer,
  amount,
}) => {
  const classes = useStyles();

return (
  <div className={classes.TextField}  >
    <TextField
      label= {label({drawer: opendrawer, fromCurrency: fromCurrency })}
      value={amount}
      onChange={(event) => handleChange({event: event, setAmount: setAmount})}
      name="amountField"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom as any}}/>
  </div>
);}
export { InputAmountField }