import { setStyle } from "@amcharts/amcharts4/.internal/core/utils/DOM";
import React, { useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/* import { Select } from "@material-ui/core"; */



export default function CurrencyForm(props) {
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(name === "fromSelector"){
      setFromCurrency(value)
    } else if(name === "toSelector"){
      setToCurrency(value)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.convertHistoryHandler(fromCurrency, toCurrency)
  }
  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon /* className={props.className + " " + minimalSelectClasses.icon} *//>
    )};
  
  return (
  <FormControl>
    <Grid container spacing={1}>
      <Grid container item xs={24} spacing={3}>
        <Grid  item xs={4} >
          <Select
            disableUnderline
            name="fromSelector"
            IconComponent={iconComponent}
            value={fromCurrency}
            onChange={handleChange}
          >
            {props.currenciesList.map(currency => (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid  item xs={4}>
          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </Grid>
        <Grid  item xs={4}>
          <Select
            disableUnderline
            name="toSelector"
            IconComponent={iconComponent}
            value={toCurrency}
            onChange={handleChange}
          >
            {props.currenciesList.map(currency => (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Grid>
  </FormControl>
    
  )
}

/* <form>
      <select
        name="from"
        //onChange={e => props.selectHandler(e)}
        onChange={e => props.selectHandler(e)}
        value={props.fromCurrency}
      >
        {props.currenciesList.map(currency => (
          <option 
            key={currency}>
            {currency}
          </option>
        ))}
      </select>
      <div>
        <button 
          name="getHistory" 
          //value="getHistory"  
          onClick={() => props.convertHistoryHandler()}
        > Get History </button>
      </div>
      <select
        name="to"
        onChange={e => props.selectHandler(e)}
        value={props.toCurrency}
      >
        {props.currenciesList.map(currency => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </form> */