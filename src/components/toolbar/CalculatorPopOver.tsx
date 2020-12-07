import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Popover,  
  FormControl, 
  ListItem, 
  SvgIcon,
  ListItemIcon, 
  ListItemText  
} from "@material-ui/core";
import { Calculator } from './Calculator'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  },
  header: {
    textAlign: 'center',
    padding: theme.spacing(4)},
  pop:{
    padding:theme.spacing(4)}}));

const CalculatorPopOver = () => {
    
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  /* 
    need to changed the type for this at some point
  */

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);};
  const handleClose = () => {
    setAnchorEl(null);};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
  <>
    <FormControl>
      <ListItem
        button
        onClick={handleClick}>
        {<ListItemIcon>
          <SvgIcon className={classes.icon}>
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z"/>
          </SvgIcon>
          </ListItemIcon> }
      <ListItemText 
        primary={'Calculator'} />
      </ListItem>
    </FormControl>
    <Popover 
      className={classes.pop}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',}}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',}}>
      <Calculator />
    </Popover> 
  </>
  );
}

export { CalculatorPopOver }