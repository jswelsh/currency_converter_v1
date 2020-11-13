import React from 'react';
import clsx from 'clsx';

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
  symbol: {
    marginRight: 16
  },
  Card:{
    borderRadius: 12,
  },
  selected:{
    backgroundColor:'#ff8cb0',
    color: '#212121',
    padding: theme.spacing(1),
    textAlign: 'center',
    minHeight: 136,
  },
  notSelected:{
    backgroundColor: '#212121',
    padding: theme.spacing(1),
    textAlign: 'center',
    minHeight: 136,
  }
}));

const gridBuilder = (payload) => {
  return <Grid item xs={3}> {payload} </Grid>
}

export function CompareListItem ({
  fromCurrency,
  currency,
  primary, 
  }) {
  const classes = useStyles();
  const CurrencySymbol = (currency) => {
    return (
      <Typography variant='h5' className={classes.symbol} color={'secondary'}>{data[currency]['symbol_native']} </Typography>
    )
  }
  
  return (
  <Card className={classes.Cardgit}>
    <ListItem 
/*     selected={true}
      className={ (fromCurrency===currency) ? 'selected' : 'notSelected' } */
    className={clsx({
      [classes.selected]: (fromCurrency===currency), 
      [classes.notSelected]: !(fromCurrency===currency)})}>
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
          <div className={classes.amount}>
            {CurrencySymbol(currency)}
            <ListItemText primary={primary} />
          </div>
        )}
      </Grid>
    </ListItem>
  </Card>
  )
}