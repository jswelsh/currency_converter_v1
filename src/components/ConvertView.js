import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper'
import {
  Card,
  Grid,
  Typography,
  Container,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const data = require('../helpers/currency.json'); // forward slashes will depend on the file location
const useStyles = makeStyles((theme) => ({
  card: {
    color:'#fff',
    borderRadius: 12,
    minWidth: 400,
    margin:'auto',
    textAlign: 'center',
  },
  cardHeader: {
    backgroundColor:'secondary'},
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
    marginBottom: '0.875em',
  },
  secondary: {
    fontSize: 12,
    fontWeight: 500,
    margin: 0,
  },
  primary: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
  fromBox: {

  },
  toBox: {
    
  },
  img: {
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export function ConvertView(props){
  const classes = useStyles();

  const { 
    toStart,
    converted,
    fromCurrency,
    toCurrency 
  } = props.result
  return(


    <Container maxWidth="md" component="main">
    <Grid container spacing={5} alignItems="flex-end">
      {[[
        fromCurrency, 
        toStart], [
        toCurrency,
        converted]].map(([currency,amount]) => (
        <Grid item key={currency} sm={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              title={currency && data[currency]['name']}
              titleTypographyProps={{ align: 'right',variant: "h4" }}
/*               subheader= {currency}
              subheaderTypographyProps={{ align: 'center' }} */
              className={classes.cardHeader}
              avatar={ iconHandler('converter', currency)}
              />
            <CardContent>
              <Grid container justify="center">
                <Grid item >
                <Typography component="h3" variant="h3" color="secondary">
                {currency && data[currency]['symbol_native'] }
                </Typography>
                </Grid>
                <Grid item >
                <Typography variant="h3" color="primary">
                  {amount}
                </Typography>
                </Grid>
              </Grid>
              <Grid container justify="center">
              <Grid item>
                <Typography variant="h5" color="primary">
                  {currency}
                </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
 /*    <Card className={clsx(classes.card)} >
        


    <Grid container spacing={2} >

        <Grid container item xs  spacing={2}>
          <Grid item xs>
            <Typography  variant="subtitle1">
              {fromCurrency && data[fromCurrency]['name']}
            </Typography>
              { iconHandler('converter', fromCurrency)}
            <Typography variant="body2" color="textSecondary">
              ID: 1030114
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card> */
  )
}



/*       <Grid 
      container
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}>

      <Grid container
        className={clsx(classes.fromBox)}>
        <Grid>
          <p className={classes.primary}>{
          fromCurrency && 
            data[fromCurrency]['name']}</p>
          { iconHandler('converter', fromCurrency)}
        </Grid>
        <Grid >
          <p className={classes.primary}>{
          fromCurrency && 
            data[fromCurrency]['symbol_native'] + toStart}</p>
          <p className={classes.secondary}> { fromCurrency}</p>
        </Grid>
      </Grid>
 */
/*     <Card 
      className={clsx(classes.card)} 
      display={'flex'}>
        
      <Box 
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}>
      <Box 
        className={clsx(classes.fromBox)} 
        display={'flex'}  
        flexDirection={'column'}>
        <Box p={2}>
          <p className={classes.primary}>{
          fromCurrency && 
            data[fromCurrency]['name']}</p>
          { iconHandler('converter', fromCurrency)}
        </Box>
        <Box p={2}>
          <p className={classes.primary}>{
          fromCurrency && 
            data[fromCurrency]['symbol_native'] + toStart}</p>
          <p className={classes.secondary}> { fromCurrency}</p>
        </Box>
      </Box>
      <Box 
        display={'flex'}  
        alignItems={'center'} >
      <SwapHorizIcon 
        fontSize="large"/>
      </Box>
      <Box 
        className={clsx(classes.toBox)} 
        display={'flex'} 
        flexDirection={'column'}>
        <Box p={2}>
          <p className={classes.primary}>{
          toCurrency && 
            data[toCurrency]['name']}</p>
          {iconHandler('converter', toCurrency)}
        </Box>

        <Box p={2}>
          <p className={classes.primary}>{
          toCurrency && 
            data[toCurrency]['symbol_native'] + converted}</p>
          <p className={classes.secondary}> {toCurrency}</p>
        </Box>
      </Box>

    </Box>
  </Card> */