import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompareListItem from './CompareListItem'
import {
  Grid,
  List
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

  return(
    <List className={classes.CompareListItem} >
      <Grid container spacing={2} alignItems="center" >
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