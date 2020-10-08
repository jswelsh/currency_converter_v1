import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Select, 
  MenuItem, 
  Grid, 
  FormControl, 
  List,
  ListItem,
  ListItemText,
  ListItemIcon, 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SwapVertIcon from '@material-ui/icons/SwapVert';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  selector: {

  },
  container: {

  },
  button:{
  }
}));

export default function CurrencyExchangeSelectionForm(props) {
  const classes = useStyles()

  const handleClick = () => {
      const [newFromCur, newToCur] = [props.toCurrency, props.fromCurrency]
      props.setFromCurrency(newFromCur)
      props.setToCurrency(newToCur)
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(name === "fromSelector"){
      props.setFromCurrency(value)
    } else if(name === "toSelector"){
      props.setToCurrency(value)
    }
  }

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon /* className={props.className + " " + minimalSelectClasses.icon} *//>
    )};
  
  return (

    <FormControl className={classes.root}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowBackIosIcon />
          </ListItemIcon>
          <Select
            className={classes.selector}
            disableUnderline
            name="fromSelector"
            IconComponent={iconComponent}
            value={props.fromCurrency}
            onChange={handleChange}
          >
            {props.currenciesList.map(currency => (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            ))}
          </Select>
        </ListItem>
        <ListItem
          button
          onClick={handleClick}
        >
          <ListItemIcon> 
            <SwapVertIcon/>
          </ListItemIcon>
          <ListItemText primary="Swap Currencies" />
        </ListItem>
        <ListItem>
          <ListItemIcon> 
            <ArrowForwardIosIcon/>
          </ListItemIcon>
          <Select
            className={classes.selector}
            disableUnderline
            name="toSelector"
            IconComponent={iconComponent}
            value={props.toCurrency}
            onChange={handleChange}
          >
            {props.currenciesList.map(currency => (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            ))}
          </Select>
        </ListItem>
      </List>
    </FormControl>
    
  )
}