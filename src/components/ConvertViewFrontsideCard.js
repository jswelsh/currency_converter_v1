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

const useStyles = makeStyles((theme) => ({
  card: {
    color:'#fff',
    borderRadius: 12,
    margin:'auto',
		minWidth:600,
		//minHeight:300,
		
		cardHeader: {
			backgroundColor:'secondary'
		},
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
		}
	},
}));

export function ConvertViewFrontsideCard({
	data,
	amount,
	currency
}){
const classes = useStyles();

return(
<Grid item spacing={3} key={currency} sm={12} md={12} lg={6}>
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
					<Typography component="h2" variant="h2" color="secondary">
						{currency && data[currency]['symbol_native'] }
					</Typography>
				</Grid>
				<Grid item >
					<Typography variant="h2" color="primary">
						{amount}
					</Typography>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
</Grid>
)
}
