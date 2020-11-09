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

const drawerWidth = 240;
const drawerClosed = 100;

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
/*   subheader: {
    fontSize: 20,
    marginBottom: '0.875em',
  }, */
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
  drawerClose: {
    marginLeft: drawerClosed,
    marginLeft: drawerClosed,
    width: `calc(93% - ${drawerClosed}px)`,
 /*    maxWidth:"1280px", */
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerOpen: {
    marginLeft: drawerWidth,
    width: `calc(93% - ${drawerWidth}px)`,
/*     maxWidth:"960px", */
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})
  },
}));

export function ConvertView(props){
  const classes = useStyles();
  const drawerClosed = 100;

  const { 
    toStart,
    converted,
    fromCurrency,
    toCurrency 
  } = props.result
  return(

  
    <Container  
      component="main"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.opendrawer,
        [classes.drawerClose]: !props.opendrawer
      })}
    >
    <Grid container spacing={5} alignItems="flex-end">
      {[[
        fromCurrency, 
        toStart], [
        toCurrency,
        converted]].map(([currency,amount]) => (
        <Grid item key={currency} sm={12} md={12} lg={6}>
          <Card className={classes.card}>
            <CardHeader
              title={currency && data[currency]['name']}
              titleTypographyProps={{ align: 'left',variant: "h4" }}
              subheader= {currency}
              subheaderTypographyProps={{ align: 'left'}}
              className={classes.cardHeader}
              avatar={ iconHandler('converter', currency)}
              />
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}