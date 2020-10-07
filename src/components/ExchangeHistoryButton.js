import { FormControl } from "@material-ui/core";
import React from "react";
import {  
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';

export default function ExchangeHistoryButton(props) {

  return (
    <FormControl>
      <ListItem
        button
        onClick={props.handleSubmit}
      >
        <ListItemIcon>
          <Exchange />
        </ListItemIcon>
        <ListItemText primary={'Exchange'} />
      </ListItem>

    </FormControl>
  )
}
