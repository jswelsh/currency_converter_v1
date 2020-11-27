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
/* import PermIdentityIcon from '@material-ui/icons/PermIdentity'; */
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  },
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
      backgroundColor: '#ff8cb0',}
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
      <ListItem
        button
        component={Link}
        to={'/converter'}
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'Converter'), })}
        onClick={() =>{
          modeHandler('Converter') }}>
        {<ListItemIcon><Converter className={classes.icon}/></ListItemIcon> }
        <ListItemText primary={'Converter'} />
      </ListItem>
      <ListItem
        button
        component={Link}
        to={'/history'}
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'History'), })}
        onClick={() =>{
          modeHandler('History') }}>
        {<ListItemIcon><History className={classes.icon}/></ListItemIcon> }
        <ListItemText primary={'History'} />
      </ListItem>
      <ListItem
        button
        component={Link}
        to={'/compare'}
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'Compare'), })}
        onClick={() =>{
          modeHandler('Compare') }}>
        {<ListItemIcon><Compare className={classes.icon}/></ListItemIcon> }
        <ListItemText primary={'Compare'} />
      </ListItem>
      <ListItem
        button
        component={Link}
        to={'/signin'}
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'SignIn'), })}
        onClick={() =>{
          modeHandler('SignIn') }}>
        {<ListItemIcon><PersonIcon className={classes.icon}/></ListItemIcon> }
        <ListItemText primary={'SignIn'} />
      </ListItem>
      <ListItem
        button
        component={Link}
        to={'/signup'}
        className={clsx(classes.ListItem,{
          [classes.selected]: (mode === 'Signup'), })}
        onClick={() =>{
          modeHandler('SignUp') }}>
        {<ListItemIcon><PersonAddIcon className={classes.icon}/></ListItemIcon> }
        <ListItemText primary={'SignIn'} />
      </ListItem>
  </List>  
)}
export { TabSelector }