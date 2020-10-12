import React, { useState } from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {  LocalizationProvider, DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({

}));

export default function DatePickerComponent(props) {
  const classes = useStyles();

  return (
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
  );
};

