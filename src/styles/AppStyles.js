import { createMuiTheme } from '@material-ui/core'
import {  grey,  } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: /* grey[900] */'#fff'
    },
    secondary: {
      main: '#8CFFDA'
    },
    action: {
      
      },
  },
  overrides: {

    MuiTouchRipple:{
      root:{
        color:'#1dd7a6'
      }
    },
    MuiToolbar:{
      root:{
        backgroundColor:'#212121'
      }
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
  
    MuiPickersArrowSwitcher:{
      iconButton:{
        backgroundColor:'transparent'
      }
    },
    MuiSvgIcon: {
      root:{
        color:'#8CFFDA',
  /*       height:'35px',
        width:'35px' */
      }
    },
    MuiPickersCalendar:{
      weekDayLabel:{
        color:'#8CFFDA',
        fontSize:'large'
      },
    }, 
    MuiTypography: {
      root: {
        color:'#fff'
      }
    },
    MuiPickersDay:{
      root:{
        /* color:'#69e8ea' */
        color:'#fff'
      }
    },
    MuiPickersStaticWrapper:{
      root:{
        backgroundColor:'#222222'
      }
    },
    MuiPickersDateRangeDay:{
      rangeIntervalDayHighlight: {
        backgroundColor:'#488a74',
        color:'black'
      }  
    },
  },
}
)

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