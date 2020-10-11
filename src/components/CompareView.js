import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompareListItem from './CompareListItem'
import {
  Grid,
  List
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  CompareListItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CompareView(props){
  const classes = useStyles();

  return(
    <List>
      <Grid container spacing={2} alignItems="center" >
        {/* <Paper className={classes.paper}>xs=12</Paper> */}
      {(props.compareList).map((payload) => (
        <Grid item xs={12} alignItems="center" >
          <CompareListItem
          currency={payload.currency}
          primary={payload.value}
          />
        </Grid>
      ))}
      </Grid>
    </List> 
  )
}