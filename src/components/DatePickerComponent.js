import React from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import TextField from '@material-ui/core/TextField';
/* import {  LocalizationProvider, DateRangePicker, DateRangeDelimiter } from "@material-ui/pickers"; */
import { LocalizationProvider, StaticDateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';


export default function DatePickerComponent(props) {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider 
      dateAdapter={DayjsAdapter}
      >
        <React.Fragment>
      <StaticDateRangePicker
      leftArrowIcon={<ArrowBackIos fontSize='large'/>}
      rightArrowIcon={<ArrowForwardIos fontSize='large'/>}
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
{/*       <StaticDateRangePicker
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      /> */}
    </React.Fragment>
{/*       <DateRangePicker
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
      /> */}
  {/*    <DateRangePicker
        startText='Start Date'
        endText='End Date'
        value={props.dateRange}
        onChange={props.handleChange}
        renderInput={(startProps, endProps) => (
          <React.Fragment >
            <TextField {...startProps}/>
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps}/>
          </React.Fragment>
        )}
      /> */}

    </LocalizationProvider>
  );
};

/* 

import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { StaticDateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";

export default function StaticDateRangePickerExample() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <React.Fragment>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
      <StaticDateRangePicker
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
}

*/