import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper'
import {
  Grid, 
  Paper,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location

//based off of 

const useStyles = makeStyles((theme) => ({

  ListItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#212121',
    minHeight: 100
  },
  symbol: {
    marginRight: 16
  },
}));

const gridBuilder = (payload) => {
  return <Grid item xs={3}> {payload} </Grid>
}

export function CompareListItem (props) {
  const classes = useStyles();
  const {
    primary, 
    currency
  } = props;
  const CurrencySymbol = (currency) => {
    return (
      <Typography variant='h5' className={classes.symbol} color={'secondary'}>{data[currency]['symbol_native']} </Typography>
    )
  }

  return (

      < Paper>
        <ListItem className={classes.ListItem} >
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
      </Paper>


  )
}