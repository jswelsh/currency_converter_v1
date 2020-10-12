import React, { useState } from "react";
import { 
  Popover,  
  Paper,
  Typography,
  FormControl, 
  ListItem, 
  ListItemIcon, 
  ListItemText  
} from "@material-ui/core";
import CalendarIcon from '@material-ui/icons/CalendarToday';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

/* import DatePickerComponent from "./DatePickerComponent" */
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import {  LocalizationProvider, DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  Paper:{
    padding:theme.spacing(1),
  }
}));

export default function ExchangeHistoryPopOver(props) {
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

  return (
    <>
      {/* <Paper className={classes.Paper}> */}
      <FormControl>
        <ListItem
          button
          onClick={handleClick}
        >
          <ListItemIcon>
            <CalendarIcon />
          </ListItemIcon>
          <ListItemText primary={'Date Range'} />
        </ListItem>
      </FormControl>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography >To view the exchange history of {props.fromCurrency} to {props.toCurrency}, choose a date range.</Typography>
     {/*      <DatePickerComponent 
            dateRange={props.dateRange}
            handleChange={props.handleChange}
          /> */}
          <LocalizationProvider 
                dateAdapter={DayjsAdapter}
                >
                <DateRangePicker
                  calendars={1}
                  value={props.dateRange}
                  onChange={props.handleChange}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment >
                      <TextField label='From' {...startProps}/>
                      <DateRangeDelimiter> to </DateRangeDelimiter>
                      <TextField label='To'{...endProps}/>
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>

        </Popover> 
        {/* </Paper> */}
      </>
  );
}

