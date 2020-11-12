import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	Grid,
	CardContent,
	Typography,
	CardHeader,
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

export function ConvertViewIntroCard({ 
	currency,	
	intro,
	data,
	avatar
}){
const classes = useStyles();

return(
<Card className={classes.card} >
	<CardHeader
		title={currency && data[currency]['name']}
		titleTypographyProps={{ align: 'left',variant: "h4" }}
		subheader={currency}
		subheaderTypographyProps={{ align: 'left'}}
		className={classes.cardHeader}
		avatar={avatar}/>
{/* 	<Grid container >
		<Grid item spacing={1}  > */}
			<CardContent>
				<Typography variant="h7" color="primary">
					{intro}
				</Typography>
			</CardContent>
{/* 		</Grid>
	</Grid> */}
</Card>
)
}
