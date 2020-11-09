import { FormControl } from '@material-ui/core';
import React from 'react';
import {  
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';

export function Button({ 
  primary, 
  handleSubmit 
  }) {
  return (
  <FormControl>
    <ListItem
      
      button
      onClick={handleSubmit}>
      <ListItemIcon >
        <Exchange color={'secondary'}/>
      </ListItemIcon>
      <ListItemText 
      color='#000'
        primary={primary}/>
    </ListItem>
  </FormControl>
  )
}