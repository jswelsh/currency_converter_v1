import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

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
            name: props.name,
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

export default function InputAmountField() {
  const classes = useStyles();
  const [amount, setamount] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });

  const handleChange = (event) => {
    setamount({
      ...amount,
      [event.target.name]: event.target.value,
    });
  };

return (
  <div className={classes.root}>
    <TextField
      label="Input amount you want converted"
      value={amount.numberformat}
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