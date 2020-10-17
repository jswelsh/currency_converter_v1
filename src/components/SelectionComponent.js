import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Select, 
  MenuItem, 
  ListItem,
  ListItemIcon, 
} from '@material-ui/core';
import { handleChange } from '../helpers/selectionHelper'
import { iconHandler } from '../helpers/compareHelper'

const useStyles = makeStyles((theme) => ({
  MenuItem: {
    padding: theme.spacing(1),
    alignItems:'flex-start',
    textAlign: 'center',
    backgroundColor:'#8CFFDA'
    /* color: 'red' */
  },
  selector:{
    color: '#8CFFDA',
  
    "&:before":{ 
      backgroundColor:'red'
    }
}
}));

const iconComponent = () => {
  return (
    <ExpandMoreIcon color='secondary' />
  )};
  
  
export default function SelectionComponent (props) {
  const { 
    icon, 
    name, 
    value, 
    setter, 
    currenciesList
  } = props;
  
  const classes = useStyles();

  return (
    <ListItem
    backgroundColor='red'
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <Select className={classes.selector}
           

        disableUnderline
        name={name}
        IconComponent={iconComponent}
        value={value}
        onChange={(event) => handleChange(event, setter)}
      >
        {currenciesList.map(currency => (
          <MenuItem className={classes.MenuItem, classes.selector}
            key={currency} 
            value={currency}
          >
            <ListItemIcon>
              {iconHandler('selection', currency)}
            </ListItemIcon>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </ListItem>
  )
}