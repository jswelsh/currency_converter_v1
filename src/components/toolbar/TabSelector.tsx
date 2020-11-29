import React, {FC} from 'react';
import { ITabSelectorProps } from '../types'
import { 
  List,
  SvgIcon,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  Link
} from "react-router-dom";

//import History from '@material-ui/icons/Timeline';
// import  {mdiFinance as History} from '@mdi/js';
import Converter from '@material-ui/icons/CompareArrows';
// import Converter from '@material-ui/icons/Transform';
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
      backgroundColor: '#f48fb1',}
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
        {<ListItemIcon>
          <SvgIcon className={classes.icon}>
            <path fill="currentColor" d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64" />
          </SvgIcon>
          </ListItemIcon> }
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
        <ListItemText primary={'signUp'} />
      </ListItem>
  </List>  
)}
export { TabSelector }