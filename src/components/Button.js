import { FormControl } from '@material-ui/core';
import React from 'react';
import {  
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';

export default function Button(props) {
  const { 
    primary, 
    handleSubmit 
  } = props
  return (
    <FormControl>
      <ListItem
        
        button
        onClick={handleSubmit}>
        <ListItemIcon>
          <Exchange />
        </ListItemIcon>
        <ListItemText 
          primary={primary}/>
      </ListItem>
    </FormControl>
  )
}