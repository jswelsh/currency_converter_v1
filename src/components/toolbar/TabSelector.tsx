import React, {FC} from 'react';
import { ITabSelectorProps } from '../types'
import { 
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import History from '@material-ui/icons/Timeline';
import Converter from '@material-ui/icons/Transform';
import Compare from '@material-ui/icons/Sort';

const TabSelector: FC<ITabSelectorProps> = ({
  modeHandler,
  mode,
}) => {

return (
  <List aria-label="currency exchange views">
    <ListItem
      button
      selected={mode === 'Converter'}
      onClick={() =>{
        modeHandler('Converter') }}>
      {<ListItemIcon><Converter /></ListItemIcon> }
      <ListItemText primary={'Converter'} />
    </ListItem>
    <ListItem
      button
      selected={mode === 'History'}
      onClick={() =>{
        modeHandler('History') }}>
      {<ListItemIcon><History /></ListItemIcon> }
      <ListItemText primary={'History'} />
    </ListItem>
    <ListItem
      button
      selected={mode === 'Compare'}
      onClick={() =>{
        modeHandler('Compare') }}>
      {<ListItemIcon><Compare /></ListItemIcon> }
      <ListItemText primary={'Compare'} />
    </ListItem>
    <Link to="/signin">
    <ListItem
      button
      selected={mode === ''}
      onClick={() =>{
        modeHandler('') }}>
      {<ListItemIcon><Compare /></ListItemIcon> }
      <ListItemText primary={'SignIn'} />
    </ListItem>
    </Link>
  </List>  
)}
export { TabSelector }