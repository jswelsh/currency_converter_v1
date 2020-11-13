import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography
} from '@material-ui/core';

export function ConvertViewCardTable({
	recentRateHistory,
	converted
}){

	const cellConstructor = (value) => {
	//styling the delta of previous days to being green +, white =, red -
		const delta = (value > 0) ? 
		<Typography color={'secondary'}>{'+'+value+'%'}</Typography> :  (value < 0) ?
		<Typography color={'error'}>{value+'%'}</Typography> :
		<Typography color={'primary'}>{value+'%'}</Typography>  
		return delta
	}
return(
	<TableContainer component={Paper}>
		<Table size="small" aria-label="a dense table">
			<TableHead>
				<TableRow key={'date'}>
					<TableCell component="th" scope="column">{'date'}</TableCell>
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
				<TableRow key={'delta'}>
					<TableCell component="th" scope="row">{'the ∆'}</TableCell>
						{recentRateHistory && recentRateHistory.map((row) => {
							return (
							<TableCell align="right">
								{cellConstructor(((parseFloat(row.value) - parseFloat(converted))/converted*100).toFixed(3))}
							</TableCell>)
						})}
				</TableRow>
			</TableBody>
		</Table>
	</TableContainer>
)}