import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location

const useStyles = makeStyles((theme) => ({
  TextField: {
    textAlign: 'center',
  }
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  console.log(other)




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
/* NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}; */

export default function InputAmountField(props) {
  const classes = useStyles();
  const [amount, setamount] = React.useState(1);

  const handleChange = (event) => {
    setamount( 
      event.target.value
    );
  };

return (
  <div className={classes.TextField}  >
    <TextField
      label={`Amount in ${data[props.fromCurrency]['name']}s`}
      value={amount}
      onChange={handleChange}
      name="amountField"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  </div>

);
}