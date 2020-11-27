import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IConvertViewIntroCardProps } from './../types'
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
    color: 'white',
    marginTop: 15,
    marginBottom:15,
    marginLeft: 10
  }
}));

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
        <Typography variant="h4" className={classes.icon}>
          Flip 
        </Typography>
        <ThreeDRotationIcon fontSize='large'className={classes.icon}/>
      </IconButton>
    }/>
  <CardContent>
    <Typography variant="h6">
      {intro}
    </Typography>
  </CardContent>
</Card>
)}

export {ConvertViewIntroCard}