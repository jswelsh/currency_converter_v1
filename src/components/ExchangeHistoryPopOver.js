import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { 
  Popover,  
  Typography,
  FormControl, 
  ListItem, 
  ListItemIcon, 
  ListItemText  
} from "@material-ui/core";

import CalendarIcon from '@material-ui/icons/CalendarToday';
import DatePickerComponent from "./DatePickerComponent";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    padding: theme.spacing(4)
  },
  pop:{
    padding:theme.spacing(4)
  }
}));

export default function ExchangeHistoryPopOver(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <FormControl>
        <ListItem
          button
          onClick={handleClick}
        >
          <ListItemIcon>
            <CalendarIcon />
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
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          {/* <Typography variant={'h6'} className={classes.header}>
            To view the exchange history of {
            props.fromCurrency} to {
            props.toCurrency}, choose a date range.
            </Typography> */}
            
          <DatePickerComponent 
            dateRange={props.dateRange}
            handleChange={props.handleChange}
          />
        </Popover> 
      </>
  );
}

