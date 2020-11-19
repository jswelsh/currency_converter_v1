import React, {FC} from 'react';
import {  
  ListItemText,
  ListItemIcon,
  FormControl,
  ListItem,
} from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';

interface ButtonProps {
  handleSubmit(): void;
  primary: string;
}

const Button: FC<ButtonProps> = ({ 
  primary,
  handleSubmit
  }) => {

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

export {Button}