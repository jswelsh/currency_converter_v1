import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper'
import {
  Grid, 
  Paper,
  ListItem,
  ListItemText,
  ListItemIcon, 
} from '@material-ui/core';
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location



const useStyles = makeStyles((theme) => ({
  ListItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  Paper:{
    marginLeft: theme.spacing(40),
    marginRight: theme.spacing(40)
  }
}));

export default function CompareListItem (props) {
  const classes = useStyles();

  const {primary, currency} = props;

  return (
    <Grid>
      <Paper className={classes.Paper}>
        <ListItem className={classes.ListItem} >
          <Grid container spacing={1} direction="row" justify="space-around" >
            <Grid item xs={3}  >
              <ListItemIcon>
                {iconHandler(props.currency)}
              </ListItemIcon>
              </Grid>
              <Grid item xs={3}  >
              <ListItemText primary={currency} />
              </Grid> 
              <Grid item xs={3}  >
              <ListItemText primary={primary} secondary={data[props.currency]['name']}/>
              </Grid> 
            </Grid>
        </ListItem>
      </Paper>
    </Grid>

  )
}