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
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  selectedSymbol: {
    marginRight: 16,
    color:'red'
  },
  notSelectedSymbol: {
    marginRight: 16,
  },
  Card:{
    borderRadius: 12,
  },
  ListItem:{
    "&:hover": {
   /*    textDecoration: "none", */
      backgroundColor: "#ff8cb0",}
  },
  selected:{
    backgroundColor:'#009868',
    color: '#212121',
  },
}));

const TabSelector: FC<ITabSelectorProps> = ({
  modeHandler,
  mode,
}) => {

const classes = useStyles()

return (
  <List aria-label="currency exchange views">
    <Link to="/converter">
      <ListItem
        button
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'Converter'), })}
        onClick={() =>{
          modeHandler('Converter') }}>
        {<ListItemIcon><Converter /></ListItemIcon> }
        <ListItemText primary={'Converter'} />
      </ListItem>
    </Link>
    <Link to="/history">
      <ListItem
        button
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'History'), })}
        onClick={() =>{
          modeHandler('History') }}>
        {<ListItemIcon><History /></ListItemIcon> }
        <ListItemText primary={'History'} />
      </ListItem>
    </Link>
    <Link to="/compare">
      <ListItem
        button
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'Compare'), })}
        onClick={() =>{
          modeHandler('Compare') }}>
        {<ListItemIcon><Compare /></ListItemIcon> }
        <ListItemText primary={'Compare'} />
      </ListItem>
    </Link>
    <Link to="/signin">
      <ListItem
        button
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'SignIn'), })}
        onClick={() =>{
          modeHandler('SignIn') }}>
        {<ListItemIcon><PermIdentityIcon /></ListItemIcon> }
        <ListItemText primary={'SignIn'} />
      </ListItem>
    </Link>
  </List>  
)}
export { TabSelector }