import { createMuiTheme } from '@material-ui/core'
import { deepPurple, pink, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
palette: {
primary: {
	main: teal[400],
	light:'#33ffbd',
	dark:'#00b279'
},
secondary: {
	main: pink[200],
	light: '#e385bb',
	dark:'#9a4877'
},
error: {
	main: '#f44336',
	light:'#e57373',
	dark:'#d32f2f'
},
warning:{
	main: pink[200]/* '#FFBF80' *//* E8AF05 */
}
},
overrides: {

MuiTouchRipple:{
	root:{
		color:'#c90349'
	}
},
MuiOutlinedInput: {
	root: {
		'&:hover':{
			/* backgroundColor:'#f48fb1', */
			backgroundColor:'#f490b154',
		},
		'&$focused':{
			backgroundColor:'#0df2c829',
		},

	},
	notchedOutline: {
		borderColor:'#8CFFDA',
	},
},

MuiToolbar:{
	root: {
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
MuiInputBase:{
	root:{
		color: '#fff'
	}
},
MuiFormLabel:{
	root:{
		color: '#fff'
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
/*
MuiMenuItem: {
	root: {
		color:'#fff'
	},
},
 */
/* MuiInputLabel:{
	root:{
		color:'#8CFFDA'
	}
},
*/

	MuiPickersArrowSwitcher:{
		iconButton:{
			backgroundColor:'transparent'
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