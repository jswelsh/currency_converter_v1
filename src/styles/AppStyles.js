import { createMuiTheme } from '@material-ui/core'
import {  grey,  } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: '#8CFFDA'
    },
    action: {
      
      },
  },
  overrides: {

    MuiList: {
      root: {
        
      },
    },
    MuiSelect: {
      root: {
        color:'#fff'
      },
    },
    MuiPaper:{
      root:{
        backgroundColor:'#222222'
      }
    },
    MuiMenuItem: {
      root: {
        color:'#fff'
      },
    },
    MuiInputBase:{
      root:{
        color:'#fff'
      }
    },MuiInputLabel:{
      root:{
        color:'#8CFFDA'
      }
    },
    MuiFormLabel:{
      root:{
        color:'red'
      }
    },
    MuiSvgIcon: {
      root:{
        color:'#8CFFDA'
      }
    },
    MuiTypography: {
      root: {
        color:'#fff'
      }
    },
    MuiPopover:{
      paper:{
      }
    },
    MuiPickersPopper:{
      paper:{
        background:'#707070'
      }
    },
    MuiPickersDateRangeDay:{
      rangeIntervalDayHighlight: {
        backgroundColor:'#8CFFDA',
        color:'#000',
      
      },
      dayInsideRangeInterval:{
        color:'#000'
      }
    },
    MuiFormHelperText:{
      root: {
        color:'#fff',
    },
  },
}
})

export default theme;

/* MuiPickersDateRangeDay-rangeIntervalPreview

MuiButtonBase-root MuiPickersDay-root 
MuiPickersDateRangeDay-day 
Mui-selected
ackground-color
MuiPickersDateRangeDay-root 
MuiPickersDateRangeDay-rangeIntervalDayHighlight

MuiPickersDateRangeDay-root 
MuiPickersDateRangeDay-rangeIntervalDayHighlightEnd 
MuiPickersDateRangeDay-rangeIntervalDayHighlight */