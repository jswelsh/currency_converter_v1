/* import React from 'react';
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
      icon={<Compare />} />
  </List>  
  )
} */

import React, {FC} from 'react';
//import { ITabSelectorProps } from './types'
import { 
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import History from '@material-ui/icons/Timeline';
import Converter from '@material-ui/icons/Transform';
import Compare from '@material-ui/icons/Sort';

/* function ListItemLink(
  modeHandler: any,
  primary: string,
  icon: Object,
  mode: string
) {

  return (
    <ListItem
      button
      selected={mode === primary}
      onClick={() =>{
        modeHandler(primary) }}>
      {<ListItemIcon>{icon}</ListItemIcon> }
      <ListItemText primary={primary} />
    </ListItem>
  );
}
 */
interface ICompareListItem {
  currency: string
  value: number }

interface ITabSelectorProps {
  compareListHandler(fromCurrency: string, amount: number): void 
  compareList: Array<ICompareListItem>
  modeHandler(mode: string): void,
  mode: string
}

const TabSelector: FC<ITabSelectorProps> = ({
  modeHandler,
  mode
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

  </List>  
)}
export { TabSelector }