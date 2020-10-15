import React from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import TextField from '@material-ui/core/TextField';
import {  LocalizationProvider, DateRangePicker, DateRangeDelimiter } from "@material-ui/pickers";

export default function DatePickerComponent(props) {

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

