import React, { useState } from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';

import TextField from '@material-ui/core/TextField';
import { 
  Grid, 
  Popover, 
  Button, 
  Typography,
  FormControl, 
  ListItem, 
  ListItemIcon, 
  ListItemText  
} from "@material-ui/core";
import {  DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";
import { LocalizationProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import CalendarIcon from '@material-ui/icons/CalendarToday';

import TEST from "./TESTcalendarComponent"

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(3),
  },
  typography: {
    padding: theme.spacing(1),
  },

}));


export default function CalendarComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const lastFourWeeks = function () {
    const day = new Date();
    const FourWeeksAgo = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 28).toISOString().split('T')[0];
    return FourWeeksAgo;
  };
  /* const [date, changeDate] = useState(new Date()); */
  const [value, setValue] = useState([lastFourWeeks(),new Date()]);
  const today = new Date();
//const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
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
        <ListItemText primary={'Exchange'} />
      </ListItem>
    </FormControl>






    
 {/*      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Date Range
      </Button> */}
      <Popover
        classes={{
          paper: classes.paper,
        }} 
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
          <>
            <Typography className={classes.typography}>To view the exchange history of "Foo" and "Bar", choose a date range.</Typography>
          </>
        <TEST />
      </Popover>
    </>
  );
};

