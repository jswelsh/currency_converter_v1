import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	Grid,
	Typography,
	CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

	card: {
		color:'#fff',
		borderRadius: 12,
		margin:'auto',
		minWidth:400,
		maxWidth:900
	},
}));

export function ConvertViewHistoryCard({
	recentRateHistory
}){
const classes = useStyles();

return(
<Card className={classes.card} >
	<Grid container >
		<Grid item spacing={1}  >
			<CardContent>
				{recentRateHistory && recentRateHistory.map(dayRate => {
					return ( 
						<Typography variant="h7" color="primary">
							{ dayRate.value }, days ago{ dayRate.daysAgo }
						</Typography>)
					})
				}
			</CardContent>
		</Grid>
	</Grid>
</Card>
)
}
