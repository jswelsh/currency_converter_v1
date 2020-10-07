import React, { useState } from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {  LocalizationProvider, DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(5),
  },
}));

export default function DatePickerComponent(props) {
  const classes = useStyles();
  const lastFourWeeks = function () {
    const day = new Date();
    const FourWeeksAgo = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 28).toISOString().split('T')[0];
    return FourWeeksAgo;
  };
  const [date, changeDate] = useState([ lastFourWeeks(), new Date()]);
  return (
    
    <LocalizationProvider dateAdapter={DayjsAdapter}>
      <DateRangePicker
        calendars={1}
        value={date}
        onChange={(newDate) => changeDate(newDate)}
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

