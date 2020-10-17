import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper'
import {
  Grid, 
  Paper,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location

//based off of 
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  ListItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color:'#fff',
    backgroundColor: '#212121'
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
  const CurrencySymbol = (currency) => {
    return (
      <Typography color={'secondary'}>{data[currency]['symbol_native']} </Typography>
    )
  }

  return (
    <Grid>
      <Paper className={classes.Paper}>
        <ListItem className={classes.ListItem} >
          <Grid container spacing={1} direction="row" justify="space-around" >
            {gridBuilder(
              iconHandler('compare', currency)
            )}
            {gridBuilder(
              <ListItemText 
                primary={currency} 
               /*  primaryTypographyProps={{color:'secondary'}} */
                secondary={data[currency]['name']}
                secondaryTypographyProps={{color:'#fff'}}/>
            )}
            {/* {gridBuilder(
              <ListItemText 
                primary={
                  data[currency]['symbol_native']
                  +primary} />
            )} */}
            {gridBuilder(
              <ListItem >
                {CurrencySymbol(currency)}
                <ListItemText primary={primary} />
              </ListItem>
            )}
          </Grid>
        </ListItem>
      </Paper>
    </Grid>

  )
}