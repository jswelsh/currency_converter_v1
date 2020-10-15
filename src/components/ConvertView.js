import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompareListItem from './CompareListItem'
import {
  Grid,
  List,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#222222',
    flexGrow: 1,
  },
  results: {
  },
}));

export default function ConvertView(props){
  const classes = useStyles();
  const { 
    toStart,
    converted,
    fromCurrency,
    toCurrency 
  } = props.result

  return(
    <Grid item xs={12} alignItems="center" >
      <Typography>
        {toStart} {fromCurrency} converts to {converted} {toCurrency}
      </Typography>
    </Grid>
  )
}
