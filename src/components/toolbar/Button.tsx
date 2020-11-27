import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IButtonProps } from '../types'
import {  
  ListItemText,
  ListItemIcon,
  FormControl,
  ListItem,
} from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';


const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  }
}));

const Button: FC<IButtonProps> = ({ 
  primary,
  handleSubmit
}) => {
  const classes = useStyles();

  return (
  <FormControl>
    <ListItem
      button
      onClick={handleSubmit}>
      <ListItemIcon >
        <Exchange className={classes.icon}/>
      </ListItemIcon>
      <ListItemText 
      color='#000'
        primary={primary}/>
    </ListItem>
  </FormControl>
  )
}

export {Button}