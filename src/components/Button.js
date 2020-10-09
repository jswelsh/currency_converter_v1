import { FormControl } from '@material-ui/core';
import React from 'react';
import {  
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';

/* const handleSubmit = (event) => {
  event.preventDefault();
  props.convertHistoryHandler(
    fromCurrency, 
    toCurrency, 
    dateRange
    )
}

function buttonBuilder(mode) {
  const primary = 'Exchange'
  const onClick = 
  (mode === 'History')
   {primary: primary, onClick: onClick}
} */

export default function Button(props) {
  const { primary, handleSubmit } = props
  return (
    <FormControl>
      <ListItem
        button
        onClick={handleSubmit}
      >
        <ListItemIcon>
          <Exchange />
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </FormControl>
  )
}