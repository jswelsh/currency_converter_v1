import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper
} from '@material-ui/core';

export function ConvertViewCardTable({
	recentRateHistory,
	converted
}){

return(
	<TableContainer component={Paper}>
		<Table size="small" aria-label="a dense table">
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
				<TableRow key={'value'}>
					<TableCell component="th" scope="row">{'value'}</TableCell>
						{recentRateHistory && recentRateHistory.map((row) => {
							console.log('aphrodite',converted-row.value )
							return <TableCell align="right">{row.value}</TableCell>
						})}
				</TableRow>
			</TableBody>
		</Table>
	</TableContainer>
)}