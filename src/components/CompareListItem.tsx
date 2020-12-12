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
      backgroundColor: "#f48fb1",}
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
  compareListHandler,
  fromCurrency,
  currency,
  primary,
  amount
}) => {

  const onClick = () => {
    compareListHandler(currency, amount)
    currencySelectHandler(currency)
  }
  const classes = useStyles()
  const CurrencySymbol = (currency: string) => {
    return (
      <Typography 
        variant='h4'
        color={(fromCurrency!==currency && 'primary') || 'secondary'}>
          {data[currency]['symbol_native']} 
      </Typography>
    )
  }
  
  return (
  <Card className={classes.Card}>
    <ListItem 
      button
      onClick={()=>onClick()}
      className={clsx(classes.ListItem,{
        [classes.selected]: (fromCurrency===currency), })}>
      <Grid container spacing={1} direction="row" justify="space-around" >
        {gridBuilder(
          iconHandler({
            mode:'compare', 
            currency:currency})
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

export default React.memo(CompareListItem) 