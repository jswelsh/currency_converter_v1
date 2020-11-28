import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IConvertViewCardFrontsideProps } from '../types'
import {
  Card,
  Grid,
  Typography,
  CardHeader,
  CardContent,
  IconButton
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
    color: 'white',
    marginTop: 15,
    marginBottom:15,
    marginLeft: 10
  }
}));

const ConvertViewCardFrontside: FC<IConvertViewCardFrontsideProps> = ({
  currency,
  symbol,
  amount,
  avatar,
  title,
}) => {

const classes = useStyles();
return(
  <Grid item spacing={3} key={currency} sm={12} md={12} lg={6}>
    <Card className={classes.card} >
      <CardHeader
        title={title}
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
        <Grid container justify="center"  style={{marginTop:40}}>
          <Grid item >
            <Typography component="h2" variant="h2" color="primary">
              {symbol }
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="h2">
              {amount}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
)}

export {ConvertViewCardFrontside}