import React from 'react';
import { 
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import History from '@material-ui/icons/Timeline';
import Converter from '@material-ui/icons/Transform';
import Compare from '@material-ui/icons/Sort';


function ListItemLink({ 
  modeHandler, 
  primary, 
  icon, 
  mode 
}) {

  return (
    <ListItem
      button
      selected={mode === primary}
      onClick={() =>{
        modeHandler(primary) }}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

export function TabSelector({
  compareListHandler,
  compareList,
  modeHandler,
  mode
}) {

  const commonProps = (payload) => ({
    mode:mode,
    modeHandler: modeHandler,
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
        compareListHandler:compareListHandler,
        compareList:compareList}}/>
  </List>  
  )
}