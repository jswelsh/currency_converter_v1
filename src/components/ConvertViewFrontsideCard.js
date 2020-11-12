import React from 'react';
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
		minHeight:250,

	},
}));

export function ConvertViewFrontsideCard({
	data,
	amount,
	currency,
	avatar
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
			avatar={avatar}/>
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
