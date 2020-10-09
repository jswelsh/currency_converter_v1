import { func } from 'prop-types';
import React, { useState} from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon, 
} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';

function listItemBuilder(props) {

  const {icon, primary, value} = props;

  return (
   
    <ListItem>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={primary}/>
      <ListItemText primary={value} />
    </ListItem>
  

  )
}

ListItemBuilder.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default function compareView(){

  return(
    <List>
      {props.currenciesList.map((text) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
}