import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper'
import {
  Grid, 
  Paper,
  ListItem,
  ListItemText,
} from '@material-ui/core';
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location

//based off of 
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  ListItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  Paper:{
    marginLeft: `${drawerWidth+30}px`,
    marginRight: theme.spacing(20)
  }
}));

const gridBuilder = (payload) => {
  return <Grid item xs={3}> {payload} </Grid>
}

export default function CompareListItem (props) {
  const classes = useStyles();
  const {
    primary, 
    currency
  } = props;

  return (
    <Grid>
      <Paper className={classes.Paper}>
        <ListItem className={classes.ListItem} >
          <Grid container spacing={1} direction="row" justify="space-around" >
            {gridBuilder(
              iconHandler('compare', props.currency)
            )}
            {gridBuilder(
              <ListItemText primary={currency} secondary={data[props.currency]['name']}/>
            )}
            {gridBuilder(
              <ListItemText primary={primary} />
            )}
          </Grid>
        </ListItem>
      </Paper>
    </Grid>

  )
}