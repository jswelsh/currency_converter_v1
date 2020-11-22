import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
palette: {
primary: {
	main: '#8CFFDA'
},
secondary: {
	main: '#8CFFDA'
},
error: {
	main: '#fd5c91'
},
action: {
	
	},
},
overrides: {

MuiTouchRipple:{
	root:{
		color:'#0df2c8ff'
	}
},
MuiOutlinedInput:{
	root:{
		'&:hover':{
			backgroundColor:'#0df2c829',

		},

	},
	notchedOutline :{
		borderColor:'#8CFFDA',

	},


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
MuiCardContent:{
	root:{
		alignItems:'center'
	}
},
MuiPaper:{
	root:{
		backgroundColor:'#222222'
	},
	
},


MuiTableCell:{
	head:{
		color:'#fff',
		fontSize:20
	},
	body:{
		color:'#fff',
		fontSize:20
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