import React from 'react';
import { ConvertViewCardTable } from './ConvertViewCardTable'
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper';
import {
	Card,
	Grid,
	CardHeader,
	CardContent,
} from '@material-ui/core';

export function ConvertViewBacksideCard({
	data,
	currency,
	recentRateHistory,
	avatar
}){

	console.log(recentRateHistory)
return(
<Card >
	<CardHeader
		title={currency && data[currency]['name']}
		titleTypographyProps={{ align: 'left',variant: "h4" }}
		subheader= {currency}
		subheaderTypographyProps={{ align: 'left'}}
		avatar={avatar}/>
	<CardContent>
		<Grid container justify="center">
			<Grid item >
			<ConvertViewCardTable
				recentRateHistory={recentRateHistory}
			/>
			</Grid>
		</Grid>
	</CardContent>
</Card>
)
}