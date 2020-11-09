import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
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
    },
    MuiInputLabel:{
      root:{
        color:'#8CFFDA'
      }
    },
    MuiCardHeader:{
      root:{
        background:'#009868',
        align: 'left'
      },
      subheader:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold',
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