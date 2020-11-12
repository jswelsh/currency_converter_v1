import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper';
import {
	Card,
	Grid,
	CardHeader,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper
} from '@material-ui/core';

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
	paper: {
		color: '#fff'
	}
}
}));


const columnHeaders =['yesterday', 'week Ago', 'two Weeks Ago', 'three Weeks Ago']

export function ConvertViewBacksideCard({
	data,
	currency,
	recentRateHistory
}){
const classes = useStyles();

	console.log(recentRateHistory)
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
				<TableContainer component={Paper}>
					<Table className={classes.table} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow key={'daysAgo'}>
								<TableCell component="th" scope="column">{'Days Ago'}</TableCell>
									{recentRateHistory && recentRateHistory.map((column) => {
										return <TableCell align="right">{column.date}</TableCell>
									})}
						</TableRow>
					</TableHead>
					<TableBody>
							<TableRow key={'value'}>
								<TableCell component="th" scope="row">{'value'}</TableCell>
									{recentRateHistory && recentRateHistory.map((row) => {
										return <TableCell align="right">{row.value}</TableCell>
									})}
							</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			</Grid>
		</Grid>
	</CardContent>
</Card>
)
}