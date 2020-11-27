import React, { FC,useState } from "react";
import { IExchangeHistoryPopOverProps } from '../types'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Popover,  
  FormControl, 
  ListItem, 
  ListItemIcon, 
  ListItemText  
} from "@material-ui/core";

import CalendarIcon from '@material-ui/icons/CalendarToday';
import { DatePickerComponent } from "./DatePickerComponent";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  },
  header: {
    textAlign: 'center',
    padding: theme.spacing(4)},
  pop:{
    padding:theme.spacing(4)}}));

 const ExchangeHistoryPopOver: FC<IExchangeHistoryPopOverProps> = ({
  dateRange,
  handleChange}) => {
    
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
        <ListItemIcon>
          <CalendarIcon className={classes.icon} />
        </ListItemIcon>
      <ListItemText 
        primary={'Date Range'} />
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
      <DatePickerComponent 
        dateRange={dateRange}
        handleChange={handleChange}/>
    </Popover> 
  </>
  );
}

export { ExchangeHistoryPopOver }