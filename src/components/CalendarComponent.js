import React, { useState } from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';

import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {  DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";
import { LocalizationProvider } from '@material-ui/pickers';

export default function CalendarComponent(props) {
  const lastFourWeeks = function () {
    const day = new Date();
    const FourWeeksAgo = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 28).toISOString().split('T')[0];
    return FourWeeksAgo;
  };
  /* const [date, changeDate] = useState(new Date()); */
  const [value, setValue] = useState([new Date(), lastFourWeeks()]);
  const today = new Date();
//const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  return (
    
    <LocalizationProvider dateAdapter={DayjsAdapter}>
{/*       <Grid container direction="column" alignItems="center"> */}
      <Grid item xs={10} spacing={4} >
      <DateRangePicker
        calendars={1}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment >
            <Grid container direction="column" alignItems="center">
            <TextField label='From' {...startProps}/>
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField label='To'{...endProps}/>
            </Grid>
          </React.Fragment>
        )}
      />
      </Grid>
{/*       </Grid> */}
    </LocalizationProvider>
  );
};

