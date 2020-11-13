import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardContent,
	Typography,
	CardHeader,
	IconButton,
} from '@material-ui/core';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

const useStyles = makeStyles((theme) => ({

	card: {
		color:'#fff',
		borderRadius: 12,
		margin:'auto',
		minWidth:400,
		maxWidth:900,
/* 		marginLeft:100,
		marginRight:100, */

	},
	icon:{
		marginTop: 15,
		marginBottom:15,
		marginLeft: 10
	}
}));

export function ConvertViewIntroCard({
	opendrawer,
	currency,
	intro,
	data,
	avatar,
}){
const classes = useStyles();

return(
<Card className={classes.card,{
	[classes.drawerOpenIntro]: opendrawer,
	[classes.drawerCloseIntro]: !opendrawer}} >
	<CardHeader
		title={currency && data[currency]['name']}
		titleTypographyProps={{ align: 'left',variant: "h4" }}
		subheader={currency}
		subheaderTypographyProps={{ align: 'left'}}
		className={classes.cardHeader}
		avatar={avatar}
		action={
			
			<IconButton aria-label="settings" >
				<Typography variant="h4" color="secondary"className={classes.icon}>
					Flip 
				</Typography>
				<ThreeDRotationIcon fontSize='large'className={classes.icon}/>
			</IconButton>
		}/>
	<CardContent>
		<Typography variant="h6" color="primary">
			{intro}
		</Typography>
	</CardContent>
</Card>
)
}