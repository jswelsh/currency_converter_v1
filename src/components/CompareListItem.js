import React, { useState } from 'react';
import { 
  FormControl, 
  List,
  ListItem,
  ListItemText,
  ListItemIcon, 
} from '@material-ui/core';


export default function CompareListItem (props) {
  const {/* icon, */ primary, value} = props;

  return (
    <ListItem>
{/*       <ListItemIcon>
        {icon}
      </ListItemIcon> */}
      <ListItemText primary={primary}/>
      <ListItemText primary={value} />
    </ListItem>
  )
}