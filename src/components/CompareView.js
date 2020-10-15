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
    backgroundColor: '#222222',
  },
}));

export default function CompareView(props){
  const classes = useStyles();

  return(
    <List className={classes.CompareListItem} >
      <Grid container spacing={2} alignItems="center" >
        {(props.compareList).map((payload) => (
          <Grid item xs={12} alignItems="center" >
            <CompareListItem
              currency={payload.currency}
              primary={payload.value}/>
          </Grid>
      ))}
      </Grid>
    </List> 
  )
}