import React from 'react';
import { CompareListItem } from './CompareListItem'
import {
  Grid,
  List
} from '@material-ui/core';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 280;
const drawerClosed = 100;

const useStyles = makeStyles((theme) => ({
  drawerClose: {  
		marginLeft: drawerClosed,
    marginRight: 'min(100px, 15%)',
    marginLeft: 'min(100px, 15%)',
    width: `calc(95% - ${drawerClosed}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen})
  },
  drawerOpen: {
    marginLeft: drawerWidth,
    width: `calc(95% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})
  },
  ListItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#212121',
    minHeight: 100
  },
  symbol: {
    marginRight: 16
  }
}));

export function CompareView({
  opendrawer, 
  compareList,
  fromCurrency}){
  const classes = useStyles();
  const list = compareList.compareList
  return(
  <List         
    className = {clsx(classes.drawer, {
      [classes.drawerOpen]: opendrawer,
      [classes.drawerClose]: !opendrawer})} >
    <Grid container spacing={2} alignItems="center" >
      {(list).map((payload) => (
      <Grid item xs={4} key={payload.currency} >
        <CompareListItem
          fromCurrency={/* compareList.selected */fromCurrency}
          currency={payload.currency}
          primary={payload.value}
          />
      </Grid>))}
    </Grid>
  </List> 
  )
}