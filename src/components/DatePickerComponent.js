import React from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import TextField from '@material-ui/core/TextField';
import { LocalizationProvider, StaticDateRangePicker, DateRangeDelimiter } from "@material-ui/pickers";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';


export function DatePickerComponent(props) {
  const handleChange = (event) => {
    console.log("11111", event)
    //error check that both start and end date have been selected
    if(event[1] !== null){
      const dateRange = event
      props.handleChange(dateRange) }
  }
  return (
    <LocalizationProvider 
      dateAdapter={DayjsAdapter}  
      >
      <StaticDateRangePicker
        leftArrowIcon={<ArrowBackIos fontSize='large'/>}
        rightArrowIcon={<ArrowForwardIos fontSize='large'/>}
        displayStaticWrapperAs="desktop"
        value={props.dateRange}
        onChange={handleChange}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};
