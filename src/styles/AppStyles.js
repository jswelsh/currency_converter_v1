import { createMuiTheme } from '@material-ui/core'
import { deepPurple, pink, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
palette: {
primary: {
	main: teal[400],
	light:'#6dffe7'
},
secondary: {
	main: pink[200]
},
error: {
	main: '#D733E8'
},
warning:{
	main: '#E8AF05'
}
},
overrides: {

	MuiAlert:{
		outlinedWarning: {
			color: '#FFBF80'
		}
	},
MuiTouchRipple:{
	root:{
		color:'#c90349'
	}
},
MuiOutlinedInput: {
	root: {
		'&:hover':{
			backgroundColor:'#ff8aaf4f',
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
/* 	MuiListItemIcon:{
		root:{
			color:'#8CFFDA',
		}
	}, */
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