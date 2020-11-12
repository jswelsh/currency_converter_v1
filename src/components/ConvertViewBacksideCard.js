import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper';
import {
	Card,
	Grid,
	Typography,
	CardHeader,
	CardContent,
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';


const useStyles = makeStyles((theme) => ({
	card: {
		color:'#fff',
		borderRadius: 12,
		margin:'auto',
		minWidth:400,
	cardHeader: {
		backgroundColor:'secondary'},
	avatar: {
		width: 60,
		height: 60,
		margin: 'auto',
	},
	heading: {
		fontSize: 18,
		fontWeight: 'bold',
		letterSpacing: '0.5px',
		marginTop: 8,
		marginBottom: 0,
	},
}
}));


const columns = [
	{ field: 'yesterday', headerName: 'Yesterday', width: 130 },
	{ field: 'weekAgo', headerName: 'Week Ago', width: 130 },
	{ field: 'twoWeeksAgo', headerName: 'Two Weeks Ago', width: 130 },
	{ field: 'threeWeeksAgo', headerName: 'Three Weeks Ago', width: 130 },
]
const rowConstructor = (row) => {
	const {row1,row2,row3,row4} = row
	console.log('row',row1,row2,row3,row4)
	const columnHeader =['yesterday', 'weekAgo', 'twoWeeksAgo', 'threeWeeksAgo']
	
}

export function ConvertViewBacksideCard({
	data,
	currency,
	recentRateHistory
}){
const classes = useStyles();

return(
<Card className={classes.card} >
	<CardHeader
		title={currency && data[currency]['name']}
		titleTypographyProps={{ align: 'left',variant: "h4" }}
		subheader= {currency}
		subheaderTypographyProps={{ align: 'left'}}
		className={classes.cardHeader}
		avatar={ iconHandler('converter', currency)}/>
	<CardContent>
		<Grid container justify="center">
			<Grid item >
				{rowConstructor(recentRateHistory)}
				{/* <DataGrid rows={rowConstructor(recentRateHistory)} columns={columns} pageSize={5}/>	 */}
			</Grid>
		</Grid>
	</CardContent>
</Card>
)
}

						{/* <DataGrid rows={rows} columns={columns} pageSize={5}/> */}
