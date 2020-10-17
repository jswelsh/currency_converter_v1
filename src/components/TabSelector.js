import React from 'react';
import { 
  List,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import History from '@material-ui/icons/Timeline';
import Converter from '@material-ui/icons/Transform';
import Compare from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';

function ListItemLink(props) {

  const { 
    icon, 
    primary, 
    modeHandler, 
    mode 
  } = props;

  return (
    <ListItem
      button
      selected={mode === primary}
      onClick={() =>{
        modeHandler(primary) 
      }}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

export default function TabSelector(props) {

  const commonProps = (payload) => ({
    mode:props.mode,
    modeHandler: props.modeHandler,
    primary: payload 
  })

  return (
    <List aria-label="currency exchange views">
      <ListItemLink

        {...commonProps('Converter')}
        icon={<Converter />} />
      <ListItemLink 
        {...commonProps('History')}
        icon={<History />} />
      <ListItemLink 
        {...commonProps('Compare')}
        icon={<Compare />} 
        compare={{
          compareListHandler:props.compareListHandler,
          compareList:props.compareList
        }}
      />
    </List>  
  )
}