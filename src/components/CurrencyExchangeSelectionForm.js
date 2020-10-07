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
    flexGrow: 1,
    width: 240,
    padding: theme.spacing(2, 0),
  },
  selector: {
    color: theme.palette.text.secondary,
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    padding: theme.spacing(1),
    margin: theme.spacing(1,0),
    flexShrink: 0,
    whiteSpace: "nowrap",
  
    justifyContent: "flex-end",
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
    {/*       
        <Grid  container spacing={1} >
          <Grid item xs={6} spacing={3}className={classes.container}>

            <Grid item xs={7} className={classes.arrow}> */}
            <ListItem>
              <ListItemIcon>
                <ArrowBackIosIcon />
              </ListItemIcon>
           {/*  </Grid>  */}

          {/*   <Grid item xs={3}> */}
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
    {/*         </Grid>

          </Grid>
        </Grid>
 */}
{/*         <Grid  container spacing={1} >
          <Grid item>
          <ListItemIcon>
            <SwapVertIcon />  
          </ListItemIcon>
          </Grid>
        </Grid>
 */}

            <List>
              <ListItem
                button
                onClick={handleClick}
              >
                <ListItemIcon> 
                  <SwapVertIcon/>
                </ListItemIcon>
                <ListItemText primary="Swap Currencies" />
              </ListItem>
            </List>

{/*         <Grid  container spacing={1} >
          <Grid item xs={6} spacing={3} className={classes.container}>

            <Grid item xs={7} className={classes.arrow}> */}
            <ListItem>
              <ListItemIcon> 
                <ArrowForwardIosIcon/>
              </ListItemIcon>
         {/*    </Grid>

            <Grid item xs={3}> */}
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
       {/*      </Grid>

          </Grid>
        </Grid> */}
        </List>
    </FormControl>
    
  )
}