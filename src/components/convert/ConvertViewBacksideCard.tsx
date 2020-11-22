import React, {FC} from 'react';
import { ConvertViewCardTable } from './ConvertViewCardTable'
import { makeStyles } from '@material-ui/core/styles';
import { IConvertViewBacksideCardProps } from './../types'
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  IconButton,
  Typography
} from '@material-ui/core';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

const useStyles = makeStyles(() => ({
  card: {
    color:'#fff',
    borderRadius: 12,
    margin:'auto',
    minWidth:600,
    minHeight:296,
  },
  icon:{
    marginTop: 15,
    marginBottom:15,
    marginLeft: 10
  }
}));

const ConvertViewBacksideCard: FC<IConvertViewBacksideCardProps> = ({
  recentRateHistory,
  converted,
  currency,
  avatar,
  name,
}) => {
const classes = useStyles();

return(
<Card className={classes.card}>
  <CardHeader
    title={currency && name}
    titleTypographyProps={{ align: 'left',variant: "h4" }}
    subheader= {currency}
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
    <Grid container justify="center" >
      <Grid item >
      <ConvertViewCardTable
        recentRateHistory={recentRateHistory}
        converted={converted}
      />
      </Grid>
    </Grid>
  </CardContent>
</Card>
)
}

export {ConvertViewBacksideCard}