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
/* import SwapHorizIcon from '@material-ui/icons/SwapHoriz'; */

const drawerWidth = 240;
const drawerClosed = 100;

const data = require('../helpers/currency.json'); // forward slashes will depend on the file location
const useStyles = makeStyles((theme) => ({

  card: {
    color:'#fff',
    borderRadius: 12,
    margin:'auto',
    minWidth:400,
  },
  container:{
    alignContent:'center'
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
  drawerClose: {
    marginLeft: drawerClosed,
    width: `calc(95% - ${drawerClosed}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerOpen: {
    marginLeft: drawerWidth,
    width: `calc(95% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})
  },
}));

export function ConvertView({
  opendrawer,
  fromCurrency,
  toCurrency,
  toStart,
  converted,
  fromIntro,
  toIntro,
  recentRateHistory}){
  const classes = useStyles();
  console.log(recentRateHistory)
  return(
  <Container className={classes.Container}>
    <Container  
      component="main"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: opendrawer,
        [classes.drawerClose]: !opendrawer})}>
    <Grid container spacing={5}>
    {[
    [fromCurrency, toStart, fromIntro], 
    [toCurrency, converted, toIntro]].map((
    [currency, amount, intro]) => (
      <Grid item spacing={3} key={currency} sm={12} md={12} lg={6}>
        <Card className={classes.card} >
          <CardHeader
            title={currency && data[currency]['name']}
            titleTypographyProps={{ align: 'left',variant: "h4" }}
            subheader= {currency}
            subheaderTypographyProps={{ align: 'left'}}
            className={classes.cardHeader}
            avatar={ iconHandler('converter', currency)}/>
          <CardContent>
            <Grid container justify="center">
              <Grid item >
              <Typography component="h2" variant="h2" color="secondary">
              {currency && data[currency]['symbol_native'] }
              </Typography>
              </Grid>
              <Grid item >
              <Typography variant="h2" color="primary">
                {amount}
              </Typography>
              </Grid>

{/*               
              <Typography variant="h6" color="primary">
                {intro}
              </Typography> */}
            </Grid>
          </CardContent>
        </Card>
      </Grid>))}
    </Grid>
    </Container>
  </Container>
  )
}