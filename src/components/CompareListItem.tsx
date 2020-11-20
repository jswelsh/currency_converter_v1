import React, {FC} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ICompareListItemProps } from './types'
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
  selectedSymbol: {
    marginRight: 16,
    color:'red'
  },
  notSelectedSymbol: {
    marginRight: 16,
  },
  Card:{
    borderRadius: 12,
  },
  ListItem:{
    backgroundColor: '#212121',
    padding: theme.spacing(1),
    textAlign: 'center',
    minHeight: 136,
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#ff8cb0",}
  },
  selected:{
    backgroundColor:'#009868',
    color: '#212121',
  },
}));


const gridBuilder = (props: object) => {
  return <Grid item xs={3}> {props} </Grid>
}

const CompareListItem: FC<ICompareListItemProps> = ({
  currencySelectHandler,
  fromCurrency,
  currency,
  primary,
}) => {

  const classes = useStyles()
  const CurrencySymbol = (currency: string) => {
    return (
      <Typography 
        variant='h5'
        color={(fromCurrency!==currency && 'secondary')|| 'primary'}>
          {data[currency]['symbol_native']} 
      </Typography>
    )
  }
  
  return (
  <Card className={classes.Card}>
    <ListItem 
      button
      onClick={()=>currencySelectHandler(currency)}
      className={clsx(classes.ListItem,{
        [classes.selected]: (fromCurrency===currency), })}>
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
          <div>
            {CurrencySymbol(currency)}
            <ListItemText primary={primary} />
          </div>
        )}
      </Grid>
    </ListItem>
  </Card>
  )
}

export {CompareListItem}