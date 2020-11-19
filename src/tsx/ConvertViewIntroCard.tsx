import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardContent,
	Typography,
	CardHeader,
	IconButton,
} from '@material-ui/core';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

const useStyles = makeStyles(() => ({

	card: {
		borderRadius: 12,
		margin:'auto',
		minWidth:400,
		maxWidth:900
	},
	icon:{
		marginTop: 15,
		marginBottom:15,
		marginLeft: 10
	}
}));

interface IConvertViewIntroCardProps {
	avatar: Object
	title: string
	currency: string
	intro: string

}

const ConvertViewIntroCard: FC <IConvertViewIntroCardProps> = ({ 
	avatar,
	title,
	currency,	
	intro,
}) => {
const classes = useStyles();

return(
<Card className={classes.card} >
	<CardHeader
		title={currency && title}
		titleTypographyProps={{ align: 'left',variant: "h4" }}
		subheader={currency}
		subheaderTypographyProps={{ align: 'left'}}
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

export {ConvertViewIntroCard}