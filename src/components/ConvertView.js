import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { iconHandler } from '../helpers/compareHelper'
import {
  Box,
  Card,
  Divider,
  CardContent,
} from '@material-ui/core';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const data = require('../helpers/currency.json'); // forward slashes will depend on the file location
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#222222',
    flexGrow: 1,
  },
  results: {
  },
  card: {
    borderRadius: 12,
    minWidth: 500,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    /* color: theme.grey[500], */
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    /* color: theme.grey[500], */
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
  fromBox: {
   /*  marginRight:50, */
    marginLeft:10
  },
  toBox: {
    marginRight:10,
   /*  marginLeft:50 */
    
  }
}));

export default function ConvertView(props){
  const classes = useStyles();

  const { 
    toStart,
    converted,
    fromCurrency,
    toCurrency 
  } = props.result
  console.log('hi',fromCurrency)

  return(

    <Card className={clsx(classes.card)} display={'flex'}   >
      <Box display={'flex'}  flexDirection={'row'} justifyContent={'space-between'}>

      <Box className={clsx(classes.fromBox)} display={'flex'}  flexDirection={'column'} /*  alignItems={'center'} */>
        <Box p={2} flex={'auto'} >
          <p className={classes.statValue}>{fromCurrency && data[fromCurrency]['name']}</p>
          {/* <p className={classes.statValue}>6941</p> */}
          {fromCurrency && iconHandler('converter', fromCurrency)}
        </Box>
        <Box p={2} flex={'auto'} >
          <p className={classes.statValue}>{toStart && toStart}</p>
          <p className={classes.statLabel}> {fromCurrency && fromCurrency}</p>
        </Box>
      </Box>

      <Box display={'flex'}  alignItems={'center'} >
      <SwapHorizIcon fontSize="large"/>
      </Box>

      <Box className={clsx(classes.toBox)} display={'flex'} flexDirection={'column'}>
        <Box p={2} flex={'auto'} >
          <p className={classes.statValue}>{toCurrency && data[toCurrency]['name']}</p>
          {toCurrency && iconHandler('converter', toCurrency)}
        </Box>

        <Box p={2} flex={'auto'} >
          <p className={classes.statValue}>{converted && converted}</p>
          <p className={classes.statLabel}> {toCurrency && toCurrency}</p>
        </Box>
      </Box>
      
    </Box>
  </Card>
  )
}
/*     
<Grid item xs={12} alignItems="center" >
      <Typography>
        {toStart} {fromCurrency} converts to {converted} {toCurrency}
      </Typography>
    </Grid> */

    /* 
    iconHandler('compare', props.currency)
    */

    /* 
    
    import { iconHandler } from '../helpers/compareHelper'
iconHandler('compare', props.currency)
    */