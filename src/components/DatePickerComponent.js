import React from "react";
import DayjsAdapter from '@material-ui/pickers/adapter/dayjs';
import TextField from '@material-ui/core/TextField';
import { LocalizationProvider, StaticDateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';


export default function DatePickerComponent(props) {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider 
      dateAdapter={DayjsAdapter}
      >
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
    </LocalizationProvider>
  );
};
