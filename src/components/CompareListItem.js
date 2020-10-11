import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  ListItem,
  ListItemText,
  ListItemIcon, 
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  ListItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function CompareListItem (props) {
  const classes = useStyles();

  const {icon, primary, currency} = props;

  return (
    <ListItem className={classes.ListItem} >
      <ListItemText primary={currency} />
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={primary}/>
    </ListItem>
  )
}