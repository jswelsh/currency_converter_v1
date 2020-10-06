import { setStyle } from "@amcharts/amcharts4/.internal/core/utils/DOM";
import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Select, MenuItem, Grid, FormControl, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Exchange from '@material-ui/icons/Shuffle';

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

export default function CurrencyForm(props) {
  const classes = useStyles()
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
/*   <FormControl>
    
    <Select
      className={classes.selector}
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
    <Select
      className={classes.selector}
      disableUnderline
      name="toSelector"
      IconComponent={iconComponent}
      icon="aligned=left"
      value={toCurrency}
      onChange={handleChange}
    >
      {props.currenciesList.map(currency => (
        <MenuItem key={currency} value={currency}>{currency}</MenuItem>
      ))}
    </Select>
    <Button 
      className={classes.buttoner}
      variant="contained"   
      disableElevation
      color="primary"
      type="submit" 
      value="Submit" 
      size="large"
      onClick={handleSubmit}>
        SUBMIT
    </Button>
  </FormControl> */
    
    /*   
    <FormControl>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3} alignItems="center"
          >
        <Grid  item xs={4} >
          <Select
            className={classes.selector}
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
        <Grid  item xs={3} >
        <Button 
          className={classes.buttoner}
          variant="contained"   
          disableElevation
          color="primary"
          type="submit" 
          value="Submit" 
          size="large"
          onClick={handleSubmit}>
            SUBMIT

        </Button> 
        </Grid>
        <Grid  item xs={4}>
          <Select
            className={classes.selector}
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
     */
    <FormControl className={classes.root}>
          
        <Grid  container spacing={1} >
          <Grid item xs={6} spacing={3}className={classes.container}>

            <Grid item xs={7} className={classes.arrow}>
              <ListItemIcon>
                <ArrowBackIosIcon />
              </ListItemIcon>
            </Grid> 

            <Grid item xs={3}>
              <Select
                className={classes.selector}
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

          </Grid>
        </Grid>

        <Grid  container spacing={1} >
          <Grid item xs={6} spacing={3} className={classes.container}>

            <Grid item xs={7} className={classes.arrow}>
              <ListItemIcon> 
                <ArrowForwardIosIcon/>
              </ListItemIcon>
            </Grid>

            <Grid item xs={3}>
              <Select
                className={classes.selector}
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
      <ListItem
        button
        onClick={handleSubmit}
      >
        <ListItemIcon>
          <Exchange />
        </ListItemIcon>
        <ListItemText primary={'Exchange'} />
      </ListItem>


  {/*       <Button 
          className={classes.button}
          style={{align: 'left'}}

          fullWidth="true"
          variant="contained"   
          disableElevation
          color="primary"
          type="submit" 
          value="Submit" 
          onClick={handleSubmit}>
        EXCHANGE
        </Button>  */}
      {/*   </Grid> */}
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