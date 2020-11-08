import React from 'react';
import { CompareListItem } from './CompareListItem'
import {
  Grid,
  List
} from '@material-ui/core';
export function CompareView(props){

  return(
    <List >
      <Grid container spacing={2} alignItems="center" >
        {(props.compareList).map((payload) => (
          <Grid item xs={12} key={payload.currency} >
            <CompareListItem
              currency={payload.currency}
              primary={payload.value}/>
          </Grid>
      ))}
      </Grid>
    </List> 
  )
}