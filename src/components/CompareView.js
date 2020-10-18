import React from 'react';
import CompareListItem from './CompareListItem'
import {
  Grid,
  List
} from '@material-ui/core';
export default function CompareView(props){

  return(
    <List >
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